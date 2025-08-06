import React, { useState } from 'react';
import GridTemplate from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationBar from '../../example/components/CodeOperationBar';
import { reactTsxCodeStr, reactScssCodeStr } from './codes';

export default function GridTemplateExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  const gridData = [
    '1',
    '2-1', '2-2',
    '3-1', '3-2', '3-3', '3-4',
    '4', '4-h', '4-v',
    '5-h-1', '5-h-2', '5-h-3', '5-h-4', '5-h-5', '5-h-6', '5-h-7', '5-v-1', '5-v-2', '5-v-3', '5-v-4', '5-v-5', '5-v-6', '5-v-7',
    '6-h-1', '6-h-2', '6-v-1', '6-v-2', '6-1', '6-2', '6-3', '6-4',
    '7-h-1', '7-h-2', '7-h-3', '7-v-1', '7-v-2', '7-v-3',
    '8-h-1', '8-h-2', '8-h-3', '8-h-4', '8-h-5', '8-h-6', '8-v-1', '8-v-2', '8-v-3', '8-v-4', '8-v-5', '8-v-6',
    '9'
  ];

  const gridTemplateProps = [
    { name: 'type', type: 'string', desc: <>宫格数量：支持多种布局类型<br />格式规范：宫格数（-方向）-类型</>, default: '1' },
    { name: 'ratio', type: 'number', desc: '宫格比例：默认为方形，可自定义宽高比', default: '1' },
    { name: 'gap', type: 'number', desc: '宫格图间距', default: '2' },
    { name: 'gridStyle', type: 'CSSProperties', desc: '宫格样式' },
    { name: 'gridClassName', type: 'string', desc: '宫格类名' },
    { name: 'children', type: 'React.ReactNode', desc: '子元素内容' },
  ];

  return (
    <ComponentContentLayout
      zh='网格模板'
      en='Grid Template'
      desc='LandDesign 的网格模板组件，提供多种预设的网格布局，支持自定义比例和样式，适用于图片展示、内容布局等场景。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <CodeOperationBar
        reactTsxCodeStr={reactTsxCodeStr}
        reactScssCodeStr={reactScssCodeStr}
      />

      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <div className='flex flex-col gap-24'>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='basic-usage'
            description='GridTemplate 组件的基础用法，支持多种网格布局类型。'
          >
            <CodeOperationContainer style={{ flexWrap: 'wrap' }}>
              {gridData.map((i) => (
                <div
                  key={i}
                  className="flex flex-col gap-1 items-center text-xs text-gray-500"
                >
                  <GridTemplate
                    type={i}
                    ratio={9 / 16}
                    style={{ width: "100px" }}
                    gridStyle={{ background: "var(--color-bg-secondary)" }}
                  />
                  {i}
                </div>
              ))}
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同比例 */}
          <ComponentSectionLayout
            title='不同比例'
            id='different-ratios'
            description='可以设置不同的宽高比例来适应不同的内容需求。'
          >
            <CodeOperationContainer style={{ flexWrap: 'wrap' }}>
              {gridData.map((i) => (
                <div
                  key={i}
                  className="flex flex-col gap-1 items-center text-xs text-gray-500"
                >
                  <GridTemplate
                    type={i}
                    ratio={4 / 3}
                    style={{ width: "100px" }}
                    gridStyle={{ background: "var(--color-bg-secondary)" }}
                  />
                  {i}
                </div>
              ))}
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={gridTemplateProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
