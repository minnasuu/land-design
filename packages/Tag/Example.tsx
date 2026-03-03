import React, { useState } from 'react';
import Tag from '.';
import Icon from '../Icon';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import Link from '../Link';

export default function TagExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [checkedTags, setCheckedTags] = useState<string[]>(['React']);

  const tagProps = [
    { name: 'children', type: 'ReactNode', desc: '标签内容' },
    { name: 'icon', type: 'ReactNode', desc: '前置图标' },
    { name: 'suffixIcon', type: 'ReactNode', desc: '后置图标 (不包括关闭图标)' },
    { name: 'size', type: "'small' | 'medium' | 'large'", desc: '标签尺寸', default: "'medium'" },
    { name: 'variant', type: "'filled' | 'outlined' | 'light'", desc: '标签变体：filled(填充) | outlined(边框) | light(浅色)', default: "'light'" },
    { name: 'color', type: "'default' | 'primary' | 'success' | 'warning' | 'error' | 'info' | string", desc: '预设颜色或自定义颜色', default: "'default'" },
    { name: 'shape', type: "'square' | 'rounded' | 'pill'", desc: '标签形状', default: "'rounded'" },
    { name: 'bold', type: 'boolean', desc: '是否加粗', default: 'false' },
    { name: 'closable', type: 'boolean', desc: '是否可关闭', default: 'false' },
    { name: 'clickable', type: 'boolean', desc: '是否可点击 (显示 hover 效果)', default: 'false' },
    { name: 'checkable', type: 'boolean', desc: '是否可选中', default: 'false' },
    { name: 'checked', type: 'boolean', desc: '是否选中 (受控)' },
    { name: 'defaultChecked', type: 'boolean', desc: '默认是否选中', default: 'false' },
    { name: 'disabled', type: 'boolean', desc: '是否禁用', default: 'false' },
    { name: 'visible', type: 'boolean', desc: '是否可见 (受控)' },
    { name: 'defaultVisible', type: 'boolean', desc: '默认是否可见', default: 'true' },
    { name: 'closeIcon', type: 'ReactNode', desc: '自定义关闭图标' },
    { name: 'backgroundColor', type: 'string', desc: '自定义背景色' },
    { name: 'textColor', type: 'string', desc: '自定义文字色' },
    { name: 'borderColor', type: 'string', desc: '自定义边框色' },
    { name: 'border', type: 'string', desc: '自定义边框样式' },
    { name: 'onClick', type: '(e: MouseEvent) => void', desc: '点击事件' },
    { name: 'onClose', type: '(e: MouseEvent) => void', desc: '关闭事件' },
    { name: 'onVisibleChange', type: '(visible: boolean) => void', desc: '可见性变化事件' },
    { name: 'onCheck', type: '(checked: boolean) => void', desc: '选中状态变化事件' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
    { name: 'className', type: 'string', desc: '自定义类名' },
  ];

  const checkableTagProps = [
    { name: 'checked', type: 'boolean', desc: '是否选中 (受控)' },
    { name: 'defaultChecked', type: 'boolean', desc: '默认是否选中', default: 'false' },
    { name: 'onChange', type: '(checked: boolean) => void', desc: '选中状态变化事件' },
  ];

  const tagGroupProps = [
    { name: 'children', type: 'ReactNode', desc: '子元素' },
    { name: 'gap', type: 'number | string', desc: '标签间距', default: '8' },
    { name: 'wrap', type: 'boolean', desc: '是否换行', default: 'true' },
    { name: 'align', type: "'flex-start' | 'center' | 'flex-end'", desc: '对齐方式', default: "'flex-start'" },
    { name: 'maxCount', type: 'number', desc: '最大显示数量，超出显示 +N' },
    { name: 'maxCountRender', type: '(count: number) => ReactNode', desc: '超出数量的自定义渲染' },
  ];

  const handleTagCheck = (tag: string, checked: boolean) => {
    if (checked) {
      setCheckedTags([...checkedTags, tag]);
    } else {
      setCheckedTags(checkedTags.filter((t) => t !== tag));
    }
  };

  return (
    <ComponentContentLayout
      zh="标签"
      en="Tag"
      desc="用于展示分类、状态、属性等信息。支持多种预设颜色、变体样式、可选中和可关闭功能。"
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className="flex flex-col gap-24">
          {/* 基础用法 */}
          <ComponentSectionLayout
            title="基础用法"
            id="basic-usage"
            description="最简单的标签用法。"
          >
            <CodeOperationContainer>
              <Tag>标签</Tag>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 预设颜色 */}
          <ComponentSectionLayout
            title="预设颜色"
            id="tag-colors"
            description="支持 default、primary、success、warning、error、info 六种预设颜色。"
          >
            <CodeOperationContainer>
              <div className="flex gap-8 flex-wrap">
                <Tag color="default">Default</Tag>
                <Tag color="primary">Primary</Tag>
                <Tag color="success">Success</Tag>
                <Tag color="warning">Warning</Tag>
                <Tag color="error">Error</Tag>
                <Tag color="info">Info</Tag>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 变体样式 */}
          <ComponentSectionLayout
            title="变体样式"
            id="tag-variants"
            description="支持 light(浅色)、filled(填充)、outlined(边框) 三种变体。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-12">
                <div className="flex gap-8 flex-wrap">
                  <Tag color="primary" variant="light">Light</Tag>
                  <Tag color="success" variant="light">Light</Tag>
                  <Tag color="warning" variant="light">Light</Tag>
                  <Tag color="error" variant="light">Light</Tag>
                </div>
                <div className="flex gap-8 flex-wrap">
                  <Tag color="primary" variant="filled">Filled</Tag>
                  <Tag color="success" variant="filled">Filled</Tag>
                  <Tag color="warning" variant="filled">Filled</Tag>
                  <Tag color="error" variant="filled">Filled</Tag>
                </div>
                <div className="flex gap-8 flex-wrap">
                  <Tag color="primary" variant="outlined">Outlined</Tag>
                  <Tag color="success" variant="outlined">Outlined</Tag>
                  <Tag color="warning" variant="outlined">Outlined</Tag>
                  <Tag color="error" variant="outlined">Outlined</Tag>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 尺寸 */}
          <ComponentSectionLayout
            title="尺寸"
            id="tag-sizes"
            description="支持 small、medium、large 三种尺寸。"
          >
            <CodeOperationContainer>
              <div className="flex gap-8 items-center">
                <Tag size="small" color="primary">Small</Tag>
                <Tag size="medium" color="primary">Medium</Tag>
                <Tag size="large" color="primary">Large</Tag>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 形状 */}
          <ComponentSectionLayout
            title="形状"
            id="tag-shapes"
            description="支持 square(方形)、rounded(圆角)、pill(药丸) 三种形状。"
          >
            <CodeOperationContainer>
              <div className="flex gap-8 items-center">
                <Tag shape="square" color="primary">Square</Tag>
                <Tag shape="rounded" color="primary">Rounded</Tag>
                <Tag shape="pill" color="primary">Pill</Tag>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 带图标 */}
          <ComponentSectionLayout
            title="带图标"
            id="tag-icon"
            description="通过 icon 和 suffixIcon 属性添加前置和后置图标。"
          >
            <CodeOperationContainer>
              <div className="flex gap-8 flex-wrap">
                <Tag icon={<Icon name="tag" size={14} />} color="primary">
                  带图标
                </Tag>
                <Tag icon={<Icon name="check" size={14} />} color="success">
                  已完成
                </Tag>
                <Tag icon={<Icon name="star" size={14} />} color="warning">
                  收藏
                </Tag>
                <Tag suffixIcon={<Icon name="right" size={12} />} color="info" clickable>
                  更多
                </Tag>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 可关闭 */}
          <ComponentSectionLayout
            title="可关闭"
            id="tag-closable"
            description="设置 closable 属性使标签可关闭。"
          >
            <CodeOperationContainer>
              <div className="flex gap-8 flex-wrap">
                <Tag closable onClose={() => console.log('关闭')}>
                  可关闭
                </Tag>
                <Tag closable color="primary">
                  Primary
                </Tag>
                <Tag closable color="success" variant="filled">
                  Success
                </Tag>
                <Tag closable color="error" variant="outlined">
                  Error
                </Tag>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 可选中 */}
          <ComponentSectionLayout
            title="可选中"
            id="tag-checkable"
            description="使用 Tag.CheckableTag 或设置 checkable 属性实现可选中标签。"
          >
            <CodeOperationContainer>
              <div className="flex gap-8 flex-wrap">
                {['React', 'Vue', 'Angular', 'Svelte'].map((tag) => (
                  <Tag.CheckableTag
                    key={tag}
                    color="primary"
                    checked={checkedTags.includes(tag)}
                    onChange={(checked) => handleTagCheck(tag, checked)}
                  >
                    {tag}
                  </Tag.CheckableTag>
                ))}
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用 */}
          <ComponentSectionLayout
            title="禁用"
            id="tag-disabled"
            description="设置 disabled 属性禁用标签。"
          >
            <CodeOperationContainer>
              <div className="flex gap-8 flex-wrap">
                <Tag disabled>禁用</Tag>
                <Tag disabled closable>禁用可关闭</Tag>
                <Tag disabled checkable>禁用可选中</Tag>
                <Tag disabled color="primary" variant="filled">禁用填充</Tag>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 标签组 */}
          <ComponentSectionLayout
            title="标签组"
            id="tag-group"
            description="使用 Tag.Group 组织多个标签，支持间距、换行、最大数量等配置。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <Tag.Group gap={12}>
                  <Tag color="primary">标签1</Tag>
                  <Tag color="success">标签2</Tag>
                  <Tag color="warning">标签3</Tag>
                  <Tag color="error">标签4</Tag>
                </Tag.Group>

                <Tag.Group maxCount={3}>
                  <Tag color="primary">标签1</Tag>
                  <Tag color="success">标签2</Tag>
                  <Tag color="warning">标签3</Tag>
                  <Tag color="error">标签4</Tag>
                  <Tag color="info">标签5</Tag>
                </Tag.Group>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义颜色 */}
          <ComponentSectionLayout
            title="自定义颜色"
            id="tag-custom-color"
            description="传入非预设的颜色值，或使用 backgroundColor、textColor、borderColor 属性自定义颜色。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-12">
                <div className="flex gap-8 flex-wrap">
                  <Tag color="#f50">自定义色1</Tag>
                  <Tag color="#2db7f5">自定义色2</Tag>
                  <Tag color="#87d068">自定义色3</Tag>
                  <Tag color="#108ee9">自定义色4</Tag>
                </div>
                <div className="flex gap-8 flex-wrap">
                  <Tag color="#f50" variant="filled">Filled</Tag>
                  <Tag color="#2db7f5" variant="outlined">Outlined</Tag>
                  <Tag color="#87d068" variant="light">Light</Tag>
                </div>
                <div className="flex gap-8 flex-wrap">
                  <Tag
                    backgroundColor="#fff0f6"
                    textColor="#eb2f96"
                    borderColor="#ffadd2"
                    border="1px solid"
                  >
                    完全自定义
                  </Tag>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义样式 */}
          <ComponentSectionLayout
            title="自定义样式"
            id="tag-custom-style"
            description="通过 style 属性自定义标签外观。"
          >
            <CodeOperationContainer>
              <div className="flex gap-8 flex-wrap">
                <Tag
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                  }}
                >
                  渐变标签
                </Tag>
                <Tag
                  style={{
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  }}
                  color="primary"
                  variant="filled"
                >
                  阴影标签
                </Tag>
                <Tag bold color="success">
                  加粗标签
                </Tag>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className="flex flex-col gap-12">
          <h3 className="text-sm font-bold">Tag Props</h3>
          <ComponentPropsTable props={tagProps} />

          <h3 className="text-sm font-bold" id="CheckableTag-API">Tag.CheckableTag Props</h3>
          <p className="text-xs text-secondary">继承 Tag 所有属性，额外属性如下：</p>
          <ComponentPropsTable props={checkableTagProps} />

          <h3 className="text-sm font-bold" id="TagGroup-API">Tag.Group Props</h3>
          <ComponentPropsTable props={tagGroupProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
