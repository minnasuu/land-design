# Figma Dev Mode 完整设置指南

基于 [Figma Code Connect 快速入门指南](https://www.figma.com/code-connect-docs/quickstart-guide/)

## 当前完成状态

✅ **已完成**：
- 安装了 `@figma/code-connect` 依赖
- 创建了 `Button.figma.tsx` 文件
- 配置了组件属性映射
- 发布了包到 npm (版本 0.0.76)
- 创建了 `figma.config.json` 配置文件

## 需要完成的步骤

### 1. 获取 Figma 访问令牌

1. 访问 [Figma 账户设置](https://www.figma.com/settings)
2. 点击 "Personal access tokens" 标签
3. 点击 "Create new token"
4. 输入令牌名称（如：`land-design-code-connect`）
5. 复制生成的令牌

### 2. 设置环境变量

⚠️ **安全提醒**：请确保不要将 Figma 访问令牌提交到版本控制系统中。

#### 方法一：使用环境变量
```bash
# 设置 Figma 访问令牌
export FIGMA_ACCESS_TOKEN="your_figma_access_token_here"
```

#### 方法二：使用 .env 文件（推荐）
1. 创建 `.env` 文件：
```bash
echo "FIGMA_ACCESS_TOKEN=your_figma_access_token_here" > .env
```

2. 确保 `.env` 文件已添加到 `.gitignore` 中（已自动配置）

#### 方法三：使用 .env.example 模板
1. 复制 `.env.example` 文件：
```bash
cp .env.example .env
```

2. 编辑 `.env` 文件，替换占位符为实际的访问令牌

#### 方法四：使用自动化脚本（推荐）
```bash
# 运行环境变量设置脚本
./scripts/setup-env.sh
```

脚本会自动：
- 提示输入 Figma 访问令牌
- 创建 `.env` 文件
- 验证 `.gitignore` 配置
- 提供安全提醒

### 3. 发布 Code Connect 文件

```bash
# 发布 Code Connect 配置
npx figma connect publish --token=$FIGMA_ACCESS_TOKEN
```

### 4. 验证发布状态

```bash
# 检查发布状态
npx figma connect status
```

## 在 Figma Dev 模式下查看代码示例

### 1. 启用 Dev Mode

1. 打开 Figma 文件：`https://www.figma.com/design/PisstaAoQkRKPaFMopVgYt/Land-Design-DS`
2. 点击右上角的 "Dev Mode" 按钮
3. 或使用快捷键 `Cmd/Ctrl + Shift + D`

### 2. 查看 Button 组件

1. 选择 Button 组件（节点 ID: `2:9`）
2. 在右侧面板中查看：
   - **Code** 标签页：显示实时代码示例
   - **Properties** 标签页：编辑组件属性
   - **Inspect** 标签页：查看样式信息

### 3. 代码示例功能

#### 实时代码生成
当您修改组件属性时，代码会自动更新：

```tsx
// 基础按钮
<Button text="按钮" />

// 主要按钮
<Button type="fill" status="primary" text="主要按钮" />

// 危险按钮
<Button type="outline" status="danger" text="删除" />

// 大尺寸按钮
<Button size="large" text="大按钮" />

// 禁用按钮
<Button disabled text="禁用按钮" />

// 块级按钮
<Button block text="块级按钮" />

// 胶囊按钮
<Button capsule text="胶囊按钮" />
```

#### 代码复制
- 点击代码示例右上角的复制按钮
- 复制的代码可直接在项目中使用

## 配置说明

### figma.config.json
```json
{
  "codeConnect": {
    "include": ["/**/*.{tsx,jsx}"],
    "label": "React",
    "interactiveSetupFigmaFileUrl": "https://www.figma.com/design/PisstaAoQkRKPaFMopVgYt/Land-Design-DS?node-id=1-2&t=eVKEYpaisbhnwfxC-1"
  }
}
```

### Button.figma.tsx
```tsx
import figma from '@figma/code-connect';
import Button from '.';

figma.connect(
  Button,
  'https://www.figma.com/design/PisstaAoQkRKPaFMopVgYt/Land-Design-DS?node-id=2-9&t=eVKEYpaisbhnwfxC-4',
  {
    props: {
      type: figma.enum("type", {
        text: "text",
        fill: "fill",
        background: "background",
        outline: "outline",
        dashed: "dashed",
        transparent: "transparent"
      }),
      status: figma.enum("status", {
        default: "default",
        primary: "primary",
        warning: "warning",
        danger: "danger",
        success: "success"
      }),
      size: figma.enum("size", {
        mini: "mini",
        small: "small",
        default: "default",
        large: "large"
      }),
      disabled: figma.boolean("disabled"),
      block: figma.boolean("block"),
      bold: figma.boolean("bold"),
      hoverBold: figma.boolean("hoverBold"),
      hoverAnimation: figma.boolean("hoverAnimation"),
      activeAnimation: figma.boolean("activeAnimation"),
      capsule: figma.boolean("capsule"),
      text: figma.string("text"),
      subText: figma.string("subText"),
      tip: figma.string("tip"),
      className: figma.string("className")
    },
    example: (props) => {
      const buttonText = props.text || "按钮";
      const buttonProps = {
        type: props.type,
        status: props.status,
        size: props.size,
        disabled: props.disabled,
        block: props.block,
        bold: props.bold,
        hoverBold: props.hoverBold,
        hoverAnimation: props.hoverAnimation,
        activeAnimation: props.activeAnimation,
        capsule: props.capsule,
        text: buttonText,
        subText: props.subText,
        tip: props.tip,
        className: props.className
      };

      const filteredProps = Object.fromEntries(
        Object.entries(buttonProps).filter(([_, value]) => value !== undefined)
      );

      return <Button {...filteredProps} />;
    }
  }
)
```

## 故障排除

### 问题：看不到代码示例
**解决方案**：
1. 确保已发布 Code Connect 文件
2. 检查 Figma 访问令牌是否正确
3. 确认选择了正确的组件节点
4. 刷新 Figma 页面

### 问题：发布失败
**解决方案**：
1. 检查网络连接
2. 验证 Figma 访问令牌权限
3. 确认 figma.config.json 配置正确
4. 检查 .figma.tsx 文件语法

### 问题：代码示例不更新
**解决方案**：
1. 重新发布 Code Connect 文件
2. 清除浏览器缓存
3. 重新选择组件

## 下一步

1. **获取 Figma 访问令牌**
2. **发布 Code Connect 文件**
3. **在 Figma Dev 模式下测试**

完成这些步骤后，您就可以在 Figma Dev 模式下看到实时的代码示例了！

## 安全最佳实践

### 保护访问令牌
1. **永远不要将令牌提交到版本控制**
   - 使用 `.env` 文件存储敏感信息
   - 确保 `.env` 文件在 `.gitignore` 中

2. **定期轮换令牌**
   - 定期在 Figma 设置中重新生成访问令牌
   - 更新本地环境变量

3. **使用最小权限原则**
   - 只授予必要的权限
   - 定期审查令牌权限

4. **团队协作安全**
   - 团队成员各自使用自己的访问令牌
   - 不要共享个人访问令牌

### 环境变量管理
```bash
# 检查当前环境变量
echo $FIGMA_ACCESS_TOKEN

# 清除环境变量（临时）
unset FIGMA_ACCESS_TOKEN

# 验证 .env 文件是否被忽略
git status .env
```

## 参考链接

- [Figma Code Connect 快速入门指南](https://www.figma.com/code-connect-docs/quickstart-guide/)
- [Figma Dev Mode 文档](https://www.figma.com/developers/dev-mode)
- [Figma Code Connect 文档](https://www.figma.com/developers/code-connect) 