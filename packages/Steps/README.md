# Steps 步骤条组件

一个功能完整、可访问性良好的步骤条组件，支持水平/垂直布局、键盘导航、响应式设计等特性。

## 功能特性

### ✨ 核心功能
- **多状态支持**: 当前步骤、已完成步骤、默认状态
- **双向布局**: 支持水平和垂直布局
- **交互反馈**: 点击、悬停、焦点状态
- **键盘导航**: 支持 Enter 和 Space 键激活
- **响应式设计**: 移动端自适应布局
- **灵活状态控制**: 支持全局finished数组和单个步骤finished字段

### 🎨 视觉优化
- **平滑动画**: 状态切换和悬停效果
- **自定义样式**: 丰富的 CSS 变量支持
- **高对比度**: 支持高对比度模式
- **减少动画**: 支持用户偏好设置

### ♿ 可访问性
- **ARIA 属性**: 完整的屏幕阅读器支持
- **语义化标签**: 正确的 HTML 结构
- **焦点管理**: 清晰的焦点指示器
- **键盘操作**: 完整的键盘导航支持

## 基础用法

```tsx
import Steps from '@land-design/Steps';

const stepsData = [
  { key: 1, title: '步骤1', desc: '第一步描述' },
  { key: 2, title: '步骤2', desc: '第二步描述' },
  { key: 3, title: '步骤3', desc: '第三步描述' }
];

function MyComponent() {
  const [current, setCurrent] = useState(1);
  const [finished, setFinished] = useState([1]);

  return (
    <Steps
      data={stepsData}
      current={current}
      finished={finished}
      onClick={(item) => setCurrent(item.key)}
    />
  );
}
```

## 使用data中的finished字段

### 方式一：在data中直接设置finished状态

```tsx
const stepsData = [
  { key: 1, title: '步骤1', desc: '第一步描述', finished: true },
  { key: 2, title: '步骤2', desc: '第二步描述', finished: false },
  { key: 3, title: '步骤3', desc: '第三步描述', finished: true }
];

<Steps
  data={stepsData}
  current={2}
  onClick={(item) => setCurrent(item.key)}
  // 当data中有finished字段时，全局finished数组会被忽略
  finished={[1, 3]}
/>
```

### 方式二：混合使用

```tsx
const stepsData = [
  { key: 1, title: '步骤1', desc: '在data中设置finished: true', finished: true },
  { key: 2, title: '步骤2', desc: '在data中未设置finished，使用全局finished数组' },
  { key: 3, title: '步骤3', desc: '在data中设置finished: false', finished: false },
  { key: 4, title: '步骤4', desc: '在data中未设置finished，使用全局finished数组' }
];

<Steps
  data={stepsData}
  current={2}
  finished={[2, 4]} // 步骤2和4通过全局finished数组控制
  onClick={(item) => setCurrent(item.key)}
/>
```

### 优先级说明

1. **最高优先级**: 如果步骤项在 `data` 中设置了 `finished` 字段，则使用该值
2. **次优先级**: 如果步骤项没有 `finished` 字段，则使用全局 `finished` 数组
3. **默认状态**: 如果都不满足，则显示为未完成状态

## API 文档

### StepsProps

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `data` | `StepsItemType[]` | `[]` | 步骤数据数组 |
| `current` | `number \| string` | `data[0].key` | 当前激活的步骤 |
| `finished` | `(number \| string)[]` | `[]` | 已完成的步骤列表（当data中无finished字段时生效） |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | 布局方向 |
| `useDivider` | `boolean` | `true` | 是否显示分割线 |
| `dividerWidth` | `string` | `'32px'` | 分割线宽度 |
| `onClick` | `(item: StepsItemType) => void` | - | 步骤点击回调 |
| `style` | `CSSProperties` | - | 自定义样式 |
| `className` | `string` | - | 自定义类名 |

### StepsItemType

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `key` | `number \| string` | ✅ | 步骤唯一标识 |
| `title` | `string` | - | 步骤标题 |
| `desc` | `string` | - | 步骤描述 |
| `finished` | `boolean` | - | 是否已完成（优先级高于全局finished数组） |

## 布局方向

### 水平布局（默认）
```tsx
<Steps
  data={stepsData}
  direction="horizontal"
  current={current}
  finished={finished}
/>
```

### 垂直布局
```tsx
<Steps
  data={stepsData}
  direction="vertical"
  current={current}
  finished={finished}
/>
```

## 自定义样式

### CSS 变量
组件支持丰富的 CSS 变量自定义：

```scss
.land-steps {
  --land-steps-gap: 16px;                    // 步骤间距
  --land-steps-num-width: 16px;              // 数字圆圈宽度
  --land-steps-num-height: 16px;             // 数字圆圈高度
  --land-steps-num-font-size: 12px;          // 数字字体大小
  --land-steps-title-font-size: 14px;        // 标题字体大小
  --land-steps-desc-font-size: 12px;         // 描述字体大小
  --land-steps-num-active-bg: #1890ff;       // 激活状态背景色
  --land-steps-num-finished-bg: #52c41a;     // 完成状态背景色
}
```

### 内联样式
```tsx
<Steps
  data={stepsData}
  style={{
    '--land-steps-gap': '24px',
    '--land-steps-num-width': '24px',
    '--land-steps-num-height': '24px',
  } as React.CSSProperties}
/>
```

## 状态管理

### 基础状态控制
```tsx
const [current, setCurrent] = useState(1);
const [finished, setFinished] = useState([1]);

const handleStepClick = (item) => {
  setCurrent(item.key);
  // 自动标记之前的步骤为已完成
  const newFinished = stepsData
    .filter(step => step.key < item.key)
    .map(step => step.key);
  setFinished(newFinished);
};
```

### 使用data中finished字段的状态控制
```tsx
const [stepsData, setStepsData] = useState([
  { key: 1, title: '步骤1', desc: '第一步描述', finished: true },
  { key: 2, title: '步骤2', desc: '第二步描述', finished: false },
  { key: 3, title: '步骤3', desc: '第三步描述', finished: false }
]);

const markStepAsFinished = (stepKey) => {
  setStepsData(prev => prev.map(step => 
    step.key === stepKey 
      ? { ...step, finished: true }
      : step
  ));
};

const markStepAsUnfinished = (stepKey) => {
  setStepsData(prev => prev.map(step => 
    step.key === stepKey 
      ? { ...step, finished: false }
      : step
  ));
};
```

### 程序化控制
```tsx
// 下一步
const handleNext = () => {
  const currentIndex = stepsData.findIndex(step => step.key === current);
  if (currentIndex < stepsData.length - 1) {
    const nextStep = stepsData[currentIndex + 1];
    handleStepClick(nextStep);
  }
};

// 上一步
const handlePrev = () => {
  const currentIndex = stepsData.findIndex(step => step.key === current);
  if (currentIndex > 0) {
    const prevStep = stepsData[currentIndex - 1];
    handleStepClick(prevStep);
  }
};

// 完成所有步骤
const handleFinish = () => {
  setFinished(stepsData.map(step => step.key));
  setCurrent(stepsData[stepsData.length - 1].key);
};
```

## 响应式设计

组件在移动端会自动调整为垂直布局：

```scss
@media (max-width: 768px) {
  .land-steps {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--land-steps-mobile-gap, var(--gap-m));
  }
}
```

## 可访问性支持

### 键盘导航
- `Tab`: 在步骤间切换焦点
- `Enter` / `Space`: 激活当前步骤

### 屏幕阅读器
- 正确的 ARIA 标签
- 状态描述
- 步骤计数

### 高对比度模式
```scss
@media (prefers-contrast: high) {
  .land-steps-item {
    border: 1px solid var(--color-gray-8);
  }
}
```

### 减少动画
```scss
@media (prefers-reduced-motion: reduce) {
  .land-steps-item {
    transition: none;
    animation: none;
  }
}
```

## 性能优化

- **React.memo**: 步骤项组件使用 memo 优化
- **useCallback**: 事件处理函数使用 callback 优化
- **useMemo**: 计算属性使用 memo 优化
- **条件渲染**: 避免不必要的渲染

## 错误处理

- 数据验证：自动过滤无效数据
- 边界情况：处理空数据、无效当前步骤等
- 降级处理：提供合理的默认值

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 更新日志

### v2.1.0 (最新版本)
- ✨ 新增data中finished字段支持
- ✨ 支持混合使用全局finished数组和单个步骤finished字段
- ✨ 优化状态优先级逻辑
- 📚 更新文档和示例

### v2.0.0 (优化版本)
- ✨ 新增可访问性支持
- ✨ 新增响应式设计
- ✨ 新增性能优化
- ✨ 新增错误处理
- �� 优化视觉设计
- 🔧 重构组件结构 