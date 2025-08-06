import React from "react";
import { SliderProps } from "./props";

const Slider: React.FC<SliderProps> = ({
  children,
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
  style,
  className,
  onChange,
  onStart,
  onEnd,
}) => {
  return <div className="land-slider">
    <div className="land-slider-track"></div>
  </div>;
};

export default Slider;
