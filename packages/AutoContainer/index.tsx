import React, { CSSProperties, useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { AutoContainerProps } from './props';
import './index.scss';

/** 类名前缀 */
const prefixCls = 'land-auto-container';

/**
 * AutoContainer 媒体自适应容器组件
 * 用于展示媒体内容，支持自适应屏幕大小和自动调整宽高比
 */
const AutoContainer: React.FC<AutoContainerProps> = ({
  ratio = 1,
  children,
  contentClassName = '',
  contentStyle,
  style,
  className = '',
  onResize,
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [wrapRatio, setWrapRatio] = useState<number>(1);

  // 监听容器尺寸变化
  useEffect(() => {
    if (!wrapRef.current) return;

    const callback: ResizeObserverCallback = (entries) => {
      entries.forEach(entry => {
        const { width, height } = entry.contentRect;
        const newRatio = width / height;
        setWrapRatio(newRatio);
        
        // 触发回调
        onResize?.({ width, height, ratio: newRatio });
      });
    };

    const observer = new ResizeObserver(callback);
    observer.observe(wrapRef.current);

    return () => {
      observer.disconnect();
    };
  }, [onResize]);

  // 计算是否为水平布局
  const isHorizontal = useMemo(() => ratio > wrapRatio, [ratio, wrapRatio]);

  // 计算根元素类名
  const rootClassName = useMemo(() => {
    return [prefixCls, className].filter(Boolean).join(' ');
  }, [className]);

  // 计算内容元素类名
  const contentCls = useMemo(() => {
    return [`${prefixCls}__content`, contentClassName].filter(Boolean).join(' ');
  }, [contentClassName]);

  // 计算内容元素样式
  const computedContentStyle = useMemo<CSSProperties>(() => ({
    width: isHorizontal ? '100%' : 'auto',
    height: isHorizontal ? 'auto' : '100%',
    aspectRatio: `${ratio}`,
    ...contentStyle,
  }), [isHorizontal, ratio, contentStyle]);

  return (
    <div
      ref={wrapRef}
      className={rootClassName}
      style={style}
    >
      <div
        className={contentCls}
        style={computedContentStyle}
      >
        {children}
      </div>
    </div>
  );
};

export default AutoContainer;
