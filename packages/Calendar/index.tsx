import React from 'react'
import './index.scss';
import { CalendarProps } from './props';
import CalendarDate from './CalendarDate';
import CalendarWeek from './CalendarWeek';
import CalendarMonth from './CalendarMonth';
import CalendarQuarter from './CalendarQuarter';
import CalendarYear from './CalendarYear';
import CalendarHeader from './CalendarHeader';

const Calendar: React.FC<CalendarProps> = ({
  viewMode = "date",
  language = "zh",
  minDate,
  maxDate,
  onDayChange,
  onWeekChange,
  onMonthChange,
  onQuarterChange,
  onYearChange,
  onDayMouseOver,
  onDayMouseOut,
  onDayMouseEnter,
  onDayMouseLeave,
  onWeekMouseOver,
  onWeekMouseOut,
  onMonthMouseOver,
  onMonthMouseOut,
  onQuarterMouseOver,
  onQuarterMouseOut,
  onYearMouseOver,
  onYearMouseOut,
  className,
  style,
  ...restProps
}) => {
  // 根据视图模式渲染对应的组件
  const renderCalendarView = () => {
    switch (viewMode) {
      case "date":
        return (
          <CalendarDate
            language={language}
            minDate={minDate}
            maxDate={maxDate}
            onDayChange={onDayChange}
            onDayMouseOver={onDayMouseOver}
            onDayMouseOut={onDayMouseOut}
            onDayMouseEnter={onDayMouseEnter}
            onDayMouseLeave={onDayMouseLeave}
            className={className}
          />
        );
      case "week":
        return (
          <CalendarWeek
            language={language}
            minDate={minDate}
            maxDate={maxDate}
            onWeekChange={onWeekChange}
            onWeekMouseOver={onWeekMouseOver}
            onWeekMouseOut={onWeekMouseOut}
          />
        );
      case "month":
        return (
          <CalendarMonth
            language={language}
            minDate={minDate}
            maxDate={maxDate}
            onMonthChange={onMonthChange}
            onMonthMouseOver={onMonthMouseOver}
            onMonthMouseOut={onMonthMouseOut}
          />
        );
      case "quarter":
        return (
          <CalendarQuarter
            language={language}
            minDate={minDate}
            maxDate={maxDate}
            onQuarterChange={onQuarterChange}
            onQuarterMouseOver={onQuarterMouseOver}
            onQuarterMouseOut={onQuarterMouseOut}
          />
        );
      case "year":
        return (
          <CalendarYear
            language={language}
            minDate={minDate}
            maxDate={maxDate}
            onYearChange={onYearChange}
            onYearMouseOver={onYearMouseOver}
            onYearMouseOut={onYearMouseOut}
          />
        );
      default:
        return (
          <CalendarDate
            language={language}
            minDate={minDate}
            maxDate={maxDate}
            onDayChange={onDayChange}
            onDayMouseOver={onDayMouseOver}
            onDayMouseOut={onDayMouseOut}
            onDayMouseEnter={onDayMouseEnter}
            onDayMouseLeave={onDayMouseLeave}
          />
        );
    }
  };

  return (
    <div
      className={`land-calendar land-calendar-${viewMode} ${className}`}
      style={style}
      {...restProps}
    >
      {renderCalendarView()}
    </div>
  );
};

export default Calendar;
export { CalendarHeader };
export { default as WeekdaysRow } from './WeekdaysRow';
export { default as CalendarCell } from './CalendarCell';
export * from './utils/calendarUtils';
