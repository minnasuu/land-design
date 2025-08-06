import React, { CSSProperties } from "react";
import { DividerProps } from "./props";
import "./index.scss";

const Divider: React.FC<DividerProps> = ({
  direction = "row",
  lineLength = "100%",
  gap = 0,
  type = "solid",
  content,
  align = "center",
  style,
  className = "",
  dashedGap = 5,
  dashedLength = 10,
}) => {
  return (
    <div
      className={`land-divider ${direction} ${type} ${content ? "width-content" : ""} ${align} ${className}`}
      style={{
        width: direction === "row" ? `${lineLength}` : "1px",
        height: direction === "column" ? `${lineLength}` : "1px",
        margin: direction === "row" ? `${gap}px 0` : `0 ${gap}px`,
        "--land-divider-dashed-gap": `${dashedGap}px`,
        "--land-divider-dashed-length": `${dashedLength}px`,
        ...style,
      } as CSSProperties}
    >
      <div className="land-divider-line"></div>
      {content && (
        <>
          <div className="land-divider-content">
            {content}
          </div>
          <div className="land-divider-line land-divider-line-right"></div>
        </>
      )}
    </div>
  );
};

export default Divider;
