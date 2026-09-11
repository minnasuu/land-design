import React, { useMemo, useState, useCallback } from "react";
import Icon from "../Icon";
import Link from "../Link";
import Loading from "../Loading";
import { AlertProps, AlertType, AlertVariant, AlertDirection, AlertSize } from "./props";
import "./index.scss";

const prefixCls = 'land-alert';

// 类型映射：旧版 → 新版
const typeMap: Record<string, AlertType> = {
  'default': 'info',
  'fail': 'error',
  'warn': 'warning',
  'error': 'error',
  'success': 'success',
  'loading': 'loading',
  'info': 'info',
  'warning': 'warning',
};

// 方向映射：旧版 → 新版
const directionMap: Record<string, AlertDirection> = {
  'row': 'horizontal',
  'column': 'vertical',
  'horizontal': 'horizontal',
  'vertical': 'vertical',
};

// 图标配置
// 颜色不在此处硬编码：由 index.scss 根据类型/变体计算
// （浅色系图标取类型色，filled 实色背景取反色），组件统一使用 currentColor。
const iconConfig: Record<AlertType, { name: string }> = {
  info: { name: 'info-fill' },
  success: { name: 'check-fill' },
  warning: { name: 'attention-fill' },
  error: { name: 'error-fill' },
  loading: { name: '' },
};

const Alert: React.FC<AlertProps> = ({
  // 基础属性
  type: typeProp = 'info',
  variant = 'light',
  direction: directionProp = 'horizontal',
  size = 'medium',
  title,
  description,
  icon,
  closable = false,
  closeIcon,
  bordered = true,
  animated = true,

  // 链接属性
  link,
  onLinkClick,
  action,

  // 样式属性
  noBg,
  className,
  style,
  iconStyle,
  contentStyle,

  // 事件属性
  onClose,
  afterClose,

  // 其他
  children,
}) => {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  // ─── 属性兼容处理 ───
  const type = useMemo(() => typeMap[typeProp] || 'info', [typeProp]);
  const direction = useMemo(() => directionMap[directionProp] || 'horizontal', [directionProp]);
  const finalVariant: AlertVariant = useMemo(() => {
    if (noBg) return 'text';
    return variant;
  }, [noBg, variant]);

  // ─── 图标尺寸 ───
  const iconSize = useMemo(() => {
    const sizeMap: Record<AlertSize, Record<AlertDirection, number>> = {
      small: { horizontal: 14, vertical: 20 },
      medium: { horizontal: 16, vertical: 24 },
      large: { horizontal: 18, vertical: 28 },
    };
    return sizeMap[size][direction];
  }, [size, direction]);

  // ─── 类名计算 ───
  const rootClassName = useMemo(() => {
    return [
      prefixCls,
      `${prefixCls}--${type}`,
      `${prefixCls}--${finalVariant}`,
      `${prefixCls}--${direction}`,
      `${prefixCls}--${size}`,
      bordered && `${prefixCls}--bordered`,
      closing && `${prefixCls}--closing`,
      className,
    ].filter(Boolean).join(' ');
  }, [type, finalVariant, direction, size, bordered, closing, className]);

  // ─── 关闭处理 ───
  const handleClose = useCallback((e: React.MouseEvent) => {
    if (animated) {
      setClosing(true);
      setTimeout(() => {
        setVisible(false);
        afterClose?.();
      }, 300);
    } else {
      setVisible(false);
      afterClose?.();
    }
    onClose?.(e);
  }, [animated, onClose, afterClose]);

  // ─── 渲染图标 ───
  const renderIcon = () => {
    if (icon === false) return null;

    if (icon) {
      return <span className={`${prefixCls}__icon`} style={iconStyle}>{icon}</span>;
    }

    const config = iconConfig[type];

    if (type === 'loading') {
      return (
        <span className={`${prefixCls}__icon`} style={iconStyle}>
          <Loading size={iconSize} color="currentColor" />
        </span>
      );
    }

    return (
      <span className={`${prefixCls}__icon`} style={iconStyle}>
        <Icon name={config.name} size={iconSize} color="currentColor" />
      </span>
    );
  };

  // ─── 渲染内容 ───
  const renderContent = () => {
    return (
      <div className={`${prefixCls}__content`} style={contentStyle}>
        {title && (
          <div className={`${prefixCls}__title`}>
            {title}
            {link && (
              <>
                ，<Link onClick={onLinkClick}>{link}</Link>
              </>
            )}
          </div>
        )}
        {description && (
          <div className={`${prefixCls}__description`}>{description}</div>
        )}
        {children && !title && !description && (
          <div className={`${prefixCls}__title`}>
            {children}
            {link && (
              <>
                ，<Link onClick={onLinkClick}>{link}</Link>
              </>
            )}
          </div>
        )}
      </div>
    );
  };

  // ─── 渲染操作区 ───
  const renderAction = () => {
    if (!action && !closable) return null;

    return (
      <div className={`${prefixCls}__actions`}>
        {action}
        {closable && (
          <span className={`${prefixCls}__close`} onClick={handleClose}>
            {closeIcon || <Icon name="close" size={14} />}
          </span>
        )}
      </div>
    );
  };

  if (!visible) return null;

  return (
    <div className={rootClassName} style={style} role="alert">
      {renderIcon()}
      {renderContent()}
      {renderAction()}
    </div>
  );
};

export default Alert;
