import React from "react";
import Icon from "../Icon";
import './index.scss';
import { TagProps } from "./props";


const Tag: React.FC<TagProps> = ({
  children,
  icon,
  canDelete,
  onDelete,
  style,
  className,
  theme = 'gray',
}) => (
  <div
    className={`land-tag land-tag--${theme} ${className}`}
    style={style}
  >
    {icon}
    {children}
    {canDelete && (
      <Icon
        name="close"
        className="land-tag-close"
        onClick={(e) => {
          e.stopPropagation();
          onDelete?.(e);
        }}
      />
    )}
  </div>
);

export default Tag;
