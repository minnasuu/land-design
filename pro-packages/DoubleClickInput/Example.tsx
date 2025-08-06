import React, { useState } from 'react';
import DoubleClickInput from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationBar from '../../example/components/CodeOperationBar';
import { reactTsxCodeStr, reactScssCodeStr } from './codes';

export default function DoubleClickInputExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [value, setValue] = useState<string>('');
  const [value2, setValue2] = useState<string>('');
  const [value3, setValue3] = useState<string>('');

  const doubleClickInputProps = [
    { name: 'type', type: "'input' | 'textarea'", default: 'input', desc: '输入框类型：单行输入或多行输入' },
    { name: 'value', type: 'string', desc: '输入框的值' },
    { name: 'onChange', type: '(value: string) => void', desc: '值变化时的回调函数' },
    { name: 'height', type: 'number | "auto"', desc: '输入框高度，仅对 textarea 类型有效' },
    { name: 'maxHeight', type: 'number', desc: '最大高度，仅对 textarea 类型有效' },
    { name: 'placeholder', type: 'string', desc: '占位符文本' },
  ];

  return (
    <ComponentContentLayout
      zh='双击输入框'
      en='Double Click Input'
      desc='LandDesign 的双击输入框组件，支持单击显示、双击编辑的交互模式，提供流畅的文本编辑体验。'
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
          {/* 单行双击输入 */}
          <ComponentSectionLayout
            title='单行双击输入'
            id='single-line-input'
            description='单行输入框，支持双击进入编辑模式。'
          >
            <CodeOperationContainer style={{ maxWidth: '400px' }} className='mx-auto'>
              <DoubleClickInput
                type="input"
                value={value}
                onChange={(value) => setValue(value)}
                placeholder="请输入..."
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 多行双击输入 */}
          <ComponentSectionLayout
            title='多行双击输入'
            id='multiline-input'
            description='多行输入框，支持双击进入编辑模式，可设置高度和最大高度。'
          >
            <CodeOperationContainer style={{ maxWidth: '400px' }} className='mx-auto'>
              <DoubleClickInput
                type="textarea"
                value={value2}
                onChange={(value) => setValue2(value)}
                height={100}
                maxHeight={200}
                placeholder="请输入多行文本..."
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义高度 */}
          <ComponentSectionLayout
            title='自定义高度'
            id='custom-height'
            description='可以自定义输入框的高度和最大高度限制。'
          >
            <CodeOperationContainer style={{ maxWidth: '400px' }} className='mx-auto'>
              <DoubleClickInput
                type="textarea"
                value={value3}
                onChange={(value) => setValue3(value)}
                height={150}
                maxHeight={300}
                placeholder="自定义高度的多行输入框..."
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={doubleClickInputProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
