import React from "react";
// 设备 & 工具类

import { IconProps } from "./props";

export const IconCamera: React.FC<IconProps> = ({
  color = "currentcolor",
  strokeWidth = 3,
  size = 16,
  className = "",
  onClick,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={`color-picker ${className}`}
      onClick={onClick}
    >
      <path
        d="M15 12L18 6H30L33 12H15Z"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <rect
        x="4"
        y="12"
        width="40"
        height="30"
        rx="3"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M24 35C28.4183 35 32 31.4183 32 27C32 22.5817 28.4183 19 24 19C19.5817 19 16 22.5817 16 27C16 31.4183 19.5817 35 24 35Z"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconApple: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  style,
  className = "",
}) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" fill="none" style={style} className={className} >
    <path d="M14.0726 5.46403C13.5517 5.78293 13.1202 6.22878 12.8186 6.75984C12.5169 7.2909 12.3549 7.88981 12.3478 8.50053C12.3498 9.18788 12.5535 9.85953 12.9335 10.4323C13.3135 11.005 13.8532 11.4538 14.4857 11.7228C14.2363 12.5274 13.8672 13.2899 13.3909 13.9846C12.7093 14.9658 11.9966 15.9469 10.9122 15.9469C9.82777 15.9469 9.54887 15.3169 8.29917 15.3169C7.08047 15.3169 6.64667 15.9676 5.65517 15.9676C4.66367 15.9676 3.97177 15.0587 3.17647 13.9433C2.12594 12.3808 1.54858 10.5483 1.51367 8.66573C1.51367 5.56733 3.52767 3.92523 5.51057 3.92523C6.56407 3.92523 7.44197 4.61713 8.10297 4.61713C8.73297 4.61713 9.71417 3.88383 10.9122 3.88383C11.5281 3.86793 12.1386 4.00375 12.6897 4.27931C13.2408 4.55487 13.7157 4.96172 14.0726 5.46403ZM10.3442 2.57223C10.8723 1.95099 11.1712 1.16735 11.1911 0.352226C11.192 0.244769 11.1816 0.137514 11.1601 0.0322266C10.2529 0.12084 9.41408 0.553201 8.81557 1.24063C8.28238 1.83711 7.97217 2.59982 7.93767 3.39913C7.93807 3.49633 7.94846 3.59324 7.96867 3.68833C8.04019 3.70185 8.11279 3.70877 8.18557 3.70903C8.60365 3.67576 9.01059 3.55783 9.38167 3.3624C9.75275 3.16698 10.0802 2.89814 10.3442 2.57223Z" fill={color} />
  </svg>
};