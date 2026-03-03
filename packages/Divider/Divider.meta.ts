/**
 * Divider 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const DividerMeta = {
  name: 'Divider',
  chineseName: '分割线',
  description: '分割线组件，用于分隔内容区域。支持水平和垂直方向，可以带有中间内容。',

  category: 'layout',
  subcategory: 'divider',

  importStatement: "import Divider from 'land-design/Divider';",

  features: [
    '支持水平和垂直两种方向',
    '支持实线和虚线两种线型',
    '支持中间显示文字或其他内容',
    '支持内容对齐方式配置',
    '支持自定义长度和间距',
    '支持自定义虚线样式',
  ],

  useCases: [
    '内容分隔：分隔不同的内容区域',
    '列表分隔：列表项之间的分隔线',
    '标题装饰：带文字的装饰分割线',
    '布局辅助：Flex 布局中的垂直分隔',
  ],

  examples: [
    {
      title: '基础用法',
      description: '基础的水平分割线',
      code: `<Divider />`,
    },
    {
      title: '带内容的分割线',
      description: '中间显示文字',
      code: `<Divider content="分割内容" />`,
    },
    {
      title: '内容对齐',
      description: '内容显示在左侧',
      code: `<Divider content="左对齐" align="start" />`,
    },
    {
      title: '虚线样式',
      description: '使用虚线',
      code: `<Divider variant="dashed" />`,
    },
    {
      title: '垂直分割线',
      description: '用于水平布局的分隔',
      code: `<Flex align="center">
  <span>内容1</span>
  <Divider direction="vertical" />
  <span>内容2</span>
</Flex>`,
    },
    {
      title: '自定义虚线',
      description: '自定义虚线长度和间隔',
      code: `<Divider variant="dashed" dashLength={15} dashGap={8} />`,
    },
  ],

  relatedComponents: ['Flex', 'Space'],

  notes: [
    '垂直分割线需要父容器有高度',
    'spacing 设置分割线与周围的间距',
    'length 可以控制分割线长度',
    '带内容时 align 控制内容位置',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default DividerMeta;
