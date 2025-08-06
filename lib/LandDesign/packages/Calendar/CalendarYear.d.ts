import { default as React } from 'react';
import { DateInput } from './utils/dateRange';
interface CalendarYearProps {
    language?: "zh" | "en";
    minDate?: DateInput;
    maxDate?: DateInput;
    onYearChange?: (year: number) => void;
    onYearMouseOver?: (year: number, mode: "year", e: React.MouseEvent) => void;
    onYearMouseOut?: (year: number, mode: "year", e: React.MouseEvent) => void;
    className?: string;
    style?: React.CSSProperties;
}
declare const CalendarYear: React.FC<CalendarYearProps>;
export default CalendarYear;
