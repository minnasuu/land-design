import React, { useState } from 'react';
import Alert from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function AlertExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  const alertProps = [
    { name: 'type', type: 'default | error | fail | success | warn | loading', default: 'default', desc: 'Alert类型，用于表示不同的状态和语义' },
    { name: 'title', type: 'ReactNode | string', desc: 'Alert标题内容，可以传入字符串或React节点' },
    { name: 'direction', type: 'row | column', default: 'row', desc: 'Alert布局方向：row(水平布局) | column(垂直布局)' },
    { name: 'link', type: 'string', desc: '链接文本，显示在Alert标题后的链接文字' },
    { name: 'onLinkClick', type: '(e: React.MouseEvent) => void', desc: '链接点击事件回调，当链接被点击时触发' },
    { name: 'noBg', type: 'boolean', default: 'false', desc: '是否显示背景，设置为true时不显示背景色' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式，可以传入CSS样式对象来自定义Alert外观' },
    { name: 'className', type: 'string', desc: '自定义类名，可以传入额外的CSS类名' },
  ];

  return (
    <ComponentContentLayout
      zh='警告提示'
      en='Alert'
      desc='LandDesign 的警告提示组件，用于展示重要的提示信息。支持多种类型、布局方向和自定义样式。'
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
            description='Alert 组件的基础用法，展示不同类型的警告提示。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <Alert type="default" title="此功能为实验性功能" />
                <Alert type="error" title="今日操作次数已达上限！" />
                <Alert type="warn" title="你的额度即将用完！" />
                <Alert type="fail" title="加载失败，请检查网络后重试" />
                <Alert type="success" title="提交成功！" />
                <Alert type="loading" title="加载中..." />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同类型 */}
          <ComponentSectionLayout
            title='不同类型'
            id='alert-types'
            description='Alert 支持 6 种不同的类型，每种类型都有独特的视觉效果和语义。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div>
                  <h4 className="mb-8">默认类型</h4>
                  <Alert type="default" title="此功能为实验性功能" />
                </div>
                <div>
                  <h4 className="mb-8">错误类型</h4>
                  <Alert type="error" title="今日操作次数已达上限！" />
                </div>
                <div>
                  <h4 className="mb-8">警告类型</h4>
                  <Alert type="warn" title="你的额度即将用完！" />
                </div>
                <div>
                  <h4 className="mb-8">失败类型</h4>
                  <Alert type="fail" title="加载失败，请检查网络后重试" />
                </div>
                <div>
                  <h4 className="mb-8">成功类型</h4>
                  <Alert type="success" title="提交成功！" />
                </div>
                <div>
                  <h4 className="mb-8">加载类型</h4>
                  <Alert type="loading" title="加载中..." />
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 带链接 */}
          <ComponentSectionLayout
            title='带链接'
            id='alert-link'
            description='通过 link 属性可以为 Alert 添加可点击的链接。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <Alert type="fail" title="加载失败" link="重试" />
                <Alert type="warn" title="你的额度即将用完！" link="立即充值" />
                <Alert type="success" title="提交成功！" link="查看详情" />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 布局方向 */}
          <ComponentSectionLayout
            title='布局方向'
            id='alert-direction'
            description='支持水平和垂直两种布局方向。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div>
                  <h4 className="mb-8">水平布局（默认）</h4>
                  <Alert type="fail" title="加载失败" link="重试" direction="row" />
                </div>
                <div>
                  <h4 className="mb-8">垂直布局</h4>
                  <Alert type="fail" title="加载失败" link="重试" direction="column" />
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 无背景 */}
          <ComponentSectionLayout
            title='无背景'
            id='alert-no-bg'
            description='通过 noBg 属性可以隐藏 Alert 的背景色。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div>
                  <h4 className="mb-8">有背景（默认）</h4>
                  <Alert type="error" title="今日操作次数已达上限！" />
                </div>
                <div>
                  <h4 className="mb-8">无背景</h4>
                  <Alert type="error" title="今日操作次数已达上限！" noBg />
                </div>
                <div>
                  <h4 className="mb-8">所有类型无背景</h4>
                  <div className="flex flex-col gap-12">
                    <Alert type="default" title="此功能为实验性功能" noBg />
                    <Alert type="error" title="今日操作次数已达上限！" noBg />
                    <Alert type="warn" title="你的额度即将用完！" noBg />
                    <Alert type="fail" title="加载失败，请检查网络后重试" noBg />
                    <Alert type="success" title="提交成功！" noBg />
                    <Alert type="loading" title="加载中..." noBg />
                  </div>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 复杂内容 */}
          <ComponentSectionLayout
            title='复杂内容'
            id='alert-complex'
            description='Alert 的 title 属性支持复杂的 React 节点。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <Alert 
                  type="warn" 
                  title={
                    <div>
                      <strong>重要提醒：</strong>
                      <span>你的账户余额不足，请及时充值以避免服务中断。</span>
                    </div>
                  }
                  link="立即充值"
                />
                <Alert 
                  type="success" 
                  title={
                    <div>
                      <span>✅ 操作成功完成</span>
                      <br />
                      <small>数据已保存到云端，你可以在历史记录中查看。</small>
                    </div>
                  }
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义样式 */}
          <ComponentSectionLayout
            title='自定义样式'
            id='alert-custom'
            description='可以通过 style 和 className 属性自定义 Alert 的外观。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <Alert 
                  type="default" 
                  title="自定义样式的 Alert"
                  style={{
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    border: '2px solid #1890ff'
                  }}
                />
                <Alert 
                  type="success" 
                  title="渐变背景 Alert"
                  style={{
                    background: 'linear-gradient(45deg, #52c41a, #73d13d)',
                    color: 'white',
                    border: 'none'
                  }}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={alertProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
