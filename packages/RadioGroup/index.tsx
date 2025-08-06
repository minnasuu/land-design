import React from "react";
import './index.scss';
import { RadioGroupProps } from "./props";
import Radio from "../Radio";

const RadioGroup: React.FC<RadioGroupProps> = ({
  checked,
  data = [],
  animated,
  onChange,
  style,
  className = ''
}) => (
  <div className={`land-radio-group ${className}`} style={style}>
    {
      data?.map(item =>
        <Radio
          key={item.key}
          label={item.label}
          tip={item.tip}
          disabled={item.disabled}
          checked={checked === item.key}
          animated={animated}
          onClick={(e) => onChange?.(item.key, item, e)}
        />
      )
    }
  </div>
);

export default RadioGroup;
