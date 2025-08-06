import React, { useState } from 'react';
import State from ".";
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function StateExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  const stateProps = [
    { name: 'type', type: 'StateType (empty | offline)', desc: '状态类型', default: 'empty' },
    { name: 'title', type: 'React.ReactNode | string', desc: '状态标题' },
    { name: 'subTitle', type: 'React.ReactNode | string', desc: '副标题' },
    { name: 'titleLink', type: 'string', desc: '标题链接' },
    { name: 'subTitleLink', type: 'string', desc: '副标题链接' },
    { name: 'button', type: 'string', desc: '按钮文本' },
    { name: 'emptyIcon', type: 'string', desc: '空状态图标' },
    { name: 'offlineIcon', type: 'string', desc: '离线状态图标' },
    { name: 'onTiTleLinkClick', type: '(e: MouseEvent) => void', desc: '标题链接点击事件' },
    { name: 'onSubTitleLinkClick', type: '(e: MouseEvent) => void', desc: '副标题链接点击事件' },
    { name: 'onButtonClick', type: '(e: MouseEvent) => void', desc: '按钮点击事件' },
  ];

  return (
    <ComponentContentLayout
      zh='状态'
      en='State'
      desc='LandDesign 的状态组件，支持空状态、离线状态、自定义标题副标题等功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >

      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='state-empty'
            description='State 组件的基础用法，支持空状态和离线状态。'
          >
            <CodeOperationContainer>
              <State type="empty" title="暂无内容" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 离线状态 */}
          <ComponentSectionLayout
            title='离线状态'
            id='state-offline'
            description='通过 type 属性可以设置不同的状态类型。'
          >
            <CodeOperationContainer>
              <State type="offline" title="网络错误" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 副标题 */}
          <ComponentSectionLayout
            title='副标题'
            id='state-subTitle'
            description='通过 subTitle 和 subTitleLink 属性可以添加副标题和链接。'
          >
            <CodeOperationContainer>
              <State
                type="offline"
                title="网络错误"
                subTitle="请检查网络连接"
                subTitleLink="点击重新连接"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 带按钮 */}
          <ComponentSectionLayout
            title='带按钮'
            id='state-button'
            description='通过 button 和 onButtonClick 属性可以添加按钮和点击事件。'
          >
            <CodeOperationContainer>
              <State
                type="offline"
                title="网络错误"
                button="重新连接"
                onButtonClick={() => {
                  console.log("重新连接");
                }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同状态类型 */}
          <ComponentSectionLayout
            title='不同状态类型'
            id='state-types'
            description='State 支持多种不同的状态类型。'
          >
            <CodeOperationContainer style={{ justifyContent: 'space-around' }}>
              <State type="empty" title="暂无数据" />
              <State type="offline" title="网络连接失败" />
              <State type="empty" title="暂无搜索结果" subTitle="请尝试其他关键词" />
              <State type="offline" title="服务器错误" subTitle="请稍后重试" button="刷新页面" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义内容 */}
          <ComponentSectionLayout
            title='自定义内容'
            id='state-custom'
            description='State 支持自定义标题和副标题内容。'
          >
            <CodeOperationContainer style={{ gap: 60 }}>
              <State
                type="empty"
                title={<span style={{ color: 'var(--color-primary)' }}>自定义标题样式</span>}
                subTitle="支持 React 节点"
              />
              <State
                type="offline"
                title="网络连接失败"
                subTitle={
                  <div>
                    <p>请检查网络设置</p>
                    <p>或联系技术支持</p>
                  </div>
                }
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 带链接 */}
          <ComponentSectionLayout
            title='带链接'
            id='state-links'
            description='通过 titleLink 和 subTitleLink 属性可以添加链接功能。'
          >
            <CodeOperationContainer style={{ gap: 60 }}>
              <State
                type="empty"
                title="暂无内容"
                titleLink="创建内容"
                onTiTleLinkClick={() => console.log('点击创建内容')}
              />
              <State
                type="offline"
                title="网络错误"
                subTitle="请检查网络连接"
                subTitleLink="查看帮助文档"
                onSubTitleLinkClick={() => console.log('点击查看帮助')}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同样式 */}
          <ComponentSectionLayout
            title='不同样式'
            id='state-styles'
            description='通过 style 属性可以自定义状态组件的样式。'
          >
            <CodeOperationContainer style={{ gap: 60 }}>
              <State
                type="empty"
                title="自定义样式"
                style={{
                  border: '1px solid var(--color-border-secondary)',
                  borderRadius: '8px',
                  padding: '24px'
                }}
              />
              <State
                type="offline"
                title="自定义背景"
                style={{
                  backgroundColor: 'var(--color-bg-secondary)',
                  borderRadius: '12px',
                  padding: '32px'
                }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={stateProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
