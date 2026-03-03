/**
 * Input 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const InputMeta = {
  name: 'Input',
  chineseName: '输入框',
  description: '输入框组件，用于接收用户输入的文本信息。支持多种变体、状态和附加内容。',

  category: 'form',
  subcategory: 'input',

  importStatement: "import Input from 'land-design/Input';",

  features: [
    '支持 3 种外观变体：outline、fill、transparent',
    '支持 5 种语义状态',
    '支持 3 种尺寸',
    '支持前缀/后缀内容',
    '支持清除按钮',
    '支持自动宽度',
    '支持文本高亮（InputHighlight）',
  ],

  useCases: [
    '表单输入：各类表单字段',
    '搜索框：搜索功能输入',
    '数据录入：各种数据输入场景',
    '带图标输入：前置/后置图标',
  ],

  examples: [
    {
      title: '基础用法',
      description: '基础的输入框',
      code: `<Input placeholder="请输入" onChange={(val) => setValue(val)} />`,
    },
    {
      title: '不同变体',
      description: '展示不同外观',
      code: `<>
  <Input variant="outline" placeholder="描边样式" />
  <Input variant="fill" placeholder="填充样式" />
  <Input variant="transparent" placeholder="透明样式" />
</>`,
    },
    {
      title: '带前缀后缀',
      description: '添加前后内容',
      code: `<Input
  prefix={<Icon name="search" />}
  suffix={<Icon name="close" />}
  placeholder="搜索"
/>`,
    },
    {
      title: '带清除按钮',
      description: '传入 onClear 显示清除按钮',
      code: `<Input
  value={value}
  onChange={setValue}
  onClear={() => setValue('')}
/>`,
    },
    {
      title: '不同状态',
      description: '语义状态',
      code: `<>
  <Input status="primary" placeholder="主要" />
  <Input status="success" placeholder="成功" />
  <Input status="warning" placeholder="警告" />
  <Input status="danger" placeholder="错误" />
</>`,
    },
  ],

  subComponents: [
    {
      name: 'InputHighlight',
      description: '支持文本高亮的输入框',
    },
  ],

  relatedComponents: ['Textarea', 'NumberInput', 'Select'],

  notes: [
    'onChange 返回值而非事件对象',
    'onClear 传入即显示清除按钮',
    'beforeContent/afterContent 在输入框外部',
    'prefix/suffix 在输入框内部',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default InputMeta;
