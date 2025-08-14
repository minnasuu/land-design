import { DateInput } from './dateRange';
export interface CalendarDay {
    date: Date;
    isCurrentMonth: boolean;
    isToday: boolean;
    isSelected: boolean;
    isDisabled: boolean;
    dayNumber: number;
    month: number;
    year: number;
}
export interface CalendarWeek {
    dates: Date[];
    isCurrentWeek: boolean;
    isSelected: boolean;
    isDisabled: boolean;
    weekStart: Date;
    weekEnd: Date;
}
export declare function getMonthDaysGrid(year: number, month: number, selectedDay?: number, minDate?: DateInput, maxDate?: DateInput): CalendarDay[];
export declare function getMonthWeeks(year: number, month: number, selectedWeek?: number, minDate?: DateInput, maxDate?: DateInput): CalendarWeek[];
export declare function isCurrentWeekInMonth(weekDates: Date[], today: Date): boolean;
export declare const weekdays: {
    zh: string;
    en: string;
}[];
export declare function getHolidays(year: number, language?: "zh" | "en"): Promise<any>;
