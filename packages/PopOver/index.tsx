import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { PopOverProps, PopOverPlacement } from './props';
import './index.scss'

const PopOver: React.FC<PopOverProps> = ({
  show,
  content,
  theme = "light",
  placement = "top",
  hideArrow = false,
  targetBody = false,
  trigger = "hover",
  onVisibleChange,
  popoverStyle,
  popoverClassName,
  style,
  className = "",
  children
}) => {
  const [isVisible, setIsVisible] = useState(show);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [popoverSize, setPopoverSize] = useState({ width: 0, height: 0 });
  const [actualPlacement, setActualPlacement] = useState<PopOverPlacement>(placement);
  const targetRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  // 控制显示状态
  useEffect(() => {
    if (show !== undefined) {
      setIsVisible(show);
    }
  }, [show]);

  // 触发onVisibleChange回调
  useEffect(() => {
    onVisibleChange?.(isVisible);
  }, [isVisible, onVisibleChange]);

  const threshold = 8;
  const arrowSize = 8; // 箭头大小

  // 计算位置（仅用于targetBody模式）
  const calculatePosition = useCallback(() => {
    if (!targetRef.current || !targetBody || popoverSize.width === 0 || popoverSize.height === 0) return;

    const targetRect = targetRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let top = 0;
    let left = 0;
    let currentPlacement: PopOverPlacement = placement;

    // 计算首选位置
    const calculatePreferredPosition = (preferredPlacement: PopOverPlacement): { top: number; left: number; placement: PopOverPlacement } => {
      switch (preferredPlacement) {
        case 'top':
          return {
            top: targetRect.top - targetRect.height - threshold,
            left: targetRect.left + (targetRect.width / 2 - popoverSize.width / 2),
            placement: 'top' as PopOverPlacement
          };
        case 'bottom':
          return {
            top: targetRect.top + targetRect.height + threshold,
            left: targetRect.left + (targetRect.width / 2 - popoverSize.width / 2),
            placement: 'bottom' as PopOverPlacement
          };
        case 'left':
          return {
            top: targetRect.top + (targetRect.height / 2 - popoverSize.height / 2),
            left: targetRect.left - popoverSize.width - threshold,
            placement: 'left' as PopOverPlacement
          };
        case 'right':
          return {
            top: targetRect.top + (targetRect.height / 2 - popoverSize.height / 2),
            left: targetRect.right + threshold,
            placement: 'right' as PopOverPlacement
          };
        default:
          return {
            top: targetRect.bottom + threshold,
            left: targetRect.left + targetRect.width / 2 - popoverSize.width / 2,
            placement: 'bottom' as PopOverPlacement
          };
      }
    };

    // 尝试首选位置
    let pos = calculatePreferredPosition(currentPlacement);
    top = pos.top;
    left = pos.left;
    currentPlacement = pos.placement as PopOverPlacement;

    // 边界检测和自动调整
    const adjustPosition = () => {
      // 水平边界检测
      if (left < threshold) {
        left = threshold;
      }
      if (left + popoverSize.width > viewportWidth - threshold) {
        left = viewportWidth - popoverSize.width - threshold;
      }

      // 垂直边界检测和自动调整placement
      if (top < threshold) {
        // 上方空间不足，尝试下方
        if (currentPlacement === 'top') {
          const bottomPos = calculatePreferredPosition('bottom' as PopOverPlacement);
          if (bottomPos.top + popoverSize.height <= viewportHeight - threshold) {
            top = bottomPos.top;
            left = bottomPos.left;
            currentPlacement = 'bottom';
          } else {
            // 如果下方也不行，就强制显示在上方
            top = threshold;
          }
        }
      } else if (top + popoverSize.height > viewportHeight - threshold) {
        // 下方空间不足，尝试上方
        if (currentPlacement === 'bottom') {
          const topPos = calculatePreferredPosition('top' as PopOverPlacement);
          if (topPos.top >= threshold) {
            top = topPos.top;
            left = topPos.left;
            currentPlacement = 'top';
          } else {
            // 如果上方也不行，就强制显示在下方
            top = viewportHeight - popoverSize.height - threshold;
          }
        }
      }

      // 如果水平空间不足，尝试左右位置
      if (left < threshold || left + popoverSize.width > viewportWidth - threshold) {
        if (currentPlacement === 'top' || currentPlacement === 'bottom') {
          // 尝试左侧
          const leftPos = calculatePreferredPosition('left' as PopOverPlacement);
          if (leftPos.left >= threshold) {
            top = leftPos.top;
            left = leftPos.left;
            currentPlacement = 'left';
          } else {
            // 尝试右侧
            const rightPos = calculatePreferredPosition('right' as PopOverPlacement);
            if (rightPos.left + popoverSize.width <= viewportWidth - threshold) {
              top = rightPos.top;
              left = rightPos.left;
              currentPlacement = 'right';
            }
          }
        }
      }
    };

    adjustPosition();

    setPosition({ top, left });
    setActualPlacement(currentPlacement);
  }, [placement, targetBody, popoverSize]);

  // 监听窗口大小变化和滚动（仅用于targetBody模式）
  useEffect(() => {
    if (!targetBody) return;

    const handleResize = () => {
      calculatePosition();
    };

    const handleScroll = () => {
      calculatePosition();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [calculatePosition, targetBody]);

  // 监听popover尺寸变化（仅用于targetBody模式）
  useEffect(() => {
    if (popoverRef.current && isVisible && targetBody) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { width, height } = entry.target.getBoundingClientRect();

          setPopoverSize({ width, height });
        }
      });

      resizeObserver.observe(popoverRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [isVisible, targetBody]);

  // 位置更新（仅用于targetBody模式）
  useEffect(() => {
    if (isVisible && targetBody && popoverSize.width > 0 && popoverSize.height > 0) {
      calculatePosition();
    }
  }, [isVisible, targetBody, popoverSize, calculatePosition]);

  // 点击外部关闭
  useEffect(() => {
    if (trigger === 'click' && isVisible) {
      const handleClickOutside = (event: MouseEvent) => {
        if (targetRef.current && !targetRef.current.contains(event.target as Node)) {
          setIsVisible(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [trigger, isVisible]);

  // 鼠标事件处理
  const handleMouseEnter = () => {
    if (trigger === 'hover' && show === undefined) {
      setIsVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover' && show === undefined) {
      setIsVisible(false);
    }
  };

  // 点击事件处理
  const handleClick = () => {
    if (trigger === 'click' && show === undefined) {
      setIsVisible(!isVisible);
    }
  };

  if (!content) return <>{children}</>;

  // 非全局气泡的CSS定位样式
  const getAbsolutePositionStyle = () => {
    switch (placement) {
      case 'top':
        return {
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginBottom: '8px',
        };
      case 'bottom':
        return {
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginTop: '8px',
        };
      case 'left':
        return {
          right: '100%',
          top: '50%',
          transform: 'translateY(-50%)',
          marginRight: '8px',
        };
      case 'right':
        return {
          left: '100%',
          top: '50%',
          transform: 'translateY(-50%)',
          marginLeft: '8px',
        };
      default:
        return {};
    }
  };

  // 计算箭头位置（全局定位模式）
  const getArrowPosition = () => {
    if (!targetRef.current || !targetBody || popoverSize.width === 0 || popoverSize.height === 0) return {};

    const targetRect = targetRef.current.getBoundingClientRect();
    const minArrowDistance = 12; // 箭头距离气泡边缘的最小距离

    // 计算目标元素中心点相对于气泡的位置
    const targetCenterX = targetRect.left + targetRect.width / 2;
    const targetCenterY = targetRect.top + targetRect.height / 2;

    // 计算气泡的边界
    const popoverLeft = position.left;
    const popoverTop = position.top;

    // 计算目标元素相对于气泡的偏移
    const targetOffsetX = targetCenterX - popoverLeft;
    const targetOffsetY = targetCenterY - popoverTop;

    // 智能箭头位置计算
    const calculateArrowPosition = (isHorizontal: boolean, targetOffset: number, containerSize: number) => {
      // 如果目标元素完全在气泡内部，将箭头放在中心
      if (targetOffset >= 0 && targetOffset <= containerSize) {
        return Math.max(minArrowDistance, Math.min(containerSize - minArrowDistance, targetOffset));
      }

      // 如果目标元素在气泡外部，将箭头放在最近的边界
      if (targetOffset < 0) {
        return minArrowDistance;
      } else {
        return containerSize - minArrowDistance;
      }
    };

    switch (actualPlacement) {
      case 'top':
        // 箭头在气泡底部，指向目标元素
        const arrowXTop = calculateArrowPosition(true, targetOffsetX, popoverSize.width);
        return {
          left: `${(arrowXTop / popoverSize.width) * 100}%`,
          top: '100%',
          transform: 'translate(-50%,-50%) rotate(45deg)',
        };

      case 'bottom':
        // 箭头在气泡顶部，指向目标元素
        const arrowXBottom = calculateArrowPosition(true, targetOffsetX, popoverSize.width);
        return {
          left: `${(arrowXBottom / popoverSize.width) * 100}%`,
          top: '0',
          transform: 'translate(-50%,-50%) rotate(-135deg)',
        };

      case 'left':
        // 箭头在气泡右侧，指向目标元素
        const arrowYLeft = calculateArrowPosition(false, targetOffsetY, popoverSize.height);
        return {
          left: '100%',
          top: `${(arrowYLeft / popoverSize.height) * 100}%`,
          transform: 'translate(-50%,-50%) rotate(-45deg)',
        };

      case 'right':
        // 箭头在气泡左侧，指向目标元素
        const arrowYRight = calculateArrowPosition(false, targetOffsetY, popoverSize.height);
        return {
          left: '0',
          top: `${(arrowYRight / popoverSize.height) * 100}%`,
          transform: 'translate(-50%,-50%) rotate(135deg)',
        };

      default:
        return {};
    }
  };

  const popContent = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2, type: 'spring' }}
      ref={popoverRef}
      className={`land-pop ${isVisible ? 'show' : ''} ${hideArrow ? 'hide-arrow' : ''} ${theme} ${popoverClassName ?? ''}`}
      style={{
        position: targetBody ? 'fixed' : 'absolute',
        ...(targetBody ? {
          top: position.top,
          left: position.left,
        } : getAbsolutePositionStyle()),
        zIndex: targetBody ? 1000 : 100,
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        transition: 'opacity 0.2s ease-in-out',
        ...popoverStyle,
      }}
    >
      {content}
      {!hideArrow && (
        <div
          className="land-pop-arrow"
          style={targetBody ? getArrowPosition() : {
            left: placement === "left" ? "100%" : placement === "right" ? "0" : "50%",
            top: placement === "top" ? "100%" : placement === "bottom" ? "0" : "50%",
            transform: `translate(${placement === "left" || placement === "right" ? "-50%" : "-50%"}, ${placement === "top" || placement === "bottom" ? "-50%" : "-50%"}) rotate(${placement === 'top' ? '45' : placement === 'bottom' ? '-135' : placement === 'right' ? '135' : '-45'}deg)`,
          }}
        />
      )}
    </motion.div>
  );

  return (
    <div
      ref={targetRef}
      className={`land-pop-target ${className ?? ''}`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
      {popContent}
    </div>
  );
};

export default PopOver; 