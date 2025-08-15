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

```tsx
import React from 'react';
import { LandButton, LandInput, LandAlert } from '@suminhan/land-design';
import '@suminhan/land-design/lib/styles/index.scss';

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
