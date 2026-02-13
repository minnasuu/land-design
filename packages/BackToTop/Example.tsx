import { useState } from 'react';
import BackToTop from ".";
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';

const backToTopProps = [
  { name: 'fixed', type: 'boolean', desc: '是否固定定位', default: 'true' },
  { name: 'target', type: 'Element', desc: '滚动容器元素，默认 document.body' },
  { name: 'visibleHeight', type: 'number', desc: '显示按钮的滚动高度阈值（px）', default: '600' },
  { name: 'offsetRight', type: 'number', desc: '距离右侧偏移量（px）', default: '24' },
  { name: 'offsetBottom', type: 'number', desc: '距离底部偏移量（px）', default: '24' },
  { name: 'scrollBehavior', type: 'ScrollBehavior', desc: '滚动行为', default: "'smooth'" },
  { name: 'icon', type: 'ReactNode', desc: '自定义图标' },
  { name: 'disabled', type: 'boolean', desc: '是否禁用' },
  { name: 'onClick', type: '(e: MouseEvent) => void', desc: '点击回调' },
  { name: 'onVisibilityChange', type: '(visible: boolean) => void', desc: '显示/隐藏状态变化回调' },
  { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
  { name: 'className', type: 'string', desc: '自定义类名' },
];

export default function BackToTopExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  return (
    <ComponentContentLayout
      zh='回到顶部'
      en='BackToTop'
      desc='用于快速返回页面或容器顶部，支持固定定位和容器内定位。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className='flex flex-col gap-24'>
          {/* 容器内定位 */}
          <ComponentSectionLayout
            title='容器内定位'
            id='back-to-top-container'
            description='BackToTop 组件放在滚动容器内部，自动根据父容器滚动定位。'
          >
            <CodeOperationContainer>
              <div className='flex justify-center w-full'>
                <div className="relative w-full flex flex-col gap-8" style={{ height: '200px' }}>
                  <div className='flex flex-col gap-8 w-full overflow-auto scrollbar-none'>
                    {Array.from({ length: 20 }).map((_, index) => (
                      <div key={index} className="w-full bg-bg-secondary radius-4 shrink-0" style={{ height: '20px' }} />
                    ))}
                    <BackToTop visibleHeight={200} fixed={false} />
                  </div>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}
      {activeTab === 'props' && (
        <div className='flex flex-col gap-24'>
          <ComponentPropsTable props={backToTopProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
