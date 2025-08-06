import React, { useState } from 'react';
import Tag from '.';
import Icon from '../Icon';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function TagExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  const tagProps = [
    { name: 'children', type: 'ReactNode', desc: '标签内容，可以是文字、图标或其他React节点' },
    { name: 'icon', type: 'ReactNode', desc: '标签图标，显示在标签内容前面的图标' },
    { name: 'theme', type: 'TagTheme (white | dark)', desc: '标签主题：white(白色) | dark(黑色)', default: 'white' },
    { name: 'canDelete', type: 'boolean', desc: '是否可删除，设置为true时会显示删除按钮', default: 'false' },
    { name: 'onDelete', type: '(e: React.MouseEvent) => void;', desc: '删除事件回调，当点击删除按钮时触发' },
    { name: 'background', type: 'string', desc: '背景颜色，自定义标签的背景色' },
    { name: 'color', type: 'string', desc: '文字颜色，自定义标签的文字颜色' },
    { name: 'border', type: 'string', desc: '边框样式，自定义标签的边框' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式，可以传入CSS样式对象来自定义标签外观' },
    { name: 'className', type: 'string', desc: '自定义类名，可以传入额外的CSS类名' },
  ];

  return (
    <ComponentContentLayout
      zh='标签'
      en='Tag'
      desc='LandDesign 的标签组件，用于展示分类、状态等信息。支持图标、删除功能、自定义样式等特性。'
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
            description='Tag 组件的基础用法，展示简单的标签。'
          >
            <CodeOperationContainer>
              <Tag>基础标签</Tag>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 图标标签 */}
          <ComponentSectionLayout
            title='图标标签'
            id='tag-icon'
            description='通过 icon 属性可以为标签添加图标。'
          >
            <CodeOperationContainer>
              <Tag icon={<Icon name="tag" size={20} />}>带图标标签</Tag>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 标签主题 */}
          <ComponentSectionLayout
            title='标签主题'
            id='tag-theme'
            description='支持白色和黑色两种主题风格。'
          >
            <CodeOperationContainer>
              <div
                className="flex gap-16 p-32"
                style={{ backgroundColor: "var(--color-bg-secondary)" }}
              >
                <Tag theme="white">白色主题标签</Tag>
                <Tag theme="gray">黑色主题标签</Tag>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 可删除标签 */}
          <ComponentSectionLayout
            title='可删除标签'
            id='tag-delete'
            description='通过 canDelete 属性可以启用删除功能。'
          >
            <CodeOperationContainer>
              <Tag canDelete>可删除标签</Tag>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义颜色 */}
          <ComponentSectionLayout
            title='自定义颜色'
            id='tag-custom-color'
            description='可以通过 background 和 color 属性自定义标签的颜色。'
          >
            <CodeOperationContainer>
              <div className="flex gap-16">
                <Tag
                  background="var(--color-primary-1)"
                  color="var(--color-primary-6)"
                >
                  主题色标签
                </Tag>
                <Tag
                  background="#f6ffed"
                  color="#52c41a"
                >
                  成功标签
                </Tag>
                <Tag
                  background="#fff2e8"
                  color="#fa8c16"
                >
                  警告标签
                </Tag>
                <Tag
                  background="#fff1f0"
                  color="#f5222d"
                >
                  错误标签
                </Tag>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义边框 */}
          <ComponentSectionLayout
            title='自定义边框'
            id='tag-custom-border'
            description='可以通过 border 属性自定义标签的边框样式。'
          >
            <CodeOperationContainer>
              <div className="flex gap-16">
                <Tag
                  border="1px solid var(--color-primary-3)"
                  color="var(--color-primary-6)"
                  background="transparent"
                >
                  主题色标签（边框）
                </Tag>
                <Tag
                  border="1px dashed var(--color-primary-3)"
                  color="var(--color-primary-6)"
                  background="transparent"
                >
                  主题色标签（虚线边框）
                </Tag>
                <Tag
                  border="2px solid #52c41a"
                  color="#52c41a"
                  background="transparent"
                >
                  成功标签（边框）
                </Tag>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同尺寸 */}
          <ComponentSectionLayout
            title='不同尺寸'
            id='tag-sizes'
            description='可以通过 style 属性自定义标签的尺寸。'
          >
            <CodeOperationContainer>
              <div className="flex gap-16 items-center">
                <Tag style={{ fontSize: '12px', padding: '4px 8px' }}>小标签</Tag>
                <Tag>默认标签</Tag>
                <Tag style={{ fontSize: '16px', padding: '8px 16px' }}>大标签</Tag>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 复杂内容 */}
          <ComponentSectionLayout
            title='复杂内容'
            id='tag-complex'
            description='标签内容支持复杂的 React 节点。'
          >
            <CodeOperationContainer>
              <div className="flex gap-16">
                <Tag icon={<Icon name="star" size={16} />}>
                  <span style={{ fontWeight: 'bold' }}>重要</span>
                </Tag>
                <Tag>
                  <Icon name="check" size={14} />
                  <span style={{ marginLeft: '4px' }}>已完成</span>
                </Tag>
                <Tag canDelete>
                  <span style={{ color: '#1890ff' }}>可删除</span>
                </Tag>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义样式 */}
          <ComponentSectionLayout
            title='自定义样式'
            id='tag-custom-style'
            description='可以通过 style 和 className 属性自定义标签的外观。'
          >
            <CodeOperationContainer>
              <div className="flex gap-16">
                <Tag
                  style={{
                    borderRadius: '20px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  圆角标签
                </Tag>
                <Tag
                  style={{
                    background: 'linear-gradient(45deg, #1890ff, #52c41a)',
                    color: 'white',
                    border: 'none'
                  }}
                >
                  渐变标签
                </Tag>
                <Tag
                  style={{
                    border: '2px solid #1890ff',
                    background: 'transparent',
                    color: '#1890ff',
                    fontWeight: 'bold'
                  }}
                >
                  边框标签
                </Tag>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={tagProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
