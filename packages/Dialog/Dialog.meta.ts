/**
 * Dialog 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const DialogMeta = {
  name: 'Dialog',
  chineseName: '对话框',
  description: '对话框组件，用于展示重要信息或需要用户确认的操作。支持自定义头部、尾部和内容区域。',

  category: 'feedback',
  subcategory: 'modal',

  importStatement: "import Dialog from 'land-design/Dialog';",

  features: [
    '支持 3 种预设尺寸：small、medium、large',
    '支持自定义头部和尾部',
    '支持背景遮罩',
    '支持 ESC 键关闭',
    '支持确认/取消按钮配置',
    '支持头部和尾部分割线配置',
  ],

  useCases: [
    '确认操作：删除确认、提交确认',
    '信息展示：详细信息弹窗',
    '表单弹窗：弹窗内的表单',
    '消息提示：重要消息提示',
  ],

  examples: [
    {
      title: '基础用法',
      description: '基础的对话框',
      code: `<Dialog
  show={visible}
  title="对话框标题"
  onClose={() => setVisible(false)}
>
  对话框内容
</Dialog>`,
    },
    {
      title: '确认对话框',
      description: '带确认和取消按钮',
      code: `<Dialog
  show={visible}
  title="确认删除"
  cancelLabel="取消"
  submitLabel="确认"
  onCancel={() => setVisible(false)}
  onSubmit={handleDelete}
>
  确定要删除这条记录吗？
</Dialog>`,
    },
    {
      title: '自定义尺寸',
      description: '使用不同尺寸',
      code: `<Dialog show={visible} title="大对话框" size="large">
  内容
</Dialog>`,
    },
    {
      title: '自定义头部',
      description: '完全自定义头部',
      code: `<Dialog
  show={visible}
  headerComponent={<CustomHeader />}
>
  内容
</Dialog>`,
    },
  ],

  relatedComponents: ['Drawer', 'PopConfirm', 'Message'],

  notes: [
    'show 控制对话框的显示/隐藏',
    '点击遮罩默认触发 onClose',
    'enableEsc 默认为 true',
    '头部/尾部组件优先级高于标题/按钮',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default DialogMeta;
