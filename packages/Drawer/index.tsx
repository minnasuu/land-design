import React, { useMemo, CSSProperties, useEffect, useCallback } from "react";
import './index.scss';
import Icon from "../Icon";
import Divider from "../Divider";
import Button from "../Button";
import { motion } from "motion/react";
import { DrawerProps } from "./props";

const prefixCls = 'land-drawer';

const Drawer: React.FC<DrawerProps> = ({
  show = false,
  placement = 'right',
  mask = false,
  title,
  headerLeftComponent,
  headerRightComponent,
  headerComponent,
  useHeaderDivider = true,
  footerLeftComponent,
  footerRightComponent,
  footerComponent,
  useFooterDivider = true,
  cancelLabel = '取消',
  submitLabel = '确定',
  cancelDisabled = false,
  submitDisabled = false,
  cancelButtonProps,
  submitButtonProps,
  minWidth,
  maxWidth,
  size = 'auto',
  onClose,
  onSubmit,
  onCancel,
  enableEsc = true,
  children,
  wrapStyle,
  wrapClassName = '',
  contentStyle,
  contentClassName = '',
  bodyStyle,
  bodyClassName = '',
  maskStyle,
}) => {
  // ─── 尺寸计算 ───
  const contentWidth = useMemo(() => {
    if (placement === 'bottom') return '100%';
    
    switch (size) {
      case 'small': return '32%';
      case 'medium': return '60%';
      case 'large': return '80%';
      case 'auto': return 'fit-content';
      default: return '320px';
    }
  }, [size, placement]);

  const contentHeight = useMemo(() => {
    if (placement !== 'bottom') return '100%';
    
    switch (size) {
      case 'small': return '30%';
      case 'medium': return '60%';
      case 'large': return '90%';
      case 'auto': return 'fit-content';
      default: return '100%';
    }
  }, [size, placement]);

  // ─── 显示判断 ───
  const showCloseDivider = useMemo(() => {
    return onClose && (title || headerComponent || headerLeftComponent);
  }, [onClose, title, headerComponent, headerLeftComponent]);

  const hasHeader = useMemo(() => {
    return headerComponent || onClose || headerLeftComponent || headerRightComponent;
  }, [headerComponent, onClose, headerLeftComponent, headerRightComponent]);

  const hasFooter = useMemo(() => {
    return footerComponent || onSubmit || onCancel || footerLeftComponent || footerRightComponent;
  }, [footerComponent, onSubmit, onCancel, footerLeftComponent, footerRightComponent]);

  // ─── 类名计算 ───
  const rootClassName = useMemo(() => {
    return [
      prefixCls,
      show && `${prefixCls}--show`,
      `${prefixCls}--${placement}`,
      wrapClassName,
    ].filter(Boolean).join(' ');
  }, [show, placement, wrapClassName]);

  // ─── ESC 键处理 ───
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape' && enableEsc && show && onClose) {
      onClose();
    }
  }, [enableEsc, show, onClose]);

  useEffect(() => {
    if (show && enableEsc) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [show, enableEsc, handleKeyDown]);

  // ─── 动画配置 ───
  const motionInitial = useMemo(() => ({
    opacity: 0,
    x: placement === 'right' ? '20%' : '0%',
    y: placement === 'bottom' ? '20%' : '0%',
  }), [placement]);

  return (
    <div className={rootClassName} style={wrapStyle}>
      {mask && show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`${prefixCls}__mask`}
          style={maskStyle}
        />
      )}
      {show && (
        <motion.div
          initial={motionInitial}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className={`${prefixCls}__content ${contentClassName}`}
          style={{
            width: contentWidth,
            height: contentHeight,
            minWidth,
            maxWidth,
            ...contentStyle,
          }}
        >
          {/* Header Wrapper */}
          <div className={`${prefixCls}__header-wrapper`}>
            {onClose && (
              <div className={`${prefixCls}__close`}>
                <Icon name="close" onClick={onClose} strokeWidth={3} />
              </div>
            )}
            {showCloseDivider && (
              <Divider direction="vertical" length="36px" spacing={12} />
            )}
            {headerComponent || (
              (title || headerLeftComponent || headerRightComponent) && (
                <div className={`${prefixCls}__header`}>
                  {headerLeftComponent || (
                    <div className={`${prefixCls}__title`}>{title}</div>
                  )}
                  {headerRightComponent && (
                    <div className={`${prefixCls}__header-right`}>
                      {headerRightComponent}
                    </div>
                  )}
                </div>
              )
            )}
          </div>

          {useHeaderDivider && hasHeader && <Divider />}

          {/* Body */}
          <div
            className={`${prefixCls}__body ${bodyClassName}`}
            style={bodyStyle}
          >
            {children}
          </div>

          {/* Footer */}
          {useFooterDivider && hasFooter && <Divider />}
          {hasFooter && (
            <div className={`${prefixCls}__footer`}>
              {footerRightComponent || (
                (onCancel || onSubmit) && (
                  <div className={`${prefixCls}__footer-btns`}>
                    {onCancel && (
                      <Button
                        variant="fill"
                        disabled={cancelDisabled}
                        status="default"
                        onClick={onCancel}
                        {...cancelButtonProps}
                      >
                        {cancelLabel}
                      </Button>
                    )}
                    {onSubmit && (
                      <Button
                        variant="background"
                        disabled={submitDisabled}
                        status="primary"
                        onClick={onSubmit}
                        {...submitButtonProps}
                      >
                        {submitLabel}
                      </Button>
                    )}
                  </div>
                )
              )}
              {footerLeftComponent}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Drawer;

