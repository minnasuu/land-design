import { default as React } from 'react';
interface CalendarHeaderProps {
    language?: "zh" | "en";
    currentYear: number;
    currentMonth?: number;
    shouldShowYearSelector: boolean;
    yearRange: [number, number];
    monthPrevDisabled?: boolean;
    monthNextDisabled?: boolean;
    onMonthChange?: (month: number) => void;
    onYearChange?: (year: number) => void;
    customYearDisplay?: string;
    customYearOptions?: Array<{
        key: string;
        label: string;
    }>;
    rightContent?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    viewMode?: "date" | "week" | "month" | "quarter" | "year";
}
declare const CalendarHeader: React.FC<CalendarHeaderProps>;
export default CalendarHeader;
