// ============================================================================
// PopOver 组件
// @description 气泡提示组件，支持多种触发方式和位置
// @author Land Design System
// ============================================================================

import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'motion/react';
import { PopOverProps, PopOverPlacement } from './props';
import './index.scss';

const prefixCls = 'land-popover';

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 组件实现
// ─────────────────────────────────────────────────────────────────────────────

const PopOver: React.FC<PopOverProps> = ({
  show,
  content,
  trigger = "hover",
  onVisibleChange,
  theme = 'light',
  placement = 'top',
  hideArrow = false,
  attach = 'parent',
  className = '',
  style,
  popoverClassName = '',
  popoverStyle,
  children
}) => {
  // ─── 状态 ───
  const [isVisible, setIsVisible] = useState(show ?? false);
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);
  const [bubbleSize, setBubbleSize] = useState({ width: 0, height: 0 });
  const [actualPlacement, setActualPlacement] = useState<PopOverPlacement>(placement);
  const [isPositioned, setIsPositioned] = useState(false); // 标记位置是否已计算完成

  // ─── Refs ───
  const triggerRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
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
  const ARROW_MIN_DISTANCE = 12; // 箭头距气泡边缘最小距离

  // ─── 计算模式 ───
  const isBodyAttach = attach === 'body';

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
    const getPositionByPlacement = (targetPlacement: PopOverPlacement) => {
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
    const isInViewport = (pos: { top: number; left: number }, targetPlacement: PopOverPlacement) => {
      const { top, left } = pos;
      const bottom = top + currentBubbleSize.height;
      const right = left + currentBubbleSize.width;

      if (targetPlacement === 'top' || targetPlacement === 'bottom') {
        return top >= VIEWPORT_PADDING && bottom <= viewportHeight - VIEWPORT_PADDING;
      }
      return left >= VIEWPORT_PADDING && right <= viewportWidth - VIEWPORT_PADDING;
    };

    // 获取对立方向
    const getOppositePlacement = (p: PopOverPlacement): PopOverPlacement => {
      const opposites: Record<PopOverPlacement, PopOverPlacement> = {
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

  // ─── 监听气泡尺寸变化（body 模式）───
  useEffect(() => {
    if (!bubbleRef.current || !isVisible || !isBodyAttach) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.target.getBoundingClientRect();
        // 只在尺寸真正变化时更新状态，避免无限循环
        setBubbleSize((prev) => {
          if (prev.width === width && prev.height === height) {
            return prev; // 返回相同引用，不触发重渲染
          }
          return { width, height };
        });
      }
    });

    resizeObserver.observe(bubbleRef.current);
    return () => resizeObserver.disconnect();
  }, [isVisible, isBodyAttach]);

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
    const styles: Record<PopOverPlacement, React.CSSProperties> = {
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

  // ─── 计算箭头样式 ───
  const arrowStyle = useMemo(() => {
    const rotations: Record<PopOverPlacement, number> = {
      top: 45,
      bottom: -135,
      left: -45,
      right: 135,
    };

    // parent 模式：箭头居中
    if (!isBodyAttach) {
      const positions: Record<PopOverPlacement, React.CSSProperties> = {
        top: { left: '50%', top: '100%' },
        bottom: { left: '50%', top: '0' },
        left: { left: '100%', top: '50%' },
        right: { left: '0', top: '50%' },
      };
      return {
        ...positions[placement],
        transform: `translate(-50%, -50%) rotate(${rotations[placement]}deg)`,
      };
    }

    // body 模式：箭头指向触发元素
    if (!triggerRef.current || bubbleSize.width === 0 || bubbleSize.height === 0 || !position) {
      return {};
    }

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const triggerCenterX = triggerRect.left + triggerRect.width / 2;
    const triggerCenterY = triggerRect.top + triggerRect.height / 2;

    const clampArrowPosition = (offset: number, containerSize: number) => {
      return Math.max(ARROW_MIN_DISTANCE, Math.min(containerSize - ARROW_MIN_DISTANCE, offset));
    };

    const currentRotation = rotations[actualPlacement];

    switch (actualPlacement) {
      case 'top': {
        const arrowX = clampArrowPosition(triggerCenterX - position.left, bubbleSize.width);
        return {
          left: `${(arrowX / bubbleSize.width) * 100}%`,
          top: '100%',
          transform: `translate(-50%, -50%) rotate(${currentRotation}deg)`,
        };
      }
      case 'bottom': {
        const arrowX = clampArrowPosition(triggerCenterX - position.left, bubbleSize.width);
        return {
          left: `${(arrowX / bubbleSize.width) * 100}%`,
          top: '0',
          transform: `translate(-50%, -50%) rotate(${currentRotation}deg)`,
        };
      }
      case 'left': {
        const arrowY = clampArrowPosition(triggerCenterY - position.top, bubbleSize.height);
        return {
          left: '100%',
          top: `${(arrowY / bubbleSize.height) * 100}%`,
          transform: `translate(-50%, -50%) rotate(${currentRotation}deg)`,
        };
      }
      case 'right': {
        const arrowY = clampArrowPosition(triggerCenterY - position.top, bubbleSize.height);
        return {
          left: '0',
          top: `${(arrowY / bubbleSize.height) * 100}%`,
          transform: `translate(-50%, -50%) rotate(${currentRotation}deg)`,
        };
      }
    }
  }, [isBodyAttach, placement, actualPlacement, position, bubbleSize, ARROW_MIN_DISTANCE]);

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
      popoverClassName,
    ]
      .filter(Boolean)
      .join(' ');
  }, [theme, isVisible, hideArrow, popoverClassName]);

  // ─── 气泡样式 ───
  const bubbleStyle = useMemo<React.CSSProperties>(() => {
    const baseStyle: React.CSSProperties = {
      zIndex: isBodyAttach ? 1000 : 100,
      pointerEvents: isVisible ? 'auto' : 'none',
      ...popoverStyle,
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
  }, [isBodyAttach, position, parentPositionStyle, isVisible, popoverStyle, isPositioned]);

  // ─── 无内容时直接返回子元素 ───
  if (!content) {
    return <>{children}</>;
  }

  // ─── 判断是否应该显示气泡 ───
  const shouldShowBubble = useMemo(() => {
    if (!isBodyAttach) return isVisible;
    // body 模式下，需要等待位置计算完成
    return isVisible && isPositioned;
  }, [isBodyAttach, isVisible, isPositioned]);

  // ─── 动画配置 ───
  // parent 模式需要将 translate 居中偏移合并到动画中
  const getMotionVariants = useCallback(() => {
    const currentPlacement = isBodyAttach ? actualPlacement : placement;

    if (isBodyAttach) {
      // body 模式：使用 scale + 轻微位移
      const offsetMap: Record<PopOverPlacement, { x?: number; y?: number }> = {
        top: { y: 4 },
        bottom: { y: -4 },
        left: { x: 4 },
        right: { x: -4 },
      };
      const offset = offsetMap[currentPlacement];

      return {
        hidden: {
          opacity: 0,
          scale: 0.96,
          x: offset.x ?? 0,
          y: offset.y ?? 0,
        },
        visible: {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
        },
      };
    }

    // parent 模式：将 translate 居中和动画偏移合并
    // top/bottom 需要 translateX(-50%) 水平居中
    // left/right 需要 translateY(-50%) 垂直居中
    const variantsMap = {
      top: {
        hidden: { opacity: 0, x: '-50%', y: 0 },
        visible: { opacity: 1, x: '-50%', y: -4 },
      },
      bottom: {
        hidden: { opacity: 0, x: '-50%', y: 0 },
        visible: { opacity: 1, x: '-50%', y: 4 },
      },
      left: {
        hidden: { opacity: 0, x: 0, y: '-50%' },
        visible: { opacity: 1, x: -4, y: '-50%' },
      },
      right: {
        hidden: { opacity: 0, x: 0, y: '-50%' },
        visible: { opacity: 1, x: 4, y: '-50%' },
      },
    } as const;

    return variantsMap[currentPlacement];
  }, [isBodyAttach, actualPlacement, placement]);

  const motionTransition = useMemo(() => ({
    duration: 0.15,
    delay: 0.15,
    ease: [0.65,0.05,0.36,1] as const, // Material Design 标准缓动曲线
  }), []);
  // ─── 渲染气泡 ───
  const renderBubble = () => (
    <motion.div
      ref={bubbleRef}
      className={bubbleClassName}
      style={bubbleStyle}
      variants={getMotionVariants()}
      initial="hidden"
      animate={shouldShowBubble ? 'visible' : 'hidden'}
      transition={motionTransition}
    >
      {content}
      {!hideArrow && <div className={`${prefixCls}__arrow`} style={arrowStyle} />}
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

export default PopOver;
