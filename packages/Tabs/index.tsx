import { Fragment } from "react";
import './index.scss';
import Divider from "../Divider";
import PopOver from "../PopOver";
import Icon from "../Icon";
import { TabsProps } from "./props";

function Tabs({
  width = "100%",
  checked,
  data,
  useDivider = false,
  onChange,
  activeClassName = "",
  className = "",
  switchDisabled,
  style,
}: TabsProps) {
  return (
    <div
      className={`land-tabs  ${className}`}
      style={{ width, ...style }}
    >
      {data?.map((item, index) => (
        <Fragment key={item.key}>
          {useDivider && index !== 0 && (
            <Divider
              direction="vertical"
              spacing={0}
              length="14px"
              className={`land-tabs-divider ${checked !== item.key && checked !== (data[index - 1]?.key as string)
                ? ""
                : "hidden"
                }`}
            />
          )}
          <div
            className={`land-tabs-item 
               ${checked === item.key
                ? `selected ${activeClassName}`
                : (item.disabled || switchDisabled)
                  ? "disabled"
                  : ""
              }`}
            onClick={(e) => {
              e.stopPropagation();
              !item.disabled && !switchDisabled && onChange?.(item.key, item);
            }}
          >
            {item.label}
            {item.showIcon && (
              <div className="size-icon-16 fs-12 flex items-center color-icon-secondary hover-pop relative cursor-default">
                <Icon name="info-stroke" size={16} />
                <PopOver content={item.iconTip} theme="dark" />
              </div>
            )}
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export default Tabs;
