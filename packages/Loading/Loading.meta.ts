/**
 * Loading 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const LoadingMeta = {
  name: 'Loading',
  chineseName: '加载中',
  description: '加载中组件，用于展示内容加载状态。支持自定义尺寸、颜色和描边宽度。',

  category: 'feedback',
  subcategory: 'loading',

  importStatement: "import Loading from 'land-design/Loading';",

  features: [
    '支持自定义尺寸',
    '支持自定义颜色',
    '支持自定义描边宽度',
    '流畅的旋转动画',
  ],

  useCases: [
    '数据加载：等待数据返回',
    '按钮加载：提交时的加载状态',
    '页面加载：整页加载遮罩',
    '局部加载：区块内的加载状态',
  ],

  examples: [
    {
      title: '基础用法',
      description: '基础的加载动画',
      code: `<Loading />`,
    },
    {
      title: '自定义尺寸',
      description: '设置加载图标大小',
      code: `<Loading size={32} />`,
    },
    {
      title: '自定义颜色',
      description: '设置加载图标颜色',
      code: `<Loading color="var(--color-primary-6)" />`,
    },
    {
      title: '自定义描边',
      description: '调整描边宽度',
      code: `<Loading size={24} strokeSize={3} />`,
    },
    {
      title: '包裹内容',
      description: '覆盖在内容上方',
      code: `<Loading>
  <div>内容区域</div>
</Loading>`,
    },
  ],

  relatedComponents: ['Button', 'Skeleton', 'Alert'],

  notes: [
    'size 同时控制宽高',
    'strokeSize 调整圆环粗细',
    'children 存在时作为覆盖层使用',
    '颜色默认继承主题色',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default LoadingMeta;
