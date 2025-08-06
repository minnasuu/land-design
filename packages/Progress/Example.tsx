import React, { useState } from 'react';
import Progress from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function ProgressExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  const progressProps = [
    { name: 'value', type: 'number', default: '0', desc: '进度值，范围0-1，表示完成百分比' },
    { name: 'type', type: 'line | circle', default: 'line', desc: '进度条类型：line(线性) | circle(圆形)' },
    { name: 'status', type: 'default | success | fail', default: 'default', desc: '进度状态：default(默认) | success(成功) | fail(失败)' },
    { name: 'hideLabel', type: 'boolean', default: 'false', desc: '是否隐藏标签，设置为true时隐藏百分比显示' },
    { name: 'size', type: 'small | default | large', default: 'default', desc: '进度条尺寸：small(小) | default(默认) | large(大)' },
    { name: 'strokeWidth', type: 'number', desc: '进度条线条宽度，仅对圆形进度条有效' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式，可以传入CSS样式对象来自定义进度条外观' },
    { name: 'className', type: 'string', desc: '自定义类名，可以传入额外的CSS类名' },
  ];

  return (
    <ComponentContentLayout
      zh='进度条'
      en='Progress'
      desc='LandDesign 的进度条组件，用于展示操作进度。支持线性、圆形两种类型，多种状态和自定义样式。'
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
            description='Progress 组件的基础用法，展示不同进度的线性进度条。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <Progress />
                <Progress value={0.3} status="default" />
                <Progress value={0.7} status="default" />
                <Progress value={1} status="success" />
                <Progress value={0.3} status="fail" />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 圆形进度条 */}
          <ComponentSectionLayout
            title='圆形进度条'
            id='progress-circle'
            description='通过 type 属性可以显示圆形进度条。'
          >
            <CodeOperationContainer>
              <div className="flex gap-16">
                <Progress type="circle" />
                <Progress type="circle" value={0.3} status="default" />
                <Progress type="circle" value={0.7} status="default" />
                <Progress type="circle" value={1} status="success" />
                <Progress type="circle" value={0.3} status="fail" />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同状态 */}
          <ComponentSectionLayout
            title='不同状态'
            id='progress-status'
            description='支持默认、成功、失败三种状态。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div>
                  <h4 className="mb-8">线性进度条</h4>
                  <div className="flex flex-col gap-12">
                    <Progress value={0.3} status="default" />
                    <Progress value={0.7} status="success" />
                    <Progress value={0.5} status="fail" />
                  </div>
                </div>
                <div>
                  <h4 className="mb-8">圆形进度条</h4>
                  <div className="flex gap-16">
                    <Progress type="circle" value={0.3} status="default" />
                    <Progress type="circle" value={0.7} status="success" />
                    <Progress type="circle" value={0.5} status="fail" />
                  </div>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 隐藏标签 */}
          <ComponentSectionLayout
            title='隐藏标签'
            id='progress-no-label'
            description='通过 hideLabel 属性可以隐藏百分比标签。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div>
                  <h4 className="mb-8">线性进度条（隐藏标签）</h4>
                  <div className="flex gap-16">
                    <Progress hideLabel value={0.3} />
                    <Progress hideLabel value={0.7} status="success" />
                    <Progress hideLabel value={0.5} status="fail" />
                  </div>
                </div>
                <div>
                  <h4 className="mb-8">圆形进度条（隐藏标签）</h4>
                  <div className="flex gap-16">
                    <Progress type="circle" hideLabel value={0.3} />
                    <Progress type="circle" hideLabel value={0.7} status="success" />
                    <Progress type="circle" hideLabel value={0.5} status="fail" />
                  </div>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义线条宽度 */}
          <ComponentSectionLayout
            title='自定义线条宽度'
            id='progress-stroke-width'
            description='可以通过 strokeWidth 属性自定义圆形进度条的线条宽度。'
          >
            <CodeOperationContainer>
              <div className="flex gap-16">
                <Progress type="circle" strokeWidth={2} value={0.5} />
                <Progress type="circle" strokeWidth={4} value={0.5} />
                <Progress type="circle" strokeWidth={8} value={0.5} />
                <Progress type="circle" strokeWidth={12} value={0.5} />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 动画效果 */}
          <ComponentSectionLayout
            title='动画效果'
            id='progress-animation'
            description='进度条支持平滑的动画效果。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div>
                  <h4 className="mb-8">线性进度条动画</h4>
                  <Progress value={0.8} status="success" />
                </div>
                <div>
                  <h4 className="mb-8">圆形进度条动画</h4>
                  <Progress type="circle" value={0.8} status="success" />
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义样式 */}
          <ComponentSectionLayout
            title='自定义样式'
            id='progress-custom'
            description='可以通过 style 属性自定义进度条的样式。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div>
                  <h4 className="mb-8">自定义线性进度条</h4>
                  <Progress 
                    value={0.6} 
                    style={{
                      '--progress-bg-color': '#f0f0f0',
                      '--progress-active-color': '#1890ff',
                      '--progress-text-color': '#1890ff'
                    } as React.CSSProperties}
                  />
                </div>
                <div>
                  <h4 className="mb-8">自定义圆形进度条</h4>
                  <Progress 
                    type="circle" 
                    value={0.6}
                    style={{
                      '--progress-circle-bg-color': '#f0f0f0',
                      '--progress-circle-active-color': '#52c41a',
                      '--progress-circle-text-color': '#52c41a'
                    } as React.CSSProperties}
                  />
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={progressProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
