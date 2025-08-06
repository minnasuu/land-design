import React from "react";
import { IconProps } from "./props";

// 用户界面类

export const IconRefresh: React.FC<IconProps> = ({
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
      className={`refresh ${className}`}
      onClick={onClick}
    >
      <path
        d="M42 8V24"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 24L6 40"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconFemale: React.FC<IconProps> = ({
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
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={`female ${className}`}
      onClick={onClick}
    >
      <path
        d="M38.3785 9.85132C32.9112 4.38398 24.0468 4.38398 18.5795 9.85132C15.8458 12.585 14.479 16.1679 14.479 19.7508C14.479 23.3337 15.8458 26.9166 18.5795 29.6503C24.0468 35.1176 32.9112 35.1176 38.3785 29.6503C43.8458 24.183 43.8458 15.3187 38.3785 9.85132Z"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M18.4642 29.5353L5.73633 42.2632"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.1714 41.5562L6.44346 28.8282"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconMale: React.FC<IconProps> = ({
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
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={`male ${className}`}
      onClick={onClick}
    >
      <path
        d="M41.9517 15.0483V6.04834H32.9517"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4135 38.0007C15.8808 43.4681 24.7451 43.4681 30.2125 38.0007C32.9462 35.2671 34.313 31.6841 34.313 28.1012C34.313 24.5183 32.9462 20.9354 30.2125 18.2017C24.7451 12.7344 15.8808 12.7344 10.4135 18.2017C4.94615 23.6691 4.94615 32.5334 10.4135 38.0007Z"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M30.0002 17.9999L39.9517 8.04838"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconPreviewOpen: React.FC<IconProps> = ({
  color = "currentColor",
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
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={`preview-open ${className}`}
    onClick={onClick}
  >
    <path
      d="M24 36C35.0457 36 44 24 44 24C44 24 35.0457 12 24 12C12.9543 12 4 24 4 24C4 24 12.9543 36 24 36Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
  </svg>
);

export const IconPreviewClose: React.FC<IconProps> = ({
  color = "currentColor",
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
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={`preview-close ${className}`}
    onClick={onClick}
  >
    <path
      d="M6 16C6.63472 17.2193 7.59646 18.3504 8.82276 19.3554C12.261 22.1733 17.779 24 24 24C30.221 24 35.739 22.1733 39.1772 19.3554C40.4035 18.3504 41.3653 17.2193 42 16"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28.9775 24L31.048 31.7274"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M37.3535 21.3536L43.0103 27.0104"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.00004 27.0103L10.6569 21.3534"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.9278 31.7276L18.9983 24.0001"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconAvatar: React.FC<IconProps> = ({
  color = "currentColor",
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
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={`avatar ${className}`}
    onClick={onClick}
  >
    <circle
      cx="24"
      cy="12"
      r="8"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconTag: React.FC<IconProps> = ({
  color = "currentColor",
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
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={`tag ${className}`}
    onClick={onClick}
  >
    <path
      d="M42.1691 29.2451L29.2631 42.1511C28.5879 42.8271 27.6716 43.2069 26.7161 43.2069C25.7606 43.2069 24.8444 42.8271 24.1691 42.1511L8 26V8H26L42.1691 24.1691C43.5649 25.5732 43.5649 27.841 42.1691 29.2451Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z"
      fill={color}
    />
  </svg>
);
export const IconSetting: React.FC<IconProps> = ({
  color = "currentColor",
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
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={`setting ${className}`}
    onClick={onClick}
  >
    <path d="M18.2838 43.1708C14.9327 42.1731 11.9498 40.3208 9.58787 37.8665C10.469 36.8222 11 35.4729 11 33.9996C11 30.6859 8.31371 27.9996 5 27.9996C4.79955 27.9996 4.60139 28.0095 4.40599 28.0287C4.13979 26.7272 4 25.3798 4 23.9996C4 21.909 4.32077 19.8933 4.91579 17.999C4.94381 17.9994 4.97188 17.9996 5 17.9996C8.31371 17.9996 11 15.3133 11 11.9996C11 11.0483 10.7786 10.1488 10.3846 9.34963C12.6975 7.19902 15.5205 5.58954 18.6521 4.72266C19.6444 6.66771 21.6667 7.99965 24 7.99965C26.3333 7.99965 28.3556 6.66771 29.3479 4.72266C32.4795 5.58954 35.3025 7.19902 37.6154 9.34963C37.2214 10.1488 37 11.0483 37 11.9996C37 15.3133 39.6863 17.9996 43 17.9996C43.0281 17.9996 43.0562 17.9994 43.0842 17.999C43.6792 19.8933 44 21.909 44 23.9996C44 25.3798 43.8602 26.7272 43.594 28.0287C43.3986 28.0095 43.2005 27.9996 43 27.9996C39.6863 27.9996 37 30.6859 37 33.9996C37 35.4729 37.531 36.8222 38.4121 37.8665C36.0502 40.3208 33.0673 42.1731 29.7162 43.1708C28.9428 40.7515 26.676 38.9996 24 38.9996C21.324 38.9996 19.0572 40.7515 18.2838 43.1708Z" stroke={color} stroke-width={strokeWidth} strokeLinejoin="round" />
    <path d="M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z" stroke={color} stroke-width={strokeWidth} strokeLinejoin="round" />
  </svg>
);
export const IconSettingFill: React.FC<IconProps> = ({
  color = "currentColor",
  size = 16,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={`setting-fill ${className}`}
    onClick={onClick}
  >
    <path d="M30.1995 3.7271C30.4664 3.3222 30.9558 3.09498 31.4158 3.24837C34.1559 4.16208 36.6509 5.64551 38.7721 7.56441C39.0901 7.85203 39.1651 8.31297 39.0243 8.71793C38.7822 9.41432 38.6504 10.1656 38.6504 10.949C38.6504 14.5688 41.4708 17.5036 44.9502 17.5036V17.5036C45.0022 17.5036 45.0485 17.537 45.0633 17.5868C45.6719 19.6316 46 21.8046 46 24.0574C46 25.3491 45.8919 26.6146 45.6852 27.8448C45.6266 28.1935 45.3038 28.4275 44.9502 28.4275V28.4275C41.4708 28.4275 38.6505 31.3614 38.6504 34.9812C38.6504 36.2755 39.0108 37.4824 39.6331 38.4988C39.8928 38.9229 39.8839 39.4787 39.5318 39.8299C37.3893 41.9671 34.8118 43.6362 31.9516 44.6796C31.432 44.8692 30.8767 44.5657 30.6368 44.0673C29.6028 41.9185 27.467 40.4431 25 40.4431C22.533 40.4431 20.3972 41.9185 19.3632 44.0673C19.1233 44.5657 18.568 44.8692 18.0484 44.6796C15.1882 43.6362 12.6108 41.9671 10.4682 39.8299C10.1161 39.4787 10.1073 38.9229 10.3669 38.4988C10.9892 37.4824 11.3496 36.2755 11.3496 34.9812C11.3495 31.3614 8.52916 28.4275 5.0498 28.4275V28.4275C4.69619 28.4275 4.37345 28.1935 4.31484 27.8448C4.10809 26.6146 4 25.3491 4 24.0574C4.00001 21.8046 4.32808 19.6316 4.93668 17.5868C4.95153 17.537 4.99778 17.5036 5.0498 17.5036V17.5036C8.5292 17.5036 11.3496 14.5688 11.3496 10.949C11.3496 10.1656 11.2178 9.41432 10.9757 8.71793C10.8349 8.31297 10.9099 7.85203 11.2279 7.56441C13.3491 5.64551 15.8441 4.16208 18.5842 3.24837C19.0442 3.09498 19.5336 3.3222 19.8005 3.7271C20.9356 5.44961 22.841 6.57982 25 6.57982C27.159 6.57982 29.0644 5.44961 30.1995 3.7271ZM25 16.8249C21.0375 16.825 17.8253 20.0372 17.8252 23.9997C17.8252 27.9623 21.0374 31.1744 25 31.1745C28.9626 31.1745 32.1748 27.9624 32.1748 23.9997C32.1747 20.0372 28.9626 16.8249 25 16.8249Z" fill={color} />
  </svg>
);

export const IconConfigSetting: React.FC<IconProps> = ({
  color = "currentColor",
  strokeWidth = 3,
  size = 16,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={`config-setting ${className}`}
    onClick={onClick}
  >
    <path
      d="M41.5 10H35.5"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27.5 6V14"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27.5 10L5.5 10"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.5 24H5.5"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.5 20V28"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M43.5 24H21.5"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M41.5 38H35.5"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27.5 34V42"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27.5 38H5.5"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconCollection: React.FC<IconProps> = ({
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
      className={`collection ${className}`}
      onClick={onClick}
    >
      <path
        d="M40.9898 8.02661H12.1818C9.45455 8.02661 4 9.55073 4 15.9674C4 22.3841 9.45455 24.0001 12.1818 24.0001H35.9939C38.7211 24.0001 44 25.5681 44 31.9848C44 38.4014 38.7211 40.0031 35.9939 40.0031H6.06499"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.04567 35.9927L4.06738 40.0592L8.04567 44.0001"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.0427 3.95386L42.021 8.02038L38.0427 11.9612"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconShare: React.FC<IconProps> = ({
  color = "currentColor",
  strokeWidth = 3,
  size = 16,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={`config-setting ${className}`}
    onClick={onClick}
  >
    <path
      d="M28 6H42V20"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M42 29.4737V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9C6 7.34315 7.34315 6 9 6L18 6"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25.7998 22.1999L41.0998 6.8999"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconTranslate: React.FC<IconProps> = ({
  color = "currentColor",
  strokeWidth = 3,
  size = 16,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={`config-setting ${className}`}
    onClick={onClick}
  >
    <path
      d="M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 6L17 9"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 11H28"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconLight: React.FC<IconProps> = ({
  color = "currentColor",
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
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={`light ${className}`}
    onClick={onClick}
  >
    <path
      d="M9.15039 9.15088L11.3778 11.3783"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 24H6.15"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.15039 38.8495L11.3778 36.6221"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M38.8495 38.8495L36.6221 36.6221"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M44.9996 24H41.8496"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M38.8495 9.15088L36.6221 11.3783"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 3V6.15"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M24 45.0001V41.8501"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconLightFill: React.FC<IconProps> = ({
  color = "currentColor",
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
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={`light-fill ${className}`}
    onClick={onClick}
  >
    <path
      d="M9.15039 9.15088L11.3778 11.3783"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 24H6.15"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.15039 38.8495L11.3778 36.6221"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M38.8495 38.8495L36.6221 36.6221"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M44.9996 24H41.8496"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M38.8495 9.15088L36.6221 11.3783"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 3V6.15"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z"
      fill={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M24 45.0001V41.8501"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconDark: React.FC<IconProps> = ({
  color = "currentColor",
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
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={`dark ${className}`}
    onClick={onClick}
  >
    <path
      d="M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
  </svg>
);

export const IconDarkFill: React.FC<IconProps> = ({
  color = "currentColor",
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
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={`dark-fill ${className}`}
    onClick={onClick}
  >
    <path
      d="M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z"
      fill={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
  </svg>
);

export const IconSearch: React.FC<IconProps> = ({
  color = "currentcolor",
  size = 20,
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
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={`search ${className}`}
    onClick={onClick}
  >
    <path
      d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M33.2216 33.2217L41.7069 41.707"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
