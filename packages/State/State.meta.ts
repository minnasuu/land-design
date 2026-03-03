/**
 * State 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 * @author Land Design System
 */

export const StateMeta = {
  // 基础信息
  name: 'State',
  chineseName: '状态',
  description: '状态组件，用于展示空状态、错误状态、成功状态等各种页面状态。提供预设图标和自定义内容能力。',
  
  // 分类
  category: 'feedback',
  subcategory: 'state',
  
  // 引入方式
  importStatement: "import State from 'land-design/State';",
  
  // 组件特性
  features: [
    '预设多种状态类型：空状态、错误、离线、无权限、404、成功、警告',
    '支持自定义图标或图片',
    '支持标题和描述文字',
    '支持操作区域（按钮、链接等）',
    '支持自定义内容插槽',
    '三种尺寸可选',
    '支持自定义各区域样式',
  ],
  
  // 使用场景
  useCases: [
    '空列表/空数据展示',
    '接口错误提示',
    '网络离线提示',
    '无权限访问提示',
    '页面不存在（404）',
    '操作成功反馈',
    '警告提示',
  ],
  
  // 代码示例
  examples: [
    {
      title: '空状态',
      description: '无数据时的占位展示',
      code: `<State type="empty" title="暂无数据" description="当前列表为空" />`,
    },
    {
      title: '错误状态',
      description: '请求错误时的展示',
      code: `<State 
  type="error" 
  title="出错了" 
  description="请求失败，请稍后重试"
  actions={<Button onClick={retry}>重试</Button>}
/>`,
    },
    {
      title: '离线状态',
      description: '网络断开时的展示',
      code: `<State type="offline" title="网络已断开" description="请检查网络连接" />`,
    },
    {
      title: '无权限',
      description: '访问受限时的展示',
      code: `<State type="forbidden" title="无访问权限" description="请联系管理员获取权限" />`,
    },
    {
      title: '404 页面',
      description: '页面不存在的展示',
      code: `<State 
  type="notFound" 
  title="页面不存在" 
  description="您访问的页面已被删除或不存在"
  actions={<Button onClick={() => navigate('/')}>返回首页</Button>}
/>`,
    },
    {
      title: '成功状态',
      description: '操作成功的反馈',
      code: `<State type="success" title="提交成功" description="您的申请已提交" />`,
    },
    {
      title: '自定义图片',
      description: '使用自定义图片',
      code: `<State 
  image="/custom-empty.png"
  imageWidth={200}
  title="自定义状态"
  description="使用自定义图片"
/>`,
    },
    {
      title: '不同尺寸',
      description: '小、中、大三种尺寸',
      code: `<State size="small" type="empty" title="小尺寸" />
<State size="default" type="empty" title="默认尺寸" />
<State size="large" type="empty" title="大尺寸" />`,
    },
  ],
  
  // 相关组件
  relatedComponents: ['Loading', 'Skeleton', 'Alert'],
  
  // 使用注意事项
  notes: [
    'icon 属性的优先级高于 type 预设图标',
    'image 属性可以快速设置图片，也可以用 icon 传入自定义 ReactNode',
    'actions 区域通常放置按钮或链接',
    '可以通过 children 添加额外内容',
  ],
  
  // 版本信息
  version: '1.0.0',
  
  // 更新日志
  changelog: [
    {
      version: '1.0.0',
      date: '2024-01-01',
      changes: ['初始版本发布'],
    },
  ],
};

export default StateMeta;
