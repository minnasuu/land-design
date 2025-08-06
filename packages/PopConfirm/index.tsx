import React from 'react';
import Button from '../Button';
import { PopConfirmProps } from './props';
import './index.scss';

const PopConfirm: React.FC<PopConfirmProps> = ({
  show,
  content,
  theme = "light",
  placement = "top",
  hideArrow = false,
  cancelButtonProps,
  submitButtonProps,
  cancelLabel = "取消",
  submitLabel = "确认",
  onCancel,
  onSubmit,
  style,
  className = "",
}) => {
  return (
    <div
      className={`land-pop-confirm ${show ? 'show' : ''} ${hideArrow ? 'hide-arrow' : ''} ${theme} ${className}`}
      style={{
        top:
          placement === "bottom"
            ? "100%"
            : placement === "top"
              ? "auto"
              : "50%",
        bottom: placement === "top" ? "100%" : "",
        left:
          placement === "right"
            ? "100%"
            : placement === "left"
              ? "auto"
              : "50%",
        right: placement === "left" ? "100%" : "",
        transform: `translate(${placement === "top" || placement === "bottom"
          ? "-50%"
          : placement === "left"
            ? "-12px"
            : "12px"
          }, ${placement === "top"
            ? "-12px"
            : placement === "bottom"
              ? "12px"
              : "-50%"
          })`,
        ...style,
      }}
    >
      <div className='land-popConfirm-content'>{content}</div>
      <div className='land-popConfirm-btn'>
        <Button type='fill' size='small' onClick={onCancel} {...cancelButtonProps}>{cancelLabel}</Button>
        <Button type='background' size='small' onClick={onSubmit} {...submitButtonProps}>{submitLabel}</Button>
      </div>
      {!hideArrow && <div
        className="land-popConfirm-arrow"
        style={{
          left:
            placement === "left" ? "100%" : placement === "right" ? "0" : "50%",
          top:
            placement === "top"
              ? "100%"
              : placement === "bottom"
                ? "0px"
                : "50%",
          bottom: placement === "bottom" ? "100%" : "",
          transform: `translate(${placement === "left"
            ? "-50%"
            : placement === "right"
              ? "-50%"
              : "-50%"
            }, ${placement === "top"
              ? "-50%"
              : placement === "bottom"
                ? "-50%"
                : "-50%"
            }) rotate(${placement === 'top' ? '45' : placement === 'bottom' ? '-135' : placement === 'right' ? '135' : '-45'}deg)`,
        }}
      ></div>}
    </div>
  );
};

export default PopConfirm