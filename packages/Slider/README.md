# Slider 滑块组件

一个功能完整的滑块组件，支持单值选择、范围选择、气泡提示、自定义格式化等功能。

## 功能特性

- ✅ 单值滑块和范围滑块
- ✅ 气泡提示显示当前值
- ✅ 自定义气泡位置（上方/下方）
- ✅ 自定义气泡内容格式化
- ✅ 支持设置区间和步长
- ✅ 轨道点击快速定位
- ✅ 拖拽开始/结束事件回调
- ✅ 前缀和后缀显示
- ✅ 背景分割线
- ✅ 响应式设计
- ✅ 平滑动画效果

## 基础用法

### 单值滑块

```tsx
import Slider from '@/packages/Slider';

const [value, setValue] = useState(50);

<Slider
  value={value}
  onChange={(val) => setValue(val as number)}
  min={0}
  max={100}
  step={5}
/>
```

### 范围滑块

```tsx
const [rangeValue, setRangeValue] = useState<[number, number]>([20, 80]);

<Slider
  range={true}
  value={rangeValue}
  onChange={(val) => setRangeValue(val as [number, number])}
  min={0}
  max={100}
  step={5}
/>
```

### 带气泡提示的滑块

```tsx
<Slider
  value={value}
  onChange={(val) => setValue(val as number)}
  showTooltip={true}
  tooltipPlacement="top"
  min={0}
  max={100}
/>
```

### 自定义气泡格式

```tsx
// 价格格式化
const priceFormatter = (value: number) => `¥${value}`;

<Slider
  value={value}
  onChange={(val) => setValue(val as number)}
  showTooltip={true}
  tooltipFormatter={priceFormatter}
  min={0}
  max={1000}
/>

// 百分比格式化
const percentageFormatter = (value: number) => `${value}%`;

<Slider
  value={value}
  onChange={(val) => setValue(val as number)}
  showTooltip={true}
  tooltipFormatter={percentageFormatter}
  tooltipPlacement="bottom"
  min={0}
  max={100}
/>
```

## API 参数

### SliderProps

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value | 当前值，支持单值或范围值 | `number \| [number, number]` | `0` |
| onChange | 值变化回调 | `(value: number \| [number, number]) => void` | - |
| min | 最小值 | `number` | `0` |
| max | 最大值 | `number` | `100` |
| step | 步长 | `number` | `1` |
| range | 是否为范围选择器 | `boolean` | `false` |
| height | 滑块高度 | `number` | `12` |
| showTooltip | 是否显示气泡提示 | `boolean` | `false` |
| tooltipPlacement | 气泡位置 | `'top' \| 'bottom'` | `'top'` |
| tooltipFormatter | 气泡内容格式化函数 | `(value: number) => string` | - |
| prefix | 前缀内容 | `React.ReactNode` | - |
| suffix | 后缀内容 | `React.ReactNode` | - |
| useDivider | 是否显示背景分割线 | `boolean` | `false` |
| onStart | 开始拖拽回调 | `() => void` | - |
| onEnd | 结束拖拽回调 | `() => void` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |

## 使用示例

### 价格范围选择

```tsx
const [priceRange, setPriceRange] = useState<[number, number]>([100, 500]);

const priceFormatter = (value: number) => `¥${value}`;

<Slider
  range={true}
  value={priceRange}
  onChange={(val) => setPriceRange(val as [number, number])}
  min={0}
  max={1000}
  step={50}
  showTooltip={true}
  tooltipFormatter={priceFormatter}
  prefix="价格"
  suffix="元"
/>
```

### 带分割线的滑块

```tsx
<Slider
  value={value}
  onChange={(val) => setValue(val as number)}
  min={0}
  max={100}
  step={10}
  useDivider={true}
  height={20}
  showTooltip={true}
/>
```

### 事件回调

```tsx
<Slider
  value={value}
  onChange={(val) => setValue(val as number)}
  onStart={() => console.log('开始拖拽')}
  onEnd={() => console.log('结束拖拽')}
  showTooltip={true}
/>
```

## 样式定制

组件使用CSS变量进行样式定制，主要变量包括：

- `--color-primary-6`: 激活状态颜色
- `--color-gray-1`: 滑块颜色
- `--color-gray-3`: 轨道背景色
- `--color-gray-9`: 气泡背景色

可以通过CSS变量或自定义类名来修改样式。

## 注意事项

1. 当 `range={true` 时，`value` 必须是数组格式 `[min, max]`
2. `step` 值应该能够整除 `max - min`，否则可能出现精度问题
3. 气泡提示在拖拽时会自动显示，鼠标悬停时也会显示
4. 轨道点击会自动选择最近的一个滑块进行移动
5. 范围滑块的两个滑块不能重叠，会自动限制在合理范围内 