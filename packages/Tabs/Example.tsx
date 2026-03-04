import React, { useState } from "react";
import Tabs from ".";
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import Link from '../Link';
import Icon from '../Icon';
import PopOver from '../PopOver';

export default function TabsExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [value, setValue] = useState<string>("1");

  const tabsProps = [
    { name: "checked", type: "string", desc: "当前选择项" },
    {
      name: "data",
      type: <><Link anchor="TabsItemType-API">TabsItemType</Link>[]</>,
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
      type: <>(key: string, item: <Link anchor="TabsItemType-API">TabsItemType</Link>){' =>'} void</>,
      desc: "选择事件",
    },
    { name: "activeClassName", type: "string", desc: "选中项类名" },
    {
      name: "disabled",
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
        { name: "label", type: "ReactNode | ((item, isSelected) => ReactNode)", desc: "选项内容，支持字符串、节点或渲染函数" },
        { name: "tip", type: "string", desc: "选项提示内容" },
        { name: "disabled", type: "boolean", desc: "是否禁用", default: "false" },
      ],
    },
  ];

  const tabsData = [
    { key: "1", label: "模块1" },
    { key: "2", label: "模块2" },
    { key: "3", label: "模块3" },
  ];

  // 自定义节点示例
  const tabsDataWithCustomLabel = [
    { key: "1", label: "模块1" },
    {
      key: "2",
      label: (
        <span className="hover-pop" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          模块2
          <PopOver content="这是模块2的提示" theme="dark" ><Icon name="info-stroke" size={14} /></PopOver>
        </span>
      ),
    },
    { key: "3", label: "模块3" },
  ];

  // 渲染函数示例
  const tabsDataWithRenderLabel = [
    {
      key: "1",
      label: (item: any, isSelected: boolean) => (
       <div className="flex items-center gap-4" style={{ fontWeight: isSelected ? 'bold' : 'normal' }}>
          模块1 {isSelected && <Icon name="check-fill" size={14} />}
        </div>
      ),
    },
    {
      key: "2",
      label: (item: any, isSelected: boolean) => (
        <div className="flex items-center gap-4" style={{ fontWeight: isSelected ? 'bold' : 'normal' }}>
          模块2 {isSelected && <Icon name="check-fill" size={14} />}
        </div>
      ),
    },
    {
      key: "3",
      label: (item: any, isSelected: boolean) => (
       <div className="flex items-center gap-4" style={{ fontWeight: isSelected ? 'bold' : 'normal' }}>
          模块3 {isSelected && <Icon name="check-fill" size={14} />}
        </div>
      ),
    },
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
      desc='LandDesign 的标签页组件，支持模块切换功能，label 支持自定义节点和渲染函数。'
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

          {/* 自定义节点 */}
          <ComponentSectionLayout
            title='自定义节点'
            id='tabs-custom-label'
            description='label 支持传入自定义 React 节点，可以添加图标、提示等内容。'
          >
            <CodeOperationContainer>
              <Tabs
                checked={value}
                data={tabsDataWithCustomLabel}
                onChange={(val) => setValue(val)}
                width="300px"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 渲染函数 */}
          <ComponentSectionLayout
            title='渲染函数'
            id='tabs-render-label'
            description='label 支持传入渲染函数，可以根据选中状态动态渲染内容。'
          >
            <CodeOperationContainer>
              <Tabs
                checked={value}
                data={tabsDataWithRenderLabel}
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
                disabled
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
        </>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={tabsProps} />
          {tabsTypes?.map(i => <div key={i.name} className='flex flex-col gap-12' id={`${i.name}-API`}>
            <h3 className='text-sm font-bold'>{i.name}</h3>
            <ComponentPropsTable props={i.data as any} />
          </div>)}
        </div>
      )}
    </ComponentContentLayout>
  );
}
