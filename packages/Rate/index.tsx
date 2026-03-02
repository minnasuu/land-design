import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./index.scss";
import { RateProps, defaultRateProps, isCharacterFunction } from "./props";

// ==================== 默认星形图标 ====================

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="currentColor">
    <path d="M22.683 5.415c.568-1.043 2.065-1.043 2.634 0l5.507 10.098a1.5 1.5 0 0 0 1.04.756l11.306 2.117c1.168.219 1.63 1.642.814 2.505l-7.902 8.359a1.5 1.5 0 0 0-.397 1.223l1.48 11.407c.153 1.177-1.058 2.057-2.131 1.548l-10.391-4.933a1.5 1.5 0 0 0-1.287 0l-10.39 4.933c-1.073.51-2.284-.37-2.131-1.548l1.48-11.407a1.5 1.5 0 0 0-.398-1.223L4.015 20.89c-.816-.863-.353-2.286.814-2.505l11.306-2.117a1.5 1.5 0 0 0 1.04-.756l5.508-10.098Z" />
  </svg>
);

// ==================== Rate 组件 ====================

const Rate: React.FC<RateProps> = (props) => {
  const {
    value: controlledValue,
    defaultValue = 0,
    count = defaultRateProps.count,
    allowHalf = defaultRateProps.allowHalf,
    allowClear = defaultRateProps.allowClear,
    size = defaultRateProps.size,
    disabled = defaultRateProps.disabled,
    readOnly = defaultRateProps.readOnly,
    autoFocus = defaultRateProps.autoFocus,
    name,
    showTooltip = defaultRateProps.showTooltip,
    tooltips,
    style,
    className,
    gap = defaultRateProps.gap,
    inactiveColor = defaultRateProps.inactiveColor,
    activeColor = defaultRateProps.activeColor,
    hoverColor,
    characterStyle,
    characterClassName,
    character,
    activeCharacter,
    onChange,
    onHoverChange,
    onFocus,
    onBlur,
    onKeyDown,
  } = props;

  // ─── 状态管理 ───
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 受控/非受控模式
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  // 显示值（悬停时显示悬停值）
  const displayValue = hoverValue ?? currentValue;

  // ─── 自动聚焦 ───
  useEffect(() => {
    if (autoFocus && containerRef.current && !disabled && !readOnly) {
      containerRef.current.focus();
    }
  }, [autoFocus, disabled, readOnly]);

  // ─── 获取单个图标 ───
  const getCharacter = useCallback(
    (index: number, isActive: boolean) => {
      // 选中状态且有 activeCharacter
      if (isActive && activeCharacter) {
        return isCharacterFunction(activeCharacter)
          ? activeCharacter(index)
          : activeCharacter;
      }
      // 默认 character
      if (character) {
        return isCharacterFunction(character) ? character(index) : character;
      }
      // 默认星形
      return <StarIcon />;
    },
    [character, activeCharacter]
  );

  // ─── 计算值 ───
  const getStarValue = useCallback(
    (index: number, isLeft: boolean): number => {
      if (allowHalf) {
        return isLeft ? index + 0.5 : index + 1;
      }
      return index + 1;
    },
    [allowHalf]
  );

  // ─── 判断星形状态 ───
  const isStarActive = useCallback(
    (index: number, isLeft: boolean): boolean => {
      const starValue = getStarValue(index, isLeft);
      return displayValue >= starValue;
    },
    [displayValue, getStarValue]
  );

  // ─── 点击处理 ───
  const handleClick = useCallback(
    (index: number, isLeft: boolean) => {
      if (disabled || readOnly) return;

      const newValue = getStarValue(index, isLeft);
      let finalValue = newValue;

      // 允许清除：再次点击同一值时清零
      if (allowClear && newValue === currentValue) {
        finalValue = 0;
      }

      if (!isControlled) {
        setInternalValue(finalValue);
      }
      onChange?.(finalValue);
    },
    [disabled, readOnly, getStarValue, allowClear, currentValue, isControlled, onChange]
  );

  // ─── 悬停处理 ───
  const handleMouseEnter = useCallback(
    (index: number, isLeft: boolean) => {
      if (disabled || readOnly) return;

      const newHoverValue = getStarValue(index, isLeft);
      setHoverValue(newHoverValue);
      onHoverChange?.(newHoverValue);
    },
    [disabled, readOnly, getStarValue, onHoverChange]
  );

  const handleMouseLeave = useCallback(() => {
    if (disabled || readOnly) return;

    setHoverValue(undefined);
    onHoverChange?.(undefined);
  }, [disabled, readOnly, onHoverChange]);

  // ─── 聚焦处理 ───
  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLDivElement>) => {
      if (disabled) return;
      setIsFocused(true);
      onFocus?.(e);
    },
    [disabled, onFocus]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLDivElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    },
    [onBlur]
  );

  // ─── 键盘处理 ───
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (disabled || readOnly) return;

      const step = allowHalf ? 0.5 : 1;
      let newValue = currentValue;

      switch (e.key) {
        case "ArrowRight":
        case "ArrowUp":
          e.preventDefault();
          newValue = Math.min(currentValue + step, count);
          break;
        case "ArrowLeft":
        case "ArrowDown":
          e.preventDefault();
          newValue = Math.max(currentValue - step, 0);
          break;
        case "Home":
          e.preventDefault();
          newValue = 0;
          break;
        case "End":
          e.preventDefault();
          newValue = count;
          break;
        default:
          break;
      }

      if (newValue !== currentValue) {
        if (!isControlled) {
          setInternalValue(newValue);
        }
        onChange?.(newValue);
      }

      onKeyDown?.(e);
    },
    [disabled, readOnly, allowHalf, currentValue, count, isControlled, onChange, onKeyDown]
  );

  // ─── 获取 Tooltip 文本 ───
  const getTooltipText = useCallback(
    (index: number): string | undefined => {
      if (!showTooltip || !tooltips) return undefined;
      return tooltips[index];
    },
    [showTooltip, tooltips]
  );

  // ─── 类名计算 ───
  const rootClassName = useMemo(() => {
    const classes = ["land-rate"];
    if (size && size !== "default") classes.push(`land-rate--${size}`);
    if (disabled) classes.push("land-rate--disabled");
    if (readOnly) classes.push("land-rate--readonly");
    if (isFocused) classes.push("land-rate--focused");
    if (className) classes.push(className);
    return classes.join(" ");
  }, [size, disabled, readOnly, isFocused, className]);

  // ─── 样式计算 ───
  const rootStyle = useMemo(
    () =>
      ({
        "--land-rate-gap": typeof gap === "number" ? `${gap}px` : gap,
        "--land-rate-inactive-color": inactiveColor,
        "--land-rate-active-color": activeColor,
        "--land-rate-hover-color": hoverColor || activeColor,
        ...style,
      } as React.CSSProperties),
    [gap, inactiveColor, activeColor, hoverColor, style]
  );

  // ─── 渲染单个星形 ───
  const renderStar = useCallback(
    (index: number) => {
      const isLeftActive = isStarActive(index, true);
      const isRightActive = isStarActive(index, false);
      const isFullActive = isLeftActive && isRightActive;
      const isHalfActive = isLeftActive && !isRightActive;
      const tooltipText = getTooltipText(index);

      const starContent = (
        <div
          key={index}
          className={`land-rate__character ${characterClassName || ""} ${
            isFullActive ? "land-rate__character--active" : ""
          } ${isHalfActive ? "land-rate__character--half" : ""}`}
          style={characterStyle}
          title={tooltipText}
        >
          {/* 半星左侧区域 */}
          {allowHalf && (
            <div
              className="land-rate__character-half land-rate__character-half--first"
              onClick={() => handleClick(index, true)}
              onMouseEnter={() => handleMouseEnter(index, true)}
              onMouseLeave={handleMouseLeave}
            />
          )}

          {/* 半星右侧区域 / 整星区域 */}
          <div
            className={`land-rate__character-half land-rate__character-half--second ${
              !allowHalf ? "land-rate__character-half--full" : ""
            }`}
            onClick={() => handleClick(index, false)}
            onMouseEnter={() => handleMouseEnter(index, false)}
            onMouseLeave={handleMouseLeave}
          />

          {/* 图标容器 */}
          <div className="land-rate__character-icon">
            {/* 未选中图标（底层） */}
            <div className="land-rate__character-icon-inactive">
              {getCharacter(index, false)}
            </div>
            {/* 选中图标（上层，用于半星裁剪） */}
            <div
              className="land-rate__character-icon-active"
              style={{
                width: isHalfActive ? "50%" : isFullActive ? "100%" : "0%",
              }}
            >
              {getCharacter(index, true)}
            </div>
          </div>
        </div>
      );

      return starContent;
    },
    [
      isStarActive,
      getTooltipText,
      characterClassName,
      characterStyle,
      allowHalf,
      handleClick,
      handleMouseEnter,
      handleMouseLeave,
      getCharacter,
    ]
  );

  // ─── 主渲染 ───
  return (
    <div
      ref={containerRef}
      className={rootClassName}
      style={rootStyle}
      role="slider"
      aria-label="评分"
      aria-valuemin={0}
      aria-valuemax={count}
      aria-valuenow={currentValue}
      aria-valuetext={tooltips?.[Math.ceil(currentValue) - 1]}
      aria-disabled={disabled}
      aria-readonly={readOnly}
      tabIndex={disabled ? -1 : 0}
      data-name={name}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      onMouseLeave={handleMouseLeave}
    >
      {Array.from({ length: count }).map((_, index) => renderStar(index))}
    </div>
  );
};

export default Rate;
