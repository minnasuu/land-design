/**
 * Flex 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const FlexMeta = {
  name: 'Flex',
  chineseName: '弹性布局',
  description: '弹性布局组件，基于 Flexbox 的布局容器。提供简洁的 API 实现常见的布局需求。',

  category: 'layout',
  subcategory: 'flex',

  importStatement: "import Flex from 'land-design/Flex';",

  features: [
    '支持水平和垂直两种主轴方向',
    '支持 5 种主轴对齐方式',
    '支持 4 种交叉轴对齐方式',
    '支持元素换行',
    '支持快捷的双向居中',
    '支持自定义间距',
  ],

  useCases: [
    '导航栏：水平排列的导航',
    '表单布局：表单元素的排列',
    '卡片内容：卡片内部的布局',
    '居中布局：内容的居中显示',
  ],

  examples: [
    {
      title: '基础用法',
      description: '水平排列',
      code: `<Flex gap={16}>
  <div>项目1</div>
  <div>项目2</div>
  <div>项目3</div>
</Flex>`,
    },
    {
      title: '垂直排列',
      description: '纵向布局',
      code: `<Flex column gap={16}>
  <div>项目1</div>
  <div>项目2</div>
  <div>项目3</div>
</Flex>`,
    },
    {
      title: '对齐方式',
      description: '两端对齐，垂直居中',
      code: `<Flex justify="space-between" align="center">
  <div>左侧</div>
  <div>右侧</div>
</Flex>`,
    },
    {
      title: '双向居中',
      description: '水平和垂直都居中',
      code: `<Flex bothCenter height="200px">
  <div>居中内容</div>
</Flex>`,
    },
    {
      title: '换行',
      description: '允许元素换行',
      code: `<Flex wrap gap={8}>
  {items.map(item => <Tag key={item}>{item}</Tag>)}
</Flex>`,
    },
  ],

  relatedComponents: ['Grid', 'Space', 'Divider'],

  notes: [
    'column 为 true 时主轴为垂直方向',
    'bothCenter 会同时设置 justify 和 align 为 center',
    'gap 可以是数字或字符串',
    '布局优先级：bothCenter > justify/align',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default FlexMeta;
