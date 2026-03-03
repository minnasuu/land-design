/**
 * Pagination 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 * @author Land Design System
 */

export const PaginationMeta = {
  // 基础信息
  name: 'Pagination',
  chineseName: '分页',
  description: '分页组件，用于长列表数据的分页导航，支持显示页码、快速跳转、页码输入等功能。',
  
  // 分类
  category: 'navigation',
  subcategory: 'pagination',
  
  // 引入方式
  importStatement: "import Pagination from 'land-design/Pagination';",
  
  // 组件特性
  features: [
    '显示当前页码和总页数',
    '支持快速跳转到指定页',
    '支持显示/隐藏总页数',
    '支持页码输入框快速跳转',
    '自动省略过多页码',
    '支持点击省略号快速翻页',
    '响应式页码显示',
  ],
  
  // 使用场景
  useCases: [
    '表格数据分页',
    '列表内容分页',
    '搜索结果分页',
    '文章列表分页',
    '商品列表分页',
  ],
  
  // 代码示例
  examples: [
    {
      title: '基础用法',
      description: '最简单的分页器',
      code: `<Pagination current={1} total={10} onChange={(page) => console.log(page)} />`,
    },
    {
      title: '显示总页数',
      description: '展示总共有多少页',
      code: `<Pagination current={1} total={50} showTotal />`,
    },
    {
      title: '带页码输入',
      description: '可以直接输入页码跳转',
      code: `<Pagination current={1} total={100} showInput />`,
    },
    {
      title: '自定义可见页码数',
      description: '控制一次显示多少个页码',
      code: `<Pagination current={5} total={20} pageSize={7} />`,
    },
    {
      title: '完整功能',
      description: '显示所有功能',
      code: `<Pagination
  current={5}
  total={100}
  showTotal
  showInput
  onChange={(page) => console.log('切换到第', page, '页')}
/>`,
    },
  ],
  
  // 相关组件
  relatedComponents: ['Table', 'NumberInput'],
  
  // 使用注意事项
  notes: [
    'current 从 1 开始计数',
    'total 表示总页数，不是总条数',
    '页码变化时会触发 onChange 回调',
    'pageSize 控制中间可见的页码数量',
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

export default PaginationMeta;
