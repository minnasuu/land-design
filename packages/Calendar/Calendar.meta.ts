/**
 * Calendar 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const CalendarMeta = {
  name: 'Calendar',
  chineseName: '日历',
  description: '日历组件，支持日期、周、月、季度、年等多种视图模式的选择。支持日期范围限制、节假日显示等功能。',

  category: 'form',
  subcategory: 'date',

  importStatement: "import Calendar from 'land-design/Calendar';",

  features: [
    '支持 5 种视图模式：日期、周、月、季度、年',
    '支持中英文双语',
    '支持日期范围限制（最小/最大日期）',
    '支持自定义禁用日期',
    '支持显示周数和节假日标记',
    '支持自定义日期单元格渲染',
    '支持受控和非受控两种模式',
  ],

  useCases: [
    '日期选择：表单中的日期选择',
    '日历展示：展示日程安排',
    '预订系统：酒店/机票预订日期选择',
    '考勤系统：打卡日历展示',
  ],

  examples: [
    {
      title: '基础用法',
      description: '基础的日期选择日历',
      code: `<Calendar onChange={(date) => console.log(date)} />`,
    },
    {
      title: '周选择模式',
      description: '选择整周',
      code: `<Calendar mode="week" onChange={(date, info) => console.log(info)} />`,
    },
    {
      title: '月份选择模式',
      description: '选择月份',
      code: `<Calendar mode="month" />`,
    },
    {
      title: '日期范围限制',
      description: '限制可选日期范围',
      code: `<Calendar
  minDate={new Date('2024-01-01')}
  maxDate={new Date('2024-12-31')}
/>`,
    },
    {
      title: '自定义禁用日期',
      description: '禁用周末',
      code: `<Calendar
  disabledDate={(date) => date.getDay() === 0 || date.getDay() === 6}
/>`,
    },
  ],

  relatedComponents: ['DatePicker', 'Input'],

  notes: [
    'value 和 defaultValue 支持 Date 对象',
    'mode 决定选择的粒度',
    '通过 disabledDate 可以灵活控制禁用日期',
    'weekStartDay 可配置周起始日（0-6）',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default CalendarMeta;
