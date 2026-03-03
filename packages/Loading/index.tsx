import React, { useMemo, CSSProperties } from "react";
import './index.scss';
import { LoadingProps } from './props';

const prefixCls = 'land-loading';

const Loading: React.FC<LoadingProps> = ({
  size = "var(--icon-size-l)",
  strokeSize = 3,
  color = "var(--color-text-primary)",
  style,
  className = "",
}) => {
  // ─── CSS 变量样式计算 ───
  const cssVarStyle = useMemo(() => ({
    "--land-loading-size": typeof size === "number" ? `${size}px` : size,
    "--land-loading-stroke-size": typeof strokeSize === "number" ? `${strokeSize}px` : strokeSize,
    "--land-loading-color": color,
  } as CSSProperties), [size, strokeSize, color]);

  // ─── 类名计算 ───
  const rootClassName = useMemo(() => {
    return [prefixCls, className].filter(Boolean).join(' ');
  }, [className]);

  return (
    <div
      className={rootClassName}
      style={{ ...cssVarStyle, ...style }}
    />
  );
};

export default Loading;
