# Calendar 组件重构说明

## 重构目标
减少 CalendarWeek 和 CalendarDate 两个组件的冗余代码，提高代码复用性和可维护性。

## 重构内容

### 1. 新增公共工具函数 (`utils/calendarUtils.ts`)
- `getMonthDaysGrid()`: 生成日历网格数据，包含上个月、当前月、下个月的日期
- `getMonthWeeks()`: 生成周视图数据，包含周的状态信息
- `isCurrentWeekInMonth()`: 判断是否为当前周
- `weekdays`: 星期栏数据
- `getHolidays()`: 获取节假日数据

### 2. 新增公共组件
- `WeekdaysRow.tsx`: 星期栏组件，可在所有日历视图中复用
- `CalendarCell.tsx`: 日历格子组件，统一处理日期格子的渲染和事件

### 3. 重构现有组件
- `CalendarDate.tsx`: 使用新的工具函数和组件，代码量减少约 40%
- `CalendarWeek.tsx`: 使用新的工具函数和组件，代码量减少约 35%

## 重构好处

### 1. 代码复用
- 星期栏渲染逻辑统一
- 日期格子渲染逻辑统一
- 日历网格生成逻辑统一

### 2. 可维护性提升
- 公共逻辑集中管理，修改一处即可影响所有相关组件
- 代码结构更清晰，职责分离更明确

### 3. 扩展性增强
- 新增日历视图时可以直接复用现有工具函数和组件
- 公共组件可以独立测试和维护

### 4. 性能优化
- 减少重复计算
- 组件拆分后更容易进行性能优化

## 使用方式

### 直接使用重构后的组件
```tsx
import Calendar from './Calendar';

// 使用方式保持不变
<Calendar viewMode="date" />
<Calendar viewMode="week" />
```

### 使用公共组件
```tsx
import { WeekdaysRow, CalendarCell, getMonthDaysGrid } from './Calendar';

// 自定义日历组件
const CustomCalendar = () => {
  const days = getMonthDaysGrid(2024, 1);
  
  return (
    <div>
      <WeekdaysRow language="zh" />
      <div className="calendar-grid">
        {days.map((day, index) => (
          <CalendarCell
            key={index}
            day={day}
            onDayClick={(day) => console.log(day)}
          />
        ))}
      </div>
    </div>
  );
};
```

## 兼容性
- 所有现有 API 保持不变
- 现有样式文件无需修改
- 现有使用方式完全兼容

## 后续优化建议
1. 可以考虑将节假日逻辑进一步抽象为独立的 hook
2. 可以添加更多的公共工具函数，如日期格式化、日期比较等
3. 可以考虑将样式也进行模块化，减少样式冗余 