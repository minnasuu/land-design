/**
 * Timeline 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 */

export const TimelineMeta = {
  // 组件基本信息
  name: 'Timeline',
  chineseName: '时间线',
  description: '时间线组件，用于垂直或水平展示时间流信息。适用于展示时间进程、事件记录、操作日志等按时间排序的信息。',
  
  // 组件分类
  category: 'display',
  subcategory: 'timeline',
  
  // 引入方式
  importStatement: "import Timeline from 'land-design/Timeline';",
  
  // 组件特性
  features: [
    '支持垂直和水平两种布局方向',
    '三种内容位置模式：left、right、alternate（交替）',
    '支持自定义节点图标和颜色',
    '六种预设节点状态颜色：default、primary、success、warning、error、info',
    '支持 pending 状态显示加载中',
    '支持倒序显示',
    '支持数据驱动（items）和子组件（Timeline.Item）两种方式',
    '可自定义连接线样式：实线、虚线、点线',
    '支持自定义节点大小、连接线宽度和颜色',
    '支持显示/隐藏连接线',
    '支持项点击事件'
  ],
  
  // 使用场景
  useCases: [
    '项目进度展示',
    '操作日志记录',
    '订单状态追踪',
    '事件历史回顾',
    '版本更新记录',
    '工作流程展示',
    '个人履历展示',
    '消息通知记录'
  ],
  
  // 代码示例
  examples: [
    {
      title: '基础用法',
      description: '使用 items 数据驱动方式',
      code: `<Timeline
  items={[
    { title: '创建订单', subTitle: '2024-01-01 10:00', desc: '订单创建成功' },
    { title: '支付完成', subTitle: '2024-01-01 10:05', desc: '在线支付完成' },
    { title: '发货', subTitle: '2024-01-02 14:00', desc: '商品已发出' },
    { title: '签收', subTitle: '2024-01-05 09:30', desc: '已签收' }
  ]}
/>`
    },
    {
      title: '使用子组件',
      description: '使用 Timeline.Item 子组件方式',
      code: `<Timeline>
  <Timeline.Item title="第一步" subTitle="2024-01-01">
    这是第一步的详细描述
  </Timeline.Item>
  <Timeline.Item title="第二步" subTitle="2024-01-02">
    这是第二步的详细描述
  </Timeline.Item>
  <Timeline.Item title="第三步" subTitle="2024-01-03">
    这是第三步的详细描述
  </Timeline.Item>
</Timeline>`
    },
    {
      title: '不同颜色状态',
      description: '使用预设颜色表示不同状态',
      code: `<Timeline
  items={[
    { title: '已完成', color: 'success' },
    { title: '进行中', color: 'primary', active: true },
    { title: '待处理', color: 'warning' },
    { title: '已取消', color: 'error' }
  ]}
/>`
    },
    {
      title: '自定义图标',
      description: '为节点添加自定义图标',
      code: `import { Icon } from 'land-design';

<Timeline
  items={[
    { title: '下单', icon: <Icon name="shopping-cart" /> },
    { title: '付款', icon: <Icon name="credit-card" /> },
    { title: '发货', icon: <Icon name="truck" /> },
    { title: '完成', icon: <Icon name="check-circle" /> }
  ]}
/>`
    },
    {
      title: '交替显示',
      description: '内容左右交替展示',
      code: `<Timeline
  mode="alternate"
  items={[
    { title: '事件1', subTitle: '2024-01', desc: '描述1' },
    { title: '事件2', subTitle: '2024-02', desc: '描述2' },
    { title: '事件3', subTitle: '2024-03', desc: '描述3' },
    { title: '事件4', subTitle: '2024-04', desc: '描述4' }
  ]}
/>`
    },
    {
      title: '水平时间线',
      description: '水平方向的时间线',
      code: `<Timeline
  direction="horizontal"
  items={[
    { title: '步骤1' },
    { title: '步骤2' },
    { title: '步骤3' },
    { title: '步骤4' }
  ]}
/>`
    },
    {
      title: '加载状态',
      description: '显示 pending 加载状态',
      code: `<Timeline
  pending="加载中..."
  items={[
    { title: '已完成1' },
    { title: '已完成2' },
    { title: '已完成3' }
  ]}
/>`
    },
    {
      title: '倒序显示',
      description: '倒序展示时间线',
      code: `<Timeline
  reverse
  items={[
    { title: '最新事件', subTitle: '2024-01-03' },
    { title: '较早事件', subTitle: '2024-01-02' },
    { title: '最早事件', subTitle: '2024-01-01' }
  ]}
/>`
    },
    {
      title: '自定义线条样式',
      description: '自定义连接线的样式',
      code: `<Timeline
  lineType="dashed"
  lineColor="#1890ff"
  lineWidth={2}
  dotSize={12}
  items={[
    { title: '事件1' },
    { title: '事件2' },
    { title: '事件3' }
  ]}
/>`
    },
    {
      title: '点击事件',
      description: '响应项的点击事件',
      code: `<Timeline
  onItemClick={(item, index) => {
    console.log('点击了:', item.title, '索引:', index);
  }}
  items={[
    { title: '可点击项1' },
    { title: '可点击项2' },
    { title: '可点击项3' }
  ]}
/>`
    }
  ],
  
  // 相关组件
  relatedComponents: ['Steps', 'Progress', 'List'],
  
  // 使用注意事项
  notes: [
    'items 和 children 二选一，同时存在时 items 优先',
    'pending 可以是 boolean 或 ReactNode，用于显示加载中状态',
    'reverse 会倒序显示所有项，不影响原始数据顺序',
    'mode="alternate" 在水平方向时内容在上下交替显示',
    'color 属性支持预设值和自定义颜色字符串',
    'direction="horizontal" 时需要注意容器宽度'
  ],
  
  // 版本信息
  version: '1.0.0',
  
  // 更新日志
  changelog: [
    { version: '1.0.0', date: '2024-01-01', description: '初始版本' }
  ]
};

export default TimelineMeta;
