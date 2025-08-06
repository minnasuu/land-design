# React 19 升级指南

## 概述

本项目已成功升级到 React 19，同时保持对 React 18 的完全兼容性。

## 主要变更

### 1. 依赖更新

- **React**: `^18.2.0` → `^19.0.0`
- **React DOM**: `^18.2.0` → `^19.0.0`
- **TypeScript**: `^4.6.4` → `^5.4.2`
- **Vite**: `^3.2.3` → `^5.4.10`
- **@vitejs/plugin-react**: `^2.2.0` → `^4.2.1`
- **@testing-library/react**: `^13.4.0` → `^14.2.1`

### 2. 新增功能

#### React 19 新特性支持
- 支持 `use()` hook（实验性）
- 改进的并发特性
- 更好的 Suspense 支持
- 优化的渲染性能

#### 兼容性工具
新增了 `packages/utils/react-compatibility.ts` 文件，提供以下工具：

```typescript
import {
  getReactVersion,           // 获取当前React版本
  supportsReact19Features,   // 检查是否支持React 19特性
  createCompatibleComponent, // 创建兼容性组件
  conditionalRender,         // 条件渲染
  createSafeState,          // 安全的useState
  createSafeEffect,         // 安全的useEffect
  createSafeCallback,       // 安全的useCallback
  createSafeMemo,           // 安全的useMemo
  createSafeRef,            // 安全的useRef
  REACT_VERSION,            // 当前React版本常量
  IS_REACT_19,              // 是否为React 19的布尔值
  type SafeReactNode,       // 安全的React节点类型
} from '@suminhan/land-design';
```

### 3. 配置更新

#### TypeScript 配置
- 启用了更严格的类型检查
- 添加了新的编译选项以支持 React 19

#### Vite 配置
- 更新了 React 插件配置
- 添加了 React 19 特定的优化选项

## 兼容性保证

### React 18 兼容性
- 所有现有组件在 React 18 中继续正常工作
- 没有破坏性变更
- 向后兼容的 API 设计

### React 19 新特性
- 可选使用 React 19 的新特性
- 渐进式升级路径
- 条件性功能启用

## 使用指南

### 检查 React 版本

```typescript
import { getReactVersion, IS_REACT_19 } from '@suminhan/land-design';

console.log('React版本:', getReactVersion()); // '18' 或 '19'
console.log('是否为React 19:', IS_REACT_19); // true 或 false
```

### 条件性功能

```typescript
import { conditionalRender, supportsReact19Features } from '@suminhan/land-design';

// 根据React版本选择不同的实现
const component = conditionalRender(
  <React18Component />,  // React 18 实现
  <React19Component />   // React 19 实现
);

// 或者直接检查
if (supportsReact19Features()) {
  // 使用 React 19 特定功能
} else {
  // 使用 React 18 兼容实现
}
```

### 安全的状态管理

```typescript
import { createSafeState, createSafeEffect } from '@suminhan/land-design';

const MyComponent = () => {
  const [state, setState] = createSafeState(initialValue);
  
  createSafeEffect(() => {
    // 副作用逻辑
  }, [dependencies]);
  
  return <div>{state}</div>;
};
```

## 迁移建议

### 对于现有项目
1. 更新依赖版本
2. 测试所有组件功能
3. 可选：使用新的兼容性工具
4. 可选：启用 React 19 特定功能

### 对于新项目
1. 直接使用 React 19
2. 利用新的并发特性
3. 使用改进的 Suspense 支持

## 注意事项

1. **实验性功能**: `use()` hook 仍处于实验阶段，生产环境使用需谨慎
2. **性能优化**: React 19 提供了更好的性能，但建议进行性能测试
3. **第三方库**: 确保所有第三方库都支持 React 19
4. **测试**: 建议在升级后进行全面的功能测试

## 故障排除

### 常见问题

1. **TypeScript 错误**: 更新到 TypeScript 5.4+ 版本
2. **构建错误**: 检查 Vite 配置是否正确
3. **运行时错误**: 确保所有依赖都兼容 React 19

### 回滚方案

如果需要回滚到 React 18：

```bash
# 安装 React 18
npm install react@^18.2.0 react-dom@^18.2.0

# 更新相关依赖
npm install @vitejs/plugin-react@^2.2.0
npm install typescript@^4.6.4
```

## 总结

本次升级保持了完全的向后兼容性，同时为 React 19 的新特性提供了支持。项目现在可以在 React 18 和 React 19 环境中正常运行，用户可以根据需要选择使用哪个版本。 