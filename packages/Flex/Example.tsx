import React, { useState } from 'react'
import styled from "styled-components";
import Title from "../Title";
import Flex from ".";
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';

// API 文档配置
const flexProps = [
  { name: "direction", type: "'row' | 'column'", default: "row", desc: "Flex 方向" },
  { name: "justify", type: "'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'", desc: "主轴对齐方式" },
  { name: "align", type: "'start' | 'end' | 'center' | 'stretch' | 'baseline'", desc: "交叉轴对齐方式" },
  { name: "gap", type: "string | number", desc: "元素间距" },
  { name: "wrap", type: "'nowrap' | 'wrap' | 'wrap-reverse'", desc: "换行方式" },
  { name: "children", type: "ReactNode", desc: "子元素" },
  { name: "style", type: "CSSProperties", desc: "自定义样式" },
  { name: "className", type: "string", desc: "自定义类名" },
];

export default function FlexExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  return (
    <ComponentContentLayout
      zh='弹性布局'
      en='Flex'
      desc='LandDesign 的弹性布局组件，用于创建灵活的布局结构。支持方向、对齐方式、间距等配置。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className="flex column gap-24">
          {/* 方向 */}
          <ComponentSectionLayout
            title='方向'
            id='flex-direction'
            description='Flex 组件支持行和列两种方向。'
          >
            <CodeOperationContainer>
              <div className="flex justify-center gap-24 border p-32">
                <Flex>
                  <StyledCardLight></StyledCardLight>
                  <StyledCardDark></StyledCardDark>
                  <StyledCardLight></StyledCardLight>
                  <StyledCardDark></StyledCardDark>
                </Flex>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 对齐方式 */}
          <ComponentSectionLayout
            title='对齐方式'
            id='flex-justify'
            description='通过 justify 属性可以设置主轴对齐方式。'
          >
            <CodeOperationContainer>
              <div className="flex justify-center gap-24 border p-32">
                <Flex justify="center">
                  <StyledCardLight></StyledCardLight>
                  <StyledCardDark></StyledCardDark>
                  <StyledCardLight></StyledCardLight>
                  <StyledCardDark></StyledCardDark>
                </Flex>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 间隙 */}
          <ComponentSectionLayout
            title='间隙'
            id='flex-gap'
            description='通过 gap 属性可以设置元素之间的间距。'
          >
            <CodeOperationContainer>
              <div className="flex justify-center gap-24 border p-32">
                <Flex gap="12px">
                  <StyledCardLight></StyledCardLight>
                  <StyledCardDark></StyledCardDark>
                  <StyledCardLight></StyledCardLight>
                  <StyledCardDark></StyledCardDark>
                </Flex>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={flexProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}

const StyledCardLight = styled.div`
  width: 100px;
  height: 60px;
  background-color: var(--color-primary-1);
`;

const StyledCardDark = styled.div`
  width: 100px;
  height: 60px;
  background-color: var(--color-primary-2);
`;
