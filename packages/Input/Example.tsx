import { useState } from 'react';
import Input from '.';
import Icon from '../Icon';
import Button from '../Button';
import Flex from '../Flex';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

const inputVariants = ['outline', 'fill', 'transparent'] as const;
const inputStatuses = ['default', 'primary', 'warning', 'danger', 'success'] as const;
const inputSizes = ['small', 'default', 'large'] as const;
const textAligns = ['left', 'center', 'right'] as const;

const inputProps = [
  { name: 'variant', type: "InputVariant ('outline' | 'fill' | 'transparent')", desc: '输入框外观变体', default: "'outline'" },
  { name: 'status', type: "InputStatus ('default' | 'primary' | 'warning' | 'danger' | 'success')", desc: '输入框语义状态', default: "'default'" },
  { name: 'size', type: "InputSize ('small' | 'default' | 'large')", desc: '输入框尺寸', default: "'default'" },
  { name: 'textAlign', type: "InputAlign ('left' | 'center' | 'right')", desc: '文字对齐方式', default: "'left'" },
  { name: 'inputType', type: "InputHtmlType ('text' | 'password' | ...)", desc: 'HTML 原生输入类型', default: "'text'" },
  { name: 'value', type: 'string', desc: '输入值（受控）' },
  { name: 'placeholder', type: 'string', desc: '占位符' },
  { name: 'disabled', type: 'boolean', desc: '是否禁用', default: 'false' },
  { name: 'maxLength', type: 'number', desc: '最大字符数' },
  { name: 'block', type: 'boolean', desc: '是否为块级输入框', default: 'false' },
  { name: 'autoWidth', type: 'boolean', desc: '宽度随内容自适应', default: 'false' },
  { name: 'beforeContent', type: 'ReactNode', desc: '结构前缀（输入框外部左侧）' },
  { name: 'afterContent', type: 'ReactNode', desc: '结构后缀（输入框外部右侧）' },
  { name: 'prefix', type: 'ReactNode', desc: '内容前缀（跟随文字）' },
  { name: 'suffix', type: 'ReactNode', desc: '内容后缀（跟随文字）' },
  { name: 'onChange', type: '(val: string, e?) => void', desc: '值变化回调' },
  { name: 'onEnter', type: '(val: string, e?) => void', desc: '回车回调' },
  { name: 'onFocus', type: '(e) => void', desc: '聚焦回调' },
  { name: 'onBlur', type: '(e) => void', desc: '失焦回调' },
  { name: 'onClear', type: '() => void', desc: '清除回调（传入即显示清除按钮）' },
  { name: 'htmlProps', type: 'InputHTMLAttributes', desc: '原生 input HTML 属性透传' },
];

export default function InputExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('1, 200');

  return (
    <ComponentContentLayout
      zh='输入框'
      en='Input'
      desc='LandDesign 的输入框组件，提供丰富的外观变体、语义状态和尺寸选择。支持前后缀、自适应宽度、清除等高级功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className='flex flex-col gap-24'>
          {/* 基础用法 */}
          <ComponentSectionLayout title='基础用法' id='input-basic' description='Input 组件的基础用法，支持输入和清除功能。'>
            <CodeOperationContainer>
              <Input value={value} onChange={(val) => setValue(val)} onClear={() => setValue('')} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 外观变体 */}
          <ComponentSectionLayout title='外观变体' id='input-variant' description='Input 支持 3 种不同的外观变体，每种都有独特的视觉效果。'>
            <CodeOperationContainer column>
              {inputVariants.map((v) => (
                <Input key={v} variant={v} value={value} onChange={(val) => setValue(val)} onClear={() => setValue('')} placeholder={v} />
              ))}
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 语义状态 */}
          <ComponentSectionLayout title='语义状态' id='input-status' description='每种外观变体都支持 5 种语义状态，用于表达不同的输入状态。'>
            <CodeOperationContainer>
              <Flex gap={12} column justify='center'>
                {inputVariants.map((v) => (
                  <Flex key={v} gap={12} justify='center'>
                    {inputStatuses.map((s) => (
                      <Input key={`${v}-${s}`} variant={v} status={s} placeholder={s} />
                    ))}
                  </Flex>
                ))}
              </Flex>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 输入框尺寸 */}
          <ComponentSectionLayout title='输入框尺寸' id='input-size' description='Input 支持 3 种不同的尺寸，适应不同的使用场景。'>
            <CodeOperationContainer column>
              {inputSizes.map((s) => (
                <Input key={s} size={s} placeholder={s} />
              ))}
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用状态 */}
          <ComponentSectionLayout title='禁用状态' id='input-disabled' description='通过 disabled 属性可以禁用输入框。'>
            <CodeOperationContainer column>
              {inputVariants.map((v) => (
                <Input key={v} variant={v} disabled placeholder={`${v} 禁用`} />
              ))}
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 结构前缀 */}
          <ComponentSectionLayout title='结构前缀' id='input-before' description='beforeContent 位于输入框外部左侧。'>
            <CodeOperationContainer column>
              {textAligns.map((align) => (
                <Input
                  key={align}
                  value={value}
                  textAlign={align}
                  onChange={(val) => setValue(val)}
                  beforeContent={<Icon size={16} name="search" color="var(--color-text-secondary)" />}
                />
              ))}
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 结构后缀 */}
          <ComponentSectionLayout title='结构后缀' id='input-after' description='afterContent 位于输入框外部右侧。'>
            <CodeOperationContainer column>
              {textAligns.map((align) => (
                <Input
                  key={align}
                  value={value}
                  textAlign={align}
                  onChange={(val) => setValue(val)}
                  afterContent={
                    <Button icon={<Icon name="download" color="var(--color-text-secondary)" />} size="small" variant="text" />
                  }
                  placeholder={`文字对齐：${align}`}
                />
              ))}
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 内容前缀 */}
          <ComponentSectionLayout title='内容前缀' id='input-prefix' description='prefix 跟随输入内容左侧。'>
            <CodeOperationContainer>
              <Input value={value} prefix="(+86)" onChange={(val) => setValue(val)} placeholder="请输入手机号" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 内容后缀 */}
          <ComponentSectionLayout title='内容后缀' id='input-suffix' description='suffix 跟随输入内容右侧。'>
            <CodeOperationContainer column>
              <Input value={value2} suffix="人次" onChange={(val) => setValue2(val)} placeholder="请输入数量" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 内容前缀和后缀 */}
          <ComponentSectionLayout title='内容前缀和后缀' id='input-prefix-suffix' description='prefix 和 suffix 同时使用。'>
            <CodeOperationContainer column>
              <Input value={value2} prefix="累计" suffix="人次" onChange={(val) => setValue2(val)} placeholder="请输入数量" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 文字对齐 */}
          <ComponentSectionLayout title='文字对齐' id='input-align' description='支持 left、center、right 三种对齐方式。'>
            <CodeOperationContainer column>
              {textAligns.map((align) => (
                <Input key={align} value={value2} textAlign={align} onChange={(val) => setValue2(val)} placeholder={`文字对齐：${align}`} />
              ))}
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 宽度自适应 */}
          <ComponentSectionLayout title='宽度自适应' id='input-auto-width' description='autoWidth 时输入框宽度自适应内容。'>
            <CodeOperationContainer>
              <Input autoWidth value={value} onChange={(val) => setValue(val)} placeholder="宽度自适应" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 清除功能 */}
          <ComponentSectionLayout title='清除功能' id='input-clear' description='传入 onClear 即显示清除按钮。'>
            <CodeOperationContainer>
              <Input value={value} onChange={(val) => setValue(val)} onClear={() => setValue('')} placeholder="输入内容后可清除" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同输入类型 */}
          <ComponentSectionLayout title='不同输入类型' id='input-html-type' description='通过 inputType 设置不同的 HTML 输入类型。'>
            <CodeOperationContainer column>
              <Input inputType="email" placeholder="请输入邮箱地址" />
              <Input inputType="password" placeholder="请输入密码" />
              <Input inputType="number" placeholder="请输入数字" />
              <Input inputType="tel" placeholder="请输入电话号码" />
              <Input inputType="url" placeholder="请输入网址" />
              <Input inputType="search" placeholder="请输入搜索内容" />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={inputProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
