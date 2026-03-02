import React, { useState } from "react";
import Slider from ".";
import CodeOperationContainer from "../../example/components/CodeOperationContainer";
import ComponentContentLayout from "../../example/components/ComponentContentLayout";
import ComponentPropsTable from "../../example/components/ComponentPropsTable";
import ComponentSectionLayout from "../../example/components/ComponentSectionLayout";

export default function SliderExample() {
  const [activeTab, setActiveTab] = useState<string>("examples");
  const [value, setValue] = useState(30);
  const [rangeValue, setRangeValue] = useState<[number, number]>([20, 60]);

  const sliderProps = [
    { name: "value", type: "number | [number, number]", desc: "受控模式的当前值", default: "-" },
    { name: "defaultValue", type: "number | [number, number]", desc: "非受控模式的默认值", default: "0" },
    { name: "min", type: "number", desc: "最小值", default: "0" },
    { name: "max", type: "number", desc: "最大值", default: "100" },
    { name: "step", type: "number", desc: "步长", default: "1" },
    { name: "range", type: "boolean", desc: "是否为范围选择模式", default: "false" },
    { name: "name", type: "string", desc: "表单字段名", default: "-" },
    { name: "size", type: '"small" | "default" | "large"', desc: "尺寸", default: '"default"' },
    { name: "orientation", type: '"horizontal" | "vertical"', desc: "方向", default: '"horizontal"' },
    { name: "showMarks", type: "boolean", desc: "是否显示刻度标记", default: "false" },
    { name: "marks", type: "SliderMark[] | boolean", desc: "刻度标记配置", default: "-" },
    { name: "showDots", type: "boolean", desc: "是否显示刻度点", default: "false" },
    { name: "tooltip", type: '"hover" | "always" | "never"', desc: "Tooltip 显示模式", default: '"hover"' },
    { name: "tooltipPlacement", type: '"top" | "bottom" | "left" | "right"', desc: "Tooltip 位置", default: '"top"' },
    { name: "tooltipFormatter", type: "(value: number) => ReactNode", desc: "Tooltip 格式化函数", default: "-" },
    { name: "prefix", type: "ReactNode", desc: "前缀内容", default: "-" },
    { name: "suffix", type: "ReactNode", desc: "后缀内容", default: "-" },
    { name: "disabled", type: "boolean", desc: "是否禁用", default: "false" },
    { name: "readOnly", type: "boolean", desc: "只读模式", default: "false" },
    { name: "onChange", type: "(value) => void", desc: "值变化回调（拖拽中持续触发）", default: "-" },
    { name: "onChangeComplete", type: "(value) => void", desc: "值变化完成回调", default: "-" },
    { name: "className", type: "string", desc: "自定义类名", default: "-" },
    { name: "style", type: "CSSProperties", desc: "自定义样式", default: "-" },
    { name: "trackClassName", type: "string", desc: "轨道自定义类名", default: "-" },
    { name: "trackStyle", type: "CSSProperties", desc: "轨道自定义样式", default: "-" },
    { name: "activeTrackStyle", type: "CSSProperties", desc: "激活轨道自定义样式", default: "-" },
    { name: "thumbClassName", type: "string", desc: "滑块自定义类名", default: "-" },
    { name: "thumbStyle", type: "CSSProperties", desc: "滑块自定义样式", default: "-" },
  ];

  return (
    <ComponentContentLayout
      zh="滑动输入条"
      en="Slider"
      desc="Slider 滑动输入条组件，用于在一定范围内进行数值选择。支持单值、范围选择、刻度标记等功能。"
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === "examples" && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title="基础用法"
            id="slider-basic"
            description="最基础的滑块用法，支持受控和非受控模式。"
          >
            <CodeOperationContainer column>
              <div style={{ width: 300 }}>
                <Slider value={value} onChange={(v) => setValue(v as number)} />
                <div style={{ marginTop: 8, fontSize: 14, color: "var(--color-text-secondary)" }}>
                  当前值: {value}
                </div>
              </div>
              <div style={{ width: 300 }}>
                <Slider defaultValue={50} />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 尺寸 */}
          <ComponentSectionLayout
            title="尺寸"
            id="slider-size"
            description="Slider 提供三种尺寸：small、default、large。"
          >
            <CodeOperationContainer column>
              <div style={{ width: 300 }}>
                <div style={{ fontSize: 12, color: "var(--color-text-tertiary)", marginBottom: 8 }}>小尺寸</div>
                <Slider size="small" defaultValue={30} />
              </div>
              <div style={{ width: 300 }}>
                <div style={{ fontSize: 12, color: "var(--color-text-tertiary)", marginBottom: 8 }}>默认尺寸</div>
                <Slider size="default" defaultValue={50} />
              </div>
              <div style={{ width: 300 }}>
                <div style={{ fontSize: 12, color: "var(--color-text-tertiary)", marginBottom: 8 }}>大尺寸</div>
                <Slider size="large" defaultValue={70} />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 范围选择 */}
          <ComponentSectionLayout
            title="范围选择"
            id="slider-range"
            description="通过 range 属性启用范围选择模式。"
          >
            <CodeOperationContainer>
              <div style={{ width: 300 }}>
                <Slider
                  range
                  value={rangeValue}
                  onChange={(v) => setRangeValue(v as [number, number])}
                  tooltip="always"
                />
                <div style={{ marginTop: 8, fontSize: 14, color: "var(--color-text-secondary)" }}>
                  范围: [{rangeValue[0]}, {rangeValue[1]}]
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 步长 */}
          <ComponentSectionLayout
            title="步长"
            id="slider-step"
            description="通过 step 属性设置步长。"
          >
            <CodeOperationContainer column>
              <div style={{ width: 300 }}>
                <Slider defaultValue={50} step={10} tooltip="always" />
                <div style={{ fontSize: 12, color: "var(--color-text-tertiary)", marginTop: 4 }}>步长: 10</div>
              </div>
              <div style={{ width: 300 }}>
                <Slider defaultValue={0.5} min={0} max={1} step={0.1} tooltip="always" tooltipFormatter={(v) => v.toFixed(1)} />
                <div style={{ fontSize: 12, color: "var(--color-text-tertiary)", marginTop: 4 }}>步长: 0.1</div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* Tooltip */}
          <ComponentSectionLayout
            title="Tooltip"
            id="slider-tooltip"
            description="通过 tooltip 属性控制提示的显示模式。"
          >
            <CodeOperationContainer column>
              <div style={{ width: 300, paddingTop: 24 }}>
                <Slider defaultValue={30} tooltip="hover" />
                <div style={{ fontSize: 12, color: "var(--color-text-tertiary)", marginTop: 4 }}>hover 时显示</div>
              </div>
              <div style={{ width: 300, paddingTop: 24 }}>
                <Slider defaultValue={50} tooltip="always" />
                <div style={{ fontSize: 12, color: "var(--color-text-tertiary)", marginTop: 4 }}>始终显示</div>
              </div>
              <div style={{ width: 300 }}>
                <Slider defaultValue={70} tooltip="never" />
                <div style={{ fontSize: 12, color: "var(--color-text-tertiary)", marginTop: 4 }}>从不显示</div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义 Tooltip 格式 */}
          <ComponentSectionLayout
            title="自定义 Tooltip 格式"
            id="slider-tooltip-formatter"
            description="通过 tooltipFormatter 自定义提示文本格式。"
          >
            <CodeOperationContainer column>
              <div style={{ width: 300, paddingTop: 24 }}>
                <Slider
                  defaultValue={75}
                  tooltip="always"
                  tooltipFormatter={(v) => `${v}%`}
                />
              </div>
              <div style={{ width: 300, paddingTop: 24 }}>
                <Slider
                  defaultValue={50}
                  tooltip="always"
                  tooltipFormatter={(v) => `¥${v}`}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 刻度点 */}
          <ComponentSectionLayout
            title="刻度点"
            id="slider-dots"
            description="通过 showDots 显示刻度点。"
          >
            <CodeOperationContainer>
              <div style={{ width: 300 }}>
                <Slider defaultValue={50} step={10} showDots />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 刻度标记 */}
          <ComponentSectionLayout
            title="刻度标记"
            id="slider-marks"
            description="通过 marks 属性添加刻度标记。"
          >
            <CodeOperationContainer column>
              <div style={{ width: 300, paddingBottom: 24 }}>
                <Slider
                  defaultValue={30}
                  marks={[
                    { value: 0, label: "0°C" },
                    { value: 25, label: "25°C" },
                    { value: 50, label: "50°C" },
                    { value: 75, label: "75°C" },
                    { value: 100, label: "100°C" },
                  ]}
                />
              </div>
              <div style={{ width: 300, paddingBottom: 24 }}>
                <Slider
                  defaultValue={50}
                  step={25}
                  marks={[
                    { value: 0, label: "低" },
                    { value: 25 },
                    { value: 50, label: "中" },
                    { value: 75 },
                    { value: 100, label: "高" },
                  ]}
                  showDots
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 前缀后缀 */}
          <ComponentSectionLayout
            title="前缀和后缀"
            id="slider-prefix-suffix"
            description="通过 prefix 和 suffix 添加前后缀内容。"
          >
            <CodeOperationContainer column>
              <div style={{ width: 300 }}>
                <Slider defaultValue={50} prefix="0" suffix="100" />
              </div>
              <div style={{ width: 300 }}>
                <Slider defaultValue={30} prefix="🔈" suffix="🔊" />
              </div>
              <div style={{ width: 300 }}>
                <Slider defaultValue={50} prefix="min" suffix="max" size="small" />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 垂直方向 */}
          <ComponentSectionLayout
            title="垂直方向"
            id="slider-vertical"
            description="通过 orientation='vertical' 设置垂直方向。"
          >
            <CodeOperationContainer>
              <div style={{ height: 200 }}>
                <Slider orientation="vertical" defaultValue={50} tooltip="always" />
              </div>
              <div style={{ height: 200 }}>
                <Slider
                  orientation="vertical"
                  range
                  defaultValue={[20, 60]}
                  tooltip="always"
                />
              </div>
              <div style={{ height: 200 }}>
                <Slider
                  orientation="vertical"
                  defaultValue={50}
                  step={25}
                  showDots
                  marks={[
                    { value: 0, label: "0" },
                    { value: 50, label: "50" },
                    { value: 100, label: "100" },
                  ]}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用和只读 */}
          <ComponentSectionLayout
            title="禁用和只读"
            id="slider-disabled"
            description="通过 disabled 禁用滑块，通过 readOnly 设置只读模式。"
          >
            <CodeOperationContainer column>
              <div style={{ width: 300 }}>
                <Slider defaultValue={50} disabled />
                <div style={{ fontSize: 12, color: "var(--color-text-tertiary)", marginTop: 4 }}>禁用状态</div>
              </div>
              <div style={{ width: 300 }}>
                <Slider defaultValue={50} range disabled />
                <div style={{ fontSize: 12, color: "var(--color-text-tertiary)", marginTop: 4 }}>禁用范围选择</div>
              </div>
              <div style={{ width: 300 }}>
                <Slider defaultValue={50} readOnly />
                <div style={{ fontSize: 12, color: "var(--color-text-tertiary)", marginTop: 4 }}>只读状态</div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义样式 */}
          <ComponentSectionLayout
            title="自定义样式"
            id="slider-custom-style"
            description="通过 trackStyle、activeTrackStyle、thumbStyle 自定义样式。"
          >
            <CodeOperationContainer column>
              <div style={{ width: 300 }}>
                <Slider
                  defaultValue={60}
                  trackStyle={{ backgroundColor: "var(--color-fill-tertiary)" }}
                  activeTrackStyle={{ backgroundColor: "var(--color-success)" }}
                  thumbStyle={{ borderColor: "var(--color-success)" }}
                />
              </div>
              <div style={{ width: 300 }}>
                <Slider
                  defaultValue={40}
                  trackStyle={{ backgroundColor: "var(--color-warning-light)" }}
                  activeTrackStyle={{ backgroundColor: "var(--color-warning)" }}
                  thumbStyle={{
                    borderColor: "var(--color-warning)",
                    background: "linear-gradient(135deg, var(--color-warning-light) 0%, var(--color-warning) 100%)",
                  }}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 受控组件 */}
          <ComponentSectionLayout
            title="受控组件"
            id="slider-controlled"
            description="通过 onChange 和 onChangeComplete 处理值变化。"
          >
            <CodeOperationContainer column>
              <div style={{ width: 300 }}>
                <Slider
                  value={value}
                  onChange={(v) => setValue(v as number)}
                  onChangeComplete={(v) => console.log("完成:", v)}
                />
                <div style={{ marginTop: 8, fontSize: 14, color: "var(--color-text-secondary)" }}>
                  当前值: {value}
                </div>
                <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
                  <button
                    onClick={() => setValue(0)}
                    style={{
                      padding: "4px 12px",
                      borderRadius: 4,
                      border: "1px solid var(--color-border-primary)",
                      background: "var(--color-bg-container)",
                      cursor: "pointer",
                    }}
                  >
                    重置
                  </button>
                  <button
                    onClick={() => setValue(Math.min(100, value + 10))}
                    style={{
                      padding: "4px 12px",
                      borderRadius: 4,
                      border: "1px solid var(--color-border-primary)",
                      background: "var(--color-bg-container)",
                      cursor: "pointer",
                    }}
                  >
                    +10
                  </button>
                  <button
                    onClick={() => setValue(Math.max(0, value - 10))}
                    style={{
                      padding: "4px 12px",
                      borderRadius: 4,
                      border: "1px solid var(--color-border-primary)",
                      background: "var(--color-bg-container)",
                      cursor: "pointer",
                    }}
                  >
                    -10
                  </button>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === "props" && (
        <div className="flex flex-col gap-12">
          <ComponentPropsTable props={sliderProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
