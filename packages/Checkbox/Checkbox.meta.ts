/**
 * Checkbox 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const CheckboxMeta = {
  name: 'Checkbox',
  chineseName: '复选框',
  description: '复选框组件，用于在一组选项中进行多选。支持受控/非受控模式、半选状态和自定义样式。',

  category: 'form',
  subcategory: 'selection',

  importStatement: "import Checkbox from 'land-design/Checkbox';",

  features: [
    '支持受控和非受控两种模式',
    '支持半选（indeterminate）状态',
    '支持禁用状态',
    '支持 3 种尺寸',
    '支持自定义标签内容',
    '支持选中动画效果',
  ],

  useCases: [
    '表单选项：多选项表单字段',
    '全选控制：配合半选状态实现全选功能',
    '协议同意：用户协议勾选确认',
    '筛选条件：多条件筛选',
  ],

  examples: [
    {
      title: '基础用法',
      description: '基础的复选框',
      code: `<Checkbox>同意协议</Checkbox>`,
    },
    {
      title: '受控模式',
      description: '使用 checked 和 onCheckedChange 控制',
      code: `<Checkbox
  checked={isChecked}
  onCheckedChange={(checked) => setIsChecked(checked)}
>
  选项
</Checkbox>`,
    },
    {
      title: '半选状态',
      description: '用于全选控制的中间状态',
      code: `<Checkbox
  indeterminate={someChecked && !allChecked}
  checked={allChecked}
  onCheckedChange={handleSelectAll}
>
  全选
</Checkbox>`,
    },
    {
      title: '禁用状态',
      description: '禁用的复选框',
      code: `<Checkbox disabled>禁用选项</Checkbox>`,
    },
  ],

  relatedComponents: ['CheckboxGroup', 'Radio', 'Switch'],

  notes: [
    '受控模式使用 checked + onCheckedChange',
    '非受控模式使用 defaultChecked',
    'indeterminate 状态时 checked 显示会被覆盖',
    '可以配合 CheckboxGroup 使用',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default CheckboxMeta;
