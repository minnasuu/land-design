# Figma Dev Mode 代码示例查看指南

## 概述

Land Design 组件库已经配置了 Figma Code Connect，可以在 Figma Dev 模式下查看组件的代码示例。

## 如何在 Figma Dev 模式下查看代码示例

### 1. 启用 Dev Mode

1. 打开 Figma 文件：`https://www.figma.com/design/PisstaAoQkRKPaFMopVgYt/Land-Design-DS`
2. 点击右上角的 "Dev Mode" 按钮启用开发者模式
3. 或者使用快捷键 `Cmd/Ctrl + Shift + D`

### 2. 查看 Button 组件

1. 在 Dev 模式下，选择 Button 组件（节点 ID: `2:9`）
2. 在右侧面板中，您会看到以下信息：
   - **Code** 标签页：显示组件的代码示例
   - **Properties** 标签页：显示可编辑的属性
   - **Inspect** 标签页：显示组件的样式信息

### 3. 代码示例功能

#### 实时代码生成
- 当您修改 Button 组件的属性时，代码会自动更新
- 支持的属性包括：
  - `type`: 按钮类型（text, fill, background, outline, dashed, transparent）
  - `status`: 按钮状态（default, primary, warning, danger, success）
  - `size`: 按钮尺寸（mini, small, default, large）
  - `disabled`: 禁用状态
  - `block`: 块级按钮
  - `bold`: 文字加粗
  - `hoverBold`: 悬停加粗
  - `hoverAnimation`: 悬停动画
  - `activeAnimation`: 点击动画
  - `capsule`: 胶囊形状
  - `text`: 主要文案
  - `subText`: 次要文案
  - `tip`: 提示气泡
  - `className`: 自定义类名

#### 代码复制
- 点击代码示例右上角的复制按钮可以复制代码
- 复制的代码可以直接在您的项目中使用

### 4. 使用示例

#### 基础按钮
```tsx
<Button text="点击我" />
```

#### 主要按钮
```tsx
<Button type="fill" status="primary" text="主要按钮" />
```

#### 危险按钮
```tsx
<Button type="outline" status="danger" text="删除" />
```

#### 大尺寸按钮
```tsx
<Button size="large" text="大按钮" />
```

#### 禁用按钮
```tsx
<Button disabled text="禁用按钮" />
```

#### 块级按钮
```tsx
<Button block text="块级按钮" />
```

#### 胶囊按钮
```tsx
<Button capsule text="胶囊按钮" />
```

## 安装和使用

### 1. 安装包
```bash
npm install @suminhan/land-design
# 或
yarn add @suminhan/land-design
# 或
pnpm add @suminhan/land-design
```

### 2. 导入组件
```tsx
import { Button } from '@suminhan/land-design';
```

### 3. 使用组件
```tsx
function App() {
  return (
    <div>
      <Button text="Hello World" />
      <Button type="fill" status="primary" text="主要按钮" />
    </div>
  );
}
```

## 注意事项

1. **版本要求**：确保使用最新版本的 Land Design（当前版本：0.0.76）
2. **Figma 权限**：确保您有访问 Figma 文件的权限
3. **网络连接**：需要稳定的网络连接来加载代码示例
4. **浏览器兼容性**：建议使用最新版本的 Chrome 或 Firefox

## 故障排除

### 问题：看不到代码示例
**解决方案**：
1. 确保已启用 Dev Mode
2. 刷新页面
3. 检查网络连接
4. 确认选择了正确的组件

### 问题：代码示例不更新
**解决方案**：
1. 确保选择了正确的组件节点
2. 尝试重新选择组件
3. 检查属性面板中的值是否正确

### 问题：复制的代码无法运行
**解决方案**：
1. 确保已正确安装 Land Design 包
2. 检查导入语句是否正确
3. 确认 React 版本兼容性

## 更多信息

- [Figma Dev Mode 官方文档](https://www.figma.com/developers/dev-mode)
- [Figma Code Connect 文档](https://www.figma.com/developers/code-connect)
- [Land Design 组件库文档](https://github.com/suminhan/land-design)

## 支持

如果您在使用过程中遇到问题，请：
1. 检查本文档的故障排除部分
2. 查看 Figma Dev Mode 官方文档
3. 提交 Issue 到项目仓库 