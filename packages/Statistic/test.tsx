import React, { useState, useEffect } from 'react';
import Statistic from './index';

// 测试组件
const StatisticTest: React.FC = () => {
  const [testValue, setTestValue] = useState(1000);
  const [currentAnimation, setCurrentAnimation] = useState<'increase' | 'decrease' | 'random' | 'bounce' | 'fade' | 'slide' | 'scale' | 'flip' | 'none'>('none');

  // 模拟数值变化
  useEffect(() => {
    const interval = setInterval(() => {
      setTestValue(prev => prev + Math.floor(Math.random() * 100) - 50);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 循环切换动画类型
  useEffect(() => {
    const animations: Array<'increase' | 'decrease' | 'random' | 'bounce' | 'fade' | 'slide' | 'scale' | 'flip' | 'none'> = [
      'increase', 'decrease', 'random', 'bounce', 'fade', 'slide', 'scale', 'flip', 'none'
    ];
    
    const interval = setInterval(() => {
      setCurrentAnimation(prev => {
        const currentIndex = animations.indexOf(prev);
        const nextIndex = (currentIndex + 1) % animations.length;
        return animations[nextIndex];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Statistic 组件测试</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>当前测试值: {testValue}</h3>
        <h3>当前动画: {currentAnimation}</h3>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        
        {/* 基础测试 */}
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
          <h4>基础用法</h4>
          <Statistic value={testValue} unit="元" />
        </div>

        {/* 精度测试 */}
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
          <h4>精度控制</h4>
          <Statistic value={testValue / 100} unit="万" precision={2} />
        </div>

        {/* 增长动画 */}
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
          <h4>增长动画</h4>
          <Statistic 
            value={testValue} 
            unit="元" 
            animation="increase"
            animationConfig={{ duration: 1500, easing: 'easeOut' }}
          />
        </div>

        {/* 减少动画 */}
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
          <h4>减少动画</h4>
          <Statistic 
            value={testValue} 
            unit="元" 
            animation="decrease"
            animationConfig={{ duration: 1500, easing: 'easeOut' }}
          />
        </div>

        {/* 随机动画 */}
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
          <h4>随机滚动动画</h4>
          <Statistic 
            value={testValue} 
            unit="元" 
            animation="random"
          />
        </div>

        {/* 弹跳动画 */}
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
          <h4>弹跳动画</h4>
          <Statistic 
            value={testValue} 
            unit="元" 
            animation="bounce"
            animationConfig={{ duration: 1000, easing: 'bounce' }}
          />
        </div>

        {/* 淡入动画 */}
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
          <h4>淡入动画</h4>
          <Statistic 
            value={testValue} 
            unit="元" 
            animation="fade"
            animationConfig={{ duration: 800, easing: 'easeOut' }}
          />
        </div>

        {/* 滑动动画 */}
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
          <h4>滑动动画</h4>
          <Statistic 
            value={testValue} 
            unit="元" 
            animation="slide"
            animationConfig={{ duration: 600, easing: 'easeOut' }}
          />
        </div>

        {/* 缩放动画 */}
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
          <h4>缩放动画</h4>
          <Statistic 
            value={testValue} 
            unit="元" 
            animation="scale"
            animationConfig={{ duration: 700, easing: 'easeOut' }}
          />
        </div>

        {/* 翻转动画 */}
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
          <h4>翻转动画</h4>
          <Statistic 
            value={testValue} 
            unit="元" 
            animation="flip"
            animationConfig={{ duration: 800, easing: 'easeOut' }}
          />
        </div>

        {/* 循环动画 */}
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
          <h4>循环动画</h4>
          <Statistic 
            value={testValue} 
            unit="元" 
            animation="bounce"
            animationConfig={{ 
              duration: 1000, 
              easing: 'bounce',
              loop: true,
              loopInterval: 3000
            }}
          />
        </div>

        {/* 趋势图标 */}
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
          <h4>趋势图标</h4>
          <Statistic 
            value={testValue} 
            unit="元" 
            trendIcon="up"
            animation="increase"
          />
        </div>

        {/* 前缀后缀 */}
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
          <h4>前缀后缀</h4>
          <Statistic 
            value={testValue} 
            unit="元" 
            prefix="总收入：" 
            suffix="（本月）"
            animation="fade"
          />
        </div>

        {/* 自定义样式 */}
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
          <h4>自定义样式</h4>
          <Statistic 
            value={testValue} 
            unit="元" 
            style={{
              color: '#52c41a',
              fontSize: '24px',
              fontWeight: 'bold'
            }}
            animation="scale"
          />
        </div>

        {/* 复杂组合 */}
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
          <h4>复杂组合</h4>
          <Statistic 
            value={testValue / 100} 
            unit="万" 
            precision={2}
            prefix="总资产：" 
            suffix="（含税）"
            trendIcon="up"
            animation={currentAnimation}
            animationConfig={{ 
              duration: 1500, 
              easing: 'easeOut',
              delay: 200 
            }}
            style={{
              color: '#1890ff',
              fontSize: '20px'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StatisticTest; 