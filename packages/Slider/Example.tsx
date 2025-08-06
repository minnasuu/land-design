import React, { useState } from 'react';
import Slider from '.';
import Title from '../Title';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';

// API 文档配置
const sliderProps = [
  { name: "value", type: "number | [number, number]", desc: "滑块值，单值或范围值" },
  { name: "range", type: "boolean", default: "false", desc: "是否为范围滑块" },
  { name: "min", type: "number", default: "0", desc: "最小值" },
  { name: "max", type: "number", default: "100", desc: "最大值" },
  { name: "step", type: "number", default: "1", desc: "步长" },
  { name: "height", type: "number", default: "12", desc: "滑块高度" },
  { name: "showTooltip", type: "boolean", default: "false", desc: "是否显示气泡提示" },
  { name: "tooltipPlacement", type: "'top' | 'bottom'", default: "top", desc: "气泡提示位置" },
  { name: "useDivider", type: "boolean", default: "false", desc: "是否使用分割线" },
  { name: "onChange", type: "(value: number | [number, number]) => void", desc: "值变化回调" },
  { name: "style", type: "CSSProperties", desc: "自定义样式" },
  { name: "className", type: "string", desc: "自定义类名" },
];

const SliderExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [singleValue, setSingleValue] = useState(50);
  const [rangeValue, setRangeValue] = useState<[number, number]>([20, 80]);
  const [priceRange, setPriceRange] = useState<[number, number]>([100, 500]);
  const [percentageRange, setPercentageRange] = useState<[number, number]>([
    30, 70,
  ]);

  // 价格格式化函数
  const priceFormatter = (value: number) => `¥${value}`;

  // 百分比格式化函数
  const percentageFormatter = (value: number) => `${value}%`;

  return (
    <ComponentContentLayout
      zh='滑块'
      en='Slider'
      desc='LandDesign 的滑块组件，用于数值选择。支持单值、范围值、气泡提示、分割线等功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className="flex flex-col gap-24">
          {/* 基础单值滑块 */}
          <ComponentSectionLayout
            title='基础单值滑块'
            id='slider-single'
            description='Slider 组件的基础用法，支持单值选择。'
          >
            <CodeOperationContainer>
              <div className="flex column gap-8 border p-32 radius-8">
                <Slider
                  range={false}
                  value={singleValue}
                  onChange={(val) => setSingleValue(val as number)}
                  min={0}
                  max={100}
                  step={5}
                  height={16}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 带气泡提示的单值滑块 */}
          <ComponentSectionLayout
            title='带气泡提示的单值滑块'
            id='slider-tooltip'
            description='通过 showTooltip 属性可以显示气泡提示。'
          >
            <CodeOperationContainer>
              <div className="flex column gap-8 border p-32 radius-8">
                <Slider
                  range={false}
                  value={singleValue}
                  onChange={(val) => setSingleValue(val as number)}
                  min={0}
                  max={100}
                  step={5}
                  height={16}
                  showTooltip={true}
                  tooltipPlacement="top"
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 基础范围滑块 */}
          <ComponentSectionLayout
            title='基础范围滑块'
            id='slider-range'
            description='通过 range 属性可以创建范围滑块。'
          >
            <CodeOperationContainer>
              <div className="flex column gap-8 p-32 border radius-8">
                <Slider
                  range={true}
                  value={rangeValue}
                  onChange={(val) => setRangeValue(val as [number, number])}
                  min={0}
                  max={100}
                  step={5}
                  height={16}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 带气泡提示的范围滑块 */}
          <ComponentSectionLayout
            title='带气泡提示的范围滑块'
            id='slider-range-tooltip'
            description='范围滑块也支持气泡提示功能。'
          >
            <CodeOperationContainer>
              <div className="flex column gap-8 p-32 border radius-8">
                <Slider
                  range={true}
                  value={rangeValue}
                  onChange={(val) => setRangeValue(val as [number, number])}
                  min={0}
                  max={100}
                  step={5}
                  height={16}
                  showTooltip={true}
                  tooltipPlacement="top"
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 带分割线的滑块 */}
          <ComponentSectionLayout
            title='带分割线的滑块'
            id='slider-divider'
            description='通过 useDivider 属性可以显示分割线。'
          >
            <CodeOperationContainer>
              <div className="flex column gap-8 p-32 border radius-8">
                <Slider
                  value={singleValue}
                  onChange={(val) => setSingleValue(val as number)}
                  min={0}
                  max={100}
                  step={10}
                  useDivider={true}
                  height={20}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={sliderProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
};

export default SliderExample;
