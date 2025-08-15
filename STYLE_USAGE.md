# Land Design 组件库样式使用指南

## 问题描述

如果你在使用 Land Design 组件库时遇到样式丢失的问题，请按照以下步骤解决。

## 解决方案

### 1. 确保导入样式文件

在使用组件库时，需要同时导入样式文件：

```javascript
// 导入组件
import { LandButton, LandInput } from '@suminhan/land-design';

// 导入样式文件
import '@suminhan/land-design/lib/style.css';
```

### 2. 在 HTML 中引入样式

如果使用 CDN 或直接引入 JS 文件，确保同时引入 CSS 文件：

```html
<!-- 引入样式文件 -->
<link rel="stylesheet" href="https://unpkg.com/@suminhan/land-design/lib/style.css">

<!-- 引入组件库 -->
<script src="https://unpkg.com/@suminhan/land-design/lib/index.umd.js"></script>
```

### 3. 在构建工具中配置

#### Webpack
```javascript
// webpack.config.js
module.exports = {
  // ... 其他配置
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

#### Vite
```javascript
// vite.config.js
export default defineConfig({
  // ... 其他配置
  css: {
    // 确保CSS被正确处理
  }
});
```

#### Next.js
```javascript
// next.config.js
module.exports = {
  // ... 其他配置
  transpilePackages: ['@suminhan/land-design']
};
```

### 4. 检查样式变量

确保你的项目中定义了必要的 CSS 变量，或者导入 Land Design 的变量文件：

```scss
// 在你的样式文件中导入变量
@import '@suminhan/land-design/lib/styles/variable.css';
```

## 常见问题

### Q: 样式文件找不到怎么办？
A: 检查 `node_modules/@suminhan/land-design/lib/` 目录下是否存在 `style.css` 文件。

### Q: 样式加载了但组件还是没样式？
A: 可能是 CSS 变量未定义，请确保导入了变量文件或定义了必要的 CSS 变量。

### Q: 如何自定义主题？
A: 可以通过覆盖 CSS 变量来自定义主题，参考组件库的变量文件。

## 开发环境

如果你在开发环境中遇到样式问题，可以：

1. 运行 `npm run build:styles` 重新构建样式文件
2. 运行 `npm run build:lib` 重新构建整个库
3. 检查 `lib/style.css` 文件是否正确生成

## 技术支持

如果问题仍然存在，请：

1. 检查浏览器控制台是否有错误信息
2. 确认样式文件是否正确加载
3. 在 GitHub 上提交 issue，并提供详细的复现步骤
