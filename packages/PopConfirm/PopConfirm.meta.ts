/**
 * PopConfirm 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 * @author Land Design System
 */

export const PopConfirmMeta = {
  // 基础信息
  name: 'PopConfirm',
  chineseName: '气泡确认框',
  description: '气泡确认框组件，在点击元素上弹出一个气泡式的确认框，用于需要用户进行二次确认的操作场景。相比 Dialog 更加轻量。',
  
  // 分类
  category: 'feedback',
  subcategory: 'confirm',
  
  // 引入方式
  importStatement: "import PopConfirm from 'land-design/PopConfirm';",
  
  // 组件特性
  features: [
    '气泡式确认框，轻量级交互',
    '支持四个方向弹出：上、下、左、右',
    '支持亮色和暗色主题',
    '可自定义确认和取消按钮',
    '支持隐藏箭头指示器',
    '确认和取消按钮支持自定义配置',
    '支持自定义按钮文案',
  ],
  
  // 使用场景
  useCases: [
    '删除确认',
    '危险操作的二次确认',
    '表单提交前确认',
    '状态切换确认',
    '退出操作确认',
  ],
  
  // 代码示例
  examples: [
    {
      title: '基础用法',
      description: '最简单的确认框',
      code: `<div style={{ position: 'relative' }}>
  <Button>删除</Button>
  <PopConfirm
    show={showConfirm}
    content="确定要删除这条记录吗？"
    onSubmit={() => handleDelete()}
    onCancel={() => setShowConfirm(false)}
  />
</div>`,
    },
    {
      title: '不同位置',
      description: '设置气泡弹出的位置',
      code: `<PopConfirm placement="bottom" content="确定操作？" />
<PopConfirm placement="left" content="确定操作？" />
<PopConfirm placement="right" content="确定操作？" />`,
    },
    {
      title: '暗色主题',
      description: '使用暗色背景',
      code: `<PopConfirm theme="dark" content="确定要执行此操作吗？" />`,
    },
    {
      title: '自定义按钮文案',
      description: '修改确认和取消按钮的文字',
      code: `<PopConfirm
  content="确定要提交吗？"
  cancelLabel="算了"
  submitLabel="确认提交"
/>`,
    },
    {
      title: '隐藏箭头',
      description: '不显示指向元素的箭头',
      code: `<PopConfirm hideArrow content="确定吗？" />`,
    },
  ],
  
  // 相关组件
  relatedComponents: ['PopOver', 'Dialog', 'Button'],
  
  // 使用注意事项
  notes: [
    '通常需要配合一个触发元素使用',
    '注意设置父容器的 position: relative',
    '对于重要操作建议使用 Dialog 组件',
    'show 属性控制显示状态',
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

export default PopConfirmMeta;
