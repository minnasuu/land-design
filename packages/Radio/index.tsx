import React from "react";
import './index.scss';
import PopOver from "../PopOver";
import Icon from "../Icon";
import { RadioProps } from "./props";
const Radio: React.FC<RadioProps> = ({
  label,
  tip,
  disabled,
  iconTip,
  style,
  className = '',
  onClick,
  checked,
  animated,
}) => (
  <div className={`land-radio-item ${tip ? 'hover-pop' : ''} ${disabled ? 'disabled' : ''} ${className}`} style={style}>
    <PopOver content={tip} theme="dark" style={{ maxWidth: "200px" }} />
    <div
      onClick={onClick}
      className="land-radio-label"
    >
      <div className={`land-radio-circle ${checked ? "checked" : ""} ${animated ? "animated" : "no-animation"}`}>
        <Icon name='check' size={10} className="land-radio-circle-icon" />
      </div>
      {label}
    </div>
    {iconTip && (
      <div className="land-radio-pop hover-pop">
        <Icon name="info-stroke" color="var(--color-gray-rgba-9)" size={12} />
        <PopOver content={iconTip} theme="dark" style={{ maxWidth: "200px" }} />
      </div>
    )}
  </div>
);

export default Radio;
