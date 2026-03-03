/**
 * BreadCrumb 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const BreadCrumbMeta = {
  name: 'BreadCrumb',
  chineseName: '面包屑',
  description: '面包屑导航组件，显示当前页面在系统层级结构中的位置，并能向上返回。支持溢出遮罩和悬停预览。',

  category: 'navigation',
  subcategory: 'breadcrumb',

  importStatement: "import BreadCrumb from 'land-design/BreadCrumb';",

  features: [
    '清晰展示页面层级关系',
    '支持点击导航返回',
    '支持溢出时显示遮罩',
    '支持文字省略和悬停预览',
    '支持自定义项最大宽度',
  ],

  useCases: [
    '页面导航：展示当前页面路径',
    '文件浏览：文件夹层级导航',
    '分类展示：商品分类层级展示',
    '后台管理：管理系统的页面路径',
  ],

  examples: [
    {
      title: '基础用法',
      description: '基础的面包屑导航',
      code: `<BreadCrumb
  items={[
    { value: 'home', label: '首页' },
    { value: 'list', label: '列表页' },
    { value: 'detail', label: '详情页' },
  ]}
  current="detail"
/>`,
    },
    {
      title: '带点击事件',
      description: '点击面包屑项进行导航',
      code: `<BreadCrumb
  items={[
    { value: 'home', label: '首页' },
    { value: 'products', label: '产品列表' },
    { value: 'detail', label: '产品详情' },
  ]}
  current="detail"
  onChange={(item) => navigate(item.value)}
/>`,
    },
    {
      title: '溢出遮罩',
      description: '内容溢出时显示遮罩效果',
      code: `<BreadCrumb
  items={[
    { value: '1', label: '一级目录' },
    { value: '2', label: '二级目录' },
    { value: '3', label: '三级目录' },
    { value: '4', label: '四级目录' },
  ]}
  showMask
/>`,
    },
    {
      title: '悬停预览',
      description: '文字省略时悬停显示完整内容',
      code: `<BreadCrumb
  items={[
    { value: '1', label: '这是一个很长的目录名称', maxWidth: 100 },
    { value: '2', label: '另一个很长的目录名称', maxWidth: 100 },
  ]}
  hoverPreview
/>`,
    },
  ],

  relatedComponents: ['Menu', 'Tabs', 'Link'],

  notes: [
    'items 数组会反向渲染（最后一项在最右）',
    'current 用于高亮当前项',
    'maxWidth 可控制单项最大宽度',
    '配合 hoverPreview 可在省略时显示完整内容',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default BreadCrumbMeta;
