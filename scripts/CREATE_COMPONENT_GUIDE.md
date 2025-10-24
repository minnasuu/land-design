# 组件生成器使用指南

## 功能概述

优化后的组件生成器现在支持：

1. ✅ 自动创建组件目录和文件（index.tsx, props.ts, index.scss, Example.tsx）
2. ✅ 自动在 `example/mock.tsx` 中添加组件导入和配置
3. ✅ 支持选择组件类别（通用型、导航型、输入型等）
4. ✅ 支持 packages 和 pro-packages 两种类型
5. ✅ 支持交互式和命令行两种使用方式

## 使用方式

### 方式一：交互式（推荐）

```bash
npm run create-component
```

或者

```bash
node scripts/create-component.js
```

交互式流程会引导你完成：
1. 输入组件名称
2. 选择组件类别
3. 输入中文名称（可选）
4. 输入组件描述（可选）
5. 确认并创建

### 方式二：命令行快速创建

```bash
npm run create-component <组件名> [类别编号] [中文名] [描述]
```

#### 示例

```bash
# 创建一个通用型组件
npm run create-component MyButton 1 "自定义按钮" "这是一个自定义按钮组件"

# 创建一个导航型组件（只指定名称和类别）
npm run create-component MyNavBar 2

# 创建一个 Pro 输入型组件
npm run create-component SuperInput 8 "超级输入框" "带高级功能的输入框"
```

## 组件类别编号

| 编号 | 类别名称 | 类型 | 数组名称 |
|------|---------|------|---------|
| 1 | 通用型 | packages | COMMON_COMPONENTS_DATA |
| 2 | 导航型 | packages | NAV_COMPONENTS_DATA |
| 3 | 数据输入型 | packages | INPUT_COMPONENTS_DATA |
| 4 | 数据展示型 | packages | DISPLAY_COMPONENTS_DATA |
| 5 | 反馈型 | packages | FEEDBACK_COMPONENTS_DATA |
| 6 | 文字型 | packages | TEXT_COMPONENTS_DATA |
| 7 | 其他 | packages | OTHER_COMPONENTS_DATA |
| 8 | Pro-输入型 | pro-packages | PRO_INPUT_COMPONENTS_DATA |
| 9 | Pro-展示型 | pro-packages | PRO_DISPLAY_COMPONENTS_DATA |
| 10 | Pro-布局型 | pro-packages | PRO_LAYOUT_COMPONENTS_DATA |

## 生成的文件结构

### packages 组件（类别 1-7）

```
packages/
  └── MyComponent/
      ├── index.tsx        # 组件主文件
      ├── props.ts         # 组件属性类型定义
      ├── index.scss       # 组件样式
      └── Example.tsx      # 组件示例
```

### pro-packages 组件（类别 8-10）

```
pro-packages/
  └── MyProComponent/
      ├── index.tsx        # 组件主文件
      ├── props.ts         # 组件属性类型定义
      ├── index.scss       # 组件样式
      └── Example.tsx      # 组件示例
```

## 自动更新 mock.tsx

脚本会自动在 `example/mock.tsx` 文件中：

1. **添加导入语句**（在文件顶部）：
   ```tsx
   import MyComponentExample from "../packages/MyComponent/Example";
   import MyComponent from "../packages/MyComponent";
   ```

2. **添加组件配置**（在对应的数据数组中）：
   ```tsx
   {
     id: "my-component",
     en: "MyComponent",
     zh: "自定义组件",
     desc: "自定义组件用于展示内容",
     anchors: [
       { key: "basic-usage", title: "基础用法" },
     ],
     example: <MyComponentExample />,
     demo: <MyComponent>示例内容</MyComponent>,
   }
   ```

## 创建后需要手动完成的步骤

1. ✅ 在 `packages/index.tsx` 或 `pro-packages/index.tsx` 中导出新组件
   ```tsx
   export { default as MyComponent } from './MyComponent';
   ```

2. ✅ 根据需求修改组件的 `props.ts` 和 `index.tsx`

3. ✅ 完善组件的样式和功能

4. ✅ 查看并优化 `example/mock.tsx` 中的组件配置
   - 修改 demo 内容
   - 添加更多 anchors
   - 添加 props 配置等

## 组件命名规范

- **PascalCase**: MyComponent（用于文件名和类名）
- **kebab-case**: my-component（用于 CSS 类名和 id）
- **camelCase**: myComponent（用于变量名）

脚本会自动处理这些转换。

## 常见问题

### Q: 如果组件已存在会怎样？
A: 脚本会检测并提示组件已存在，不会覆盖现有文件。

### Q: 如果更新 mock.tsx 失败会怎样？
A: 脚本会显示警告信息，但不会影响组件文件的创建。你需要手动添加到 mock.tsx。

### Q: 可以修改默认模板吗？
A: 可以，在 `scripts/create-component.js` 中修改 `templates` 对象。

### Q: 支持批量创建吗？
A: 目前不支持，但可以通过脚本多次调用实现。

## 示例：完整的创建流程

```bash
# 1. 运行脚本
npm run create-component

# 2. 输入组件名称
# 请输入组件名称: SuperButton

# 3. 选择类别
# 请输入类别编号: 1

# 4. 输入中文名称
# 请输入组件中文名称: 超级按钮

# 5. 输入描述
# 请输入组件描述: 一个带有超能力的按钮组件

# 6. 确认创建
# 确认创建组件？(y/N): y

# ✅ 组件创建成功！
```

创建完成后：
1. 文件会生成在 `packages/SuperButton/`
2. `example/mock.tsx` 会自动更新
3. 按照提示完成后续手动步骤

## 更新日志

### v2.0.0 (当前版本)
- ✅ 支持自动更新 mock.tsx
- ✅ 支持选择组件类别
- ✅ 支持 pro-packages 组件
- ✅ 支持命令行快速创建
- ✅ 优化交互体验

### v1.0.0
- ✅ 基础组件文件生成
- ✅ 交互式创建

