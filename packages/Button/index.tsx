import React, { useMemo } from 'react'
import './index.scss'
import ButtonArrow from './ButtonArrow';
import ButtonChange from './ButtonChange';
import { ButtonProps } from './props';

const prefixCls = 'land-button';

const Button: React.FC<ButtonProps> & {
  ButtonArrow: typeof ButtonArrow,
  ButtonChange: typeof ButtonChange
} = ({
  variant = 'outline',
  status = 'default',
  size = 'default',
  disabled = false,
  block = false,
  bold = false,
  hoverBold = false,
  hoverAnimation = false,
  activeAnimation,
  style,
  className = '',
  onClick,
  children,
  text,
  subText,
  icon,
  capsule,
  htmlProps,
}) => {
    const isIconOnly = useMemo(() => {
      return Boolean(icon && !text && !subText);
    }, [icon, text, subText]);

    const buttonClassName = useMemo(() => {
      return [
        prefixCls,
        `${prefixCls}--${variant}`,
        `${prefixCls}--${status}`,
        `${prefixCls}--${size}`,
        isIconOnly && `${prefixCls}--icon-only`,
        block && `${prefixCls}--block`,
        bold && `${prefixCls}--bold`,
        hoverBold && `${prefixCls}--hover-bold`,
        capsule && `${prefixCls}--capsule`,
        hoverAnimation && `${prefixCls}--hover-animation`,
        activeAnimation && `${prefixCls}--active-animation`,
        className,
      ]
        .filter(Boolean)
        .join(' ');
    }, [variant, status, size, isIconOnly, disabled, block, bold, hoverBold, capsule, hoverAnimation, activeAnimation, className]);

    const renderContent = () => (<>
      {icon && <div className={`${prefixCls}__icon`}>{icon}</div>}
      {(!isIconOnly && (text || subText)) && (
        <div className={`${prefixCls}__content-wrapper`}>
          {hoverBold || variant === 'transparent' ? (
            <>
              {/* 隐形加粗副本：仅占位预留加粗宽度，避免 hover 加粗时布局抖动 */}
              <span className={`${prefixCls}__text-ghost`} aria-hidden="true">
                {text}
                {subText && <span className={`${prefixCls}__sub-text`}>{subText}</span>}
              </span>
              {/* 可见文案：默认常规字重，hover 时加粗（直接过渡字重，无重影） */}
              <span className={`${prefixCls}__text-visible`}>
                {text}
                {subText && <span className={`${prefixCls}__sub-text`}>{subText}</span>}
              </span>
            </>
          ) : (
            <>
              <span className={`${prefixCls}__text`}>{text}</span>
              {subText && <span className={`${prefixCls}__sub-text`}>{subText}</span>}
            </>
          )}
        </div>
      )}
      {children}
    </>
    );

    const buttonProps = {
      style,
      className: buttonClassName,
      disabled,
      onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) return;
        onClick?.(e);
      },
      ...htmlProps,
    };

    return (
      <button
        {...buttonProps}
      >
        {renderContent()}
      </button>
    );
  };


Button.ButtonArrow = ButtonArrow;
Button.ButtonChange = ButtonChange;

export default Button;
