import React from "react";
import './index.scss';
import { RateProps } from './props';

const Rate: React.FC<RateProps> = ({
  value = 0,
  count = 5,
  defaultColor = "var(--color-bg-secondary)",
  activeColor = "var(--color-orange-6)",
  customSvg,
  readonly = false,
  onChange,
  style,
  className = "",
}) => {
  const [hoverValue, setHoverValue] = React.useState(0);
  return (
    <div
      className={`land-rate ${className}`}
      style={
        {
          "--land-rate-character-item-active-color": activeColor,
          "--land-rate-character-item-hover-color": activeColor,
          "--land-rate-character-item-default-color": defaultColor,
          ...style,
        } as React.CSSProperties
      }
    >
      {Array.from({ length: count }).map((_i, index) => (
        <div
          key={index}
          className={`land-rate-character ${readonly ? "readonly" : ""}`}
        >
          <div
            className={`land-rate-character-item left ${index + 1 + index * 2 <= value ||
              index + 1 + index * 2 <= hoverValue
              ? "active"
              : ""
              }`}
            onClick={() => onChange?.(index + 1 + index * 2)}
            onMouseEnter={() => setHoverValue(index + 1 + index * 2)}
            onMouseLeave={() => setHoverValue(0)}
          >
            {customSvg || (
              <svg width="24" viewBox="0 0 48 48">
                <path d="M22.683 5.415c.568-1.043 2.065-1.043 2.634 0l5.507 10.098a1.5 1.5 0 0 0 1.04.756l11.306 2.117c1.168.219 1.63 1.642.814 2.505l-7.902 8.359a1.5 1.5 0 0 0-.397 1.223l1.48 11.407c.153 1.177-1.058 2.057-2.131 1.548l-10.391-4.933a1.5 1.5 0 0 0-1.287 0l-10.39 4.933c-1.073.51-2.284-.37-2.131-1.548l1.48-11.407a1.5 1.5 0 0 0-.398-1.223L4.015 20.89c-.816-.863-.353-2.286.814-2.505l11.306-2.117a1.5 1.5 0 0 0 1.04-.756l5.508-10.098Z"></path>
              </svg>
            )}
          </div>
          <div
            className={`land-rate-character-item right ${index + 2 + index * 2 <= value ||
              index + 2 + index * 2 <= hoverValue
              ? "active"
              : ""
              }`}
            onClick={() => onChange?.(index + 2 + index * 2)}
            onMouseOver={() => setHoverValue(index + 2 + index * 2)}
            onMouseLeave={() => setHoverValue(0)}
          >
            {customSvg || (
              <svg width="24" viewBox="0 0 48 48">
                <path d="M22.683 5.415c.568-1.043 2.065-1.043 2.634 0l5.507 10.098a1.5 1.5 0 0 0 1.04.756l11.306 2.117c1.168.219 1.63 1.642.814 2.505l-7.902 8.359a1.5 1.5 0 0 0-.397 1.223l1.48 11.407c.153 1.177-1.058 2.057-2.131 1.548l-10.391-4.933a1.5 1.5 0 0 0-1.287 0l-10.39 4.933c-1.073.51-2.284-.37-2.131-1.548l1.48-11.407a1.5 1.5 0 0 0-.398-1.223L4.015 20.89c-.816-.863-.353-2.286.814-2.505l11.306-2.117a1.5 1.5 0 0 0 1.04-.756l5.508-10.098Z"></path>
              </svg>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rate;
