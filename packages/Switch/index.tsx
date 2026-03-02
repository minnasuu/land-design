import React, { useCallback, useMemo, useState } from "react";
import { motion } from "motion/react";
import Icon from "../Icon";
import PopOver from "../PopOver";
import { SwitchProps, switchDefaultProps } from "./props";
import "./index.scss";
import Loading from "../Loading";

/**
 * Switch 开关组件
 * @description 用于在两种状态间进行切换
 */
const Switch: React.FC<SwitchProps> = (props) => {
  const {
    // 基础属性
    checked: controlledChecked,
    defaultChecked = switchDefaultProps.defaultChecked,
    name,
    value,

    // 内容属性
    label,
    checkedLabel,
    uncheckedContent,
    checkedContent,
    icon,
    checkedIcon,

    // 提示属性
    tip,
    iconTip,
    tipProps,
    iconTipProps,

    // 外观属性
    size = switchDefaultProps.size,
    labelPosition = switchDefaultProps.labelPosition,
    loading = switchDefaultProps.loading,

    // 状态属性
    disabled = switchDefaultProps.disabled,
    readOnly = switchDefaultProps.readOnly,

    // 样式属性
    className,
    style,
    trackClassName,
    trackStyle,
    thumbClassName,
    thumbStyle,

    // 事件属性
    onChange,
    onClick,
    onFocus,
    onBlur,
  } = props;

  // ─── 状态管理 ───
  const isControlled = controlledChecked !== undefined;
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isChecked = isControlled ? controlledChecked : internalChecked;

  // ─── 是否可交互 ───
  const isInteractive = !disabled && !readOnly && !loading;

  // ─── 滑块偏移量（根据尺寸计算） ───
  const thumbOffset = useMemo(() => {
    switch (size) {
      case "small":
        return 12;
      case "large":
        return 20;
      default:
        return 16;
    }
  }, [size]);

  // ─── 是否有轨道内容 ───
  const hasTrackContent = !!(uncheckedContent || checkedContent);

  // ─── 类名计算 ───
  const rootClassName = useMemo(() => {
    const classes = ["land-switch"];
    if (size && size !== "default") classes.push(`land-switch--${size}`);
    if (labelPosition === "left") classes.push("land-switch--label-left");
    if (isChecked) classes.push("land-switch--checked");
    if (disabled) classes.push("land-switch--disabled");
    if (readOnly) classes.push("land-switch--readonly");
    if (loading) classes.push("land-switch--loading");
    if (hasTrackContent) classes.push("land-switch--has-content");
    if (className) classes.push(className);
    return classes.join(" ");
  }, [size, labelPosition, isChecked, disabled, readOnly, loading, hasTrackContent, className]);

  const trackClasses = useMemo(() => {
    const classes = ["land-switch__track"];
    if (trackClassName) classes.push(trackClassName);
    return classes.join(" ");
  }, [trackClassName]);

  const thumbClasses = useMemo(() => {
    const classes = ["land-switch__thumb"];
    if (thumbClassName) classes.push(thumbClassName);
    return classes.join(" ");
  }, [thumbClassName]);

  // ─── 事件处理 ───
  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      onClick?.(event);

      if (!isInteractive) return;

      const newChecked = !isChecked;
      if (!isControlled) {
        setInternalChecked(newChecked);
      }
      onChange?.(newChecked, event);
    },
    [isInteractive, isChecked, isControlled, onClick, onChange]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (!isInteractive) return;

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const newChecked = !isChecked;
        if (!isControlled) {
          setInternalChecked(newChecked);
        }
        onChange?.(newChecked, event);
      }
    },
    [isInteractive, isChecked, isControlled, onChange]
  );

  // ─── 渲染标签 ───
  const renderLabel = () => {
    const currentLabel = isChecked && checkedLabel ? checkedLabel : label;
    if (!currentLabel) return null;

    return <span className="land-switch__label">{currentLabel}</span>;
  };

  // ─── 渲染轨道内容 ───
  const renderTrackContent = () => {
    if (!uncheckedContent && !checkedContent) return null;

    return (
      <span className="land-switch__track-content">
        {isChecked ? checkedContent : uncheckedContent}
      </span>
    );
  };

  // ─── 渲染滑块内容 ───
  const renderThumbContent = () => {
    if (loading) {
      return (
        <Loading className="land-switch__loading-icon" strokeSize={2} size={size === "small" ? 10 : size === "large" ? 14 : 12}/>
      );
    }

    const currentIcon = isChecked ? checkedIcon : icon;
    return currentIcon || null;
  };

  // ─── 渲染图标提示 ───
  const renderIconTip = () => {
    if (!iconTip) return null;

    return (
      <div className="land-switch__icon-tip">
        <PopOver content={iconTip} theme="dark" {...iconTipProps}>
          <Icon name="info-stroke" size={size === "small" ? 14 : 16} />
        </PopOver>
      </div>
    );
  };

  // ─── 主渲染 ───
  const switchContent = (
    <div
      className={rootClassName}
      style={style}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
      role="switch"
      aria-checked={isChecked}
      aria-disabled={disabled}
      aria-readonly={readOnly}
      tabIndex={disabled ? -1 : 0}
      data-name={name}
      data-value={value}
    >
      {/* 左侧标签 */}
      {labelPosition === "left" && renderLabel()}

      {/* 开关轨道 */}
      <div className={trackClasses} style={trackStyle}>
        {/* 滑块（有内容时在左侧，选中后在右侧） */}
        {hasTrackContent && !isChecked && (
          <div className={thumbClasses} style={thumbStyle}>
            {renderThumbContent()}
          </div>
        )}

        {/* 轨道内容 */}
        {renderTrackContent()}

        {/* 滑块（无内容时使用动画，有内容且选中时在右侧） */}
        {hasTrackContent ? (
          isChecked && (
            <div className={thumbClasses} style={thumbStyle}>
              {renderThumbContent()}
            </div>
          )
        ) : (
          <motion.div
            className={thumbClasses}
            style={thumbStyle}
            animate={{ x: isChecked ? thumbOffset : 0 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 500, damping: 30 }}
          >
            {renderThumbContent()}
          </motion.div>
        )}
      </div>

      {/* 右侧标签 */}
      {labelPosition === "right" && renderLabel()}

      {/* 图标提示 */}
      {renderIconTip()}
    </div>
  );

  // ─── 如果有 tip，用 PopOver 包裹 ───
  if (tip) {
    return (
      <PopOver content={tip} theme="dark" {...tipProps}>
        {switchContent}
      </PopOver>
    );
  }

  return switchContent;
};

export default Switch;
