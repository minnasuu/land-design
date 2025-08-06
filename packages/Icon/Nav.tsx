import React from "react";
// 导航类
import { IconProps } from "./props";

export const IconHome: React.FC<IconProps> = ({
  color = "currentColor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      style={style}
      className={`home ${className}`}
      onClick={onClick}
    >
      <path
        d="M9 18V42H39V18L24 6L9 18Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 29V42H29V29H19Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconHomeFill: React.FC<IconProps> = ({
  color = "currentColor",
  size = 16,
  style,
  className = "",
  onClick,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      style={style}
      className={`home-fill ${className}`}
      onClick={onClick}
    >
      <path d="M39.6207 17.229C39.8603 17.4186 40 17.7074 40 18.013V41.8622C40 42.4145 39.5523 42.8622 39 42.8622H30.333C29.7807 42.8622 29.333 42.4145 29.333 41.8622V30.1396C29.333 29.5873 28.8853 29.1396 28.333 29.1396H19.667C19.1147 29.1396 18.667 29.5873 18.667 30.1396V41.8622C18.667 42.4145 18.2193 42.8622 17.667 42.8622H9C8.44772 42.8622 8 42.4145 8 41.8622V18.013C8 17.7074 8.13971 17.4186 8.37929 17.229L23.3793 5.35366C23.743 5.06571 24.257 5.06571 24.6207 5.35366L39.6207 17.229Z" fill={color} />
    </svg>
  );
};

// 应用
export const IconApplication: React.FC<IconProps> = ({
  size = 16,
  color = "currentcolor",
  className = "",
  onClick,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`application ${className}`}
      onClick={onClick}
    >
      <path
        d="M10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z"
        fill={color}
      />
      <path
        d="M24 14C26.2091 14 28 12.2091 28 10C28 7.79086 26.2091 6 24 6C21.7909 6 20 7.79086 20 10C20 12.2091 21.7909 14 24 14Z"
        fill={color}
      />
      <path
        d="M38 14C40.2091 14 42 12.2091 42 10C42 7.79086 40.2091 6 38 6C35.7909 6 34 7.79086 34 10C34 12.2091 35.7909 14 38 14Z"
        fill={color}
      />
      <path
        d="M10 28C12.2091 28 14 26.2091 14 24C14 21.7909 12.2091 20 10 20C7.79086 20 6 21.7909 6 24C6 26.2091 7.79086 28 10 28Z"
        fill={color}
      />
      <path
        d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z"
        fill={color}
      />
      <path
        d="M38 28C40.2091 28 42 26.2091 42 24C42 21.7909 40.2091 20 38 20C35.7909 20 34 21.7909 34 24C34 26.2091 35.7909 28 38 28Z"
        fill={color}
      />
      <path
        d="M10 42C12.2091 42 14 40.2091 14 38C14 35.7909 12.2091 34 10 34C7.79086 34 6 35.7909 6 38C6 40.2091 7.79086 42 10 42Z"
        fill={color}
      />
      <path
        d="M24 42C26.2091 42 28 40.2091 28 38C28 35.7909 26.2091 34 24 34C21.7909 34 20 35.7909 20 38C20 40.2091 21.7909 42 24 42Z"
        fill={color}
      />
      <path
        d="M38 42C40.2091 42 42 40.2091 42 38C42 35.7909 40.2091 34 38 34C35.7909 34 34 35.7909 34 38C34 40.2091 35.7909 42 38 42Z"
        fill={color}
      />
    </svg>
  );
};

export const IconMore: React.FC<IconProps> = ({
  size = 16,
  color = "currentcolor",
  className = "",
  style,
  onClick,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`more ${className}`}
      style={style}
      onClick={onClick}
    >
      <circle cx="12" cy="24" r="4" fill={color} />
      <circle cx="24" cy="24" r="4" fill={color} />
      <circle cx="36" cy="24" r="4" fill={color} />
    </svg>
  );
};

export const IconMoreLine: React.FC<IconProps> = ({
  size = 16,
  color = "currentcolor",
  strokeWidth = 3,
  className = "",
  style,
  onClick,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`more-line ${className}`}
      style={style}
      onClick={onClick}
    >
      <path
        d="M7.94971 11.9497H39.9497"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.94971 23.9497H39.9497"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.94971 35.9497H39.9497"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

