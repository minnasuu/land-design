import React, { useMemo } from "react";
import Icon from "../Icon";
import Loading from "../Loading";
import { MessageProps, MessageType, MessageVariant } from "./props";
import './index.scss';

const prefixCls = 'land-message';

// 类型映射：旧版 → 新版
const typeMap: Record<string, MessageType> = {
  'info': 'info',
  'success': 'success',
  'fail': 'error',
  'warn': 'warning',
  'warning': 'warning',
  'error': 'error',
  'loading': 'loading',
};

// 图标配置
const iconConfig: Record<MessageType, { name: string; color: string }> = {
  info: { name: 'info-fill', color: 'var(--color-primary-6)' },
  success: { name: 'check-fill', color: 'var(--color-success-6)' },
  warning: { name: 'attention-fill', color: 'var(--color-warning-6)' },
  error: { name: 'error-fill', color: 'var(--color-danger-6)' },
  loading: { name: '', color: 'var(--color-primary-6)' },
};

const Message: React.FC<MessageProps> = ({
  type: typeProp = 'info',
  content,
  text,
  variant = 'light',
  simple = false,
  icon,
  closable = false,
  closeIcon,
  style,
  className = '',
}) => {
  // ─── 属性兼容处理 ───
  const type = useMemo(() => typeMap[typeProp] || 'info', [typeProp]);
  const displayContent = content ?? text;

  // ─── 类名计算 ───
  const rootClassName = useMemo(() => {
    return [
      prefixCls,
      `${prefixCls}--${type}`,
      `${prefixCls}--${variant}`,
      simple && `${prefixCls}--simple`,
      className,
    ].filter(Boolean).join(' ');
  }, [type, variant, simple, className]);

  // ─── 渲染图标 ───
  const renderIcon = () => {
    if (simple || icon === false) return null;

    if (icon) {
      return <span className={`${prefixCls}__icon`}>{icon}</span>;
    }

    const config = iconConfig[type];
    
    if (type === 'loading') {
      return (
        <span className={`${prefixCls}__icon`}>
          <Loading size={18} color={config.color} />
        </span>
      );
    }

    return (
      <span className={`${prefixCls}__icon`}>
        <Icon name={config.name} size={18} color={config.color} />
      </span>
    );
  };

  return (
    <div className={rootClassName} style={style}>
      {renderIcon()}
      <span className={`${prefixCls}__content`}>{displayContent}</span>
      {closable && (
        <span className={`${prefixCls}__close`}>
          {closeIcon || <Icon name="close" size={14} />}
        </span>
      )}
    </div>
  );
};

export default Message;
export * from './props';
