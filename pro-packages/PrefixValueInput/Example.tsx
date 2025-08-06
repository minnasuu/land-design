import React, { useState } from 'react';
import PrefixValueInput from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationBar from '../../example/components/CodeOperationBar';
import { reactTsxCodeStr, reactScssCodeStr } from './codes';

export default function PrefixValueInputExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [value, setValue] = useState<string>('');
  const [value2, setValue2] = useState<string>('带前缀的输入框');
  const [value3, setValue3] = useState<string>('');

  const prefixValueInputProps = [
    { name: 'value', type: 'string', desc: '输入框的值' },
    { name: 'prefix', type: 'string', desc: '输入框的前缀文本' },
    { name: 'highlightString', type: 'string[]', desc: '需要高亮的关键词数组' },
    { name: 'highlightBg', type: 'string', desc: '高亮背景色' },
    { name: 'highlightColor', type: 'string', desc: '高亮文字颜色' },
    { name: 'disabled', type: 'boolean', desc: '是否禁用输入' },
    { name: 'autoResize', type: 'boolean', desc: '是否自动调整高度' },
    { name: 'placeholder', type: 'string', desc: '占位符文本' },
    { name: 'onChange', type: '(e: React.ChangeEvent<HTMLTextAreaElement>) => void', desc: '值变化时的回调函数' },
  ];

  return (
    <ComponentContentLayout
      zh='前缀值输入框'
      en='Prefix Value Input'
      desc='LandDesign 的前缀值输入框组件，支持在输入框前显示固定前缀，提供更好的数据输入体验。'
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
            description='PrefixValueInput 组件的基础用法，支持前缀显示。'
          >
            <CodeOperationContainer style={{ maxWidth: '400px' }} className='mx-auto'>
              <PrefixValueInput
                prefix="前缀"
                value={value}
                onChange={e => setValue(e.target.value)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 带高亮的前缀输入 */}
          <ComponentSectionLayout
            title='带高亮的前缀输入'
            id='highlight-prefix'
            description='支持关键词高亮显示，同时保持前缀不变。'
          >
            <CodeOperationContainer style={{ maxWidth: '400px' }} className='mx-auto'>
              <PrefixValueInput
                prefix="https://"
                value={value2}
                onChange={e => setValue2(e.target.value)}
                highlightString={['前缀', '输入']}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义样式 */}
          <ComponentSectionLayout
            title='自定义样式'
            id='custom-styles'
            description='可以自定义高亮样式和前缀显示效果。'
          >
            <CodeOperationContainer style={{ maxWidth: '400px' }} className='mx-auto'>
              <PrefixValueInput
                prefix="$"
                value={value3}
                onChange={e => setValue3(e.target.value)}
                highlightString={['自定义', '样式']}
                highlightBg="#4caf50"
                highlightColor="#fff"
                placeholder="请输入金额..."
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用状态 */}
          <ComponentSectionLayout
            title='禁用状态'
            id='disabled-state'
            description='可以通过 disabled 属性禁用输入框，前缀仍然可见。'
          >
            <CodeOperationContainer style={{ maxWidth: '400px' }} className='mx-auto'>
              <PrefixValueInput
                prefix="禁用前缀"
                value="禁用的输入框"
                onChange={e => { }}
                disabled={true}
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
