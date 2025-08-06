import React, { useState } from 'react'
import AutoContainer from '.'
import Title from '../Title'
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';

// API 文档配置
const autoContainerProps = [
  { name: "ratio", type: "number", desc: "比例", default: "1" },
  { name: "wrapClassName", type: "string", desc: "自定义类名" },
  { name: "style", type: "CSSProperties", desc: "自定义样式" },
  { name: "className", type: "string", desc: "自定义类名" },
];

export default function AutoContainerExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  return (
    <ComponentContentLayout
      zh='媒体自适应容器'
      en='AutoContainer'
      desc='LandDesign 的媒体自适应容器组件，用于展示媒体内容，支持自适应屏幕大小。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className="flex flex-col gap-24">
          {/* 常规输入框 */}
          <ComponentSectionLayout
            title='常规输入框'
            id='auto-container-normal'
            description='AutoContainer 组件的基础用法，支持设置比例。'
          >
            <CodeOperationContainer>
              <div
                className="flex justify-center gap-6 bg-bg-secondary p-8 rounded-[12px]"
                style={{ height: "400px" }}
              >
                <AutoContainer ratio={1 / 1} className="flex items-center justify-center">
                  <img
                    className="rounded-lg"
                    width="100%"
                    src="https://fastly.picsum.photos/id/293/200/200.jpg?hmac=6YL5khsW332VGbJLkqIfYLzyXyT1kj358PA64TJtKuw"
                    alt={""}
                  />
                </AutoContainer>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={autoContainerProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
