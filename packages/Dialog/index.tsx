import React, { useMemo, CSSProperties, useEffect } from "react";
import './index.scss';
import Icon from "../Icon";
import Divider from "../Divider";
import Button from "../Button";
import { motion } from "motion/react";
import { DialogProps } from "./props";
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
  size = 'medium',
  onClose,
  onSubmit,
  onCancel,
  enableEsc = true,
  children,
  wrapStyle,
  wrapClassName,
  contentStyle,
  contentClassName,
  bodyStyle,
  bodyClassName,
  maskStyle,
}) => {
  const contentWidth = useMemo(() => {
    let width = '320px';
    switch (size) {
      case 'small': width = '320px'; break;
      case 'medium': width = '600px'; break;
      case 'large': width = '1000px'; break;
      default: break;
    }
    return width;
  }, [size]);

  // ESC key handling
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && enableEsc && show && onClose) {
        onClose();
      }
    };

    if (show && enableEsc) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [show, enableEsc, onClose]);

  return (
    <div
      className={`land-dialog ${show ? "show" : ""} ${wrapClassName}`}
      style={
        {
          "--land-dialog-content-width": contentWidth,
          ...wrapStyle,
        } as CSSProperties
      }
    >
      {mask && show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="land-dialog-mask"
          style={maskStyle}
        ></motion.div>
      )}
      {show && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
            type: "spring",
          }}
          className={`land-dialog-content ${contentClassName}`}
          style={
            {
              ...contentStyle,
              width: contentWidth,
            } as CSSProperties
          }
        >
          {headerComponent ||
            (title || onClose || headerLeftComponent || headerRightComponent ? (
              <div className="land-dialog-header">
                {headerLeftComponent || (
                  <div className="land-dialog-header-title">{title}</div>
                )}
                {headerRightComponent ||
                  (onClose && (
                    <div className="land-dialog-header-close">
                      <Icon name="close" onClick={onClose} size={24} />
                    </div>
                  ))}
              </div>
            ) : null)}
          {useHeaderDivider && <Divider />}

          <div
            className={`land-dialog-body ${bodyClassName}`}
            style={bodyStyle}
          >
            {children}
          </div>

          {useFooterDivider && <Divider />}
          {footerComponent || (
            <div className="land-dialog-footer">
              {footerRightComponent ||
                ((cancelLabel || submitLabel || onCancel || onSubmit) && (
                  <div className="land-dialog-footer-btn">
                    {onCancel && (
                      <Button type="fill" status="default" onClick={onCancel}>
                        {cancelLabel}
                      </Button>
                    )}
                    {onSubmit && (
                      <Button
                        type="background"
                        status="primary"
                        onClick={onSubmit}
                      >
                        {submitLabel}
                      </Button>
                    )}
                  </div>
                ))}
              {footerLeftComponent}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};
export default Dialog;

