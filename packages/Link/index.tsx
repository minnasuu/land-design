import React, { MouseEvent, useMemo } from 'react';
import './index.scss';
import PopOver from '../PopOver';
import Icon from '../Icon';
import LinkWave from './LinkWave';
import { LinkProps, LinkStatus } from './props';

const prefixCls = 'land-link';

/** status → CSS 变量前缀映射 */
const statusColorMap: Record<LinkStatus, string> = {
  default: 'var(--color-blue-',
  primary: 'var(--color-primary-',
  success: 'var(--color-green-',
  danger: 'var(--color-red-',
  warning: 'var(--color-orange-',
};

const Link: React.FC<LinkProps> & {
  LinkWave: typeof LinkWave;
} = ({
  href,
  target = '_self',
  status = 'default',
  size = 'default',
  anchor,
  disabled = false,
  underline = 'hover',
  tip,
  tipProps,
  prefixIcon,
  suffixIcon,
  children,
  onClick,
  style,
  className = '',
}) => {
  const colorBase = statusColorMap[status];

  const linkClassName = useMemo(
    () =>
      [
        prefixCls,
        `${prefixCls}--${status}`,
        `${prefixCls}--size-${size}`,
        underline !== 'none' && `${prefixCls}--underline-${underline}`,
        disabled && `${prefixCls}--disabled`,
        tip && 'hover-pop',
        className,
      ]
        .filter(Boolean)
        .join(' '),
    [status, size, underline, disabled, tip, className],
  );

  const cssVars = useMemo(
    () =>
      ({
        '--land-link-color': `${colorBase}6)`,
        '--land-link-hover-color': `${colorBase}7)`,
        '--land-link-active-color': `${colorBase}8)`,
        '--land-link-disabled-color': `${colorBase}3)`,
        ...style,
      }) as React.CSSProperties,
    [colorBase, style],
  );

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (anchor) {
      e.preventDefault();
      const el = document.getElementById(anchor);
      el?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    onClick?.(e);
  };

  const renderIcon = (icon: boolean | React.ReactNode, position: 'prefix' | 'suffix') => {
    if (!icon) return null;
    const iconContent =
      typeof icon === 'boolean'
        ? target === '_blank'
          ? <Icon name="share" size={16} />
          : <Icon name="link" size={16} />
        : icon;
    return <span className={`${prefixCls}__icon ${prefixCls}__icon--${position}`}>{iconContent}</span>;
  };

  const linkNode = (
    <a
      href={disabled ? undefined : href}
      target={target}
      className={linkClassName}
      style={cssVars}
      onClick={handleClick}
      aria-disabled={disabled}
    >
      {renderIcon(prefixIcon, 'prefix')}
      {children}
      {renderIcon(suffixIcon, 'suffix')}
    </a>
  );

  // 禁用时用包裹层承载 not-allowed 鼠标样式和 PopOver hover 事件
  // 内部 <a> 的 pointer-events: none 阻止实际点击但不影响外层交互
  const wrappedNode = disabled ? (
    <span className={`${prefixCls}-disabled-wrapper`}>{linkNode}</span>
  ) : (
    linkNode
  );

  return (
    <PopOver content={tip} {...tipProps}>
      {wrappedNode}
    </PopOver>
  );
};

Link.LinkWave = LinkWave;

export default Link;
export * from './props';
