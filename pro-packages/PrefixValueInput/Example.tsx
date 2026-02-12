import { useState } from 'react';
import PrefixValueInput from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationBar from '../../example/components/CodeOperationBar';
import { reactTsxCodeStr } from './codes';

export default function PrefixValueInputExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [value, setValue] = useState<string>('');
  const [value2, setValue2] = useState<string>('带前缀的输入框');

  const prefixValueInputProps = [
    { name: 'prefix', type: 'string', desc: '输入框的前缀文本' },
    { name: 'value', type: 'string', desc: '输入框的值' },
    { name: 'onChange', type: '(e: React.ChangeEvent<HTMLTextAreaElement>) => void', desc: '值变化时的回调函数' },
    { name: 'autoResize', type: 'boolean', desc: '是否自动调整高度' },
    { name: 'placeholder', type: 'string', desc: '占位符文本' },
  ];

  return (
    <ComponentContentLayout
      zh='前缀值输入框'
      en='Prefix Value Input'
      desc='LandDesign 的前缀值输入框组件，支持在输入框前显示固定前缀。'
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
            description='PrefixValueInput 组件的基础用法，支持前缀显示。'
          >
            <CodeOperationContainer>
              <PrefixValueInput
                prefix="前缀"
                value={value}
                onChange={e => setValue(e.target.value)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          <ComponentSectionLayout
            title='URL 前缀'
            id='url-prefix'
            description='常见场景：URL 输入时固定协议前缀。'
          >
            <CodeOperationContainer>
              <PrefixValueInput
                prefix="https://"
                value={value2}
                onChange={e => setValue2(e.target.value)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={prefixValueInputProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
