import React, { useRef, useState, useEffect } from "react";
import './index.scss';
import Alert from "../Alert";
import Skeleton from "../Skeleton";
import { ImageProps } from "./props";

const Image: React.FC<ImageProps> = ({
  url,
  alt = "",
  ratio,
  className,
  imgClassName,
  imgStyle,
  style,
  fallback,
  fallbackUrl,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loadingState, setLoadingState] = useState<'idle' | 'loading' | 'success' | 'error'>('loading');
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(url);
  const [imgRatio, setImgRatio] = useState<string>("auto");
  const [hasTriedFallback, setHasTriedFallback] = useState<boolean>(false);
  const [fallbackLoadingState, setFallbackLoadingState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // 当url变化时重置状态
  useEffect(() => {
    setLoadingState('loading');
    setCurrentSrc(url);
    setHasTriedFallback(false);
    setFallbackLoadingState('idle');
  }, [url]);

  // 处理图片加载事件
  const handleImageLoad = () => {
    if (hasTriedFallback) {
      setFallbackLoadingState('success');
    } else {
      setLoadingState('success');
    }

    // 延迟删除loading class, 避免页面闪烁跳动
    setTimeout(() => {
      if (hasTriedFallback) {
        setFallbackLoadingState('success');
      } else {
        setLoadingState('success');
      }
    }, 150);

    // 设置图片比例
    if (imgRef.current) {
      setImgRatio(`${imgRef.current.width / imgRef.current.height}`);
    }
  };

  // 处理图片加载错误
  const handleImageError = () => {
    if (hasTriedFallback) {
      setFallbackLoadingState('error');
    } else {
      setLoadingState('error');
      // 如果有fallbackUrl，尝试加载兜底图
      if (fallbackUrl && !hasTriedFallback) {
        setHasTriedFallback(true);
        setFallbackLoadingState('loading');
        setCurrentSrc(fallbackUrl);
      } else if (fallback && typeof fallback === 'string' && !hasTriedFallback) {
        // 如果有fallback字符串URL，尝试加载
        setHasTriedFallback(true);
        setFallbackLoadingState('loading');
        setCurrentSrc(fallback);
      }
    }
  };

  useEffect(() => {
    const image = imgRef.current;

    if (!image) {
      setLoadingState('idle');
      // 延迟 300ms 删除 loading class, 避免页面闪烁跳动
      setTimeout(() => {
        setLoadingState('idle');
      }, 300);
      return;
    }

    // 如果图片已经加载完成
    if (image.complete) {
      if (hasTriedFallback) {
        setFallbackLoadingState('success');
      } else {
        setLoadingState('success');
      }
      // 延迟删除loading class, 避免页面闪烁跳动
      setTimeout(() => {
        if (hasTriedFallback) {
          setFallbackLoadingState('success');
        } else {
          setLoadingState('success');
        }
      }, 150);
      setImgRatio(`${imgRef.current.width / imgRef.current.height}`);
    }

    // 添加事件监听器
    image.addEventListener("load", handleImageLoad);
    image.addEventListener("error", handleImageError);

    return () => {
      image?.removeEventListener("load", handleImageLoad);
      image?.removeEventListener("error", handleImageError);
    };
  }, [currentSrc, hasTriedFallback]);

  // 计算最终的宽高比
  const finalRatio = ratio || (loadingState === 'success' || fallbackLoadingState === 'success' ? imgRatio : '1');

  // 渲染兜底内容
  const renderFallback = () => {
    // 如果传了fallback且主图和兜底图都加载失败，且fallback不是字符串URL
    if (fallback && typeof fallback !== 'string' && loadingState === 'error' && (fallbackLoadingState === 'error' || !fallbackUrl)) {
      // 如果fallback是React节点，直接渲染
      return fallback;
    }

    // 默认错误状态 - 主图和兜底图都加载失败，且没有有效的fallback
    if (loadingState === 'error' && (fallbackLoadingState === 'error' || !fallbackUrl) && (!fallback || typeof fallback === 'string')) {
      return <Alert type="error" title="加载失败" direction="column" className="land-image-alert" noBg />;
    }

    return null;
  };

  // 判断是否显示加载状态
  const showLoading = (loadingState === 'loading') || (hasTriedFallback && fallbackLoadingState === 'loading');

  // 判断是否显示图片
  const showImage = currentSrc && (loadingState === 'success' || fallbackLoadingState === 'success' || showLoading);

  return (
    <div
      className={`land-image ${showLoading ? 'loading' : (loadingState === 'success' || fallbackLoadingState === 'success') ? 'success' : 'error'} ${className ?? ''}`}
      style={{
        aspectRatio: finalRatio,
        ...style,
      }}
    >
      {/* 加载中状态 */}
      {showLoading && (
        <Skeleton
          width="100%"
          height="100%"
          radius="var(--radius-m)"
          className="land-image-skeleton"
        />
      )}

      {/* 兜底内容或错误状态 */}
      {renderFallback()}

      {/* 图片元素 */}
      {showImage && (
        <img
          ref={imgRef}
          alt={alt}
          src={currentSrc}
          className={`land-image-img ${(loadingState === 'success' || fallbackLoadingState === 'success') ? 'loaded' : ''} ${imgClassName}`}
          style={{
            opacity: (loadingState === 'success' || fallbackLoadingState === 'success') ? 1 : 0,
            ...imgStyle
          }}
        />
      )}
    </div>
  );
};

export default Image;
