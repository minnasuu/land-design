import React, { useState, useMemo } from 'react'
import './index.scss';
import CalendarHeader from './CalendarHeader';
import Button from '../Button';
import { DateInput, getYearRange, shouldShowYearSelector, isYearInRange } from './utils/dateRange';

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

const CalendarYear: React.FC<CalendarYearProps> = ({
  language = "zh",
  minDate,
  maxDate,
  onYearChange,
  onYearMouseOver,
  onYearMouseOut,
  className = '',
  style,
}) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  function getCurrentDecade(): number {
    return Math.floor(currentYear / 10) * 10;
  }

  const [currentDecade, setCurrentDecade] = useState<number>(getCurrentDecade());
  const [selectedYear, setSelectedYear] = useState<number>(currentYear);

  // 计算年份范围和是否显示选择器
  const { yearRange, shouldShowYearSelector: showYearSelector } = useMemo(() => {
    const yearRange = getYearRange(minDate, maxDate);
    const shouldShow = shouldShowYearSelector(minDate, maxDate);

    return {
      yearRange,
      shouldShowYearSelector: shouldShow
    };
  }, [minDate, maxDate, currentYear]);

  const handlePrevDecade = () => {
    const newDecade = currentDecade - 10;
    setCurrentDecade(newDecade);
  };

  const handleNextDecade = () => {
    const newDecade = currentDecade + 10;
    setCurrentDecade(newDecade);
  };

  const handleDecadeChange = (decade: number) => {
    setCurrentDecade(decade);
  };

  const handleYearSelect = (year: number) => {
    setSelectedYear(year);
    onYearChange?.(year);
  };

  // 返回当前年
  const handleBackToCurrentYear = () => {
    setCurrentDecade(getCurrentDecade());
    setSelectedYear(currentYear);
    onYearChange?.(currentYear);
  };

  // 生成当前十年的年份数组
  const decadeYears = useMemo(() => {
    const years = [];
    for (let i = 0; i < 10; i++) {
      const year = currentDecade + i;
      years.push(year);
    }
    return years;
  }, [currentDecade]);

  // 生成十年选择器选项
  const decadeOptions = useMemo(() => {
    const decades = [];
    const [minYear, maxYear] = yearRange;
    const startDecade = Math.floor(minYear / 10) * 10;
    const endDecade = Math.floor(maxYear / 10) * 10;

    for (let decade = startDecade; decade <= endDecade; decade += 10) {
      decades.push({
        key: decade.toString(),
        label: `${decade}-${decade + 9}`,
      });
    }
    return decades;
  }, [yearRange]);

  const isCurrentYear = (year: number) => {
    return year === currentYear;
  };

  const isSelectedYear = (year: number) => {
    return year === selectedYear;
  };

  const isYearInRangeCheck = (year: number) => {
    return isYearInRange(year, minDate, maxDate);
  };

  // 判断是否为当前年
  const isCurrentYearInView = decadeYears.includes(currentYear);

  return (
    <div className={`land-calendar-year ${className}`} style={style}>
      <CalendarHeader
        language={language}
        currentYear={currentDecade}
        viewMode="year"
        shouldShowYearSelector={showYearSelector}
        yearRange={yearRange}
        onMonthChange={(month) => {
          // 年视图中，月份变化对应十年的变化
          if (month > 11) {
            handleNextDecade();
          } else if (month < 0) {
            handlePrevDecade();
          }
        }}
        onYearChange={handleDecadeChange}
        customYearDisplay={`${currentDecade}-${currentDecade + 9}`}
        customYearOptions={decadeOptions}
      />

      <div className="land-calendar-years-grid">
        {decadeYears.map((year, index) => {
          const inRange = isYearInRangeCheck(year);
          return (
            <div
              key={index}
              className={`land-calendar-year-item ${isCurrentYear(year) ? "current" : ""
                } ${isSelectedYear(year) ? "selected" : ""
                } ${!inRange ? "disabled" : ""
                }`}
              onClick={() => inRange && handleYearSelect(year)}
              onMouseOver={(e) => {
                if (inRange) {
                  onYearMouseOver?.(year, "year", e);
                }
              }}
              onMouseOut={(e) => {
                if (inRange) {
                  onYearMouseOut?.(year, "year", e);
                }
              }}
            >
              <div className="year-number">
                {year}
              </div>
              {!inRange && (
                <div className="disabled-overlay">
                  {language === "zh" ? "超出范围" : "Out of range"}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!isCurrentYearInView && (
        <Button
          type="transparent"
          status='primary'
          block
          size='small'
          text={language === "zh" ? "返回今天" : "Today"}
          className="land-calendar-btn back"
          onClick={handleBackToCurrentYear}
        />
      )}
    </div>
  );
};

export default CalendarYear; 