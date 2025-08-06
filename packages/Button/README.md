# Button 组件

LandDesign 的按钮组件，提供丰富的按钮样式和交互效果。

## 文件结构

```
Button/
├── index.tsx          # 组件主文件
├── index.scss         # 组件样式文件
├── props.ts           # 属性定义文件（新增）
├── ButtonArrow.tsx    # 箭头按钮子组件
├── ButtonChange.tsx   # 切换按钮子组件
└── README.md          # 说明文档
```

## 属性文件说明

### props.ts

专门存放组件的属性类型定义和详细说明，包含：

- **基础类型定义**：ButtonType、ButtonStatus、ButtonSize 等
- **属性接口定义**：ButtonBaseProps、ButtonContentProps、ButtonStyleProps 等
- **使用示例**：常见使用场景的代码示例
- **属性优先级说明**：属性之间的优先级关系

### 优势

1. **类型安全**：完整的 TypeScript 类型定义
2. **文档化**：详细的属性说明和使用示例
3. **可维护性**：属性定义集中管理，便于维护
4. **可复用性**：其他组件可以导入使用这些类型定义

## 使用方法

```tsx
import Button from './Button';
import { ButtonProps } from './props';

// 基础用法
<Button text="点击我" onClick={() => console.log('clicked')} />

// 带图标和状态的按钮
<Button 
  type="fill" 
  status="primary" 
  icon={<Icon name="plus" />} 
  text="添加" 
/>

// 带气泡提示的按钮
<Button 
  text="帮助" 
  tip="点击查看帮助信息" 
  tipProps={{ placement: 'top' }} 
/>
```

## 属性分类

### 基础属性 (ButtonBaseProps)
- `type`: 按钮类型
- `status`: 按钮状态
- `size`: 按钮尺寸
- `disabled`: 是否禁用
- `block`: 是否为块级按钮

### 内容属性 (ButtonContentProps)
- `text`: 主要文案
- `subText`: 次要文案
- `icon`: 图标
- `children`: 子元素

### 样式属性 (ButtonStyleProps)
- `bold`: 是否加粗
- `hoverBold`: 悬停时是否加粗
- `capsule`: 是否为胶囊按钮

### 交互属性 (ButtonUXProps)
- `hoverAnimation`: 悬停动画
- `activeAnimation`: 点击动画

### 气泡属性 (ButtonPopProps)
- `tip`: 气泡内容
- `tipProps`: 气泡配置

详细说明请参考 `props.ts` 文件。 