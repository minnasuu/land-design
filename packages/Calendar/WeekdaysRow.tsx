import React, { useMemo } from "react";
import { WeekdaysRowProps } from "./props";

const WeekdaysRow: React.FC<WeekdaysRowProps> = ({
  language = "zh",
  weekStartDay = 0,
  className = "",
}) => {
  const weekdays = useMemo(() => {
    const days = [
      { zh: "日", en: "Su" },
      { zh: "一", en: "Mo" },
      { zh: "二", en: "Tu" },
      { zh: "三", en: "We" },
      { zh: "四", en: "Th" },
      { zh: "五", en: "Fr" },
      { zh: "六", en: "Sa" },
    ];

    // 根据起始日调整顺序
    if (weekStartDay > 0) {
      return [...days.slice(weekStartDay), ...days.slice(0, weekStartDay)];
    }
    return days;
  }, [weekStartDay]);

  return (
    <div className={`land-calendar__weekdays ${className}`}>
      {weekdays.map((day, index) => (
        <div key={index} className="land-calendar__weekday">
          {language === "zh" ? day.zh : day.en}
        </div>
      ))}
    </div>
  );
};

export default WeekdaysRow;
