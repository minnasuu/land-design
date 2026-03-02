import React, { useState } from "react";
import Switch from ".";
import Icon from "../Icon";
import CodeOperationContainer from "../../example/components/CodeOperationContainer";
import ComponentContentLayout from "../../example/components/ComponentContentLayout";
import ComponentPropsTable from "../../example/components/ComponentPropsTable";
import ComponentSectionLayout from "../../example/components/ComponentSectionLayout";

export default function SwitchExample() {
  const [activeTab, setActiveTab] = useState<string>("examples");
  const [checked, setChecked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // 模拟异步切换
  const handleAsyncChange = (newChecked: boolean) => {
    setLoading(true);
    setTimeout(() => {
      setChecked(newChecked);
      setLoading(false);
    }, 1000);
  };

  const switchProps = [
    { name: "checked", type: "boolean", desc: "受控模式的开关状态", default: "-" },
    { name: "defaultChecked", type: "boolean", desc: "非受控模式的默认状态", default: "false" },
    { name: "name", type: "string", desc: "表单字段名", default: "-" },
    { name: "value", type: "string | number | boolean", desc: "开关值（用于表单）", default: "true" },
    { name: "label", type: "ReactNode", desc: "标签文字", default: "-" },
    { name: "checkedLabel", type: "ReactNode", desc: "开启状态的标签文字", default: "-" },
    { name: "uncheckedContent", type: "ReactNode", desc: "关闭状态轨道内显示的内容", default: "-" },
    { name: "checkedContent", type: "ReactNode", desc: "开启状态轨道内显示的内容", default: "-" },
    { name: "icon", type: "ReactNode", desc: "关闭状态的滑块图标", default: "-" },
    { name: "checkedIcon", type: "ReactNode", desc: "开启状态的滑块图标", default: "-" },
    { name: "tip", type: "ReactNode", desc: "整体提示内容", default: "-" },
    { name: "iconTip", type: "ReactNode", desc: "图标提示内容", default: "-" },
    { name: "tipProps", type: "Partial<PopOverProps>", desc: "整体提示的 PopOver 属性", default: "-" },
    { name: "iconTipProps", type: "Partial<PopOverProps>", desc: "图标提示的 PopOver 属性", default: "-" },
    { name: "size", type: '"small" | "default" | "large"', desc: "尺寸", default: '"default"' },
    { name: "labelPosition", type: '"left" | "right"', desc: "标签位置", default: '"right"' },
    { name: "loading", type: "boolean", desc: "加载中状态", default: "false" },
    { name: "disabled", type: "boolean", desc: "是否禁用", default: "false" },
    { name: "readOnly", type: "boolean", desc: "只读模式", default: "false" },
    { name: "onChange", type: "(checked: boolean, event) => void", desc: "状态变化回调", default: "-" },
    { name: "onClick", type: "(event) => void", desc: "点击事件", default: "-" },
    { name: "onFocus", type: "(event) => void", desc: "获得焦点事件", default: "-" },
    { name: "onBlur", type: "(event) => void", desc: "失去焦点事件", default: "-" },
    { name: "className", type: "string", desc: "自定义类名", default: "-" },
    { name: "style", type: "CSSProperties", desc: "自定义样式", default: "-" },
    { name: "trackClassName", type: "string", desc: "轨道自定义类名", default: "-" },
    { name: "trackStyle", type: "CSSProperties", desc: "轨道自定义样式", default: "-" },
    { name: "thumbClassName", type: "string", desc: "滑块自定义类名", default: "-" },
    { name: "thumbStyle", type: "CSSProperties", desc: "滑块自定义样式", default: "-" },
  ];

  return (
    <ComponentContentLayout
      zh="开关"
      en="Switch"
      desc="Switch 开关组件，用于在两种状态间进行切换。支持多种尺寸、加载状态、自定义内容等功能。"
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === "examples" && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title="基础用法"
            id="switch-basic"
            description="最基础的开关用法，支持受控和非受控模式。"
          >
            <CodeOperationContainer>
              <Switch checked={checked} onChange={(c) => setChecked(c)} />
              <Switch defaultChecked />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 尺寸 */}
          <ComponentSectionLayout
            title="尺寸"
            id="switch-size"
            description="Switch 提供三种尺寸：small、default、large。"
          >
            <CodeOperationContainer>
              <Switch size="small" label="小尺寸" checked={checked} onChange={(c) => setChecked(c)} />
              <Switch size="default" label="默认尺寸" checked={checked} onChange={(c) => setChecked(c)} />
              <Switch size="large" label="大尺寸" checked={checked} onChange={(c) => setChecked(c)} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 标签 */}
          <ComponentSectionLayout
            title="标签"
            id="switch-label"
            description="通过 label 和 checkedLabel 属性设置不同状态下的标签文字。"
          >
            <CodeOperationContainer>
              <Switch
                label="关闭"
                checkedLabel="开启"
                checked={checked}
                onChange={(c) => setChecked(c)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 标签位置 */}
          <ComponentSectionLayout
            title="标签位置"
            id="switch-label-position"
            description="通过 labelPosition 属性设置标签在开关的左侧或右侧。"
          >
            <CodeOperationContainer>
              <Switch
                label="标签在右侧"
                labelPosition="right"
                checked={checked}
                onChange={(c) => setChecked(c)}
              />
              <Switch
                label="标签在左侧"
                labelPosition="left"
                checked={checked}
                onChange={(c) => setChecked(c)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 滑块图标 */}
          <ComponentSectionLayout
            title="滑块图标"
            id="switch-icon"
            description="通过 icon 和 checkedIcon 属性在滑块内显示图标。"
          >
            <CodeOperationContainer>
              <Switch
                label="主题切换"
                icon={<Icon name="light" size={12} />}
                checkedIcon={<Icon name="dark" size={12} />}
                checked={checked}
                onChange={(c) => setChecked(c)}
              />
              <Switch
                label="音量开关"
                icon={<Icon name="close" size={10} />}
                checkedIcon={<Icon name="check" size={10} />}
                checked={checked}
                onChange={(c) => setChecked(c)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 轨道内容 */}
          <ComponentSectionLayout
            title="轨道内容"
            id="switch-track-content"
            description="通过 uncheckedContent 和 checkedContent 在轨道内显示文字或图标。"
          >
            <CodeOperationContainer>
              <Switch
                size="large"
                uncheckedContent="OFF"
                checkedContent="ON"
                checked={checked}
                onChange={(c) => setChecked(c)}
              />
              <Switch
                size="large"
                uncheckedContent={<Icon name="close" size={10} />}
                checkedContent={<Icon name="check" size={10} />}
                checked={checked}
                onChange={(c) => setChecked(c)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 加载状态 */}
          <ComponentSectionLayout
            title="加载状态"
            id="switch-loading"
            description="通过 loading 属性显示加载状态，常用于异步操作。"
          >
            <CodeOperationContainer>
              <Switch
                label="异步切换"
                loading={loading}
                checked={checked}
                onChange={handleAsyncChange}
              />
              <Switch label="始终加载" loading checked />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用和只读 */}
          <ComponentSectionLayout
            title="禁用和只读"
            id="switch-disabled"
            description="通过 disabled 禁用开关，通过 readOnly 设置只读模式。"
          >
            <CodeOperationContainer>
              <Switch label="禁用（关闭）" disabled />
              <Switch label="禁用（开启）" disabled checked />
              <Switch label="只读（关闭）" readOnly />
              <Switch label="只读（开启）" readOnly checked />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 提示信息 */}
          <ComponentSectionLayout
            title="提示信息"
            id="switch-tip"
            description="通过 tip 属性为整个开关添加提示，通过 iconTip 在旁边显示信息图标。"
          >
            <CodeOperationContainer>
              <Switch
                label="hover 显示提示"
                tip="这是整体的提示信息"
                checked={checked}
                onChange={(c) => setChecked(c)}
              />
              <Switch
                label="图标提示"
                iconTip="开启后将启用相关功能"
                checked={checked}
                onChange={(c) => setChecked(c)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义样式 */}
          <ComponentSectionLayout
            title="自定义样式"
            id="switch-custom-style"
            description="通过 trackStyle 和 thumbStyle 自定义轨道和滑块样式。"
          >
            <CodeOperationContainer>
              <Switch
                label="自定义颜色"
                trackStyle={{
                  backgroundColor: checked ? "#52c41a" : undefined,
                }}
                checked={checked}
                onChange={(c) => setChecked(c)}
              />
              <Switch
                label="方形滑块"
                thumbStyle={{ borderRadius: 4 }}
                trackStyle={{ borderRadius: 6 }}
                checked={checked}
                onChange={(c) => setChecked(c)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 组合示例 */}
          <ComponentSectionLayout
            title="组合示例"
            id="switch-combined"
            description="多种属性组合使用的综合示例。"
          >
            <CodeOperationContainer column>
              <Switch
                size="large"
                label="深色模式"
                checkedLabel="深色模式已开启"
                icon={<Icon name="light" size={14} />}
                checkedIcon={<Icon name="dark" size={14} />}
                iconTip="切换应用的显示主题"
                checked={checked}
                onChange={(c) => setChecked(c)}
              />
              <Switch
                size="small"
                labelPosition="left"
                label="接收通知"
                checkedLabel="已开启通知"
                checked={checked}
                onChange={(c) => setChecked(c)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === "props" && (
        <div className="flex flex-col gap-12">
          <ComponentPropsTable props={switchProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
