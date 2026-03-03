import React, { useMemo } from 'react';
import { StateProps, StateType, defaultStateProps } from './props';
import './index.scss';

const prefixCls = 'land-state';

// ==================== 预设图标 ====================

const EmptyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M43 30.5L36.5788 19.4923C36.2204 18.8778 35.5626 18.5 34.8513 18.5H13.1487C12.4374 18.5 11.7796 18.8778 11.4212 19.4923L5 30.5M43 30.5V40.5C43 41.6046 42.1046 42.5 41 42.5H7C5.89543 42.5 5 41.6046 5 40.5V30.5M43 30.5H5"
      stroke="currentColor"
      strokeWidth="3"
    />
    <path d="M24 12V6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M30.9995 12.7426L35.2422 8.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M17.2426 12.7426L13 8.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const ErrorIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" />
    <path d="M24 14V28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <circle cx="24" cy="34" r="2" fill="currentColor" />
  </svg>
);

const OfflineIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M44 18.9653C37.2253 12.545 28.1189 10.0059 19.5 11.3481"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M38 25.799C35.2866 23.0855 31.9815 21.3243 28.5 20.5154"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 25.799C11.3276 24.4714 12.7969 23.3717 14.3591 22.5"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 32.3138C17.4388 30.875 19.1686 29.9048 21 29.4031"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="24" cy="37.5" r="2.5" fill="currentColor" />
    <path
      d="M40 40L8 8"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 18.9652C4.5888 18.4072 5.19522 17.8785 5.81741 17.3792C6.36642 16.9385 6.92771 16.5207 7.49999 16.1257"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ForbiddenIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" />
    <path d="M10 38L38 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const NotFoundIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z"
      stroke="currentColor"
      strokeWidth="3"
    />
    <path d="M4 16H44" stroke="currentColor" strokeWidth="3" />
    <circle cx="9" cy="12" r="1.5" fill="currentColor" />
    <circle cx="14" cy="12" r="1.5" fill="currentColor" />
    <circle cx="19" cy="12" r="1.5" fill="currentColor" />
    <path d="M17 28L24 35L31 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24 24V35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const SuccessIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" />
    <path d="M16 24L22 30L34 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WarningIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M24 6L44 42H4L24 6Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path d="M24 20V30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <circle cx="24" cy="36" r="2" fill="currentColor" />
  </svg>
);

// 图标映射
const iconMap: Record<StateType, React.FC<{ className?: string }>> = {
  empty: EmptyIcon,
  error: ErrorIcon,
  offline: OfflineIcon,
  forbidden: ForbiddenIcon,
  notFound: NotFoundIcon,
  success: SuccessIcon,
  warning: WarningIcon,
};

// ==================== 主组件 ====================

const State: React.FC<StateProps> = (props) => {
  const {
    // 外观属性
    type = defaultStateProps.type,
    size = defaultStateProps.size,
    // 内容属性
    icon,
    image,
    imageWidth,
    imageHeight,
    title,
    description,
    actions,
    children,
    // 事件属性
    onClick,
    // 样式属性
    className,
    style,
    iconClassName,
    iconStyle,
    titleClassName,
    titleStyle,
    descriptionClassName,
    descriptionStyle,
    htmlProps,
  } = props;

  // 根容器类名
  const rootClasses = useMemo(() => {
    const classes = [prefixCls];
    
    // 尺寸
    classes.push(`${prefixCls}--${size}`);
    
    // 可点击
    if (onClick) {
      classes.push(`${prefixCls}--clickable`);
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  }, [size, onClick, className]);

  // 图标区域类名
  const iconClasses = useMemo(() => {
    const classes = [`${prefixCls}__icon`];
    
    // 类型对应的颜色
    if (type) {
      classes.push(`${prefixCls}__icon--${type}`);
    }
    
    if (iconClassName) {
      classes.push(iconClassName);
    }
    
    return classes.join(' ');
  }, [type, iconClassName]);

  // 渲染图标
  const renderIcon = () => {
    // 自定义图标优先
    if (icon) {
      return <div className={iconClasses} style={iconStyle}>{icon}</div>;
    }
    
    // 图片
    if (image) {
      const imgStyle: React.CSSProperties = {
        ...iconStyle,
        width: imageWidth,
        height: imageHeight,
      };
      return (
        <div className={iconClasses} style={imgStyle}>
          <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
      );
    }
    
    // 预设图标
    if (type) {
      const IconComponent = iconMap[type];
      return (
        <div className={iconClasses} style={iconStyle}>
          <IconComponent className={`${prefixCls}__icon-svg`} />
        </div>
      );
    }
    
    return null;
  };

  // 处理点击
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(e);
  };

  return (
    <div
      className={rootClasses}
      style={style}
      onClick={onClick ? handleClick : undefined}
      {...htmlProps}
    >
      {/* 图标区域 */}
      {renderIcon()}

      {/* 标题 */}
      {title && (
        <div
          className={`${prefixCls}__title ${titleClassName || ''}`}
          style={titleStyle}
        >
          {title}
        </div>
      )}

      {/* 描述 */}
      {description && (
        <div
          className={`${prefixCls}__description ${descriptionClassName || ''}`}
          style={descriptionStyle}
        >
          {description}
        </div>
      )}

      {/* 操作区域 */}
      {actions && (
        <div className={`${prefixCls}__actions`}>
          {actions}
        </div>
      )}

      {/* 子元素 */}
      {children && (
        <div className={`${prefixCls}__extra`}>
          {children}
        </div>
      )}
    </div>
  );
};

export default State;
