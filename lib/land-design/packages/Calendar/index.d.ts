import { default as React } from 'react';
import { CalendarProps } from './props';
declare const Calendar: React.FC<CalendarProps>;
export default Calendar;
export { default as CalendarHeader } from './CalendarHeader';
export { default as WeekdaysRow } from './WeekdaysRow';
export { default as CalendarCell } from './CalendarCell';
export * from './utils/calendarUtils';
export * from './props';
