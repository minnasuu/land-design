# LandDesign 样式系统优化指南

## 概述

本次优化将样式系统重构为基于 Tailwind CSS 规范的现代化样式系统，删除了重复和无用的样式，提高了代码的可维护性和一致性。**所有颜色都默认带有深色模式支持**。

## 主要优化内容

### 1. 删除无用样式文件
- 删除了不存在的 `atomic.scss` 和 `tailwind.scss` 文件引用
- 清理了重复的样式定义

### 2. 优化 Tailwind 配置
- 删除了重复的工具类定义（如 `.text-gray-1`, `.p-2` 等）
- 保留了语义化的自定义工具类
- 添加了组件尺寸相关的工具类

### 3. 新增语义化颜色系统
创建了完整的语义化颜色系统，所有颜色都自动适配深色模式：

#### 文本颜色
- `text-primary` - 主要文本颜色
- `text-secondary` - 次要文本颜色
- `text-tertiary` - 第三级文本颜色
- `text-quaternary` - 第四级文本颜色
- `text-disabled` - 禁用状态文本颜色

#### 背景颜色
- `bg-primary` - 主要背景颜色
- `bg-secondary` - 次要背景颜色
- `bg-tertiary` - 第三级背景颜色
- `bg-quaternary` - 第四级背景颜色
- `bg-disabled` - 禁用状态背景颜色
- `bg-mask` - 遮罩背景颜色
- `bg-opacity` - 半透明背景颜色

#### 边框颜色
- `border-primary` - 主要边框颜色
- `border-secondary` - 次要边框颜色
- `border-tertiary` - 第三级边框颜色

#### 状态颜色
- `success`, `success-light`, `success-lighter`, `success-dark`, `success-darker`
- `warning`, `warning-light`, `warning-lighter`, `warning-dark`, `warning-darker`
- `error`, `error-light`, `error-lighter`, `error-dark`, `error-darker`
- `link`, `link-light`, `link-lighter`, `link-dark`, `link-darker`

#### 主色调
- `primary`, `primary-light`, `primary-lighter`, `primary-dark`, `primary-darker`

#### 灰度色系统
- `gray-primary` - 主要灰度色
- `gray-secondary` - 次要灰度色
- `gray-tertiary` - 第三级灰度色
- `gray-quaternary` - 第四级灰度色
- `gray-disabled` - 禁用状态灰度色
- `gray-light` - 浅灰度色
- `gray-lighter` - 最浅灰度色
- `gray-dark` - 深灰度色
- `gray-darker` - 最深灰度色

### 4. 新增 Tailwind 工具类文件
创建了 `tailwind-utilities.scss` 文件，包含：
- 按钮样式组合类
- 输入框样式组合类
- 卡片样式组合类
- 标签样式组合类
- 徽章样式组合类
- 头像样式组合类
- 加载样式组合类
- 进度条样式组合类
- 模态框样式组合类
- 下拉菜单样式组合类
- 工具提示样式组合类
- 表格样式组合类
- 分页样式组合类

### 5. 简化组件样式
- 优化了 Button 组件样式，删除了重复的变量定义
- 优化了 Alert 组件样式，使用语义化变量
- 统一使用 Tailwind CSS 的 `@apply` 指令

## 使用方法

### 1. 使用语义化颜色类（自动适配深色模式）

```html
<!-- 文本颜色 -->
<p class="text-text-primary">主要文本</p>
<p class="text-text-secondary">次要文本</p>
<p class="text-text-tertiary">第三级文本</p>
<p class="text-text-disabled">禁用文本</p>

<!-- 背景颜色 -->
<div class="bg-bg-primary">主要背景</div>
<div class="bg-bg-secondary">次要背景</div>
<div class="bg-bg-tertiary">第三级背景</div>

<!-- 边框颜色 -->
<div class="border border-border-primary">主要边框</div>
<div class="border border-border-secondary">次要边框</div>

<!-- 状态颜色 -->
<div class="bg-success text-white">成功状态</div>
<div class="bg-warning text-white">警告状态</div>
<div class="bg-error text-white">错误状态</div>
<div class="bg-primary text-white">主要状态</div>

<!-- 灰度色 -->
<div class="bg-gray-primary text-white">主要灰度</div>
<div class="bg-gray-secondary text-white">次要灰度</div>
<div class="bg-gray-light">浅灰度背景</div>
<div class="bg-gray-dark text-white">深灰度背景</div>
```

### 2. 使用 Tailwind 工具类

```html
<!-- 按钮 -->
<button class="btn-primary btn-md">主要按钮</button>
<button class="btn-outline btn-sm">轮廓按钮</button>
<button class="btn-success btn-lg">成功按钮</button>

<!-- 输入框 -->
<input class="input-base input-md" placeholder="请输入内容" />
<input class="input-base input-lg" placeholder="大号输入框" />

<!-- 卡片 -->
<div class="card-base card-md">
  <h3>卡片标题</h3>
  <p>卡片内容</p>
</div>

<!-- 标签 -->
<span class="tag-primary">主要标签</span>
<span class="tag-success">成功标签</span>
<span class="tag-warning">警告标签</span>

<!-- 徽章 -->
<span class="badge-primary">99+</span>
<span class="badge-success">新</span>

<!-- 头像 -->
<div class="avatar-base avatar-md">用户</div>
<div class="avatar-base avatar-lg">头像</div>

<!-- 加载 -->
<div class="loading-base loading-md"></div>

<!-- 进度条 -->
<div class="progress-base progress-md">
  <div class="progress-bar" style="width: 60%"></div>
</div>
```

### 3. 使用语义化 CSS 变量

```scss
.custom-component {
  // 使用语义化颜色
  color: var(--color-text-primary);
  background-color: var(--color-bg-primary);
  border-color: var(--color-border-primary);
  
  // 使用语义化字体
  font-size: var(--font-content-m);
  
  // 使用语义化间距
  padding: var(--padding-m);
  margin: var(--gap-l);
  
  // 使用语义化圆角
  border-radius: var(--radius-m);
  
  // 使用语义化过渡
  transition: all var(--transition-m) ease;
}
```

### 4. 使用 Tailwind 自定义工具类

```html
<!-- 语义化字体大小 -->
<p class="text-content-m">正文内容</p>
<h1 class="text-title-l">大标题</h1>
<h2 class="text-title-m">中标题</h2>

<!-- 组件尺寸 -->
<button class="h-button-m">中等按钮</button>
<input class="h-input-l">大号输入框</input>

<!-- 状态透明度 -->
<div class="opacity-hover">悬停效果</div>
<div class="opacity-disabled">禁用状态</div>

<!-- 加载尺寸 -->
<div class="w-loading-m"></div>
<div class="w-loading-l"></div>

<!-- 头像尺寸 -->
<div class="w-avatar-md">头像</div>
<div class="w-avatar-xl">大头像</div>
```

### 5. 深色模式支持

所有语义化颜色类都自动支持深色模式，无需额外配置：

```html
<!-- 自动适配深色模式 -->
<div class="text-text-primary">文本颜色自动适配</div>
<div class="bg-bg-primary">背景颜色自动适配</div>
<div class="border-border-primary">边框颜色自动适配</div>
<div class="btn-primary">按钮自动适配</div>
<div class="card-base">卡片自动适配</div>
<div class="input-base">输入框自动适配</div>
```

## 深色模式工作原理

### 1. CSS 变量自动切换
```scss
// 浅色模式
:root {
  --color-text-primary: var(--color-gray-10);    // #333333
  --color-bg-primary: var(--color-white);        // #FFFFFF
  --color-border-primary: var(--color-gray-3);   // #E2E2E2
}

// 深色模式
@media (prefers-color-scheme: dark) {
  :root {
    --color-text-primary: var(--color-gray-2);   // #F5F5F5
    --color-bg-primary: var(--color-gray-12);    // #0d0d0d
    --color-border-primary: var(--color-gray-10); // #333333
  }
}

// 手动深色模式
[data-theme="dark"] {
  --color-text-primary: var(--color-gray-2);
  --color-bg-primary: var(--color-gray-12);
  --color-border-primary: var(--color-gray-10);
}
```

### 2. Tailwind 类名映射
```html
<!-- 这些类名会自动使用对应的 CSS 变量 -->
<div class="text-text-primary">  <!-- color: var(--color-text-primary) -->
<div class="bg-bg-primary">       <!-- background-color: var(--color-bg-primary) -->
<div class="border-border-primary"> <!-- border-color: var(--color-border-primary) -->
```

## 最佳实践

### 1. 样式选择优先级
1. **组件开发**: 优先使用语义化颜色类（如 `text-text-primary`, `bg-bg-primary`）
2. **自定义样式**: 使用语义化 CSS 变量
3. **特殊情况**: 使用基础 CSS 变量

### 2. 命名规范
- 使用语义化的类名（如 `text-text-primary`, `bg-bg-secondary`）
- 避免使用具体的数值（如 `text-gray-10`, `bg-white`）
- 保持命名的一致性

### 3. 响应式设计
```html
<!-- 响应式类名 -->
<div class="w-full md:w-1/2 lg:w-1/3">响应式布局</div>
<div class="text-sm md:text-base lg:text-lg">响应式字体</div>
```

### 4. 深色模式适配
```scss
// 自动适配深色模式
.component {
  color: var(--color-text-primary); // 自动适配
  background: var(--color-bg-primary); // 自动适配
  border-color: var(--color-border-primary); // 自动适配
}
```

## 迁移指南

### 从旧样式迁移到新样式

#### 1. 颜色类迁移
```scss
// 旧样式
color: var(--color-gray-10);
background-color: var(--color-white);
border-color: var(--color-gray-3);

// 新样式（自动适配深色模式）
color: var(--color-text-primary);
background-color: var(--color-bg-primary);
border-color: var(--color-border-primary);
```

#### 2. Tailwind 类名迁移
```html
<!-- 旧样式 -->
<div class="text-gray-10 bg-white border-gray-3">

<!-- 新样式（自动适配深色模式） -->
<div class="text-text-primary bg-bg-primary border-border-primary">
```

#### 3. 组件样式迁移
```scss
// 旧样式
.btn-primary {
  background-color: var(--color-primary-6);
  color: white;
}

// 新样式（自动适配深色模式）
.btn-primary {
  background-color: var(--color-primary);
  color: white;
}
```

## 文件结构

```
packages/styles/
├── index.scss              # 样式入口文件
├── reset.scss              # CSS 重置样式
├── variable.scss           # 基础变量定义
├── theme.scss              # 语义化主题变量
├── tailwind-utilities.scss # Tailwind 工具类扩展
├── README.md               # 样式系统文档
└── OPTIMIZATION_GUIDE.md   # 本优化指南
```

## 总结

通过本次优化，我们：
1. 删除了重复和无用的样式定义
2. 统一了样式命名规范
3. 提高了代码的可维护性
4. **实现了完整的深色模式自动适配**
5. 提供了丰富的语义化颜色类
6. 保持了向后兼容性

新的样式系统更加现代化、易用和可维护，**所有颜色都默认带有深色模式支持**，开发者无需手动处理深色模式的适配问题。 