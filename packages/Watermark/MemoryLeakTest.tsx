import React, { useState, useEffect } from 'react';
import Watermark from './index';

/**
 * 内存泄露测试组件
 * 用于验证水印组件是否存在内存泄露问题
 */
const MemoryLeakTest: React.FC = () => {
  const [showWatermark, setShowWatermark] = useState(true);
  const [renderCount, setRenderCount] = useState(0);

  // 模拟频繁的组件挂载和卸载
  useEffect(() => {
    const interval = setInterval(() => {
      setShowWatermark(prev => !prev);
      setRenderCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // 模拟动态内容变化
  const [dynamicContent, setDynamicContent] = useState('测试水印');

  useEffect(() => {
    const interval = setInterval(() => {
      setDynamicContent(prev => `${prev} ${Date.now()}`);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>水印组件内存泄露测试</h2>
      <p>渲染次数: {renderCount}</p>
      <p>当前状态: {showWatermark ? '显示' : '隐藏'}</p>

      {showWatermark && (
        <div style={{ height: '300px', border: '1px solid #ccc', position: 'relative' }}>
          <Watermark
            content={dynamicContent}
            fontSize={14}
            fontColor="rgba(0, 0, 255, 0.2)"
            gap={[150, 150]}
          >
            <div style={{ padding: '20px' }}>
              <h3>测试内容</h3>
              <p>这是一个用于测试内存泄露的内容区域。</p>
              <p>水印组件会频繁地挂载和卸载，以检测是否存在内存泄露。</p>
            </div>
          </Watermark>
        </div>
      )}

      <div style={{ marginTop: '20px' }}>
        <h3>测试说明:</h3>
        <ul>
          <li>组件每秒会切换显示/隐藏状态</li>
          <li>水印内容每2秒会更新一次</li>
          <li>观察浏览器开发者工具的内存使用情况</li>
          <li>如果内存持续增长，说明存在内存泄露</li>
        </ul>
      </div>
    </div>
  );
};

export default MemoryLeakTest; 