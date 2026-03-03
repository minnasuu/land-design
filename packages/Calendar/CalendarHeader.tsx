import React, { useMemo } from "react";
import Button from "../Button";
import Icon from "../Icon";
import Select from "../Select";
import { CalendarHeaderProps } from "./props";

// 兼容旧版 API
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
  customYearOptions?: Array<{ key: string; label: string }>;
  rightContent?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  viewMode?: "date" | "week" | "month" | "quarter" | "year";
}

type CombinedProps = CalendarHeaderProps | LegacyCalendarHeaderProps;

// 类型守卫
function isLegacyProps(props: CombinedProps): props is LegacyCalendarHeaderProps {
  return "currentYear" in props;
}

const CalendarHeader: React.FC<CombinedProps> = (props) => {
  // 统一属性名
  const language = props.language || "zh";
  const year = isLegacyProps(props) ? props.currentYear : props.year;
  const month = isLegacyProps(props) ? props.currentMonth : props.month;
  const mode = isLegacyProps(props) ? props.viewMode : props.mode;
  const showYearSelector = isLegacyProps(props) ? props.shouldShowYearSelector : props.showYearSelector;
  const yearRange = props.yearRange || [1970, 2100];
  const prevDisabled = isLegacyProps(props) ? props.monthPrevDisabled : props.prevDisabled;
  const nextDisabled = isLegacyProps(props) ? props.monthNextDisabled : props.nextDisabled;
  const yearDisplay = isLegacyProps(props) ? props.customYearDisplay : props.yearDisplay;
  const yearOptions = isLegacyProps(props) ? props.customYearOptions : props.yearOptions;
  const extra = isLegacyProps(props) ? props.rightContent : props.extra;
  const onPrev = isLegacyProps(props) 
    ? (() => props.onMonthChange?.(month !== undefined ? month - 1 : -1))
    : props.onPrev;
  const onNext = isLegacyProps(props)
    ? (() => props.onMonthChange?.(month !== undefined ? month + 1 : 1))
    : props.onNext;
  const onYearChange = props.onYearChange;
  const className = props.className || "";
  const style = props.style;
  // 生成年份选项
  const years = useMemo(() => {
    if (!showYearSelector) return [];
    if (yearOptions) return yearOptions;

    const [startYear, endYear] = yearRange;
    return Array.from({ length: endYear - startYear + 1 }, (_, i) => ({
      key: `${startYear + i}`,
      label: `${startYear + i}`,
    }));
  }, [showYearSelector, yearRange, yearOptions]);

  // 月份名称映射
  const monthNames = useMemo(() => ({
    0: { en: "January", zh: "一月" },
    1: { en: "February", zh: "二月" },
    2: { en: "March", zh: "三月" },
    3: { en: "April", zh: "四月" },
    4: { en: "May", zh: "五月" },
    5: { en: "June", zh: "六月" },
    6: { en: "July", zh: "七月" },
    7: { en: "August", zh: "八月" },
    8: { en: "September", zh: "九月" },
    9: { en: "October", zh: "十月" },
    10: { en: "November", zh: "十一月" },
    11: { en: "December", zh: "十二月" },
  }), []);

  // 是否显示月份
  const showMonth = mode === "date" || mode === "week";

  // 是否显示双箭头（年份导航）
  const showYearNav = mode === "date" || mode === "week";

  // 是否显示单箭头（月份导航）
  const showMonthNav = mode === "date" || mode === "week";

  return (
    <div className={`land-calendar__header ${className}`} style={style}>
      {/* 左侧导航按钮 */}
      <div className="land-calendar__header-nav">
        {/* 年份后退（双箭头） */}
        {showYearNav && (
          <Button
            variant="text"
            size="small"
            icon={<Icon name="arrow-double" />}
            className="land-calendar__nav-btn land-calendar__nav-btn--prev-year"
            disabled={prevDisabled}
            onClick={() => onYearChange?.(year - 1)}
          />
        )}
        {/* 月份后退（单箭头） */}
        {showMonthNav && (
          <Button
            variant="text"
            size="small"
            icon={<Icon name="arrow" />}
            className="land-calendar__nav-btn land-calendar__nav-btn--prev"
            disabled={prevDisabled}
            onClick={onPrev}
          />
        )}
        {/* 非日期/周模式的后退 */}
        {!showMonthNav && (
          <Button
            variant="text"
            size="small"
            icon={<Icon name="arrow" />}
            className="land-calendar__nav-btn land-calendar__nav-btn--prev"
            disabled={prevDisabled}
            onClick={onPrev}
          />
        )}
      </div>

      {/* 中间标题 */}
      <div className="land-calendar__header-title">
        {/* 年份选择/显示 */}
        <div className="land-calendar__year">
          {showYearSelector && years.length > 0 ? (
            <Select
              variant="transparent"
              value={year.toString()}
              options={years}
              onChange={(val) => onYearChange?.(Number(val))}
            />
          ) : (
            <span className="land-calendar__year-text">
              {yearDisplay || year}
            </span>
          )}
        </div>
        {/* 月份显示 */}
        {showMonth && month !== undefined && (
          <span className="land-calendar__month">
            {language === "zh" ? monthNames[month as keyof typeof monthNames].zh : monthNames[month as keyof typeof monthNames].en}
          </span>
        )}
      </div>

      {/* 右侧自定义内容 */}
      {extra && <div className="land-calendar__header-extra">{extra}</div>}

      {/* 右侧导航按钮 */}
      <div className="land-calendar__header-nav">
        {/* 月份前进（单箭头） */}
        {showMonthNav && (
          <Button
            variant="text"
            size="small"
            icon={<Icon name="arrow" />}
            className="land-calendar__nav-btn land-calendar__nav-btn--next"
            disabled={nextDisabled}
            onClick={onNext}
          />
        )}
        {/* 非日期/周模式的前进 */}
        {!showMonthNav && (
          <Button
            variant="text"
            size="small"
            icon={<Icon name="arrow" />}
            className="land-calendar__nav-btn land-calendar__nav-btn--next"
            disabled={nextDisabled}
            onClick={onNext}
          />
        )}
        {/* 年份前进（双箭头） */}
        {showYearNav && (
          <Button
            variant="text"
            size="small"
            icon={<Icon name="arrow-double" />}
            className="land-calendar__nav-btn land-calendar__nav-btn--next-year"
            disabled={nextDisabled}
            onClick={() => onYearChange?.(year + 1)}
          />
        )}
      </div>
    </div>
  );
};

export default CalendarHeader;
