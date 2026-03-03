import React from "react";
import { IconProps } from "./props";

/**
 * 数字图标组件属性
 */
export interface IconNumberProps extends IconProps {
  /**
   * 显示的数字
   * @default 1
   */
  value?: number;
}

/**
 * 圆形数字图标 - 空心样式（描边）
 * 显示一个圆圈内的数字
 */
export const IconNumberStroke: React.FC<IconNumberProps> = ({
  color = "currentColor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
  value = 1,
}) => {
  // 限制数字范围为 0-99
  const displayValue = Math.min(99, Math.max(0, Math.floor(value)));
  // 根据数字位数调整字体大小
  const fontSize = displayValue > 9 ? 18 : 22;
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={`number-stroke ${className}`}
      onClick={onClick}
    >
      <circle
        cx="24"
        cy="24"
        r="20"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
      <text
        x="24"
        y="24"
        textAnchor="middle"
        dominantBaseline="central"
        fill={color}
        fontSize={fontSize}
        fontWeight="600"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        {displayValue}
      </text>
    </svg>
  );
};

/**
 * 圆形数字图标 - 实心样式（填充）
 * 显示一个填充圆圈内的白色数字
 */
export const IconNumberFill: React.FC<IconNumberProps> = ({
  color = "currentColor",
  size = 16,
  style,
  className = "",
  onClick,
  value = 1,
}) => {
  // 限制数字范围为 0-99
  const displayValue = Math.min(99, Math.max(0, Math.floor(value)));
  // 根据数字位数调整字体大小
  const fontSize = displayValue > 9 ? 18 : 22;
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={`number-fill ${className}`}
      onClick={onClick}
    >
      <circle
        cx="24"
        cy="24"
        r="22"
        fill={color}
      />
      <text
        x="24"
        y="24"
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
        fontSize={fontSize}
        fontWeight="600"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        {displayValue}
      </text>
    </svg>
  );
};

/**
 * 默认数字图标（使用描边样式）
 * 这是 single-number 的主要组件
 */
export const IconNumber: React.FC<IconNumberProps> = (props) => {
  return <IconNumberStroke {...props} />;
};
