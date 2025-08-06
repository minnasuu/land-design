import React, { useState, useMemo } from 'react'
import './index.scss';
import CalendarHeader from './CalendarHeader';
import Button from '../Button';
import { DateInput, getYearRange, shouldShowYearSelector, isQuarterInRange } from './utils/dateRange';

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

const CalendarQuarter: React.FC<CalendarQuarterProps> = ({
  language = "zh",
  minDate,
  maxDate,
  onQuarterChange,
  onQuarterMouseOver,
  onQuarterMouseOut,
  className = '',
  style,
}) => {
  const currentDate = new Date();
  const currentYearValue = currentDate.getFullYear();

  function getCurrentQuarter(): number {
    const month = new Date().getMonth();
    return Math.floor(month / 3) + 1;
  }

  const [currentYear, setCurrentYear] = useState(currentYearValue);
  const [selectedQuarter, setSelectedQuarter] = useState<number>(getCurrentQuarter());
  const [selectedYear, setSelectedYear] = useState<number>(currentYearValue);

  // 计算年份范围和是否显示选择器
  const { yearRange, shouldShowYearSelector: showYearSelector } = useMemo(() => {
    const yearRange = getYearRange(minDate, maxDate);
    const shouldShow = shouldShowYearSelector(minDate, maxDate);

    return {
      yearRange,
      shouldShowYearSelector: shouldShow
    };
  }, [minDate, maxDate]);

  const handlePrevYear = () => {
    const newYear = currentYear - 1;
    setCurrentYear(newYear);
  };

  const handleNextYear = () => {
    const newYear = currentYear + 1;
    setCurrentYear(newYear);
  };

  const handleYearChange = (year: number) => {
    if (!isNaN(year)) {
      setCurrentYear(year);
    }
  };

  const handleQuarterSelect = (quarter: number) => {
    setSelectedQuarter(quarter);
    setSelectedYear(currentYear);
    onQuarterChange?.(quarter, currentYear);
  };

  // 返回当前季度
  const handleBackToCurrentQuarter = () => {
    const currentQuarter = getCurrentQuarter();
    setCurrentYear(currentYearValue);
    setSelectedQuarter(currentQuarter);
    setSelectedYear(currentYearValue);
    onQuarterChange?.(currentQuarter, currentYearValue);
  };

  const quarters = [
    {
      zh: "第一季度",
      en: "Q1",
      value: 1,
      months: language === "zh" ? "1-3月" : "Jan-Mar",
      description: language === "zh" ? "春季" : "Spring"
    },
    {
      zh: "第二季度",
      en: "Q2",
      value: 2,
      months: language === "zh" ? "4-6月" : "Apr-Jun",
      description: language === "zh" ? "夏季" : "Summer"
    },
    {
      zh: "第三季度",
      en: "Q3",
      value: 3,
      months: language === "zh" ? "7-9月" : "Jul-Sep",
      description: language === "zh" ? "秋季" : "Autumn"
    },
    {
      zh: "第四季度",
      en: "Q4",
      value: 4,
      months: language === "zh" ? "10-12月" : "Oct-Dec",
      description: language === "zh" ? "冬季" : "Winter"
    },
  ];

  const isCurrentQuarter = (quarter: number) => {
    return currentYear === currentYearValue && quarter === getCurrentQuarter();
  };

  const isSelectedQuarter = (quarter: number) => {
    return currentYear === selectedYear && quarter === selectedQuarter;
  };

  // 判断是否为当前季度
  const isCurrentQuarterInView = currentYear === currentYearValue;

  return (
    <div className={`land-calendar-quarter ${className}`} style={style}>
      <CalendarHeader
        language={language}
        currentYear={currentYear}
        viewMode="quarter"
        shouldShowYearSelector={showYearSelector}
        yearRange={yearRange}
        onMonthChange={(month) => {
          // 季度视图中，月份变化对应年份的变化
          if (month > 11) {
            handleNextYear();
          } else if (month < 0) {
            handlePrevYear();
          }
        }}
        onYearChange={handleYearChange}
      />

      <div className="land-calendar-quarters-grid">
        {quarters.map((quarter, index) => {
          const isInRange = isQuarterInRange(currentYear, quarter.value, minDate, maxDate);
          return (
            <div
              key={index}
              className={`land-calendar-quarter-item ${isCurrentQuarter(quarter.value) ? "current" : ""
                } ${isSelectedQuarter(quarter.value) ? "selected" : ""
                } ${!isInRange ? "disabled" : ""}`}
              onClick={() => isInRange && handleQuarterSelect(quarter.value)}
              onMouseOver={(e) => {
                if (isInRange) {
                  onQuarterMouseOver?.(quarter.value, currentYear, "quarter", e);
                }
              }}
              onMouseOut={(e) => {
                if (isInRange) {
                  onQuarterMouseOut?.(quarter.value, currentYear, "quarter", e);
                }
              }}
            >
              <div className="quarter-header">
                <div className="quarter-name">
                  {language === "zh" ? quarter.zh : quarter.en}
                </div>
              </div>
              <div className="quarter-months">
                {quarter.months}
              </div>
              <div className="quarter-description">
                {quarter.description}
              </div>
            </div>
          );
        })}
      </div>

      {!isCurrentQuarterInView && (
        <Button
          type="transparent"
          status='primary'
          block
          size='small'
          text={language === "zh" ? "返回今天" : "Today"}
          className="land-calendar-btn back"
          onClick={handleBackToCurrentQuarter}
        />
      )}
    </div>
  );
};

export default CalendarQuarter; 