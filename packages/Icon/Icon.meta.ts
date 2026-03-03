/**
 * Icon 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const IconMeta = {
  name: 'Icon',
  chineseName: '图标',
  description: '图标组件，用于展示各种图标。支持自定义颜色、尺寸和描边宽度。',

  category: 'general',
  subcategory: 'icon',

  importStatement: "import Icon from 'land-design/Icon';",

  features: [
    '内置丰富的图标库',
    '支持自定义颜色',
    '支持自定义尺寸',
    '支持自定义描边宽度',
    '支持点击事件',
  ],

  useCases: [
    '按钮图标：按钮中的图标',
    '导航图标：菜单导航图标',
    '状态指示：状态图标展示',
    '装饰元素：页面装饰图标',
  ],

  examples: [
    {
      title: '基础用法',
      description: '使用内置图标',
      code: `<Icon name="search" />`,
    },
    {
      title: '自定义尺寸',
      description: '设置图标大小',
      code: `<Icon name="home" size={24} />`,
    },
    {
      title: '自定义颜色',
      description: '设置图标颜色',
      code: `<Icon name="heart" color="red" />`,
    },
    {
      title: '可点击图标',
      description: '添加点击事件',
      code: `<Icon name="close" onClick={() => handleClose()} />`,
    },
    {
      title: '调整描边',
      description: '设置描边宽度',
      code: `<Icon name="check" strokeWidth={3} />`,
    },
  ],

  relatedComponents: ['Button', 'Link', 'Tag'],

  notes: [
    'name 指定要显示的图标名称',
    'size 默认为 16',
    'color 默认继承父元素颜色',
    'strokeWidth 用于调整线条粗细',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default IconMeta;
