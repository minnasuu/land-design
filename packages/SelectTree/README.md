# SelectTree 组件优化说明

## 概述

SelectTree 是一个高性能的树形选择器组件，经过全面优化以解决内存泄漏和性能问题。

## 主要优化内容

### 1. 内存泄漏修复

#### 问题
- `useLayoutEffect` 没有依赖数组，导致无限循环
- `useEffect` 依赖项包含状态本身，造成无限更新
- 递归函数没有深度限制，可能导致栈溢出

#### 解决方案
- 为 `useLayoutEffect` 添加正确的依赖数组
- 使用深度比较函数替代直接比较，避免无限循环
- 为所有递归函数添加深度限制（最大20层）

### 2. 性能优化

#### 递归深度限制
```typescript
const MAX_RECURSION_DEPTH = 20;
const MAX_TREE_DEPTH = 50;
const MAX_CHILDREN_COUNT = 1000;
```

#### 防抖和节流
- `handleClick`: 100ms 防抖
- `handleCheckClick`: 200ms 节流

#### 缓存优化
- 使用 `useMemo` 缓存计算结果
- 使用 `useCallback` 缓存事件处理函数
- 限制子节点数量，防止性能问题

### 3. 错误边界

所有关键操作都添加了 try-catch 错误处理：

```typescript
try {
  // 操作逻辑
} catch (error) {
  console.error('SelectTree: Error in operation:', error);
  // 降级处理
}
```

### 4. 工具函数优化

#### 深度比较函数
```typescript
export const deepEqual = (a: any[], b: any[]): boolean => {
  if (a === b) return true;
  if (a.length !== b.length) return false;
  
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  
  return true;
};
```

#### 安全数组操作
```typescript
export const safeArrayOperation = <T>(
  operation: () => T[],
  fallback: T[] = []
): T[] => {
  try {
    return operation();
  } catch (error) {
    console.error('SelectTree: Error in array operation:', error);
    return fallback;
  }
};
```

## 使用方法

### 基础用法

```tsx
import SelectTree from './packages/SelectTree';

const data = [
  {
    key: '1',
    label: '选项1',
    children: [
      {
        key: '1-1',
        label: '选项1-1'
      }
    ]
  }
];

<SelectTree
  data={data}
  placeholder="请选择"
  onChange={(selected, item) => {
    console.log('选中:', selected, item);
  }}
/>
```

### 多选模式

```tsx
<SelectTree
  data={data}
  multiple={true}
  selectedValues={[]}
  onChange={(selectedValues, item) => {
    console.log('多选:', selectedValues, item);
  }}
/>
```

## 性能特性

1. **递归深度限制**: 防止栈溢出
2. **子节点数量限制**: 防止渲染过多节点
3. **防抖节流**: 优化频繁操作
4. **深度比较**: 避免不必要的重新渲染
5. **错误边界**: 优雅降级处理

## 注意事项

1. 树深度建议不超过20层
2. 单个节点的子节点数量建议不超过1000个
3. 大数据量时建议使用虚拟滚动
4. 定期检查控制台是否有性能警告

## 文件结构

```
packages/SelectTree/
├── index.tsx          # 主组件
├── SelectTreeNode.tsx # 节点组件
├── utils.ts           # 工具函数
├── props.ts           # 类型定义
└── index.scss         # 样式文件
```

## 更新日志

### v2.0.0
- 修复内存泄漏问题
- 添加递归深度限制
- 优化性能，添加防抖节流
- 增加错误边界处理
- 重构工具函数 