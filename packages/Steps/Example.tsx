import React, { useState } from "react";
import Steps from ".";
import Button from "../Button";
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import Link from "../Link";

// API 文档配置
const stepsProps = [
  { name: 'data', type: <><Link anchor='StepItemType-API'>StepItemType</Link>[]</>, desc: '步骤数据，包含所有步骤项的配置信息' },
  { name: 'current', type: 'number | string', desc: '当前步骤' },
  { name: 'finished', type: '(number | string)[]', desc: '已完成的步骤数组' },
  { name: 'direction', type: 'StepsDirection (horizontal | vertical)', desc: '步骤条方向', default: 'horizontal' },
  { name: 'useDivider', type: 'boolean', desc: '是否使用分割线', default: 'false' },
  { name: 'dividerWidth', type: 'string', desc: '分割线宽度', default: '1px' },
  { name: 'onClick', type: <>(item: <Link anchor='StepItemType-API'>StepItemType</Link>){' =>'} void</>, desc: '步骤点击事件回调' },
  { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
  { name: 'className', type: 'string', desc: '自定义类名' },
];

const stepsTypes = [

  {
    name: "StepItemType",
    data: [
      { name: "key", type: "number | string", desc: "步骤唯一标识" },
      { name: "title", type: "string", desc: "步骤标题" },
      { name: "desc", type: "string", desc: "步骤描述" },
      { name: "finished", type: "boolean", desc: "步骤是否已完成" },
    ],
  },
];

  export default function StepsExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [currentStep, setCurrentStep] = useState<number | string>(1);
  const [finishedSteps, setFinishedSteps] = useState<(number | string)[]>([1]);

  // 使用data中的finished字段的示例数据
  const stepsDataWithFinished = [
    { key: 1, title: '步骤1', desc: '这是第一个步骤的描述文字', finished: true },
    { key: 2, title: '步骤2', desc: '这是第二个步骤的描述文字', finished: false },
    { key: 3, title: '步骤3', desc: '这是第三个步骤的描述文字', finished: true },
    { key: 4, title: '步骤4', desc: '这是第四个步骤的描述文字', finished: false }
  ];

  // 传统方式的数据（使用全局finished数组）
  const stepsData = [
    { key: 1, title: '步骤1', desc: '这是第一个步骤的描述文字' },
    { key: 2, title: '步骤2', desc: '这是第二个步骤的描述文字' },
    { key: 3, title: '步骤3', desc: '这是第三个步骤的描述文字' },
    { key: 4, title: '步骤4', desc: '这是第四个步骤的描述文字' }
  ];

  const handleStepClick = (item: any) => {
    setCurrentStep(item.key);

    // 自动标记之前的步骤为已完成
    const newFinished = stepsData
      .filter(step => step.key < item.key)
      .map(step => step.key);
    setFinishedSteps(newFinished);
  };

  const handleNext = () => {
    const currentIndex = stepsData.findIndex(step => step.key === currentStep);
    if (currentIndex < stepsData.length - 1) {
      const nextStep = stepsData[currentIndex + 1];
      handleStepClick(nextStep);
    }
  };

  const handlePrev = () => {
    const currentIndex = stepsData.findIndex(step => step.key === currentStep);
    if (currentIndex > 0) {
      const prevStep = stepsData[currentIndex - 1];
      handleStepClick(prevStep);
    }
  };

  const handleFinish = () => {
    setFinishedSteps(stepsData.map(step => step.key));
    setCurrentStep(stepsData[stepsData.length - 1].key);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setFinishedSteps([]);
  };

  return (
    <ComponentContentLayout
      zh='步骤条'
      en='Steps'
      desc='LandDesign 的步骤条组件，用于显示流程步骤。支持水平、垂直布局，自定义样式，步骤状态管理等功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className='flex flex-col gap-24'>
          {/* 使用data中finished字段的步骤条 */}
          <ComponentSectionLayout
            title='使用data中finished字段的步骤条'
            id='steps-data-finished'
            description='这个示例中，步骤1和步骤3在data中设置了finished: true，所以显示为已完成状态。步骤2和步骤4设置了finished: false，所以显示为未完成状态。'
          >
            <CodeOperationContainer>
              <Steps
                data={stepsDataWithFinished}
                current={currentStep}
                onClick={(item) => setCurrentStep(item.key)}
                // 注意：当data中有finished字段时，全局finished数组会被忽略
                finished={finishedSteps}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 传统方式（使用全局finished数组） */}
          <ComponentSectionLayout
            title='传统方式（使用全局finished数组）'
            id='steps-global-finished'
            description='使用全局 finished 数组来控制步骤的完成状态。'
          >
            <CodeOperationContainer>
              <Steps
                data={stepsData}
                current={currentStep}
                onClick={handleStepClick}
                finished={finishedSteps}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 垂直布局示例 */}
          <ComponentSectionLayout
            title='垂直布局示例'
            id='steps-vertical'
            description='通过 direction="vertical" 可以创建垂直布局的步骤条。'
          >
            <CodeOperationContainer>
              <Steps
                data={stepsDataWithFinished}
                current={currentStep}
                onClick={(item) => setCurrentStep(item.key)}
                direction="vertical"
                useDivider={true}
                dividerWidth="24px"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义样式 */}
          <ComponentSectionLayout
            title='自定义样式'
            id='steps-custom-style'
            description='可以通过 style 属性自定义步骤条的样式。'
          >
            <CodeOperationContainer>
              <div className='overflow-auto scrollbar-none'>
                <Steps
                  data={stepsDataWithFinished}
                  current={currentStep}
                  onClick={(item) => setCurrentStep(item.key)}
                  style={{
                    '--land-steps-gap': '24px',
                    '--land-steps-num-width': '24px',
                    '--land-steps-num-height': '24px',
                    '--land-steps-num-font-size': '14px',
                    '--land-steps-title-font-size': '16px',
                    '--land-steps-desc-font-size': '14px',
                  } as React.CSSProperties}
                  className="custom-steps"
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
          <div className='flex gap-12 justify-center'>
                <Button
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                  className="btn btn-primary"
                >
                  上一步
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={currentStep === stepsData.length}
                  className="btn btn-primary"
                >
                  下一步
                </Button>
                <Button
                  onClick={handleFinish}
                  className="btn btn-success"
                >
                  完成所有
                </Button>
                <Button
                  onClick={handleReset}
                  className="btn btn-secondary"
                >
                  重置
                </Button>
              </div>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={stepsProps} />
          {stepsTypes?.map(i => <div key={i.name} className='flex flex-col gap-12' id={`${i.name}-API`}>
            <h3 className='text-sm font-bold'>{i.name}</h3>
            <ComponentPropsTable props={i.data as any} />
          </div>)}
        </div>
      )}
    </ComponentContentLayout>
  )
}
