import { useState } from 'react';
import AutoWidthHeightTextarea from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationBar from '../../example/components/CodeOperationBar';
import { reactTsxCodeStr } from './codes';

export default function AutoWidthHeightTextareaExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [value, setValue] = useState<string>('');

  const autoWidthHeightTextareaProps = [
    { name: 'placeholder', type: 'string', desc: '占位符文本' },
    { name: 'value', type: 'string', desc: '输入框的值' },
    { name: 'maxHeight', type: 'number', desc: '最大高度' },
    { name: 'onChange', type: '(value: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void', desc: '值变化时的回调函数' },
  ];

  return (
    <ComponentContentLayout
      zh='自适应宽高文本框'
      en='Auto Width Height Textarea'
      desc='LandDesign 的自适应宽高文本框组件，能够根据内容自动调整宽度和高度。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <CodeOperationBar
        label='关键代码'
        reactTsxCodeStr={reactTsxCodeStr}
      />

      {activeTab === 'examples' && (
        <div className='flex flex-col gap-24'>
          <ComponentSectionLayout
            title='基础用法'
            id='basic-usage'
            description='根据输入内容自动调整宽度和高度。'
          >
            <CodeOperationContainer>
              <AutoWidthHeightTextarea
                placeholder='请输入'
                value={value}
                onChange={(v) => setValue(v)}
              />
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
