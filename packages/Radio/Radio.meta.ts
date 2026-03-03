/**
 * Radio 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 * @author Land Design System
 */

export const RadioMeta = {
  // 基础信息
  name: 'Radio',
  chineseName: '单选框',
  description: '单选框组件，用于在一组选项中进行单项选择。支持受控和非受控模式，可配合 RadioGroup 使用。',
  
  // 分类
  category: 'form',
  subcategory: 'selection',
  
  // 引入方式
  importStatement: "import Radio from 'land-design/Radio';",
  
  // 组件特性
  features: [
    '支持受控和非受控两种模式',
    '支持标签文本显示',
    '支持禁用状态',
    '支持选中状态动画效果',
    '支持提示信息显示',
    '可单独使用或配合 RadioGroup',
    '完善的无障碍访问支持',
  ],
  
  // 使用场景
  useCases: [
    '表单中的单选项',
    '设置选项的选择',
    '筛选条件的选择',
    '问卷单选题',
    '是/否选择',
  ],
  
  // 代码示例
  examples: [
    {
      title: '基础用法',
      description: '最简单的单选框',
      code: `<Radio label="选项 A" />`,
    },
    {
      title: '受控模式',
      description: '通过 checked 和 onCheckedChange 控制',
      code: `<Radio 
  label="选项" 
  checked={selected}
  onCheckedChange={(checked) => setSelected(checked)}
/>`,
    },
    {
      title: '默认选中',
      description: '非受控模式下设置默认选中',
      code: `<Radio label="默认选中" defaultChecked />`,
    },
    {
      title: '禁用状态',
      description: '不可点击的单选框',
      code: `<Radio label="禁用" disabled />
<Radio label="禁用且选中" disabled defaultChecked />`,
    },
    {
      title: '带提示信息',
      description: '显示帮助提示',
      code: `<Radio label="选项" tip="这是一个帮助提示" />`,
    },
    {
      title: '无动画',
      description: '禁用选中动画',
      code: `<Radio label="无动画" animated={false} />`,
    },
    {
      title: '配合 RadioGroup',
      description: '在一组选项中单选',
      code: `<RadioGroup 
  checked={value}
  data={[
    { key: 'a', label: '选项 A' },
    { key: 'b', label: '选项 B' },
    { key: 'c', label: '选项 C' },
  ]}
  onChange={(key) => setValue(key)}
/>`,
    },
  ],
  
  // 相关组件
  relatedComponents: ['RadioGroup', 'Checkbox', 'CheckboxGroup'],
  
  // 使用注意事项
  notes: [
    '单选框不能取消选中，只能切换选择',
    '多个单选框配合使用时建议使用 RadioGroup',
    'value 属性用于在 RadioGroup 中标识选项',
    '受控模式需要同时使用 checked 和 onCheckedChange',
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

export default RadioMeta;
