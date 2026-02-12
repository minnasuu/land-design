import { useState } from 'react';
import HighlightTextarea from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationBar from '../../example/components/CodeOperationBar';
import { reactTsxCodeStr } from './codes';

export default function HighlightTextareaExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [value, setValue] = useState<string>('这是一个支持输入高亮文字的富文本输入框');
  const [value2, setValue2] = useState<string>('支持多个关键词高亮的文本框，比如不好');

  const highlightTextareaProps = [
    { name: 'value', type: 'string', desc: '文本框的当前值' },
    { name: 'textAreaRef', type: 'React.RefObject<HTMLTextAreaElement>', desc: '文本框的引用' },
    { name: 'highlightString', type: 'string[]', desc: '需要高亮的关键词数组' },
    { name: 'autoResize', type: 'boolean', desc: '是否自动调整高度' },
    { name: 'onChange', type: '(e: React.ChangeEvent<HTMLTextAreaElement>) => void', desc: '值变化时的回调函数' },
    { name: 'onScroll', type: '(e: React.UIEvent<HTMLTextAreaElement>) => void', desc: '滚动时的回调函数' },
    { name: 'placeholder', type: 'string', desc: '占位符文本' },
    { name: 'formatHighlightString', type: '(val: string) => ReactNode', desc: '自定义高亮格式化函数' },
  ];

  return (
    <ComponentContentLayout
      zh='高亮文本框'
      en='Highlight Textarea'
      desc='LandDesign 的高亮文本框组件，支持多行文本输入和关键词高亮显示。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <CodeOperationBar
        label='关键代码'
        reactTsxCodeStr={reactTsxCodeStr}
      />

      {activeTab === 'examples' && (
        <div className='flex flex-col gap-24'>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='basic-usage'
            description='HighlightTextarea 组件的基础用法，支持关键词高亮显示。'
          >
            <CodeOperationContainer>
              <HighlightTextarea
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
              <HighlightTextarea
                value={value2}
                onChange={e => setValue2(e.target.value)}
                highlightString={['高亮', '不好']}
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
