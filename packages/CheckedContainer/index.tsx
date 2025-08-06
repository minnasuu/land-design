import React, { CSSProperties } from "react";
import './index.scss';
import { CheckedContainerProps } from "./props";
const CheckedContainer: React.FC<CheckedContainerProps> = ({
  checked = false,
  gap = 2,
  strokeWidth = 2,
  radius = 6,
  children,
  className,
  style,
}) => (
  <div className={`land-checked-container ${checked ? 'checked' : ''} ${className}`}
    style={{
      '--land-checked-container-gap': `${gap}px`,
      '--land-checked-container-size': `${strokeWidth}px`,
      '--land-checked-container-radius': `${radius}px`,
      ...style
    } as CSSProperties}
  >
    {children}
  </div>
);
export default CheckedContainer;
