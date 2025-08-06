import React, { useState } from 'react';
import Loading from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function LoadingExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  const loadingProps = [
    { name: 'size', type: 'number', default: '24', desc: '加载图标尺寸，单位为像素' },
    { name: 'color', type: 'string', desc: '加载图标颜色，支持CSS颜色值' },
    { name: 'strokeSize', type: 'number', default: '2', desc: '加载图标线条粗细，单位为像素' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式，可以传入CSS样式对象来自定义加载图标外观' },
    { name: 'className', type: 'string', desc: '自定义类名，可以传入额外的CSS类名' },
  ];

  return (
    <ComponentContentLayout
      zh='加载图标'
      en='Loading'
      desc='LandDesign 的加载图标组件，用于表示正在进行的操作。支持自定义尺寸、颜色和线条粗细。'
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
            description='Loading 组件的基础用法，展示默认的加载图标。'
          >
            <CodeOperationContainer>
              <Loading />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同尺寸 */}
          <ComponentSectionLayout
            title='不同尺寸'
            id='loading-sizes'
            description='可以通过 size 属性自定义加载图标的尺寸。'
          >
            <CodeOperationContainer>
              <div className="flex gap-16 items-center">
                <Loading size={16} />
                <Loading size={24} />
                <Loading size={32} />
                <Loading size={48} />
                <Loading size={64} />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同颜色 */}
          <ComponentSectionLayout
            title='不同颜色'
            id='loading-colors'
            description='可以通过 color 属性自定义加载图标的颜色。'
          >
            <CodeOperationContainer>
              <div className="flex gap-16">
                <Loading color="var(--color-primary-6)" />
                <Loading color="#52c41a" />
                <Loading color="#fa8c16" />
                <Loading color="#f5222d" />
                <Loading color="#722ed1" />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同线条粗细 */}
          <ComponentSectionLayout
            title='不同线条粗细'
            id='loading-stroke'
            description='可以通过 strokeSize 属性自定义加载图标的线条粗细。'
          >
            <CodeOperationContainer>
              <div className="flex gap-16">
                <Loading strokeSize={1} />
                <Loading strokeSize={2} />
                <Loading strokeSize={4} />
                <Loading strokeSize={6} />
                <Loading strokeSize={8} />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 组合设置 */}
          <ComponentSectionLayout
            title='组合设置'
            id='loading-combined'
            description='可以同时设置多个属性来定制加载图标。'
          >
            <CodeOperationContainer>
              <div className="flex gap-16">
                <Loading size={32} color="#1890ff" strokeSize={3} />
                <Loading size={40} color="#52c41a" strokeSize={4} />
                <Loading size={48} color="#fa8c16" strokeSize={5} />
                <Loading size={56} color="#f5222d" strokeSize={6} />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 在按钮中使用 */}
          <ComponentSectionLayout
            title='在按钮中使用'
            id='loading-button'
            description='Loading 组件常用于按钮中表示加载状态。'
          >
            <CodeOperationContainer>
              <div className="flex gap-16">
                <button className="px-16 py-8 border radius-4 flex items-center gap-8">
                  <Loading size={16} />
                  加载中...
                </button>
                <button className="px-16 py-8 bg-primary color-white radius-4 flex items-center gap-8">
                  <Loading size={16} color="white" />
                  提交中...
                </button>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义样式 */}
          <ComponentSectionLayout
            title='自定义样式'
            id='loading-custom'
            description='可以通过 style 属性自定义加载图标的样式。'
          >
            <CodeOperationContainer>
              <div className="flex gap-16">
                <Loading
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                  }}
                />
                <Loading
                  style={{
                    animation: 'spin 1s linear infinite',
                    transform: 'scale(1.2)'
                  }}
                />
                <Loading
                  style={{
                    background: 'linear-gradient(45deg, #1890ff, #52c41a)',
                    borderRadius: '50%',
                    padding: '8px'
                  }}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同场景 */}
          <ComponentSectionLayout
            title='不同场景'
            id='loading-scenarios'
            description='Loading 组件在不同场景下的使用示例。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div>
                  <h4 className="mb-8">页面加载</h4>
                  <div className="flex justify-center items-center" style={{ height: '100px', border: '1px dashed #d9d9d9' }}>
                    <Loading size={32} color="#1890ff" />
                  </div>
                </div>
                <div>
                  <h4 className="mb-8">数据加载</h4>
                  <div className="flex gap-16">
                    <div className="text-center">
                      <Loading size={24} />
                      <p className="mt-8 text-gray-500">加载数据中...</p>
                    </div>
                    <div className="text-center">
                      <Loading size={24} color="#52c41a" />
                      <p className="mt-8 text-gray-500">处理中...</p>
                    </div>
                  </div>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={loadingProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
