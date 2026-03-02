// ============================================================================
// Dropdown 组件
// @description 下拉菜单组件，支持 hover 和 click 触发
// @author Land Design System
// ============================================================================

import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { DropdownItem, DropdownProps } from "./props";
import './index.scss';

const prefixCls = 'land-dropdown';

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 工具函数
// ─────────────────────────────────────────────────────────────────────────────

/** 解析 attach 属性，返回挂载的 DOM 节点，无效时返回 null */
function resolveAttach(attach?: string | HTMLElement): HTMLElement | null {
  if (!attach) return null;
  if (attach instanceof HTMLElement) return attach;
  try {
    return document.querySelector<HTMLElement>(attach);
  } catch {
    return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 组件实现
// ─────────────────────────────────────────────────────────────────────────────

const Dropdown: React.FC<DropdownProps> = ({
  trigger = "hover",
  attach,
  items,
  content,
  children,
  placement = "bottom",
  alignment = "left",
  disabled,
  onChange,
  onOpen,
  onClose,
  toggleClassName,
  toggleStyle,
  contentClassName,
  contentStyle,
  open = false,
  className,
  style,
}) => {
  const toggleRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [innerOpen, setInnerOpen] = useState(open);
  const isMountedRef = useRef(true);
  
  // 使用 ref 存储回调和配置，避免 useEffect 依赖变化
  const onOpenRef = useRef(onOpen);
  const onCloseRef = useRef(onClose);
  const placementRef = useRef(placement);
  const alignmentRef = useRef(alignment);
  
  useEffect(() => {
    onOpenRef.current = onOpen;
    onCloseRef.current = onClose;
    placementRef.current = placement;
    alignmentRef.current = alignment;
  });

  // 组件卸载时标记
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // 解析挂载容器
  const attachNode = useMemo(() => resolveAttach(attach), [attach]);
  const isPortal = !!attachNode;

  useEffect(() => {
    if (disabled && innerOpen) {
      setInnerOpen(false);
    }
  }, [disabled, innerOpen]);

  useEffect(() => {
    if (!disabled) {
      setInnerOpen(open);
    }
  }, [open, disabled]);

  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [actualPlacement, setActualPlacement] = useState<"top" | "bottom">(placement);
  const [actualAlignment, setActualAlignment] = useState<"left" | "right" | "center">(alignment);

  // 使用 ref 存储计算位置的函数，避免在事件监听器依赖中导致重复注册
  const calculatePositionRef = useRef<() => void>();
  
  calculatePositionRef.current = () => {
    if (!toggleRef.current || !isMountedRef.current) return;

    const toggleRect = toggleRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const panelNode = panelRef.current;
    const panelWidth = panelNode?.offsetWidth || 200;
    const panelHeight = panelNode?.offsetHeight || 150;

    let newPlacement = placementRef.current;
    let newAlignment = alignmentRef.current;

    // 自动翻转方向
    const spaceBelow = viewportHeight - toggleRect.bottom;
    const spaceAbove = toggleRect.top;

    if (placementRef.current === "bottom" && spaceBelow < panelHeight && spaceAbove > panelHeight) {
      newPlacement = "top";
    } else if (placementRef.current === "top" && spaceAbove < panelHeight && spaceBelow > panelHeight) {
      newPlacement = "bottom";
    }

    if (isPortal) {
      // 读取 CSS 变量 --land-dropdown-gap，保证 portal/非 portal 间距一致
      const gap = parseFloat(
        getComputedStyle(toggleRef.current).getPropertyValue("--land-dropdown-gap")
      ) || parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--padding-s")
      ) || 0;

      // fixed 定位：直接使用视口坐标 + gap
      let newTop = newPlacement === "bottom"
        ? toggleRect.bottom + gap
        : toggleRect.top - panelHeight - gap;
      let newLeft: number;

      switch (alignmentRef.current) {
        case "center":
          newLeft = toggleRect.left + toggleRect.width / 2 - panelWidth / 2;
          break;
        case "right":
          newLeft = toggleRect.right - panelWidth;
          break;
        default:
          newLeft = toggleRect.left;
          break;
      }

      // 边界检测
      if (newLeft < 0) {
        newLeft = 0;
        newAlignment = "left";
      } else if (newLeft + panelWidth > viewportWidth) {
        newLeft = viewportWidth - panelWidth;
        newAlignment = "right";
      }

      if (newTop < 0) {
        newTop = 0;
      } else if (newTop + panelHeight > viewportHeight) {
        newTop = viewportHeight - panelHeight;
      }

      // 只在位置真正变化时更新状态
      setPosition((prev) => {
        if (prev.top === newTop && prev.left === newLeft) {
          return prev;
        }
        return { top: newTop, left: newLeft };
      });
    }

    // 只在值真正变化时更新状态
    setActualPlacement((prev) => prev === newPlacement ? prev : newPlacement);
    setActualAlignment((prev) => prev === newAlignment ? prev : newAlignment);
  };

  // 稳定的计算位置函数（不会因为依赖变化而重新创建）
  const calculatePosition = useCallback(() => {
    calculatePositionRef.current?.();
  }, []);

  useEffect(() => {
    if (innerOpen && !disabled) {
      const timer = setTimeout(calculatePosition, 0);
      return () => clearTimeout(timer);
    }
  }, [innerOpen, disabled, calculatePosition]);

  useEffect(() => {
    if (!innerOpen || disabled) return;
    
    const handleResize = () => calculatePositionRef.current?.();
    const handleScroll = () => calculatePositionRef.current?.();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, true);
    document.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll, true);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, [innerOpen, disabled]); // 移除 calculatePosition 依赖

  // 状态变化时触发回调
  const prevOpenRef = useRef(innerOpen);
  useEffect(() => {
    // 只在状态真正变化时触发
    if (prevOpenRef.current !== innerOpen) {
      prevOpenRef.current = innerOpen;
      if (innerOpen) {
        onOpenRef.current?.();
      } else {
        onCloseRef.current?.();
      }
    }
  }, [innerOpen]);

  // 点击外部关闭（同时排除 toggle 和 portal 面板）
  useEffect(() => {
    if (!innerOpen || disabled) return;

    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (toggleRef.current?.contains(target)) return;
      if (panelRef.current?.contains(target)) return;
      setInnerOpen(false);
    };

    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [innerOpen, disabled]);

  const handleItemClick = useCallback((item: DropdownItem) => {
    if (disabled) return;
    onChange?.(item);
    if (trigger === "click") {
      setInnerOpen(false);
    }
  }, [disabled, onChange, trigger]);

  // ─── 根容器类名 ───
  const rootCls = useMemo(() => {
    return [
      prefixCls,
      innerOpen && `${prefixCls}--open`,
      disabled && `${prefixCls}--disabled`,
      toggleClassName,
      className,
    ].filter(Boolean).join(" ");
  }, [innerOpen, disabled, toggleClassName, className]);

  // ─── 面板类名 ───
  const panelCls = useMemo(() => {
    return [
      `${prefixCls}__panel`,
      innerOpen && `${prefixCls}__panel--open`,
      isPortal && `${prefixCls}__panel--portal`,
      `${prefixCls}__panel--${actualAlignment}`,
      `${prefixCls}__panel--${actualPlacement}`,
    ].filter(Boolean).join(" ");
  }, [innerOpen, isPortal, actualAlignment, actualPlacement]);

  // ─── 内容类名 ───
  const contentCls = useMemo(() => {
    return [`${prefixCls}__content`, contentClassName].filter(Boolean).join(" ");
  }, [contentClassName]);

  // ─── 事件处理 ───
  const handleToggleClick = useCallback(() => {
    if (disabled) return;
    if (trigger === "click") setInnerOpen((v) => !v);
  }, [disabled, trigger]);

  const handleMouseEnter = useCallback(() => {
    if (disabled || trigger !== "hover") return;
    setInnerOpen(true);
  }, [disabled, trigger]);

  const handleMouseLeave = useCallback(() => {
    if (trigger !== "hover") return;
    setInnerOpen(false);
  }, [trigger]);

  // ─────────────────────────────────────────────────────────────────────────────
  // SECTION: 渲染
  // ─────────────────────────────────────────────────────────────────────────────

  const panelEl = (
    <div
      ref={panelRef}
      className={panelCls}
      style={
        isPortal
          ? { top: position.top, left: position.left }
          : undefined
      }
      onClick={(e) => e.stopPropagation()}
      onMouseEnter={isPortal ? handleMouseEnter : undefined}
      onMouseLeave={isPortal ? handleMouseLeave : undefined}
    >
      <div className={contentCls} style={contentStyle}>
        {items && !content && (
          <ul className={`${prefixCls}__list`}>
            {items.map((item) => (
              <li
                className={`${prefixCls}__item`}
                key={item.key}
                onClick={() => handleItemClick(item)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        )}
        {content}
      </div>
    </div>
  );

  return (
    <Fragment>
      <div
        ref={toggleRef}
        className={rootCls}
        style={{ ...style, ...toggleStyle }}
        onClick={handleToggleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-disabled={disabled}
        aria-expanded={innerOpen}
        aria-haspopup="true"
      >
        {children}
        {!isPortal && panelEl}
      </div>
      {isPortal && innerOpen && !disabled && createPortal(panelEl, attachNode)}
    </Fragment>
  );
};

export default Dropdown;
