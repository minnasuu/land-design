import React from "react";
import { FlexProps } from "./props";
import './index.scss';

const Flex: React.FC<FlexProps> = ({
  width = "100%",
  height,
  column,
  wrap,
  justify = "start",
  align = "start",
  gap,
  bothCenter,
  children,
  style,
  className = "",
}) => (
  <div
    className={`land-flex ${className}`}
    style={{
      width,
      height,
      flexDirection: column ? "column" : "unset",
      gap: typeof gap === 'number' ? `${gap}px` : gap,
      flexWrap: wrap ? "wrap" : "nowrap",
      justifyContent: bothCenter ? "center" : justify,
      alignItems: bothCenter ? "center" : align,
      ...style,
    }}
  >
    {children}
  </div>
);

export default Flex;
