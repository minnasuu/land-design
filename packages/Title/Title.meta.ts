/**
 * Title 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 */

export const TitleMeta = {
  // 组件基本信息
  name: 'Title',
  chineseName: '标题',
  description: '标题组件，用于展示页面或区块的标题。支持四种层级、前缀、角标、提示等装饰元素，适用于页面标题、区块标题等场景。',
  
  // 组件分类
  category: 'display',
  subcategory: 'typography',
  
  // 引入方式
  importStatement: "import Title from 'land-design/Title';",
  
  // 组件特性
  features: [
    '支持四种标题层级：h1、h2、h3、h4',
    '支持标题前缀文本',
    '支持角标内容（sub）',
    '支持提示信息（tip）',
    '支持点击事件',
    '灵活的样式自定义',
    '支持 children 和 title 两种内容传入方式'
  ],
  
  // 使用场景
  useCases: [
    '页面主标题',
    '区块/模块标题',
    '卡片标题',
    '表单分组标题',
    '弹窗标题',
    '侧边栏标题',
    '列表标题'
  ],
  
  // 代码示例
  examples: [
    {
      title: '基础用法',
      description: '最简单的标题',
      code: `<Title>这是一个标题</Title>`
    },
    {
      title: '使用 title 属性',
      description: '通过 title 属性传入标题内容',
      code: `<Title title="这是标题内容" />`
    },
    {
      title: '不同层级',
      description: '四种不同层级的标题',
      code: `<Title type="h1">一级标题</Title>
<Title type="h2">二级标题</Title>
<Title type="h3">三级标题</Title>
<Title type="h4">四级标题</Title>`
    },
    {
      title: '带前缀',
      description: '添加前缀文本',
      code: `<Title prefix="01">第一章节</Title>
<Title prefix="•">带点前缀的标题</Title>`
    },
    {
      title: '带角标',
      description: '添加角标内容',
      code: `<Title sub="New">新功能</Title>
<Title sub={<span style={{ color: 'red' }}>Hot</span>}>热门功能</Title>`
    },
    {
      title: '带提示',
      description: '添加提示信息',
      code: `<Title tip="这是提示信息">带提示的标题</Title>
<Title tip={<span>详细提示内容</span>}>带自定义提示的标题</Title>`
    },
    {
      title: '组合使用',
      description: '前缀、角标、提示组合使用',
      code: `<Title 
  type="h2"
  prefix="01"
  sub="必填"
  tip="请填写完整的信息"
>
  基本信息
</Title>`
    },
    {
      title: '可点击标题',
      description: '添加点击事件',
      code: `<Title 
  onClick={() => console.log('标题被点击')}
  style={{ cursor: 'pointer' }}
>
  可点击的标题
</Title>`
    },
    {
      title: '自定义样式',
      description: '通过 style 自定义样式',
      code: `<Title 
  style={{ 
    color: '#1890ff', 
    borderBottom: '2px solid #1890ff',
    paddingBottom: 8 
  }}
>
  自定义样式标题
</Title>`
    }
  ],
  
  // 相关组件
  relatedComponents: ['Text', 'Paragraph', 'Typography'],
  
  // 使用注意事项
  notes: [
    'title 和 children 都可以作为标题内容，title 优先级更高',
    'type 决定了标题的 HTML 标签（h1-h4）和默认样式',
    '前缀（prefix）显示在标题文本之前',
    '角标（sub）显示在标题文本之后，通常用于标记状态',
    '提示（tip）通常以 Tooltip 或其他方式显示额外信息',
    '样式优先级：style > className > 默认样式'
  ],
  
  // 版本信息
  version: '1.0.0',
  
  // 更新日志
  changelog: [
    { version: '1.0.0', date: '2024-01-01', description: '初始版本' }
  ]
};

export default TitleMeta;
