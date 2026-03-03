/**
 * DatePicker 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const DatePickerMeta = {
  name: 'DatePicker',
  chineseName: '日期选择器',
  description: '日期选择器组件，基于 Calendar 和 Dropdown 封装，支持日期、周、月、季度、年多种选择类型。',

  category: 'form',
  subcategory: 'date',

  importStatement: "import DatePicker from 'land-design/DatePicker';",

  features: [
    '支持 5 种选择类型：日期、周、月、季度、年',
    '支持中英文双语',
    '支持日期范围限制',
    '支持清空和今天快捷按钮',
    '支持手动输入日期',
    '支持自定义日期格式',
    '支持 3 种尺寸和 3 种变体样式',
  ],

  useCases: [
    '表单日期：表单中的日期选择字段',
    '筛选条件：日期范围筛选',
    '预订系统：选择预订日期',
    '报表查询：选择报表日期范围',
  ],

  examples: [
    {
      title: '基础用法',
      description: '基础的日期选择器',
      code: `<DatePicker
  placeholder="请选择日期"
  onChange={(date) => console.log(date)}
/>`,
    },
    {
      title: '周选择器',
      description: '选择周',
      code: `<DatePicker type="week" placeholder="请选择周" />`,
    },
    {
      title: '月份选择器',
      description: '选择月份',
      code: `<DatePicker type="month" placeholder="请选择月份" />`,
    },
    {
      title: '日期范围限制',
      description: '限制可选日期范围',
      code: `<DatePicker
  minDate="2024-01-01"
  maxDate="2024-12-31"
/>`,
    },
    {
      title: '带确认按钮',
      description: '需要点击确认才生效',
      code: `<DatePicker
  showConfirm
  confirmText="确定"
  cancelText="取消"
/>`,
    },
    {
      title: '允许输入',
      description: '可以手动输入日期',
      code: `<DatePicker allowInput />`,
    },
  ],

  relatedComponents: ['Calendar', 'Input', 'Dropdown'],

  notes: [
    'type 决定选择的粒度',
    'format 可自定义日期显示格式',
    'allowInput 仅在 date 类型下生效',
    '可通过 calendarProps 透传 Calendar 组件属性',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default DatePickerMeta;
