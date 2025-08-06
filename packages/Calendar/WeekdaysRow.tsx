import React from 'react';
import { weekdays } from './utils/calendarUtils';

interface WeekdaysRowProps {
  language?: "zh" | "en";
  className?: string;
}

const WeekdaysRow: React.FC<WeekdaysRowProps> = ({
  language = "zh",
  className = ''
}) => {
  return (
    <div className={`land-calendar-weekdays ${className}`}>
      {weekdays.map((w, wIndex) => (
        <div key={wIndex} className="land-calendar-item weekday">
          {language === "zh" ? w.zh : w.en}
        </div>
      ))}
    </div>
  );
};

export default WeekdaysRow; 