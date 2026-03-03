import React, { useMemo } from 'react';
import Button from '../Button';
import { PopConfirmProps } from './props';
import './index.scss';

const prefixCls = 'land-pop-confirm';

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
  // ─── 类名计算 ───
  const rootClassName = useMemo(() => {
    return [
      prefixCls,
      show && `${prefixCls}--show`,
      hideArrow && `${prefixCls}--hide-arrow`,
      theme === 'dark' && `${prefixCls}--dark`,
      className,
    ].filter(Boolean).join(' ');
  }, [show, hideArrow, theme, className]);

  // ─── 位置样式计算 ───
  const positionStyle = useMemo(() => {
    const styles: React.CSSProperties = {};

    // 设置定位
    switch (placement) {
      case 'top':
        styles.bottom = '100%';
        styles.left = '50%';
        styles.transform = 'translate(-50%, -12px)';
        break;
      case 'bottom':
        styles.top = '100%';
        styles.left = '50%';
        styles.transform = 'translate(-50%, 12px)';
        break;
      case 'left':
        styles.right = '100%';
        styles.top = '50%';
        styles.transform = 'translate(-12px, -50%)';
        break;
      case 'right':
        styles.left = '100%';
        styles.top = '50%';
        styles.transform = 'translate(12px, -50%)';
        break;
    }

    return { ...styles, ...style };
  }, [placement, style]);

  // ─── 箭头样式计算 ───
  const arrowStyle = useMemo(() => {
    const styles: React.CSSProperties = {};

    switch (placement) {
      case 'top':
        styles.left = '50%';
        styles.top = '100%';
        styles.transform = 'translate(-50%, -50%) rotate(45deg)';
        break;
      case 'bottom':
        styles.left = '50%';
        styles.bottom = '100%';
        styles.transform = 'translate(-50%, 50%) rotate(-135deg)';
        break;
      case 'left':
        styles.left = '100%';
        styles.top = '50%';
        styles.transform = 'translate(-50%, -50%) rotate(-45deg)';
        break;
      case 'right':
        styles.left = '0';
        styles.top = '50%';
        styles.transform = 'translate(-50%, -50%) rotate(135deg)';
        break;
    }

    return styles;
  }, [placement]);

  return (
    <div className={rootClassName} style={positionStyle}>
      {/* 内容区域 */}
      <div className={`${prefixCls}__content`}>{content}</div>

      {/* 按钮区域 */}
      <div className={`${prefixCls}__btns`}>
        <Button
          variant="fill"
          size="small"
          onClick={onCancel}
          {...cancelButtonProps}
        >
          {cancelLabel}
        </Button>
        <Button
          variant="background"
          size="small"
          onClick={onSubmit}
          {...submitButtonProps}
        >
          {submitLabel}
        </Button>
      </div>

      {/* 箭头 */}
      {!hideArrow && (
        <div className={`${prefixCls}__arrow`} style={arrowStyle} />
      )}
    </div>
  );
};

export default PopConfirm;
