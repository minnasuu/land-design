/**
 * Audio 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const AudioMeta = {
  name: 'Audio',
  chineseName: '音频播放器',
  description: '音频播放器组件，支持播放控制、进度显示、波形可视化等功能。提供丰富的子组件可单独使用。',

  category: 'media',
  subcategory: 'audio',

  importStatement: "import Audio from 'land-design/Audio';",

  features: [
    '支持播放/暂停、进度跳转、音量控制',
    '支持音频波形可视化',
    '支持自动播放和循环播放',
    '支持封面图和标题显示',
    '提供独立子组件：Button、Progress、Wave、AnimationIcon',
    '丰富的事件回调',
    '支持自定义播放速率',
  ],

  useCases: [
    '音乐播放：在线音乐播放器',
    '播客应用：播客音频播放',
    '语音消息：聊天应用中的语音消息播放',
    '在线教育：课程音频播放',
    '音频编辑：带波形的音频预览',
  ],

  examples: [
    {
      title: '基础用法',
      description: '基础的音频播放器',
      code: `<Audio src="/audio/music.mp3" />`,
    },
    {
      title: '带标题和封面',
      description: '显示音频标题和封面图',
      code: `<Audio
  src="/audio/music.mp3"
  title="歌曲名称"
  cover="/images/cover.jpg"
/>`,
    },
    {
      title: '波形模式',
      description: '显示音频波形',
      code: `<Audio
  src="/audio/music.mp3"
  showWave
  waveType="bar"
  waveActiveColor="var(--color-primary-6)"
/>`,
    },
    {
      title: '自定义控件',
      description: '配置显示的控件',
      code: `<Audio
  src="/audio/music.mp3"
  showPlayButton
  showProgress
  showTime
  showVolume
/>`,
    },
    {
      title: '单独使用播放按钮',
      description: '只使用播放按钮子组件',
      code: `<Audio.Button
  playing={isPlaying}
  onClick={() => setIsPlaying(!isPlaying)}
/>`,
    },
  ],

  subComponents: [
    {
      name: 'Audio.Button',
      description: '播放按钮组件',
      props: ['playing', 'size', 'color', 'disabled', 'loading', 'onClick'],
    },
    {
      name: 'Audio.Progress',
      description: '进度条组件',
      props: ['progress', 'buffered', 'activeColor', 'disabled', 'onChange'],
    },
    {
      name: 'Audio.Wave',
      description: '波形组件',
      props: ['src', 'type', 'sampleCount', 'barWidth', 'defaultColor', 'activeColor'],
    },
    {
      name: 'Audio.AnimationIcon',
      description: '动画图标组件',
      props: ['color', 'size', 'playing', 'barCount', 'speed'],
    },
  ],

  relatedComponents: ['Video', 'Progress', 'Slider'],

  notes: [
    'src 是必需的属性',
    'showWave 和 showProgress 互斥，优先显示波形',
    '波形需要加载完整音频才能显示',
    '自动播放受浏览器策略限制',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default AudioMeta;
