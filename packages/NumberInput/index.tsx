import React, { useCallback, useEffect, useState } from "react";
import "./index.scss";
import Divider from "../Divider";
import Icon from "../Icon";
import Input from "../Input";
import { NumberInputProps } from "./props";
import PopOver from "../PopOver";

const NumberInput: React.FC<NumberInputProps> = ({
  value = 0,
  type = "border",
  step = 1,
  min = 0,
  max = 100,
  prefix,
  suffix,
  disabled,
  onChange,
  width,
  hideArrowButton = false,
  textAlign,
  enableWheelScroll = false,
  style,
  ...restProps
}) => {
  const [newValue, setNewValue] = useState<number>(value);
  useEffect(() => value !== undefined && setNewValue(value), [value]);

  const handleValueChange = (val: number, e: any) => {
    if (disabled) return;
    if (val < min - step / 2 || val > max + step / 2) {
      return;
    } else {
      setNewValue(val);
      onChange?.(val, e);
    }
  };

  const handleNumberInputChange = useCallback(
    (value: string, e: any) => {
      const numValue = Number(value);
      if (
        numValue > max ||
        numValue < min ||
        (typeof numValue === "number" && Boolean(numValue % step))
      )
        return;
      setNewValue(numValue);
      onChange?.(numValue, e);
    },
    [max, min, step, onChange]
  );

  // 处理鼠标滚轮事件
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (!enableWheelScroll || disabled) return;

      e.preventDefault();
      e.stopPropagation();

      const delta = e.deltaY > 0 ? -step : step;
      const newVal = newValue + delta;

      // 检查是否超出范围
      if (newVal >= min && newVal <= max) {
        handleValueChange(newVal, e);
      }
    },
    [enableWheelScroll, disabled, newValue, step, min, max]
  );

  return (
    <div
      className={`land-number-input ${hideArrowButton ? "hide-arrow-button" : ""
        }`}
      data-wheel-enabled={enableWheelScroll}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        ...style,
      }}
      onClick={(e) => e.stopPropagation()}
      onWheel={handleWheel}
    >
      <PopOver
        targetBody
        className="land-number-input-wheel-popover"
        content={enableWheelScroll ? "滚动鼠标滚轮调整数值" : ""}
        placement="top"
        theme="dark"
      >
        <Input
          className="land-number-input-input"
          type={type}
          inputType="number"
          value={String(newValue)}
          disabled={disabled}
          prefix={prefix}
          suffix={suffix}
          onChange={(value, e) => handleNumberInputChange(value, e)}
          style={{
            paddingRight: hideArrowButton ? "0" : "40px",
          }}
          textAlign={textAlign}
          placeholder={restProps.placeholder}
          {...restProps}
        />
      </PopOver>
      {!hideArrowButton && (
        <div
          className="land-numberInput-arrow"
          style={{
            borderLeft:
              type === "border" ? "1px solid var(--color-border-primary)" : "",
            background: "inherit",
          }}
        >
          <div
            className={`land-numberInput-add ${newValue === max || disabled ? "disabled" : ""
              }`}
            onClick={(e: any) => handleValueChange?.(newValue + step, e)}
          >
            <Icon name="arrow" size={16} />
          </div>
          {type === "border" && <Divider gap={0} lineLength="32px" />}
          <div
            className={`land-numberInput-dec ${newValue === min || disabled ? "disabled" : ""
              }`}
            onClick={(e: any) => handleValueChange?.(newValue - step, e)}
          >
            <Icon name="arrow" size={16} />
          </div>
        </div>
      )}
    </div>
  );
};

export default NumberInput;
