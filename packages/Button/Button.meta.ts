/**
 * Button 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const ButtonMeta = {
  name: 'Button',
  chineseName: '按钮',
  description: '按钮组件，用于触发操作或事件。支持多种外观变体、语义状态、尺寸和交互效果。',

  category: 'general',
  subcategory: 'button',

  importStatement: "import Button from 'land-design/Button';",

  features: [
    '支持 6 种外观变体：text、fill、background、outline、dashed、transparent',
    '支持 5 种语义状态：default、primary、warning、danger、success',
    '支持 3 种尺寸：small、default、large',
    '支持图标按钮和文字按钮',
    '支持主文案和次文案',
    '支持悬停加粗和动画效果',
    '支持气泡提示',
    '支持胶囊形状',
  ],

  useCases: [
    '表单提交：提交表单数据',
    '操作触发：触发各种用户操作',
    '导航跳转：页面或功能跳转',
    '确认取消：对话框确认取消按钮',
    '工具栏：工具栏中的操作按钮',
  ],

  examples: [
    {
      title: '基础用法',
      description: '基础按钮',
      code: `<Button text="按钮" />`,
    },
    {
      title: '不同变体',
      description: '展示不同外观的按钮',
      code: `<>
  <Button variant="fill" text="填充按钮" />
  <Button variant="outline" text="描边按钮" />
  <Button variant="text" text="文字按钮" />
  <Button variant="dashed" text="虚线按钮" />
</>`,
    },
    {
      title: '不同状态',
      description: '展示不同语义的按钮',
      code: `<>
  <Button status="primary" text="主要按钮" />
  <Button status="success" text="成功按钮" />
  <Button status="warning" text="警告按钮" />
  <Button status="danger" text="危险按钮" />
</>`,
    },
    {
      title: '不同尺寸',
      description: '展示不同大小的按钮',
      code: `<>
  <Button size="small" text="小按钮" />
  <Button size="default" text="默认按钮" />
  <Button size="large" text="大按钮" />
</>`,
    },
    {
      title: '图标按钮',
      description: '只有图标的按钮',
      code: `<Button icon={<Icon name="search" />} />`,
    },
    {
      title: '带图标的按钮',
      description: '图标和文字组合',
      code: `<Button icon={<Icon name="plus" />} text="新增" />`,
    },
    {
      title: '带次文案',
      description: '主文案和次文案组合',
      code: `<Button text="确认" subText="(Ctrl+Enter)" />`,
    },
    {
      title: '带提示的按钮',
      description: '悬停显示提示信息',
      code: `<Button text="保存" tip="保存当前更改" />`,
    },
    {
      title: '胶囊按钮',
      description: '圆角更大的胶囊形状',
      code: `<Button text="胶囊按钮" capsule />`,
    },
    {
      title: '块级按钮',
      description: '占满父容器宽度',
      code: `<Button text="块级按钮" block />`,
    },
  ],

  subComponents: [
    {
      name: 'Button.ButtonArrow',
      description: '带箭头的按钮',
    },
    {
      name: 'Button.ButtonChange',
      description: '状态切换按钮',
    },
  ],

  relatedComponents: ['Link', 'Icon', 'PopOver'],

  notes: [
    '只有 icon 时自动呈现纯图标按钮样式',
    'tip 属性会自动包裹 PopOver 组件',
    'variant="transparent" 时 hoverBold 效果会自动启用',
    'disabled 状态下点击事件不会触发',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default ButtonMeta;
