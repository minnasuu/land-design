/**
 * ColorPicker 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const ColorPickerMeta = {
  name: 'ColorPicker',
  chineseName: '颜色选择器',
  description: '颜色选择器组件，支持多种颜色格式、透明度选择、预设颜色等功能。提供丰富的颜色选择体验。',

  category: 'form',
  subcategory: 'picker',

  importStatement: "import ColorPicker from 'land-design/ColorPicker';",

  features: [
    '支持 5 种颜色格式：hex、rgb、rgba、hsl、hsv',
    '支持透明度选择',
    '支持预设颜色',
    '支持最近使用颜色记录',
    '支持颜色输入框直接输入',
    '支持 3 种尺寸',
    '支持 3 种触发器样式',
  ],

  useCases: [
    '主题配置：自定义主题颜色',
    '设计工具：图形颜色选择',
    '文本编辑：文字颜色设置',
    '表单配置：颜色属性配置',
  ],

  examples: [
    {
      title: '基础用法',
      description: '基础的颜色选择器',
      code: `<ColorPicker onChange={(info) => console.log(info.hex)} />`,
    },
    {
      title: '指定颜色格式',
      description: '返回 rgba 格式',
      code: `<ColorPicker format="rgba" />`,
    },
    {
      title: '带预设颜色',
      description: '显示预设颜色供快速选择',
      code: `<ColorPicker
  presets={['#f5222d', '#fa8c16', '#52c41a', '#1677ff', '#722ed1']}
/>`,
    },
    {
      title: '隐藏透明度',
      description: '不显示透明度选择',
      code: `<ColorPicker showAlpha={false} />`,
    },
    {
      title: '输入框触发器',
      description: '使用输入框样式的触发器',
      code: `<ColorPicker trigger="input" />`,
    },
  ],

  relatedComponents: ['Input', 'Dropdown', 'Slider'],

  notes: [
    'value 和 defaultValue 支持各种颜色格式字符串',
    'onChange 返回完整的颜色信息对象',
    'trigger="custom" 时需要通过 children 自定义触发器',
    '预设颜色建议使用 hex 格式',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default ColorPickerMeta;
