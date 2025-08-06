import React, { useState } from 'react';
import NumberInput from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function NumberInputExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [value, setValue] = useState<number>(0);

  const numberInputProps = [
    { name: "value", type: "number", desc: "外部回传的数字值" },
    {
      name: "type",
      type: "'border' | 'background'",
      desc: "数字输入框样式",
      default: "border",
    },
    { name: "step", type: "number", desc: "调整步数", default: "1" },
    { name: "min", type: "number", desc: "最小值", default: "0" },
    { name: "max", type: "number", desc: "最大值", default: "100" },
    { name: "prefix", type: "string", desc: "前缀" },
    { name: "suffix", type: "string", desc: "后缀" },
    { name: "width", type: "number | string", desc: "宽度", default: "100%" },
    { name: "disabled", type: "boolean", desc: "是否禁用", default: "false" },
    {
      name: "enableWheelScroll",
      type: "boolean",
      desc: "是否启用鼠标滚轮增减",
      default: "false",
    },
    {
      name: "onChange",
      type: "(value: number) => void",
      desc: "数字输入事件",
    },
  ];

  return (
    <ComponentContentLayout
      zh='数字输入框'
      en='NumberInput'
      desc='LandDesign 的数字输入框组件，支持数值输入、增减按钮、鼠标滚轮控制等功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >

      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='number-input-normal'
            description='NumberInput 组件的基础用法，支持数值输入和增减按钮。'
          >
            <CodeOperationContainer>
              <NumberInput
                value={value}
                onChange={(val) => setValue(val)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 设置类型 */}
          <ComponentSectionLayout
            title='设置类型'
            id='number-input-type'
            description='NumberInput 支持两种不同的样式类型。'
          >
            <CodeOperationContainer column>
              <NumberInput value={0} />
              <NumberInput type="background" value={0} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 设置内容前缀 */}
          <ComponentSectionLayout
            title='设置内容前缀'
            id='number-input-prefix'
            description='通过 prefix 属性可以设置输入框的前缀内容。'
          >
            <CodeOperationContainer column>
              {["left", "center", "right"].map((item) => (
                <NumberInput
                  key={item}
                  value={0}
                  prefix="总人数："
                  textAlign={item as "left" | "center" | "right"}
                />
              ))}
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 设置内容后缀 */}
          <ComponentSectionLayout
            title='设置内容后缀'
            id='number-input-suffix'
            description='通过 suffix 属性可以设置输入框的后缀内容。'
          >
            <CodeOperationContainer column>
              {["left", "center", "right"].map((item) => (
                <NumberInput
                  key={item}
                  value={0}
                  suffix="%"
                  textAlign={item as "left" | "center" | "right"}
                />
              ))}
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 鼠标滚轮增减功能 */}
          <ComponentSectionLayout
            title='鼠标滚轮增减功能'
            id='number-input-wheel-scroll'
            description='通过 enableWheelScroll 属性可以启用鼠标滚轮增减功能。'
          >
            <CodeOperationContainer column>
              <NumberInput
                value={50}
                min={0}
                max={100}
                step={1}
                enableWheelScroll={true}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用状态 */}
          <ComponentSectionLayout
            title='禁用状态'
            id='number-input-disabled'
            description='通过 disabled 属性可以禁用数字输入框。'
          >
            <CodeOperationContainer column>
              <NumberInput value={0} disabled />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 数值范围限制 */}
          <ComponentSectionLayout
            title='数值范围限制'
            id='number-input-range'
            description='通过 min 和 max 属性可以限制数值的输入范围。'
          >
            <CodeOperationContainer column>
              <NumberInput
                value={50}
                min={0}
                max={100}
                step={5}
                prefix="进度："
                suffix="%"
              />
              <NumberInput
                value={0}
                min={-100}
                max={100}
                step={10}
                prefix="温度："
                suffix="°C"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同步长 */}
          <ComponentSectionLayout
            title='不同步长'
            id='number-input-step'
            description='通过 step 属性可以设置不同的增减步长。'
          >
            <CodeOperationContainer column>
              <NumberInput
                value={0}
                step={1}
                prefix="整数："
              />
              <NumberInput
                value={0}
                step={0.1}
                prefix="小数："
              />
              <NumberInput
                value={0}
                step={10}
                prefix="大数："
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={numberInputProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
