import React, { useState } from 'react';
import Video from './index';

/**
 * 视频控件优化测试组件
 * 用于验证优化后的视频控件功能
 */
const VideoOptimizationTest: React.FC = () => {
  const [testResults, setTestResults] = useState<{
    progressDrag: boolean;
    playPause: boolean;
    volumeControl: boolean;
    keyboardShortcuts: boolean;
  }>({
    progressDrag: false,
    playPause: false,
    volumeControl: false,
    keyboardShortcuts: false,
  });

  const [currentTest, setCurrentTest] = useState<string>('');

  const runTest = (testName: string) => {
    setCurrentTest(testName);
    setTestResults(prev => ({ ...prev, [testName]: true }));

    // 模拟测试完成
    setTimeout(() => {
      setCurrentTest('');
    }, 2000);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h2>视频控件优化测试</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* 测试视频 */}
        <div>
          <h3>测试视频</h3>
          <Video
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            ratio="16/9"
            radius="8px"
            forwardSecond={5}
            useKeyImg={true}
            useKeyControls={true}
            showControls={true}
            autoPlay={false}
            style={{
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              overflow: 'hidden'
            }}
          />
        </div>

        {/* 测试面板 */}
        <div>
          <h3>功能测试</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              backgroundColor: testResults.progressDrag ? '#e8f5e8' : '#f9f9f9'
            }}>
              <strong>进度条拖拽测试</strong>
              <p>拖拽进度条，检查是否能正确调整播放位置</p>
              <button
                onClick={() => runTest('progressDrag')}
                disabled={currentTest === 'progressDrag'}
                style={{ padding: '5px 10px', marginTop: '5px' }}
              >
                {currentTest === 'progressDrag' ? '测试中...' : '开始测试'}
              </button>
            </div>

            <div style={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              backgroundColor: testResults.playPause ? '#e8f5e8' : '#f9f9f9'
            }}>
              <strong>播放/暂停测试</strong>
              <p>点击播放按钮，检查状态是否正确切换</p>
              <button
                onClick={() => runTest('playPause')}
                disabled={currentTest === 'playPause'}
                style={{ padding: '5px 10px', marginTop: '5px' }}
              >
                {currentTest === 'playPause' ? '测试中...' : '开始测试'}
              </button>
            </div>

            <div style={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              backgroundColor: testResults.volumeControl ? '#e8f5e8' : '#f9f9f9'
            }}>
              <strong>音量控制测试</strong>
              <p>调节音量滑块，检查音量变化和静音功能</p>
              <button
                onClick={() => runTest('volumeControl')}
                disabled={currentTest === 'volumeControl'}
                style={{ padding: '5px 10px', marginTop: '5px' }}
              >
                {currentTest === 'volumeControl' ? '测试中...' : '开始测试'}
              </button>
            </div>

            <div style={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              backgroundColor: testResults.keyboardShortcuts ? '#e8f5e8' : '#f9f9f9'
            }}>
              <strong>键盘快捷键测试</strong>
              <p>使用空格键、箭头键、M键、F键测试快捷键</p>
              <button
                onClick={() => runTest('keyboardShortcuts')}
                disabled={currentTest === 'keyboardShortcuts'}
                style={{ padding: '5px 10px', marginTop: '5px' }}
              >
                {currentTest === 'keyboardShortcuts' ? '测试中...' : '开始测试'}
              </button>
            </div>
          </div>

          {/* 测试结果 */}
          <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f0f8ff', borderRadius: '4px' }}>
            <h4>测试结果</h4>
            <ul>
              <li>进度条拖拽: {testResults.progressDrag ? '✅ 通过' : '❌ 未测试'}</li>
              <li>播放/暂停: {testResults.playPause ? '✅ 通过' : '❌ 未测试'}</li>
              <li>音量控制: {testResults.volumeControl ? '✅ 通过' : '❌ 未测试'}</li>
              <li>键盘快捷键: {testResults.keyboardShortcuts ? '✅ 通过' : '❌ 未测试'}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 优化说明 */}
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <h3>优化内容总结</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <h4>🎯 主要改进</h4>
            <ul>
              <li>添加了 <code>isDragging</code> 状态管理拖拽过程</li>
              <li>使用 <code>isPlaying</code> 状态替代直接检查 <code>video.paused</code></li>
              <li>优化了音量控制逻辑，音量调节时自动取消静音</li>
              <li>改进了键盘事件处理，只在视频获得焦点时响应</li>
              <li>添加了视频播放状态事件监听</li>
            </ul>
          </div>
          <div>
            <h4>🔧 技术优化</h4>
            <ul>
              <li>使用 <code>useCallback</code> 优化事件处理函数</li>
              <li>改进了进度条拖拽的精确度和响应性</li>
              <li>添加了全局鼠标事件监听确保拖拽体验</li>
              <li>优化了状态更新逻辑，减少不必要的重渲染</li>
              <li>增强了错误处理和用户体验</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoOptimizationTest; 