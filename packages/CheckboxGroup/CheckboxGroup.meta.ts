/**
 * CheckboxGroup 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const CheckboxGroupMeta = {
  name: 'CheckboxGroup',
  chineseName: '复选框组',
  description: '复选框组组件，用于管理一组复选框的选中状态。支持通过数据配置或子元素两种方式使用。',

  category: 'form',
  subcategory: 'selection',

  importStatement: "import CheckboxGroup from 'land-design/CheckboxGroup';",

  features: [
    '统一管理多个复选框的选中状态',
    '支持通过 data 配置选项',
    '支持通过 children 自定义选项',
    '支持选中动画效果',
  ],

  useCases: [
    '表单多选：多选项表单字段',
    '筛选列表：多条件筛选器',
    '权限配置：多权限选择',
    '标签选择：多标签选择器',
  ],

  examples: [
    {
      title: '基础用法 - 数据驱动',
      description: '通过 data 属性配置选项',
      code: `<CheckboxGroup
  data={[
    { key: 'a', label: '选项A' },
    { key: 'b', label: '选项B' },
    { key: 'c', label: '选项C' },
  ]}
  checked={['a']}
  onChange={(item) => console.log(item)}
/>`,
    },
    {
      title: '使用子元素',
      description: '通过 children 自定义选项',
      code: `<CheckboxGroup checked={values} onChange={setValues}>
  <Checkbox value="a" label="选项A" />
  <Checkbox value="b" label="选项B" />
  <Checkbox value="c" label="选项C" />
</CheckboxGroup>`,
    },
  ],

  relatedComponents: ['Checkbox', 'RadioGroup', 'Select'],

  notes: [
    'checked 为选中项的 key/value 数组',
    'onChange 返回被操作的选项',
    'data 和 children 可以二选一使用',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default CheckboxGroupMeta;
