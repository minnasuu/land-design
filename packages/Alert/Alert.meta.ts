/**
 * Alert 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const AlertMeta = {
  name: 'Alert',
  chineseName: '警告提示',
  description: '警告提示组件，用于页面中展示重要的提示信息。支持多种类型、变体和布局方向，可配置图标、链接和关闭按钮。',

  category: 'feedback',
  subcategory: 'notification',

  importStatement: "import Alert from 'land-design/Alert';",

  features: [
    '支持 5 种类型：info、success、warning、error、loading',
    '支持 4 种变体：filled、outlined、light、text',
    '支持水平和垂直两种布局方向',
    '支持 3 种尺寸：small、medium、large',
    '支持自定义图标和关闭按钮',
    '支持链接和操作区域',
    '支持关闭动画',
  ],

  useCases: [
    '系统通知：展示系统级别的提示信息',
    '表单验证：显示表单验证错误或成功信息',
    '操作反馈：操作成功或失败后的反馈提示',
    '重要公告：页面顶部的重要公告信息',
    '加载状态：展示正在进行的操作状态',
  ],

  examples: [
    {
      title: '基础用法',
      description: '基础的警告提示',
      code: `<Alert title="这是一条提示信息" />`,
    },
    {
      title: '不同类型',
      description: '展示不同语义的警告类型',
      code: `<>
  <Alert type="info" title="信息提示" />
  <Alert type="success" title="成功提示" />
  <Alert type="warning" title="警告提示" />
  <Alert type="error" title="错误提示" />
  <Alert type="loading" title="加载中..." />
</>`,
    },
    {
      title: '带描述信息',
      description: '包含标题和详细描述',
      code: `<Alert
  type="info"
  title="这是标题"
  description="这是详细的描述信息，可以展示更多内容。"
/>`,
    },
    {
      title: '可关闭的提示',
      description: '点击关闭按钮可以关闭提示',
      code: `<Alert
  type="warning"
  title="这是一条可关闭的警告"
  closable
  onClose={() => console.log('关闭')}
/>`,
    },
    {
      title: '带操作链接',
      description: '在提示中添加操作链接',
      code: `<Alert
  type="info"
  title="您有新的消息"
  link="查看详情"
  onLinkClick={() => console.log('点击链接')}
/>`,
    },
  ],

  relatedComponents: ['Message', 'Notification', 'Icon'],

  notes: [
    'type 属性会影响图标和颜色主题',
    'variant 为 text 时无背景色',
    'direction 为 vertical 时图标会更大',
    '旧版属性（如 noBg、row/column）仍可使用但建议使用新版属性',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default AlertMeta;
