# Image 图片组件

一个功能完善的图片组件，支持加载状态管理、自动比例获取、兜底内容等功能。

## 功能特性

- ✅ **完整的加载状态管理**：开始加载、加载中、加载成功、加载失败
- ✅ **自动比例获取**：如果没有传入ratio，自动获取图片原始比例
- ✅ **兜底内容支持**：支持图片URL或React节点作为兜底内容
- ✅ **错误状态控制**：可控制是否显示默认错误态
- ✅ **加载事件回调**：提供完整的加载状态回调函数
- ✅ **样式定制**：支持容器和图片元素的样式定制

## 基础用法

```tsx
import Image from '@land-design/Image';

// 基础用法
<Image url="https://example.com/image.jpg" alt="示例图片" />

// 设置宽高比
<Image url="https://example.com/image.jpg" ratio={16/9} />

// 自定义样式
<Image 
  url="https://example.com/image.jpg"
  style={{ width: '200px' }}
  imgStyle={{ borderRadius: '8px' }}
/>
```

## 加载状态管理

### 开始加载状态

组件会自动显示加载骨架屏，并提供开始加载的回调：

```tsx
<Image 
  url="https://example.com/image.jpg"
  onLoadStart={() => console.log('图片开始加载')}
/>
```

### 加载成功

图片加载成功后会显示图片，并触发成功回调：

```tsx
<Image 
  url="https://example.com/image.jpg"
  onLoadSuccess={() => console.log('图片加载成功')}
/>
```

### 加载失败

图片加载失败时会显示错误态，并触发失败回调：

```tsx
<Image 
  url="https://example.com/image.jpg"
  onLoadError={() => console.log('图片加载失败')}
/>
```

## 兜底内容

### 兜底图片URL

当主图片加载失败时，可以显示兜底图片：

```tsx
<Image 
  url="https://invalid-url.com/image.jpg"
  fallback="https://example.com/fallback.jpg"
/>
```

### 兜底React节点

可以传入自定义的React节点作为兜底内容：

```tsx
const customFallback = (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
    <span>图片加载失败</span>
  </div>
);

<Image 
  url="https://invalid-url.com/image.jpg"
  fallback={customFallback}
/>
```

## 错误状态控制

### 显示默认错误态

```tsx
<Image 
  url="https://invalid-url.com/image.jpg"
  showError={true} // 默认值
/>
```

### 隐藏错误态

```tsx
<Image 
  url="https://invalid-url.com/image.jpg"
  showError={false}
/>
```

## 自动比例获取

如果没有传入ratio属性，组件会自动获取图片的原始比例：

```tsx
// 自动获取图片比例
<Image url="https://example.com/image.jpg" />

// 手动设置比例
<Image url="https://example.com/image.jpg" ratio={16/9} />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| url | 图片地址 | `string` | - |
| alt | 图片描述 | `string` | `""` |
| ratio | 图片宽高比 | `number` | - |
| fallback | 兜底内容 | `string \| ReactNode` | - |
| showError | 是否显示错误态 | `boolean` | `true` |
| className | 容器类名 | `string` | - |
| style | 容器样式 | `CSSProperties` | - |
| imgClassName | 图片类名 | `string` | - |
| imgStyle | 图片样式 | `CSSProperties` | - |
| onLoadStart | 开始加载回调 | `() => void` | - |
| onLoadSuccess | 加载成功回调 | `() => void` | - |
| onLoadError | 加载失败回调 | `() => void` | - |

### 加载状态

组件内部维护以下加载状态：

- `idle`: 初始状态
- `loading`: 加载中
- `success`: 加载成功
- `error`: 加载失败

### 兜底内容优先级

1. 如果提供了`fallback`且为React节点，直接显示
2. 如果提供了`fallback`且为字符串，尝试加载兜底图片
3. 如果兜底图片也失败且`showError`为true，显示默认错误态
4. 如果`showError`为false，显示空状态

## 样式定制

### 容器样式

```tsx
<Image 
  url="https://example.com/image.jpg"
  className="custom-container"
  style={{ 
    width: '200px',
    border: '1px solid #eee'
  }}
/>
```

### 图片样式

```tsx
<Image 
  url="https://example.com/image.jpg"
  imgClassName="custom-image"
  imgStyle={{ 
    borderRadius: '8px',
    objectFit: 'cover'
  }}
/>
```

## 注意事项

1. 图片加载失败时，如果提供了兜底图片URL，会尝试加载兜底图片
2. 如果兜底图片也加载失败，会显示默认错误态（除非`showError`为false）
3. 自动比例获取只在图片加载成功后生效
4. 所有回调函数都是可选的，不会影响组件的正常功能 