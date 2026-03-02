import React, { useState } from "react";
import Rate from ".";
import Icon from "../Icon";
import CodeOperationContainer from "../../example/components/CodeOperationContainer";
import ComponentContentLayout from "../../example/components/ComponentContentLayout";
import ComponentPropsTable from "../../example/components/ComponentPropsTable";
import ComponentSectionLayout from "../../example/components/ComponentSectionLayout";

export default function RateExample() {
  const [activeTab, setActiveTab] = useState<string>("examples");
  const [value, setValue] = useState<number>(3);
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);

  const rateProps = [
    { name: "value", type: "number", desc: "当前评分值（受控）" },
    { name: "defaultValue", type: "number", desc: "默认评分值（非受控）", default: "0" },
    { name: "count", type: "number", desc: "评分总数", default: "5" },
    { name: "allowHalf", type: "boolean", desc: "是否允许半选", default: "true" },
    { name: "allowClear", type: "boolean", desc: "是否允许清除", default: "true" },
    { name: "size", type: '"small" | "default" | "large"', desc: "组件尺寸", default: '"default"' },
    { name: "disabled", type: "boolean", desc: "是否禁用", default: "false" },
    { name: "readOnly", type: "boolean", desc: "是否只读", default: "false" },
    { name: "showTooltip", type: "boolean", desc: "是否显示提示", default: "false" },
    { name: "tooltips", type: "string[]", desc: "各等级的提示文案" },
    { name: "gap", type: "number", desc: "图标间距", default: "8" },
    { name: "inactiveColor", type: "string", desc: "未选中颜色", default: "var(--color-fill-tertiary)" },
    { name: "activeColor", type: "string", desc: "选中颜色", default: "var(--color-warning)" },
    { name: "hoverColor", type: "string", desc: "悬停颜色" },
    { name: "character", type: "ReactNode | (index) => ReactNode", desc: "自定义图标" },
    { name: "activeCharacter", type: "ReactNode | (index) => ReactNode", desc: "选中状态图标" },
    { name: "onChange", type: "(value: number) => void", desc: "评分变化事件" },
    { name: "onHoverChange", type: "(value?: number) => void", desc: "悬停值变化事件" },
  ];

  const tooltipTexts = ["很差", "较差", "一般", "良好", "优秀"];

  return (
    <ComponentContentLayout
      zh="评分"
      en="Rate"
      desc="LandDesign 的评分组件，支持星级评分、半星选择、自定义图标、Tooltip 提示等功能。"
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === "examples" && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title="基础用法"
            id="rate-basic"
            description="Rate 组件的基础用法，支持半星评分。"
          >
            <CodeOperationContainer column>
              <Rate value={value} onChange={setValue} />
              <div className="text-sm text-secondary">
                当前评分：{value} 分
                {hoverValue !== undefined && ` (悬停：${hoverValue})`}
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 非受控模式 */}
          <ComponentSectionLayout
            title="非受控模式"
            id="rate-uncontrolled"
            description="使用 defaultValue 设置初始值，组件内部管理状态。"
          >
            <CodeOperationContainer>
              <Rate defaultValue={3.5} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 尺寸 */}
          <ComponentSectionLayout
            title="不同尺寸"
            id="rate-size"
            description="Rate 组件提供三种尺寸：small、default、large。"
          >
            <CodeOperationContainer column>
              <div className="flex items-center gap-4">
                <span className="text-sm w-16">Small:</span>
                <Rate size="small" defaultValue={3} />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm w-16">Default:</span>
                <Rate size="default" defaultValue={3} />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm w-16">Large:</span>
                <Rate size="large" defaultValue={3} />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 半星与整星 */}
          <ComponentSectionLayout
            title="半星与整星"
            id="rate-half"
            description="通过 allowHalf 属性控制是否允许半星评分。"
          >
            <CodeOperationContainer column>
              <div className="flex items-center gap-4">
                <span className="text-sm w-24">允许半星:</span>
                <Rate allowHalf defaultValue={2.5} />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm w-24">仅整星:</span>
                <Rate allowHalf={false} defaultValue={3} />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同数量 */}
          <ComponentSectionLayout
            title="不同评分数量"
            id="rate-count"
            description="通过 count 属性可以设置不同的评分总数。"
          >
            <CodeOperationContainer column>
              <Rate count={3} defaultValue={2} />
              <Rate count={5} defaultValue={3} />
              <Rate count={10} defaultValue={6} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义颜色 */}
          <ComponentSectionLayout
            title="自定义颜色"
            id="rate-colors"
            description="通过 inactiveColor 和 activeColor 属性自定义颜色。"
          >
            <CodeOperationContainer column>
              <Rate
                activeColor="var(--color-warning)"
                defaultValue={3}
              />
              <Rate
                activeColor="var(--color-success)"
                defaultValue={3}
              />
              <Rate
                activeColor="var(--color-error)"
                defaultValue={3}
              />
              <Rate
                activeColor="var(--color-primary)"
                defaultValue={3}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义图标 */}
          <ComponentSectionLayout
            title="自定义图标"
            id="rate-custom"
            description="通过 character 属性可以自定义评分图标。"
          >
            <CodeOperationContainer column>
              <Rate
                character={<Icon name="like-fill" />}
                activeColor="var(--color-error)"
                defaultValue={3}
              />
              <Rate
                character={<Icon name="heart-fill" />}
                activeColor="#ff6b6b"
                defaultValue={3}
              />
              <Rate
                character="😀"
                defaultValue={3}
              />
              <Rate
                character={(index) => (
                  <span style={{ fontSize: 20 }}>{["😡", "😞", "😐", "😊", "😍"][index]}</span>
                )}
                defaultValue={3}
                allowHalf={false}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* Tooltip 提示 */}
          <ComponentSectionLayout
            title="Tooltip 提示"
            id="rate-tooltip"
            description="通过 showTooltip 和 tooltips 属性显示评分提示。"
          >
            <CodeOperationContainer column>
              <Rate
                showTooltip
                tooltips={tooltipTexts}
                defaultValue={3}
              />
              <Rate
                value={value}
                onChange={setValue}
                onHoverChange={setHoverValue}
              />
              <div className="text-sm text-secondary">
                {hoverValue !== undefined
                  ? tooltipTexts[Math.ceil(hoverValue) - 1] || ""
                  : tooltipTexts[Math.ceil(value) - 1] || ""}
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 只读和禁用 */}
          <ComponentSectionLayout
            title="只读和禁用"
            id="rate-readonly"
            description="readOnly 只读模式保持视觉，disabled 禁用并降低透明度。"
          >
            <CodeOperationContainer column>
              <div className="flex items-center gap-4">
                <span className="text-sm w-16">只读:</span>
                <Rate readOnly value={4} />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm w-16">禁用:</span>
                <Rate disabled value={3} />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 允许清除 */}
          <ComponentSectionLayout
            title="允许清除"
            id="rate-clear"
            description="allowClear 允许再次点击同一值时清零，设为 false 禁用此功能。"
          >
            <CodeOperationContainer column>
              <div className="flex items-center gap-4">
                <span className="text-sm w-28">可清除:</span>
                <Rate allowClear defaultValue={3} />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm w-28">不可清除:</span>
                <Rate allowClear={false} defaultValue={3} />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 键盘操作 */}
          <ComponentSectionLayout
            title="键盘操作"
            id="rate-keyboard"
            description="聚焦后可使用方向键调整评分，Home/End 快速跳转。"
          >
            <CodeOperationContainer>
              <Rate
                defaultValue={3}
                autoFocus
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === "props" && (
        <div className="flex flex-col gap-12">
          <ComponentPropsTable props={rateProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
