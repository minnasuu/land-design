/**
 * Nav 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const NavMeta = {
  name: 'Nav',
  chineseName: '导航',
  description: '导航组件，用于展示导航导航列表。支持水平和垂直布局，支持多级子导航。',

  category: 'navigation',
  subcategory: 'nav',

  importStatement: "import Nav from 'land-design/Nav';",

  features: [
    '支持水平和垂直两种排列方向',
    '支持多级子导航',
    '支持图标',
    '支持外部链接跳转',
    '支持激活状态高亮',
    '支持滚动到视区',
  ],

  useCases: [
    '顶部导航：网站顶部导航栏',
    '侧边栏：后台管理侧边栏',
    '下拉导航：用户操作导航',
    '标签页：页面内标签导航',
  ],

  examples: [
    {
      title: '基础用法',
      description: '水平导航导航',
      code: `<Nav
  items={[
    { key: 'home', label: '首页', path: '/' },
    { key: 'products', label: '产品', path: '/products' },
    { key: 'about', label: '关于', path: '/about' },
  ]}
  active="home"
  onChange={(item) => navigate(item.path)}
/>`,
    },
    {
      title: '垂直导航',
      description: '侧边栏样式',
      code: `<Nav
  direction="column"
  items={[
    { key: 'dashboard', label: '仪表盘', icon: <Icon name="home" /> },
    { key: 'users', label: '用户管理', icon: <Icon name="user" /> },
    { key: 'settings', label: '设置', icon: <Icon name="settings" /> },
  ]}
  active={activeKey}
  onChange={(item) => setActiveKey(item.key)}
/>`,
    },
    {
      title: '带子导航',
      description: '多级导航结构',
      code: `<Nav
  items={[
    {
      key: 'products',
      label: '产品',
      children: [
        { key: 'product-1', label: '产品一' },
        { key: 'product-2', label: '产品二' },
      ],
    },
  ]}
/>`,
    },
  ],

  relatedComponents: ['Tabs', 'BreadCrumb', 'Dropdown'],

  notes: [
    'direction 控制排列方向',
    'clickType 控制点击行为类型',
    'children 实现多级导航',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default NavMeta;
