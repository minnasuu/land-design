import React from 'react';
import './index.scss';
import { SliderProps } from './props';

const Slider: React.FC<SliderProps> = ({
  value,
  min,
  max,
  step,
  range,
  useDivider,
  prefix,
  suffix,
  showTooltip,
  tooltipPlacement,
  tooltipFormatter,
  height,
  thumbSize,
  defaultBg,
  activeBg,
  thumbStyle,
  thumbClassName,
  thumbContent,
  thumbContentStyle,
  thumbContentClassName,
  className = "",
  style,
  children,
  ...props
}) => {
  return (
    <div 
      className={`land-slider ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default Slider;
