# Watermark 水印组件

一个功能强大的水印组件，支持文本和图片水印，具有丰富的自定义选项和交互功能。

## 特性

- 🎨 支持文本和图片水印
- 🔧 丰富的自定义配置选项
- 🖱️ 支持水印拖拽移动
- ❌ 支持水印删除功能
- 📱 响应式设计，自动适应容器大小
- 🎭 多种动画效果
- ⚡ 高性能渲染
- 🛡️ 内存安全，已修复内存泄露问题

## 内存泄露修复

### 修复内容

1. **ResizeObserver 内存管理优化**
   - 使用 `useRef` 管理 ResizeObserver 实例
   - 确保组件卸载时正确清理观察器
   - 避免重复创建观察器实例

2. **定时器内存管理**
   - 使用 `useRef` 管理定时器引用
   - 组件卸载时自动清理定时器
   - 防止定时器泄露

3. **性能优化**
   - 使用 `useMemo` 缓存水印数组计算
   - 使用 `useCallback` 优化函数引用
   - 减少不必要的重新渲染

### 最佳实践

```tsx
// ✅ 正确使用 - 组件会自动管理内存
<Watermark content="动态内容" />

// ✅ 正确使用 - 定时器会自动清理
const [time, setTime] = useState(new Date());
useEffect(() => {
  const timer = setInterval(() => setTime(new Date()), 1000);
  return () => clearInterval(timer);
}, []);

// ❌ 避免这样做 - 可能导致内存泄露
const timer = setInterval(() => {}, 1000); // 没有清理
```

## 基础用法

```tsx
import Watermark from '@land-design/watermark';

// 基础文本水印
<Watermark content="Land Design" />

// 图片水印
<Watermark url="/path/to/image.png" />

// 带内容的水印
<Watermark content="机密文件">
  <div>你的内容</div>
</Watermark>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 水印覆盖的内容 | ReactNode | - |
| content | 水印文本内容 | ReactNode \| string | - |
| url | 图片水印URL | string | - |
| width | 水印宽度 | number | 120 |
| height | 水印高度 | number | 64 |
| gap | 水印间距 [x, y] | [number, number] | [212, 212] |
| offset | 水印偏移量 [x, y] | [number, number] | [212, 212] |
| rotate | 旋转角度 | number | -22 |
| opacity | 透明度 | number | 0.15 |
| fontSize | 字体大小 | number | 16 |
| fontColor | 字体颜色 | string | 'rgba(0, 0, 0, 0.15)' |
| fontWeight | 字体粗细 | string \| number | 'normal' |
| fontFamily | 字体族 | string | 'sans-serif' |
| zIndex | 层级 | number | 9 |
| movable | 是否可移动 | boolean | false |
| removable | 是否可删除 | boolean | false |
| repeat | 重复模式 | 'repeat' \| 'space' | 'repeat' |
| style | 自定义样式 | CSSProperties | - |
| className | 自定义类名 | string | - |

## 示例

### 基础文本水印

```tsx
<Watermark content="Land Design" />
```

### 自定义样式水印

```tsx
<Watermark 
  content="机密文件" 
  fontSize={20}
  fontColor="rgba(255, 0, 0, 0.3)"
  rotate={-15}
  opacity={0.3}
/>
```

### 动态内容水印

```tsx
const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

<Watermark 
  content={`时间: ${currentTime}`}
  fontSize={14}
  fontColor="rgba(0, 0, 255, 0.2)"
  gap={[150, 150]}
/>
```

### 可移动水印

```tsx
<Watermark 
  content="可拖拽" 
  movable={true}
  fontSize={18}
  fontColor="rgba(0, 128, 0, 0.25)"
/>
```

### 可删除水印

```tsx
<Watermark 
  content="点击删除" 
  removable={true}
  fontSize={16}
  fontColor="rgba(255, 165, 0, 0.3)"
/>
```

### 复杂内容水印

```tsx
<Watermark 
  content={
    <div style={{ textAlign: 'center' }}>
      <div>Land Design</div>
      <div style={{ fontSize: '12px', marginTop: '4px' }}>UI Component Library</div>
    </div>
  }
  fontSize={16}
  fontColor="rgba(128, 0, 128, 0.2)"
  width={150}
  height={80}
/>
```

### 不同重复模式

```tsx
// 重复模式（默认）
<Watermark content="重复模式" repeat="repeat" />

// 间距模式
<Watermark content="间距模式" repeat="space" />
```

## 内存测试

组件提供了内存泄露测试工具：

```tsx
import MemoryLeakTest from './MemoryLeakTest';

// 在开发环境中使用
<MemoryLeakTest />
```

测试工具会：
- 频繁挂载/卸载组件
- 动态更新水印内容
- 监控内存使用情况

## 注意事项

1. 当 `content` 和 `url` 同时存在时，优先显示图片水印
2. `movable` 和 `removable` 功能会增加水印的交互性，但可能影响性能
3. 水印会自动适应容器大小变化
4. 建议在生产环境中谨慎使用可移动和可删除功能，以免影响水印的防护效果
5. 组件已优化内存管理，无需手动清理资源

## 设计理念

水印组件设计遵循以下原则：

- **简洁易用**: 提供合理的默认值，开箱即用
- **高度可定制**: 支持丰富的配置选项满足不同需求
- **性能优化**: 使用 ResizeObserver 和 useMemo 等优化技术
- **内存安全**: 自动管理资源，防止内存泄露
- **交互友好**: 支持拖拽和删除等交互功能
- **响应式**: 自动适应容器大小变化 