import React, { useState } from 'react';
import Slider from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function SliderExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [value1, setValue1] = useState(30);
  const [value2, setValue2] = useState(50);
  const [value3, setValue3] = useState(40);
  const [rangeValue, setRangeValue] = useState<[number, number]>([20, 60]);

  const SliderProps = [
    { name: 'className', type: 'string', desc: '自定义类名，可以传入额外的CSS类名' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式，可以传入CSS样式对象来自定义组件外观' },
    { name: 'value', type: 'number | [number, number]', desc: '输入值，支持单个值或范围值 [min, max]' },
    { name: 'min', type: 'number', desc: '最小值，默认为 0' },
    { name: 'max', type: 'number', desc: '最大值，默认为 100' },
    { name: 'step', type: 'number', desc: '调节步数，滑块移动的步长，默认为 1' },
    { name: 'range', type: 'boolean', desc: '是否为范围选择器，设置为true时支持选择范围值' },
    { name: 'useDivider', type: 'boolean', desc: '是否使用分割线，设置为true时显示分割线' },
    { name: 'prefix', type: 'ReactNode', desc: '前缀，设置滑块的前缀' },
    { name: 'suffix', type: 'ReactNode', desc: '后缀，设置滑块的后缀' },
    { name: 'showTooltip', type: 'boolean', desc: '是否显示提示，设置为true时显示提示' },
    { name: 'tooltipPlacement', type: "'top' | 'bottom' | 'left' | 'right'", desc: '提示位置，设置提示的位置，默认为 top' },
    { name: 'tooltipFormatter', type: '(value: number) => string', desc: '提示格式化，设置提示的格式化函数' },
    { name: 'height', type: 'number', desc: '高度，设置滑块轨道的高度，默认为 4' },
    { name: 'thumbSize', type: 'number', desc: '滑块大小，设置滑块的大小，默认为 16' },
    { name: 'defaultBg', type: 'string', desc: '默认背景色，设置滑块的默认背景色' },
    { name: 'activeBg', type: 'string', desc: '激活背景色，设置滑块的激活背景色' },
    { name: 'thumbStyle', type: 'CSSProperties', desc: '滑块样式，设置滑块的自定义样式' },
    { name: 'thumbClassName', type: 'string', desc: '滑块类名，设置滑块的自定义类名' },
    { name: 'onChange', type: '(value: number | [number, number]) => void', desc: '值变化回调，当滑块值变化时触发' },
    { name: 'onAfterChange', type: '(value: number | [number, number]) => void', desc: '拖拽结束回调，当拖拽结束时触发' },
    { name: 'disabled', type: 'boolean', desc: '是否禁用，设置为true时禁用滑块' },
  ];

  return (
    <ComponentContentLayout
      zh='Slider'
      en='Slider'
      desc='LandDesign 的 Slider 滑块组件，用于在一定范围内进行数值选择。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <div className='flex flex-col gap-24'>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='basic-usage'
            description='最简单的滑块使用方式。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <Slider value={value1} max={100} step={1} style={{ width: "300px" }} />
                <div className="text-sm text-gray-600">当前值: {value1}</div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 步长 */}
          <ComponentSectionLayout
            title='步长'
            id='step'
            description='设置滑块的步长。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <Slider value={60} max={100} step={10} style={{ width: "300px" }} />
                <div className="text-sm text-gray-600">步长: 10</div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 显示分隔符 */}
          <ComponentSectionLayout
            title='显示分隔符'
            id='divider'
            description='使用 useDivider 属性显示分隔符标记。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <Slider value={50} max={100} step={10} useDivider style={{ width: "300px" }} />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 显示 Tooltip */}
          <ComponentSectionLayout
            title='显示 Tooltip'
            id='tooltip'
            description='鼠标悬停或拖拽时显示当前值。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16" style={{ paddingTop: '40px' }}>
                <Slider 
                  value={value2} 
                  max={100} 
                  step={1} 
                  showTooltip
                  tooltipPlacement="top"
                  style={{ width: "300px" }} 
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义 Tooltip 格式 */}
          <ComponentSectionLayout
            title='自定义 Tooltip 格式'
            id='tooltip-formatter'
            description='使用 tooltipFormatter 自定义提示文本格式。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16" style={{ paddingTop: '40px' }}>
                <Slider 
                  value={75} 
                  max={100} 
                  step={1} 
                  showTooltip
                  tooltipFormatter={(val) => `${val}%`}
                  style={{ width: "300px" }} 
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 范围选择 */}
          <ComponentSectionLayout
            title='范围选择'
            id='range'
            description='使用 range 属性支持选择范围值。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16" style={{ paddingTop: '40px' }}>
                <Slider 
                  value={rangeValue}
                  max={100} 
                  step={1} 
                  range
                  showTooltip
                  style={{ width: "300px" }} 
                />
                <div className="text-sm text-gray-600">范围: [{rangeValue[0]}, {rangeValue[1]}]</div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 前缀后缀 */}
          <ComponentSectionLayout
            title='前缀和后缀'
            id='prefix-suffix'
            description='为滑块添加前缀和后缀内容。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <Slider 
                  value={50} 
                  max={100} 
                  step={1}
                  prefix="0"
                  suffix="100"
                  style={{ width: "300px" }} 
                />
                <Slider 
                  value={30} 
                  max={100} 
                  step={1}
                  prefix="🔈"
                  suffix="🔊"
                  style={{ width: "300px" }} 
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义样式 */}
          <ComponentSectionLayout
            title='自定义样式'
            id='custom-style'
            description='自定义滑块的颜色和大小。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-24">
                <Slider 
                  value={60} 
                  max={100} 
                  step={1}
                  height={8}
                  thumbSize={20}
                  defaultBg="var(--color-gray-2)"
                  activeBg="var(--color-green-6)"
                  thumbStyle={{ borderColor: 'var(--color-green-6)' }}
                  style={{ width: "300px" }} 
                />
                <Slider 
                  value={40} 
                  max={100} 
                  step={1}
                  height={6}
                  thumbSize={24}
                  defaultBg="var(--color-orange-1)"
                  activeBg="var(--color-orange-6)"
                  thumbStyle={{ 
                    borderColor: 'var(--color-orange-6)',
                    background: 'linear-gradient(135deg, var(--color-orange-5) 0%, var(--color-orange-6) 100%)'
                  }}
                  style={{ width: "300px" }} 
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同尺寸 */}
          <ComponentSectionLayout
            title='不同尺寸'
            id='sizes'
            description='提供不同尺寸的滑块。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-20">
                <div>
                  <div className="text-xs text-gray-500 mb-2">小尺寸</div>
                  <Slider value={50} max={100} height={2} thumbSize={12} style={{ width: "300px" }} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-2">默认尺寸</div>
                  <Slider value={50} max={100} height={4} thumbSize={16} style={{ width: "300px" }} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-2">大尺寸</div>
                  <Slider value={50} max={100} height={6} thumbSize={20} style={{ width: "300px" }} />
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 受控组件 */}
          <ComponentSectionLayout
            title='受控组件'
            id='controlled'
            description='通过 onChange 回调控制滑块的值。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <Slider 
                  value={value3} 
                  max={100} 
                  step={1}
                  onChange={(val) => setValue3(val as number)}
                  onAfterChange={(val) => console.log('拖拽结束:', val)}
                  style={{ width: "300px" }} 
                />
                <div className="text-sm text-gray-600">当前值: {value3}</div>
                <div className="flex gap-8">
                  <button 
                    onClick={() => setValue3(0)}
                    className="px-12 py-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    重置
                  </button>
                  <button 
                    onClick={() => setValue3(Math.min(100, value3 + 10))}
                    className="px-12 py-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    +10
                  </button>
                  <button 
                    onClick={() => setValue3(Math.max(0, value3 - 10))}
                    className="px-12 py-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    -10
                  </button>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用状态 */}
          <ComponentSectionLayout
            title='禁用状态'
            id='disabled'
            description='通过 disabled 属性禁用滑块。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <Slider value={50} max={100} disabled style={{ width: "300px" }} />
                <Slider value={[30, 70]} max={100} range disabled style={{ width: "300px" }} />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={SliderProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
