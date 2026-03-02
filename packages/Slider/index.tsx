import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { SliderProps, SliderMark, sliderDefaultProps } from "./props";
import "./index.scss";

/**
 * Slider 滑动输入条组件
 * @description 用于在一定范围内进行数值选择
 */
const Slider: React.FC<SliderProps> = (props) => {
  const {
    // 基础属性
    value: controlledValue,
    defaultValue = sliderDefaultProps.defaultValue,
    min = sliderDefaultProps.min!,
    max = sliderDefaultProps.max!,
    step = sliderDefaultProps.step!,
    range = sliderDefaultProps.range,
    name,

    // 外观属性
    size = sliderDefaultProps.size,
    orientation = sliderDefaultProps.orientation,
    showMarks = sliderDefaultProps.showMarks,
    marks,
    showDots = sliderDefaultProps.showDots,

    // Tooltip 属性
    tooltip = sliderDefaultProps.tooltip,
    tooltipPlacement = sliderDefaultProps.tooltipPlacement,
    tooltipFormatter,

    // 内容属性
    prefix,
    suffix,

    // 状态属性
    disabled = sliderDefaultProps.disabled,
    readOnly = sliderDefaultProps.readOnly,

    // 样式属性
    className,
    style,
    trackClassName,
    trackStyle,
    activeTrackStyle,
    thumbClassName,
    thumbStyle,

    // 事件属性
    onChange,
    onChangeComplete,
    onFocus,
    onBlur,
  } = props;

  // ─── Refs ───
  const sliderRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // ─── 状态管理 ───
  const isControlled = controlledValue !== undefined;
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [focused, setFocused] = useState(false);

  // 获取初始值
  const getInitialValue = useCallback((): [number, number] => {
    const val = isControlled ? controlledValue : defaultValue;
    if (range) {
      if (Array.isArray(val)) {
        return [
          Math.max(min, Math.min(max, val[0])),
          Math.max(min, Math.min(max, val[1])),
        ];
      }
      return [min, max];
    }
    const singleVal = typeof val === "number" ? val : min;
    return [Math.max(min, Math.min(max, singleVal)), max];
  }, [isControlled, controlledValue, defaultValue, range, min, max]);

  const [internalValue, setInternalValue] = useState<[number, number]>(getInitialValue);

  // 同步外部值
  useEffect(() => {
    if (isControlled) {
      setInternalValue(getInitialValue());
    }
  }, [controlledValue, isControlled, getInitialValue]);

  // ─── 是否可交互 ───
  const isInteractive = !disabled && !readOnly;
  const isVertical = orientation === "vertical";

  // ─── 计算工具函数 ───
  const valueToPercent = useCallback(
    (val: number): number => {
      if (max === min) return 0;
      return ((val - min) / (max - min)) * 100;
    },
    [min, max]
  );

  const percentToValue = useCallback(
    (percent: number): number => {
      const rawValue = (percent / 100) * (max - min) + min;
      const steppedValue = Math.round(rawValue / step) * step;
      // 处理浮点数精度问题
      const precision = String(step).includes(".")
        ? String(step).split(".")[1].length
        : 0;
      const fixedValue = Number(steppedValue.toFixed(precision));
      return Math.min(max, Math.max(min, fixedValue));
    },
    [min, max, step]
  );

  const getPercentFromEvent = useCallback(
    (event: MouseEvent | React.MouseEvent | TouchEvent | React.TouchEvent): number => {
      if (!trackRef.current) return 0;
      const rect = trackRef.current.getBoundingClientRect();

      let clientPos: number;
      if ("touches" in event) {
        clientPos = isVertical
          ? event.touches[0].clientY
          : event.touches[0].clientX;
      } else {
        clientPos = isVertical ? event.clientY : event.clientX;
      }

      let percent: number;
      if (isVertical) {
        percent = ((rect.bottom - clientPos) / rect.height) * 100;
      } else {
        percent = ((clientPos - rect.left) / rect.width) * 100;
      }

      return Math.min(100, Math.max(0, percent));
    },
    [isVertical]
  );

  // ─── 值更新 ───
  const updateValue = useCallback(
    (thumbIndex: number, newValue: number, isComplete = false) => {
      if (!isInteractive) return;

      setInternalValue((prev) => {
        const newValues: [number, number] = [...prev];
        newValues[thumbIndex] = newValue;

        // 范围模式下确保顺序
        if (range) {
          if (thumbIndex === 0 && newValues[0] > newValues[1]) {
            newValues[0] = newValues[1];
          } else if (thumbIndex === 1 && newValues[1] < newValues[0]) {
            newValues[1] = newValues[0];
          }
        }

        // 触发回调
        const emitValue = range ? newValues : newValues[0];

        if (!isControlled) {
          if (isComplete) {
            onChangeComplete?.(emitValue);
          } else {
            onChange?.(emitValue);
          }
        } else {
          onChange?.(emitValue);
          if (isComplete) {
            onChangeComplete?.(emitValue);
          }
        }

        return isControlled ? prev : newValues;
      });
    },
    [isInteractive, range, isControlled, onChange, onChangeComplete]
  );

  // ─── 事件处理 ───
  const handleThumbMouseDown = useCallback(
    (thumbIndex: number) => (event: React.MouseEvent | React.TouchEvent) => {
      if (!isInteractive) return;
      event.preventDefault();
      event.stopPropagation();
      setDraggingIndex(thumbIndex);
    },
    [isInteractive]
  );

  const handleTrackClick = useCallback(
    (event: React.MouseEvent) => {
      if (!isInteractive || draggingIndex !== null) return;

      const percent = getPercentFromEvent(event);
      const newValue = percentToValue(percent);

      if (range) {
        // 找最近的滑块
        const dist0 = Math.abs(newValue - internalValue[0]);
        const dist1 = Math.abs(newValue - internalValue[1]);
        const thumbIndex = dist0 <= dist1 ? 0 : 1;
        updateValue(thumbIndex, newValue, true);
      } else {
        updateValue(0, newValue, true);
      }
    },
    [isInteractive, draggingIndex, getPercentFromEvent, percentToValue, range, internalValue, updateValue]
  );

  const handleFocus = useCallback(
    (event: React.FocusEvent) => {
      setFocused(true);
      onFocus?.(event);
    },
    [onFocus]
  );

  const handleBlur = useCallback(
    (event: React.FocusEvent) => {
      setFocused(false);
      onBlur?.(event);
    },
    [onBlur]
  );

  const handleKeyDown = useCallback(
    (thumbIndex: number) => (event: React.KeyboardEvent) => {
      if (!isInteractive) return;

      let delta = 0;
      switch (event.key) {
        case "ArrowRight":
        case "ArrowUp":
          delta = step;
          break;
        case "ArrowLeft":
        case "ArrowDown":
          delta = -step;
          break;
        case "PageUp":
          delta = step * 10;
          break;
        case "PageDown":
          delta = -step * 10;
          break;
        case "Home":
          updateValue(thumbIndex, min, true);
          return;
        case "End":
          updateValue(thumbIndex, max, true);
          return;
        default:
          return;
      }

      event.preventDefault();
      const currentValue = thumbIndex === 0 ? internalValue[0] : internalValue[1];
      const newValue = Math.min(max, Math.max(min, currentValue + delta));
      updateValue(thumbIndex, newValue, true);
    },
    [isInteractive, step, min, max, internalValue, updateValue]
  );

  // ─── 拖拽处理 ───
  useEffect(() => {
    if (draggingIndex === null) return;

    const handleMove = (event: MouseEvent | TouchEvent) => {
      const percent = getPercentFromEvent(event);
      const newValue = percentToValue(percent);
      updateValue(draggingIndex, newValue);
    };

    const handleEnd = () => {
      const emitValue = range ? internalValue : internalValue[0];
      onChangeComplete?.(emitValue);
      setDraggingIndex(null);
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleEnd);
    document.addEventListener("touchmove", handleMove);
    document.addEventListener("touchend", handleEnd);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("touchend", handleEnd);
    };
  }, [draggingIndex, getPercentFromEvent, percentToValue, updateValue, range, internalValue, onChangeComplete]);

  // ─── 类名计算 ───
  const rootClassName = useMemo(() => {
    const classes = ["land-slider"];
    if (size && size !== "default") classes.push(`land-slider--${size}`);
    if (isVertical) classes.push("land-slider--vertical");
    if (range) classes.push("land-slider--range");
    if (disabled) classes.push("land-slider--disabled");
    if (readOnly) classes.push("land-slider--readonly");
    if (draggingIndex !== null) classes.push("land-slider--dragging");
    if (focused) classes.push("land-slider--focused");
    if (className) classes.push(className);
    return classes.join(" ");
  }, [size, isVertical, range, disabled, readOnly, draggingIndex, focused, className]);

  // ─── 计算位置 ───
  const leftPercent = valueToPercent(internalValue[0]);
  const rightPercent = range ? valueToPercent(internalValue[1]) : leftPercent;
  const activeStart = range ? leftPercent : 0;
  const activeSize = range ? rightPercent - leftPercent : leftPercent;

  // ─── 生成刻度标记 ───
  const markList = useMemo((): SliderMark[] => {
    if (!showMarks && !marks) return [];

    if (Array.isArray(marks)) {
      return marks;
    }

    // 自动生成刻度
    const result: SliderMark[] = [];
    const count = Math.floor((max - min) / step);
    for (let i = 0; i <= count; i++) {
      const value = min + i * step;
      result.push({ value });
    }
    return result;
  }, [showMarks, marks, min, max, step]);

  // ─── 渲染刻度点 ───
  const renderDots = () => {
    if (!showDots) return null;

    const dots = [];
    const count = Math.floor((max - min) / step);
    for (let i = 0; i <= count; i++) {
      const value = min + i * step;
      const percent = valueToPercent(value);
      const isActive =
        (range && value >= internalValue[0] && value <= internalValue[1]) ||
        (!range && value <= internalValue[0]);

      dots.push(
        <div
          key={i}
          className={`land-slider__dot ${isActive ? "land-slider__dot--active" : ""}`}
          style={
            isVertical
              ? { bottom: `${percent}%` }
              : { left: `${percent}%` }
          }
        />
      );
    }
    return dots;
  };

  // ─── 渲染刻度标记 ───
  const renderMarks = () => {
    if (markList.length === 0) return null;

    return (
      <div className="land-slider__marks">
        {markList.map((mark, index) => {
          const percent = valueToPercent(mark.value);
          const isActive =
            (range && mark.value >= internalValue[0] && mark.value <= internalValue[1]) ||
            (!range && mark.value <= internalValue[0]);

          return (
            <div
              key={index}
              className={`land-slider__mark ${isActive ? "land-slider__mark--active" : ""}`}
              style={{
                ...(isVertical
                  ? { bottom: `${percent}%` }
                  : { left: `${percent}%` }),
                ...mark.style,
              }}
            >
              {mark.label !== undefined ? mark.label : mark.value}
            </div>
          );
        })}
      </div>
    );
  };

  // ─── 渲染 Tooltip ───
  const renderTooltip = (thumbIndex: number, value: number) => {
    if (tooltip === "never") return null;

    const isActive =
      tooltip === "always" ||
      draggingIndex === thumbIndex ||
      hoverIndex === thumbIndex;

    if (!isActive) return null;

    const content = tooltipFormatter ? tooltipFormatter(value) : value;

    return (
      <div className={`land-slider__tooltip land-slider__tooltip--${tooltipPlacement}`}>
        {content}
      </div>
    );
  };

  // ─── 渲染滑块 ───
  const renderThumb = (thumbIndex: number, percent: number, value: number) => {
    const isDragging = draggingIndex === thumbIndex;
    const isHover = hoverIndex === thumbIndex;

    const thumbClasses = [
      "land-slider__thumb",
      isDragging && "land-slider__thumb--dragging",
      isHover && "land-slider__thumb--hover",
      thumbClassName,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div
        key={thumbIndex}
        className={thumbClasses}
        style={{
          ...(isVertical
            ? { bottom: `${percent}%` }
            : { left: `${percent}%` }),
          ...thumbStyle,
        }}
        role="slider"
        tabIndex={disabled ? -1 : 0}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-disabled={disabled}
        aria-orientation={orientation}
        onMouseDown={handleThumbMouseDown(thumbIndex)}
        onTouchStart={handleThumbMouseDown(thumbIndex)}
        onMouseEnter={() => setHoverIndex(thumbIndex)}
        onMouseLeave={() => setHoverIndex(null)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown(thumbIndex)}
      >
        {renderTooltip(thumbIndex, value)}
      </div>
    );
  };

  return (
    <div
      ref={sliderRef}
      className={rootClassName}
      style={style}
      data-name={name}
    >
      {/* 前缀 */}
      {prefix && <div className="land-slider__prefix">{prefix}</div>}

      {/* 滑轨容器 */}
      <div className="land-slider__rail-wrapper">
        {/* 轨道 */}
        <div
          ref={trackRef}
          className={`land-slider__track ${trackClassName ?? ""}`}
          style={trackStyle}
          onClick={handleTrackClick}
        >
          {/* 激活轨道 */}
          <div
            className="land-slider__track-active"
            style={{
              ...(isVertical
                ? { bottom: `${activeStart}%`, height: `${activeSize}%` }
                : { left: `${activeStart}%`, width: `${activeSize}%` }),
              ...activeTrackStyle,
            }}
          />

          {/* 刻度点 */}
          {renderDots()}

          {/* 滑块 */}
          {renderThumb(0, leftPercent, internalValue[0])}
          {range && renderThumb(1, rightPercent, internalValue[1])}
        </div>

        {/* 刻度标记 */}
        {renderMarks()}
      </div>

      {/* 后缀 */}
      {suffix && <div className="land-slider__suffix">{suffix}</div>}
    </div>
  );
};

export default Slider;
