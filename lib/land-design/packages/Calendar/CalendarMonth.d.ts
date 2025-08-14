import { default as React } from 'react';
import { DateInput } from './utils/dateRange';
interface CalendarMonthProps {
    language?: "zh" | "en";
    minDate?: DateInput;
    maxDate?: DateInput;
    onMonthChange?: (month: number, year: number) => void;
    onMonthMouseOver?: (month: number, year: number, mode: "month", e: React.MouseEvent) => void;
    onMonthMouseOut?: (month: number, year: number, mode: "month", e: React.MouseEvent) => void;
    className?: string;
    style?: React.CSSProperties;
}
declare const CalendarMonth: React.FC<CalendarMonthProps>;
export default CalendarMonth;
