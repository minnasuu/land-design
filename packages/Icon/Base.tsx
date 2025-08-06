import React from "react";
import { IconProps } from "./props";

export const IconDec: React.FC<IconProps> = ({
  size = 16,
  color = "currentColor",
  strokeWidth = 3,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`dec ${className}`}
    onClick={onClick}
  >
    <path
      d="M10.5 24L38.5 24"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
