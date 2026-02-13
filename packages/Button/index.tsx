import React, { useMemo } from 'react'
import './index.scss'
import PopOver from '../PopOver';
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
  tip,
  popoverProps,
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
        tip && `${prefixCls}--has-tip`,
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
    }, [variant, status, size, isIconOnly, disabled, tip, block, bold, hoverBold, capsule, hoverAnimation, activeAnimation, className]);

    const renderContent = () => (<>
      {icon && <div className={`${prefixCls}__icon`}>{icon}</div>}
      {(!isIconOnly && (text || subText)) && (
        <div className={`${prefixCls}__content-wrapper`}>
          <span className={`${prefixCls}__text`}>{text}</span>
          {subText && <span className={`${prefixCls}__sub-text`}>{subText}</span>}
          {(hoverBold || variant === 'transparent') && <div className={`${prefixCls}__mask-content`}>
            <span className={`${prefixCls}__mask-text`}>{text}</span>
            {subText && <span className={`${prefixCls}__sub-text`}>{subText}</span>}
          </div>}
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
      <PopOver theme='dark' content={tip} {...popoverProps} >
      <button
        {...buttonProps}
      >
        {renderContent()}
      </button>
      </PopOver>
    );
  };


Button.ButtonArrow = ButtonArrow;
Button.ButtonChange = ButtonChange;

export default Button;
