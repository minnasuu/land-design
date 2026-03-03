/**
 * Anchor 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const AnchorMeta = {
  name: 'Anchor',
  chineseName: '锚点导航',
  description: '锚点导航组件，用于快速跳转到页面指定位置。支持嵌套层级、自定义渲染和滚动监听自动高亮。',

  category: 'navigation',
  subcategory: 'anchor',

  importStatement: "import Anchor from 'land-design/Anchor';",

  features: [
    '支持嵌套层级结构',
    '滚动时自动高亮当前锚点',
    '平滑滚动到目标位置',
    '支持自定义滚动容器',
    '支持滚动偏移量配置（适用于固定头部场景）',
    '支持自定义锚点项渲染',
    '带有激活态和悬停态指示器动画',
  ],

  useCases: [
    '文档导航：长文档的章节快速跳转',
    '设置页面：设置项分组导航',
    '单页应用：单页面各模块的快速定位',
    '目录索引：文章目录的交互导航',
  ],

  examples: [
    {
      title: '基础用法',
      description: '基础的锚点导航',
      code: `<Anchor
  items={[
    { key: 'section1', title: '第一章' },
    { key: 'section2', title: '第二章' },
    { key: 'section3', title: '第三章' },
  ]}
/>`,
    },
    {
      title: '嵌套锚点',
      description: '支持多级嵌套的锚点结构',
      code: `<Anchor
  items={[
    {
      key: 'chapter1',
      title: '第一章',
      children: [
        { key: 'section1-1', title: '1.1 概述' },
        { key: 'section1-2', title: '1.2 详情' },
      ],
    },
    { key: 'chapter2', title: '第二章' },
  ]}
/>`,
    },
    {
      title: '固定头部偏移',
      description: '配合固定头部使用，设置滚动偏移量',
      code: `<Anchor
  items={[
    { key: 'part1', title: '部分一' },
    { key: 'part2', title: '部分二' },
  ]}
  offsetTop={64}
/>`,
    },
    {
      title: '指定滚动容器',
      description: '在指定容器内滚动',
      code: `<Anchor
  items={[
    { key: 'item1', title: '项目一' },
    { key: 'item2', title: '项目二' },
  ]}
  getContainer={() => document.getElementById('scroll-container')}
/>`,
    },
  ],

  relatedComponents: ['Menu', 'Tabs', 'BackToTop'],

  notes: [
    'items 中的 key 必须对应页面中元素的 id',
    'offsetTop 常用于有固定头部的页面',
    '自定义渲染时指示器动画会隐藏',
    '嵌套项会自动缩进显示',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default AnchorMeta;
