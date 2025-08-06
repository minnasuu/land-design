import React, { useState } from 'react';
import Skeleton from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function SkeletonExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  const skeletonProps = [
    { name: 'width', type: 'string | number', desc: '骨架屏宽度，可以是数字或CSS宽度值' },
    { name: 'height', type: 'string | number', desc: '骨架屏高度，可以是数字或CSS高度值' },
    { name: 'start', type: 'string', desc: '渐变开始颜色，用于自定义骨架屏的渐变效果' },
    { name: 'stop', type: 'string', desc: '渐变结束颜色，用于自定义骨架屏的渐变效果' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式，可以传入CSS样式对象来自定义骨架屏外观' },
    { name: 'className', type: 'string', desc: '自定义类名，可以传入额外的CSS类名' },
  ];

  return (
    <ComponentContentLayout
      zh='骨架屏'
      en='Skeleton'
      desc='LandDesign 的骨架屏组件，用于在内容加载时显示占位效果。支持自定义尺寸、颜色和样式。'
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
            description='Skeleton 组件的基础用法，展示简单的骨架屏效果。'
          >
            <CodeOperationContainer>
              <Skeleton width={200} height={40} className="radius-6" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同尺寸 */}
          <ComponentSectionLayout
            title='不同尺寸'
            id='skeleton-sizes'
            description='可以自定义骨架屏的宽度和高度。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div>
                  <h4 className="mb-8">小尺寸</h4>
                  <Skeleton width={100} height={20} className="radius-4" />
                </div>
                <div>
                  <h4 className="mb-8">中等尺寸</h4>
                  <Skeleton width={200} height={40} className="radius-6" />
                </div>
                <div>
                  <h4 className="mb-8">大尺寸</h4>
                  <Skeleton width={300} height={60} className="radius-8" />
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同形状 */}
          <ComponentSectionLayout
            title='不同形状'
            id='skeleton-shapes'
            description='通过 className 可以设置不同的圆角效果。'
          >
            <CodeOperationContainer>
              <div className="flex gap-16">
                <Skeleton width={100} height={100} className="radius-4" />
                <Skeleton width={100} height={100} className="radius-6" />
                <Skeleton width={100} height={100} className="radius-8" />
                <Skeleton width={100} height={100} className="radius-50" />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义颜色 */}
          <ComponentSectionLayout
            title='自定义颜色'
            id='skeleton-custom'
            description='通过 start 和 stop 属性可以自定义骨架屏的渐变颜色。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div>
                  <h4 className="mb-8">主题色渐变</h4>
                  <Skeleton
                    width={200}
                    height={40}
                    start="var(--color-primary-1)"
                    stop="var(--color-primary-2)"
                    className="radius-6"
                  />
                </div>
                <div>
                  <h4 className="mb-8">自定义颜色渐变</h4>
                  <div className="flex gap-16">
                    <Skeleton
                      width={100}
                      height={40}
                      start="#f0f0f0"
                      stop="#e0e0e0"
                      className="radius-6"
                    />
                    <Skeleton
                      width={100}
                      height={40}
                      start="#e6f7ff"
                      stop="#bae7ff"
                      className="radius-6"
                    />
                    <Skeleton
                      width={100}
                      height={40}
                      start="#f6ffed"
                      stop="#d9f7be"
                      className="radius-6"
                    />
                  </div>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 模拟内容 */}
          <ComponentSectionLayout
            title='模拟内容'
            id='skeleton-content'
            description='可以组合多个骨架屏来模拟真实内容的布局。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div>
                  <h4 className="mb-8">模拟卡片</h4>
                  <div className="border p-16 radius-8" style={{ width: '300px' }}>
                    <Skeleton width="100%" height={20} className="radius-4 mb-12" />
                    <Skeleton width="80%" height={16} className="radius-4 mb-8" />
                    <Skeleton width="60%" height={16} className="radius-4 mb-12" />
                    <div className="flex gap-8">
                      <Skeleton width={60} height={32} className="radius-4" />
                      <Skeleton width={60} height={32} className="radius-4" />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="mb-8">模拟列表</h4>
                  <div className="flex flex-col gap-8">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex gap-12 items-center">
                        <Skeleton width={40} height={40} className="radius-50" />
                        <div className="flex-1">
                          <Skeleton width="60%" height={16} className="radius-4 mb-4" />
                          <Skeleton width="40%" height={12} className="radius-4" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={skeletonProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
