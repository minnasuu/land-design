/**
 * RadioGroup 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 * @author Land Design System
 */

export const RadioGroupMeta = {
  // 基础信息
  name: 'RadioGroup',
  chineseName: '单选框组',
  description: '单选框组组件，用于管理一组单选框的选中状态，确保同一时间只有一个选项被选中。',
  
  // 分类
  category: 'form',
  subcategory: 'selection',
  
  // 引入方式
  importStatement: "import RadioGroup from 'land-design/RadioGroup';",
  
  // 组件特性
  features: [
    '管理多个单选框的选中状态',
    '支持数据驱动渲染选项',
    '支持禁用单个选项',
    '支持选项提示信息',
    '支持选中动画效果',
    '值变化时触发回调',
  ],
  
  // 使用场景
  useCases: [
    '表单中的单选组',
    '设置页面的选项组',
    '筛选条件选择',
    '问卷单选题组',
    '配置项选择',
  ],
  
  // 代码示例
  examples: [
    {
      title: '基础用法',
      description: '使用 data 属性配置选项',
      code: `<RadioGroup
  checked={value}
  data={[
    { key: 'apple', label: '苹果' },
    { key: 'banana', label: '香蕉' },
    { key: 'orange', label: '橘子' },
  ]}
  onChange={(key) => setValue(key)}
/>`,
    },
    {
      title: '带提示的选项',
      description: '为选项添加帮助提示',
      code: `<RadioGroup
  checked={value}
  data={[
    { key: 'free', label: '免费版', tip: '基础功能，适合个人使用' },
    { key: 'pro', label: '专业版', tip: '高级功能，适合团队使用' },
    { key: 'enterprise', label: '企业版', tip: '全部功能，提供专属服务' },
  ]}
  onChange={(key) => setValue(key)}
/>`,
    },
    {
      title: '禁用某些选项',
      description: '部分选项不可选择',
      code: `<RadioGroup
  checked={value}
  data={[
    { key: 'a', label: '可选 A' },
    { key: 'b', label: '禁用 B', disabled: true },
    { key: 'c', label: '可选 C' },
  ]}
  onChange={(key) => setValue(key)}
/>`,
    },
    {
      title: '无动画',
      description: '禁用选中动画效果',
      code: `<RadioGroup
  animated={false}
  checked={value}
  data={options}
  onChange={(key) => setValue(key)}
/>`,
    },
  ],
  
  // 相关组件
  relatedComponents: ['Radio', 'Checkbox', 'CheckboxGroup'],
  
  // 使用注意事项
  notes: [
    'data 中每个选项的 key 必须唯一',
    'checked 属性值应与某个选项的 key 匹配',
    'onChange 回调会传递选中选项的 key、item 和事件对象',
    '如果需要更复杂的布局，可以单独使用 Radio 组件',
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

export default RadioGroupMeta;
