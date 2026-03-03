/**
 * Tabs 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 * @author Land Design System
 */

export const TabsMeta = {
  // 基础信息
  name: 'Tabs',
  chineseName: '标签页',
  description: '标签页组件，用于在同一区域切换显示不同的内容面板。支持禁用、提示等功能。',
  
  // 分类
  category: 'navigation',
  subcategory: 'tabs',
  
  // 引入方式
  importStatement: "import Tabs from 'land-design/Tabs';",
  
  // 组件特性
  features: [
    '支持数据驱动渲染标签',
    '支持禁用单个标签',
    '支持标签提示信息',
    '支持禁用切换功能',
    '支持分割线显示',
    '支持自定义激活样式',
    '支持自定义宽度',
  ],
  
  // 使用场景
  useCases: [
    '内容分类展示',
    '设置面板分组',
    '表单分组',
    '数据视图切换',
    '导航菜单',
    '详情页信息分组',
  ],
  
  // 代码示例
  examples: [
    {
      title: '基础用法',
      description: '简单的标签页',
      code: `<Tabs
  checked="tab1"
  data={[
    { key: 'tab1', label: '标签一' },
    { key: 'tab2', label: '标签二' },
    { key: 'tab3', label: '标签三' },
  ]}
  onChange={(key) => setActiveTab(key)}
/>`,
    },
    {
      title: '禁用某个标签',
      description: '部分标签不可点击',
      code: `<Tabs
  checked="tab1"
  data={[
    { key: 'tab1', label: '标签一' },
    { key: 'tab2', label: '禁用标签', disabled: true },
    { key: 'tab3', label: '标签三' },
  ]}
  onChange={(key) => setActiveTab(key)}
/>`,
    },
    {
      title: '带提示',
      description: '标签带有帮助提示',
      code: `<Tabs
  checked="tab1"
  data={[
    { key: 'tab1', label: '基本设置', tip: '基础配置项' },
    { key: 'tab2', label: '高级设置', tip: '高级配置选项' },
  ]}
  onChange={(key) => setActiveTab(key)}
/>`,
    },
    {
      title: '带分割线',
      description: '标签之间显示分割线',
      code: `<Tabs
  useDivider
  checked="tab1"
  data={[
    { key: 'tab1', label: '标签一' },
    { key: 'tab2', label: '标签二' },
  ]}
/>`,
    },
    {
      title: '自定义宽度',
      description: '设置标签容器宽度',
      code: `<Tabs
  width="400px"
  checked="tab1"
  data={tabs}
/>`,
    },
    {
      title: '禁用切换',
      description: '禁用所有切换功能',
      code: `<Tabs switchDisabled data={tabs} />`,
    },
  ],
  
  // 相关组件
  relatedComponents: ['Menu', 'Steps', 'RadioGroup'],
  
  // 使用注意事项
  notes: [
    'data 中每个 item 的 key 必须唯一',
    'checked 属性值应与某个 item 的 key 匹配',
    'disabled 和 switchDisabled 的区别：前者禁用单个标签，后者禁用整个切换功能',
    '标签内容的渲染需要在外部根据 checked 值自行处理',
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

export default TabsMeta;
