import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import "./index.scss";
import Divider from "../Divider";
import Icon from "../Icon";
import Input from "../Input";
import PopOver from "../PopOver";
import {
  NumberInputProps,
  NumberInputChangeInfo,
  numberInputDefaultProps,
} from "./props";

/**
 * NumberInput 数字输入框组件
 *
 * 用于数值输入的专用输入框，支持步进调整、范围限制、滚轮控制等功能。
 */
const NumberInput: React.FC<NumberInputProps> = ({
  // 基础属性
  value: controlledValue,
  defaultValue = numberInputDefaultProps.defaultValue,
  name,
  placeholder,
  // 外观属性
  variant = numberInputDefaultProps.variant,
  size = numberInputDefaultProps.size,
  stepperPosition = numberInputDefaultProps.stepperPosition,
  textAlign = numberInputDefaultProps.textAlign,
  // 数值属性
  step = numberInputDefaultProps.step!,
  min = numberInputDefaultProps.min!,
  max = numberInputDefaultProps.max!,
  precision,
  strictStep = false,
  // 内容属性
  prefix,
  suffix,
  formatter,
  parser,
  // 交互属性
  disabled = numberInputDefaultProps.disabled,
  readOnly = numberInputDefaultProps.readOnly,
  wheelable = numberInputDefaultProps.wheelable,
  // 样式属性
  className,
  style,
  width,
  autoWidth = numberInputDefaultProps.autoWidth,
  inputClassName,
  inputStyle,
  // 事件属性
  onChange,
  onStep,
  onFocus,
  onBlur,
  onPressEnter,
}) => {
  // ─── 状态管理 ───
  const isControlled = controlledValue !== undefined;

  const [innerValue, setInnerValue] = useState<number | undefined>(() => {
    if (controlledValue !== undefined) return controlledValue;
    return defaultValue;
  });

  // 同步受控值
  useEffect(() => {
    if (controlledValue !== undefined) {
      setInnerValue(controlledValue);
    }
  }, [controlledValue]);

  // 当前实际值
  const currentValue = isControlled ? controlledValue : innerValue;

  // ─── 工具函数 ───

  /**
   * 格式化数值精度
   */
  const formatPrecision = useCallback(
    (val: number): number => {
      if (precision !== undefined) {
        return Number(val.toFixed(precision));
      }
      return val;
    },
    [precision]
  );

  /**
   * 限制数值范围
   */
  const clampValue = useCallback(
    (val: number): number => {
      let result = val;
      if (min !== undefined && result < min) result = min;
      if (max !== undefined && result > max) result = max;
      return formatPrecision(result);
    },
    [min, max, formatPrecision]
  );

  /**
   * 验证步进
   */
  const validateStep = useCallback(
    (val: number): boolean => {
      if (!strictStep || step === undefined) return true;
      const base = min !== -Infinity ? min : 0;
      const remainder = Math.abs((val - base) % step);
      return remainder < 1e-10 || Math.abs(remainder - step) < 1e-10;
    },
    [strictStep, step, min]
  );

  /**
   * 获取显示值
   */
  const displayValue = useMemo(() => {
    if (currentValue === undefined) return "";
    if (formatter) return formatter(currentValue);
    return String(currentValue);
  }, [currentValue, formatter]);

  // ─── 值更新处理 ───

  const updateValue = useCallback(
    (newValue: number | undefined, info: NumberInputChangeInfo) => {
      if (disabled) return;

      let finalValue = newValue;
      if (finalValue !== undefined) {
        finalValue = clampValue(finalValue);
        if (strictStep && !validateStep(finalValue)) {
          return;
        }
      }

      if (!isControlled) {
        setInnerValue(finalValue);
      }
      onChange?.(finalValue, info);
    },
    [disabled, clampValue, strictStep, validateStep, isControlled, onChange]
  );

  // ─── 事件处理 ───

  /**
   * 输入变化处理
   */
  const handleInputChange = useCallback(
    (inputValue: string, event?: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled || readOnly) return;

      // 空值处理
      if (inputValue === "" || inputValue === "-") {
        updateValue(undefined, { source: "input", event });
        return;
      }

      // 解析值
      let numValue: number;
      if (parser) {
        numValue = parser(inputValue);
      } else {
        numValue = Number(inputValue);
      }

      if (isNaN(numValue)) return;

      updateValue(numValue, { source: "input", event });
    },
    [disabled, readOnly, parser, updateValue]
  );

  /**
   * 步进处理
   */
  const handleStep = useCallback(
    (direction: "up" | "down", event?: React.SyntheticEvent) => {
      if (disabled) return;

      const current = currentValue ?? 0;
      const delta = direction === "up" ? step : -step;
      const newValue = formatPrecision(current + delta);

      // 检查范围
      if (direction === "up" && newValue > max) return;
      if (direction === "down" && newValue < min) return;

      updateValue(newValue, { source: "step", event });
      onStep?.(newValue, direction);
    },
    [disabled, currentValue, step, formatPrecision, max, min, updateValue, onStep]
  );

  /**
   * 滚轮处理
   */
  const handleWheel = useCallback(
    (event: React.WheelEvent) => {
      if (!wheelable || disabled) return;

      event.preventDefault();
      event.stopPropagation();

      const direction = event.deltaY > 0 ? "down" : "up";
      handleStep(direction, event);
    },
    [wheelable, disabled, handleStep]
  );

  /**
   * 按下回车回调
   */
  const handleEnter = useCallback(
    (_value: string, event?: React.KeyboardEvent<HTMLInputElement>) => {
      if (event) {
        onPressEnter?.(event);
      }
    },
    [onPressEnter]
  );

  /**
   * 失焦处理（规范化值）
   */
  const handleBlur = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      // 失焦时规范化值
      if (currentValue !== undefined) {
        const normalized = clampValue(currentValue);
        if (normalized !== currentValue) {
          updateValue(normalized, { source: "input", event });
        }
      }
      onBlur?.(event);
    },
    [currentValue, clampValue, updateValue, onBlur]
  );

  // ─── 计算类名 ───

  const rootClassName = useMemo(() => {
    const classes = ["land-number-input"];
    if (variant) classes.push(`land-number-input--${variant}`);
    if (size && size !== "default") classes.push(`land-number-input--${size}`);
    if (stepperPosition === "none") classes.push("land-number-input--no-stepper");
    if (stepperPosition === "both") classes.push("land-number-input--stepper-both");
    if (disabled) classes.push("land-number-input--disabled");
    if (wheelable) classes.push("land-number-input--wheelable");
    if (autoWidth) classes.push("land-number-input--auto-width");
    if (className) classes.push(className);
    return classes.join(" ");
  }, [variant, size, stepperPosition, disabled, wheelable, autoWidth, className]);

  // ─── 渲染增减按钮 ───

  const isAtMin = currentValue !== undefined && currentValue <= min;
  const isAtMax = currentValue !== undefined && currentValue >= max;

  const renderStepButton = (direction: "up" | "down") => {
    const isDisabled = disabled || (direction === "up" ? isAtMax : isAtMin);
    const buttonClassName = [
      "land-number-input__step-btn",
      `land-number-input__step-btn--${direction}`,
      isDisabled ? "land-number-input__step-btn--disabled" : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div
        className={buttonClassName}
        onClick={(e) => {
          e.stopPropagation();
          if (!isDisabled) {
            handleStep(direction, e);
          }
        }}
        role="button"
        aria-label={direction === "up" ? "增加" : "减少"}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : 0}
      >
        <Icon name="arrow" size={size === "small" ? 14 : size === "large" ? 18 : 16} />
      </div>
    );
  };

  // ─── 渲染 ───

  return (
    <div
      className={rootClassName}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        ...style,
      }}
      onClick={(e) => e.stopPropagation()}
      onWheel={handleWheel}
      data-name={name}
      data-value={currentValue}
    >
      {/* 左侧减按钮（both 模式） */}
      {stepperPosition === "both" && (
        <div className="land-number-input__stepper land-number-input__stepper--left">
          {renderStepButton("down")}
        </div>
      )}

      {/* 输入框 */}
      {wheelable ? (
        <PopOver
          attach="body"
          className="land-number-input__popover"
          content="滚动鼠标滚轮调整数值"
          placement="top"
          theme="dark"
        >
          <Input
            className={`land-number-input__input ${inputClassName ?? ""}`}
            variant={variant}
            inputType="text"
            value={displayValue}
            disabled={disabled || readOnly}
            autoWidth={autoWidth}
            prefix={prefix}
            suffix={suffix}
            placeholder={placeholder}
            textAlign={textAlign}
            onChange={handleInputChange}
            onEnter={handleEnter}
            onFocus={onFocus}
            onBlur={handleBlur}
            style={{
              paddingRight: stepperPosition === "right" ? "32px" : undefined,
              paddingLeft: stepperPosition === "both" ? "32px" : undefined,
              ...inputStyle,
            }}
          />
        </PopOver>
      ) : (
        <div className="land-number-input__popover">
          <Input
            className={`land-number-input__input ${inputClassName ?? ""}`}
            variant={variant}
            inputType="text"
            value={displayValue}
            disabled={disabled || readOnly}
            autoWidth={autoWidth}
            prefix={prefix}
            suffix={suffix}
            placeholder={placeholder}
            textAlign={textAlign}
            onChange={handleInputChange}
            onEnter={handleEnter}
            onFocus={onFocus}
            onBlur={handleBlur}
            style={{
              paddingRight: stepperPosition === "right" ? "32px" : undefined,
              paddingLeft: stepperPosition === "both" ? "32px" : undefined,
              ...inputStyle,
            }}
          />
        </div>
      )}

      {/* 右侧增减按钮（right 模式） */}
      {stepperPosition === "right" && (
        <div className="land-number-input__stepper land-number-input__stepper--right">
          {renderStepButton("up")}
          {variant !== "transparent" && <Divider spacing={0} length="32px" />}
          {renderStepButton("down")}
        </div>
      )}

      {/* 右侧增按钮（both 模式） */}
      {stepperPosition === "both" && (
        <div className="land-number-input__stepper land-number-input__stepper--right">
          {renderStepButton("up")}
        </div>
      )}
    </div>
  );
};

export default NumberInput;
