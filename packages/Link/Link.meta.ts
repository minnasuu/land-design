/**
 * Link 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const LinkMeta = {
  name: 'Link',
  chineseName: '链接',
  description: '链接组件，用于页面间的导航跳转或页内锚点定位。支持多种状态、下划线模式和图标。',

  category: 'navigation',
  subcategory: 'link',

  importStatement: "import Link from 'land-design/Link';",

  features: [
    '支持 5 种语义状态',
    '支持 3 种下划线模式：无、始终、悬停',
    '支持起始和末尾图标',
    '支持锚点平滑滚动',
    '支持气泡提示',
    '自动识别内外链图标',
  ],

  useCases: [
    '文本链接：文章中的超链接',
    '导航链接：菜单导航',
    '锚点跳转：页内定位',
    '外部链接：跳转外部网站',
  ],

  examples: [
    {
      title: '基础用法',
      description: '基础的文本链接',
      code: `<Link href="/page">跳转链接</Link>`,
    },
    {
      title: '外部链接',
      description: '新窗口打开',
      code: `<Link href="https://example.com" target="_blank">外部链接</Link>`,
    },
    {
      title: '锚点链接',
      description: '页内定位',
      code: `<Link anchor="section-1">跳转到章节一</Link>`,
    },
    {
      title: '带图标',
      description: '显示链接图标',
      code: `<Link href="/page" endIcon>带图标链接</Link>`,
    },
    {
      title: '不同状态',
      description: '语义颜色',
      code: `<>
  <Link status="primary">主要链接</Link>
  <Link status="success">成功链接</Link>
  <Link status="danger">危险链接</Link>
</>`,
    },
    {
      title: '下划线模式',
      description: '控制下划线显示',
      code: `<>
  <Link underline="none">无下划线</Link>
  <Link underline="always">始终显示</Link>
  <Link underline="hover">悬停显示</Link>
</>`,
    },
  ],

  relatedComponents: ['Button', 'Menu', 'BreadCrumb'],

  notes: [
    'startIcon/endIcon 为 true 时自动判断内外链图标',
    'anchor 实现页内平滑滚动',
    'underline 默认为 hover',
    'tip 显示悬停提示',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default LinkMeta;
