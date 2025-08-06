import React, { useState } from 'react';
import Badge from ".";
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function BadgeExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  const badgeProps = [
    { name: 'children', type: 'React.ReactNode', desc: '徽标的主要内容' },
    { name: 'content', type: 'React.ReactNode', desc: '自定义徽标内容' },
    { name: 'isDot', type: 'boolean',  desc: '是否为圆点样式', default: 'false' },
    { name: 'count', type: 'number', desc: '徽标数值' },
    { name: 'exceedCount', type: 'number', desc: '显示的最大数值' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
    { name: 'className', type: 'string', desc: '自定义类名' },
  ];

  return (
    <ComponentContentLayout
      zh='徽标'
      en='Badge'
      desc='LandDesign 的徽标组件，支持数字徽标、圆点徽标、自定义内容等功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >

      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='badge-normal'
            description='Badge 组件的基础用法，支持圆点和数字徽标。'
          >
            <CodeOperationContainer>
              <Badge isDot>
                <div className="border border-border-primary radius-8" style={{ width: 72, height: 72 }}></div>
              </Badge>
              <Badge
                count={20}
                exceedCount={99}
              >
                <div className="border border-border-primary radius-8" style={{ width: 72, height: 72 }}></div>
              </Badge>
              <Badge
                count={120}
                exceedCount={99}
              >
                <div className="border border-border-primary radius-8" style={{ width: 72, height: 72 }}></div>
              </Badge>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义徽标内容 */}
          <ComponentSectionLayout
            title='自定义徽标内容'
            id='badge-content'
            description='通过 content 属性可以自定义徽标显示的内容。'
          >
            <CodeOperationContainer style={{ gap: 24 }}>
              <Badge content='NEW'>
                <div className="border border-border-primary radius-8" style={{ width: 72, height: 72 }}></div>
              </Badge>
              <Badge content='hot'>
                <div className="border border-border-primary radius-8" style={{ width: 72, height: 72 }}></div>
              </Badge>
              <Badge content='新'>
                <div className="border border-border-primary radius-8" style={{ width: 72, height: 72 }}></div>
              </Badge>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义徽标样式 */}
          <ComponentSectionLayout
            title='自定义徽标样式'
            id='badge-style'
            description='通过 style 属性可以自定义徽标的样式。'
          >
            <CodeOperationContainer style={{ gap: 24 }}>
              <Badge content='hot' style={{ '--land-badge-content-bg': 'var(--color-orange-6)' } as React.CSSProperties}>
                <div className="border border-border-primary radius-8" style={{ width: 72, height: 72 }}></div>
              </Badge>
              <Badge content='hot' style={{ '--land-badge-content-border': '1px solid var(--color-orange-4)', '--land-badge-content-bg': 'var(--color-orange-2)', '--land-badge-content-color': 'var(--color-orange-6)' } as React.CSSProperties}>
                <div className="border border-border-primary radius-8" style={{ width: 72, height: 72 }}></div>
              </Badge>
              <Badge content='NEW' style={{ '--land-badge-content-border': '1px solid var(--color-blue-4)', '--land-badge-content-bg': 'var(--color-blue-2)', '--land-badge-content-color': 'var(--color-blue-6)' } as React.CSSProperties}>
                <div className="border border-border-primary radius-8" style={{ width: 72, height: 72 }}></div>
              </Badge>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同数值 */}
          <ComponentSectionLayout
            title='不同数值'
            id='badge-count'
            description='通过 count 和 exceedCount 属性可以控制徽标的数值显示。'
          >
            <CodeOperationContainer style={{ gap: 24 }}>
              <Badge count={5}>
                <div className="border border-border-primary radius-8" style={{ width: 72, height: 72 }}></div>
              </Badge>
              <Badge count={99}>
                <div className="border border-border-primary radius-8" style={{ width: 72, height: 72 }}></div>
              </Badge>
              <Badge count={999} exceedCount={99}>
                <div className="border border-border-primary radius-8" style={{ width: 72, height: 72 }}></div>
              </Badge>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 圆点样式 */}
          <ComponentSectionLayout
            title='圆点样式'
            id='badge-dot'
            description='通过 isDot 属性可以显示圆点样式的徽标。'
          >
            <CodeOperationContainer>
              <Badge isDot>
                <div className="border border-border-primary radius-8" style={{ width: 72, height: 72 }}></div>
              </Badge>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={badgeProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
