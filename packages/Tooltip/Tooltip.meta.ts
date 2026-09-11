/**
 * Tooltip 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 * @author Land Design System
 */

export const TooltipMeta = {
  // 基础信息
  name: 'Tooltip',
  chineseName: '文字提示',
  description: '轻量文字提示组件，用于解释元素含义。内容不可交互，需要承载可交互内容时请使用 Popup。',

  // 分类
  category: 'feedback',
  subcategory: 'tooltip',

  // 引入方式
  importStatement: "import Tooltip from 'land-design/Tooltip';",

  // 组件特性
  features: [
    '支持四个方向弹出：上、下、左、右',
    '默认深色主题，紧凑尺寸',
    '支持 hover 和 click 两种触发方式',
    '支持受控和非受控模式',
    '支持挂载到 body 或父容器',
    '支持隐藏箭头指示器',
    '可限制最大宽度，超长内容自动换行',
  ],

  // 使用场景
  useCases: [
    '图标按钮的功能说明',
    '表单字段的帮助说明',
    '文本省略时展示完整内容',
    '禁用元素的不可用原因说明',
  ],

  // 代码示例
  examples: [
    {
      title: '基础用法',
      description: '鼠标悬停显示简短说明',
      code: `<Tooltip content="这是一段提示文字">
  <Button>悬停显示</Button>
</Tooltip>`,
    },
    {
      title: '不同位置',
      description: '设置提示弹出的位置',
      code: `<Tooltip placement="top" content="上方">顶部</Tooltip>
<Tooltip placement="bottom" content="下方">底部</Tooltip>
<Tooltip placement="left" content="左侧">左边</Tooltip>
<Tooltip placement="right" content="右侧">右边</Tooltip>`,
    },
    {
      title: '浅色主题',
      description: '使用浅色背景的提示',
      code: `<Tooltip theme="light" content="浅色提示">
  <span>浅色主题</span>
</Tooltip>`,
    },
    {
      title: '隐藏箭头',
      description: '不显示指向元素的箭头',
      code: `<Tooltip hideArrow content="无箭头提示">
  <span>无箭头</span>
</Tooltip>`,
    },
    {
      title: '挂载到 body',
      description: '适用于父容器存在 overflow 裁剪的场景',
      code: `<Tooltip attach="body" content="挂载到 body">
  <Button>Body 挂载</Button>
</Tooltip>`,
    },
    {
      title: '受控模式',
      description: '通过 show 属性控制显示状态',
      code: `<Tooltip
  show={visible}
  content="受控提示"
  onVisibleChange={(v) => setVisible(v)}
>
  <Button>受控提示</Button>
</Tooltip>`,
    },
  ],

  // 相关组件
  relatedComponents: ['Popup', 'PopConfirm', 'Dropdown'],

  // 使用注意事项
  notes: [
    'Tooltip 仅用于展示文字说明，内容不应包含可交互元素',
    '需要承载链接、按钮、表单等可交互内容时请使用 Popup',
    '当父容器有 overflow: hidden 时，建议使用 attach="body"',
    '受控模式下需要同时使用 show 和 onVisibleChange',
    '注意避免在大量元素上同时使用，可能影响性能',
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

export default TooltipMeta;
