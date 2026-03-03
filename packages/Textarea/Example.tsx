import { useState } from 'react';
import Textarea from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function TextareaExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('这是一个带有初始值的文本域');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [autoSizeValue, setAutoSizeValue] = useState('');

  const TextareaProps = [
    { name: 'variant', type: '"outline" | "filled" | "transparent"', default: '"outline"', desc: '文本域外观变体' },
    { name: 'status', type: '"default" | "primary" | "warning" | "danger" | "success"', default: '"default"', desc: '语义状态' },
    { name: 'textAlign', type: '"left" | "center" | "right"', default: '"left"', desc: '文字对齐方式' },
    { name: 'value', type: 'string', desc: '输入值（受控）' },
    { name: 'defaultValue', type: 'string', desc: '默认值（非受控）' },
    { name: 'placeholder', type: 'string', default: '"请输入"', desc: '占位符文本' },
    { name: 'disabled', type: 'boolean', default: 'false', desc: '是否禁用' },
    { name: 'readOnly', type: 'boolean', default: 'false', desc: '是否只读' },
    { name: 'maxLength', type: 'number', desc: '最大字符数' },
    { name: 'showCount', type: 'boolean', default: 'false', desc: '是否显示字数统计' },
    { name: 'countFormatter', type: '(count: number, maxLength?: number) => string', desc: '自定义字数统计格式' },
    { name: 'rows', type: 'number', default: '4', desc: '文本域行数' },
    { name: 'minRows', type: 'number', desc: '最小行数（配合 autoSize）' },
    { name: 'maxRows', type: 'number', desc: '最大行数（配合 autoSize）' },
    { name: 'autoSize', type: 'boolean | { minRows?: number; maxRows?: number }', default: 'false', desc: '自动调整高度' },
    { name: 'resize', type: '"none" | "both" | "horizontal" | "vertical"', default: '"none"', desc: '调整大小方式' },
    { name: 'block', type: 'boolean', default: 'false', desc: '是否块级元素' },
    { name: 'width', type: 'number | string', desc: '自定义宽度' },
    { name: 'height', type: 'number | string', desc: '自定义高度' },
    { name: 'beforeContent', type: 'ReactNode', desc: '结构前缀（文本域上方）' },
    { name: 'afterContent', type: 'ReactNode', desc: '结构后缀（文本域下方）' },
    { name: 'onChange', type: '(value: string, e?: ChangeEvent) => void', desc: '值变化回调' },
    { name: 'onFocus', type: '(e: FocusEvent) => void', desc: '聚焦回调' },
    { name: 'onBlur', type: '(e: FocusEvent) => void', desc: '失焦回调' },
    { name: 'onKeyDown', type: '(e: KeyboardEvent) => void', desc: '键盘按下回调' },
    { name: 'onEnter', type: '(value: string, e?: KeyboardEvent) => void', desc: '回车回调' },
    { name: 'onClear', type: '() => void', desc: '清除回调（传入即显示清除按钮）' },
    { name: 'className', type: 'string', desc: '自定义类名' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
    { name: 'htmlProps', type: 'TextareaHTMLAttributes', desc: '原生属性透传' },
  ];

  return (
    <ComponentContentLayout
      zh='Textarea'
      en='Textarea'
      desc='多行文本输入框，支持多种外观变体、语义状态、自动调整高度等功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className='flex flex-col gap-24'>
          {/* 外观变体 */}
          <ComponentSectionLayout
            title='外观变体'
            id='textarea-variant'
            description='Textarea 组件支持三种外观变体：outline（描边）、filled（填充）、transparent（透明）。'
          >
            <CodeOperationContainer column>
              <div className="flex flex-col gap-16">
                <div>
                  <div className="fs-12 color-gray-4 mb-8">Outline（描边样式）</div>
                  <Textarea
                    variant="outline"
                    placeholder="描边样式..."
                    value={value1}
                    onChange={setValue1}
                  />
                </div>
                <div>
                  <div className="fs-12 color-gray-4 mb-8">Filled（填充样式）</div>
                  <Textarea
                    variant="filled"
                    placeholder="填充样式..."
                    value={value2}
                    onChange={setValue2}
                  />
                </div>
                <div>
                  <div className="fs-12 color-gray-4 mb-8">Transparent（透明样式）</div>
                  <Textarea
                    variant="transparent"
                    placeholder="透明样式..."
                    value={value3}
                    onChange={setValue3}
                  />
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 语义状态 */}
          <ComponentSectionLayout
            title='语义状态'
            id='textarea-status'
            description='通过 status 属性设置不同的语义状态。'
          >
            <CodeOperationContainer column>
              <div className="flex flex-col gap-16">
                <Textarea status="default" placeholder="Default 状态" />
                <Textarea status="primary" placeholder="Primary 状态" />
                <Textarea status="warning" placeholder="Warning 状态" />
                <Textarea status="danger" placeholder="Danger 状态" />
                <Textarea status="success" placeholder="Success 状态" />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 字数统计 */}
          <ComponentSectionLayout
            title='字数统计'
            id='textarea-count'
            description='通过 showCount 显示字数统计，配合 maxLength 限制最大字符数。'
          >
            <CodeOperationContainer column>
              <div className="flex flex-col gap-16">
                <div>
                  <div className="fs-12 color-gray-4 mb-8">基础字数统计</div>
                  <Textarea
                    showCount
                    placeholder="输入后显示字数..."
                    value={value4}
                    onChange={setValue4}
                  />
                </div>
                <div>
                  <div className="fs-12 color-gray-4 mb-8">限制最大字符数</div>
                  <Textarea
                    showCount
                    maxLength={100}
                    placeholder="最多输入100个字符..."
                    value={value5}
                    onChange={setValue5}
                  />
                </div>
                <div>
                  <div className="fs-12 color-gray-4 mb-8">自定义字数格式</div>
                  <Textarea
                    showCount
                    maxLength={50}
                    countFormatter={(count, max) => `已输入 ${count} 字，还可输入 ${max! - count} 字`}
                    placeholder="自定义格式..."
                  />
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自动调整高度 */}
          <ComponentSectionLayout
            title='自动调整高度'
            id='textarea-autosize'
            description='通过 autoSize 属性让文本域高度根据内容自动调整。'
          >
            <CodeOperationContainer column>
              <div className="flex flex-col gap-16">
                <div>
                  <div className="fs-12 color-gray-4 mb-8">自动调整（无限制）</div>
                  <Textarea
                    resize='vertical'
                    placeholder="输入更多内容，高度自动增加..."
                    value={autoSizeValue}
                    onChange={setAutoSizeValue}
                  />
                </div>
                <div>
                  <div className="fs-12 color-gray-4 mb-8">限制最小/最大行数</div>
                  <Textarea
                    autoSize={{ minRows: 2, maxRows: 6 }}
                    placeholder="最小2行，最大6行..."
                  />
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 前后置内容 */}
          <ComponentSectionLayout
            title='前后置内容'
            id='textarea-affix'
            description='通过 beforeContent 和 afterContent 在文本域外部添加内容。'
          >
            <CodeOperationContainer column>
              <div className="flex flex-col gap-16">
                <Textarea
                  beforeContent={<div className="fw-600">问题描述</div>}
                  afterContent={<div className="fs-12 color-gray-4">请详细描述您遇到的问题，以便我们更好地帮助您。</div>}
                  placeholder="请输入问题描述..."
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 清除功能 */}
          <ComponentSectionLayout
            title='清除功能'
            id='textarea-clear'
            description='传入 onClear 回调即可显示清除按钮。'
          >
            <CodeOperationContainer column>
              <div className="flex flex-col gap-16">
                <Textarea
                  placeholder="输入内容后可以点击清除按钮..."
                  value={value1}
                  onChange={setValue1}
                  onClear={() => setValue1('')}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用和只读 */}
          <ComponentSectionLayout
            title='禁用和只读'
            id='textarea-disabled'
            description='通过 disabled 禁用输入，通过 readOnly 设置只读状态。'
          >
            <CodeOperationContainer column>
              <div className="flex flex-col gap-16">
                <div>
                  <div className="fs-12 color-gray-4 mb-8">禁用状态</div>
                  <Textarea
                    disabled
                    value="这是一个禁用的文本域"
                    placeholder="禁用状态"
                  />
                </div>
                <div>
                  <div className="fs-12 color-gray-4 mb-8">只读状态</div>
                  <Textarea
                    readOnly
                    value="这是一个只读的文本域，可以选择复制但不能编辑"
                    placeholder="只读状态"
                  />
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义尺寸 */}
          <ComponentSectionLayout
            title='自定义尺寸'
            id='textarea-custom-size'
            description='通过 width、height、rows 等属性自定义文本域尺寸。'
          >
            <CodeOperationContainer column>
              <div className="flex flex-col gap-16">
                <div>
                  <div className="fs-12 color-gray-4 mb-8">自定义宽度和高度</div>
                  <Textarea
                    width={400}
                    height={120}
                    placeholder="400px 宽 × 120px 高"
                  />
                </div>
                <div>
                  <div className="fs-12 color-gray-4 mb-8">块级元素（100% 宽度）</div>
                  <Textarea
                    block
                    placeholder="占满父容器宽度"
                  />
                </div>
                <div>
                  <div className="fs-12 color-gray-4 mb-8">自定义行数</div>
                  <Textarea
                    rows={6}
                    placeholder="6 行高度"
                  />
                </div>
                <div>
                  <div className="fs-12 color-gray-4 mb-8">禁止调整大小</div>
                  <Textarea
                    resize="none"
                    placeholder="不可拖拽调整大小"
                  />
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 回车事件 */}
          <ComponentSectionLayout
            title='回车事件'
            id='textarea-enter'
            description='通过 onEnter 监听回车事件（不包含 Shift+Enter）。'
          >
            <CodeOperationContainer column>
              <div className="flex flex-col gap-16">
                <Textarea
                  placeholder="按回车触发提交（Shift+Enter 换行）..."
                  onEnter={(value) => {
                    console.log('提交内容:', value);
                    alert(`提交内容: ${value}`);
                  }}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={TextareaProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
