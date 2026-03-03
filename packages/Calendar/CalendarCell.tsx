import React from "react";
import { CalendarCellProps } from "./props";
import { CalendarDay } from "./utils/calendarUtils";

// 兼容旧接口
interface LegacyCalendarCellProps {
  day: CalendarDay;
  onDayClick?: (day: CalendarDay) => void;
  onOtherMonthDayClick?: (day: CalendarDay) => void;
  onDayMouseOver?: (day: CalendarDay, e: React.MouseEvent) => void;
  onDayMouseOut?: (day: CalendarDay, e: React.MouseEvent) => void;
  onDayMouseEnter?: (day: CalendarDay, e: React.MouseEvent) => void;
  onDayMouseLeave?: (day: CalendarDay, e: React.MouseEvent) => void;
  children?: React.ReactNode;
  className?: string;
}

type CombinedProps = CalendarCellProps | LegacyCalendarCellProps;

// 类型守卫
function isLegacyProps(props: CombinedProps): props is LegacyCalendarCellProps {
  return "day" in props && !("date" in props);
}

const CalendarCell: React.FC<CombinedProps> = (props) => {
  // 兼容旧版 API
  if (isLegacyProps(props)) {
    const {
      day,
      onDayClick,
      onOtherMonthDayClick,
      onDayMouseOver,
      onDayMouseOut,
      onDayMouseEnter,
      onDayMouseLeave,
      children,
      className = "",
    } = props;

    const handleClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (day.isDisabled) return;

      if (day.isCurrentMonth) {
        onDayClick?.(day);
      } else {
        onOtherMonthDayClick?.(day);
      }
    };

    const handleMouseOver = (e: React.MouseEvent) => {
      if (!day.isDisabled && onDayMouseOver) {
        onDayMouseOver(day, e);
      }
    };

    const handleMouseOut = (e: React.MouseEvent) => {
      if (!day.isDisabled && onDayMouseOut) {
        onDayMouseOut(day, e);
      }
    };

    const handleMouseEnter = (e: React.MouseEvent) => {
      if (!day.isDisabled && onDayMouseEnter) {
        onDayMouseEnter(day, e);
      }
    };

    const handleMouseLeave = (e: React.MouseEvent) => {
      if (!day.isDisabled && onDayMouseLeave) {
        onDayMouseLeave(day, e);
      }
    };

    const cellClassName = [
      "land-calendar__cell",
      day.isToday && "land-calendar__cell--today",
      day.isSelected && "land-calendar__cell--selected",
      day.isDisabled && "land-calendar__cell--disabled",
      !day.isCurrentMonth && "land-calendar__cell--other",
      className,
    ].filter(Boolean).join(" ");

    return (
      <div
        className={cellClassName}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="land-calendar__cell-text">{day.dayNumber}</span>
        {children}
      </div>
    );
  }

  // 新版 API
  const {
    date,
    showOtherMonth = true,
    onClick,
    onOtherMonthClick,
    onMouseEnter,
    onMouseLeave,
    children,
    className = "",
  } = props;

  // 如果不显示其他月份的日期，且当前日期不是本月的，则不渲染
  if (!showOtherMonth && !date.isCurrentMonth) {
    return <div className="land-calendar__cell land-calendar__cell--empty" />;
  }

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (date.isDisabled) return;

    if (date.isCurrentMonth) {
      onClick?.(date);
    } else if (onOtherMonthClick) {
      onOtherMonthClick(date);
    }
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (!date.isDisabled) {
      onMouseEnter?.(date, e);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (!date.isDisabled) {
      onMouseLeave?.(date, e);
    }
  };

  const cellClassName = [
    "land-calendar__cell",
    date.isToday && "land-calendar__cell--today",
    date.isSelected && "land-calendar__cell--selected",
    date.isDisabled && "land-calendar__cell--disabled",
    !date.isCurrentMonth && "land-calendar__cell--other",
    className,
  ].filter(Boolean).join(" ");

  return (
    <div
      className={cellClassName}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="land-calendar__cell-text">{date.day}</span>
      {children}
    </div>
  );
};

export default CalendarCell;
