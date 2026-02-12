import { useState } from 'react';
import DoubleClickInput from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationBar from '../../example/components/CodeOperationBar';
import { reactTsxCodeStr } from './codes';

export default function DoubleClickInputExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [value, setValue] = useState<string>('双击编辑输入内容');
  const [value2, setValue2] = useState<string>('');

  const doubleClickInputProps = [
    { name: 'type', type: "'input' | 'textarea'", desc: '输入框类型：单行输入或多行输入' },
    { name: 'value', type: 'string', desc: '输入框的值' },
    { name: 'onChange', type: '(value: string) => void', desc: '值变化时的回调函数' },
    { name: 'height', type: "number | 'auto'", desc: '输入框高度，仅对 textarea 有效' },
    { name: 'maxHeight', type: 'number', desc: '最大高度，仅对 textarea 有效' },
    { name: 'placeholder', type: 'string', desc: '占位符文本' },
  ];

  return (
    <ComponentContentLayout
      zh='双击输入框'
      en='Double Click Input'
      desc='LandDesign 的双击输入框组件，支持单击显示、双击编辑的交互模式。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <CodeOperationBar
        label='关键代码'
        reactTsxCodeStr={reactTsxCodeStr}
      />

      {activeTab === 'examples' && (
        <div className='flex flex-col gap-24'>
          {/* 单行双击输入 */}
          <ComponentSectionLayout
            title='单行双击输入'
            id='single-line-input'
            description='双击进入编辑模式，失焦或回车确认，Esc 取消。'
          >
            <CodeOperationContainer>
              <DoubleClickInput
                type="input"
                value={value}
                onChange={(v) => setValue(v)}
                placeholder="双击输入..."
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 多行双击输入 */}
          <ComponentSectionLayout
            title='多行双击输入'
            id='multiline-input'
            description='textarea 模式，支持设置高度和最大高度。'
          >
            <CodeOperationContainer>
              <DoubleClickInput
                type="textarea"
                value={value2}
                onChange={(v) => setValue2(v)}
                height={100}
                maxHeight={200}
                placeholder="双击输入多行文本..."
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
