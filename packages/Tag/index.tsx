import React, { useState, useCallback, useMemo } from "react";
import Icon from "../Icon";
import './index.scss';
import {
  TagProps,
  CheckableTagProps,
  TagGroupProps,
  LegacyTagProps,
  TagColor,
} from "./props";

// ==================== 工具函数 ====================

/**
 * 判断是否为预设颜色
 */
const isPresetColor = (color?: TagColor): boolean => {
  const presetColors = ['default', 'primary', 'success', 'warning', 'error', 'info'];
  return typeof color === 'string' && presetColors.includes(color);
};

/**
 * 转换旧版属性
 */
const convertLegacyProps = (props: TagProps & LegacyTagProps): TagProps => {
  const { canDelete, onDelete, theme, background, ...rest } = props;

  return {
    ...rest,
    closable: canDelete ?? rest.closable,
    onClose: onDelete ?? rest.onClose,
    backgroundColor: background ?? rest.backgroundColor,
    // theme 转换: gray -> default, white -> default with light variant
    variant: theme === 'white' ? 'filled' : rest.variant,
    color: theme ? 'default' : rest.color,
  };
};

// ==================== Tag 主组件 ====================

const Tag: React.FC<TagProps & LegacyTagProps> & {
  CheckableTag: typeof CheckableTag;
  Group: typeof TagGroup;
} = (props) => {
  const normalizedProps = convertLegacyProps(props);

  const {
    // 基础属性
    children,
    icon,
    suffixIcon,
    visible: visibleProp,
    defaultVisible = true,

    // 样式属性
    size = 'medium',
    variant = 'light',
    color = 'default',
    shape = 'rounded',
    bold = false,
    backgroundColor,
    textColor,
    borderColor,
    border,
    style,
    className = '',

    // 交互属性
    closable = false,
    clickable = false,
    checkable = false,
    checked: checkedProp,
    defaultChecked = false,
    disabled = false,
    closeIcon,

    // 事件属性
    onClick,
    onClose,
    onVisibleChange,
    onCheck,
  } = normalizedProps;

  // ─── State ───
  const [internalVisible, setInternalVisible] = useState(defaultVisible);
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  // 受控/非受控
  const visible = visibleProp ?? internalVisible;
  const checked = checkedProp ?? internalChecked;

  // ─── 事件处理 ───
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLSpanElement>) => {
      if (disabled) return;

      if (checkable) {
        const newChecked = !checked;
        if (checkedProp === undefined) {
          setInternalChecked(newChecked);
        }
        onCheck?.(newChecked);
      }

      onClick?.(e);
    },
    [disabled, checkable, checked, checkedProp, onCheck, onClick]
  );

  const handleClose = useCallback(
    (e: React.MouseEvent<HTMLSpanElement>) => {
      e.stopPropagation();
      if (disabled) return;

      if (visibleProp === undefined) {
        setInternalVisible(false);
      }
      onVisibleChange?.(false);
      onClose?.(e);
    },
    [disabled, visibleProp, onVisibleChange, onClose]
  );

  // ─── 自定义样式 ───
  const customStyle = useMemo(() => {
    const styles: React.CSSProperties = { ...style };

    // 自定义颜色 (非预设)
    if (color && !isPresetColor(color)) {
      styles['--tag-custom-color'] = color;
    }

    if (backgroundColor) {
      styles['--tag-bg-color'] = backgroundColor;
    }
    if (textColor) {
      styles['--tag-text-color'] = textColor;
    }
    if (borderColor) {
      styles['--tag-border-color'] = borderColor;
    }
    if (border) {
      styles.border = border;
    }

    return styles;
  }, [style, color, backgroundColor, textColor, borderColor, border]);

  // ─── 类名计算 ───
  const tagClassName = useMemo(() => {
    return [
      'land-tag',
      `land-tag--${size}`,
      `land-tag--${variant}`,
      `land-tag--${shape}`,
      isPresetColor(color) && `land-tag--${color}`,
      !isPresetColor(color) && color && 'land-tag--custom-color',
      bold && 'land-tag--bold',
      clickable && 'land-tag--clickable',
      checkable && 'land-tag--checkable',
      checked && 'land-tag--checked',
      disabled && 'land-tag--disabled',
      closable && 'land-tag--closable',
      className,
    ]
      .filter(Boolean)
      .join(' ');
  }, [size, variant, shape, color, bold, clickable, checkable, checked, disabled, closable, className]);

  // ─── 不可见时不渲染 ───
  if (!visible) {
    return null;
  }

  return (
    <span
      className={tagClassName}
      style={customStyle as React.CSSProperties}
      onClick={handleClick}
      role={checkable ? 'checkbox' : clickable ? 'button' : undefined}
      aria-checked={checkable ? checked : undefined}
      aria-disabled={disabled}
    >
      {/* 前置图标 */}
      {icon && <span className="land-tag__icon">{icon}</span>}

      {/* 内容 */}
      {children && <span className="land-tag__content">{children}</span>}

      {/* 后置图标 */}
      {suffixIcon && <span className="land-tag__suffix-icon">{suffixIcon}</span>}

      {/* 关闭按钮 */}
      {closable && (
        <span
          className="land-tag__close"
          onClick={handleClose}
          role="button"
          aria-label="关闭"
        >
          {closeIcon || <Icon name="close" size={12} />}
        </span>
      )}
    </span>
  );
};

// ==================== CheckableTag 子组件 ====================

const CheckableTag: React.FC<CheckableTagProps> = ({
  checked: checkedProp,
  defaultChecked = false,
  onChange,
  onClick,
  ...rest
}) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const checked = checkedProp ?? internalChecked;

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLSpanElement>) => {
      const newChecked = !checked;
      if (checkedProp === undefined) {
        setInternalChecked(newChecked);
      }
      onChange?.(newChecked);
      onClick?.(e);
    },
    [checked, checkedProp, onChange, onClick]
  );

  return (
    <Tag
      {...rest}
      checkable
      checked={checked}
      onClick={handleClick}
    />
  );
};

// ==================== TagGroup 子组件 ====================

const TagGroup: React.FC<TagGroupProps> = ({
  children,
  gap = 8,
  wrap = true,
  align = 'flex-start',
  maxCount,
  maxCountRender,
  style,
  className = '',
}) => {
  const childArray = React.Children.toArray(children);
  const displayChildren = maxCount ? childArray.slice(0, maxCount) : childArray;
  const overflowCount = maxCount ? Math.max(0, childArray.length - maxCount) : 0;

  const groupStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: wrap ? 'wrap' : 'nowrap',
    alignItems: align,
    gap: typeof gap === 'number' ? `${gap}px` : gap,
    ...style,
  };

  return (
    <div className={`land-tag-group ${className}`} style={groupStyle}>
      {displayChildren}
      {overflowCount > 0 && (
        maxCountRender ? (
          maxCountRender(overflowCount)
        ) : (
          <Tag color="default" variant="light">+{overflowCount}</Tag>
        )
      )}
    </div>
  );
};

// ─── 挂载子组件 ───
Tag.CheckableTag = CheckableTag;
Tag.Group = TagGroup;

export default Tag;
