/**
 * Video 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 */

export const VideoMeta = {
  // 组件基本信息
  name: 'Video',
  chineseName: '视频播放器',
  description: '功能完善的视频播放器组件，支持自定义控制栏、倍速播放、画中画、全屏、键盘快捷键等功能。适用于视频播放、课程学习、媒体展示等场景。',
  
  // 组件分类
  category: 'media',
  subcategory: 'player',
  
  // 引入方式
  importStatement: "import Video from 'land-design/Video';",
  
  // 组件特性
  features: [
    '完整的播放控制：播放/暂停、进度条、音量控制',
    '支持倍速播放，可自定义速率选项',
    '支持画中画（PiP）模式',
    '支持网页全屏和系统全屏',
    '支持循环播放',
    '支持键盘快捷键控制',
    '支持视频封面图（poster）',
    '支持多种视频填充模式：cover、contain、fill 等',
    '支持宽高比设置',
    '支持剧集导航（上一集/下一集）',
    '支持关键帧预览',
    '支持自定义控制栏样式',
    '丰富的事件回调',
    '支持视频预加载策略'
  ],
  
  // 使用场景
  useCases: [
    '视频播放页面',
    '在线课程/教学视频',
    '产品宣传视频',
    '媒体资源展示',
    '视频预览',
    '剧集/电影播放',
    '直播回放'
  ],
  
  // 代码示例
  examples: [
    {
      title: '基础用法',
      description: '最简单的视频播放器',
      code: `<Video
  src="https://example.com/video.mp4"
  poster="https://example.com/poster.jpg"
/>`
    },
    {
      title: '自定义尺寸',
      description: '设置视频尺寸和宽高比',
      code: `<Video
  src="https://example.com/video.mp4"
  width={800}
  height={450}
  ratio={16/9}
/>`
    },
    {
      title: '自动播放',
      description: '页面加载后自动播放（需静音）',
      code: `<Video
  src="https://example.com/video.mp4"
  autoPlay
  muted
/>`
    },
    {
      title: '循环播放',
      description: '视频结束后自动重新播放',
      code: `<Video
  src="https://example.com/video.mp4"
  loop
/>`
    },
    {
      title: '控制栏配置',
      description: '自定义显示的控制按钮',
      code: `<Video
  src="https://example.com/video.mp4"
  controls
  showPlayButton
  showProgress
  showTime
  showVolume
  showRate
  showPip
  showFullscreen
/>`
    },
    {
      title: '隐藏部分控制',
      description: '隐藏不需要的控制按钮',
      code: `<Video
  src="https://example.com/video.mp4"
  showPip={false}
  showRate={false}
  showSettings={false}
/>`
    },
    {
      title: '自定义倍速选项',
      description: '自定义播放速率列表',
      code: `<Video
  src="https://example.com/video.mp4"
  rateOptions={[
    { label: '0.5x', value: 0.5 },
    { label: '1x', value: 1 },
    { label: '1.5x', value: 1.5 },
    { label: '2x', value: 2 },
    { label: '3x', value: 3 }
  ]}
/>`
    },
    {
      title: '剧集导航',
      description: '显示上一集/下一集按钮',
      code: `<Video
  src="https://example.com/video.mp4"
  showPrev
  showNext
  prevDisabled={false}
  nextDisabled={false}
  onPrevClick={() => console.log('上一集')}
  onNextClick={() => console.log('下一集')}
/>`
    },
    {
      title: '键盘快捷键',
      description: '启用键盘控制',
      code: `<Video
  src="https://example.com/video.mp4"
  keyboard
  seekStep={5}
  volumeStep={10}
/>
// 快捷键：空格-播放/暂停，左右-快进快退，上下-音量`
    },
    {
      title: '视频填充模式',
      description: '设置视频在容器中的填充方式',
      code: `<Video
  src="https://example.com/video.mp4"
  fit="contain"
  radius={8}
/>`
    },
    {
      title: '事件监听',
      description: '监听播放相关事件',
      code: `<Video
  src="https://example.com/video.mp4"
  onPlay={(data) => console.log('开始播放', data)}
  onPause={(data) => console.log('暂停', data)}
  onEnded={(data) => console.log('播放结束', data)}
  onTimeUpdate={(data) => console.log('时间更新', data.currentTime)}
  onVolumeChange={(volume, muted) => console.log('音量变化', volume)}
  onError={(error) => console.log('播放错误', error)}
/>`
    },
    {
      title: '全屏事件',
      description: '监听全屏状态变化',
      code: `<Video
  src="https://example.com/video.mp4"
  onFullscreenEnter={() => console.log('进入全屏')}
  onFullscreenExit={() => console.log('退出全屏')}
  onWebFullscreenChange={(isWeb) => console.log('网页全屏:', isWeb)}
/>`
    },
    {
      title: '自定义样式',
      description: '自定义播放器样式',
      code: `<Video
  src="https://example.com/video.mp4"
  videoClassName="custom-video"
  controlsClassName="custom-controls"
  progressColor="#1890ff"
/>`
    }
  ],
  
  // 相关组件
  relatedComponents: ['Audio', 'Image', 'Player'],
  
  // 使用注意事项
  notes: [
    '自动播放需要配合 muted 使用，否则浏览器会阻止',
    '画中画功能需要浏览器支持 Picture-in-Picture API',
    '全屏功能在移动端可能有兼容性问题',
    '键盘快捷键仅在播放器获得焦点时生效',
    '建议设置 poster 封面图提升用户体验',
    'preload 设置为 auto 会预加载整个视频，注意流量消耗',
    'fit 属性影响视频在容器中的显示方式',
    '剧集导航按钮的逻辑需要自行实现'
  ],
  
  // 版本信息
  version: '1.0.0',
  
  // 更新日志
  changelog: [
    { version: '1.0.0', date: '2024-01-01', description: '初始版本' }
  ]
};

export default VideoMeta;
