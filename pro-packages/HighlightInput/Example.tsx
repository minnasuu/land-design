import React, { useState } from 'react';
import HighlightInput from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import { reactScssCodeStr, reactTsxCodeStr } from './codes';
import CodeOperationBar from '../../example/components/CodeOperationBar';

export default function HighlightInputExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [value, setValue] = useState<string>('这是一个支持输入高亮文字的input输入框');
  const [value2, setValue2] = useState<string>('支持多个关键词高亮的输入框');
  const [value3, setValue3] = useState<string>('');

  const highlightInputProps = [
    { name: 'value', type: 'string', desc: '输入框的值' },
    { name: 'showNum', type: 'boolean', desc: '是否展示字数统计' },
    { name: 'maxLength', type: 'number', desc: '最大输入字符数' },
    { name: 'fail', type: 'string', desc: '失败信息提示' },
    { name: 'disabledInput', type: 'boolean', desc: '是否禁用输入' },
    { name: 'onChange', type: '(e: React.ChangeEvent<HTMLInputElement>) => void', desc: '值变化时的回调函数' },
    { name: 'onFocus', type: '() => void', desc: '获得焦点时的回调函数' },
    { name: 'onBlur', type: '() => void', desc: '失去焦点时的回调函数' },
    { name: 'placeholder', type: 'string', desc: '占位符文本' },
    { name: 'highlightString', type: 'string[]', desc: '需要高亮的关键词数组' },
    { name: 'formatHighlightString', type: '(val: string) => React.ReactNode', desc: '自定义高亮格式化函数' },
  ];

  return (
    <ComponentContentLayout
      zh='高亮输入框'
      en='Highlight Input'
      desc='LandDesign 的高亮输入框组件，支持关键词高亮显示，提供更好的文本输入和展示体验。'
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
            description='HighlightInput 组件的基础用法，支持关键词高亮显示。'
          >
            <CodeOperationContainer>
              <HighlightInput
                value={value}
                onChange={e => setValue(e.target.value)}
                highlightString={['高亮文字', '高亮文字2']}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 多关键词高亮 */}
          <ComponentSectionLayout
            title='多关键词高亮'
            id='multiple-highlight'
            description='支持多个关键词同时高亮显示。'
          >
            <CodeOperationContainer>
              <HighlightInput
                value={value2}
                onChange={e => setValue2(e.target.value)}
                highlightString={['支持', '多个', '关键词', '高亮']}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 字数统计 */}
          <ComponentSectionLayout
            title='字数统计'
            id='character-count'
            description='可以显示字数统计和最大输入限制。'
          >
            <CodeOperationContainer>
              <HighlightInput
                value={value3}
                onChange={e => setValue3(e.target.value)}
                highlightString={['重要', '关键词']}
                showNum={true}
                maxLength={100}
                placeholder="请输入内容，支持字数统计..."
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用状态 */}
          <ComponentSectionLayout
            title='禁用状态'
            id='disabled-state'
            description='可以通过 disabledInput 属性禁用输入框。'
          >
            <CodeOperationContainer>
              <HighlightInput
                value="禁用的输入框"
                onChange={e => { }}
                highlightString={['禁用']}
                disabledInput={true}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={highlightInputProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
