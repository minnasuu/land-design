// ============================================================================
// Popup 组件
// @description 气泡提示组件，支持多种触发方式和位置
// @author Land Design System
// ============================================================================

import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'motion/react';
import { PopupProps, PopupPlacement } from './props';
import { buildBubblePath, getArrowGeometry } from './shape';
import './index.scss';

const prefixCls = 'land-popup';

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 组件实现
// ─────────────────────────────────────────────────────────────────────────────

const Popup: React.FC<PopupProps> = ({
  show,
  content,
  trigger = "hover",
  onVisibleChange,
  theme = 'light',
  placement = 'top',
  hideArrow = false,
  radius = 12,
  arrowRadius = 'medium',
  arrowSize = 'medium',
  attach = 'parent',
  className = '',
  style,
  popupClassName = '',
  popupStyle,
  children
}) => {
  // ─── 状态 ───
  const [isVisible, setIsVisible] = useState(show ?? false);
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);
  const [bubbleSize, setBubbleSize] = useState({ width: 0, height: 0 });
  const [contentSize, setContentSize] = useState({ width: 0, height: 0 }); // 内容区尺寸（含 padding），作为裁剪主体
  const [actualPlacement, setActualPlacement] = useState<PopupPlacement>(placement);
  const [isPositioned, setIsPositioned] = useState(false); // 标记位置是否已计算完成

  // ─── Refs ───
  const triggerRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const onVisibleChangeRef = useRef(onVisibleChange);
  const isMountedRef = useRef(true);
  const placementRef = useRef(placement);

  // 更新回调 ref
  useEffect(() => {
    onVisibleChangeRef.current = onVisibleChange;
    placementRef.current = placement;
  });

  // 组件卸载时标记
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // ─── 常量 ───
  const OFFSET = 8; // 气泡与触发元素的间距
  const VIEWPORT_PADDING = 8; // 视口边界安全距离
  // 箭头几何随 arrowRadius 自适应：圆角超过基准上限时自动放大箭头
  const arrowGeometry = useMemo(
    () => getArrowGeometry(arrowRadius, arrowSize),
    [arrowRadius, arrowSize]
  );
  // 箭头中心距气泡边缘最小距离：主体圆角 + 箭头半底宽 + 根部衔接圆角，避免与圆角重叠
  const ARROW_MIN_DISTANCE = radius + arrowGeometry.hb + arrowGeometry.joinBase;

  // ─── 计算模式 ───
  const isBodyAttach = attach === 'body';
  const hasBubble = Boolean(content);
  // 气泡实际弹出方向（body 模式可能因边界检测被翻转）
  const currentPlacement = isBodyAttach ? actualPlacement : placement;

  // ─── 受控模式同步 ───
  useEffect(() => {
    if (show !== undefined) {
      setIsVisible(show);
    }
  }, [show]);

  // ─── 隐藏时重置位置状态（body 模式）───
  useEffect(() => {
    if (!isVisible && isBodyAttach) {
      // 延迟重置，等待动画完成
      const timer = setTimeout(() => {
        setIsPositioned(false);
        setPosition(null);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isVisible, isBodyAttach]);

  // ─── 触发回调 ───
  const prevVisibleRef = useRef(isVisible);
  useEffect(() => {
    // 只在状态真正变化时触发
    if (prevVisibleRef.current !== isVisible) {
      prevVisibleRef.current = isVisible;
      onVisibleChangeRef.current?.(isVisible);
    }
  }, [isVisible]);

  // ─── 计算 body 模式下的位置（使用 ref 存储，避免依赖变化）───
  const bubbleSizeRef = useRef(bubbleSize);
  bubbleSizeRef.current = bubbleSize;

  const calculateBodyPositionRef = useRef<() => void>();

  calculateBodyPositionRef.current = () => {
    if (!triggerRef.current || !isBodyAttach || !isMountedRef.current) return;
    const currentBubbleSize = bubbleSizeRef.current;
    if (currentBubbleSize.width === 0 || currentBubbleSize.height === 0) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // 计算指定方向的位置
    const getPositionByPlacement = (targetPlacement: PopupPlacement) => {
      switch (targetPlacement) {
        case 'top':
          return {
            top: triggerRect.top - currentBubbleSize.height - OFFSET,
            left: triggerRect.left + (triggerRect.width - currentBubbleSize.width) / 2,
          };
        case 'bottom':
          return {
            top: triggerRect.bottom + OFFSET,
            left: triggerRect.left + (triggerRect.width - currentBubbleSize.width) / 2,
          };
        case 'left':
          return {
            top: triggerRect.top + (triggerRect.height - currentBubbleSize.height) / 2,
            left: triggerRect.left - currentBubbleSize.width - OFFSET,
          };
        case 'right':
          return {
            top: triggerRect.top + (triggerRect.height - currentBubbleSize.height) / 2,
            left: triggerRect.right + OFFSET,
          };
      }
    };

    // 检测位置是否在视口内
    const isInViewport = (pos: { top: number; left: number }, targetPlacement: PopupPlacement) => {
      const { top, left } = pos;
      const bottom = top + currentBubbleSize.height;
      const right = left + currentBubbleSize.width;

      if (targetPlacement === 'top' || targetPlacement === 'bottom') {
        return top >= VIEWPORT_PADDING && bottom <= viewportHeight - VIEWPORT_PADDING;
      }
      return left >= VIEWPORT_PADDING && right <= viewportWidth - VIEWPORT_PADDING;
    };

    // 获取对立方向
    const getOppositePlacement = (p: PopupPlacement): PopupPlacement => {
      const opposites: Record<PopupPlacement, PopupPlacement> = {
        top: 'bottom',
        bottom: 'top',
        left: 'right',
        right: 'left',
      };
      return opposites[p];
    };

    // 尝试首选位置
    let currentPlacement = placementRef.current;
    let pos = getPositionByPlacement(currentPlacement);

    // 边界检测：如果首选位置溢出，尝试对立方向
    if (!isInViewport(pos, currentPlacement)) {
      const oppositePlacement = getOppositePlacement(currentPlacement);
      const oppositePos = getPositionByPlacement(oppositePlacement);

      if (isInViewport(oppositePos, oppositePlacement)) {
        currentPlacement = oppositePlacement;
        pos = oppositePos;
      }
    }

    // 边界修正：确保不超出视口
    let { top, left } = pos;
    top = Math.max(VIEWPORT_PADDING, Math.min(viewportHeight - currentBubbleSize.height - VIEWPORT_PADDING, top));
    left = Math.max(VIEWPORT_PADDING, Math.min(viewportWidth - currentBubbleSize.width - VIEWPORT_PADDING, left));

    // 只在位置真正变化时更新状态
    setPosition((prev) => {
      if (prev && prev.top === top && prev.left === left) {
        return prev;
      }
      return { top, left };
    });
    setActualPlacement((prev) => prev === currentPlacement ? prev : currentPlacement);
    setIsPositioned(true);
  };

  // ─── 监听窗口变化（body 模式）───
  useEffect(() => {
    if (!isBodyAttach || !isVisible) return;

    const handleUpdate = () => calculateBodyPositionRef.current?.();

    window.addEventListener('resize', handleUpdate);
    window.addEventListener('scroll', handleUpdate, true);

    return () => {
      window.removeEventListener('resize', handleUpdate);
      window.removeEventListener('scroll', handleUpdate, true);
    };
  }, [isBodyAttach, isVisible]); // 移除 calculateBodyPosition 依赖

  // ─── 监听气泡 / 内容区尺寸变化（parent / body 均需测量）───
  // bubbleSize：气泡整体尺寸（含箭头凸出），用于 body 定位
  // contentSize：内容区尺寸（含 padding），作为 clip-path 的裁剪主体
  useEffect(() => {
    if (!bubbleRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        // 关键：必须用「布局尺寸」（border-box，不含 transform）。
        // 气泡 motion.div 入场有 scale 动画，getBoundingClientRect() 会包含 scale，
        // 导致在动画早期测得的尺寸被缓存且不再更新（transform 不触发 RO），
        // 从而裁剪主体比真实 content 小。borderBoxSize / offsetWidth 均不含 transform。
        const boxSize = entry.borderBoxSize && entry.borderBoxSize[0];
        const el = entry.target as HTMLElement;
        const width = boxSize ? boxSize.inlineSize : el.offsetWidth;
        const height = boxSize ? boxSize.blockSize : el.offsetHeight;
        const setter = entry.target === contentRef.current ? setContentSize : setBubbleSize;
        // 只在尺寸真正变化时更新状态，避免无限循环
        setter((prev) => {
          if (prev.width === width && prev.height === height) {
            return prev; // 返回相同引用，不触发重渲染
          }
          return { width, height };
        });
      }
    });

    resizeObserver.observe(bubbleRef.current);
    if (contentRef.current) resizeObserver.observe(contentRef.current);
    return () => resizeObserver.disconnect();
  }, [hasBubble]);

  // ─── 位置更新（body 模式）───
  useEffect(() => {
    if (isVisible && isBodyAttach && bubbleSize.width > 0 && bubbleSize.height > 0) {
      calculateBodyPositionRef.current?.();
    }
  }, [isVisible, isBodyAttach, bubbleSize]);

  // ─── 点击外部关闭 ───
  useEffect(() => {
    if (trigger !== 'click' || !isVisible) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (triggerRef.current && !triggerRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [trigger, isVisible]);

  // ─── 事件处理 ───
  const handleMouseEnter = useCallback(() => {
    if (trigger === 'hover' && show === undefined) {
      setIsVisible(true);
    }
  }, [trigger, show]);

  const handleMouseLeave = useCallback(() => {
    if (trigger === 'hover' && show === undefined) {
      setIsVisible(false);
    }
  }, [trigger, show]);

  const handleClick = useCallback(() => {
    if (trigger === 'click' && show === undefined) {
      setIsVisible((prev) => !prev);
    }
  }, [trigger, show]);

  // ─── 计算 parent 模式下的定位样式 ───
  const parentPositionStyle = useMemo(() => {
    const styles: Record<PopupPlacement, React.CSSProperties> = {
      top: {
        bottom: '100%',
        left: '50%',
        marginBottom: `${OFFSET}px`,
      },
      bottom: {
        top: '100%',
        left: '50%',
        marginTop: `${OFFSET}px`,
      },
      left: {
        right: '100%',
        top: '50%',
        marginRight: `${OFFSET}px`,
      },
      right: {
        left: '100%',
        top: '50%',
        marginLeft: `${OFFSET}px`,
      },
    };
    return styles[placement];
  }, [placement, OFFSET]);

  // ─── 计算 clip-path 切割路径（主体尺寸 = content 含 padding 尺寸）───
  const shapePath = useMemo(() => {
    if (contentSize.width <= 0 || contentSize.height <= 0) return '';

    // 计算箭头中心沿主体边的位置（px）
    let arrowCenter = 0;
    if (hideArrow) {
      arrowCenter = 0; // 无箭头，值无意义
    } else if (!isBodyAttach) {
      // parent 模式：箭头居中
      arrowCenter =
        currentPlacement === 'top' || currentPlacement === 'bottom'
          ? contentSize.width / 2
          : contentSize.height / 2;
    } else if (triggerRef.current && position) {
      // body 模式：箭头指向触发元素中心
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const triggerCenterX = triggerRect.left + triggerRect.width / 2;
      const triggerCenterY = triggerRect.top + triggerRect.height / 2;
      if (currentPlacement === 'top' || currentPlacement === 'bottom') {
        arrowCenter = triggerCenterX - position.left;
        arrowCenter = Math.max(ARROW_MIN_DISTANCE, Math.min(contentSize.width - ARROW_MIN_DISTANCE, arrowCenter));
      } else {
        arrowCenter = triggerCenterY - position.top;
        arrowCenter = Math.max(ARROW_MIN_DISTANCE, Math.min(contentSize.height - ARROW_MIN_DISTANCE, arrowCenter));
      }
    }

    return buildBubblePath({
      W: contentSize.width,
      H: contentSize.height,
      direction: currentPlacement,
      arrowCenter,
      radius,
      arrow: arrowGeometry,
      hideArrow,
    });
  }, [contentSize, currentPlacement, isBodyAttach, position, radius, arrowGeometry, hideArrow, ARROW_MIN_DISTANCE]);

  // ─── 气泡形状内联样式（仅 clip-path，形状铺满气泡盒）───
  const shapeStyle = useMemo<React.CSSProperties>(() => ({
    clipPath: shapePath ? `path('${shapePath}')` : 'none',
  }), [shapePath]);

  // ─── 根容器类名 ───
  const rootClassName = useMemo(() => {
    return [prefixCls, className].filter(Boolean).join(' ');
  }, [className]);

  // ─── 气泡类名 ───
  const bubbleClassName = useMemo(() => {
    return [
      `${prefixCls}__bubble`,
      `${prefixCls}__bubble--${theme}`,
      isVisible && `${prefixCls}__bubble--visible`,
      hideArrow && `${prefixCls}__bubble--no-arrow`,
      popupClassName,
    ]
      .filter(Boolean)
      .join(' ');
  }, [theme, isVisible, hideArrow, popupClassName]);

  // ─── 气泡样式 ───
  const bubbleStyle = useMemo<React.CSSProperties>(() => {
    // 箭头凸出空间：加在气泡盒上，使内容盒模型与「气泡除箭头外的部分」等尺寸
    const arrowPadding: React.CSSProperties = {};
    if (!hideArrow) {
      const arrowSize = arrowGeometry.ah;
      if (currentPlacement === 'top') arrowPadding.paddingBottom = arrowSize;
      else if (currentPlacement === 'bottom') arrowPadding.paddingTop = arrowSize;
      else if (currentPlacement === 'left') arrowPadding.paddingRight = arrowSize;
      else arrowPadding.paddingLeft = arrowSize;
    }

    const baseStyle: React.CSSProperties = {
      zIndex: isBodyAttach ? 1000 : 100,
      pointerEvents: isVisible ? 'auto' : 'none',
      ...arrowPadding,
      ...popupStyle,
    };

    if (isBodyAttach) {
      // body 模式：位置未计算完成时隐藏气泡
      if (!position || !isPositioned) {
        return {
          ...baseStyle,
          position: 'fixed',
          visibility: 'hidden',
          opacity: 0,
        };
      }
      return {
        ...baseStyle,
        position: 'fixed',
        top: position.top,
        left: position.left,
      };
    }

    // parent 模式：使用 CSS 定位
    return {
      ...baseStyle,
      position: 'absolute',
      ...parentPositionStyle,
    };
  }, [isBodyAttach, position, parentPositionStyle, isVisible, popupStyle, isPositioned, currentPlacement, hideArrow, arrowGeometry]);

  // ─── 判断是否应该显示气泡 ───
  const shouldShowBubble = useMemo(() => {
    if (!isBodyAttach) return isVisible;
    // body 模式下，需要等待位置计算完成
    return isVisible && isPositioned;
  }, [isBodyAttach, isVisible, isPositioned]);

  // ─── 动画配置 ───
  // parent 模式需要将 translate 居中偏移合并到动画中
  const getMotionVariants = useCallback(() => {
    // 出场：easeOutCubic 类曲线，流畅自然
    const enterTransition = { duration: 0.22, ease: [0.16, 1, 0.3, 1] as const };
    // 退场：easeIn 曲线，干脆利落
    const exitTransition = { duration: 0.12, ease: [0.4, 0, 1, 1] as const };

    if (isBodyAttach) {
      // body 模式：scale + 从触发元素方向滑入
      const offsetMap: Record<PopupPlacement, { x?: number; y?: number }> = {
        top: { y: 6 },
        bottom: { y: -6 },
        left: { x: 6 },
        right: { x: -6 },
      };
      const offset = offsetMap[currentPlacement];

      return {
        hidden: {
          opacity: 0,
          scale: 0.9,
          x: offset.x ?? 0,
          y: offset.y ?? 0,
          transition: exitTransition,
        },
        visible: {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          transition: enterTransition,
        },
      };
    }

    // parent 模式：将 translate 居中和动画偏移合并
    // top/bottom 需要 translateX(-50%) 水平居中
    // left/right 需要 translateY(-50%) 垂直居中
    const variantsMap = {
      top: {
        hidden: { opacity: 0, scale: 0.9, x: '-50%', y: 6, transition: exitTransition },
        visible: { opacity: 1, scale: 1, x: '-50%', y: 0, transition: enterTransition },
      },
      bottom: {
        hidden: { opacity: 0, scale: 0.9, x: '-50%', y: -6, transition: exitTransition },
        visible: { opacity: 1, scale: 1, x: '-50%', y: 0, transition: enterTransition },
      },
      left: {
        hidden: { opacity: 0, scale: 0.9, x: 6, y: '-50%', transition: exitTransition },
        visible: { opacity: 1, scale: 1, x: 0, y: '-50%', transition: enterTransition },
      },
      right: {
        hidden: { opacity: 0, scale: 0.9, x: -6, y: '-50%', transition: exitTransition },
        visible: { opacity: 1, scale: 1, x: 0, y: '-50%', transition: enterTransition },
      },
    } as const;

    return variantsMap[currentPlacement];
  }, [isBodyAttach, currentPlacement]);

  // ─── 无内容时直接返回子元素 ───
  if (!content) {
    return <>{children}</>;
  }

  // ─── 渲染气泡 ───
  const renderBubble = () => (
    <motion.div
      ref={bubbleRef}
      className={bubbleClassName}
      style={bubbleStyle}
      variants={getMotionVariants()}
      initial="hidden"
      animate={shouldShowBubble ? 'visible' : 'hidden'}
    >
      <div className={`${prefixCls}__shape`} style={shapeStyle} />
      <div ref={contentRef} className={`${prefixCls}__content`}>{content}</div>
    </motion.div>
  );

  return (
    <div
      ref={triggerRef}
      className={rootClassName}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
      {renderBubble()}
    </div>
  );
};

export default Popup;
