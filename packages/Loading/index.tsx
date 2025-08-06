import React, { CSSProperties } from "react";
import './index.scss';
import { LoadingProps } from './props';

const Loading: React.FC<LoadingProps> = ({
  size = "var(--icon-size-l)",
  strokeSize = 3,
  color = "var(--color-text-primary)",
  style,
  className = "",
}) => (
  <div
    className={`land-loading ${className}`}
    style={
      {
        "--land-loading-size": typeof size === "number" ? `${size}px` : size,
        "--land-loading-stroke-size":
          typeof strokeSize === "number" ? `${strokeSize}px` : strokeSize,
        "--land-loading-color": color,
        ...style,
      } as CSSProperties
    }
  ></div>
);

export default Loading;
