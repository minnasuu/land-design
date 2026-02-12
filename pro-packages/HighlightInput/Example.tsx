import  { useState } from 'react';
import HighlightInput from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import { reactTsxCodeStr } from './codes';
import CodeOperationBar from '../../example/components/CodeOperationBar';

export default function HighlightInputExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [value, setValue] = useState<string>('这是一个支持输入高亮文字的input输入框');
  const [value2, setValue2] = useState<string>('支持多个关键词高亮的输入框，比如不好');

  const highlightInputProps = [
    { name: 'value', type: 'string', desc: '输入框的值' },
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
      label='关键代码'
        reactTsxCodeStr={reactTsxCodeStr}
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
                highlightString={['高亮','不好']}
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
