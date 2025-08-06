import React, { MouseEvent, useEffect } from 'react'
import './index.scss'
import PopOver from '../PopOver';
import Icon from '../Icon';
import LinkWave from './LinkWave';
import { CSSProperties } from 'styled-components';
import { LinkProps, LinkStatus } from './props';

const Link: React.FC<LinkProps> & {
  LinkWave: typeof LinkWave;
} = ({
  href,
  target = "_self",
  status = "default",
  anchor,
  disabled = false,
  underline = false,
  hoverUnderline = true,
  tip,
  tipProps,
  prefixIcon,
  suffixIcon,
  children,
  onClick,
  style,
  className = "",
}) => {
    const getColor = (): string => {
      const colorMap: Record<LinkStatus, string> = {
        default: "var(--color-blue-",
        primary: "var(--color-primary-",
        success: "var(--color-green-",
        danger: "var(--color-red-",
        warning: "var(--color-orange-",
      };
      return colorMap[status];
    };

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      onClick?.(e);
    };

    const renderIcon = (icon: boolean | React.ReactNode, position: 'prefix' | 'suffix') => {
      if (!icon) return null;

      const iconContent = typeof icon === 'boolean' ? target === '_blank' ? <Icon name="share" size={16} /> : <Icon name="link" size={16} /> : icon;
      return (
        <span className={`land-link-${position}-icon`}>
          {iconContent}
        </span>
      );
    };

    const handleAnchor = (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (anchor) {
        const anchorElement = document.getElementById(anchor);
        if (anchorElement) {
          anchorElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    return (
      <a
        href={href}
        target={target}
        className={`land-link hover-pop ${status} ${disabled ? "disabled" : ""} ${hoverUnderline ? 'hoverUnderline' : ''} ${underline ? 'underline' : ''} ${className}`}
        style={{
          '--land-link-color': `${getColor()}6)`,
          '--land-link-hover-color': `${getColor()}7)`,
          '--land-link-active-color': `${getColor()}8)`,
          '--land-link-disabled-color': `${getColor()}3)`,
          ...style
        } as CSSProperties}
        onClick={anchor ? handleAnchor : handleClick}
        aria-disabled={disabled}
      >
        {renderIcon(prefixIcon, 'prefix')}
        {children}
        {renderIcon(suffixIcon, 'suffix')}
        {tip && <PopOver content={tip} {...tipProps} />}
      </a>
    );
  };


Link.LinkWave = LinkWave;

export default Link;
export * from './props';
