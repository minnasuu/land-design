import React, { useMemo } from 'react';
import { BadgeProps, defaultBadgeProps } from './props';
import './index.scss';

const prefixCls = 'land-badge';

const Badge: React.FC<BadgeProps> = (props) => {
  const {
    // 外观属性
    variant = defaultBadgeProps.variant,
    status = defaultBadgeProps.status,
    placement = defaultBadgeProps.placement,
    // 内容属性
    count,
    max = defaultBadgeProps.max,
    dot = defaultBadgeProps.dot,
    content,
    showZero = defaultBadgeProps.showZero,
    children,
    // 状态属性
    hidden = defaultBadgeProps.hidden,
    offset,
    // 事件属性
    onClick,
    // 样式属性
    className,
    style,
    badgeClassName,
    badgeStyle,
    htmlProps,
  } = props;

  // 计算显示内容
  const displayContent = useMemo(() => {
    // 圆点模式不显示内容
    if (dot) return null;
    
    // 自定义内容优先
    if (content !== undefined) return content;
    
    // 数值模式
    if (count !== undefined) {
      if (count > max!) {
        return `${max}+`;
      }
      return count;
    }
    
    return null;
  }, [dot, content, count, max]);

  // 判断是否应该显示徽标
  const shouldShow = useMemo(() => {
    if (hidden) return false;
    if (dot) return true;
    if (content !== undefined) return true;
    if (count !== undefined) {
      return count > 0 || showZero;
    }
    return false;
  }, [hidden, dot, content, count, showZero]);

  // 根容器类名
  const rootClasses = useMemo(() => {
    const classes = [prefixCls];
    
    // 是否有子元素（影响布局）
    if (children) {
      classes.push(`${prefixCls}--has-children`);
    } else {
      classes.push(`${prefixCls}--standalone`);
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  }, [children, className]);

  // 徽标类名
  const badgeClasses = useMemo(() => {
    const classes = [`${prefixCls}__sup`];
    
    // 外观变体
    classes.push(`${prefixCls}__sup--${variant}`);
    
    // 语义状态
    classes.push(`${prefixCls}__sup--${status}`);
    
    // 位置
    classes.push(`${prefixCls}__sup--${placement}`);
    
    // 圆点模式
    if (dot) {
      classes.push(`${prefixCls}__sup--dot`);
    }
    
    // 多位数字（宽度调整）
    if (!dot && count !== undefined && count > 9) {
      classes.push(`${prefixCls}__sup--multiple`);
    }
    
    // 自定义内容
    if (!dot && content !== undefined) {
      classes.push(`${prefixCls}__sup--custom`);
    }
    
    if (badgeClassName) {
      classes.push(badgeClassName);
    }
    
    return classes.join(' ');
  }, [variant, status, placement, dot, count, content, badgeClassName]);

  // 徽标样式
  const badgeStyles = useMemo<React.CSSProperties>(() => {
    const styles: React.CSSProperties = { ...badgeStyle };
    
    // 偏移量
    if (offset) {
      const [x, y] = offset;
      if (placement?.includes('right')) {
        styles.right = -x;
      } else {
        styles.left = -x;
      }
      if (placement?.includes('top')) {
        styles.top = -y;
      } else {
        styles.bottom = -y;
      }
    }
    
    return styles;
  }, [offset, placement, badgeStyle]);

  // 处理点击事件
  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    onClick?.(e);
  };

  // 渲染徽标元素
  const renderBadge = () => {
    if (!shouldShow) return null;

    return (
      <span
        className={badgeClasses}
        style={badgeStyles}
        onClick={onClick ? handleClick : undefined}
      >
        {displayContent}
      </span>
    );
  };

  return (
    <span className={rootClasses} style={style} {...htmlProps}>
      {children}
      {renderBadge()}
    </span>
  );
};

export default Badge;
