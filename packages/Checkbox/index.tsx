import React, { useEffect, useState } from "react";
import './index.scss';
import PopOver from "../PopOver";
import Icon from "../Icon";
import { CheckboxProps } from "./props";

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  indeterminate = false,
  label = "选项",
  tip,
  disabled,
  className,
  style,
  animated,
  onCheckedChange,
}) => {
  const [checkedState, setCheckedState] = useState(checked);
  useEffect(() => {
    setCheckedState(checked);
  }, [checked]);
  return (
    <div className={`land-check ${className}`} style={style}>
      <div className={`land-check-label ${checkedState ? "checked" : ""} ${disabled ? "disabled" : ""}`}
        onClick={e => {
          if (disabled) return;
          setCheckedState(!checkedState);
          onCheckedChange?.(checkedState, e);
        }}
      >
        <div className={`land-check-circle ${checkedState ? "checked" : ""} ${indeterminate ? "indeterminate" : ""} ${(animated && !indeterminate) ? "animated" : "no-animation"}`}>
          <Icon name='check' size={10} className="land-check-circle-icon" />
          <Icon name='dec' strokeWidth={8} size={10} className="land-check-indeterminate-icon" />
        </div>
        {label}
      </div>
      {tip && (
        <div className="land-check-pop hover-pop">
          <Icon name='info-fill' className="land-check-pop-icon" />
          <PopOver
            content={tip}
            theme="dark"
            style={{ maxWidth: "200px" }}
            placement="top"
          />
        </div>
      )}
    </div>
  )
}

export default Checkbox;
