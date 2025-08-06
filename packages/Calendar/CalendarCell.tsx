import React from 'react';
import { CalendarDay } from './utils/calendarUtils';

interface CalendarCellProps {
  day: CalendarDay;
  onDayClick?: (day: CalendarDay) => void;
  onDayMouseOver?: (day: CalendarDay, e: React.MouseEvent) => void;
  onDayMouseOut?: (day: CalendarDay, e: React.MouseEvent) => void;
  onDayMouseEnter?: (day: CalendarDay, e: React.MouseEvent) => void;
  onDayMouseLeave?: (day: CalendarDay, e: React.MouseEvent) => void;
  children?: React.ReactNode;
  className?: string;
}

const CalendarCell: React.FC<CalendarCellProps> = ({
  day,
  onDayClick,
  onDayMouseOver,
  onDayMouseOut,
  onDayMouseEnter,
  onDayMouseLeave,
  children,
  className = ''
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!day.isDisabled && onDayClick) {
      onDayClick(day);
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

  return (
    <div
      className={`land-calendar-item day ${day.isToday ? 'current' : ''}${day.isSelected ? ' selected' : ''}${day.isDisabled ? ' disabled' : ''}${!day.isCurrentMonth ? ' other-month' : ''} ${className}`}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="day-number">{day.dayNumber}</div>
      {children}
    </div>
  );
};

export default CalendarCell; 