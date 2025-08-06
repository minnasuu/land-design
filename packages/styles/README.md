# LandDesign 样式系统重构

## 概述

本次重构将样式系统分为两个层次：
- **`variable.scss`**: 最基础最原子的通用样式变量
- **`theme.scss`**: 基于基础变量进行语义化的梳理

同时支持**浅色模式**和**深色模式**的自动切换。

## 文件结构

```
packages/styles/
├── variable.scss      # 基础原子变量 (支持深色模式)
├── theme.scss         # 语义化主题变量
├── usage-example.scss # 使用示例 (包含深色模式示例)
├── index.scss         # 样式入口文件
└── README.md          # 本文档
```

## variable.scss - 基础原子变量

### 设计原则
- 只包含最基础、最原子的样式变量
- 不包含任何语义化的命名
- 使用统一的命名规范：`--{属性}-{尺寸}`
- **支持深色模式自动切换**

### 包含内容

#### 1. 颜色系统 (支持深色模式)
```scss
// 浅色模式颜色数组
$grayColor, $primaryColor, $redColor, $orangeColor, $greenColor, $blueColor

// 深色模式颜色数组
$grayColorDark, $primaryColorDark, $redColorDark, $orangeColorDark, $greenColorDark, $blueColorDark

// 生成的CSS变量 (自动适配深色模式)
--color-gray-1, --color-gray-2, ..., --color-gray-12
--color-primary-1, --color-primary-2, ..., --color-primary-8
--color-red-1, --color-red-2, ..., --color-red-8
// ... 其他颜色
```

#### 2. 尺寸系统
```scss
// 字号
--font-size-10: 10px
--font-size-12: 12px
--font-size-14: 14px
--font-size-16: 16px
// ... 更多尺寸

// 间距
--spacing-2: 2px
--spacing-4: 4px
--spacing-8: 8px
--spacing-12: 12px
// ... 更多尺寸

// 圆角
--radius-2: 2px
--radius-4: 4px
--radius-8: 8px
--radius-12: 12px
// ... 更多尺寸
```

#### 3. 其他基础变量
- 图标尺寸: `--icon-s`, `--icon-m`, `--icon-l`, `--icon-xl`
- 层级: `--z-index-0`, `--z-index-1`, ..., `--z-index-1025`
- 过渡: `--transition-s`, `--transition-m`, `--transition-l`, `--transition-xl`
- 阴影: `--shadow-s`, `--shadow-m`, `--shadow-l`
- 模糊: `--blur-s`, `--blur-m`, `--blur-l`

### 深色模式支持

#### 1. 自动深色模式
```scss
// 使用 @media (prefers-color-scheme: dark) 自动检测系统主题
@media (prefers-color-scheme: dark) {
  :root {
    // 自动切换到深色模式颜色
    --color-gray-1: #000000;
    --color-gray-2: #0A0A0A;
    // ... 其他深色模式颜色
  }
}
```

#### 2. 手动深色模式
```scss
// 使用 [data-theme="dark"] 手动控制主题
[data-theme="dark"] {
  // 手动切换到深色模式颜色
  --color-gray-1: #000000;
  --color-gray-2: #0A0A0A;
  // ... 其他深色模式颜色
}
```

## theme.scss - 语义化主题变量

### 设计原则
- 基于 `variable.scss` 中的基础变量
- 提供语义化的命名
- 按功能模块组织变量
- **自动适配深色模式**

### 包含内容

#### 1. 语义化字体系统
```scss
// 正文字体
--font-content-xs: var(--font-size-10)    // 正文-极小
--font-content-s: var(--font-size-12)      // 正文-小
--font-content-m: var(--font-size-14)      // 正文-常规
--font-content-l: var(--font-size-16)      // 正文-大

// 标题字体
--font-title-xs: var(--font-size-14)       // 标题-辅助
--font-title-s: var(--font-size-16)        // 标题-小
--font-title-m: var(--font-size-20)       // 标题-常规
--font-title-l: var(--font-size-24)      // 标题-大
--font-title-xl: var(--font-size-28)    // 标题-超大

// 视觉标题字体
--font-slogan-xs: var(--font-size-32)  // 视觉标题-小
--font-slogan-s: var(--font-size-48)  // 视觉标题-中
--font-slogan-m: var(--font-size-64) // 视觉标题-常规
--font-slogan-l: var(--font-size-64); // 视觉标题-大
```

#### 2. 语义化颜色系统 (自动适配深色模式)
```scss
// 主色调
--color-primary: var(--color-primary-6)
--color-primary-light: var(--color-primary-4)
--color-primary-lighter: var(--color-primary-2)
--color-primary-dark: var(--color-primary-7)
--color-primary-darker: var(--color-primary-8)

// 状态色
--color-success: var(--color-green-6)
--color-warning: var(--color-orange-6)
--color-error: var(--color-red-6)
--color-link: var(--color-blue-6)

// 文本色 (自动适配深色模式)
--color-text-primary: var(--color-gray-10)
--color-text-secondary: var(--color-gray-8)
--color-text-tertiary: var(--color-gray-6)
--color-text-disabled: var(--color-gray-5)

// 背景色 (自动适配深色模式)
--color-bg-primary: var(--color-white)
--color-bg-secondary: var(--color-gray-1)
--color-bg-tertiary: var(--color-gray-2)
--color-bg-disabled: var(--color-gray-3)

// 边框色 (自动适配深色模式)
--color-border-primary: var(--color-gray-4)
--color-border-secondary: var(--color-gray-3)
--color-border-tertiary: var(--color-gray-2)
--color-border-focus: var(--color-primary)
```

#### 3. 语义化间距系统
```scss
// 组件内间距
--padding-xs: var(--spacing-2)
--padding-s: var(--spacing-4)
--padding-m: var(--spacing-8)
--padding-l: var(--spacing-12)
--padding-xl: var(--spacing-16)
--padding-xxl: var(--spacing-20)
--padding-xxxl: var(--spacing-24)

// 组件间间距
--gap-xs: var(--spacing-2)
--gap-s: var(--spacing-4)
--gap-m: var(--spacing-8)
--gap-l: var(--spacing-12)
--gap-xl: var(--spacing-16)
--gap-xxl: var(--spacing-24)
--gap-xxxl: var(--spacing-32)
```

#### 4. 语义化组件变量
```scss
// 按钮
--button-height-s: 24px
--button-height-m: 32px
--button-height-l: 40px
--button-height-xl: 48px

// 输入框
--input-height-s: 24px
--input-height-m: 32px
--input-height-l: 40px
--input-height-xl: 48px

// 卡片
--card-padding-s: var(--padding-s)
--card-padding-m: var(--padding-m)
--card-padding-l: var(--padding-l)
--card-padding-xl: var(--padding-xl)

// 模态框
--modal-padding: var(--padding-xl)
--modal-header-height: 56px
--modal-footer-height: 64px
```

#### 5. 语义化状态变量
```scss
// 交互状态
--state-hover-opacity: 0.8
--state-active-opacity: 0.6
--state-disabled-opacity: var(--opacity-disabled)

// 加载状态
--loading-size-s: 16px
--loading-size-m: 24px
--loading-size-l: 32px
--loading-size-xl: 48px

// 进度条
--progress-height-s: 4px
--progress-height-m: 8px
--progress-height-l: 12px
--progress-height-xl: 16px
```

#### 6. 语义化动画变量
```scss
// 过渡动画
--transition-fast: var(--transition-s)
--transition-normal: var(--transition-m)
--transition-slow: var(--transition-l)
--transition-spring: var(--transition-xl)

// 缓动函数
--ease-in: cubic-bezier(0.4, 0, 1, 1)
--ease-out: cubic-bezier(0, 0, 0.2, 1)
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

## 深色模式使用方法

### 1. 自动深色模式 (推荐)
```scss
// 组件会自动根据系统主题切换
.button {
  background: var(--color-primary-6); // 自动适配深色模式
  color: var(--color-text-primary);   // 自动适配深色模式
  border: 1px solid var(--color-border-primary); // 自动适配深色模式
}
```

### 2. 手动深色模式
```html
<!-- 在 HTML 根元素上添加 data-theme 属性 -->
<html data-theme="dark">
  <!-- 页面内容 -->
</html>
```

```javascript
// JavaScript 控制主题切换
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
}
```

### 3. 深色模式特定样式
```scss
// 如果需要针对深色模式做特殊处理
.component {
  // 基础样式
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  
  // 深色模式特定样式
  @media (prefers-color-scheme: dark) {
    // 深色模式下的特殊调整
    border: 1px solid var(--color-border-secondary);
  }
  
  // 手动深色模式特定样式
  [data-theme="dark"] & {
    // 手动深色模式下的特殊调整
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  }
}
```

## 使用方法

### 1. 基础变量使用 (自动适配深色模式)
```scss
.button-base {
  height: var(--spacing-xl);        // 16px
  padding: var(--spacing-s) var(--spacing-m); // 4px 8px
  border-radius: var(--radius-s);   // 4px
  font-size: var(--font-size-m);    // 14px
  color: var(--color-gray-10);      // 自动适配深色模式
  background: var(--color-primary-6); // 自动适配深色模式
}
```

### 2. 语义化变量使用 (自动适配深色模式)
```scss
.button-primary {
  height: var(--button-height-m);   // 32px
  padding: var(--padding-s) var(--padding-m); // 4px 8px
  border-radius: var(--radius-button); // 4px
  font-size: var(--font-content-m); // 14px
  color: var(--color-white);
  background: var(--color-primary); // 自动适配深色模式
  border: 1px solid var(--color-border-primary); // 自动适配深色模式
  
  &:hover {
    opacity: var(--state-hover-opacity); // 0.8
    background: var(--color-primary-dark); // 自动适配深色模式
  }
}
```

### 3. 状态色使用 (自动适配深色模式)
```scss
.status-success {
  color: var(--color-success); // 自动适配深色模式
  background: var(--color-success-lighter); // 自动适配深色模式
  border: 1px solid var(--color-success-light); // 自动适配深色模式
}

.status-warning {
  color: var(--color-warning); // 自动适配深色模式
  background: var(--color-warning-lighter); // 自动适配深色模式
  border: 1px solid var(--color-warning-light); // 自动适配深色模式
}

.status-error {
  color: var(--color-error); // 自动适配深色模式
  background: var(--color-error-lighter); // 自动适配深色模式
  border: 1px solid var(--color-error-light); // 自动适配深色模式
}
```

## 最佳实践

### 1. 变量选择原则
- **组件开发**: 优先使用 `theme.scss` 中的语义化变量
- **自定义样式**: 可以使用 `variable.scss` 中的基础变量
- **特殊情况**: 需要精确控制时使用基础变量
- **深色模式**: 所有颜色变量都自动适配深色模式

### 2. 命名规范
- 基础变量: `--{属性}-{尺寸}` (如: `--font-size-14`, `--spacing-8`)
- 语义化变量: `--{语义}-{属性}-{尺寸}` (如: `--font-content-m`, `--button-height-l`)

### 3. 深色模式最佳实践
- **优先使用语义化变量**: 它们会自动适配深色模式
- **避免硬编码颜色**: 使用变量而不是直接的颜色值
- **测试深色模式**: 确保在深色模式下有良好的对比度
- **考虑可访问性**: 确保颜色对比度符合 WCAG 标准

### 4. 扩展建议
- 新增基础变量时，先在 `variable.scss` 中定义
- 新增语义化变量时，在 `theme.scss` 中基于基础变量定义
- 新增颜色时，同时提供浅色和深色模式的值
- 保持变量的一致性和可维护性

## 迁移指南

### 从旧版本迁移
1. 将直接使用的颜色值替换为对应的语义化变量
2. 将硬编码的尺寸值替换为对应的变量
3. 将组件特定的样式使用语义化变量
4. **深色模式会自动适配，无需额外修改**

### 示例迁移
```scss
// 旧版本
.button {
  height: 32px;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  background: #58CFFF;
}

// 新版本 (自动支持深色模式)
.button {
  height: var(--button-height-m);
  padding: var(--padding-s) var(--padding-m);
  border-radius: var(--radius-button);
  font-size: var(--font-content-m);
  color: var(--color-text-primary); // 自动适配深色模式
  background: var(--color-primary); // 自动适配深色模式
}
```

## 深色模式颜色对比

### 灰度色对比
| 变量 | 浅色模式 | 深色模式 |
|------|----------|----------|
| `--color-gray-1` | #FAFAFA | #000000 |
| `--color-gray-2` | #F5F5F5 | #0A0A0A |
| `--color-gray-3` | #F0F0F0 | #141414 |
| `--color-gray-4` | #E2E2E2 | #1F1F1F |
| `--color-gray-5` | #CCCCCC | #2A2A2A |
| `--color-gray-6` | #BABABA | #363636 |
| `--color-gray-7` | #999999 | #424242 |
| `--color-gray-8` | #767676 | #4F4F4F |
| `--color-gray-9` | #555555 | #5C5C5C |
| `--color-gray-10` | #333333 | #6A6A6A |
| `--color-gray-11` | #202020 | #787878 |
| `--color-gray-12` | #181818 | #868686 |

### 主色调对比
| 变量 | 浅色模式 | 深色模式 |
|------|----------|----------|
| `--color-primary-1` | #EBF9FF | #001A26 |
| `--color-primary-2` | #D5F3FF | #002B3D |
| `--color-primary-3` | #B2E9FF | #003D54 |
| `--color-primary-4` | #88DDFF | #004F6B |
| `--color-primary-5` | #72D7FF | #006182 |
| `--color-primary-6` | #58CFFF | #007399 |
| `--color-primary-7` | #43C6FB | #0085B0 |
| `--color-primary-8` | #28BBF7 | #0097C7 |

## 总结

通过这次重构，我们实现了：
1. **清晰的层次结构**: 基础变量 → 语义化变量 → 组件样式
2. **更好的可维护性**: 统一的变量命名和分类
3. **更强的扩展性**: 易于添加新的变量和主题
4. **更好的开发体验**: 语义化的变量命名，提高开发效率
5. **完整的深色模式支持**: 自动适配系统主题，支持手动切换
6. **优秀的可访问性**: 符合 WCAG 标准的颜色对比度 