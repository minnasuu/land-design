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

  const TextareaProps = [
    { name: 'type', type: '"border" | "background" | "transparent"', desc: '文本域类型，控制边框和背景样式' },
    { name: 'value', type: 'string', desc: '输入值，受控组件' },
    { name: 'placeholder', type: 'string', desc: '占位符文本' },
    { name: 'disabled', type: 'boolean', desc: '是否禁用' },
    { name: 'maxLength', type: 'number', desc: '允许输入的最大字符数' },
    { name: 'showNumber', type: 'boolean', desc: '是否显示字数统计' },
    { name: 'rows', type: 'number', desc: '文本域行数' },
    { name: 'resize', type: '"none" | "both" | "horizontal" | "vertical"', desc: '是否可调整大小' },
    { name: 'beforeContent', type: 'ReactNode', desc: '在文本域上方添加的内容' },
    { name: 'afterContent', type: 'ReactNode', desc: '在文本域下方添加的内容' },
    { name: 'prefix', type: 'ReactNode', desc: '在文本域内部左上角添加的内容' },
    { name: 'suffix', type: 'ReactNode', desc: '在文本域内部右下角添加的内容' },
    { name: 'width', type: 'number | string', desc: '文本域宽度' },
    { name: 'height', type: 'number | string', desc: '文本域高度' },
    { name: 'textAlign', type: '"left" | "center" | "right"', desc: '文字对齐方式' },
    { name: 'onChange', type: '(val: string, e?: ChangeEvent) => void', desc: '值变化事件' },
    { name: 'onFocus', type: '(e: FocusEvent) => void', desc: '聚焦事件' },
    { name: 'onBlur', type: '(e: FocusEvent) => void', desc: '失焦事件' },
    { name: 'onClear', type: '() => void', desc: '清除事件' },
    { name: 'className', type: 'string', desc: '自定义类名' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
  ];

  return (
    <ComponentContentLayout
      zh='Textarea'
      en='Textarea'
      desc='LandDesign 的 Textarea 组件，支持多种样式类型、前后缀、字数统计等功能。'
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
            description='Textarea 组件的基础用法，支持不同的样式类型。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div>
                  <h4>边框样式 (border)</h4>
                  <Textarea
                    type="border"
                    placeholder="请输入内容..."
                    value={value1}
                    onChange={setValue1}
                  />
                </div>
                <div>
                  <h4>背景样式 (background)</h4>
                  <Textarea
                    type="background"
                    placeholder="请输入内容..."
                    value={value2}
                    onChange={setValue2}
                  />
                </div>
                <div>
                  <h4>透明样式 (transparent)</h4>
                  <Textarea
                    type="transparent"
                    placeholder="请输入内容..."
                    value={value3}
                    onChange={setValue3}
                  />
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 字数统计 */}
          <ComponentSectionLayout
            title='字数统计'
            id='count-usage'
            description='显示字数统计功能，支持最大长度限制。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <Textarea
                  placeholder="最多输入100个字符..."
                  maxLength={100}
                  showNumber={true}
                  value={value4}
                  onChange={setValue4}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 前后缀 */}
          <ComponentSectionLayout
            title='前后缀'
            id='affix-usage'
            description='支持在文本域内部和外部添加前后缀内容。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div>
                  <h4>外部前后缀</h4>
                  <Textarea
                    beforeContent={<div style={{ fontWeight: 'bold' }}>描述</div>}
                    afterContent={<div style={{ fontSize: '12px', color: '#666' }}>请详细描述您的问题</div>}
                    placeholder="请输入描述..."
                  />
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 清除功能 */}
          <ComponentSectionLayout
            title='清除功能'
            id='clear-usage'
            description='支持一键清除文本域内容。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <Textarea
                  placeholder="输入内容后可以点击清除按钮..."
                  onClear={() => setValue1('')}
                  value={value1}
                  onChange={setValue1}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用状态 */}
          <ComponentSectionLayout
            title='禁用状态'
            id='disabled-usage'
            description='禁用状态的文本域。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <Textarea
                  disabled
                  value="这是一个禁用的文本域"
                  placeholder="禁用状态"
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义尺寸 */}
          <ComponentSectionLayout
            title='自定义尺寸'
            id='size-usage'
            description='自定义文本域的宽度、高度和行数。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div>
                  <h4>自定义宽度和高度</h4>
                  <Textarea
                    width={400}
                    height={120}
                    placeholder="自定义尺寸的文本域..."
                  />
                </div>
                <div>
                  <h4>自定义行数</h4>
                  <Textarea
                    rows={6}
                    placeholder="6行高度的文本域..."
                  />
                </div>
                <div>
                  <h4>禁止调整大小</h4>
                  <Textarea
                    resize="none"
                    placeholder="不可调整大小的文本域..."
                  />
                </div>
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
