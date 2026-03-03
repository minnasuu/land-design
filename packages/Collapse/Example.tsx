import React, { useState } from 'react';
import Collapse from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function CollapseExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [expanded, setExpanded] = useState(false);

  const collapseProps = [
    { name: 'variant', type: '"default" | "bordered" | "card"', default: '"default"', desc: '折叠面板外观变体' },
    { name: 'arrowPosition', type: '"start" | "end"', default: '"start"', desc: '箭头图标位置' },
    { name: 'title', type: 'ReactNode', desc: '折叠面板标题' },
    { name: 'content', type: 'ReactNode', desc: '折叠面板内容' },
    { name: 'children', type: 'ReactNode', desc: '折叠面板内容（优先级高于 content）' },
    { name: 'extra', type: 'ReactNode', desc: '标题右侧额外内容' },
    { name: 'arrow', type: 'ReactNode | ((expanded: boolean) => ReactNode)', desc: '自定义箭头图标' },
    { name: 'expanded', type: 'boolean', desc: '是否展开（受控）' },
    { name: 'defaultExpanded', type: 'boolean', default: 'false', desc: '默认是否展开（非受控）' },
    { name: 'disabled', type: 'boolean', default: 'false', desc: '是否禁用' },
    { name: 'hideArrow', type: 'boolean', default: 'false', desc: '是否隐藏箭头' },
    { name: 'destroyOnCollapse', type: 'boolean', default: 'false', desc: '收起时是否销毁内容' },
    { name: 'animated', type: 'boolean', default: 'true', desc: '是否启用动画' },
    { name: 'duration', type: 'number', default: '200', desc: '动画持续时间（毫秒）' },
    { name: 'onChange', type: '(expanded: boolean) => void', desc: '展开状态变化回调' },
    { name: 'onHeaderClick', type: '(e: MouseEvent) => void', desc: '标题点击回调' },
    { name: 'onKeyDown', type: '(e: KeyboardEvent) => void', desc: '键盘事件回调' },
    { name: 'className', type: 'string', desc: '自定义类名' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
    { name: 'headerClassName', type: 'string', desc: '标题区域类名' },
    { name: 'headerStyle', type: 'CSSProperties', desc: '标题区域样式' },
    { name: 'contentClassName', type: 'string', desc: '内容区域类名' },
    { name: 'contentStyle', type: 'CSSProperties', desc: '内容区域样式' },
    { name: 'htmlProps', type: 'HTMLAttributes', desc: '原生属性透传' },
  ];

  const sampleContent = '这是折叠面板的内容区域。可以放置任意内容，包括文本、图片、表单等。支持流畅的展开收起动画效果。';

  return (
    <ComponentContentLayout
      zh="折叠面板"
      en="Collapse"
      desc="LandDesign 的折叠面板组件，支持流畅的展开收起动画、多种外观变体、受控/非受控模式等功能。"
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title="基础用法"
            id="collapse-basic"
            description="Collapse 组件的基础用法，点击标题区域可展开/收起内容。"
          >
            <CodeOperationContainer column style={{ alignItems: 'stretch' }}>
              <Collapse title="折叠面板标题" content={sampleContent} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 默认展开 */}
          <ComponentSectionLayout
            title="默认展开"
            id="collapse-default-expanded"
            description="通过 defaultExpanded 属性设置默认展开状态。"
          >
            <CodeOperationContainer column style={{ alignItems: 'stretch' }}>
              <Collapse title="默认展开的面板" content={sampleContent} defaultExpanded />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 外观变体 */}
          <ComponentSectionLayout
            title="外观变体"
            id="collapse-variant"
            description="通过 variant 属性设置不同的外观样式。"
          >
            <CodeOperationContainer column style={{ alignItems: 'stretch', gap: 16 }}>
              <Collapse variant="default" title="Default 默认样式" content={sampleContent} />
              <Collapse variant="bordered" title="Bordered 边框样式" content={sampleContent} />
              <Collapse variant="card" title="Card 卡片样式" content={sampleContent} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 箭头位置 */}
          <ComponentSectionLayout
            title="箭头位置"
            id="collapse-arrow-position"
            description="通过 arrowPosition 属性控制箭头图标的位置。"
          >
            <CodeOperationContainer column style={{ alignItems: 'stretch', gap: 16 }}>
              <Collapse
                variant="bordered"
                arrowPosition="start"
                title="箭头在前"
                content={sampleContent}
              />
              <Collapse
                variant="bordered"
                arrowPosition="end"
                title="箭头在后"
                content={sampleContent}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 额外内容 */}
          <ComponentSectionLayout
            title="额外内容"
            id="collapse-extra"
            description="通过 extra 属性在标题右侧添加额外内容。"
          >
            <CodeOperationContainer column style={{ alignItems: 'stretch', gap: 16 }}>
              <Collapse
                variant="bordered"
                title="带额外内容"
                extra={<span style={{ color: 'var(--color-primary)' }}>更多</span>}
                content={sampleContent}
              />
              <Collapse
                variant="bordered"
                title="状态标签"
                extra={
                  <span
                    style={{
                      padding: '2px 8px',
                      fontSize: 12,
                      backgroundColor: 'var(--color-green-1)',
                      color: 'var(--color-green-6)',
                      borderRadius: 4,
                    }}
                  >
                    已完成
                  </span>
                }
                content={sampleContent}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 受控模式 */}
          <ComponentSectionLayout
            title="受控模式"
            id="collapse-controlled"
            description="通过 expanded 和 onChange 实现受控模式。"
          >
            <CodeOperationContainer column style={{ alignItems: 'stretch' }}>
              <div className="flex gap-8 mb-12">
                <button
                  className="px-12 py-4 radius-4 border border-border-primary hover:bg-fill-secondary"
                  onClick={() => setExpanded(!expanded)}
                >
                  {expanded ? '收起' : '展开'}
                </button>
              </div>
              <Collapse
                variant="bordered"
                title="受控的折叠面板"
                content={sampleContent}
                expanded={expanded}
                onChange={setExpanded}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用状态 */}
          <ComponentSectionLayout
            title="禁用状态"
            id="collapse-disabled"
            description="通过 disabled 属性禁用折叠面板。"
          >
            <CodeOperationContainer column style={{ alignItems: 'stretch', gap: 16 }}>
              <Collapse variant="bordered" title="禁用的面板（收起）" content={sampleContent} disabled />
              <Collapse
                variant="bordered"
                title="禁用的面板（展开）"
                content={sampleContent}
                defaultExpanded
                disabled
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 隐藏箭头 */}
          <ComponentSectionLayout
            title="隐藏箭头"
            id="collapse-hide-arrow"
            description="通过 hideArrow 属性隐藏箭头图标。"
          >
            <CodeOperationContainer column style={{ alignItems: 'stretch' }}>
              <Collapse variant="bordered" title="无箭头的面板" content={sampleContent} hideArrow />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义箭头 */}
          <ComponentSectionLayout
            title="自定义箭头"
            id="collapse-custom-arrow"
            description="通过 arrow 属性自定义箭头图标。"
          >
            <CodeOperationContainer column style={{ alignItems: 'stretch', gap: 16 }}>
              <Collapse
                variant="bordered"
                title="自定义箭头（静态）"
                content={sampleContent}
                arrow={<span style={{ fontSize: 12 }}>▼</span>}
              />
              <Collapse
                variant="bordered"
                title="自定义箭头（动态）"
                content={sampleContent}
                arrow={(exp) => <span style={{ fontSize: 12 }}>{exp ? '−' : '+'}</span>}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 动画配置 */}
          <ComponentSectionLayout
            title="动画配置"
            id="collapse-animation"
            description="通过 animated 和 duration 属性配置动画效果。"
          >
            <CodeOperationContainer column style={{ alignItems: 'stretch', gap: 16 }}>
              <Collapse
                variant="bordered"
                title="慢速动画 (500ms)"
                content={sampleContent}
                duration={500}
              />
              <Collapse variant="bordered" title="无动画" content={sampleContent} animated={false} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 嵌套使用 */}
          <ComponentSectionLayout
            title="嵌套使用"
            id="collapse-nested"
            description="Collapse 组件支持嵌套使用。"
          >
            <CodeOperationContainer column style={{ alignItems: 'stretch' }}>
              <Collapse variant="bordered" title="一级面板" defaultExpanded>
                <p style={{ marginBottom: 12 }}>这是一级面板的内容。</p>
                <Collapse variant="card" title="二级面板 A" content="这是二级面板 A 的内容。" />
                <Collapse
                  variant="card"
                  title="二级面板 B"
                  content="这是二级面板 B 的内容。"
                  style={{ marginTop: 8 }}
                />
              </Collapse>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className="flex flex-col gap-12">
          <ComponentPropsTable props={collapseProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
