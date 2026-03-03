import React, { useState } from 'react';
import State from '.';
import Button from '../Button';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function StateExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  const stateProps = [
    { name: 'type', type: '"empty" | "error" | "offline" | "forbidden" | "notFound" | "success" | "warning"', default: '"empty"', desc: '状态类型（预设图标）' },
    { name: 'size', type: '"small" | "default" | "large"', default: '"default"', desc: '尺寸' },
    { name: 'icon', type: 'ReactNode', desc: '自定义图标/图片' },
    { name: 'image', type: 'string', desc: '图片地址' },
    { name: 'imageWidth', type: 'number | string', desc: '图片宽度' },
    { name: 'imageHeight', type: 'number | string', desc: '图片高度' },
    { name: 'title', type: 'ReactNode', desc: '主标题' },
    { name: 'description', type: 'ReactNode', desc: '描述文字' },
    { name: 'actions', type: 'ReactNode', desc: '操作区域' },
    { name: 'children', type: 'ReactNode', desc: '额外内容' },
    { name: 'onClick', type: '(e: MouseEvent) => void', desc: '点击回调' },
    { name: 'className', type: 'string', desc: '自定义类名' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
    { name: 'iconClassName', type: 'string', desc: '图标区域类名' },
    { name: 'iconStyle', type: 'CSSProperties', desc: '图标区域样式' },
    { name: 'titleClassName', type: 'string', desc: '标题区域类名' },
    { name: 'titleStyle', type: 'CSSProperties', desc: '标题区域样式' },
    { name: 'descriptionClassName', type: 'string', desc: '描述区域类名' },
    { name: 'descriptionStyle', type: 'CSSProperties', desc: '描述区域样式' },
    { name: 'htmlProps', type: 'HTMLAttributes', desc: '原生属性透传' },
  ];

  return (
    <ComponentContentLayout
      zh="状态"
      en="State"
      desc="LandDesign 的状态组件，用于展示页面的空状态、错误状态、加载失败等场景。"
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title="基础用法"
            id="state-basic"
            description="State 组件的基础用法，展示不同的状态类型。"
          >
            <CodeOperationContainer>
              <State type="empty" title="暂无数据" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 状态类型 */}
          <ComponentSectionLayout
            title="状态类型"
            id="state-types"
            description="通过 type 属性设置不同的预设状态类型。"
          >
            <CodeOperationContainer style={{ flexWrap: 'wrap', gap: 32 }}>
              <State type="empty" title="空状态" description="暂无数据" />
              <State type="error" title="错误" description="加载失败" />
              <State type="offline" title="离线" description="网络不可用" />
              <State type="forbidden" title="无权限" description="暂无访问权限" />
              <State type="notFound" title="404" description="页面不存在" />
              <State type="success" title="成功" description="操作已完成" />
              <State type="warning" title="警告" description="请注意风险" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 尺寸 */}
          <ComponentSectionLayout
            title="尺寸"
            id="state-size"
            description="通过 size 属性设置不同的尺寸。"
          >
            <CodeOperationContainer style={{ gap: 48 }}>
              <State size="small" type="empty" title="小尺寸" description="描述文字" />
              <State size="default" type="empty" title="默认尺寸" description="描述文字" />
              <State size="large" type="empty" title="大尺寸" description="描述文字" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 带操作 */}
          <ComponentSectionLayout
            title="带操作"
            id="state-actions"
            description="通过 actions 属性添加操作按钮。"
          >
            <CodeOperationContainer style={{ gap: 48 }}>
              <State
                type="empty"
                title="暂无数据"
                description="点击下方按钮创建"
                actions={<Button status="primary">创建数据</Button>}
              />
              <State
                type="error"
                title="加载失败"
                description="请检查网络后重试"
                actions={
                  <>
                    <Button>返回首页</Button>
                    <Button status="primary">重新加载</Button>
                  </>
                }
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义图标 */}
          <ComponentSectionLayout
            title="自定义图标"
            id="state-custom-icon"
            description="通过 icon 属性自定义图标。"
          >
            <CodeOperationContainer style={{ gap: 48 }}>
              <State
                icon={<span style={{ fontSize: 48 }}>🎉</span>}
                title="自定义 Emoji"
                description="支持任意 ReactNode"
              />
              <State
                icon={
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="20" stroke="var(--color-primary)" strokeWidth="3" />
                    <path d="M24 14V26" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" />
                    <path d="M24 24L32 32" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                }
                title="自定义 SVG"
                description="支持自定义 SVG 图标"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义图片 */}
          <ComponentSectionLayout
            title="自定义图片"
            id="state-image"
            description="通过 image 属性设置图片地址。"
          >
            <CodeOperationContainer>
              <State
                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                imageWidth={120}
                imageHeight={80}
                title="自定义图片"
                description="支持使用图片作为状态图标"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义样式 */}
          <ComponentSectionLayout
            title="自定义样式"
            id="state-custom-style"
            description="通过 style 属性自定义组件样式。"
          >
            <CodeOperationContainer style={{ gap: 32 }}>
              <State
                type="empty"
                title="带边框"
                description="自定义边框样式"
                style={{
                  border: '1px solid var(--color-border-secondary)',
                  borderRadius: 8,
                  padding: 24,
                  minWidth: 200,
                }}
              />
              <State
                type="success"
                title="带背景"
                description="自定义背景色"
                style={{
                  backgroundColor: 'var(--color-green-1)',
                  borderRadius: 12,
                  padding: 32,
                  minWidth: 200,
                }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 带额外内容 */}
          <ComponentSectionLayout
            title="带额外内容"
            id="state-children"
            description="通过 children 属性添加额外内容。"
          >
            <CodeOperationContainer>
              <State
                type="offline"
                title="网络错误"
                description="请检查网络连接"
                actions={<Button status="primary">重新连接</Button>}
              >
                <div
                  style={{
                    marginTop: 16,
                    padding: '8px 12px',
                    fontSize: 12,
                    color: 'var(--color-text-tertiary)',
                    backgroundColor: 'var(--color-fill-quaternary)',
                    borderRadius: 4,
                  }}
                >
                  错误代码: ERR_NETWORK_DISCONNECTED
                </div>
              </State>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 完整示例 */}
          <ComponentSectionLayout
            title="完整示例"
            id="state-full"
            description="组合使用各种属性的完整示例。"
          >
            <CodeOperationContainer style={{ gap: 32 }}>
              <div
                style={{
                  border: '1px solid var(--color-border-secondary)',
                  borderRadius: 12,
                  padding: 32,
                  minWidth: 280,
                }}
              >
                <State
                  size="large"
                  type="empty"
                  title="搜索结果为空"
                  description='没有找到与"关键词"相关的内容，请尝试其他搜索条件'
                  actions={
                    <>
                      <Button>清空搜索</Button>
                      <Button status="primary">浏览全部</Button>
                    </>
                  }
                />
              </div>
              <div
                style={{
                  border: '1px solid var(--color-border-secondary)',
                  borderRadius: 12,
                  padding: 32,
                  minWidth: 280,
                }}
              >
                <State
                  size="large"
                  type="error"
                  title="服务器错误"
                  description="服务暂时不可用，我们正在紧急修复中"
                  actions={<Button status="primary">刷新页面</Button>}
                >
                  <div
                    style={{
                      marginTop: 12,
                      fontSize: 12,
                      color: 'var(--color-text-quaternary)',
                    }}
                  >
                    如问题持续，请联系客服
                  </div>
                </State>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className="flex flex-col gap-12">
          <ComponentPropsTable props={stateProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
