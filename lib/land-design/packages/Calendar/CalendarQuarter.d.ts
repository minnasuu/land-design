import { default as React } from 'react';
import { DateInput } from './utils/dateRange';
interface CalendarQuarterProps {
    language?: "zh" | "en";
    minDate?: DateInput;
    maxDate?: DateInput;
    onQuarterChange?: (quarter: number, year: number) => void;
    onQuarterMouseOver?: (quarter: number, year: number, mode: "quarter", e: React.MouseEvent) => void;
    onQuarterMouseOut?: (quarter: number, year: number, mode: "quarter", e: React.MouseEvent) => void;
    className?: string;
    style?: React.CSSProperties;
}
declare const CalendarQuarter: React.FC<CalendarQuarterProps>;
export default CalendarQuarter;
