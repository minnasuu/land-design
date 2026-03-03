/**
 * Badge 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const BadgeMeta = {
  name: 'Badge',
  chineseName: '徽标',
  description: '徽标组件，用于展示数字或状态标记。常用于头像、图标、按钮等元素的右上角，展示消息数量或状态。',

  category: 'display',
  subcategory: 'badge',

  importStatement: "import Badge from 'land-design/Badge';",

  features: [
    '支持数字显示和小红点模式',
    '支持封顶数值显示（如 99+）',
    '支持 6 种语义状态颜色',
    '支持 3 种外观变体',
    '支持 4 种位置配置',
    '支持自定义徽标内容',
    '支持位置偏移调整',
  ],

  useCases: [
    '消息通知：显示未读消息数量',
    '购物车：显示购物车商品数量',
    '状态标识：显示在线/离线状态',
    '头像徽标：用户头像上的状态指示',
    '菜单提醒：菜单项的新功能标识',
  ],

  examples: [
    {
      title: '基础用法',
      description: '显示数字徽标',
      code: `<Badge count={5}>
  <div className="w-10 h-10 bg-gray-200 rounded" />
</Badge>`,
    },
    {
      title: '小红点模式',
      description: '不显示数字，只显示红点',
      code: `<Badge dot>
  <Icon name="bell" size={24} />
</Badge>`,
    },
    {
      title: '封顶数值',
      description: '超过最大值显示 max+',
      code: `<Badge count={100} max={99}>
  <div className="w-10 h-10 bg-gray-200 rounded" />
</Badge>`,
    },
    {
      title: '不同状态',
      description: '使用不同的语义颜色',
      code: `<>
  <Badge count={5} status="primary">...</Badge>
  <Badge count={5} status="success">...</Badge>
  <Badge count={5} status="warning">...</Badge>
  <Badge count={5} status="danger">...</Badge>
</>`,
    },
    {
      title: '不同位置',
      description: '徽标显示在不同角落',
      code: `<>
  <Badge count={5} placement="top-left">...</Badge>
  <Badge count={5} placement="top-right">...</Badge>
  <Badge count={5} placement="bottom-left">...</Badge>
  <Badge count={5} placement="bottom-right">...</Badge>
</>`,
    },
    {
      title: '自定义内容',
      description: '显示自定义徽标内容',
      code: `<Badge content={<Icon name="check" size={10} />}>
  <div className="w-10 h-10 bg-gray-200 rounded" />
</Badge>`,
    },
    {
      title: '独立使用',
      description: '不包裹子元素单独使用',
      code: `<Badge count={5} />`,
    },
  ],

  relatedComponents: ['Tag', 'Avatar', 'Icon', 'AffixContainer'],

  notes: [
    'count 为 0 时默认隐藏，可通过 showZero 显示',
    'content 优先级高于 count',
    'dot 模式下不显示任何内容',
    '无 children 时徽标独立显示',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default BadgeMeta;
