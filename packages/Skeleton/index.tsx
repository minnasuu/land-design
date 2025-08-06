import React from "react";
import { SkeletonProps } from "./props";
import './index.scss';

const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = 24,
  radius = "var(--radius-m)",
  start = "var(--color-bg-secondary)",
  stop = "var(--color-bg-tertiary)",
  style,
  className = "",
}) => (
  <div
    className={`land-skeleton ${className}`}
    style={{
      width: typeof width === "number" ? `${width}px` : width,
      height: typeof height === "number" ? `${height}px` : height,
      borderRadius: typeof radius === "number" ? `${radius}px` : radius,
      ...style,
    }}
  >
    <div
      className="land-skeleton-content"
      style={{
        background: `linear-gradient(90deg, ${start} 0%, ${start} 20%, ${stop} 50%, ${stop} 80%, ${start} 100%, ${start} 120%, ${stop} 150%, ${stop} 180%, ${start} 200%)`,
      }}
    >
    </div>
  </div>
);

export default Skeleton;
