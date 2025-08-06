import React, { useState } from 'react';
import Input from '.';
import Icon from '../Icon';
import Button from '../Button';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

// 输入框类型定义
const inputTypes = ['border', 'background', 'transparent'];
const textAligns = ['left', 'center', 'right'];

export default function InputExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [value, setValue] = useState<string>('');
  const [value2, setValue2] = useState<string>('1, 200');

  const inputProps = [
    {
      name: "type",
      type: "InputType (border | background | transparent)",
      desc: "输入框样式",
      default: "border",
    },
    { name: "value", type: "string", desc: "输入框内容" },
    {
      name: "inputType",
      type: "string",
      desc: "输入框类型",
      default: "text",
    },
    { name: "placeholder", type: "string", desc: "输入框占位符" },
    { name: "beforeContent", type: "element", desc: "输入框前置内容" },
    { name: "afterContent", type: "element", desc: "输入框后置内容" },
    { name: "prefix", type: "element", desc: "输入框内容前置" },
    { name: "suffix", type: "element", desc: "输入框内容后置" },
    { name: "maxLength", type: "number", desc: "输入框最大长度" },
    {
      name: "showNumber",
      type: "boolean",
      desc: "是否显示字数",
      default: "false",
    },
    { name: "disabled", type: "boolean", desc: "是否禁用", default: "false" },
    {
      name: "textAlign",
      type: "InputTextAlign (left | center | right)",
      desc: "输入框内容对齐方式",
      default: "left",
    },
    { name: "onChange", type: "(val: string, e?: React.ChangeEvent<HTMLInputElement>) => void;", desc: "输入框内容变化事件" },
    { name: "onEnter", type: "(val: string, e?: React.KeyboardEvent<HTMLInputElement>) => void;", desc: "输入框回车事件" },
    { name: "onFocus", type: "(e: React.FocusEvent<HTMLInputElement>) => void;", desc: "输入框聚焦事件" },
    { name: "onBlur", type: "(e: React.FocusEvent<HTMLInputElement>) => void;", desc: "输入框失去焦点事件" },
    { name: "onClear", type: "(e: React.MouseEvent<HTMLButtonElement>) => void;", desc: "输入框清空事件" },
  ];

  return (
    <ComponentContentLayout
      zh='输入框'
      en='Input'
      desc='LandDesign 的输入框组件，提供丰富的输入框样式和交互效果。支持多种类型、前缀后缀、对齐方式，以及字数统计、清除等高级功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >

      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='input-normal'
            description='Input 组件的基础用法，支持不同的类型和基本交互。'
          >
            <CodeOperationContainer>
              <Input
                value={value}
                onChange={(val) => setValue(val)}
                onClear={() => setValue("")}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 输入框类型 */}
          <ComponentSectionLayout
            title='输入框类型'
            id='input-style'
            description='Input 支持 3 种不同的类型，每种类型都有独特的视觉效果。'
          >
            <CodeOperationContainer column>
              {inputTypes.map(type => (
                <Input
                  key={type}
                  type={type as any}
                  value={value}
                  onChange={(val) => setValue(val)}
                  onClear={() => setValue("")}
                />
              ))}
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用状态 */}
          <ComponentSectionLayout
            title='禁用状态'
            id='input-disabled'
            description='通过 disabled 属性可以禁用输入框，禁用后输入框不可编辑且样式会变灰。'
          >
            <CodeOperationContainer column>
              {inputTypes.map(type => (
                <Input
                  key={type}
                  type={type as any}
                  disabled
                />
              ))}
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 结构前缀 */}
          <ComponentSectionLayout
            title='结构前缀'
            id='input-prefix'
            description='结构前缀始终位于输入框最左侧，常用于添加图标、标签等。'
          >
            <CodeOperationContainer column>
              {textAligns.map(align => (
                <Input
                  key={align}
                  value={value}
                  textAlign={align as any}
                  onChange={(val) => setValue(val)}
                  beforeContent={
                    <Icon name="search" color="var(--color-text-secondary)" />
                  }
                />
              ))}
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 结构后缀 */}
          <ComponentSectionLayout
            title='结构后缀'
            id='input-suffix'
            description='结构后缀始终位于输入框最右侧，常用于添加按钮、图标等。'
          >
            <CodeOperationContainer column>
              {textAligns.map(align => (
                <Input
                  key={align}
                  value={value}
                  textAlign={align as any}
                  onChange={(val) => setValue(val)}
                  afterContent={
                    <Button
                      icon={
                        <Icon name="download" color="var(--color-text-secondary)" />
                      }
                      size="small"
                      type="text"
                    />
                  }
                  placeholder={`文字对齐：${align}`}
                />
              ))}
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 内容前缀 */}
          <ComponentSectionLayout
            title='内容前缀'
            id='input-prefix-content'
            description='内容前缀始终位于输入内容左侧，常用于添加符号、单位等。'
          >
            <CodeOperationContainer>
              <Input
                value={value}
                prefix="(+86)"
                onChange={(val) => setValue(val)}
                placeholder="请输入手机号"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 内容后缀 */}
          <ComponentSectionLayout
            title='内容后缀'
            id='input-suffix-content'
            description='内容后缀始终位于输入内容右侧，常用于添加单位、清除按钮等。'
          >
            <CodeOperationContainer column>
              <Input
                value={value2}
                suffix="人次"
                onChange={(val) => setValue2(val)}
                placeholder="请输入数量"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 内容前缀和后缀 */}
          <ComponentSectionLayout
            title='内容前缀和后缀'
            id='input-prefix-suffix'
            description='可以同时使用内容前缀和后缀，它们始终位于输入内容两侧。'
          >
            <CodeOperationContainer column>
              <Input
                value={value2}
                prefix="累计"
                suffix="人次"
                onChange={(val) => setValue2(val)}
                placeholder="请输入数量"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 文字对齐 */}
          <ComponentSectionLayout
            title='文字对齐'
            id='input-text-align'
            description='Input 支持 3 种不同的文字对齐方式，适应不同的使用场景。'
          >
            <CodeOperationContainer column>
              {textAligns.map(align => (
                <Input
                  key={align}
                  value={value2}
                  textAlign={align as any}
                  onChange={(val) => setValue2(val)}
                  placeholder={`文字对齐：${align}`}
                />
              ))}
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 字数统计 */}
          <ComponentSectionLayout
            title='字数统计'
            id='input-show-number'
            description='通过 showNumber 属性可以显示字数统计，需要配合 maxLength 使用。'
          >
            <CodeOperationContainer>
              <Input
                value={value}
                onChange={(val) => setValue(val)}
                maxLength={50}
                showNumber
                placeholder="请输入内容（最多50字符）"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 清除功能 */}
          <ComponentSectionLayout
            title='清除功能'
            id='input-clear'
            description='通过 onClear 事件可以实现输入框的清除功能。'
          >
            <CodeOperationContainer>
              <Input
                value={value}
                onChange={(val) => setValue(val)}
                onClear={() => setValue("")}
                placeholder="输入内容后可清除"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同输入类型 */}
          <ComponentSectionLayout
            title='不同输入类型'
            id='input-html-type'
            description='通过 inputType 属性可以设置不同的 HTML 输入类型。'
          >
            <CodeOperationContainer column>
              <Input
                inputType="email"
                placeholder="请输入邮箱地址"
              />
              <Input
                inputType="password"
                placeholder="请输入密码"
              />
              <Input
                inputType="number"
                placeholder="请输入数字"
              />
              <Input
                inputType="tel"
                placeholder="请输入电话号码"
              />
              <Input
                inputType="url"
                placeholder="请输入网址"
              />
              <Input
                inputType="search"
                placeholder="请输入搜索内容"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={inputProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
