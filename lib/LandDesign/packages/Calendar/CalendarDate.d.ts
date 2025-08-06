import { default as React } from 'react';
import { DateInput } from './utils/dateRange';
interface CalendarDateProps {
    language?: "zh" | "en";
    minDate?: DateInput;
    maxDate?: DateInput;
    onDayChange?: (day: number, month: number, year: number) => void;
    onDayMouseOver?: (day: number, month: number, year: number, mode: "date", e: React.MouseEvent) => void;
    onDayMouseOut?: (day: number, month: number, year: number, mode: "date", e: React.MouseEvent) => void;
    onDayMouseEnter?: (day: number, month: number, year: number, mode: "date", e: React.MouseEvent) => void;
    onDayMouseLeave?: (day: number, month: number, year: number, mode: "date", e: React.MouseEvent) => void;
    className?: string;
    style?: React.CSSProperties;
}
declare const CalendarDate: React.FC<CalendarDateProps>;
export default CalendarDate;
