// ============================================================================
// TagInput 组件示例
// @description 标签输入框组件的使用示例
// @author Land Design System
// ============================================================================

import { useState } from 'react';
import TagInput from '.';
import Icon from '../Icon';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function TagInputExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [tags, setTags] = useState<string[]>(['标签1', '标签2']);
  const [controlledTags, setControlledTags] = useState<string[]>([]);

  const tagInputProps = [
    { name: 'value', type: '(string | TagItem)[]', desc: '标签数据（受控）' },
    { name: 'defaultValue', type: '(string | TagItem)[]', desc: '默认标签数据（非受控）' },
    { name: 'placeholder', type: 'string', desc: '输入框占位符', default: '按下回车以输入标签' },
    { name: 'maxCount', type: 'number', desc: '最大标签数量', default: '10' },
    { name: 'maxTagLength', type: 'number', desc: '单个标签最大长度' },
    { name: 'allowDuplicate', type: 'boolean', desc: '是否允许重复标签', default: 'false' },
    { name: 'variant', type: "'outline' | 'fill'", desc: '外观变体', default: 'fill' },
    { name: 'size', type: "'small' | 'default' | 'large'", desc: '尺寸', default: 'default' },
    { name: 'disabled', type: 'boolean', desc: '是否禁用', default: 'false' },
    { name: 'readOnly', type: 'boolean', desc: '是否只读', default: 'false' },
    { name: 'showClear', type: 'boolean', desc: '是否显示清空按钮', default: 'true' },
    { name: 'width', type: 'number | string', desc: '宽度', default: '100%' },
    { name: 'prefix', type: 'ReactNode', desc: '前置内容' },
    { name: 'suffix', type: 'ReactNode', desc: '后置内容' },
    { name: 'renderTag', type: '(tag, index, onClose) => ReactNode', desc: '自定义标签渲染' },
    { name: 'tagStyle', type: 'CSSProperties', desc: '标签自定义样式' },
    { name: 'tagClassName', type: 'string', desc: '标签自定义类名' },
    { name: 'onChange', type: "(tags, trigger: 'add' | 'remove' | 'clear') => void", desc: '标签变化回调' },
    { name: 'onAdd', type: '(tag: string) => void', desc: '添加标签回调' },
    { name: 'onRemove', type: '(tag, index) => void', desc: '删除标签回调' },
    { name: 'onClear', type: '() => void', desc: '清空回调' },
    { name: 'onEnter', type: '(inputValue, e) => void', desc: '回车回调' },
    { name: 'onInputChange', type: '(value, e) => void', desc: '输入变化回调' },
    { name: 'onFocus', type: '(e) => void', desc: '聚焦回调' },
    { name: 'onBlur', type: '(e) => void', desc: '失焦回调' },
    { name: 'className', type: 'string', desc: '自定义类名' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
  ];

  return (
    <ComponentContentLayout
      zh="标签输入框"
      en="TagInput"
      desc="标签输入框组件，支持动态添加和删除标签，提供受控/非受控模式、尺寸变体、自定义渲染等功能。"
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title="基础用法"
            id="tag-input-basic"
            description="TagInput 的基础用法，按回车添加标签，点击标签删除按钮或按退格键删除标签。"
          >
            <CodeOperationContainer>
              <TagInput
                defaultValue={['React', 'Vue']}
                width={320}
                placeholder="输入后按回车添加"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 受控模式 */}
          <ComponentSectionLayout
            title="受控模式"
            id="tag-input-controlled"
            description="通过 value 和 onChange 实现受控模式。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-8">
                <TagInput
                  value={controlledTags}
                  onChange={(newTags) => setControlledTags(newTags as string[])}
                  width={320}
                  placeholder="受控模式"
                />
                <div className="text-sm text-gray-500">
                  当前标签：{controlledTags.join(', ') || '无'}
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 外观变体 */}
          <ComponentSectionLayout
            title="外观变体"
            id="tag-input-variant"
            description="支持 fill（填充）和 outline（描边）两种外观变体。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-12">
                <TagInput
                  variant="fill"
                  defaultValue={['Fill 变体']}
                  width={320}
                  placeholder="Fill 变体（默认）"
                />
                <TagInput
                  variant="outline"
                  defaultValue={['Outline 变体']}
                  width={320}
                  placeholder="Outline 变体"
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 尺寸变体 */}
          <ComponentSectionLayout
            title="尺寸变体"
            id="tag-input-size"
            description="支持 small、default、large 三种尺寸。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-12">
                <TagInput
                  size="small"
                  defaultValue={['Small']}
                  width={320}
                  placeholder="小尺寸"
                />
                <TagInput
                  size="default"
                  defaultValue={['Default']}
                  width={320}
                  placeholder="默认尺寸"
                />
                <TagInput
                  size="large"
                  defaultValue={['Large']}
                  width={320}
                  placeholder="大尺寸"
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 数量限制 */}
          <ComponentSectionLayout
            title="数量限制"
            id="tag-input-max-count"
            description="通过 maxCount 限制最大标签数量。"
          >
            <CodeOperationContainer>
              <TagInput
                maxCount={5}
                defaultValue={['标签1', '标签2', '标签3']}
                width={320}
                placeholder="最多 5 个标签"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 前后置内容 */}
          <ComponentSectionLayout
            title="前后置内容"
            id="tag-input-affix"
            description="通过 prefix 和 suffix 添加前后置内容。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-12">
                <TagInput
                  prefix={<Icon name="tag" />}
                  defaultValue={['带前置图标']}
                  width={320}
                />
                <TagInput
                  suffix={<span className="text-sm text-gray-400">0/10</span>}
                  defaultValue={['带后置内容']}
                  width={320}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用和只读 */}
          <ComponentSectionLayout
            title="禁用和只读"
            id="tag-input-disabled"
            description="支持禁用和只读状态。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-12">
                <TagInput
                  disabled
                  defaultValue={['禁用状态']}
                  width={320}
                />
                <TagInput
                  readOnly
                  defaultValue={['只读状态']}
                  width={320}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义标签样式 */}
          <ComponentSectionLayout
            title="自定义标签样式"
            id="tag-input-custom-tag"
            description="通过 tagStyle 或 tagClassName 自定义标签样式。"
          >
            <CodeOperationContainer>
              <TagInput
                defaultValue={['自定义', '标签', '样式']}
                width={320}
                tagStyle={{
                  backgroundColor: 'var(--color-primary-1)',
                  color: 'var(--color-primary)',
                  border: '1px solid var(--color-primary-3)',
                }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className="flex flex-col gap-12">
          <ComponentPropsTable props={tagInputProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
