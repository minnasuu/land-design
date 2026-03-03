import React, { useState } from 'react';
import Badge from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function BadgeExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [count, setCount] = useState(5);

  const badgeProps = [
    { name: 'variant', type: '"standard" | "outline" | "light"', default: '"standard"', desc: '徽标外观变体' },
    { name: 'status', type: '"default" | "primary" | "success" | "warning" | "danger" | "info"', default: '"default"', desc: '徽标语义状态/颜色' },
    { name: 'placement', type: '"top-right" | "top-left" | "bottom-right" | "bottom-left"', default: '"top-right"', desc: '徽标位置' },
    { name: 'count', type: 'number', desc: '徽标数值' },
    { name: 'max', type: 'number', default: '99', desc: '封顶数值' },
    { name: 'dot', type: 'boolean', default: 'false', desc: '是否显示为小圆点' },
    { name: 'content', type: 'ReactNode', desc: '自定义徽标内容' },
    { name: 'showZero', type: 'boolean', default: 'false', desc: '当 count 为 0 时是否显示' },
    { name: 'children', type: 'ReactNode', desc: '包裹的子元素' },
    { name: 'hidden', type: 'boolean', default: 'false', desc: '是否隐藏徽标' },
    { name: 'offset', type: '[number, number]', desc: '徽标偏移量 [x, y]' },
    { name: 'onClick', type: '(e: MouseEvent) => void', desc: '徽标点击回调' },
    { name: 'className', type: 'string', desc: '自定义类名' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
    { name: 'badgeClassName', type: 'string', desc: '徽标自定义类名' },
    { name: 'badgeStyle', type: 'CSSProperties', desc: '徽标自定义样式' },
    { name: 'htmlProps', type: 'HTMLAttributes', desc: '原生属性透传' },
  ];

  // 示例盒子样式
  const boxStyle: React.CSSProperties = {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: 'var(--color-gray-3, #f0f0f0)',
  };

  return (
    <ComponentContentLayout
      zh="徽标"
      en="Badge"
      desc="LandDesign 的徽标组件，用于展示数量、状态标记等信息。"
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title="基础用法"
            id="badge-basic"
            description="Badge 组件的基础用法，支持数字和圆点模式。"
          >
            <CodeOperationContainer>
              <Badge count={5}>
                <div style={boxStyle} />
              </Badge>
              <Badge count={0} showZero>
                <div style={boxStyle} />
              </Badge>
              <Badge dot>
                <div style={boxStyle} />
              </Badge>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 封顶数值 */}
          <ComponentSectionLayout
            title="封顶数值"
            id="badge-max"
            description="通过 max 属性设置封顶数值，超过后显示 max+。"
          >
            <CodeOperationContainer>
              <Badge count={99}>
                <div style={boxStyle} />
              </Badge>
              <Badge count={100}>
                <div style={boxStyle} />
              </Badge>
              <Badge count={999} max={999}>
                <div style={boxStyle} />
              </Badge>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 语义状态 */}
          <ComponentSectionLayout
            title="语义状态"
            id="badge-status"
            description="通过 status 属性设置不同的语义颜色。"
          >
            <CodeOperationContainer>
              <Badge count={8} status="default">
                <div style={boxStyle} />
              </Badge>
              <Badge count={8} status="primary">
                <div style={boxStyle} />
              </Badge>
              <Badge count={8} status="success">
                <div style={boxStyle} />
              </Badge>
              <Badge count={8} status="warning">
                <div style={boxStyle} />
              </Badge>
              <Badge count={8} status="danger">
                <div style={boxStyle} />
              </Badge>
              <Badge count={8} status="info">
                <div style={boxStyle} />
              </Badge>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 外观变体 */}
          <ComponentSectionLayout
            title="外观变体"
            id="badge-variant"
            description="通过 variant 属性设置徽标的外观样式。"
          >
            <CodeOperationContainer>
              <Badge count={8} variant="standard" status="primary">
                <div style={boxStyle} />
              </Badge>
              <Badge count={8} variant="outline" status="primary">
                <div style={boxStyle} />
              </Badge>
              <Badge count={8} variant="light" status="primary">
                <div style={boxStyle} />
              </Badge>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义内容 */}
          <ComponentSectionLayout
            title="自定义内容"
            id="badge-content"
            description="通过 content 属性自定义徽标显示的内容。"
          >
            <CodeOperationContainer>
              <Badge content="NEW" status="primary">
                <div style={boxStyle} />
              </Badge>
              <Badge content="HOT" status="danger">
                <div style={boxStyle} />
              </Badge>
              <Badge content="新" status="warning">
                <div style={boxStyle} />
              </Badge>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 位置控制 */}
          <ComponentSectionLayout
            title="位置控制"
            id="badge-placement"
            description="通过 placement 属性控制徽标的位置。"
          >
            <CodeOperationContainer>
              <Badge dot placement="top-right">
                <div style={boxStyle} />
              </Badge>
              <Badge dot placement="top-left">
                <div style={boxStyle} />
              </Badge>
              <Badge dot placement="bottom-right">
                <div style={boxStyle} />
              </Badge>
              <Badge dot placement="bottom-left">
                <div style={boxStyle} />
              </Badge>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 偏移量 */}
          <ComponentSectionLayout
            title="偏移量"
            id="badge-offset"
            description="通过 offset 属性调整徽标的偏移位置。"
          >
            <CodeOperationContainer>
              <Badge count={5}>
                <div style={boxStyle} />
              </Badge>
              <Badge count={5} offset={[4, 4]}>
                <div style={boxStyle} />
              </Badge>
              <Badge count={5} offset={[-4, -4]}>
                <div style={boxStyle} />
              </Badge>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 独立使用 */}
          <ComponentSectionLayout
            title="独立使用"
            id="badge-standalone"
            description="不包裹子元素时，徽标可以独立使用。"
          >
            <CodeOperationContainer>
              <Badge count={5} />
              <Badge dot status="success" />
              <Badge content="在线" status="success" variant="light" />
              <Badge content="离线" status="info" variant="light" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 动态变化 */}
          <ComponentSectionLayout
            title="动态变化"
            id="badge-dynamic"
            description="徽标数值可以动态变化。"
          >
            <CodeOperationContainer column>
              <div className="flex items-center gap-16">
                <Badge count={count}>
                  <div style={boxStyle} />
                </Badge>
                <Badge dot hidden={count === 0}>
                  <div style={boxStyle} />
                </Badge>
              </div>
              <div className="flex gap-8">
                <button
                  className="px-12 py-4 radius-4 border border-border-primary hover:bg-fill-secondary"
                  onClick={() => setCount(Math.max(0, count - 1))}
                >
                  -
                </button>
                <button
                  className="px-12 py-4 radius-4 border border-border-primary hover:bg-fill-secondary"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
                <button
                  className="px-12 py-4 radius-4 border border-border-primary hover:bg-fill-secondary"
                  onClick={() => setCount(Math.floor(Math.random() * 200))}
                >
                  随机
                </button>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className="flex flex-col gap-12">
          <ComponentPropsTable props={badgeProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
