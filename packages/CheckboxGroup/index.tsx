import React from "react";
import Checkbox from "../Checkbox";
import { CheckboxGroupProps } from "./props";
import './index.scss';
const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  checked,
  data,
  animated,
  onChange,
  style,
  className = ''
}) => (
  <div className={`land-checkbox ${className}`} style={style}>
    {
      data?.map(item =>
        <Checkbox
          key={item.key}
          checked={checked.includes(item.key)}
          onCheckedChange={() => onChange?.(item)}
          animated={animated}
          {...item}
        />
      )
    }
  </div>
);

export default CheckboxGroup;
