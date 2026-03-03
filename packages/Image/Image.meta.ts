/**
 * Image 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const ImageMeta = {
  name: 'Image',
  chineseName: '图片',
  description: '图片组件，增强的图片展示组件。支持懒加载、骨架屏、错误处理、宽高比等功能。',

  category: 'display',
  subcategory: 'image',

  importStatement: "import Image from 'land-design/Image';",

  features: [
    '支持 5 种填充模式',
    '支持懒加载',
    '支持预览图（低质量占位图）',
    '支持加载失败兜底',
    '支持加载骨架屏',
    '支持固定宽高比',
    '支持圆形图片',
  ],

  useCases: [
    '产品图片：商品图片展示',
    '头像：用户头像显示',
    '画廊：图片画廊展示',
    '封面图：文章/卡片封面',
  ],

  examples: [
    {
      title: '基础用法',
      description: '基础的图片展示',
      code: `<Image src="/photo.jpg" alt="图片描述" />`,
    },
    {
      title: '固定尺寸',
      description: '设置宽高',
      code: `<Image src="/photo.jpg" width={200} height={150} />`,
    },
    {
      title: '固定宽高比',
      description: '16:9 比例',
      code: `<Image src="/photo.jpg" width="100%" ratio={16/9} />`,
    },
    {
      title: '圆形图片',
      description: '头像样式',
      code: `<Image src="/avatar.jpg" width={64} height={64} round />`,
    },
    {
      title: '懒加载',
      description: '延迟加载图片',
      code: `<Image src="/photo.jpg" lazy />`,
    },
    {
      title: '加载失败兜底',
      description: '提供备用图片',
      code: `<Image
  src="/photo.jpg"
  fallbackSrc="/fallback.jpg"
  fallback={<div>加载失败</div>}
/>`,
    },
  ],

  relatedComponents: ['Avatar', 'AffixContainer', 'AutoContainer'],

  notes: [
    'fit 控制图片如何适应容器',
    'ratio 设置后会根据宽度自动计算高度',
    'lazy 启用原生懒加载',
    'fallbackSrc 优先于 fallback 组件',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default ImageMeta;
