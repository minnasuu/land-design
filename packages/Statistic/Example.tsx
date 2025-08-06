import React, { useState } from 'react';
import Statistic from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function StatisticExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  const statisticProps = [
    { name: 'value', type: 'number', desc: '数值，要显示的统计数值' },
    { name: 'unit', type: 'string', desc: '单位，显示在数值后面的单位文字' },
    { name: 'precision', type: 'number', desc: '精度，数值的小数位数', default: '0' },
    { name: 'animation', type: 'StatisticAnimation (increase | decrease | random | bounce | fade | slide | scale | flip | none)', desc: '动画类型', default: 'none' },
    { name: 'animationConfig', type: 'StatisticAnimationConfig', desc: '动画配置，可以自定义持续时间、缓动函数、延迟等参数' },
    { name: 'trendIcon', type: 'StatisticTrendIcon (up | down | default)', desc: '趋势图标', default: 'default' },
    { name: 'prefix', type: 'ReactNode', desc: '前缀，显示在数值前面的内容' },
    { name: 'suffix', type: 'ReactNode', desc: '后缀，显示在数值后面的内容' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式，可以传入CSS样式对象来自定义统计数值外观' },
    { name: 'className', type: 'string', desc: '自定义类名，可以传入额外的CSS类名' },
  ];

  return (
    <ComponentContentLayout
      zh='统计数值'
      en='Statistic'
      desc='LandDesign 的统计数值组件，用于展示重要的数据指标。支持多种动画效果、趋势图标、精度控制和自定义样式。'
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
            description='Statistic 组件的基础用法，展示数值、单位和精度控制。'
          >
            <CodeOperationContainer style={{gap:'32px'}}>
                <Statistic value={10} unit="亿+" />
                <Statistic value={1234.56} unit="元" precision={2} />
                <Statistic value={99.9} unit="%" precision={1} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 数字动画效果 */}
          <ComponentSectionLayout
            title='数字动画效果'
            id='number-animation'
            description='支持增长和减少两种数字变化动画。'
          >
            <CodeOperationContainer style={{gap:'32px'}}>
                <Statistic value={1000} unit="万" animation='increase' />
                <Statistic value={500} unit="万" animation='decrease' />
                <Statistic 
                  value={2000} 
                  unit="万" 
                  animation='increase' 
                  animationConfig={{ duration: 2000, easing: 'bounce' }}
                />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 随机滚动动画 */}
          <ComponentSectionLayout
            title='随机滚动动画'
            id='random-animation'
            description='数字滚动动画，模拟数字变化的效果。'
          >
            <CodeOperationContainer style={{gap:'32px'}}>
                <Statistic value={1234} unit="元" animation='random' />
                <Statistic value={56789} unit="次" animation='random' />
                <Statistic value={999} unit="%" animation='random' />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 视觉效果动画 */}
          <ComponentSectionLayout
            title='视觉效果动画'
            id='visual-animation'
            description='支持弹跳、淡入、滑动、缩放、翻转等多种视觉效果动画。'
          >
            <CodeOperationContainer style={{gap:'32px'}}>
                <Statistic value={100} unit="分" animation='bounce' />
                <Statistic value={200} unit="分" animation='fade' />
                <Statistic value={300} unit="分" animation='slide' />
                <Statistic value={400} unit="分" animation='scale' />
                <Statistic value={500} unit="分" animation='flip' />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 动画配置 */}
          <ComponentSectionLayout
            title='动画配置'
            id='animation-config'
            description='可以自定义动画的持续时间、缓动函数、延迟等参数。'
          >
            <CodeOperationContainer style={{gap:'32px'}}>
                <Statistic 
                  value={1000} 
                  unit="元" 
                  animation='bounce' 
                  animationConfig={{ 
                    duration: 1500, 
                    easing: 'elastic',
                    delay: 200 
                  }}
                />
                <Statistic 
                  value={2000} 
                  unit="元" 
                  animation='scale' 
                  animationConfig={{ 
                    duration: 800, 
                    easing: 'easeInOut',
                    loop: true,
                    loopInterval: 3000
                  }}
                />
                <Statistic 
                  value={3000} 
                  unit="元" 
                  animation='fade' 
                  animationConfig={{ 
                    duration: 2000, 
                    easing: 'linear',
                    delay: 500 
                  }}
                />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 趋势图标 */}
          <ComponentSectionLayout
            title='趋势图标'
            id='statistic-trend'
            description='支持上升、下降、默认三种趋势图标。'
          >
            <CodeOperationContainer style={{gap:'32px'}}>
                <Statistic value={10} unit="亿+" trendIcon="up" />
                <Statistic value={10} unit="亿+" trendIcon="down" />
                <Statistic value={10} unit="亿+" trendIcon="default" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 趋势动画组合 */}
          <ComponentSectionLayout
            title='趋势动画组合'
            id='statistic-trend-animation'
            description='结合趋势图标和动画效果，增强视觉表现力。'
          >
                <CodeOperationContainer style={{gap:'32px'}}>
                <Statistic 
                  value={1500} 
                  unit="万" 
                  animation='increase' 
                  trendIcon="up" 
                  animationConfig={{ duration: 1500, easing: 'easeOut' }}
                />
                <Statistic 
                  value={800} 
                  unit="万" 
                  animation='decrease' 
                  trendIcon="down" 
                  animationConfig={{ duration: 1500, easing: 'easeOut' }}
                />
                <Statistic 
                  value={2500} 
                  unit="万" 
                  animation='bounce' 
                  trendIcon="up" 
                  animationConfig={{ duration: 1000, easing: 'bounce' }}
                />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 前缀后缀 */}
          <ComponentSectionLayout
            title='前缀后缀'
            id='prefix-suffix'
            description='支持自定义前缀和后缀内容。'
          >
            <CodeOperationContainer style={{gap:'32px'}}>
                <Statistic 
                  value={1234} 
                  unit="元" 
                  prefix="¥" 
                  animation='fade'
                />
                <Statistic 
                  value={99.9} 
                  unit="%" 
                  suffix="完成率" 
                  animation='scale'
                />
                <Statistic 
                  value={1000} 
                  unit="万" 
                  prefix="总资产：" 
                  suffix="（含税）" 
                  animation='slide'
                />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义样式 */}
          <ComponentSectionLayout
            title='自定义样式'
            id='statistic-custom'
            description='可以通过 style 和 className 属性自定义统计数值的外观。'
          >
            <CodeOperationContainer style={{gap:'32px'}}>
                <Statistic 
                  value={1234} 
                  unit="元" 
                  style={{
                    color: '#52c41a',
                    fontSize: '24px',
                    fontWeight: 'bold'
                  }}
                  animation='bounce'
                />
                <Statistic 
                  value={1234} 
                  unit="元" 
                  style={{
                    color: '#f5222d',
                    fontSize: '20px',
                    fontStyle: 'italic'
                  }}
                  animation='fade'
                />
                <Statistic 
                  value={1234} 
                  unit="元" 
                  style={{
                    color: '#1890ff',
                    fontSize: '28px',
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                  animation='scale'
                />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 复杂组合示例 */}
          <ComponentSectionLayout
            title='复杂组合示例'
            id='complex-example'
            description='展示各种功能组合使用的效果。'
          >
            <CodeOperationContainer style={{gap:'32px'}}>
                <Statistic 
                  value={12345.67} 
                  unit="元" 
                  precision={2}
                  prefix="总收入：" 
                  suffix="（本月）"
                  trendIcon="up"
                  animation='increase'
                  animationConfig={{ 
                    duration: 2000, 
                    easing: 'easeOut',
                    delay: 300 
                  }}
                  style={{
                    color: '#52c41a',
                    fontSize: '22px'
                  }}
                />
                <Statistic 
                  value={98.5} 
                  unit="%" 
                  precision={1}
                  prefix="满意度：" 
                  suffix="（优秀）"
                  trendIcon="up"
                  animation='bounce'
                  animationConfig={{ 
                    duration: 1200, 
                    easing: 'bounce',
                    loop: true,
                    loopInterval: 5000
                  }}
                  style={{
                    color: '#1890ff',
                    fontSize: '20px'
                  }}
                />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={statisticProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
