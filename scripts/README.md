# 组件生成器使用说明

## 概述

Land Design 组件生成器是一个自动化工具，用于快速创建标准化的 React 组件。它会根据项目规范自动生成组件的所有必要文件。

## 使用方法

### 1. 命令行方式（推荐）

```bash
# 直接指定组件名称
pnpm run new MyComponent

# 支持多种命名格式
pnpm run new my-component    # kebab-case
pnpm run new myComponent     # camelCase  
pnpm run new MyComponent     # PascalCase
```

### 2. 交互式方式

```bash
# 不指定参数，进入交互式模式
pnpm run new
```

然后按提示输入组件名称。

## 生成的文件结构

每个组件会生成以下文件：

```
packages/ComponentName/
├── index.tsx      # 主组件文件
├── props.ts       # 属性类型定义
├── index.scss     # 样式文件
└── Example.tsx    # 示例文件
```

## 文件模板说明

### index.tsx
- 包含基础的 React 组件结构
- 支持 className、style、children 等基础属性
- 使用 land-{component-name} 作为 CSS 类名前缀

### props.ts
- 定义组件的 TypeScript 类型
- 包含详细的 JSDoc 注释
- 提供基础属性接口

### index.scss
- 基础的 SCSS 样式文件
- 使用 land-{component-name} 作为根类名

### Example.tsx
- 完整的示例页面模板
- 包含基础用法展示
- 包含属性表格
- 使用项目的示例组件布局

## 命名转换规则

输入格式会自动转换为标准格式：

| 输入格式 | PascalCase | kebab-case | camelCase |
|---------|------------|------------|-----------|
| my-component | MyComponent | my-component | myComponent |
| myComponent | MyComponent | my-component | myComponent |
| MyComponent | MyComponent | my-component | myComponent |

## 后续步骤

组件生成后，需要手动完成以下步骤：

1. **导出组件**：在 `packages/index.tsx` 中添加新组件的导出
2. **添加路由**：在 `example/App.tsx` 中添加组件路由
3. **完善功能**：根据需求修改 `props.ts` 和 `index.tsx`
4. **完善样式**：在 `index.scss` 中添加具体样式
5. **完善示例**：在 `Example.tsx` 中添加更多使用示例

## 注意事项

- 组件名称只能包含字母、数字、连字符和下划线
- 必须以字母开头
- 不能与现有组件重名
- 建议使用描述性的组件名称

## 示例

```bash
# 创建一个按钮组件
pnpm run new CustomButton

# 创建一个卡片组件  
pnpm run new card-item

# 创建一个表单组件
pnpm run new FormField
```

生成后，你可以在 `packages/CustomButton/` 目录下找到所有相关文件。