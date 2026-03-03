/**
 * PopOver 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 * @author Land Design System
 */

export const PopOverMeta = {
  // 基础信息
  name: 'PopOver',
  chineseName: '气泡提示',
  description: '气泡提示组件，在元素附近弹出气泡卡片，用于显示提示信息或额外内容。支持多种触发方式和位置配置，以及智能边界检测。',
  
  // 分类
  category: 'feedback',
  subcategory: 'tooltip',
  
  // 引入方式
  importStatement: "import PopOver from 'land-design/PopOver';",
  
  // 组件特性
  features: [
    '支持四个方向弹出：上、下、左、右',
    '支持 hover 和 click 两种触发方式',
    '支持受控和非受控模式',
    '智能边界检测和位置自动调整',
    '支持亮色和暗色主题',
    '支持挂载到 body 或父容器',
    '支持隐藏箭头指示器',
    '平滑的动画过渡效果',
    '支持自定义气泡样式',
  ],
  
  // 使用场景
  useCases: [
    '鼠标悬停显示提示信息',
    '点击显示更多操作或详情',
    '表单字段的帮助说明',
    '图标或按钮的功能解释',
    '缩略内容的完整展示',
  ],
  
  // 代码示例
  examples: [
    {
      title: '基础用法',
      description: '鼠标悬停显示提示',
      code: `<PopOver content="这是提示内容">
  <Button>悬停显示</Button>
</PopOver>`,
    },
    {
      title: '点击触发',
      description: '点击元素显示气泡',
      code: `<PopOver trigger="click" content="点击显示的内容">
  <Button>点击显示</Button>
</PopOver>`,
    },
    {
      title: '不同位置',
      description: '设置气泡弹出的位置',
      code: `<PopOver placement="top" content="上方">顶部</PopOver>
<PopOver placement="bottom" content="下方">底部</PopOver>
<PopOver placement="left" content="左侧">左边</PopOver>
<PopOver placement="right" content="右侧">右边</PopOver>`,
    },
    {
      title: '暗色主题',
      description: '使用暗色背景的气泡',
      code: `<PopOver theme="dark" content="暗色主题提示">
  <span>暗色主题</span>
</PopOver>`,
    },
    {
      title: '挂载到 body',
      description: '适用于需要突破父容器 overflow 限制的场景',
      code: `<PopOver attach="body" content="挂载到 body">
  <Button>Body 挂载</Button>
</PopOver>`,
    },
    {
      title: '受控模式',
      description: '通过 show 属性控制显示状态',
      code: `<PopOver
  show={visible}
  content="受控模式"
  onVisibleChange={(v) => setVisible(v)}
>
  <Button>受控模式</Button>
</PopOver>`,
    },
    {
      title: '隐藏箭头',
      description: '不显示指向元素的箭头',
      code: `<PopOver hideArrow content="无箭头提示">
  <span>无箭头</span>
</PopOver>`,
    },
  ],
  
  // 相关组件
  relatedComponents: ['PopConfirm', 'Dropdown', 'Tooltip'],
  
  // 使用注意事项
  notes: [
    '当父容器有 overflow: hidden 时，建议使用 attach="body"',
    'attach="body" 模式会自动处理位置计算和边界检测',
    '受控模式下需要同时使用 show 和 onVisibleChange',
    '气泡内容支持传入任意 ReactNode',
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

export default PopOverMeta;
