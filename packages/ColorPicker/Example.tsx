import React, { useState } from "react";
import ColorPicker from ".";
import { ColorInfo, ColorFormat } from "./props";
import CodeOperationContainer from "../../example/components/CodeOperationContainer";
import ComponentContentLayout from "../../example/components/ComponentContentLayout";
import ComponentPropsTable from "../../example/components/ComponentPropsTable";
import ComponentSectionLayout from "../../example/components/ComponentSectionLayout";

export default function ColorPickerExample() {
  const [activeTab, setActiveTab] = useState<string>("examples");
  const [colorInfo, setColorInfo] = useState<ColorInfo | null>(null);
  const [format, setFormat] = useState<ColorFormat>("hex");

  const handleColorChange = (info: ColorInfo) => {
    setColorInfo(info);
  };

  const colorPickerProps = [
    { name: "value", type: "string", desc: "当前颜色值（受控）" },
    { name: "defaultValue", type: "string", desc: "默认颜色值", default: '"#1677ff"' },
    { name: "format", type: '"hex" | "rgb" | "rgba" | "hsl" | "hsv"', desc: "颜色格式", default: '"hex"' },
    { name: "showAlpha", type: "boolean", desc: "是否显示透明度", default: "true" },
    { name: "disabled", type: "boolean", desc: "是否禁用", default: "false" },
    { name: "size", type: '"small" | "default" | "large"', desc: "组件尺寸", default: '"default"' },
    { name: "trigger", type: '"default" | "input" | "custom"', desc: "触发器类型", default: '"default"' },
    { name: "allowClear", type: "boolean", desc: "是否允许清空", default: "false" },
    { name: "presets", type: "string[]", desc: "预设颜色列表" },
    { name: "showInput", type: "boolean", desc: "是否显示输入框", default: "true" },
    { name: "showFormatSwitch", type: "boolean", desc: "是否显示格式切换", default: "true" },
    { name: "panelWidth", type: "number", desc: "面板宽度", default: "280" },
    { name: "panelHeight", type: "number", desc: "面板高度", default: "200" },
    { name: "onChange", type: "(colorInfo: ColorInfo) => void", desc: "颜色变化回调" },
    { name: "onColorChange", type: "(color, hex, rgba) => void", desc: "颜色变化回调（简化版）" },
    { name: "onFormatChange", type: "(format) => void", desc: "格式变化回调" },
    { name: "onOpenChange", type: "(open) => void", desc: "面板开关回调" },
  ];

  return (
    <ComponentContentLayout
      zh="颜色选择器"
      en="ColorPicker"
      desc="LandDesign 的颜色选择器组件，支持多种颜色格式、预设颜色、透明度选择等功能。"
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === "examples" && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title="基础用法"
            id="color-picker-basic"
            description="ColorPicker 组件的基础用法，点击色块打开颜色选择面板。"
          >
            <CodeOperationContainer column>
              <ColorPicker
                defaultValue="#1677ff"
                onChange={handleColorChange}
              />
              {colorInfo && (
                <div className="flex flex-col gap-2 text-sm text-secondary">
                  <div>当前颜色: <code>{colorInfo.color}</code></div>
                  <div>HEX: <code>{colorInfo.hex}</code></div>
                  <div>RGB: <code>{colorInfo.rgb}</code></div>
                  <div>RGBA: <code>{colorInfo.rgba}</code></div>
                  <div>透明度: <code>{(colorInfo.alpha * 100).toFixed(0)}%</code></div>
                </div>
              )}
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同尺寸 */}
          <ComponentSectionLayout
            title="不同尺寸"
            id="color-picker-size"
            description="通过 size 属性设置不同的触发器尺寸。"
          >
            <CodeOperationContainer>
              <ColorPicker size="small" defaultValue="#f5222d" />
              <ColorPicker size="default" defaultValue="#52c41a" />
              <ColorPicker size="large" defaultValue="#1677ff" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 触发器类型 */}
          <ComponentSectionLayout
            title="触发器类型"
            id="color-picker-trigger"
            description="通过 trigger 属性设置不同的触发器样式。"
          >
            <CodeOperationContainer>
              <ColorPicker trigger="default" defaultValue="#722ed1" />
              <ColorPicker trigger="input" defaultValue="#eb2f96" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 颜色格式 */}
          <ComponentSectionLayout
            title="颜色格式"
            id="color-picker-format"
            description="通过 format 属性设置返回的颜色格式。"
          >
            <CodeOperationContainer column>
              <div className="flex items-center gap-4">
                <span className="text-sm w-16">HEX:</span>
                <ColorPicker
                  format="hex"
                  defaultValue="#1677ff"
                  onColorChange={(color) => console.log("HEX:", color)}
                />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm w-16">RGB:</span>
                <ColorPicker
                  format="rgb"
                  defaultValue="#52c41a"
                  onColorChange={(color) => console.log("RGB:", color)}
                />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm w-16">HSL:</span>
                <ColorPicker
                  format="hsl"
                  defaultValue="#faad14"
                  onColorChange={(color) => console.log("HSL:", color)}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 隐藏透明度 */}
          <ComponentSectionLayout
            title="隐藏透明度"
            id="color-picker-no-alpha"
            description="通过 showAlpha={false} 隐藏透明度选择。"
          >
            <CodeOperationContainer>
              <ColorPicker showAlpha={false} defaultValue="#13c2c2" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 预设颜色 */}
          <ComponentSectionLayout
            title="预设颜色"
            id="color-picker-presets"
            description="通过 presets 属性设置预设颜色列表。"
          >
            <CodeOperationContainer>
              <ColorPicker
                defaultValue="#1677ff"
                presets={[
                  "#f5222d",
                  "#fa541c",
                  "#faad14",
                  "#52c41a",
                  "#13c2c2",
                  "#1677ff",
                  "#722ed1",
                  "#eb2f96",
                ]}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 允许清空 */}
          <ComponentSectionLayout
            title="允许清空"
            id="color-picker-clear"
            description="通过 allowClear 属性允许清空颜色。"
          >
            <CodeOperationContainer>
              <ColorPicker
                allowClear
                defaultValue="#ff6b6b"
                onClear={() => console.log("颜色已清空")}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用状态 */}
          <ComponentSectionLayout
            title="禁用状态"
            id="color-picker-disabled"
            description="通过 disabled 属性禁用颜色选择器。"
          >
            <CodeOperationContainer>
              <ColorPicker disabled defaultValue="#1677ff" />
              <ColorPicker disabled size="large" defaultValue="#52c41a" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义触发器 */}
          <ComponentSectionLayout
            title="自定义触发器"
            id="color-picker-custom"
            description="通过 trigger='custom' 和 children 自定义触发器。"
          >
            <CodeOperationContainer>
              <ColorPicker
                trigger="custom"
                defaultValue="#1677ff"
                onChange={handleColorChange}
              >
                <button className="px-4 py-2 rounded border border-primary text-primary hover:bg-primary-bg">
                  选择颜色
                </button>
              </ColorPicker>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义面板 */}
          <ComponentSectionLayout
            title="自定义面板尺寸"
            id="color-picker-panel"
            description="通过 panelWidth 和 panelHeight 自定义面板尺寸。"
          >
            <CodeOperationContainer>
              <ColorPicker
                panelWidth={320}
                panelHeight={240}
                defaultValue="#722ed1"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === "props" && (
        <div className="flex flex-col gap-12">
          <ComponentPropsTable props={colorPickerProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
