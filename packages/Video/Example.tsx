import React, { useState } from 'react';
import Video from './index';
import Select from '../Select';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

const VideoExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [currentVideo, setCurrentVideo] = useState<string>('Big Buck Bunny');

  const videoOptions = [
    { key: 'Big Buck Bunny', label: 'Big Buck Bunny', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
    { key: 'Elephant Dream', label: 'Elephant Dream', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
    { key: 'Sintel', label: 'Sintel', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4' },
  ];

  const currentIndex = videoOptions.findIndex((item) => item.key === currentVideo);

  // 属性表格数据
  const videoProps = [
    { name: 'src', type: 'string', desc: '视频地址' },
    { name: 'poster', type: 'string', desc: '视频封面图' },
    { name: 'width', type: 'number | string', desc: '视频宽度' },
    { name: 'height', type: 'number | string', desc: '视频高度' },
    { name: 'ratio', type: 'number | string', desc: '宽高比 (如 16/9)' },
    { name: 'radius', type: 'number | string', desc: '圆角', default: '0' },
    { name: 'fit', type: "'cover' | 'contain' | 'fill' | 'none' | 'scale-down'", desc: '填充模式', default: "'contain'" },
    { name: 'autoPlay', type: 'boolean', desc: '是否自动播放', default: 'false' },
    { name: 'loop', type: 'boolean', desc: '是否循环播放', default: 'false' },
    { name: 'muted', type: 'boolean', desc: '是否静音', default: 'true' },
    { name: 'volume', type: 'number', desc: '初始音量 (0-100)', default: '100' },
    { name: 'playbackRate', type: 'number', desc: '初始播放速率', default: '1' },
    { name: 'preload', type: "'auto' | 'metadata' | 'none'", desc: '预加载策略', default: "'metadata'" },
    { name: 'rateOptions', type: 'VideoRateOption[]', desc: '可选播放速率列表' },
    { name: 'controls', type: 'boolean', desc: '是否显示控制栏', default: 'true' },
    { name: 'showPlayButton', type: 'boolean', desc: '是否显示播放/暂停按钮', default: 'true' },
    { name: 'showProgress', type: 'boolean', desc: '是否显示进度条', default: 'true' },
    { name: 'showTime', type: 'boolean', desc: '是否显示时间', default: 'true' },
    { name: 'showVolume', type: 'boolean', desc: '是否显示音量控制', default: 'true' },
    { name: 'showRate', type: 'boolean', desc: '是否显示倍速设置', default: 'true' },
    { name: 'showPip', type: 'boolean', desc: '是否显示画中画按钮', default: 'true' },
    { name: 'showWebFullscreen', type: 'boolean', desc: '是否显示网页全屏按钮', default: 'true' },
    { name: 'showFullscreen', type: 'boolean', desc: '是否显示全屏按钮', default: 'true' },
    { name: 'showSettings', type: 'boolean', desc: '是否显示设置按钮', default: 'true' },
    { name: 'previewEnabled', type: 'boolean', desc: '是否启用关键帧预览', default: 'false' },
    { name: 'previewWidth', type: 'number', desc: '预览图宽度', default: '160' },
    { name: 'keyboard', type: 'boolean', desc: '是否启用键盘快捷键', default: 'true' },
    { name: 'seekStep', type: 'number', desc: '快进/快退秒数', default: '5' },
    { name: 'volumeStep', type: 'number', desc: '音量调节步长', default: '10' },
    { name: 'showPrev', type: 'boolean', desc: '是否显示上一集按钮', default: 'false' },
    { name: 'showNext', type: 'boolean', desc: '是否显示下一集按钮', default: 'false' },
    { name: 'prevDisabled', type: 'boolean', desc: '上一集是否禁用', default: 'false' },
    { name: 'nextDisabled', type: 'boolean', desc: '下一集是否禁用', default: 'false' },
    { name: 'onPlay', type: '(data: VideoEventData) => void', desc: '播放事件' },
    { name: 'onPause', type: '(data: VideoEventData) => void', desc: '暂停事件' },
    { name: 'onEnded', type: '(data: VideoEventData) => void', desc: '播放结束事件' },
    { name: 'onTimeUpdate', type: '(data: VideoEventData) => void', desc: '时间更新事件' },
    { name: 'onVolumeChange', type: '(volume: number, muted: boolean) => void', desc: '音量变化事件' },
    { name: 'onRateChange', type: '(rate: number) => void', desc: '播放速率变化事件' },
    { name: 'onSeek', type: '(time: number) => void', desc: '进度跳转事件' },
    { name: 'onPrevClick', type: '() => void', desc: '上一集点击事件' },
    { name: 'onNextClick', type: '() => void', desc: '下一集点击事件' },
    { name: 'onFullscreenEnter', type: '() => void', desc: '进入全屏事件' },
    { name: 'onFullscreenExit', type: '() => void', desc: '退出全屏事件' },
    { name: 'onWebFullscreenChange', type: '(isWebFullscreen: boolean) => void', desc: '网页全屏变化事件' },
    { name: 'onPipEnter', type: '() => void', desc: '画中画进入事件' },
    { name: 'onPipExit', type: '() => void', desc: '画中画退出事件' },
    { name: 'videoClassName', type: 'string', desc: '视频元素自定义类名' },
    { name: 'videoStyle', type: 'CSSProperties', desc: '视频元素自定义样式' },
    { name: 'controlsClassName', type: 'string', desc: '控制栏自定义类名' },
    { name: 'controlsStyle', type: 'CSSProperties', desc: '控制栏自定义样式' },
    { name: 'progressColor', type: 'string', desc: '进度条激活颜色', default: 'var(--color-primary-6)' },
  ];

  return (
    <ComponentContentLayout
      zh="视频"
      en="Video"
      desc="功能完整的视频播放器组件，支持播放控制、键盘快捷键、剧集切换、关键帧预览、画中画、全屏等功能。"
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title="基础用法"
            id="video-basic"
            description="Video 组件的基础用法，支持基本的视频播放功能。"
          >
            <div className="flex flex-col gap-8 mb-24">
              <label className="fs-14">选择视频：</label>
              <Select
                selected={currentVideo}
                onChange={(item) => setCurrentVideo(item.key)}
                data={videoOptions}
                style={{ '--land-select-width': '200px' } as React.CSSProperties}
              />
              <ul className="color-text-secondary flex flex-col gap-8 fs-14">
                <li><strong>空格键</strong> - 播放/暂停</li>
                <li><strong>左右箭头</strong> - 快退/快进</li>
                <li><strong>上下箭头</strong> - 调节音量</li>
                <li><strong>M 键</strong> - 静音/取消静音</li>
                <li><strong>F 键</strong> - 全屏模式</li>
              </ul>
            </div>
            <CodeOperationContainer>
              <Video
                src={videoOptions.find((item) => item.key === currentVideo)?.url}
                radius={8}
                keyboard
                controls
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 剧集导航 */}
          <ComponentSectionLayout
            title="剧集导航"
            id="video-episode"
            description="通过 showPrev 和 showNext 属性可以启用剧集切换功能。"
          >
            <CodeOperationContainer>
              <Video
                src={videoOptions.find((item) => item.key === currentVideo)?.url}
                radius={8}
                keyboard
                controls
                showPrev
                showNext
                prevDisabled={currentIndex === 0}
                nextDisabled={currentIndex === videoOptions.length - 1}
                onPrevClick={() => {
                  if (currentIndex > 0) {
                    setCurrentVideo(videoOptions[currentIndex - 1].key);
                  }
                }}
                onNextClick={() => {
                  if (currentIndex < videoOptions.length - 1) {
                    setCurrentVideo(videoOptions[currentIndex + 1].key);
                  }
                }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 关键帧预览 */}
          <ComponentSectionLayout
            title="关键帧预览"
            id="video-preview"
            description="通过 previewEnabled 属性可以启用进度条关键帧预览功能。"
          >
            <CodeOperationContainer>
              <Video
                src={videoOptions.find((item) => item.key === currentVideo)?.url}
                radius={8}
                keyboard
                controls
                previewEnabled
                previewWidth={160}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 响应式控件 */}
          <ComponentSectionLayout
            title="响应式控件"
            id="video-responsive"
            description="当播放器宽度较小时，右侧控件会自动收起到下拉菜单中。"
          >
            <div className="color-text-secondary fs-14 mb-8">
              当播放器宽度较小时，右侧控件会自动收起到下拉菜单中，包含倍速、循环设置和全屏功能。
            </div>
            <CodeOperationContainer>
              <div style={{ maxWidth: 400 }}>
                <Video
                  src={videoOptions.find((item) => item.key === currentVideo)?.url}
                  radius={8}
                  keyboard
                  controls
                  showPrev
                  showNext
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同比例 */}
          <ComponentSectionLayout
            title="不同比例"
            id="video-ratio"
            description="通过 ratio 属性可以设置不同的视频宽高比。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-24">
                <div>
                  <div className="fs-12 color-gray-4 mb-8">16:9 比例</div>
                  <Video
                    src={videoOptions.find((item) => item.key === currentVideo)?.url}
                    ratio={16 / 9}
                    radius={8}
                    controls
                  />
                </div>
                <div>
                  <div className="fs-12 color-gray-4 mb-8">4:3 比例</div>
                  <Video
                    src={videoOptions.find((item) => item.key === currentVideo)?.url}
                    ratio={4 / 3}
                    radius={8}
                    controls
                  />
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义播放速率 */}
          <ComponentSectionLayout
            title="自定义播放速率"
            id="video-rate"
            description="通过 rateOptions 属性可以自定义可选的播放速率。"
          >
            <CodeOperationContainer>
              <Video
                src={videoOptions.find((item) => item.key === currentVideo)?.url}
                radius={8}
                controls
                rateOptions={[
                  { label: '0.5x', value: 0.5 },
                  { label: '1x', value: 1 },
                  { label: '1.5x', value: 1.5 },
                  { label: '2x', value: 2 },
                  { label: '3x', value: 3 },
                ]}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 事件回调 */}
          <ComponentSectionLayout
            title="事件回调"
            id="video-events"
            description="Video 组件支持丰富的事件回调，可以监听播放状态变化。"
          >
            <CodeOperationContainer>
              <Video
                src={videoOptions.find((item) => item.key === currentVideo)?.url}
                radius={8}
                controls
                onPlay={(data) => console.log('开始播放', data)}
                onPause={(data) => console.log('暂停播放', data)}
                onEnded={(data) => console.log('播放结束', data)}
                onTimeUpdate={(data) => console.log('时间更新', data.currentTime)}
                onVolumeChange={(volume, muted) => console.log('音量变化', volume, muted)}
                onRateChange={(rate) => console.log('倍速变化', rate)}
                onSeek={(time) => console.log('跳转到', time)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 最小化控件 */}
          <ComponentSectionLayout
            title="控件定制"
            id="video-controls"
            description="可以通过 show* 属性控制各个控件的显示与隐藏。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-24">
                <div>
                  <div className="fs-12 color-gray-4 mb-8">只显示播放和进度</div>
                  <Video
                    src={videoOptions.find((item) => item.key === currentVideo)?.url}
                    radius={8}
                    controls
                    showVolume={false}
                    showSettings={false}
                    showPip={false}
                    showWebFullscreen={false}
                    showFullscreen={false}
                  />
                </div>
                <div>
                  <div className="fs-12 color-gray-4 mb-8">隐藏控制栏</div>
                  <Video
                    src={videoOptions.find((item) => item.key === currentVideo)?.url}
                    radius={8}
                    controls={false}
                  />
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className="flex flex-col gap-12">
          <ComponentPropsTable props={videoProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
};

export default VideoExample;
