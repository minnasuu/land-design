import React, { useMemo, CSSProperties, useEffect, useCallback } from "react";
import './index.scss';
import Icon from "../Icon";
import Divider from "../Divider";
import Button from "../Button";
import { motion } from "motion/react";
import { DialogProps } from "./props";

const prefixCls = 'land-dialog';

const Dialog: React.FC<DialogProps> = ({
  show,
  mask,
  title,
  headerLeftComponent,
  headerRightComponent,
  headerComponent,
  useHeaderDivider,
  footerLeftComponent,
  footerRightComponent,
  footerComponent,
  useFooterDivider,
  cancelLabel = '取消',
  submitLabel = '确定',
  submitDisabled,
  cancelButtonProps,
  submitButtonProps,
  size = 'medium',
  onClose,
  onSubmit,
  onCancel,
  enableEsc = true,
  enableEnter = false,
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
    switch (size) {
      case 'small': return '320px';
      case 'medium': return '600px';
      case 'large': return '1000px';
      default: return '600px';
    }
  }, [size]);

  // ─── 类名计算 ───
  const rootClassName = useMemo(() => {
    return [
      prefixCls,
      show && `${prefixCls}--show`,
      wrapClassName,
    ].filter(Boolean).join(' ');
  }, [show, wrapClassName]);

  // ─── 键盘事件处理 ───
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // ESC 键关闭
    if (event.key === 'Escape' && enableEsc && show && onClose) {
      onClose();
    }
    // Enter 键确定
    if (event.key === 'Enter' && enableEnter && show && onSubmit && !submitDisabled) {
      // 避免在输入框等元素中触发
      const target = event.target as HTMLElement;
      const isInputElement = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;
      if (!isInputElement) {
        onSubmit();
      }
    }
  }, [enableEsc, enableEnter, show, onClose, onSubmit, submitDisabled]);

  useEffect(() => {
    if (show && (enableEsc || enableEnter)) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [show, enableEsc, enableEnter, handleKeyDown]);

  // ─── 显示判断 ───
  const hasHeader = useMemo(() => {
    return headerComponent || onClose || headerLeftComponent || headerRightComponent || title;
  }, [headerComponent, onClose, headerLeftComponent, headerRightComponent, title]);

  const hasFooter = useMemo(() => {
    return footerComponent || onSubmit || onCancel || footerLeftComponent || footerRightComponent;
  }, [footerComponent, onSubmit, onCancel, footerLeftComponent, footerRightComponent]);

  return (
    <div
      className={rootClassName}
      style={{
        "--land-dialog-content-width": contentWidth,
        ...wrapStyle,
      } as CSSProperties}
    >
      {/* 遮罩层 */}
      {mask && show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`${prefixCls}__mask`}
          style={maskStyle}
        />
      )}

      {/* 内容区域 */}
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className={`${prefixCls}__content ${contentClassName}`}
          style={{ ...contentStyle, width: contentWidth }}
        >
          {/* 头部区域 */}
          {headerComponent || (hasHeader && (
            <div className={`${prefixCls}__header`}>
              {headerLeftComponent || (
                <div className={`${prefixCls}__title`}>{title}</div>
              )}
              {headerRightComponent || (onClose && (
                <div className={`${prefixCls}__close`}>
                  <Icon name="close" onClick={onClose} size={24} />
                </div>
              ))}
            </div>
          ))}

          {useHeaderDivider && hasHeader && <Divider />}

          {/* 主体区域 */}
          <div
            className={`${prefixCls}__body ${bodyClassName}`}
            style={bodyStyle}
          >
            {children}
          </div>

          {/* 底部区域 */}
          {useFooterDivider && hasFooter && <Divider />}
          {footerComponent || (hasFooter && (
            <div className={`${prefixCls}__footer`}>
              {footerRightComponent || ((onCancel || onSubmit) && (
                <div className={`${prefixCls}__footer-btns`}>
                  {onCancel && (
                    <Button
                      variant="fill"
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
                      status="primary"
                      onClick={onSubmit}
                      disabled={submitDisabled}
                      {...submitButtonProps}
                    >
                      {submitLabel}
                    </Button>
                  )}
                </div>
              ))}
              {footerLeftComponent}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Dialog;
