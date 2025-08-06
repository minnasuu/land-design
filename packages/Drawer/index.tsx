import React, { useMemo, CSSProperties } from "react";
import './index.scss';
import Icon from "../Icon";
import Divider from "../Divider";
import Button from "../Button";
import { motion } from "motion/react";
import { DrawerProps } from "./props";
const Drawer: React.FC<DrawerProps> = ({
  show,
  placement = 'right',
  mask,
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
  cancelDisabled,
  submitDisabled,
  cancelButtonProps,
  submitButtonProps,
  minWidth,
  maxWidth,
  size = 'auto',
  onClose,
  onSubmit,
  onCancel,
  children,
  wrapStyle,
  wrapClassName = '',
  contentStyle,
  contentClassName = '',
  bodyStyle,
  bodyClassName = '',
  maskStyle,
}) => {
  const contentWidth = useMemo(() => {
    let width = '320px';
    if (placement === 'bottom') {
      width = '100%'
    } else {
      switch (size) {
        case 'small': width = '32%'; break;
        case 'medium': width = '60%'; break;
        case 'large': width = '80%'; break;
        case 'auto': width = 'fit-content'; break;
        default:
          break;
      }
    }
    return width;
  }, [size, placement]);

  const contentHeight = useMemo(() => {
    let height = '100%';
    if (placement === 'bottom') {
      switch (size) {
        case 'small': height = '30%'; break;
        case 'medium': height = '60%'; break;
        case 'large': height = '90%'; break;
        case 'auto': height = 'fit-content'; break;
        default:
          break;
      }
    };
    return height;
  }, [placement]);

  const showCloseDIvider = useMemo(() => (onClose && (title || headerComponent || headerLeftComponent)), [onClose, headerComponent, headerLeftComponent]);

  return (
    <div
      className={`land-drawer ${
        show ? "show" : ""
      } ${placement} ${wrapClassName}`}
      style={wrapStyle}
    >
      {mask && show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="land-drawer-mask"
          style={maskStyle}
        ></motion.div>
      )}
      {show && (
        <motion.div
          initial={{
            opacity: 0,
            x: placement === "right" ? "20%" : "0%",
            y: placement === "bottom" ? "20%" : "0%",
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            type: "spring",
          }}
          className={`land-drawer-content ${contentClassName}`}
          style={{
            width: contentWidth,
            height: contentHeight,
            minWidth: minWidth,
            maxWidth: maxWidth,
            ...contentStyle,
          }}
        >
          <div className="land-drawer-header-wrapper">
            {onClose && (
              <div className="land-drawer-header-close">
                <Icon name="close" onClick={onClose} strokeWidth={3} />
              </div>
            )}
            {showCloseDIvider && (
              <Divider direction="column" lineLength="36px" gap={12} />
            )}
            {headerComponent ||
              (title ||
              onClose ||
              headerLeftComponent ||
              headerRightComponent ? (
                <div className="land-drawer-header">
                  {headerLeftComponent || (
                    <div className="land-drawer-header-title">{title}</div>
                  )}
                  {headerRightComponent && (
                    <div className="land-drawer-header-right">
                      {headerRightComponent}
                    </div>
                  )}
                </div>
              ) : null)}
          </div>
          {useHeaderDivider &&
            (headerComponent ||
              onClose ||
              headerLeftComponent ||
              headerRightComponent) && <Divider />}

          <div
            className={`land-drawer-body ${bodyClassName}`}
            style={bodyStyle}
          >
            {children}
          </div>

          {useFooterDivider &&
            (footerComponent ||
              onSubmit ||
              onCancel ||
              footerLeftComponent ||
              footerRightComponent) && <Divider />}
          {(footerComponent ||
            onSubmit ||
            onCancel ||
            footerLeftComponent ||
            footerRightComponent) && (
            <div className="land-drawer-footer">
              {footerRightComponent ||
                ((cancelLabel || submitLabel || onCancel || onSubmit) && (
                  <div className="land-drawer-footer-btn">
                    {onCancel && (
                      <Button
                        type="fill"
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
                        type="background"
                        disabled={submitDisabled}
                        status="primary"
                        onClick={onSubmit}
                        {...submitButtonProps}
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

export default Drawer;

