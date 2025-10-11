import React, { useState } from 'react';
import Slider from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function SliderExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  const SliderProps = [
    { name: 'className', type: 'string', desc: '自定义类名，可以传入额外的CSS类名' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式，可以传入CSS样式对象来自定义组件外观' },
    { name: 'children', type: 'ReactNode', desc: '子元素，可以传入React节点作为组件内容' },
  ];

  return (
    <ComponentContentLayout
      zh='Slider'
      en='Slider'
      desc='LandDesign 的 Slider 组件，用于展示内容。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <div className='flex flex-col gap-24'>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='basic-usage'
            description='Slider 组件的基础用法。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <Slider>
                  这是一个 Slider 组件示例
                </Slider>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={SliderProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
