# MentionTextarea 组件

一个支持@提及功能的文本输入框组件，可以在文本中插入和管理提及项。

## 功能特性

- ✅ **@符号触发**: 输入@符号自动触发提及功能
- ✅ **富文本显示**: 支持mention项的特殊显示样式  
- ✅ **点击编辑**: 点击已有的mention可以重新编辑
- ✅ **键盘操作**: 支持Backspace/Delete键删除整个mention
- ✅ **输入法兼容**: 完美支持中文输入法
- ✅ **位置计算**: 精确计算@符号的像素位置用于弹窗定位
- ✅ **数量限制**: 支持限制最大mention数量
- ✅ **双值系统**: 区分显示值和真实值
- ✅ **TypeScript**: 完整的类型定义支持

## 基础用法

```tsx
import { MentionTextarea } from '@land-design/pro';
import type { MentionItem, MentionChangeDetail } from '@land-design/pro';

function App() {
  const [value, setValue] = useState('');
  const [mentions, setMentions] = useState<MentionItem[]>([]);

  const handleChange = (
    displayValue: string, 
    realValue: string, 
    mentions: MentionItem[], 
    detail?: MentionChangeDetail
  ) => {
    setValue(displayValue);
    setMentions(mentions);
    console.log('Real value:', realValue);
  };

  return (
    <MentionTextarea
      value={value}
      mentions={mentions}
      placeholder="输入@符号尝试提及功能..."
      onChange={handleChange}
    />
  );
}
```

## 带选择弹窗的高级用法

```tsx
import { MentionTextarea, useMentionInsert } from '@land-design/pro';

function AdvancedExample() {
  const [value, setValue] = useState('');
  const [mentions, setMentions] = useState<MentionItem[]>([]);
  const [showList, setShowList] = useState(false);
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const { insertProduct } = useMentionInsert({
    textValue: value,
    mentions: mentions,
    editingMentionIndex: -1
  });

  const handleAtTrigger = (params) => {
    if (params.trigger === 'close') {
      setShowList(false);
    } else {
      setShowList(true);
      setPosition({ left: params.left, top: params.top + 44 });
    }
  };

  const handleSelect = (product) => {
    const result = insertProduct(product);
    if (result) {
      setValue(result.newTextValue);
      setMentions(result.newMentions);
    }
    setShowList(false);
  };

  return (
    <div className="relative">
      <MentionTextarea
        value={value}
        mentions={mentions}
        onAtTrigger={handleAtTrigger}
        onChange={(displayValue, realValue, mentions) => {
          setValue(displayValue);
          setMentions(mentions);
        }}
      />
      
      {showList && (
        <div 
          className="absolute z-10 bg-white border rounded shadow-lg"
          style={{ left: position.left, top: position.top }}
        >
          {products.map(product => (
            <div 
              key={product.id}
              onClick={() => handleSelect(product)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {product.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

## API 参考

### MentionTextareaProps

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| value | string | '' | 文本框的值 |
| mentions | MentionItem[] | [] | 提及项列表 |
| autoFocus | boolean | false | 是否自动聚焦 |
| onChange | function | - | 值变化时的回调函数 |
| onFocus | function | - | 聚焦时的回调函数 |
| onBlur | function | - | 失焦时的回调函数 |
| onAtTrigger | function | - | @符号触发时的回调函数 |
| placeholder | string | - | 占位符文本 |
| disabled | boolean | false | 是否禁用 |
| maxLength | number | - | 最大字符长度 |
| maxMentions | number | 10 | 最多允许的mention数量 |
| className | string | - | 自定义类名 |
| style | CSSProperties | - | 自定义样式 |

### MentionItem

```tsx
interface MentionItem {
  id: string;                // 唯一标识
  name: string;              // 完整名称
  displayName: string;       // 显示名称（可能被截断）
  type: 'product';           // 类型
  startIndex: number;        // 在显示值中的起始位置
  endIndex: number;          // 在显示值中的结束位置
}
```

### onChange 回调参数

```tsx
onChange?: (
  displayValue: string,      // 显示值（包含空格的用户可见文本）
  realValue: string,         // 真实值（不含空格的完整名称）
  mentions: MentionItem[],   // 当前的mention列表
  detail?: MentionChangeDetail // 变化详情
) => void;
```

### onAtTrigger 回调参数

```tsx
onAtTrigger?: (params: {
  left: number;              // @符号的水平像素位置，-1表示关闭
  top: number;               // @符号的垂直像素位置，-1表示关闭
  textareaWidth: number;     // textarea的宽度
  startIndex: number;        // @符号在文本中的索引位置，-1表示关闭
  trigger: 'click' | 'input' | 'close';  // 触发方式
  mention?: MentionItem;     // 被点击的mention（仅在trigger为click时有值）
}) => void;
```

## useMentionInsert Hook

用于处理mention的插入和替换逻辑。

```tsx
const { insertProduct } = useMentionInsert({
  textValue: string,           // 当前文本值
  mentions: MentionItem[],     // 当前mentions列表
  editingMentionIndex: number  // 正在编辑的mention索引，-1表示新增模式
});

// 插入或替换mention
const result = insertProduct(product);
if (result) {
  const { newTextValue, newMentions } = result;
  // 更新状态...
}
```

## 键盘快捷键

- `@` - 触发mention选择
- `Backspace` - 删除光标前的mention（整个删除）
- `Delete` - 删除光标后的mention（整个删除）
- `点击mention` - 进入编辑模式，可重新选择
- `Esc` - 关闭mention选择弹窗

## 样式自定义

组件提供了CSS类名用于样式自定义：

```scss
.land-mention-textarea {
  // 主容器
  &__container {
    // 相对定位容器
  }
  
  &__input {
    // 输入框样式
  }
  
  &__display {
    // 富文本显示层
  }
  
  &__measure {
    // 测量元素（隐藏）
  }
}

.land-mention-item {
  // mention项样式
}
```

## 注意事项

1. **双值系统**: 组件维护displayValue（用户看到的）和realValue（真实数据）两个值
2. **位置计算**: @符号的位置计算基于当前行的文本长度
3. **输入法兼容**: 组件会检测输入法状态，避免在输入过程中触发mention搜索
4. **mention完整性**: 任何对mention内部的编辑都会导致整个mention被删除
5. **性能优化**: 大量mention时建议使用虚拟滚动或分页加载

## 更多示例

查看 `Example.tsx` 文件获取更多使用示例，包括：

- 基础用法
- 预设内容
- 商品选择
- 多类型提及
- 数量限制
- 禁用状态
- 键盘操作说明