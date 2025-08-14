# Land Design 使用指南

## 安装

```bash
npm install @suminhan/land-design
# 或
yarn add @suminhan/land-design
# 或
pnpm add @suminhan/land-design
```

## 重要提示

### React 版本要求
- 支持 React 18+ 和 React 19
- 确保你的项目已经安装了 React 和 ReactDOM

### 避免版本冲突
这个包使用 `peerDependencies` 来避免与你的项目产生 React 版本冲突。请确保：

1. **不要**在你的项目中安装多个版本的 React
2. **不要**在同一个项目中混合使用 React 18 和 React 19
3. 确保 React 和 ReactDOM 版本匹配

## 使用方法

### 基本导入

```tsx
import React from 'react';
import { LandButton, LandInput, LandAlert } from '@suminhan/land-design';

function App() {
  return (
    <div>
      <LandButton>点击我</LandButton>
      <LandInput placeholder="请输入内容" />
      <LandAlert type="info" title="提示信息" />
    </div>
  </div>
  );
}
```

### 按需导入（推荐）

```tsx
import React from 'react';
import LandButton from '@suminhan/land-design/lib/land-design/packages/Button';
import LandInput from '@suminhan/land-design/lib/land-design/packages/Input';

function App() {
  return (
    <div>
      <LandButton>按钮</LandButton>
      <LandInput placeholder="输入框" />
    </div>
  );
}
```

## 常见问题解决

### 1. "Cannot read properties of undefined (reading 'ReactCurrentDispatcher')" 错误

**原因**: React 实例没有正确初始化或存在版本冲突

**解决方案**:
1. 确保 React 在 Land Design 之前加载
2. 检查是否有多个 React 版本
3. 使用按需导入方式

```tsx
// ❌ 错误方式 - 可能导致版本冲突
import { LandButton } from '@suminhan/land-design';

// ✅ 正确方式 - 按需导入
import LandButton from '@suminhan/land-design/lib/land-design/packages/Button';
```

### 2. TypeScript 声明文件找不到

**解决方案**:
1. 确保安装了最新版本
2. 检查 `tsconfig.json` 中的类型解析配置
3. 重启 TypeScript 服务

### 3. 样式文件未加载

**解决方案**:
```tsx
// 导入样式文件
import '@suminhan/land-design/lib/style.css';
```

## 最佳实践

### 1. 使用按需导入
```tsx
// 推荐：按需导入，减少包体积
import LandButton from '@suminhan/land-design/lib/land-design/packages/Button';
import LandInput from '@suminhan/land-design/lib/land-design/packages/Input';

// 不推荐：全量导入，增加包体积
import { LandButton, LandInput } from '@suminhan/land-design';
```

### 2. 确保 React 版本一致性
```json
// package.json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "peerDependencies": {
    "react": ">=18.0.0",
    "react-dom": ">=18.0.0"
  }
}
```

### 3. 使用 TypeScript
```tsx
import type { ButtonProps } from '@suminhan/land-design/lib/land-design/packages/Button/props';

interface MyButtonProps extends ButtonProps {
  customProp?: string;
}
```

## 支持的功能

### React 19 兼容性
- 支持 React 19 的新特性
- 自动检测 React 版本
- Canvas API 兼容性处理

### 组件列表
- 基础组件：Button, Input, Alert, Dialog 等
- 布局组件：Layout, Grid, Flex 等
- 数据展示：Table, Pagination, Calendar 等
- 反馈组件：Message, Notification, Loading 等

## 技术支持

如果遇到问题，请：

1. 检查 React 版本兼容性
2. 查看控制台错误信息
3. 尝试使用按需导入方式
4. 提交 Issue 到 GitHub 仓库

## 更新日志

- v0.0.85+: 修复 React 19 兼容性问题
- v0.0.84+: 修复 TypeScript 声明文件问题
- v0.0.83+: 修复 Canvas API 兼容性问题
