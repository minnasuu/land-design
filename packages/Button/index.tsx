import React, { useMemo } from 'react'
import './index.scss'
import PopOver from '../PopOver';
import ButtonArrow from './ButtonArrow';
import ButtonChange from './ButtonChange';
import { ButtonProps } from './props';

const Button: React.FC<ButtonProps> & {
  ButtonArrow: typeof ButtonArrow,
  ButtonChange: typeof ButtonChange
} = ({
  // 基础属性
  type = "outline",
  status = "default",
  size = 'default',
  disabled = false,
  block = false,
  bold = false,
  hoverBold = false,
  hoverAnimation = false,
  activeAnimation,
  style,
  className = "",
  onClick,
  children,

  // 内容属性
  text,
  subText,
  icon,

  // 尺寸属性
  capsule,
  // 气泡属性
  tip,
  tipProps,

  // 原生事件
  nativeEvent,
}) => {
    // 判断是否为纯图标按钮
    const isIconOnly = useMemo(() => {
      return Boolean(icon && !text && !subText);
    }, [icon, text, subText]);
    // 构建按钮类名
    const buttonClassName = useMemo(() => {
      return [
        "land-button",
        type,
        status,
        isIconOnly && "iconOnly",
        tip && "hover-pop",
        block && "block",
        bold && "bold",
        hoverBold && "hover-bold",
        capsule && "capsule",
        hoverAnimation && "hover-animation",
        activeAnimation && "active-animation",
        size && `size-${size}`,
        className,
      ]
        .filter(Boolean)
        .join(" ");
    }, [type, status, isIconOnly, disabled, tip, className]);

    // 渲染按钮内容
    const renderContent = () => (<PopOver targetBody theme='dark' content={tip} {...tipProps} >
      {icon && <div className='land-button-icon'>{icon}</div>}
      {(!isIconOnly && (text || subText)) && (
        <div className='land-button-mask-content-wrapper'>
          <span>{text}</span>
          {subText && <span className="subText">{subText}</span>}
          {(hoverBold || type === 'transparent') && <div className='land-button-mask-content'>
            <span>{text}</span>
            {subText && <span className="subText">{subText}</span>}
          </div>}
        </div>
      )}
      {children}
    </PopOver>
    );

    // 按钮基础属性
    const buttonProps = {
      style,
      className: buttonClassName,
      disabled,
      onClick: (e: React.MouseEvent) => {
        if (disabled) return;
        onClick?.(e);
      },
      ...nativeEvent, // 原生事件
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
