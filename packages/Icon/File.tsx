import React from "react";
import { IconProps } from "./props";

// 文件 & 文档类
export const IconFile: React.FC<IconProps> = ({
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
      className={`file ${className}`}
      style={style}
      onClick={onClick}
    >
      <path
        d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M43 22H5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconDownload: React.FC<IconProps> = ({
  color = "currentcolor",
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
      className={`download ${className}`}
      onClick={onClick}
    >
      <path
        d="M6 24.0083V42H42V24"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33 23L24 32L15 23"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.9917 6V32"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconUpload: React.FC<IconProps> = ({
  size = 20,
  color = "currentcolor",
  strokeWidth = 3,
  className = "",
  onClick,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={`upload ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M6 24.0083V42H42V24"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33 15L24 6L15 15"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.9917 32V6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconWebAdd: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`web-add ${className}`}
    onClick={onClick}
  >
    <path
      d="M25 40H7C5.34315 40 4 38.6569 4 37V11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V24.9412"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M32 35H44"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M38 29V41"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      r={strokeWidth}
      transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 10 14)"
      fill={color}
    />
    <circle
      r={strokeWidth}
      transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 16 14)"
      fill={color}
    />
  </svg>
);

export const IconAnnouncement: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`announcement ${className}`}
    onClick={onClick}
  >
    <rect
      x="4"
      y="15"
      width="40"
      height="26"
      rx={strokeWidth}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M24 7L16 15H32L24 7Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 24H30"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 32H20"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconAudioFile: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`audio-file ${className}`}
    onClick={onClick}
  >
    <path
      d="M8 44V4H31L40 14.5V44H8Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 14L26 16.9688V31.5"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="20.5"
      cy="31.5"
      r="5.5"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconBook: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`book ${className}`}
    onClick={onClick}
  >
    <path
      d="M8 40C8 36 8 10 8 10C8 6.68629 10.8654 4 14.4 4H40V36C40 36 19.9815 36 14.4 36C9.36225 36 8 36.6842 8 40Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 44H40V36H12C9.79086 36 8 37.7909 8 40C8 42.2091 9.79086 44 12 44Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconClipboard: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`clipboard ${className}`}
    onClick={onClick}
  >
    <path
      d="M17 7H16H10C8.89543 7 8 7.89543 8 9L8 42C8 43.1046 8.89543 44 10 44H38C39.1046 44 40 43.1046 40 42V9C40 7.89543 39.1046 7 38 7H33.0499H31"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="17"
      y="4"
      width="14"
      height="6"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
  </svg>
);

export const IconDocument: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`document ${className}`}
    onClick={onClick}
  >
    <path
      d="M32 6H22V42H32V6Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M42 6H32V42H42V6Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M10 6L18 7L14.5 42L6 41L10 6Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M37 18V15"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27 18V15"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconEmailDownload: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`email-download ${className}`}
    onClick={onClick}
  >
    <path
      d="M36 15H44V28V41H4V28V15H12"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 19V5"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30 13L24 19L18 13"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 15L24 30L44 15"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconEmailPush: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`email-push ${className}`}
    onClick={onClick}
  >
    <path
      d="M36 15H44V28V41H4V28V15H12"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 19V5"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30 11L24 5L18 11"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 15L24 30L44 15"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconEmailSuccess: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`email-success ${className}`}
    onClick={onClick}
  >
    <path
      d="M44 24V9H24H4V24V39H24"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M31 36L36 40L44 30"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 9L24 24L44 9"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconEmailFail: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`email-fail ${className}`}
    onClick={onClick}
  >
    <path
      d="M44 24V9H24H4V24V39H24"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M40 31L32 39"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 31L40 39"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 9L24 24L44 9"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconFileAdd: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`file-add ${className}`}
    onClick={onClick}
  >
    <path
      d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M33 29V43"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26 36H33H40"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30 4V14H40"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconCodeFile: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`code-file ${className}`}
    onClick={onClick}
  >
    <path
      d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30 4L40 14"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27 24L32 29L27 34"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 24L16 29L21 34"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconStarFile: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`star-file ${className}`}
    onClick={onClick}
  >
    <path
      d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30 4L40 14"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.85 21C18.7237 21 17 23.0086 17 25.4864C17 29.9727 21.55 34.0513 24 35C26.45 34.0513 31 29.9727 31 25.4864C31 23.0086 29.2763 21 27.15 21C25.8479 21 24.6967 21.7533 24 22.9062C23.3033 21.7533 22.1521 21 20.85 21Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconTextFile: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`text-file ${className}`}
    onClick={onClick}
  >
    <path
      d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30 4L40 14"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 22V36"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 22H24L30 22"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconFolder: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`folder ${className}`}
    onClick={onClick}
  >
    <path
      d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M43 22H5"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M5 16V28"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M43 16V28"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconCodeFolder: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`code-folder ${className}`}
    onClick={onClick}
  >
    <path
      d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M28 22L33 27L28 32"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 22L15 27L20 32"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconFolderDownload: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`folder-download ${className}`}
    onClick={onClick}
  >
    <path
      d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M30 28L23.9933 34L18 28.0134"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 20V34"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconFolderAdd: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`folder-add ${className}`}
    onClick={onClick}
  >
    <path
      d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M18 27H30"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
    />
    <path
      d="M24 21L24 33"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
    />
  </svg>
);

export const IconFolderUpload: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`folder-upload ${className}`}
    onClick={onClick}
  >
    <path
      d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M30 25.9867L24 20L18 26"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 20V34"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconFormattingBrush: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`formatting-brush ${className}`}
    onClick={onClick}
  >
    <rect
      x="8"
      y="24"
      width="32"
      height="18"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 13H18V6H30V13H44V24H4V13Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 32L16 42"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
    />
  </svg>
);

export const IconInstruction: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`instruction ${className}`}
    onClick={onClick}
  >
    <rect
      x="4"
      y="8"
      width="40"
      height="32"
      rx="2"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V16H4V10Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25 23L23 34"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
    />
    <path
      d="M31 23L37 28L31 34"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 22.9999L11 27.9999L17 33.9999"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconListView: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`list-view ${className}`}
    onClick={onClick}
  >
    <rect
      x="4"
      y="6"
      width="40"
      height="36"
      rx="3"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 14H44"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 24H36"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 32H36"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 24H14"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 32H14"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconLink: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`list-view ${className}`}
    onClick={onClick}
  >
    <path
      d="M24.7073 9.56521L9.85801 24.4145C6.34329 27.9292 6.34329 33.6277 9.85801 37.1424V37.1424C13.3727 40.6571 19.0712 40.6571 22.5859 37.1424L40.2636 19.4647C42.6067 17.1216 42.6067 13.3226 40.2636 10.9794V10.9794C37.9205 8.63628 34.1215 8.63628 31.7783 10.9794L14.1007 28.6571C12.9291 29.8287 12.9291 31.7282 14.1007 32.8997V32.8997C15.2722 34.0713 17.1717 34.0713 18.3433 32.8997L33.1925 18.0505"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconLog: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`log ${className}`}
    onClick={onClick}
  >
    <rect
      x="13"
      y="10"
      width="28"
      height="34"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M35 10V4H8C7.44772 4 7 4.44772 7 5V38H13"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 22H33"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 30H33"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconEmail: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`email ${className}`}
    onClick={onClick}
  >
    <path
      d="M4 39H44V24V9H24H4V24V39Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M4 9L24 24L44 9"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 9H4V24"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M44 24V9H24"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconEmailOpen: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`email-open ${className}`}
    onClick={onClick}
  >
    <path
      d="M44 18V39.8182C44 41.0232 43.1046 42 42 42H6C4.89543 42 4 41.0232 4 39.8182V18L24 31L44 18Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M4 17.7839L24 4L44 17.7839"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconNotePad: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`note-pad ${className}`}
    onClick={onClick}
  >
    <path
      d="M18 8H11C10.4477 8 10 8.44772 10 9V43C10 43.5523 10.4477 44 11 44H39C39.5523 44 40 43.5523 40 43V9C40 8.44772 39.5523 8 39 8H32"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M18 13V8H21.9505C21.9778 8 22 7.97784 22 7.9505V6C22 4.34315 23.3431 3 25 3C26.6569 3 28 4.34315 28 6V7.9505C28 7.97784 28.0222 8 28.0495 8H32V13C32 13.5523 31.5523 14 31 14H19C18.4477 14 18 13.5523 18 13Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const IconSchedule: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`schedule ${className}`}
    onClick={onClick}
  >
    <rect
      x="4"
      y="10"
      width="40"
      height="30"
      rx="2"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 6V14"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
    />
    <path
      d="M25 23L14 23"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
    />
    <path
      d="M34 31L14 31"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
    />
    <path
      d="M34 6V14"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
    />
  </svg>
);

export const IconTextScan: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`text-scan ${className}`}
    onClick={onClick}
  >
    <path
      d="M6 33V39C6 40.6569 7.34315 42 9 42H15"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M33 42H39C40.6569 42 42 40.6569 42 39V33"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M42 15V9C42 7.34315 40.6569 6 39 6H33"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 15V9C6 7.34315 7.34315 6 9 6H15"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 15V35"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 15H24H31"
      stroke={color}
      strokeWidth={strokeWidth}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconWebPage: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`web-page ${className}`}
    onClick={onClick}
  >
    <rect
      x="4"
      y="8"
      width="40"
      height="32"
      rx="3"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <circle
      r="2"
      transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 10 14)"
      fill={color}
    />
    <circle
      r="2"
      transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 16 14)"
      fill={color}
    />
  </svg>
);

export const IconPlan: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`web-page ${className}`}
    onClick={onClick}
  >
    <path
      d="M5 19H43V41C43 42.1046 42.1046 43 41 43H7C5.89543 43 5 42.1046 5 41V19Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M5 10C5 8.89543 5.89543 8 7 8H41C42.1046 8 43 8.89543 43 10V19H5V10Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M16 31L22 37L34 25"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 5V13"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <path
      d="M32 5V13"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

export const IconCalendar: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`calendar ${className}`}
    onClick={onClick}
  >
    <path
      d="M5 19H43V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V19Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M5 9C5 7.89543 5.89543 7 7 7H41C42.1046 7 43 7.89543 43 9V19H5V9Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M16 4V12"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 4V12"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28 34H34"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 34H20"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28 26H34"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 26H20"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const IconCode: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => <svg
  width={size}
  height={size}
  viewBox="0 0 48 48"
  fill="none"
  style={style}
  className={`code ${className}`}
  onClick={onClick}
>
    <path d="M16 13L4 25.4322L16 37" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    <path d="M32 13L44 25.4322L32 37" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    <path d="M28 13L21 37" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" />
  </svg>