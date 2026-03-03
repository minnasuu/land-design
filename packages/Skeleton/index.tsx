import React, { useMemo } from "react";
import { SkeletonProps } from "./props";
import './index.scss';

const prefixCls = 'land-skeleton';

const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = 24,
  radius = "var(--radius-m)",
  start = "var(--color-bg-secondary)",
  stop = "var(--color-bg-tertiary)",
  style,
  className = "",
}) => {
  // ─── 尺寸样式计算 ───
  const sizeStyle = useMemo(() => ({
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    borderRadius: typeof radius === "number" ? `${radius}px` : radius,
  }), [width, height, radius]);

  // ─── 渐变背景计算 ───
  const gradientStyle = useMemo(() => ({
    background: `linear-gradient(90deg, ${start} 0%, ${start} 20%, ${stop} 50%, ${stop} 80%, ${start} 100%, ${start} 120%, ${stop} 150%, ${stop} 180%, ${start} 200%)`,
  }), [start, stop]);

  // ─── 类名计算 ───
  const rootClassName = useMemo(() => {
    return [prefixCls, className].filter(Boolean).join(' ');
  }, [className]);

  return (
    <div
      className={rootClassName}
      style={{ ...sizeStyle, ...style }}
    >
      <div className={`${prefixCls}__content`} style={gradientStyle} />
    </div>
  );
};

export default Skeleton;
