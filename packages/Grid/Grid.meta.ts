/**
 * Grid 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const GridMeta = {
  name: 'Grid',
  chineseName: '网格布局',
  description: '网格布局组件，基于 CSS Grid 的布局容器。支持多种布局模式，适合复杂的网格排列场景。',

  category: 'layout',
  subcategory: 'grid',

  importStatement: "import Grid from 'land-design/Grid';",

  features: [
    '支持 7 种布局模式',
    '列适应模式：列数固定，列宽自适应',
    '列填充模式：列宽固定，列数自适应',
    '行适应/填充模式',
    '支持重复模式',
    '支持独立的行列间距',
  ],

  useCases: [
    '图片画廊：等宽图片网格',
    '卡片列表：响应式卡片布局',
    '仪表盘：多区块仪表盘布局',
    '产品列表：商品网格展示',
  ],

  examples: [
    {
      title: '列适应模式',
      description: '固定 3 列，列宽自适应',
      code: `<Grid type={GridType.ColumnFit} repeatNum={3} gap={16}>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</Grid>`,
    },
    {
      title: '列填充模式',
      description: '最小列宽 200px，列数自适应',
      code: `<Grid type={GridType.ColumnFill} autoSize={200} gap={16}>
  {items.map(item => <Card key={item.id}>{item.name}</Card>)}
</Grid>`,
    },
    {
      title: '自定义间距',
      description: '分别设置行列间距',
      code: `<Grid type={GridType.ColumnRepeat} repeatNum={4} columnGap={16} rowGap={24}>
  {items.map(item => <div key={item}>{item}</div>)}
</Grid>`,
    },
  ],

  relatedComponents: ['Flex', 'AutoContainer'],

  notes: [
    'type 决定网格的布局行为',
    'autoSize 在 fill 模式下生效',
    'repeatNum 在 fit/repeat 模式下生效',
    'columnGap/rowGap 优先级高于 gap',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default GridMeta;
