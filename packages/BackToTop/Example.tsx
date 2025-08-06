import React, { useState } from 'react'
import BackToTop from ".";
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';

// API 文档配置
const backToTopProps = [
  { name: 'visibleHeight', type: 'number', default: '400', desc: '显示按钮的高度阈值' },
  { name: 'fixed', type: 'boolean', default: 'true', desc: '是否使用固定定位' },
  { name: 'target', type: 'HTMLElement | Window', desc: '滚动目标元素' },
  { name: 'onClick', type: '() => void', desc: '点击事件回调' },
  { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
  { name: 'className', type: 'string', desc: '自定义类名' },
];

export default function BackToTopExample() {
  const [activeTab, setActiveTab] = useState('examples');
  return (
    <ComponentContentLayout
      zh='回到顶部'
      en='BackToTop'
      desc='LandDesign 的回到顶部组件，用于快速返回页面顶部。支持自定义显示阈值、定位方式等功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && <div className='flex flex-col gap-24'>
        {/* 容器内定位 */}
        <ComponentSectionLayout
          title='容器内定位'
          id='back-to-top-container'
          description='这个示例中，BackToTop组件会自动根据父级容器滚动定位。'
        >
          <CodeOperationContainer>
            <div className='flex justify-center gap-24 w-full'>
              <div className="relative w-full h-full flex flex-col gap-8" style={{ height: '200px' }}>
                <div
                  className='flex flex-col gap-8 w-full overflow-auto scrollbar-none'
                >
                  {Array.from({ length: 20 }).map((_i, index) => <div key={index} className="w-full bg-bg-secondary radius-4 shrink-0" style={{ height: '20px' }}></div>)}
                  <BackToTop visibleHeight={200} fixed={false} />
                </div>
              </div>
            </div>
          </CodeOperationContainer>
        </ComponentSectionLayout>
      </div>}
      {activeTab === 'props' && <div className='flex flex-col gap-24'>
        <ComponentPropsTable props={backToTopProps} />
      </div>}
    </ComponentContentLayout>
  )
}
