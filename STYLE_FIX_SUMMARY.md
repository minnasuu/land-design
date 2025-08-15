# Land Design 组件库样式丢失问题解决方案

## 问题描述

在使用 Land Design 组件库时，组件能正常渲染但样式丢失，表现为：
- 组件功能正常
- 组件没有样式（如按钮没有颜色、边框等）
- 布局和视觉效果缺失

## 问题原因分析

经过分析，发现以下几个关键问题：

### 1. 样式文件未正确构建
- 原有的构建流程没有正确处理 SCSS 文件
- 样式文件虽然存在但内容不完整
- 缺少专门的样式构建步骤

### 2. 组件库入口文件缺少样式导入
- `packages/index.tsx` 中没有导入全局样式文件
- 用户需要手动导入样式文件

### 3. 构建配置不完整
- `vite.config.lib.ts` 缺少 CSS 处理配置
- 没有配置样式文件的输出规则

### 4. 包配置错误
- `package.json` 中的 `style` 字段路径不正确
- 指向了不存在的文件路径

## 解决方案

### 1. 修复组件库入口文件

在 `packages/index.tsx` 末尾添加样式导入：

```typescript
// 导入全局样式
import './styles/index.scss';
```

### 2. 创建样式构建脚本

创建 `scripts/build-styles.js` 脚本，用于：
- 编译主样式文件
- 合并所有组件样式
- 输出到 `lib/style.css`

### 3. 更新构建配置

修复 `vite.config.lib.ts`：

```typescript
export default defineConfig({
  // ... 其他配置
  css: {
    modules: false,
    postcss: {
      plugins: [],
    },
  },
  build: {
    // ... 其他配置
    rollupOptions: {
      output: {
        // 确保CSS文件被正确输出
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'style.css';
          }
          return assetInfo.name || 'assets/[name].[ext]';
        },
      },
    },
  },
});
```

### 4. 修复包配置

更新 `package.json`：

```json
{
  "style": "./lib/style.css",
  "scripts": {
    "build:styles": "node scripts/build-styles.js",
    "build:lib": "npm run build:styles && tsc && vite build --config vite.config.lib.ts",
    "lib": "bash updateVersion.sh --auto && npm run build:lib && pnpm publish --no-git-checks"
  }
}
```

### 5. 更新发布脚本

修改 `scripts/publish.sh` 使用新的构建命令：

```bash
build_library() {
    log_info "构建库文件..."
    npm run build:lib
    log_success "库文件构建完成"
}
```

## 使用方法

### 开发环境

1. 构建样式文件：
```bash
npm run build:styles
```

2. 构建完整库：
```bash
npm run build:lib
```

### 用户使用

#### 方法1：导入样式文件

```javascript
// 导入组件
import { LandButton, LandInput } from '@suminhan/land-design';

// 导入样式文件
import '@suminhan/land-design/lib/style.css';
```

#### 方法2：HTML 中引入

```html
<!-- 引入样式文件 -->
<link rel="stylesheet" href="https://unpkg.com/@suminhan/land-design/lib/style.css">

<!-- 引入组件库 -->
<script src="https://unpkg.com/@suminhan/land-design/lib/index.umd.js"></script>
```

#### 方法3：CDN 引入

```html
<link rel="stylesheet" href="https://unpkg.com/@suminhan/land-design@latest/lib/style.css">
<script src="https://unpkg.com/@suminhan/land-design@latest/lib/index.umd.js"></script>
```

## 验证方法

### 1. 检查样式文件

确认 `lib/style.css` 文件存在且大小正常（约 155KB）。

### 2. 测试页面

使用提供的 `test-styles.html` 文件在浏览器中测试样式是否正确加载。

### 3. 控制台检查

在浏览器控制台中检查：
- CSS 变量是否可用
- 组件样式是否正确应用
- 是否有样式加载错误

## 注意事项

### 1. 样式依赖

确保项目中定义了必要的 CSS 变量，或者样式文件包含了所有必要的变量定义。

### 2. 构建顺序

样式构建必须在组件库构建之前进行，确保样式文件可用。

### 3. 版本兼容

不同版本的组件库可能有不同的样式文件路径，请使用对应版本的路径。

### 4. 缓存问题

如果使用 CDN，可能存在缓存问题，建议使用版本号或清除缓存。

## 故障排除

### 样式文件不存在

1. 运行 `npm run build:styles` 重新构建样式
2. 检查 `lib/` 目录是否存在
3. 确认构建脚本权限正确

### 样式加载但组件无样式

1. 检查 CSS 变量是否定义
2. 确认组件类名是否正确
3. 检查是否有样式冲突

### 构建失败

1. 检查 Node.js 版本兼容性
2. 确认依赖包已安装
3. 查看构建日志中的具体错误

## 总结

通过以上修复，Land Design 组件库的样式问题已经解决：

✅ 样式文件正确构建和输出  
✅ 组件库入口文件包含样式导入  
✅ 构建配置完整且正确  
✅ 包配置路径准确  
✅ 提供多种使用方式  
✅ 包含完整的验证和故障排除指南  

现在用户可以正常使用组件库，样式将正确显示。
