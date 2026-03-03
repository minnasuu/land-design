import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { ImageProps, ImageLoadingStatus, defaultImageProps } from './props';
import Skeleton from '../Skeleton';
import Icon from '../Icon';
import './index.scss';

const prefixCls = 'land-image';

// 位置映射
const positionMap: Record<string, string> = {
  'center': 'center',
  'top': 'top',
  'bottom': 'bottom',
  'left': 'left',
  'right': 'right',
  'top-left': 'top left',
  'top-right': 'top right',
  'bottom-left': 'bottom left',
  'bottom-right': 'bottom right',
};

const Image: React.FC<ImageProps> = (props) => {
  const {
    // 基础属性
    src,
    alt = defaultImageProps.alt,
    width,
    height,
    // 显示属性
    fit = defaultImageProps.fit,
    position = defaultImageProps.position,
    ratio,
    radius,
    round = defaultImageProps.round,
    // 加载属性
    lazy = defaultImageProps.lazy,
    preview,
    fallbackSrc,
    fallback,
    placeholder,
    showSkeleton = defaultImageProps.showSkeleton,
    showError = defaultImageProps.showError,
    // 事件属性
    onLoad,
    onError,
    onClick,
    // 样式属性
    className,
    style,
    imgClassName,
    imgStyle,
    htmlProps,
    imgProps,
  } = props;

  // 状态
  const [status, setStatus] = useState<ImageLoadingStatus>('idle');
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);
  const [usedFallback, setUsedFallback] = useState(false);
  const [naturalRatio, setNaturalRatio] = useState<number | undefined>();
  const imgRef = useRef<HTMLImageElement>(null);

  // src 变化时重置状态
  useEffect(() => {
    if (src) {
      setStatus('loading');
      setCurrentSrc(src);
      setUsedFallback(false);
      setNaturalRatio(undefined);
    } else {
      setStatus('idle');
      setCurrentSrc(undefined);
    }
  }, [src]);

  // 图片加载成功
  const handleLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    
    // 计算自然比例
    if (img.naturalWidth && img.naturalHeight) {
      setNaturalRatio(img.naturalWidth / img.naturalHeight);
    }
    
    setStatus('success');
    onLoad?.(e);
  }, [onLoad]);

  // 图片加载失败
  const handleError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    // 尝试使用 fallbackSrc
    if (!usedFallback && fallbackSrc) {
      setUsedFallback(true);
      setCurrentSrc(fallbackSrc);
      return;
    }
    
    setStatus('error');
    onError?.(e);
  }, [usedFallback, fallbackSrc, onError]);

  // 处理点击
  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(e);
  }, [onClick]);

  // 根容器类名
  const rootClasses = useMemo(() => {
    const classes = [prefixCls];
    
    // 状态
    classes.push(`${prefixCls}--${status}`);
    
    // 圆形
    if (round) {
      classes.push(`${prefixCls}--round`);
    }
    
    // 可点击
    if (onClick) {
      classes.push(`${prefixCls}--clickable`);
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  }, [status, round, onClick, className]);

  // 根容器样式
  const rootStyle = useMemo<React.CSSProperties>(() => {
    const styles: React.CSSProperties = { ...style };
    
    if (width !== undefined) {
      styles.width = typeof width === 'number' ? `${width}px` : width;
    }
    
    if (height !== undefined) {
      styles.height = typeof height === 'number' ? `${height}px` : height;
    }
    
    // 宽高比
    const finalRatio = ratio ?? (status === 'success' ? naturalRatio : undefined);
    if (finalRatio !== undefined) {
      styles.aspectRatio = `${finalRatio}`;
    }
    
    // 圆角
    if (round) {
      styles.borderRadius = '50%';
    } else if (radius !== undefined) {
      styles.borderRadius = typeof radius === 'number' ? `${radius}px` : radius;
    }
    
    return styles;
  }, [style, width, height, ratio, naturalRatio, status, round, radius]);

  // 图片样式
  const imgStyles = useMemo<React.CSSProperties>(() => ({
    objectFit: fit,
    objectPosition: positionMap[position!] || 'center',
    ...imgStyle,
  }), [fit, position, imgStyle]);

  // 渲染加载占位
  const renderPlaceholder = () => {
    if (placeholder) {
      return <div className={`${prefixCls}__placeholder`}>{placeholder}</div>;
    }
    
    if (showSkeleton) {
      return (
        <Skeleton
          width="100%"
          height="100%"
          radius={round ? '50%' : (radius ?? 'var(--radius-m)')}
          className={`${prefixCls}__skeleton`}
        />
      );
    }
    
    return null;
  };

  // 渲染错误状态
  const renderError = () => {
    // 自定义 fallback
    if (fallback) {
      return <div className={`${prefixCls}__fallback`}>{fallback}</div>;
    }
    
    // 默认错误状态
    if (showError) {
      return (
        <div className={`${prefixCls}__error`}>
          <Icon name="image" size={24} stroke="var(--color-text-quaternary)" />
          <span className={`${prefixCls}__error-text`}>加载失败</span>
        </div>
      );
    }
    
    return null;
  };

  // 是否显示图片
  const showImg = currentSrc && status !== 'error';

  return (
    <div
      className={rootClasses}
      style={rootStyle}
      onClick={onClick ? handleClick : undefined}
      {...htmlProps}
    >
      {/* 加载中占位 */}
      {status === 'loading' && renderPlaceholder()}

      {/* 错误状态 */}
      {status === 'error' && renderError()}

      {/* 图片元素 */}
      {showImg && (
        <img
          ref={imgRef}
          src={currentSrc}
          alt={alt}
          loading={lazy ? 'lazy' : undefined}
          className={`${prefixCls}__img ${status === 'success' ? `${prefixCls}__img--loaded` : ''} ${imgClassName || ''}`}
          style={imgStyles}
          onLoad={handleLoad}
          onError={handleError}
          {...imgProps}
        />
      )}
    </div>
  );
};

export default Image;
