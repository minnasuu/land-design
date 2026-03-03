/**
 * Ellipsis 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const EllipsisMeta = {
  name: 'Ellipsis',
  chineseName: '文本省略',
  description: '文本省略组件，用于处理长文本的省略显示。支持单行和多行省略，并可在悬停时显示完整内容。',

  category: 'display',
  subcategory: 'text',

  importStatement: "import Ellipsis from 'land-design/Ellipsis';",

  features: [
    '支持单行和多行文本省略',
    '自动检测文本是否需要省略',
    '悬停时显示完整内容（PopOver）',
    '自动监听容器尺寸变化',
    '支持自定义 PopOver 配置',
    '提供独立的 useEllipsis 钩子',
  ],

  useCases: [
    '列表项：表格或列表中的长文本',
    '卡片标题：卡片标题的省略显示',
    '描述文本：多行描述的省略',
    '导航菜单：菜单项文字省略',
  ],

  examples: [
    {
      title: '基础用法',
      description: '单行文本省略',
      code: `<Ellipsis>这是一段很长的文本内容，当超出容器宽度时会显示省略号</Ellipsis>`,
    },
    {
      title: '多行省略',
      description: '限制显示行数',
      code: `<Ellipsis line={2}>
  这是一段很长的文本内容，当超出两行时会显示省略号。
  这是第二行的内容，继续增加更多文字来测试省略效果。
</Ellipsis>`,
    },
    {
      title: '禁用悬停提示',
      description: '省略时不显示 PopOver',
      code: `<Ellipsis open={false}>长文本内容...</Ellipsis>`,
    },
    {
      title: '使用 text 属性',
      description: '通过 text 属性传入内容',
      code: `<Ellipsis text="这是通过 text 属性传入的长文本内容" />`,
    },
  ],

  relatedComponents: ['PopOver', 'Title', 'Text'],

  notes: [
    'text 和 children 都可传入内容，text 优先',
    'line 默认为 1，即单行省略',
    'open 控制是否显示悬停提示',
    '组件会自动监听容器和窗口尺寸变化',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default EllipsisMeta;
