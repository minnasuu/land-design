import { useState } from 'react';
import Steps from '.';
import { StepItem } from './props';
import Button from '../Button';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import Link from '../Link';

const StepItemLink = <Link anchor="StepItem-API">StepItem</Link>;

const stepsProps = [
  { name: 'items', type: <>{StepItemLink}[]</>, desc: '步骤数据' },
  { name: 'current', type: 'number | string', desc: '当前步骤的 key' },
  { name: 'finished', type: '(number | string)[]', desc: '已完成步骤的 key 数组' },
  { name: 'direction', type: '"horizontal" | "vertical"', default: '"horizontal"', desc: '排列方向' },
  { name: 'useDivider', type: 'boolean', default: 'true', desc: '是否显示分割线' },
  { name: 'dividerWidth', type: 'string', default: '"32px"', desc: '分割线宽度' },
  { name: 'onClick', type: <>(item: {StepItemLink}){' =>'} void</>, desc: '步骤点击回调' },
  { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
  { name: 'className', type: 'string', desc: '自定义类名' },
];

const stepsTypes = [
  {
    name: 'StepItem',
    data: [
      { name: 'key', type: 'number | string', desc: '唯一标识' },
      { name: 'title', type: 'string', desc: '步骤标题' },
      { name: 'desc', type: 'string', desc: '步骤描述' },
      { name: 'finished', type: 'boolean', desc: '是否已完成（优先级高于全局 finished）' },
    ],
  },
];

export default function StepsExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [currentStep, setCurrentStep] = useState<number | string>(1);
  const [finishedSteps, setFinishedSteps] = useState<(number | string)[]>([1]);

  const stepsDataWithFinished: StepItem[] = [
    { key: 1, title: '步骤1', desc: '这是第一个步骤的描述文字', finished: true },
    { key: 2, title: '步骤2', desc: '这是第二个步骤的描述文字', finished: false },
    { key: 3, title: '步骤3', desc: '这是第三个步骤的描述文字', finished: true },
    { key: 4, title: '步骤4', desc: '这是第四个步骤的描述文字', finished: false },
  ];

  const stepsData: StepItem[] = [
    { key: 1, title: '步骤1', desc: '这是第一个步骤的描述文字' },
    { key: 2, title: '步骤2', desc: '这是第二个步骤的描述文字' },
    { key: 3, title: '步骤3', desc: '这是第三个步骤的描述文字' },
    { key: 4, title: '步骤4', desc: '这是第四个步骤的描述文字' },
  ];

  const handleStepClick = (item: StepItem) => {
    setCurrentStep(item.key);
    const newFinished = stepsData
      .filter((step) => step.key < item.key)
      .map((step) => step.key);
    setFinishedSteps(newFinished);
  };

  const handleNext = () => {
    const idx = stepsData.findIndex((s) => s.key === currentStep);
    if (idx < stepsData.length - 1) handleStepClick(stepsData[idx + 1]);
  };

  const handlePrev = () => {
    const idx = stepsData.findIndex((s) => s.key === currentStep);
    if (idx > 0) handleStepClick(stepsData[idx - 1]);
  };

  const handleFinish = () => {
    setFinishedSteps(stepsData.map((s) => s.key));
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
          {/* 使用 item.finished 字段 */}
          <ComponentSectionLayout
            title='使用 item.finished 字段'
            id='steps-data-finished'
            description='步骤项的 finished 字段优先级高于全局 finished 数组，步骤1和步骤3设置了 finished: true。'
          >
            <CodeOperationContainer>
              <Steps
                items={stepsDataWithFinished}
                current={currentStep}
                onClick={(item) => setCurrentStep(item.key)}
                finished={finishedSteps}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 全局 finished 数组 */}
          <ComponentSectionLayout
            title='全局 finished 数组'
            id='steps-global-finished'
            description='使用全局 finished 数组来控制步骤的完成状态。'
          >
            <CodeOperationContainer>
              <Steps
                items={stepsData}
                current={currentStep}
                onClick={handleStepClick}
                finished={finishedSteps}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 垂直布局 */}
          <ComponentSectionLayout
            title='垂直布局'
            id='steps-vertical'
            description='通过 direction="vertical" 可以创建垂直布局的步骤条。'
          >
            <CodeOperationContainer>
              <Steps
                items={stepsDataWithFinished}
                current={currentStep}
                onClick={(item) => setCurrentStep(item.key)}
                direction="vertical"
                dividerWidth="24px"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          <div className='flex gap-12 justify-center'>
            <Button onClick={handlePrev} disabled={currentStep === 1}>上一步</Button>
            <Button onClick={handleNext} disabled={currentStep === stepsData.length}>下一步</Button>
            <Button onClick={handleFinish}>完成所有</Button>
            <Button onClick={handleReset}>重置</Button>
          </div>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={stepsProps} />
          {stepsTypes.map((i) => (
            <div key={i.name} className='flex flex-col gap-12' id={`${i.name}-API`}>
              <h3 className='text-sm font-bold'>{i.name}</h3>
              <ComponentPropsTable props={i.data} />
            </div>
          ))}
        </div>
      )}
    </ComponentContentLayout>
  );
}
