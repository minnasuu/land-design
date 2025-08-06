import { default as React } from 'react';
import { CalendarProps } from './props';
import { default as CalendarHeader } from './CalendarHeader';
declare const Calendar: React.FC<CalendarProps>;
export default Calendar;
export { CalendarHeader };
export { default as WeekdaysRow } from './WeekdaysRow';
export { default as CalendarCell } from './CalendarCell';
export * from './utils/calendarUtils';
