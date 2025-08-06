import React, { useState } from "react";
import styled from "styled-components";
import Title from "../Title";
import Grid from ".";
import { GridType } from "./props";
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';

// API 文档配置
const gridProps = [
  {
    name: "type",
    type: "'column-fit' | 'column-fill' | 'row-fit' | 'row-fill' | 'column-repeat' | 'row-repeat' | 'default'",
    desc: "常见的几种 grid 布局",
    default: "default",
  },
  {
    name: "autoSize",
    type: "number",
    desc: "自动填充模式下的最小宽度/高度",
    default: "100",
  },
  {
    name: "repeatNum",
    type: "number",
    desc: "按行或按列重复时的重复数量",
    default: "1",
  },
  { name: "gap", type: "number", desc: "行列间隙", default: "8" },
  { name: "columnGap", type: "number", desc: "列间隙" },
  { name: "rowGap", type: "number", desc: "行间隙" },
  { name: "children", type: "element", desc: "自定义元素" },
  { name: "style", type: "CSSProperties", desc: "自定义Grid布局样式" },
  { name: "className", type: "string", desc: "自定义Grid布局类名" },
];

export default function GridExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  return (
    <ComponentContentLayout
      zh='栅格'
      en='Grid'
      desc='LandDesign 的栅格组件，内置常见 Grid 布局方式。支持多种布局类型，包括列重复、自适应填充等。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className="flex flex-col gap-24">
          {/* 3 列宫格 */}
          <ComponentSectionLayout
            title='3 列宫格'
            id='grid-column-repeat'
            description='使用 column-repeat 类型创建固定列数的栅格布局。'
          >
            <CodeOperationContainer>
              <div className="flex justify-center gap-6 border border-gray-3 p-8" style={{ height: '200px' }}>
                <Grid className="w-full" type={GridType.ColumnRepeat} repeatNum={3}>
                  <StyledCardLight></StyledCardLight>
                  <StyledCardDark></StyledCardDark>
                  <StyledCardLight></StyledCardLight>
                  <StyledCardLight></StyledCardLight>
                </Grid>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自适应宫格 */}
          <ComponentSectionLayout
            title='自适应宫格（最小宽度 160px）'
            id='grid-column-fit'
            description='使用 column-fit 类型创建自适应宽度的栅格布局。'
          >
            <CodeOperationContainer>
              <div className="flex justify-center gap-6 border border-gray-3 p-8" style={{ height: '200px' }}>
                <Grid className="w-full" type={GridType.ColumnFit} autoSize={160}>
                  <StyledCardLight></StyledCardLight>
                  <StyledCardDark></StyledCardDark>
                  <StyledCardLight></StyledCardLight>
                  <StyledCardLight></StyledCardLight>
                </Grid>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自适应填充宫格 */}
          <ComponentSectionLayout
            title='自适应宫格（最小宽度 160px，自动填充）'
            id='grid-column-fill'
            description='使用 column-fill 类型创建自动填充的栅格布局。'
          >
            <CodeOperationContainer>
              <div className="flex justify-center gap-6 border border-gray-3 p-8" style={{ height: '200px' }}>
                <Grid className="w-full" type={GridType.ColumnFill} autoSize={160}>
                  <StyledCardLight></StyledCardLight>
                  <StyledCardDark></StyledCardDark>
                  <StyledCardLight></StyledCardLight>
                  <StyledCardLight></StyledCardLight>
                </Grid>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={gridProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}

const StyledCardLight = styled.div`
  background-color: var(--color-primary-1);
`;

const StyledCardDark = styled.div`
  background-color: var(--color-primary-2);
`;
