import { default as React } from 'react';
import { CalendarHeaderProps } from './props';
interface LegacyCalendarHeaderProps {
    language?: "zh" | "en";
    currentYear: number;
    currentMonth?: number;
    shouldShowYearSelector?: boolean;
    yearRange?: [number, number];
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
type CombinedProps = CalendarHeaderProps | LegacyCalendarHeaderProps;
declare const CalendarHeader: React.FC<CombinedProps>;
export default CalendarHeader;
