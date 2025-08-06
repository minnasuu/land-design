import React, { useState } from "react";
import ColorPicker from ".";
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function ColorPickerExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [color1, setColor1] = useState<string>("#ffcbcb");
  const [hexColor, setHexColor] = useState<string>("#ffcbcb");
  const [rgbaColor, setRgbaColor] = useState<string>("rgba(255, 203, 203, 1)");

  const handleColorChange = (
    currentColor: string,
    hexColor: string,
    rgbaColor: string
  ) => {
    setColor1(currentColor);
    setHexColor(hexColor);
    setRgbaColor(rgbaColor);
  };

  const colorPickerProps = [
    {
      name: "color",
      type: "string",
      desc: "外部回传的颜色值，支持HEX、RGB、CSS变量等格式",
      default: "var(--color-gray-3)",
    },
    {
      name: "disabled",
      type: "boolean",
      desc: "是否禁用颜色选择器",
      default: "false",
    },
    {
      name: "onChange",
      type: "(color: string, hexColor: string, rgbaColor: string) => void",
      desc: "颜色变化事件，返回当前模式颜色值、HEX值和RGBA值",
    },
    { name: "onCardClick", type: "() => void", desc: "颜色卡片点击事件" },
    { name: "children", type: "React.ReactNode", desc: "自定义子元素内容" },
    { name: "style", type: "CSSProperties", desc: "自定义样式对象" },
    { name: "className", type: "string", desc: "自定义CSS类名" },
  ];

  return (
    <ComponentContentLayout
      zh='颜色选择器'
      en='ColorPicker'
      desc='LandDesign 的颜色选择器组件，支持颜色选择、透明度调节、多种颜色格式等功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >

      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='color-picker-basic'
            description='ColorPicker 组件的基础用法，支持颜色选择和透明度调节。'
          >
            <div className="flex column gap-8 color-text-secondary text-12 mb-8">
              <div>
                当前颜色模式色值: <code>{color1}</code>
              </div>
              <div>
                HEX色值: <code>{hexColor}</code>
              </div>
              <div>
                RGBA色值: <code>{rgbaColor}</code>
              </div>
              <div>
                Alpha值:{" "}
                <code>
                  {rgbaColor.match(/rgba\([^)]+,\s*([\d.]+)\)/)?.[1] || "1"}
                </code>
              </div>
            </div>
            <CodeOperationContainer>
              <ColorPicker
                color={color1}
                onChange={handleColorChange}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用状态 */}
          <ComponentSectionLayout
            title='禁用状态'
            id='color-picker-disabled'
            description='通过 disabled 属性可以禁用颜色选择器。'
          >
            <CodeOperationContainer>
              <ColorPicker color="#ff6b6b" disabled />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义样式 */}
          <ComponentSectionLayout
            title='自定义样式'
            id='color-picker-custom'
            description='通过 style 属性可以自定义颜色选择器的样式。'
          >
            <CodeOperationContainer>
              <ColorPicker
                color="#4ecdc4"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                }}
              />
              <ColorPicker
                color="#45b7d1"
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                }}
              />
              <ColorPicker
                color="#96ceb4"
                style={{
                  width: "48px",
                  height: "24px",
                  borderRadius: "4px",
                }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={colorPickerProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
