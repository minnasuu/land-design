import React from "react";
import './index.scss';
import Icon from "../Icon";
import { CollapseProps } from "./props";

const Collapse: React.FC<CollapseProps> = ({
  open = false,
  title,
  hideIcon,
  content,
  className = "",
  style,
}) => (
  <details className={`land-collapse ${className}`} style={style} open={open}>
    <summary
      className="land-collapse-title"
    >
      {!hideIcon && <Icon name="arrow" strokeWidth={4} size={16} stroke='var(--color-gray-10)' />}
      {title}
    </summary>
    <div className="land-collapse-content">
      <div className="land-collapse-content-details">{content}</div>
    </div>
  </details>
);

export default Collapse;
