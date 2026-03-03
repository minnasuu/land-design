import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { CollapseProps, defaultCollapseProps } from './props';
import Icon from '../Icon';
import './index.scss';

const prefixCls = 'land-collapse';

const Collapse: React.FC<CollapseProps> = (props) => {
  const {
    // 外观属性
    variant = defaultCollapseProps.variant,
    arrowPosition = defaultCollapseProps.arrowPosition,
    // 内容属性
    title,
    content,
    children,
    extra,
    arrow,
    // 状态属性
    expanded: controlledExpanded,
    defaultExpanded = defaultCollapseProps.defaultExpanded,
    disabled = defaultCollapseProps.disabled,
    hideArrow = defaultCollapseProps.hideArrow,
    destroyOnCollapse = defaultCollapseProps.destroyOnCollapse,
    // 动画属性
    animated = defaultCollapseProps.animated,
    duration = defaultCollapseProps.duration,
    // 事件属性
    onChange,
    onHeaderClick,
    onKeyDown,
    // 样式属性
    className,
    style,
    headerClassName,
    headerStyle,
    contentClassName,
    contentStyle,
    htmlProps,
  } = props;

  // 受控/非受控模式
  const isControlled = controlledExpanded !== undefined;
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const isExpanded = isControlled ? controlledExpanded : internalExpanded;

  // 动画相关 refs
  const contentRef = useRef<HTMLDivElement>(null);
  const contentInnerRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | 'auto'>(isExpanded ? 'auto' : 0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(isExpanded || !destroyOnCollapse);

  // 计算内容实际高度
  const getContentHeight = useCallback(() => {
    if (contentInnerRef.current) {
      return contentInnerRef.current.scrollHeight;
    }
    return 0;
  }, []);

  // 处理展开/收起动画
  useEffect(() => {
    if (!animated) {
      setContentHeight(isExpanded ? 'auto' : 0);
      setShouldRender(isExpanded || !destroyOnCollapse);
      return;
    }

    if (isExpanded) {
      // 展开：先渲染内容，然后动画
      setShouldRender(true);
      setIsAnimating(true);
      
      // 等待 DOM 渲染后获取高度
      requestAnimationFrame(() => {
        const height = getContentHeight();
        setContentHeight(height);
        
        // 动画结束后设置为 auto（允许内容自适应）
        setTimeout(() => {
          setContentHeight('auto');
          setIsAnimating(false);
        }, duration);
      });
    } else {
      // 收起：先设置具体高度，然后动画到 0
      setIsAnimating(true);
      const height = getContentHeight();
      setContentHeight(height);
      
      // 强制重排后设置为 0
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setContentHeight(0);
          
          // 动画结束后销毁内容（如果需要）
          setTimeout(() => {
            setIsAnimating(false);
            if (destroyOnCollapse) {
              setShouldRender(false);
            }
          }, duration);
        });
      });
    }
  }, [isExpanded, animated, duration, destroyOnCollapse, getContentHeight]);

  // 切换展开状态
  const handleToggle = useCallback(() => {
    if (disabled || isAnimating) return;
    
    const newExpanded = !isExpanded;
    
    if (!isControlled) {
      setInternalExpanded(newExpanded);
    }
    
    onChange?.(newExpanded);
  }, [disabled, isAnimating, isExpanded, isControlled, onChange]);

  // 处理标题点击
  const handleHeaderClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    onHeaderClick?.(e);
    handleToggle();
  }, [onHeaderClick, handleToggle]);

  // 处理键盘事件
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(e);
    
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  }, [onKeyDown, handleToggle]);

  // 根容器类名
  const rootClasses = useMemo(() => {
    const classes = [prefixCls];
    
    // 外观变体
    classes.push(`${prefixCls}--${variant}`);
    
    // 展开状态
    if (isExpanded) {
      classes.push(`${prefixCls}--expanded`);
    }
    
    // 禁用状态
    if (disabled) {
      classes.push(`${prefixCls}--disabled`);
    }
    
    // 动画状态
    if (isAnimating) {
      classes.push(`${prefixCls}--animating`);
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  }, [variant, isExpanded, disabled, isAnimating, className]);

  // 标题区域类名
  const headerClasses = useMemo(() => {
    const classes = [`${prefixCls}__header`];
    
    // 箭头位置
    classes.push(`${prefixCls}__header--arrow-${arrowPosition}`);
    
    if (headerClassName) {
      classes.push(headerClassName);
    }
    
    return classes.join(' ');
  }, [arrowPosition, headerClassName]);

  // 内容区域类名
  const contentClasses = useMemo(() => {
    const classes = [`${prefixCls}__content`];
    
    if (contentClassName) {
      classes.push(contentClassName);
    }
    
    return classes.join(' ');
  }, [contentClassName]);

  // 内容区域样式
  const contentStyles = useMemo<React.CSSProperties>(() => ({
    ...contentStyle,
    height: contentHeight === 'auto' ? 'auto' : `${contentHeight}px`,
    transitionDuration: animated ? `${duration}ms` : '0ms',
  }), [contentStyle, contentHeight, animated, duration]);

  // 渲染箭头图标
  const renderArrow = () => {
    if (hideArrow) return null;

    // 自定义箭头
    if (arrow !== undefined) {
      if (typeof arrow === 'function') {
        return <span className={`${prefixCls}__arrow`}>{arrow(isExpanded)}</span>;
      }
      return <span className={`${prefixCls}__arrow`}>{arrow}</span>;
    }

    // 默认箭头
    return (
      <span className={`${prefixCls}__arrow`}>
        <Icon
          name="arrow"
          strokeWidth={4}
          size={16}
          stroke="var(--color-text-tertiary)"
        />
      </span>
    );
  };

  // 渲染内容
  const renderContent = () => {
    const actualContent = children ?? content;
    return actualContent;
  };

  return (
    <div className={rootClasses} style={style} {...htmlProps}>
      {/* 标题区域 */}
      <div
        className={headerClasses}
        style={headerStyle}
        onClick={handleHeaderClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-expanded={isExpanded}
        aria-disabled={disabled}
      >
        {arrowPosition === 'start' && renderArrow()}
        <div className={`${prefixCls}__title`}>{title}</div>
        {extra && <div className={`${prefixCls}__extra`}>{extra}</div>}
        {arrowPosition === 'end' && renderArrow()}
      </div>

      {/* 内容区域 */}
      <div
        ref={contentRef}
        className={contentClasses}
        style={contentStyles}
        aria-hidden={!isExpanded}
      >
        <div ref={contentInnerRef} className={`${prefixCls}__content-inner`}>
          {shouldRender && renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
