# 🚀 Land Design 组件生成器

## 简介

Land Design 组件生成器是一个自动化工具，用于快速创建标准化的 React 组件。它遵循项目的组件规范，自动生成所有必要的文件，包括 TypeScript 类型定义、样式文件和示例页面。

## ✨ 特性

- 🎯 **标准化模板**：遵循项目组件规范
- 🔄 **多种命名格式**：支持 kebab-case、camelCase、PascalCase
- 📁 **完整文件结构**：自动生成所有必要文件
- 🎨 **样式模板**：包含基础 SCSS 结构
- 📖 **示例模板**：完整的示例页面模板
- 🛡️ **类型安全**：完整的 TypeScript 类型定义

## 🚀 快速开始

### 安装依赖

确保项目已安装所有依赖：

```bash
pnpm install
```

### 创建组件

```bash
# 方式1：直接指定组件名称（推荐）
pnpm run new MyComponent

# 方式2：交互式创建
pnpm run new
```

## 📝 使用示例

### 示例1：创建按钮组件

```bash
pnpm run new CustomButton
```

生成结果：
```
packages/CustomButton/
├── index.tsx      # 主组件文件
├── props.ts       # 属性类型定义
├── index.scss     # 样式文件
└── Example.tsx    # 示例文件
```

### 示例2：创建卡片组件

```bash
pnpm run new card-item
```

### 示例3：创建表单组件

```bash
pnpm run new FormField
```

## 📋 命名转换规则

| 输入格式 | PascalCase | kebab-case | camelCase |
|---------|------------|------------|-----------|
| my-component | MyComponent | my-component | myComponent |
| myComponent | MyComponent | my-component | myComponent |
| MyComponent | MyComponent | my-component | myComponent |

## 📁 生成的文件说明

### index.tsx
```tsx
import React from 'react';
import './index.scss';
import { ComponentNameProps } from './props';

const ComponentName: React.FC<ComponentNameProps> = ({
  className = "",
  style,
  children,
  ...props
}) => {
  return (
    <div 
      className={`land-component-name ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default ComponentName;
```

### props.ts
```tsx
import React, { CSSProperties } from 'react';

/**
 * ComponentName组件属性类型定义
 */

export interface ComponentNameProps {
  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;

  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义组件外观
   */
  style?: CSSProperties;

  /** 
   * 子元素
   * 可以传入React节点作为组件内容
   */
  children?: React.ReactNode;
}
```

### index.scss
```scss
.land-component-name {
  // 基础样式
  display: block;
  
  // 自定义样式可以在这里添加
}
```

### Example.tsx
包含完整的示例页面模板，支持：
- 基础用法展示
- 属性表格
- 多种使用场景
- 代码操作容器

## 🔧 后续步骤

组件生成后，需要手动完成以下步骤：

### 1. 导出组件
在 `packages/index.tsx` 中添加：
```tsx
export { default as ComponentName } from './ComponentName';
```

### 2. 添加路由
在 `example/App.tsx` 中添加路由：
```tsx
{
  path: '/component-name',
  element: <ComponentNameExample />
}
```

### 3. 完善功能
- 修改 `props.ts` 添加具体属性
- 更新 `index.tsx` 实现组件逻辑
- 在 `index.scss` 中添加样式

### 4. 完善示例
在 `Example.tsx` 中添加更多使用示例和场景

## ⚠️ 注意事项

- 组件名称只能包含字母、数字、连字符和下划线
- 必须以字母开头
- 不能与现有组件重名
- 建议使用描述性的组件名称

## 🎯 最佳实践

1. **命名规范**：使用描述性的组件名称，如 `DataTable`、`SearchInput`
2. **属性设计**：在 `props.ts` 中定义清晰的属性接口
3. **样式组织**：在 `index.scss` 中使用 BEM 命名规范
4. **示例完整**：在 `Example.tsx` 中提供多种使用场景

## 🐛 故障排除

### 组件已存在
```
❌ 组件 "ComponentName" 已存在！
```
**解决方案**：使用不同的组件名称

### 无效的组件名称
```
❌ 组件名称格式不正确！
```
**解决方案**：确保名称只包含字母、数字、连字符和下划线，且以字母开头

## 📚 相关文档

- [组件开发规范](./STYLE_USAGE.md)
- [样式使用指南](./STYLE_USAGE.md)
- [脚本使用说明](./scripts/README.md)

---

🎉 现在你可以使用 `pnpm run new` 快速创建组件了！
