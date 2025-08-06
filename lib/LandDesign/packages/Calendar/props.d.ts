import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
import { DateInput } from './utils/dateRange';
/**
 * Calendar组件属性类型定义
 * 包含所有Calendar组件支持的属性及其详细说明
 */
/** 语言类型 */
export type CalendarLanguage = "zh" | "en";
/** 日历视图模式 */
export type CalendarViewMode = "date" | "week" | "month" | "quarter" | "year";
/**
 * Calendar基础属性
 * 包含日历组件的基本配置和内容属性
 */
export interface CalendarBaseProps extends CommonProps {
    /**
     * 子元素
     * 可以传入React节点作为日历组件的内容
     */
    children?: React.ReactNode;
}
/**
 * Calendar语言属性
 * 用于配置日历组件的语言设置
 */
export interface CalendarLanguageProps {
    /**
     * 语言
     * - zh: 中文（默认）
     * - en: 英文
     */
    language?: CalendarLanguage;
}
/**
 * Calendar视图模式属性
 * 用于配置日历组件的显示模式
 */
export interface CalendarViewProps {
    /**
     * 视图模式
     * - date: 日期视图（默认）
     * - week: 周视图
     * - month: 月视图
     * - quarter: 季度视图
     * - year: 年视图
     */
    viewMode?: CalendarViewMode;
}
/**
 * Calendar范围属性
 * 用于配置日历组件的日期范围限制
 * 支持多种日期格式：Date对象、时间戳、日期字符串
 */
export interface CalendarRangeProps {
    /**
     * 最小日期
     * 设置可选择的最小日期
     * 支持格式：
     * - Date对象: new Date('2023-01-01')
     * - 时间戳: 1672531200000
     * - 日期字符串: '2023-01-01', '2023/01/01', '2023-01-01 00:00:00'
     */
    minDate?: DateInput;
    /**
     * 最大日期
     * 设置可选择的最大日期
     * 支持格式：
     * - Date对象: new Date('2025-12-31')
     * - 时间戳: 1735689599999
     * - 日期字符串: '2025-12-31', '2025/12/31', '2025-12-31 23:59:59'
     */
    maxDate?: DateInput;
}
/**
 * Calendar样式属性
 * 用于配置日历组件的视觉样式
 */
export interface CalendarStyleProps {
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义日历组件外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
}
/**
 * Calendar事件属性
 * 用于配置日历组件的交互事件
 */
export interface CalendarEventProps {
    /**
     * 选择天数事件
     * 当用户选择日期时触发
     * @param day 选择的日期
     * @param month 选择的月份
     * @param year 选择的年份
     */
    onDayChange?: (day: number, month: number, year: number) => void;
    /**
     * 选择周事件
     * 当用户选择周时触发
     * @param weekStart 周开始日期
     * @param weekEnd 周结束日期
     * @param year 年份
     */
    onWeekChange?: (weekStart: Date, weekEnd: Date, year: number) => void;
    /**
     * 选择月事件
     * 当用户选择月时触发
     * @param month 选择的月份
     * @param year 选择的年份
     */
    onMonthChange?: (month: number, year: number) => void;
    /**
     * 选择季度事件
     * 当用户选择季度时触发
     * @param quarter 选择的季度
     * @param year 选择的年份
     */
    onQuarterChange?: (quarter: number, year: number) => void;
    /**
     * 选择年事件
     * 当用户选择年时触发
     * @param year 选择的年份
     */
    onYearChange?: (year: number) => void;
    /**
     * 日期项鼠标悬停事件
     * 当鼠标悬停在日期项上时触发
     * @param day 日期
     * @param month 月份
     * @param year 年份
     * @param mode 视图模式
     * @param e 鼠标事件对象
     */
    onDayMouseOver?: (day: number, month: number, year: number, mode: CalendarViewMode, e: React.MouseEvent) => void;
    /**
     * 日期项鼠标离开事件
     * 当鼠标离开日期项时触发
     * @param day 日期
     * @param month 月份
     * @param year 年份
     * @param mode 视图模式
     * @param e 鼠标事件对象
     */
    onDayMouseOut?: (day: number, month: number, year: number, mode: CalendarViewMode, e: React.MouseEvent) => void;
    /**
     * 日期项鼠标进入事件
     * 当鼠标进入日期项时触发
     * @param day 日期
     * @param month 月份
     * @param year 年份
     * @param mode 视图模式
     * @param e 鼠标事件对象
     */
    onDayMouseEnter?: (day: number, month: number, year: number, mode: CalendarViewMode, e: React.MouseEvent) => void;
    /**
     * 日期项鼠标离开事件
     * 当鼠标离开日期项时触发
     * @param day 日期
     * @param month 月份
     * @param year 年份
     * @param mode 视图模式
     * @param e 鼠标事件对象
     */
    onDayMouseLeave?: (day: number, month: number, year: number, mode: CalendarViewMode, e: React.MouseEvent) => void;
    /**
     * 周项鼠标悬停事件
     * 当鼠标悬停在周项上时触发
     * @param weekStart 周开始日期
     * @param weekEnd 周结束日期
     * @param year 年份
     * @param mode 视图模式
     * @param e 鼠标事件对象
     */
    onWeekMouseOver?: (weekStart: Date, weekEnd: Date, year: number, mode: CalendarViewMode, e: React.MouseEvent) => void;
    /**
     * 周项鼠标离开事件
     * 当鼠标离开周项时触发
     * @param weekStart 周开始日期
     * @param weekEnd 周结束日期
     * @param year 年份
     * @param mode 视图模式
     * @param e 鼠标事件对象
     */
    onWeekMouseOut?: (weekStart: Date, weekEnd: Date, year: number, mode: CalendarViewMode, e: React.MouseEvent) => void;
    /**
     * 月项鼠标悬停事件
     * 当鼠标悬停在月项上时触发
     * @param month 月份
     * @param year 年份
     * @param mode 视图模式
     * @param e 鼠标事件对象
     */
    onMonthMouseOver?: (month: number, year: number, mode: CalendarViewMode, e: React.MouseEvent) => void;
    /**
     * 月项鼠标离开事件
     * 当鼠标离开月项时触发
     * @param month 月份
     * @param year 年份
     * @param mode 视图模式
     * @param e 鼠标事件对象
     */
    onMonthMouseOut?: (month: number, year: number, mode: CalendarViewMode, e: React.MouseEvent) => void;
    /**
     * 季度项鼠标悬停事件
     * 当鼠标悬停在季度项上时触发
     * @param quarter 季度
     * @param year 年份
     * @param mode 视图模式
     * @param e 鼠标事件对象
     */
    onQuarterMouseOver?: (quarter: number, year: number, mode: CalendarViewMode, e: React.MouseEvent) => void;
    /**
     * 季度项鼠标离开事件
     * 当鼠标离开季度项时触发
     * @param quarter 季度
     * @param year 年份
     * @param mode 视图模式
     * @param e 鼠标事件对象
     */
    onQuarterMouseOut?: (quarter: number, year: number, mode: CalendarViewMode, e: React.MouseEvent) => void;
    /**
     * 年项鼠标悬停事件
     * 当鼠标悬停在年项上时触发
     * @param year 年份
     * @param mode 视图模式
     * @param e 鼠标事件对象
     */
    onYearMouseOver?: (year: number, mode: CalendarViewMode, e: React.MouseEvent) => void;
    /**
     * 年项鼠标离开事件
     * 当鼠标离开年项时触发
     * @param year 年份
     * @param mode 视图模式
     * @param e 鼠标事件对象
     */
    onYearMouseOut?: (year: number, mode: CalendarViewMode, e: React.MouseEvent) => void;
}
/**
 * CalendarDate组件属性
 * CalendarDate组件的专用属性
 */
export interface CalendarDateProps extends CalendarLanguageProps, CalendarRangeProps, CalendarStyleProps, Pick<CalendarEventProps, 'onDayChange'> {
}
/**
 * Calendar组件完整属性类型
 * 合并了所有属性接口
 */
export type CalendarProps = CalendarBaseProps & CalendarLanguageProps & CalendarViewProps & CalendarRangeProps & CalendarStyleProps & CalendarEventProps;
/**
 * 属性优先级说明：
 * 1. language控制日历显示的语言
 * 2. viewMode控制日历的显示模式（date/week/month/quarter/year）
 * 3. minDate和maxDate限制可选择的日期范围，支持多种格式
 * 4. onDayChange处理日期选择事件
 * 5. onWeekChange处理周选择事件
 * 6. onMonthChange处理月选择事件
 * 7. onQuarterChange处理季度选择事件
 * 8. onYearChange处理年选择事件
 * 9. style和className会覆盖默认样式
 * 10. 当minDate和maxDate未设置时，使用默认范围
 * 11. 语言设置会影响月份名称、星期名称等显示
 * 12. 不同视图模式会触发对应的事件回调
 * 13. 样式优先级：style > className > 默认样式
 * 14. 日期范围会影响所有视图模式的选择限制
 * 15. 日期格式支持：Date对象、时间戳、日期字符串
 */ 
