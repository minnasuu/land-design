/**
 * Drawer 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const DrawerMeta = {
  name: 'Drawer',
  chineseName: '抽屉',
  description: '抽屉组件，从屏幕边缘滑出的面板。支持从右侧和底部滑出，常用于展示详情或表单。',

  category: 'feedback',
  subcategory: 'modal',

  importStatement: "import Drawer from 'land-design/Drawer';",

  features: [
    '支持右侧和底部两种弹出位置',
    '支持 4 种预设尺寸',
    '支持自定义头部和尾部',
    '支持背景遮罩',
    '支持 ESC 键关闭',
    '支持确认/取消按钮配置',
    '支持自定义宽度范围',
  ],

  useCases: [
    '详情展示：列表项的详情信息',
    '表单编辑：侧边表单编辑',
    '筛选面板：复杂筛选条件面板',
    '设置面板：应用设置面板',
  ],

  examples: [
    {
      title: '基础用法',
      description: '右侧滑出的抽屉',
      code: `<Drawer
  show={visible}
  title="抽屉标题"
  onClose={() => setVisible(false)}
>
  抽屉内容
</Drawer>`,
    },
    {
      title: '底部抽屉',
      description: '从底部滑出',
      code: `<Drawer
  show={visible}
  placement="bottom"
  title="底部抽屉"
  onClose={() => setVisible(false)}
>
  内容
</Drawer>`,
    },
    {
      title: '带操作按钮',
      description: '带确认和取消按钮',
      code: `<Drawer
  show={visible}
  title="编辑"
  cancelLabel="取消"
  submitLabel="保存"
  onCancel={() => setVisible(false)}
  onSubmit={handleSave}
>
  表单内容
</Drawer>`,
    },
    {
      title: '不同尺寸',
      description: '大尺寸抽屉',
      code: `<Drawer show={visible} title="大抽屉" size="large">
  内容
</Drawer>`,
    },
  ],

  relatedComponents: ['Dialog', 'PopOver', 'Menu'],

  notes: [
    'show 控制抽屉的显示/隐藏',
    'placement 决定抽屉的弹出方向',
    'size 为 auto 时自适应内容宽度',
    'minWidth/maxWidth 可限制宽度范围',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default DrawerMeta;
