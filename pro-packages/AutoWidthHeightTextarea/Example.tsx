import React, { useState } from 'react';
import AutoWidthHeightTextarea from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationBar from '../../example/components/CodeOperationBar';
import { reactScssCodeStr, reactTsxCodeStr } from './codes';

export default function AutoWidthHeightTextareaExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [value, setValue] = useState<string>('');
  const [value2, setValue2] = useState<string>('');
  const [value3, setValue3] = useState<string>('');
  const autoWidthHeightTextareaProps = [
    { name: 'placeholder', type: 'string', default: '请输入', desc: '占位符文本' },
    { name: 'value', type: 'string', desc: '输入框的值' },
    { name: 'maxHeight', type: 'number', default: '80', desc: '最大高度' },
    { name: 'onChange', type: '(value: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void', desc: '值变化时的回调函数' },
  ];

  return (
    <ComponentContentLayout
      zh='自适应宽高文本框'
      en='Auto Width Height Textarea'
      desc='LandDesign 的自适应宽高文本框组件，能够根据内容自动调整宽度和高度，提供流畅的输入体验。'
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
            description='AutoWidthHeightTextarea 组件的基础用法，支持自动调整宽高。'
          >
            <CodeOperationContainer className='text-14 mx-auto' style={{ maxWidth: '400px', flexWrap: 'wrap', justifyContent: 'flex-start', gap: '2px' }}>
              <span className='flex-shrink-0'>帮我生成一首</span>
              <AutoWidthHeightTextarea
                placeholder='风格'
                value={value}
                onChange={(value) => setValue(value)}
              />
              <span className='flex-shrink-0'>的歌曲，可以参考</span>
              <AutoWidthHeightTextarea
                placeholder='歌手'
                value={value2}
                onChange={(value) => setValue2(value)}
              />
              <span className='flex-shrink-0'>的风格，</span>
              <AutoWidthHeightTextarea
                placeholder='其他备注'
                value={value3}
                onChange={(value) => setValue3(value)}
              />
              <span className='flex-shrink-0'>。</span>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={autoWidthHeightTextareaProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
