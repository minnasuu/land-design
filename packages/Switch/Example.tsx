import React, { useState } from 'react';
import Switch from ".";
import Icon from "../Icon";
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function SwitchExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [checked, setChecked] = useState<boolean>(false);

  const switchProps = [
    { name: "checked", type: "boolean", desc: "是否开启", default: "false" },
    { name: "label", type: "string", desc: "开启前的文字" },
    { name: "checkedLabel", type: "string", desc: "开启后的文字" },
    { name: "icon", type: "React.ReactNode", desc: "开启前的图标" },
    { name: "checkedIcon", type: "React.ReactNode", desc: "开启后的图标" },
    { name: "tip", type: "React.ReactNode", desc: "提示内容" },
    { name: "iconTip", type: "React.ReactNode", desc: "图标提示内容" },
    { name: "tipProps", type: "PopOverProps", desc: "提示内容属性" },
    { name: "iconTipProps", type: "PopOverProps", desc: "图标提示内容属性" },
    { name: "dark", type: "boolean", desc: "是否暗黑模式", default: "false" },
    { name: "disabled", type: "boolean", desc: "是否禁用", default: "false" },
    {
      name: "onChange",
      type: "(checked: boolean) => void",
      desc: "开关事件",
    },
    { name: "style", type: "CSSProperties", desc: "自定义样式" },
    { name: "className", type: "string", desc: "自定义类名" },
  ];

  return (
    <ComponentContentLayout
      zh='开关'
      en='Switch'
      desc='LandDesign 的开关组件，支持状态切换、图标显示、提示信息等功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >

      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='switch-normal'
            description='Switch 组件的基础用法，支持状态切换。'
          >
            <CodeOperationContainer>
              <Switch
                checked={checked}
                onChange={setChecked}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 包含标题 */}
          <ComponentSectionLayout
            title='包含标题'
            id='switch-label'
            description='通过 label 和 checkedLabel 属性可以设置不同状态下的描述文字。'
          >
            <CodeOperationContainer>
              <Switch
                label="是否开启"
                checkedLabel="已开启"
                checked={checked}
                onChange={setChecked}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 包含提示内容 */}
          <ComponentSectionLayout
            title='包含提示内容'
            id='switch-tip'
            description='通过 tip 和 iconTip 属性可以为开关添加提示信息。'
          >
            <CodeOperationContainer>
              <Switch
                label="是否开启"
                checkedLabel="已开启"
                iconTip="开启后将启用相关功能"
                checked={checked}
                onChange={setChecked}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用状态 */}
          <ComponentSectionLayout
            title='禁用状态'
            id='switch-disabled'
            description='通过 disabled 属性可以禁用开关。'
          >
            <CodeOperationContainer>
              <Switch
                label="禁用状态"
                checkedLabel="已禁用"
                disabled
                tip="此功能暂不可用"
              />
              <Switch
                label="禁用且开启"
                checkedLabel="已禁用"
                disabled
                checked
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 包含图标 */}
          <ComponentSectionLayout
            title='包含图标'
            id='switch-icon'
            description='通过 icon 和 checkedIcon 属性可以设置不同状态下的图标。'
          >
            <CodeOperationContainer>
              <Switch
                label="是否开启"
                checkedLabel="已开启"
                icon={
                  <Icon name="light" size={12} stroke="var(--color-primary-6)" />
                }
                checkedIcon={
                  <Icon name="dark" size={12} fill="var(--color-primary-6)" />
                }
                checked={checked}
                onChange={setChecked}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 暗黑模式 */}
          <ComponentSectionLayout
            title='暗黑模式'
            id='switch-dark'
            description='通过 dark 属性可以启用暗黑模式。'
          >
            <CodeOperationContainer column>
              <Switch
                label="暗黑模式"
                checkedLabel="已开启"
                dark
                checked={checked}
                onChange={setChecked}
              />
              <Switch
                label="暗黑模式（开启）"
                checkedLabel="已开启"
                dark
                checked
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同样式 */}
          <ComponentSectionLayout
            title='不同样式'
            id='switch-styles'
            description='Switch 支持不同的样式变体。'
          >
            <CodeOperationContainer column>
              <Switch
                label="默认样式"
                checked={checked}
                onChange={setChecked}
              />
              <Switch
                label="带图标样式"
                icon={<Icon name="light" size={12} />}
                checkedIcon={<Icon name="dark" size={12} />}
                checked={checked}
                onChange={setChecked}
              />
              <Switch
                label="暗黑样式"
                dark
                checked={checked}
                onChange={setChecked}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={switchProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
