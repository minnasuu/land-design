import React, { useState } from 'react'
import Title from "../Title";
import Header from ".";
import Button from "../Button";
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';

// API 文档配置
const headerProps = [
  { name: "height", type: "string", desc: "头部高度", default: "64px" },
  { name: "logo", type: "element | string", desc: "logo" },
  { name: "name", type: "element | string", desc: "名称" },
  {
    name: "borderBottom",
    type: "boolean",
    desc: "是否显示底部边框",
    default: "true",
  },
  {
    name: "divider",
    type: "boolean",
    desc: "是否显示分割线",
    default: "true",
  },
  { name: "applications", type: "element", desc: "应用" },
  { name: "fixed", type: "boolean", desc: "是否固定", default: "false" },
  { name: "filter", type: "number", desc: "过滤器", default: "0" },
  { name: "menuProps", type: "NavProps", desc: "导航属性" },
  { name: "rightComponent", type: "element", desc: "右侧组件" },
  { name: "mobileSize", type: "number", desc: "移动端断点", default: "768" },
  { name: "style", type: "CSSProperties", desc: "自定义样式" },
  { name: "className", type: "string", desc: "自定义类名" },
];

export default function HeaderExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  return (
    <ComponentContentLayout
      zh='头部'
      en='Header'
      desc='LandDesign 的头部组件，用于展示网页头部信息。支持Logo、名称、导航菜单、右侧组件等功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className="flex flex-col gap-6">
          {/* 设置网站 Logo和名称 */}
          <ComponentSectionLayout
            title='设置网站 Logo和名称'
            id='header-logo'
            description='Header 组件的基础用法，设置Logo和网站名称。'
          >
            <CodeOperationContainer>
              <div className="flex justify-center gap-6 bg-gray p-8">
                <Header logo={<>🌷🌷🌷</>} name='Web Site' />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 设置网站导航菜单 */}
          <ComponentSectionLayout
            title='设置网站导航菜单'
            id='header-menu'
            description='通过 menuProps 属性可以设置导航菜单。'
          >
            <CodeOperationContainer>
              <div className="flex justify-center gap-6 bg-gray p-8">
                <Header logo={<>🌷🌷🌷</>} name='Web Site' menuProps={{
                  items: [
                    {
                      key: 'home',
                      label: '首页',
                    },
                    {
                      key: 'about',
                      label: '关于',
                    },
                    {
                      key: 'contact',
                      label: '联系我们',
                    },
                  ],
                  active: 'home',
                }} />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 设置网站右侧组件 */}
          <ComponentSectionLayout
            title='设置网站右侧组件'
            id='header-right'
            description='通过 rightComponent 属性可以设置右侧组件，如登录注册按钮。'
          >
            <CodeOperationContainer>
              <div className="flex justify-center gap-6 bg-gray p-8">
                <Header
                  logo={<>🌷🌷🌷</>}
                  name='Web Site'
                  menuProps={{
                    items: [
                      {
                        key: 'home',
                        label: '首页',
                      },
                      {
                        key: 'about',
                        label: '关于',
                      },
                      {
                        key: 'contact',
                        label: '联系我们',
                      },
                    ],
                    active: 'home',
                  }}
                  rightComponent={<div className="flex gap-3">
                    <Button text="登陆" variant="fill" />
                    <Button text="注册" variant="background" />
                  </div>}
                  mobileSize={400}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 设置网站聚合应用 */}
          <ComponentSectionLayout
            title='设置网站聚合应用'
            id='header-applications'
            description='通过 applications 属性可以设置聚合应用列表。'
          >
            <CodeOperationContainer>
              <div className="flex justify-center gap-6 p-8" style={{ backgroundColor: 'var(--color-bg-3)' }}>
                <Header logo={<>🌷🌷🌷</>} name='Web Site' menuProps={{
                  items: [
                    {
                      key: 'home',
                      label: '首页',
                    },
                    {
                      key: 'about',
                      label: '关于',
                    },
                    {
                      key: 'contact',
                      label: '联系我们',
                    },
                  ],
                  active: 'home',
                }}
                  applications={<div>聚合应用列表</div>}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-3'>
          <ComponentPropsTable props={headerProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
