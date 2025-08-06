# 组件示例代码功能

## 概述

这个项目添加了代码复制和展示功能，让用户可以方便地查看和复制组件的源代码。

## 功能特性

### 1. 代码复制功能
- 点击复制按钮可以将组件的完整代码复制到剪贴板
- 支持带格式的代码字符串
- 包含imports和完整的组件定义

### 2. 代码展示功能
- 点击代码按钮可以打开代码展示弹窗
- 支持语法高亮显示
- 弹窗内也可以复制代码
- 响应式设计，适配不同屏幕尺寸

### 3. 滚动到视区功能
- Menu组件新增`scrollToView`属性
- 当选中项切换时，自动将选中项滚动到视区中心
- 支持水平和垂直方向的滚动

## 使用方法

### 代码复制和展示

```tsx
import { useCodeDisplay } from '../hooks/useCodeDisplay';
import CodeOperationContainer from '../CodeOperationContainer';
import CodeDisplay from '../components/CodeDisplay';

export default function Example() {
  const { showCode, currentCode, currentTitle, handleCopy, handleShowCode, handleClose } = useCodeDisplay();

  return (
    <div>
      <CodeOperationContainer
        onCopy={() => handleCopy('ComponentName')}
        onCode={() => handleShowCode('ComponentName', '组件代码标题')}
      >
        {/* 你的组件内容 */}
      </CodeOperationContainer>

      {showCode && (
        <CodeDisplay
          code={currentCode}
          title={currentTitle}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
```

### 滚动到视区功能

```tsx
import Menu from '../packages/Menu';

// 水平滚动
<Menu
  data={menuData}
  active={activeKey}
  onChange={handleChange}
  scrollToView={true}
/>

// 垂直滚动
<Menu
  data={menuData}
  active={activeKey}
  direction="column"
  scrollToView={true}
/>
```

## 工具函数

### useCodeDisplay Hook
提供代码展示相关的状态和方法：
- `showCode`: 是否显示代码弹窗
- `currentCode`: 当前显示的代码
- `currentTitle`: 当前显示的标题
- `handleCopy(componentName)`: 复制指定组件的代码
- `handleShowCode(componentName, title?)`: 显示指定组件的代码
- `handleClose()`: 关闭代码弹窗

### 代码生成器
- `getComponentCodeByName(componentName)`: 根据组件名称获取代码
- `addComponentCode(componentName, code)`: 添加新的组件代码
- `getAvailableComponentNames()`: 获取所有可用的组件名称

## 组件代码映射

在 `example/utils/fileCodeGenerator.ts` 中维护组件代码映射：

```tsx
export const componentCodeMap: Record<string, string> = {
  'ComponentName': `import React from 'react';
// 组件代码...
`,
};
```

## 样式定制

### CodeDisplay 组件样式
可以通过styled-components定制样式：
- 弹窗大小和位置
- 代码字体和颜色
- 按钮样式
- 背景遮罩

### Menu 滚动样式
当启用`scrollToView`时，Menu组件会自动添加：
- `overflow: auto`
- `scroll-behavior: smooth`

## 注意事项

1. 代码复制功能依赖`navigator.clipboard.writeText()`，需要HTTPS环境
2. 组件代码映射需要手动维护，确保代码与实际组件一致
3. 滚动到视区功能需要容器有固定尺寸和overflow设置
4. 代码展示弹窗使用固定定位，确保在正确的层级显示

## 扩展

要添加新的组件代码支持：

1. 在`fileCodeGenerator.ts`中添加组件代码映射
2. 在示例组件中使用`useCodeDisplay` Hook
3. 配置`CodeOperationContainer`的复制和展示回调
4. 添加`CodeDisplay`组件到JSX中 