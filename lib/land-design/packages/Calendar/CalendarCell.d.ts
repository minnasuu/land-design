import { default as React } from 'react';
import { CalendarCellProps } from './props';
import { CalendarDay } from './utils/calendarUtils';
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
declare const CalendarCell: React.FC<CombinedProps>;
export default CalendarCell;
