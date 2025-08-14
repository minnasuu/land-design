import { default as React } from 'react';
import { DateInput } from './utils/dateRange';
interface CalendarWeekProps {
    language?: "zh" | "en";
    minDate?: DateInput;
    maxDate?: DateInput;
    onWeekChange?: (weekStart: Date, weekEnd: Date, year: number) => void;
    onWeekMouseOver?: (weekStart: Date, weekEnd: Date, year: number, mode: "week", e: React.MouseEvent) => void;
    onWeekMouseOut?: (weekStart: Date, weekEnd: Date, year: number, mode: "week", e: React.MouseEvent) => void;
    className?: string;
    style?: React.CSSProperties;
}
declare const CalendarWeek: React.FC<CalendarWeekProps>;
export default CalendarWeek;
