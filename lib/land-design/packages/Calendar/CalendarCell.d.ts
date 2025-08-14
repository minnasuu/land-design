import { default as React } from 'react';
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
declare const CalendarCell: React.FC<CalendarCellProps>;
export default CalendarCell;
