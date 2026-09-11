import React, { useState } from 'react'
import Title from "../Title";
import Flex from "../Flex";
import Layout from ".";
import Header from "../Header";
import Content from "../Content";
import Footer from "../Footer";
import { ClickType } from "../Nav/props";
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';

// API 文档配置
const layoutProps = [
  { name: "children", type: "ReactNode", desc: "布局子元素" },
  { name: "style", type: "CSSProperties", desc: "自定义样式" },
  { name: "className", type: "string", desc: "自定义类名" },
];

export default function LayoutExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  return (
    <ComponentContentLayout
      zh='布局'
      en='Layout'
      desc='LandDesign 的布局组件，用于创建页面整体布局结构。支持Header、Content、Footer等子组件。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className="flex flex-col gap-6">
          {/* 基本布局 */}
          <ComponentSectionLayout
            title='基本布局'
            id='layout-basic'
            description='Layout 组件的基本用法，包含Header、Content、Footer。'
          >
            <CodeOperationContainer>
              <div className="flex justify-center gap-1.5 border border-gray-3 p-2">
                <Layout className="border border-gray-3 w-full" style={{ height: 600 }}>
                  <Header
                    logo={<p>🌷🌷🌷</p>}
                    name={<Title title="Web Site" type="h2" />}
                    menuProps={{
                      active: '1',
                      items: [
                        { key: '1', label: "设计", clickType: ClickType.SELF },
                        { key: '2', label: "组件", clickType: ClickType.SELF },
                        { key: '3', label: "文档", clickType: ClickType.SELF },
                      ]
                    }}
                    align="end"
                  />
                  <Layout>
                    <Content style={{ minHeight: '464px' }}><Flex bothCenter height="100%">Content</Flex></Content>
                  </Layout>
                  <Footer><Flex bothCenter>Footer</Flex></Footer>
                </Layout>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 固定顶部导航栏 */}
          <ComponentSectionLayout
            title='固定顶部导航栏'
            id='layout-fixed-header'
            description='通过Header的fixed属性可以创建固定顶部导航栏。'
          >
            <CodeOperationContainer>
              <div className="flex justify-center gap-1.5 p-2 border border-gray-3">
                <Layout className="border border-gray-3 w-full" style={{ height: 600 }}>
                  <Header logo={<p>🌷🌷🌷</p>} name={<Title title="Web Site" type="h2" />} fixed filter={10} />
                  <Layout>
                    <Content style={{ minHeight: '464px' }}><Flex bothCenter height="100%">Content</Flex></Content>
                  </Layout>
                  <Footer><Flex bothCenter>Footer</Flex></Footer>
                </Layout>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-3'>
          <ComponentPropsTable props={layoutProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
