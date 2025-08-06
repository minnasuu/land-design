import React, { useState } from 'react';
import Rate from ".";
import Icon from "../Icon";
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function RateExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [value, setValue] = useState<number>(0);

  const rateProps = [
    { name: "value", type: "number", desc: "当前值" },
    { name: "count", type: "number", desc: "最大值", default: "5" },
    {
      name: "defaultColor",
      type: "string",
      desc: "默认颜色",
      default: "gray-5",
    },
    {
      name: "activeColor",
      type: "string",
      desc: "选中颜色",
      default: "orange-6",
    },
    { name: "customSvg", type: "Element", desc: "自定义图标", default: "🌟" },
    { name: "onChange", type: "(value: number) => void", desc: "评分事件" },
    { name: "style", type: "CSSProperties", desc: "自定义样式" },
    { name: "className", type: "string", desc: "自定义类名" },
  ];

  return (
    <ComponentContentLayout
      zh='评分'
      en='Rate'
      desc='LandDesign 的评分组件，支持星级评分、自定义图标、颜色配置等功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >

      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='rate-normal'
            description='Rate 组件的基础用法，支持星级评分。'
          >
            <CodeOperationContainer>
              <Rate
                value={value}
                onChange={(value: number) => setValue(value)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义图形和评分颜色 */}
          <ComponentSectionLayout
            title='自定义图形和评分颜色'
            id='rate-custom'
            description='通过 customSvg 和 activeColor 属性可以自定义评分图标和颜色。'
          >
            <CodeOperationContainer>
              <Rate
                customSvg={<Icon name={"like-fill"} size={24} />}
                activeColor="var(--color-red-6)"
                value={value}
                onChange={(value: number) => setValue(value)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同评分数量 */}
          <ComponentSectionLayout
            title='不同评分数量'
            id='rate-count'
            description='通过 count 属性可以设置不同的评分总数。'
          >
            <CodeOperationContainer column>
              <Rate
                count={3}
                value={value}
                onChange={(value: number) => setValue(value)}
              />
              <Rate
                count={5}
                value={value}
                onChange={(value: number) => setValue(value)}
              />
              <Rate
                count={10}
                value={value}
                onChange={(value: number) => setValue(value)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同颜色 */}
          <ComponentSectionLayout
            title='不同颜色'
            id='rate-colors'
            description='通过 defaultColor 和 activeColor 属性可以设置不同的颜色。'
          >
            <CodeOperationContainer column>
              <Rate
                defaultColor="#d9d9d9"
                activeColor="#fadb14"
                value={value}
                onChange={(value: number) => setValue(value)}
              />
              <Rate
                defaultColor="#d9d9d9"
                activeColor="#52c41a"
                value={value}
                onChange={(value: number) => setValue(value)}
              />
              <Rate
                defaultColor="#d9d9d9"
                activeColor="#1890ff"
                value={value}
                onChange={(value: number) => setValue(value)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 只读模式 */}
          <ComponentSectionLayout
            title='只读模式'
            id='rate-readonly'
            description='通过不传入 onChange 事件可以实现只读模式。'
          >
            <CodeOperationContainer column>
              <Rate
                value={5}
                readonly
              />
              <Rate
                value={4}
                activeColor="var(--color-red-6)"
                readonly
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={rateProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
