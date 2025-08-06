# ColorPicker 组件

一个功能完整的颜色选择器组件，支持多种颜色格式和透明度调节。

## 组件结构

重构后的 ColorPicker 组件采用了模块化的设计，将原来的单一组件拆分为多个更小、更专注的子组件：

```
ColorPicker/
├── components/           # 子组件目录
│   ├── ColorPanel.tsx   # 颜色选择面板
│   ├── HueSlider.tsx    # 色相滑块
│   ├── AlphaSlider.tsx  # 透明度滑块
│   ├── ColorInputs.tsx  # 颜色输入框组
│   ├── ColorDisplay.tsx # 颜色显示区域
│   ├── ColorPickerPanel.tsx # 颜色选择器面板（整合组件）
│   └── index.ts         # 组件导出文件
├── utils/               # 工具函数
│   └── ColorUtils.ts    # 颜色转换工具
├── hooks/               # 自定义 Hooks
│   └── useColorPicker.ts # 颜色选择器状态管理
├── constants/           # 常量定义
│   └── index.ts         # 常量文件
├── index.tsx            # 主组件
├── props.ts             # 类型定义
├── index.scss           # 样式文件
└── README.md            # 说明文档
```

## 子组件说明

### 1. ColorUtils (utils/ColorUtils.ts)
颜色转换工具函数，提供各种颜色格式之间的转换：
- RGB ↔ HSV
- RGB ↔ HEX
- RGB ↔ HSL
- HSV ↔ RGB
- HSL ↔ RGB

### 2. ColorPanel (components/ColorPanel.tsx)
颜色选择面板组件，负责：
- 显示颜色选择区域
- 处理点击和拖拽交互
- 更新饱和度和明度

### 3. HueSlider (components/HueSlider.tsx)
色相滑块组件，负责：
- 显示色相选择滑块
- 处理色相值的改变
- 支持点击和拖拽操作

### 4. AlphaSlider (components/AlphaSlider.tsx)
透明度滑块组件，负责：
- 显示透明度选择滑块
- 处理透明度值的改变
- 支持点击和拖拽操作

### 5. ColorInputs (components/ColorInputs.tsx)
颜色输入框组件，负责：
- 根据颜色模式显示对应的输入框
- 支持 HEX、RGB、HSV、HSL 四种格式
- 处理用户输入的颜色值

### 6. ColorDisplay (components/ColorDisplay.tsx)
颜色显示组件，负责：
- 显示当前选中的颜色
- 支持自定义大小和样式

### 7. ColorPickerPanel (components/ColorPickerPanel.tsx)
颜色选择器面板组件，负责：
- 整合所有子组件
- 管理组件间的交互
- 提供统一的面板界面

### 8. useColorPicker (hooks/useColorPicker.ts)
自定义 Hook，负责：
- 管理颜色选择器的状态
- 处理颜色初始化
- 提供颜色更新方法
- 处理组件生命周期

## 使用方式

```tsx
import ColorPicker from './packages/ColorPicker';

function App() {
  const handleColorChange = (color: string) => {
    console.log('Selected color:', color);
  };

  return (
    <ColorPicker
      color="#ff0000"
      size={40}
      onChange={handleColorChange}
    />
  );
}
```

## 优势

1. **模块化设计**: 每个组件都有明确的职责，便于维护和测试
2. **可复用性**: 子组件可以在其他地方独立使用
3. **可扩展性**: 容易添加新的颜色格式或功能
4. **性能优化**: 使用 React.memo、useCallback、useMemo 等优化渲染性能
5. **类型安全**: 完整的 TypeScript 类型定义
6. **代码清晰**: 逻辑分离，代码结构更清晰

## 支持的颜色格式

- **HEX**: #ff0000
- **RGB**: rgb(255, 0, 0)
- **HSV**: hsv(0, 100%, 100%)
- **HSL**: hsl(0, 100%, 50%)

## 特性

- ✅ 支持多种颜色格式
- ✅ 透明度调节
- ✅ 拖拽交互
- ✅ 键盘输入
- ✅ 响应式设计
- ✅ 无障碍支持
- ✅ TypeScript 支持 