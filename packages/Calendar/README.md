# Calendar 日历组件

Calendar 组件是一个功能丰富的日历组件，支持多种视图模式，包括日期、周、月、季度和年视图。

## 功能特性

- 🗓️ **多种视图模式**: 支持 date、week、month、quarter、year 五种视图模式
- 🌍 **国际化支持**: 支持中文和英文两种语言
- 📅 **年份范围控制**: 可设置最小和最大年份范围
- 🎯 **事件回调**: 提供丰富的事件回调函数
- 🎨 **自定义样式**: 支持自定义样式和类名
- 📱 **响应式设计**: 适配不同屏幕尺寸

## 视图模式

### Date 视图 (默认)
传统的月历视图，显示单个月份的日期网格，支持日期选择和节假日显示。

### Week 视图
周视图，显示当前周的七天，支持周选择和导航，显示日期和月份信息。

### Month 视图
月视图，显示整年的12个月份概览，支持月份选择和年份切换。

### Quarter 视图
季度视图，显示四个季度的概览，包含季度名称、月份范围和季节描述。

### Year 视图
年视图，显示十年的年份选择，支持十年切换和年份范围限制。

## 基本用法

```tsx
import Calendar from '@land-design/Calendar';

// 基本用法 - 日期视图
<Calendar />

// 指定视图模式
<Calendar viewMode="week" />
<Calendar viewMode="month" />
<Calendar viewMode="quarter" />
<Calendar viewMode="year" />

// 设置语言
<Calendar language="en" />

// 设置年份范围
<Calendar minYear={2020} maxYear={2030} />

// 事件处理
<Calendar 
  viewMode="date"
  onDayChange={(day, month, year) => console.log(day, month, year)}
  onWeekChange={(weekStart, weekEnd, year) => console.log(weekStart, weekEnd, year)}
  onMonthChange={(month, year) => console.log(month, year)}
  onQuarterChange={(quarter, year) => console.log(quarter, year)}
  onYearChange={(year) => console.log(year)}
/>
```

## API

### Calendar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| viewMode | 视图模式 | `'date' \| 'week' \| 'month' \| 'quarter' \| 'year'` | `'date'` |
| language | 语言 | `'zh' \| 'en'` | `'zh'` |
| minYear | 最小年份 | `number` | - |
| maxYear | 最大年份 | `number` | - |
| onDayChange | 日期选择回调 | `(day: number, month: number, year: number) => void` | - |
| onWeekChange | 周选择回调 | `(weekStart: Date, weekEnd: Date, year: number) => void` | - |
| onMonthChange | 月选择回调 | `(month: number, year: number) => void` | - |
| onQuarterChange | 季度选择回调 | `(quarter: number, year: number) => void` | - |
| onYearChange | 年选择回调 | `(year: number) => void` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |

## 年份范围逻辑

Calendar 组件的年份显示逻辑如下：

1. **未设置 minYear 和 maxYear**: 显示今年，不显示年份选择器
2. **只设置 minYear**: 范围从 minYear 到今年，如果范围大于1年则显示选择器
3. **只设置 maxYear**: 范围从今年到 maxYear，如果范围大于1年则显示选择器
4. **同时设置 minYear 和 maxYear**: 范围从 minYear 到 maxYear，如果范围大于1年则显示选择器
5. **单一年份**: 如果计算出的范围只有一年，则不显示选择器

## 组件结构

```
Calendar/
├── index.tsx          # 主组件，负责视图模式切换
├── CalendarHeader.tsx # 公共头部组件
├── CalendarDate.tsx   # 日期视图组件
├── CalendarWeek.tsx   # 周视图组件
├── CalendarMonth.tsx  # 月视图组件
├── CalendarQuarter.tsx # 季度视图组件
├── CalendarYear.tsx   # 年视图组件
├── props.ts          # 类型定义
├── index.scss        # 样式文件
├── Example.tsx       # 示例文件
└── README.md         # 文档
```

## CalendarHeader 组件

CalendarHeader 是一个公共的头部组件，被所有视图模式共享使用。它提供了统一的导航和年份选择功能。

### CalendarHeader Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| language | 语言 | `'zh' \| 'en'` | `'zh'` |
| currentYear | 当前年份 | `number` | - |
| currentMonth | 当前月份 | `number` | - |
| shouldShowYearSelector | 是否显示年份选择器 | `boolean` | - |
| yearRange | 年份范围 | `[number, number]` | - |
| monthPrevDisabled | 上一月按钮是否禁用 | `boolean` | `false` |
| monthNextDisabled | 下一月按钮是否禁用 | `boolean` | `false` |
| onPrevMonth | 上一月回调 | `() => void` | - |
| onNextMonth | 下一月回调 | `() => void` | - |
| onYearChange | 年份变化回调 | `(year: number) => void` | - |
| onBackToDate | 返回今天回调 | `() => void` | - |
| showBackButton | 是否显示返回按钮 | `boolean` | `false` |
| customYearDisplay | 自定义年份显示文本 | `string` | - |
| customYearOptions | 自定义年份选项 | `Array<{key: string, label: string}>` | - |
| rightContent | 右侧自定义内容 | `React.ReactNode` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |

## 视图特性

### Date 视图特性
- 显示单个月份的日期网格
- 支持节假日显示（红点标记）
- 当前日期高亮显示
- 支持年份和月份切换
- 返回今天按钮

### Week 视图特性
- 显示当前周的七天
- 支持周选择器（第1-52周）
- 显示日期和月份信息
- 当前日期高亮显示

### Month 视图特性
- 3x4网格显示12个月份
- 当前月份标记
- 支持年份切换
- 月份选择回调

### Quarter 视图特性
- 2x2网格显示四个季度
- 显示季度名称、月份范围和季节描述
- 当前季度标记
- 支持年份切换

### Year 视图特性
- 5x2网格显示十年
- 支持十年切换
- 年份范围限制
- 超出范围的年份禁用显示

## 样式定制

Calendar 组件使用 CSS 变量进行样式定制，主要变量包括：

```scss
// 颜色变量
--color-white: #FFF;
--color-gray-1: #FAFAFA;
--color-gray-2: #F6F6F6;
--color-blue-1: #E8F3FF;
--color-blue-6: #165DFF;

// 间距变量
--gap-s: 4px;
--gap-m: 8px;
--gap-l: 12px;

// 圆角变量
--radius-xs: 2px;
--radius-s: 4px;
--radius-m: 8px;

// 过渡变量
--transition-s: 0.15s;
```

## 浏览器兼容性

- Chrome >= 60
- Firefox >= 60
- Safari >= 12
- Edge >= 79

## 开发计划

- [x] 实现 Date 视图组件
- [x] 实现 Week 视图组件
- [x] 实现 Month 视图组件
- [x] 实现 Quarter 视图组件
- [x] 实现 Year 视图组件
- [ ] 添加更多自定义选项
- [ ] 支持更多语言
- [ ] 添加主题支持
- [ ] 支持农历显示
- [ ] 支持时区切换 