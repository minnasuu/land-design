/**
 * Steps 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 * @author Land Design System
 */

export const StepsMeta = {
  // 基础信息
  name: 'Steps',
  chineseName: '步骤条',
  description: '步骤条组件，用于引导用户按照流程完成任务。展示当前步骤和完成状态，支持水平和垂直两种布局。',
  
  // 分类
  category: 'navigation',
  subcategory: 'steps',
  
  // 引入方式
  importStatement: "import Steps from 'land-design/Steps';",
  
  // 组件特性
  features: [
    '支持水平和垂直两种方向',
    '支持当前步骤高亮',
    '支持已完成步骤标记',
    '支持步骤标题和描述',
    '支持步骤点击事件',
    '支持分割线显示/隐藏',
    '支持自定义分割线宽度',
  ],
  
  // 使用场景
  useCases: [
    '注册流程引导',
    '订单流程展示',
    '表单分步填写',
    '任务进度展示',
    '审批流程展示',
    '教程步骤引导',
  ],
  
  // 代码示例
  examples: [
    {
      title: '基础用法',
      description: '简单的步骤条',
      code: `<Steps
  current="step2"
  items={[
    { key: 'step1', title: '第一步' },
    { key: 'step2', title: '第二步' },
    { key: 'step3', title: '第三步' },
  ]}
/>`,
    },
    {
      title: '带描述',
      description: '每个步骤添加描述文字',
      code: `<Steps
  current="step2"
  items={[
    { key: 'step1', title: '注册账号', desc: '填写基本信息' },
    { key: 'step2', title: '完善资料', desc: '补充详细资料' },
    { key: 'step3', title: '完成', desc: '审核通过后生效' },
  ]}
/>`,
    },
    {
      title: '带已完成状态',
      description: '标记已完成的步骤',
      code: `<Steps
  current="step2"
  finished={['step1']}
  items={[
    { key: 'step1', title: '第一步' },
    { key: 'step2', title: '第二步' },
    { key: 'step3', title: '第三步' },
  ]}
/>`,
    },
    {
      title: '垂直方向',
      description: '垂直布局的步骤条',
      code: `<Steps
  direction="vertical"
  current="step2"
  items={[
    { key: 'step1', title: '步骤一', desc: '这是步骤一的描述' },
    { key: 'step2', title: '步骤二', desc: '这是步骤二的描述' },
    { key: 'step3', title: '步骤三', desc: '这是步骤三的描述' },
  ]}
/>`,
    },
    {
      title: '可点击步骤',
      description: '步骤支持点击跳转',
      code: `<Steps
  current={currentStep}
  items={items}
  onClick={(item) => setCurrentStep(item.key)}
/>`,
    },
    {
      title: '隐藏分割线',
      description: '不显示步骤间的连线',
      code: `<Steps useDivider={false} items={items} />`,
    },
  ],
  
  // 相关组件
  relatedComponents: ['Progress', 'Timeline', 'Tabs'],
  
  // 使用注意事项
  notes: [
    'current 属性值应与某个 item 的 key 匹配',
    'finished 数组中的 key 会显示为已完成状态',
    '每个 item 的 finished 属性优先级高于全局 finished 数组',
    '垂直方向时，组件会自动调整布局',
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

export default StepsMeta;
