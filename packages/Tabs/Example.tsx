import React, { useState } from "react";
import Tabs from ".";
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import Link from '../Link';

export default function TabsExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [value, setValue] = useState<string>("1");

  const tabsProps = [
    { name: "checked", type: "string", desc: "当前选择项" },
    {
      name: "data",
      type: <Link anchor="TabsItemType-API">TabsItemType</Link>,
      desc: "数据",
    },
    { name: "width", type: "number | string", desc: "宽度", default: "100%" },
    {
      name: "useDivider",
      type: "boolean",
      desc: "是否使用分割线",
      default: "false",
    },
    {
      name: "onChange",
      type: "(key: string, item: TabsItemType) => void",
      desc: "选择事件",
    },
    { name: "activeClassName", type: "string", desc: "选中项类名" },
    {
      name: "switchDisabled",
      type: "boolean",
      desc: "是否禁用切换",
      default: "false",
    },
    { name: "className", type: "string", desc: "自定义类名" },
  ];
  const tabsTypes = [
    {
      name: "TabsItemType",
      data: [
        { name: "key", type: "string", desc: "唯一标识" },
        { name: "label", type: "string | Element", desc: "选项值" },
        { name: "tip", type: "Element", desc: "选项提示内容" },
        { name: "iconTip", type: "Element", desc: "选项图标类型提示" },
        {
          name: "showIcon",
          type: "boolean",
          desc: "是否显示图标",
          default: "false",
        },
      ],
    },
  ];

  const tabsData = [
    { key: "1", label: "模块1" },
    { key: "2", label: "模块2" },
    { key: "3", label: "模块3" },
  ];

  const tabsDataWithTips = [
    { key: "1", label: "模块1", tip: "模块 1 的提示" },
    {
      key: "2",
      label: "模块2",
      showIcon: true,
      iconTip: "模块 2 的图标提示",
    },
    { key: "3", label: "模块3" },
  ];

  const tabsDataWithDisabled = [
    { key: "1", label: "模块1" },
    { key: "2", label: "模块2", disabled: true },
    { key: "3", label: "模块3" },
  ];

  return (
    <ComponentContentLayout
      zh='标签页'
      en='Tabs'
      desc='LandDesign 的标签页组件，支持模块切换功能，提供提示信息和禁用状态。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >

      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='tabs-normal'
            description='Tabs 组件的基础用法，支持模块切换功能。'
          >
            <CodeOperationContainer>
              <Tabs
                checked={value}
                data={tabsData}
                onChange={(val) => setValue(val)}
                width="300px"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 包含提示 */}
          <ComponentSectionLayout
            title='包含提示'
            id='tabs-tip'
            description='通过 tip 和 iconTip 属性可以为标签页添加提示信息。'
          >
            <CodeOperationContainer>
              <Tabs
                checked={value}
                data={tabsDataWithTips}
                onChange={(val) => setValue(val)}
                width="300px"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用状态 */}
          <ComponentSectionLayout
            title='禁用状态'
            id='tabs-disabled'
            description='可以禁用整个标签页组件或单个标签页。'
          >
            <CodeOperationContainer>
              <Tabs
                checked={value}
                data={tabsDataWithDisabled}
                onChange={(val) => setValue(val)}
                width="300px"
              />
              <Tabs
                checked={value}
                data={tabsData}
                onChange={(val) => setValue(val)}
                width="300px"
                switchDisabled
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 使用分割线 */}
          <ComponentSectionLayout
            title='使用分割线'
            id='tabs-divider'
            description='通过 useDivider 属性可以在标签页之间显示分割线。'
          >
            <CodeOperationContainer>
              <Tabs
                checked={value}
                data={tabsData}
                onChange={(val) => setValue(val)}
                width="300px"
                useDivider
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同宽度 */}
          <ComponentSectionLayout
            title='不同宽度'
            id='tabs-width'
            description='可以通过 width 属性设置不同的标签页容器宽度。'
          >
            <CodeOperationContainer>
              <Tabs
                checked={value}
                data={tabsData}
                onChange={(val) => setValue(val)}
                width="200px"
              />
              <Tabs
                checked={value}
                data={tabsData}
                onChange={(val) => setValue(val)}
                width="400px"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同样式 */}
          <ComponentSectionLayout
            title='不同样式'
            id='tabs-styles'
            description='Tabs 支持不同的样式变体。'
          >
            <CodeOperationContainer>
              <Tabs
                checked={value}
                data={tabsData}
                onChange={(val) => setValue(val)}
                width="300px"
              />
              <Tabs
                checked={value}
                data={tabsDataWithTips}
                onChange={(val) => setValue(val)}
                width="300px"
              />
              <Tabs
                checked={value}
                data={tabsData}
                onChange={(val) => setValue(val)}
                width="300px"
                useDivider
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={tabsProps} />
          {tabsTypes.map(type => (
            <ComponentPropsTable props={type.data} />
          ))}
        </div>
      )}
    </ComponentContentLayout>
  );
}
