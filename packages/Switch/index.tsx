import React, { useEffect, useState } from "react";
import Icon from "../Icon";
import PopOver from "../PopOver";
import './index.scss';
import { motion } from "motion/react";
import { SwitchProps } from "./props";

const Switch: React.FC<SwitchProps> = ({
  checked,
  label,
  checkedLabel,
  icon,
  checkedIcon,
  tip,
  iconTip,
  tipProps,
  iconTipProps,
  onChange,
  dark,
  disabled,
  style,
  className = "",
}) => {
  const [newChecked, setNewChecked] = useState<boolean>(checked);
  useEffect(() => setNewChecked(checked), [checked]);

  return (
    <div
      className={`land-switch ${tip ? "hover-pop" : ""} ${disabled ? "disabled" : ""
        }`}
    >
      <PopOver content={tip} theme="dark" {...tipProps} />
      <div
        className={`land-switch-content ${dark ? "dark" : ""} ${newChecked ? "checked" : ""
          } ${className}`}
        style={style}
        onClick={(e) => {
          e.stopPropagation();
          if (disabled) return;
          setNewChecked(!newChecked);
          onChange?.(newChecked);
        }}
      >
        <div className="land-switch-bar">
          <motion.div animate={{ x: newChecked ? 16 : 0 }} transition={{ duration: 0.6, type: 'spring' }} className="land-switch-indicator">
            {newChecked ? checkedIcon : icon}
          </motion.div>
        </div>
        {(label || checkedLabel) && (
          <div className="land-switch-label">
            {newChecked ? checkedLabel : label}
          </div>
        )}
      </div>
      {iconTip && (
        <div className="land-switch-label-iconTip hover-pop">
          <Icon name="info-stroke" size={16} />
          <PopOver content={iconTip} theme="dark" {...iconTipProps} />
        </div>
      )}
    </div>
  );
};

export default Switch;
