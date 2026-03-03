/**
 * Select 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 * @author Land Design System
 */

export const SelectMeta = {
  // 基础信息
  name: 'Select',
  chineseName: '选择器',
  description: '选择器组件，用于从一组选项中选择一个或多个值。支持单选和多选模式，提供丰富的自定义能力。',
  
  // 分类
  category: 'form',
  subcategory: 'selection',
  
  // 引入方式
  importStatement: "import Select from 'land-design/Select';",
  
  // 组件特性
  features: [
    '支持单选和多选模式',
    '支持搜索过滤选项',
    '支持选项禁用',
    '支持选项提示信息',
    '支持自定义选项渲染',
    '支持自定义已选内容显示',
    '多种外观变体：outline、fill、text、transparent',
    '支持复选框样式的多选',
    '支持最大显示数量限制',
    '完善的键盘导航',
    '空数据状态展示',
  ],
  
  // 使用场景
  useCases: [
    '表单中的下拉选择',
    '筛选条件选择',
    '标签选择',
    '多级分类选择',
    '人员选择',
    '配置项选择',
  ],
  
  // 代码示例
  examples: [
    {
      title: '基础用法',
      description: '单选选择器',
      code: `<Select
  options={[
    { key: '1', label: '选项一' },
    { key: '2', label: '选项二' },
    { key: '3', label: '选项三' },
  ]}
  value={value}
  onChange={(val) => setValue(val)}
/>`,
    },
    {
      title: '多选模式',
      description: '可选择多个选项',
      code: `<Select
  multiple
  options={[
    { key: 'apple', label: '苹果' },
    { key: 'banana', label: '香蕉' },
    { key: 'orange', label: '橘子' },
  ]}
  values={values}
  onChange={(vals) => setValues(vals)}
/>`,
    },
    {
      title: '带复选框的多选',
      description: '显示复选框图标',
      code: `<Select
  multiple
  showCheckbox
  options={options}
  values={values}
  onChange={(vals) => setValues(vals)}
/>`,
    },
    {
      title: '不同外观变体',
      description: '多种视觉样式',
      code: `<Select variant="outline" options={options} />
<Select variant="fill" options={options} />
<Select variant="text" options={options} />`,
    },
    {
      title: '禁用某些选项',
      description: '部分选项不可选择',
      code: `<Select
  options={[
    { key: '1', label: '可选' },
    { key: '2', label: '禁用', disabled: true },
    { key: '3', label: '可选' },
  ]}
/>`,
    },
    {
      title: '带提示的选项',
      description: '选项有帮助提示',
      code: `<Select
  options={[
    { key: 'free', label: '免费版', tip: '基础功能' },
    { key: 'pro', label: '专业版', iconTip: '推荐选择' },
  ]}
/>`,
    },
    {
      title: '自定义占位符',
      description: '设置提示文字',
      code: `<Select placeholder="请选择城市" options={cityOptions} />`,
    },
    {
      title: '设置宽度',
      description: '自定义选择器宽度',
      code: `<Select width={200} options={options} />`,
    },
    {
      title: '多选最大显示数量',
      description: '限制显示的选中项数量',
      code: `<Select
  multiple
  maxDisplayCount={2}
  options={options}
  values={['a', 'b', 'c', 'd']}
/>`,
    },
  ],
  
  // 相关组件
  relatedComponents: ['Dropdown', 'Checkbox', 'RadioGroup', 'SelectTree'],
  
  // 使用注意事项
  notes: [
    'options 中每个选项的 key 必须唯一',
    '单选使用 value/onChange，多选使用 values/onChange',
    'onChange 回调参数：单选为 value，多选为 values 数组',
    'data 属性已废弃，请使用 options',
    'selected/selectedValues 已废弃，请使用 value/values',
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

export default SelectMeta;
