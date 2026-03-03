/**
 * Collapse 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const CollapseMeta = {
  name: 'Collapse',
  chineseName: '折叠面板',
  description: '折叠面板组件，可以展开/收起内容区域。支持多种外观变体、自定义箭头位置和展开动画。',

  category: 'display',
  subcategory: 'collapse',

  importStatement: "import Collapse from 'land-design/Collapse';",

  features: [
    '支持 3 种外观变体：default、bordered、card',
    '支持箭头位置配置：start、end',
    '支持受控和非受控两种模式',
    '支持展开/收起动画',
    '支持自定义箭头图标',
    '支持标题额外内容',
    '支持键盘操作',
  ],

  useCases: [
    'FAQ列表：常见问题展开查看',
    '设置面板：分组设置项的展开收起',
    '详情展示：详细信息的折叠展示',
    '导航菜单：可折叠的菜单项',
  ],

  examples: [
    {
      title: '基础用法',
      description: '基础的折叠面板',
      code: `<Collapse title="点击展开">
  这是折叠的内容
</Collapse>`,
    },
    {
      title: '默认展开',
      description: '初始状态为展开',
      code: `<Collapse title="标题" defaultExpanded>
  默认展开的内容
</Collapse>`,
    },
    {
      title: '带边框样式',
      description: '使用 bordered 变体',
      code: `<Collapse variant="bordered" title="带边框">
  内容
</Collapse>`,
    },
    {
      title: '卡片样式',
      description: '使用 card 变体',
      code: `<Collapse variant="card" title="卡片样式">
  卡片内容
</Collapse>`,
    },
    {
      title: '箭头在右侧',
      description: '将箭头放在标题右侧',
      code: `<Collapse arrowPosition="end" title="标题">
  内容
</Collapse>`,
    },
    {
      title: '带额外内容',
      description: '标题右侧添加额外内容',
      code: `<Collapse title="标题" extra={<Tag>标签</Tag>}>
  内容
</Collapse>`,
    },
  ],

  relatedComponents: ['Accordion', 'Menu', 'Tabs'],

  notes: [
    '使用 expanded + onChange 实现受控模式',
    '使用 defaultExpanded 实现非受控模式',
    'destroyOnCollapse 可在收起时销毁内容 DOM',
    '支持 Enter 和 Space 键操作',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default CollapseMeta;
