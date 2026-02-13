import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { DropdownItem, DropdownProps } from "./props";
import './index.scss';

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

  const calculatePosition = useCallback(() => {
    if (!toggleRef.current) return;

    const toggleRect = toggleRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const panelNode = panelRef.current;
    const panelWidth = panelNode?.offsetWidth || 200;
    const panelHeight = panelNode?.offsetHeight || 150;

    let newPlacement = placement;
    let newAlignment = alignment;

    // 自动翻转方向
    const spaceBelow = viewportHeight - toggleRect.bottom;
    const spaceAbove = toggleRect.top;

    if (placement === "bottom" && spaceBelow < panelHeight && spaceAbove > panelHeight) {
      newPlacement = "top";
    } else if (placement === "top" && spaceAbove < panelHeight && spaceBelow > panelHeight) {
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

      switch (alignment) {
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

      setPosition({ top: newTop, left: newLeft });
    }

    setActualPlacement(newPlacement);
    setActualAlignment(newAlignment);
  }, [placement, alignment, isPortal]);

  useEffect(() => {
    if (innerOpen && !disabled) {
      const timer = setTimeout(calculatePosition, 0);
      return () => clearTimeout(timer);
    }
  }, [innerOpen, disabled, calculatePosition]);

  useEffect(() => {
    if (innerOpen && !disabled) {
      const handleResize = () => calculatePosition();
      const handleScroll = () => calculatePosition();

      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll, true);
      document.addEventListener("scroll", handleScroll, true);

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleScroll, true);
        document.removeEventListener("scroll", handleScroll, true);
      };
    }
  }, [innerOpen, disabled, calculatePosition]);

  useEffect(() => {
    if (innerOpen) {
      onOpen?.();
    } else {
      onClose?.();
    }
  }, [innerOpen, onOpen, onClose]);

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

  const rootCls = useMemo(() => {
    return [
      "land-dropdown",
      innerOpen && "land-dropdown--open",
      disabled && "land-dropdown--disabled",
      toggleClassName,
      className,
    ].filter(Boolean).join(" ");
  }, [innerOpen, disabled, toggleClassName, className]);

  const panelCls = useMemo(() => {
    return [
      "land-dropdown__panel",
      innerOpen && "land-dropdown__panel--open",
      isPortal && "land-dropdown__panel--portal",
      `land-dropdown__panel--${actualAlignment}`,
      `land-dropdown__panel--${actualPlacement}`,
    ].filter(Boolean).join(" ");
  }, [innerOpen, isPortal, actualAlignment, actualPlacement]);

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
      <div className={["land-dropdown__content", contentClassName].filter(Boolean).join(" ")} style={contentStyle}>
        {items && !content && (
          <ul className="land-dropdown__list">
            {items.map((item) => (
              <li
                className="land-dropdown__item"
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
