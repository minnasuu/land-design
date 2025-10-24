# 组件生成器使用说明

## 概述

Land Design 组件生成器是一个自动化工具，用于快速创建标准化的 React 组件。它会根据项目规范自动生成组件的所有必要文件，并自动更新组件文档配置。

## 新特性 ✨

- ✅ **自动更新 mock.tsx**：自动添加组件导入和配置到文档系统
- ✅ **组件分类**：支持选择组件类别（通用型、导航型、输入型等）
- ✅ **Pro 组件支持**：支持创建 pro-packages 下的高级组件
- ✅ **自定义信息**：可以设置中文名称和组件描述

## 使用方法

### 1. 交互式方式（推荐）

```bash
# 进入交互式模式
pnpm run new
# 或
node scripts/create-component.js
```

交互式流程：
1. 输入组件名称（支持 kebab-case、camelCase、PascalCase）
2. 选择组件类别（1-10）
3. 输入中文名称（可选）
4. 输入组件描述（可选）
5. 确认创建

### 2. 命令行快速创建

```bash
# 格式：pnpm run new <组件名> [类别编号] [中文名] [描述]
pnpm run new MyButton 1 "自定义按钮" "这是一个自定义按钮组件"

# 只指定名称和类别
pnpm run new MyNavBar 2

# 创建 Pro 组件
pnpm run new SuperInput 8 "超级输入框" "带高级功能的输入框"
```

## 组件类别

| 编号 | 类别名称 | 类型 | 说明 |
|------|---------|------|------|
| 1 | 通用型 | packages | 基础通用组件 |
| 2 | 导航型 | packages | 导航相关组件 |
| 3 | 数据输入型 | packages | 表单输入组件 |
| 4 | 数据展示型 | packages | 数据展示组件 |
| 5 | 反馈型 | packages | 用户反馈组件 |
| 6 | 文字型 | packages | 文本相关组件 |
| 7 | 其他 | packages | 其他组件 |
| 8 | Pro-输入型 | pro-packages | 高级输入组件 |
| 9 | Pro-展示型 | pro-packages | 高级展示组件 |
| 10 | Pro-布局型 | pro-packages | 高级布局组件 |

## 生成的文件结构

### packages 组件（类别 1-7）

```
packages/ComponentName/
├── index.tsx      # 主组件文件
├── props.ts       # 属性类型定义
├── index.scss     # 样式文件
└── Example.tsx    # 示例文件
```

### pro-packages 组件（类别 8-10）

```
pro-packages/ComponentName/
├── index.tsx      # 主组件文件
├── props.ts       # 属性类型定义
├── index.scss     # 样式文件
└── Example.tsx    # 示例文件
```

## 自动更新 mock.tsx

脚本会自动在 `example/mock.tsx` 中：

1. **添加导入语句**：
   ```tsx
   import ComponentNameExample from "../packages/ComponentName/Example";
   import ComponentName from "../packages/ComponentName";
   ```

2. **添加组件配置**（在对应类别的数组中）：
   ```tsx
   {
     id: "component-name",
     en: "ComponentName",
     zh: "组件中文名",
     desc: "组件描述",
     anchors: [
       { key: "basic-usage", title: "基础用法" },
     ],
     example: <ComponentNameExample />,
     demo: <ComponentName>示例内容</ComponentName>,
   }
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

### 必需步骤

1. **导出组件**：在 `packages/index.tsx` 或 `pro-packages/index.tsx` 中添加新组件的导出
   ```tsx
   export { default as MyComponent } from './MyComponent';
   ```

2. **完善组件功能**：根据需求修改 `props.ts` 和 `index.tsx`
   - 添加组件特有的 props
   - 实现组件的核心逻辑
   - 添加必要的 hooks 和状态管理

3. **完善样式**：在 `index.scss` 中添加具体样式
   - 遵循项目的样式规范
   - 使用 CSS 变量和主题系统

### 可选步骤

4. **优化文档配置**：在 `example/mock.tsx` 中优化自动生成的配置
   - 修改 demo 展示内容
   - 添加更多 anchors（章节链接）
   - 添加 props、types 配置
   - 设置 especial 标记（特殊组件）

5. **完善示例**：在 `Example.tsx` 中添加更多使用示例
   - 添加不同使用场景的示例
   - 展示各种 props 的效果
   - 添加最佳实践示例

## 注意事项

- 组件名称只能包含字母、数字、连字符和下划线
- 必须以字母开头
- 不能与现有组件重名
- 建议使用描述性的组件名称

## 完整示例

### 示例 1：创建通用型组件（交互式）

```bash
$ pnpm run new

🚀 Land Design 组件生成器
========================

请输入组件名称: CustomButton

📋 组件信息:
   原始名称: CustomButton
   PascalCase: CustomButton
   kebab-case: custom-button
   camelCase: customButton

📂 请选择组件类别：
   1. 通用型 (packages)
   2. 导航型 (packages)
   ...

请输入类别编号: 1

✅ 已选择类别: 通用型

请输入组件中文名称 (可选，回车跳过): 自定义按钮

请输入组件描述 (可选，回车跳过): 一个可高度自定义的按钮组件

📝 组件配置信息:
   中文名称: 自定义按钮
   描述: 一个可高度自定义的按钮组件
   类别: 通用型

确认创建组件？(y/N): y

✅ 创建组件目录: /path/to/packages/CustomButton
✅ 创建文件: index.tsx
✅ 创建文件: props.ts
✅ 创建文件: index.scss
✅ 创建文件: Example.tsx
✅ 已更新 example/mock.tsx 文件

🎉 组件 "CustomButton" 创建成功！
```

### 示例 2：命令行快速创建

```bash
# 创建一个卡片组件（数据展示型）
pnpm run new Card 4 "卡片" "用于展示信息的卡片组件"

# 创建一个表单组件（数据输入型）
pnpm run new FormField 3

# 创建 Pro 高级输入组件
pnpm run new RichTextEditor 8 "富文本编辑器" "支持富文本编辑的高级输入组件"
```

### 生成后的文件位置

生成后，你可以在对应目录下找到所有相关文件：
- 普通组件：`packages/ComponentName/`
- Pro 组件：`pro-packages/ComponentName/`
- 文档配置：`example/mock.tsx`（自动更新）

## 故障排除

### 问题：组件已存在

**错误信息**：
```
❌ 组件 "CustomButton" 已存在！
```

**解决方法**：
- 使用不同的组件名称
- 或手动删除现有组件后重试

### 问题：更新 mock.tsx 失败

**警告信息**：
```
⚠️  更新 mock.tsx 失败: ...
   请手动添加组件到 example/mock.tsx
```

**解决方法**：
- 手动在 `example/mock.tsx` 中添加组件导入和配置
- 参考其他组件的配置格式

### 问题：无效的类别编号

**错误信息**：
```
❌ 无效的类别编号！
```

**解决方法**：
- 使用 1-10 之间的有效类别编号
- 运行 `pnpm run new` 查看可用类别列表

## 相关文档

- 详细使用指南：`scripts/CREATE_COMPONENT_GUIDE.md`
- 组件开发规范：查看项目文档
- 样式规范：参考 `packages/styles/` 目录