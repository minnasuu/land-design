# Pagination 分页组件

一个功能完整、交互友好的分页组件，支持多种分页模式和智能省略显示。

## 功能特性

### 🎯 核心功能
- **基础分页**：支持页码点击、左右箭头导航
- **智能省略**：当页码过多时自动显示省略号，保持界面简洁
- **快速跳转**：双箭头支持快速跳转到前后页组
- **输入跳转**：支持直接输入页码快速跳转（自动切换）
- **总页数显示**：可选的"共X页"信息显示

### 🚀 优化亮点
- **统一事件处理**：所有点击事件使用统一的事件处理函数，避免重复代码
- **智能页码计算**：根据当前页码动态计算显示的页码范围，确保当前页始终可见
- **边界条件处理**：完善的边界条件处理，避免无效操作
- **性能优化**：使用 `useCallback` 和 `useMemo` 优化渲染性能
- **用户体验**：输入框支持实时切换，无需额外确认操作

## 使用方法

### 基础用法

```tsx
import Pagination from '@land-design/pagination';

function App() {
  const [current, setCurrent] = useState(1);
  
  return (
    <Pagination
      total={24}
      current={current}
      pageSize={5}
      onChange={setCurrent}
    />
  );
}
```

### 显示总页数

```tsx
<Pagination
  total={24}
  current={current}
  pageSize={5}
  showTotal
  onChange={setCurrent}
/>
```

### 输入框跳转

```tsx
<Pagination
  total={24}
  current={current}
  pageSize={5}
  showInput
  onChange={setCurrent}
/>
```

### 完整功能

```tsx
<Pagination
  total={100}
  current={current}
  pageSize={5}
  showTotal
  showInput
  onChange={setCurrent}
/>
```

## API 参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `current` | `number` | `1` | 当前页码 |
| `total` | `number` | `1` | 总页数 |
| `pageSize` | `1 \| 5 \| 10 \| 15 \| 20` | `1` | 每页显示数量（影响省略逻辑） |
| `showTotal` | `boolean` | `false` | 是否显示总页数 |
| `showInput` | `boolean` | `false` | 是否显示页码输入框 |
| `onChange` | `(current: number) => void` | - | 页码变化回调 |
| `style` | `CSSProperties` | - | 自定义样式 |
| `className` | `string` | `''` | 自定义类名 |

## 交互说明

### 页码点击
- 点击任意页码直接跳转到对应页面
- 第一页和最后一页始终显示
- 中间页码根据当前页智能显示

### 箭头导航
- **左箭头**：跳转到上一页
- **右箭头**：跳转到下一页
- 在边界时箭头会被禁用

### 双箭头跳转
- **左双箭头**：快速跳转到前一组页码
- **右双箭头**：快速跳转到后一组页码
- 智能计算跳转目标，确保页面连续性

### 输入框跳转
- 输入页码后自动切换到对应页面
- 支持数字验证，超出范围会被限制
- 实时更新，无需额外确认

## 样式定制

组件使用 BEM 命名规范，主要类名：

```scss
.land-pagination {
  // 容器样式
  
  &-total {
    // 总页数样式
  }
  
  &-arrow-prev,
  &-arrow-next {
    // 左右箭头样式
    
    &.disabled {
      // 禁用状态
    }
  }
  
  &-page {
    // 页码容器
    
    .land-pagination-num-item {
      // 页码样式
      
      &.active {
        // 激活状态
      }
    }
  }
  
  &-input {
    // 输入框容器
  }
}
```

## 最佳实践

1. **合理设置 pageSize**：根据实际需求设置，影响省略逻辑的显示效果
2. **处理边界情况**：确保 `current` 不超过 `total` 范围
3. **响应式设计**：在不同屏幕尺寸下测试分页组件的显示效果
4. **无障碍支持**：为分页组件添加适当的 ARIA 标签

## 更新日志

### v2.0.0 (优化版本)
- ✨ 重构事件处理逻辑，统一使用 `useCallback` 优化性能
- ✨ 优化页码计算算法，确保当前页始终可见
- ✨ 完善输入框功能，支持自动切换页面
- ✨ 改进边界条件处理，提升用户体验
- 🐛 修复双箭头跳转逻辑问题
- 🎨 优化代码结构，提升可维护性 