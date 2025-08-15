# Land Design

[![npm version](https://img.shields.io/npm/v/@suminhan/land-design.svg)](https://www.npmjs.com/package/@suminhan/land-design)
[![license](https://img.shields.io/npm/l/@suminhan/land-design.svg)](https://github.com/suminhan/land-design/blob/main/LICENSE)

A modern, comprehensive React component library with TypeScript support, featuring 50+ components, dark mode support, and Figma integration.

## ✨ Features

- 🎨 **50+ Components** - Rich set of UI components for modern web applications
- 🌙 **Dark Mode Support** - Automatic and manual dark mode switching
- 📱 **Responsive Design** - Mobile-first approach with flexible layouts
- 🎯 **TypeScript Support** - Full TypeScript definitions for better development experience
- ⚡ **React 18/19 Compatible** - Latest React features and performance optimizations
- 🎨 **Figma Integration** - Seamless design-to-code workflow
- 🎪 **Animation Support** - Smooth animations with motion library
- 🎨 **Customizable Themes** - Flexible theming system with SCSS variables
- 📦 **Tree Shaking** - Optimized bundle size with ES modules
- 🚀 **Zero Dependencies** - Lightweight with minimal external dependencies

## 📦 Installation

```bash
npm install @suminhan/land-design
# or
yarn add @suminhan/land-design
# or
pnpm add @suminhan/land-design
```

## 🚀 Quick Start

### 方法1：导入样式文件（推荐）

```tsx
import React from 'react';
import { LandButton, LandInput, LandAlert } from '@suminhan/land-design';

// 导入样式文件
import '@suminhan/land-design/lib/style.css';

function App() {
  return (
    <div>
      <LandButton type="primary">Hello Land Design!</LandButton>
      <LandInput placeholder="Enter your name" />
      <LandAlert type="success" message="Welcome to Land Design!" />
    </div>
  );
}
```

### 方法2：HTML 中引入样式

```html
<!DOCTYPE html>
<html>
<head>
  <!-- 引入样式文件 -->
  <link rel="stylesheet" href="https://unpkg.com/@suminhan/land-design/lib/style.css">
</head>
<body>
  <div id="app"></div>
  
  <!-- 引入组件库 -->
  <script src="https://unpkg.com/@suminhan/land-design/lib/index.umd.js"></script>
</body>
</html>
```

### 方法3：CDN 引入

```html
<!-- 使用最新版本 -->
<link rel="stylesheet" href="https://unpkg.com/@suminhan/land-design@latest/lib/style.css">
<script src="https://unpkg.com/@suminhan/land-design@latest/lib/index.umd.js"></script>

<!-- 或使用特定版本 -->
<link rel="stylesheet" href="https://unpkg.com/@suminhan/land-design@0.0.90/lib/style.css">
<script src="https://unpkg.com/@suminhan/land-design@0.0.90/lib/index.umd.js"></script>
```

## ⚠️ 重要提示

**样式文件必须单独导入！** 如果遇到样式丢失的问题，请确保：

1. **样式文件已正确导入**：`import '@suminhan/land-design/lib/style.css'`
2. **使用正确的路径**：样式文件位于 `lib/style.css`
3. **检查版本兼容性**：确保使用的是最新版本

### 常见问题解决

如果遇到 `Missing "./lib/style.css" specifier` 错误：

```bash
# 重新安装最新版本
npm install @suminhan/land-design@latest

# 或者清除缓存后重新安装
npm cache clean --force
npm install @suminhan/land-design
```

## 🎨 样式使用

### 样式文件说明

Land Design 使用 SCSS 构建，最终输出为压缩的 CSS 文件。样式文件包含：

- **基础样式**：重置样式、变量定义、主题配置
- **组件样式**：所有组件的样式定义
- **工具类**：Tailwind CSS 风格的实用工具类
- **响应式设计**：移动端和桌面端的适配样式

### 样式导入方式

#### 1. ES6 模块导入（推荐）

```tsx
// 导入组件
import { LandButton } from '@suminhan/land-design';

// 导入样式文件
import '@suminhan/land-design/lib/style.css';
```

#### 2. CommonJS 导入

```javascript
const { LandButton } = require('@suminhan/land-design');
require('@suminhan/land-design/lib/style.css');
```

#### 3. 动态导入

```tsx
// 动态导入样式文件
import('@suminhan/land-design/lib/style.css').then(() => {
  // 样式加载完成后的回调
});
```

### 样式自定义

#### CSS 变量覆盖

```css
:root {
  /* 覆盖主题色 */
  --color-primary: #1890ff;
  --color-success: #52c41a;
  --color-warning: #faad14;
  --color-error: #f5222d;
  
  /* 覆盖字体大小 */
  --font-size-base: 16px;
  --font-size-lg: 18px;
  --font-size-sm: 14px;
}
```

#### 主题切换

```tsx
// 自动跟随系统主题
// 组件库会自动检测 prefers-color-scheme

// 手动切换主题
document.documentElement.setAttribute('data-theme', 'dark');
document.documentElement.setAttribute('data-theme', 'light');
```

### 样式文件大小

- **完整样式文件**：约 155KB（压缩后）
- **Gzip 压缩**：约 22.7KB
- **支持 Tree Shaking**：可以按需导入特定组件的样式

## 🎨 Components

### Base Components

| Component | Description | Status |
|-----------|-------------|--------|
| `LandButton` | Button component with multiple variants | ✅ |
| `LandInput` | Input field with validation | ✅ |
| `LandAlert` | Alert/notification component | ✅ |
| `LandModal` | Modal dialog component | ✅ |
| `LandTabs` | Tab navigation component | ✅ |
| `LandTable` | Data table component | ✅ |
| `LandForm` | Form component with validation | ✅ |
| `LandSelect` | Dropdown select component | ✅ |
| `LandDatePicker` | Date picker component | ✅ |
| `LandTimePicker` | Time picker component | ✅ |
| `LandCheckbox` | Checkbox component | ✅ |
| `LandRadio` | Radio button component | ✅ |
| `LandSwitch` | Toggle switch component | ✅ |
| `LandSlider` | Range slider component | ✅ |
| `LandProgress` | Progress bar component | ✅ |
| `LandLoading` | Loading spinner component | ✅ |
| `LandBadge` | Badge/tag component | ✅ |
| `LandTag` | Tag component | ✅ |
| `LandAvatar` | Avatar component | ✅ |
| `LandImage` | Image component with lazy loading | ✅ |
| `LandIcon` | Icon component library | ✅ |
| `LandDivider` | Divider line component | ✅ |
| `LandBreadcrumb` | Breadcrumb navigation | ✅ |
| `LandPagination` | Pagination component | ✅ |
| `LandSteps` | Step indicator component | ✅ |
| `LandTimeline` | Timeline component | ✅ |
| `LandCollapse` | Collapsible content component | ✅ |
| `LandDrawer` | Side drawer component | ✅ |
| `LandPopover` | Popover component | ✅ |
| `LandTooltip` | Tooltip component | ✅ |
| `LandMessage` | Message notification | ✅ |
| `LandNotification` | Notification component | ✅ |
| `LandMenu` | Navigation menu component | ✅ |
| `LandDropdown` | Dropdown menu component | ✅ |
| `LandCascader` | Cascading select component | ✅ |
| `LandTree` | Tree component | ✅ |
| `LandTransfer` | Transfer list component | ✅ |
| `LandUpload` | File upload component | ✅ |
| `LandRate` | Rating component | ✅ |
| `LandColorPicker` | Color picker component | ✅ |
| `LandCalendar` | Calendar component | ✅ |
| `LandStatistic` | Statistics display component | ✅ |
| `LandCard` | Card container component | ✅ |
| `LandList` | List component | ✅ |
| `LandDescriptions` | Descriptions component | ✅ |
| `LandEmpty` | Empty state component | ✅ |
| `LandResult` | Result page component | ✅ |
| `LandSkeleton` | Loading skeleton component | ✅ |
| `LandAffix` | Affix component | ✅ |
| `LandAnchor` | Anchor navigation | ✅ |
| `LandBackTop` | Back to top component | ✅ |

### Pro Components

Advanced components for complex use cases:

| Component | Description | Status |
|-----------|-------------|--------|
| `HighlightInput` | Input with syntax highlighting | ✅ |
| `HighlightTextarea` | Textarea with syntax highlighting | ✅ |
| `AutoWidthHeightTextarea` | Auto-resizing textarea | ✅ |
| `DoubleClickInput` | Inline editing input | ✅ |
| `PrefixValueInput` | Input with prefix value | ✅ |
| `GridTemplate` | Grid template component | ✅ |
| `SwiperMediaPreview` | Media preview with swiper | ✅ |

<!-- ### Layout Components

| Component | Description | Status |
|-----------|-------------|--------|
| `LandLayout` | Layout container | ✅ |
| `LandHeader` | Header component | ✅ |
| `LandFooter` | Footer component | ✅ |
| `LandSider` | Sidebar component | ✅ |
| `LandContent` | Content area component | ✅ |
| `LandGrid` | Grid system component | ✅ |
| `LandFlex` | Flexbox utility component | ✅ | -->

## 🎨 Theming & Styling

### Dark Mode Support

Land Design automatically supports dark mode with both automatic and manual switching:

```tsx
// Automatic dark mode (follows system preference)
// Components automatically adapt to system theme

// Manual dark mode control
document.documentElement.setAttribute('data-theme', 'dark');
```

### Custom Themes

```scss
// Custom theme variables
:root {
  --color-primary: #your-primary-color;
  --color-success: #your-success-color;
  --color-warning: #your-warning-color;
  --color-error: #your-error-color;
}
```

### CSS Variables

Land Design uses a comprehensive CSS variable system:

```scss
// Color system
--color-primary-1 to --color-primary-8
--color-gray-1 to --color-gray-12
--color-success, --color-warning, --color-error

// Spacing system
--spacing-2, --spacing-4, --spacing-8, --spacing-12, etc.

// Typography
--font-size-10, --font-size-12, --font-size-14, --font-size-16, etc.

// Border radius
--radius-2, --radius-4, --radius-8, --radius-12, etc.
```

## 🔧 Development

### Prerequisites

- Node.js >= 16
- pnpm (recommended) or npm

### Setup

```bash
# Clone the repository
git clone https://github.com/suminhan/land-design.git
cd land-design

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build library
pnpm build

# Run tests
pnpm test
```

### Project Structure

```
land-design/
├── packages/           # Main component library
│   ├── Button/        # Individual components
│   ├── Input/
│   ├── styles/        # Global styles and themes
│   └── index.tsx      # Main export file
├── pro-packages/      # Advanced components
├── example/           # Development and demo app
├── lib/              # Built library files
└── docs/             # Documentation
```

## 🚨 故障排除

### 常见问题

#### 1. 样式丢失问题

**症状**：组件能正常渲染但没有样式

**解决方案**：
```tsx
// ✅ 正确方式
import '@suminhan/land-design/lib/style.css';

// ❌ 错误方式
import '@suminhan/land-design/style.css';
```

#### 2. 模块找不到错误

**错误信息**：`Missing "./lib/style.css" specifier in "@suminhan/land-design" package`

**解决方案**：
```bash
# 重新安装最新版本
npm install @suminhan/land-design@latest

# 清除缓存后重新安装
npm cache clean --force
npm install @suminhan/land-design
```

#### 3. 样式文件路径错误

**错误信息**：`Cannot resolve module '@suminhan/land-design/lib/style.css'`

**解决方案**：
```tsx
// 使用完整路径
import '@suminhan/land-design/lib/style.css';

// 或者使用相对路径（如果文件在本地）
import './node_modules/@suminhan/land-design/lib/style.css';
```

#### 4. 构建工具配置问题

**Webpack 配置**：
```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
```

**Vite 配置**：
```javascript
export default defineConfig({
  css: {
    // 确保CSS被正确处理
  }
});
```

**Next.js 配置**：
```javascript
module.exports = {
  transpilePackages: ['@suminhan/land-design']
};
```

### 调试步骤

1. **检查样式文件是否存在**：
   ```bash
   ls node_modules/@suminhan/land-design/lib/style.css
   ```

2. **检查包版本**：
   ```bash
   npm list @suminhan/land-design
   ```

3. **检查浏览器网络面板**：确认样式文件是否被正确加载

4. **检查控制台错误**：查看是否有模块解析错误

### 获取帮助

如果问题仍然存在，请：

1. 检查 [GitHub Issues](https://github.com/suminhan/land-design/issues)
2. 提交新的 Issue，包含：
   - 错误信息
   - 复现步骤
   - 环境信息（Node.js 版本、包管理器等）
   - 代码示例

## 📚 Documentation

- [Component Documentation](./example/) - Interactive component demos
- [Design System](./packages/styles/README.md) - Design tokens and theming
- [Figma Integration](./FIGMA_DEV_MODE_GUIDE.md) - Figma plugin development


## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests if applicable
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [SCSS](https://sass-lang.com/)
- Icons from [IconPark](https://iconpark.oceanengine.com/official)
- Animations powered by [Motion](https://motion.dev/)

## 📞 Support

- 📧 Email: [minhansu508@gmail.com]
- 🐛 Issues: [GitHub Issues](https://github.com/suminhan/land-design/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/suminhan/land-design/discussions)

---

Made with ❤️ by the Land Design team
