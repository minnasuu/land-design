import React, { useState } from 'react';
import HighlightTextarea from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationBar from '../../example/components/CodeOperationBar';
import { reactScssCodeStr, reactTsxCodeStr } from './codes';

export default function HighlightTextareaExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [value, setValue] = useState<string>('这是一个支持输入高亮文字的富文本输入框');
  const [value2, setValue2] = useState<string>('支持多行文本高亮的文本框，可以设置不同的高亮颜色和背景色');
  const [value3, setValue3] = useState<string>('');

  const highlightTextareaProps = [
    { name: 'value', type: 'string', desc: '文本框的当前值' },
    { name: 'textAreaRef', type: 'React.RefObject<HTMLTextAreaElement>', desc: '文本框的引用' },
    { name: 'highlightString', type: 'string[]', desc: '需要高亮的关键词数组' },
    { name: 'highlightBg', type: 'string', desc: '高亮背景色' },
    { name: 'highlightColor', type: 'string', desc: '高亮文字颜色' },
    { name: 'disabled', type: 'boolean', desc: '是否禁用输入' },
    { name: 'autoResize', type: 'boolean', desc: '是否自动调整高度' },
    { name: 'contentClassName', type: 'string', desc: '内容容器的类名' },
    { name: 'contentStyle', type: 'CSSProperties', desc: '内容容器的样式' },
    { name: 'inputClassName', type: 'string', desc: '输入框的类名' },
    { name: 'inputStyle', type: 'CSSProperties', desc: '输入框的样式' },
    { name: 'formatHighlightString', type: '(val: string) => ReactNode', desc: '自定义高亮格式化函数' },
  ];

  return (
    <ComponentContentLayout
      zh='高亮文本框'
      en='Highlight Textarea'
      desc='LandDesign 的高亮文本框组件，支持多行文本输入和关键词高亮显示，提供丰富的文本编辑体验。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <CodeOperationBar
        reactTsxCodeStr={reactTsxCodeStr}
        reactScssCodeStr={reactScssCodeStr}
      />


      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <div className='flex flex-col gap-24'>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='basic-usage'
            description='HighlightTextarea 组件的基础用法，支持关键词高亮显示。'
          >
            <CodeOperationContainer style={{ maxWidth: '400px' }} className='mx-auto'>
              <HighlightTextarea
                value={value}
                onChange={e => setValue(e.target.value)}
                highlightString={['高亮文字']}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义高亮样式 */}
          <ComponentSectionLayout
            title='自定义高亮样式'
            id='custom-highlight'
            description='可以自定义高亮的背景色和文字颜色。'
          >
            <CodeOperationContainer style={{ maxWidth: '400px' }} className='mx-auto'>
              <HighlightTextarea
                value={value2}
                onChange={e => setValue2(e.target.value)}
                highlightString={['高亮', '自定义', '样式']}
                highlightBg="var(--color-primary-lighter)"
                highlightColor="#333"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自动调整高度 */}
          <ComponentSectionLayout
            title='自动调整高度'
            id='auto-resize'
            description='可以通过 autoResize 属性让文本框根据内容自动调整高度。'
          >
            <CodeOperationContainer style={{ maxWidth: '400px' }} className='mx-auto'>
              <HighlightTextarea
                value={value3}
                onChange={e => setValue3(e.target.value)}
                highlightString={['自动', '调整', '高度', '高亮']}
                autoResize={true}
                placeholder="请输入内容，文本框会自动调整高度..."
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用状态 */}
          <ComponentSectionLayout
            title='禁用状态'
            id='disabled-state'
            description='可以通过 disabled 属性禁用文本框。'
          >
            <CodeOperationContainer style={{ maxWidth: '400px' }} className='mx-auto'>
              <HighlightTextarea
                value="禁用的文本框，支持高亮显示"
                onChange={e => { }}
                highlightString={['禁用', '高亮']}
                disabled={true}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={highlightTextareaProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
