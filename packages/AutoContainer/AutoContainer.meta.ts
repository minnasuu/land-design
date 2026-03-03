/**
 * AutoContainer 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const AutoContainerMeta = {
  name: 'AutoContainer',
  chineseName: '自适应容器',
  description: '自适应容器组件，用于展示媒体内容，支持自动根据容器尺寸调整内容宽高比，保持内容的最佳显示效果。',

  category: 'container',
  subcategory: 'layout',

  importStatement: "import AutoContainer from 'land-design/AutoContainer';",

  features: [
    '自动根据容器尺寸调整内容布局',
    '支持自定义宽高比',
    '响应式尺寸变化监听',
    '支持内容区域样式自定义',
    '自动判断水平/垂直布局',
  ],

  useCases: [
    '视频播放器：保持视频的宽高比',
    '图片展示：图片在不同容器中的自适应展示',
    '卡片布局：固定比例的卡片内容',
    '响应式设计：需要保持比例的响应式组件',
  ],

  examples: [
    {
      title: '基础用法',
      description: '默认 1:1 比例的容器',
      code: `<AutoContainer className="w-full h-[300px]">
  <div className="bg-gray-100 w-full h-full">内容</div>
</AutoContainer>`,
    },
    {
      title: '16:9 视频比例',
      description: '常用的视频宽高比',
      code: `<AutoContainer ratio={16/9} className="w-full h-[400px]">
  <video src="/video.mp4" className="w-full h-full object-cover" />
</AutoContainer>`,
    },
    {
      title: '4:3 图片比例',
      description: '传统照片比例',
      code: `<AutoContainer ratio={4/3} className="w-full h-[300px]">
  <img src="/photo.jpg" className="w-full h-full object-cover" />
</AutoContainer>`,
    },
    {
      title: '监听尺寸变化',
      description: '获取容器尺寸变化信息',
      code: `<AutoContainer
  ratio={16/9}
  onResize={({ width, height, ratio }) => {
    console.log('尺寸变化', width, height, ratio);
  }}
>
  <div>响应式内容</div>
</AutoContainer>`,
    },
  ],

  relatedComponents: ['Flex', 'Grid', 'Image', 'Video'],

  notes: [
    'ratio 大于 1 时内容优先适应宽度',
    'ratio 小于 1 时内容优先适应高度',
    '容器本身需要设置宽高',
    '内容会自动居中显示',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default AutoContainerMeta;
