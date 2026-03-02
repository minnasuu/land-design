// ============================================================================
// Select 组件示例
// @description 选择器组件的使用示例
// @author Land Design System
// ============================================================================

import { useState } from 'react';
import Select from '.';
import Tag from '../Tag';
import Link from '../Link';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import { SelectOption } from './props';

export default function SelectExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  // 单选状态
  const [singleValue, setSingleValue] = useState<string | number>('');

  // 多选状态
  const [multipleValues, setMultipleValues] = useState<(string | number)[]>([]);
  const [checkboxValues, setCheckboxValues] = useState<(string | number)[]>([]);
  const [customDisplayValues, setCustomDisplayValues] = useState<(string | number)[]>([]);

  // 示例数据
  const basicOptions: SelectOption[] = [
    { key: '1', label: '选项一' },
    { key: '2', label: '选项二' },
    { key: '3', label: '选项三' },
    { key: '4', label: '选项四' },
    { key: '5', label: '选项五' },
  ];

  const industryOptions: SelectOption[] = [
    { key: 'ecommerce', label: '电商' },
    { key: 'game', label: '游戏' },
    { key: 'education', label: '教育' },
    { key: 'finance', label: '金融' },
    { key: 'medical', label: '医疗' },
    { key: 'other', label: '其他' },
  ];

  const tipOptions: SelectOption[] = [
    { key: '1', label: '选项一', tip: '这是选项一的提示' },
    { key: '2', label: '选项二', tip: '这是选项二的提示' },
    { key: '3', label: '选项三（禁用）', disabled: true, tip: '此选项暂无法选择' },
  ];

  const selectProps = [
    { name: 'options', type: 'SelectOption[]', desc: '选项数据' },
    { name: 'value', type: 'string | number', desc: '当前选中值（单选）' },
    { name: 'values', type: '(string | number)[]', desc: '当前选中值数组（多选）' },
    { name: 'multiple', type: 'boolean', desc: '是否多选模式', default: 'false' },
    { name: 'placeholder', type: 'string', desc: '占位符', default: '请选择' },
    { name: 'variant', type: "'outline' | 'fill' | 'text' | 'transparent'", desc: '外观变体', default: 'outline' },
    { name: 'size', type: "'small' | 'default' | 'large'", desc: '尺寸', default: 'default' },
    { name: 'disabled', type: 'boolean', desc: '是否禁用', default: 'false' },
    { name: 'width', type: 'number | string', desc: '宽度' },
    { name: 'showCheckbox', type: 'boolean', desc: '多选时是否显示复选框', default: 'false' },
    { name: 'separator', type: 'string', desc: '多选时的分隔符', default: '，' },
    { name: 'maxDisplayCount', type: 'number', desc: '多选时最大显示数量' },
    { name: 'tip', type: 'ReactNode', desc: '选择框提示内容' },
    { name: 'tipProps', type: 'PopOverProps', desc: '选择框提示配置' },
    { name: 'customValueDisplay', type: '(params) => ReactNode', desc: '自定义选中内容显示' },
    { name: 'renderOption', type: '(option, isSelected) => ReactNode', desc: '自定义选项渲染' },
    { name: 'emptyContent', type: 'ReactNode', desc: '空数据时的显示内容', default: '暂无数据' },
    { name: 'onChange', type: '(value, option, selectedOptions?) => void', desc: '选中变化回调' },
    { name: 'onOpenChange', type: '(open: boolean) => void', desc: '下拉面板展开/收起回调' },
    { name: 'className', type: 'string', desc: '自定义类名' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
  ];

  const optionTypeProps = [
    { name: 'key', type: 'string | number', desc: '选项唯一标识' },
    { name: 'label', type: 'ReactNode', desc: '选项显示文本' },
    { name: 'tip', type: 'ReactNode', desc: '选项提示内容' },
    { name: 'iconTip', type: 'ReactNode', desc: '选项图标提示' },
    { name: 'disabled', type: 'boolean', desc: '是否禁用' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
    { name: 'className', type: 'string', desc: '自定义类名' },
  ];

  return (
    <ComponentContentLayout
      zh="选择器"
      en="Select"
      desc="选择器组件，支持单选和多选模式，提供丰富的自定义显示和交互功能。"
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title="基础用法"
            id="select-basic"
            description="Select 组件的基础用法，点击触发下拉选择。"
          >
            <CodeOperationContainer>
              <Select
                options={basicOptions}
                value={singleValue}
                onChange={(value) => setSingleValue(value as string)}
                width={200}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 外观变体 */}
          <ComponentSectionLayout
            title="外观变体"
            id="select-variant"
            description="支持 outline、fill、text、transparent 四种外观变体。"
          >
            <CodeOperationContainer>
              <Select options={basicOptions} variant="outline" placeholder="Outline" width={160} />
              <Select options={basicOptions} variant="fill" placeholder="Fill" width={160} />
              <Select options={basicOptions} variant="text" placeholder="Text" width={160} />
              <Select options={basicOptions} variant="transparent" placeholder="Transparent" width={160} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 尺寸变体 */}
          <ComponentSectionLayout
            title="尺寸变体"
            id="select-size"
            description="支持 small、default、large 三种尺寸。"
          >
            <CodeOperationContainer>
              <Select options={basicOptions} size="small" placeholder="Small" width={160} />
              <Select options={basicOptions} size="default" placeholder="Default" width={160} />
              <Select options={basicOptions} size="large" placeholder="Large" width={160} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 多选模式 */}
          <ComponentSectionLayout
            title="多选模式"
            id="select-multiple"
            description="通过 multiple 属性启用多选模式，支持 separator 和 maxDisplayCount 配置。"
          >
            <CodeOperationContainer>
              <Select
                options={basicOptions}
                multiple
                values={multipleValues}
                onChange={(_, __, selectedOptions) => {
                  setMultipleValues(selectedOptions?.map((opt) => opt.key) ?? []);
                }}
                width={240}
                placeholder="多选模式"
              />
              <Select
                options={basicOptions}
                multiple
                values={multipleValues}
                separator=" | "
                maxDisplayCount={2}
                onChange={(_, __, selectedOptions) => {
                  setMultipleValues(selectedOptions?.map((opt) => opt.key) ?? []);
                }}
                width={240}
                placeholder="最多显示2个"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 带复选框的多选 */}
          <ComponentSectionLayout
            title="带复选框的多选"
            id="select-checkbox"
            description="通过 showCheckbox 属性在多选模式下显示复选框。"
          >
            <CodeOperationContainer>
              <Select
                options={basicOptions}
                multiple
                showCheckbox
                values={checkboxValues}
                onChange={(_, __, selectedOptions) => {
                  setCheckboxValues(selectedOptions?.map((opt) => opt.key) ?? []);
                }}
                width={240}
                placeholder="带复选框"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义显示 */}
          <ComponentSectionLayout
            title="自定义显示"
            id="select-custom-display"
            description="通过 customValueDisplay 自定义选中内容的显示方式。"
          >
            <CodeOperationContainer>
              <Select
                options={industryOptions}
                multiple
                values={customDisplayValues}
                onChange={(_, __, selectedOptions) => {
                  setCustomDisplayValues(selectedOptions?.map((opt) => opt.key) ?? []);
                }}
                width={320}
                customValueDisplay={({ items, placeholder }) => {
                  if (items.length === 0) {
                    return <span style={{ color: 'var(--color-text-tertiary)' }}>{placeholder}</span>;
                  }
                  return (
                    <div className="flex items-center gap-4">
                      {items.slice(0, 3).map((item) => (
                        <Tag
                          key={item.key}
                          style={{
                            background: 'var(--color-primary-1)',
                            border: '1px solid var(--color-primary-3)',
                            color: 'var(--color-primary)',
                          }}
                        >
                          {item.label}
                        </Tag>
                      ))}
                      {items.length > 3 && (
                        <span style={{ color: 'var(--color-text-secondary)', fontSize: '12px' }}>
                          +{items.length - 3}
                        </span>
                      )}
                    </div>
                  );
                }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 选项提示 */}
          <ComponentSectionLayout
            title="选项提示"
            id="select-option-tip"
            description="选项可以配置 tip 属性显示提示内容。"
          >
            <CodeOperationContainer>
              <Select options={tipOptions} width={200} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 选择框提示 */}
          <ComponentSectionLayout
            title="选择框提示"
            id="select-tip"
            description="通过 tip 属性为选择框添加提示内容。"
          >
            <CodeOperationContainer>
              <Select
                options={basicOptions}
                tip="这是选择框的提示内容"
                width={200}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用状态 */}
          <ComponentSectionLayout
            title="禁用状态"
            id="select-disabled"
            description="通过 disabled 属性禁用选择器。"
          >
            <CodeOperationContainer>
              <Select options={basicOptions} disabled variant="outline" placeholder="Outline 禁用" width={160} />
              <Select options={basicOptions} disabled variant="fill" placeholder="Fill 禁用" width={160} />
              <Select options={basicOptions} disabled variant="text" placeholder="Text 禁用" width={160} />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className="flex flex-col gap-24">
          <div>
            <h3 className="text-base font-semibold mb-12">Select Props</h3>
            <ComponentPropsTable props={selectProps} />
          </div>
          <div id="SelectOption-API">
            <h3 className="text-base font-semibold mb-12">SelectOption</h3>
            <ComponentPropsTable props={optionTypeProps} />
          </div>
        </div>
      )}
    </ComponentContentLayout>
  );
}
