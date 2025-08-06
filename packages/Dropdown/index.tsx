import React, { Fragment, useEffect, useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import { DropdownProps } from "./props";
import './index.scss';
import { useCallback } from "react";

const Dropdown: React.FC<DropdownProps> = ({
  trigger = "hover",
  targetBody = false,
  dropData,
  dropContent,
  children,
  placement = "bottom",
  alignment = "left",
  disabled,
  onChange,
  onOpen,
  onClose,
  toggleClassName = "",
  toggleStyle,
  dropClassName = "",
  dropStyle,
  open = false,
}) => {
  const toggleRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [newOpen, setNewOpen] = useState<boolean>(open);

  // 优化：在禁用状态下强制关闭下拉菜单
  useEffect(() => {
    if (disabled && newOpen) {
      setNewOpen(false);
    }
  }, [disabled, newOpen]);

  useEffect(() => {
    // 只有在非禁用状态下才响应open prop的变化
    if (!disabled) {
      setNewOpen(open);
    }
  }, [open, disabled]);

  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const [actualPlacement, setActualPlacement] = useState<"top" | "bottom">(
    placement
  );
  const [actualAlignment, setActualAlignment] = useState<
    "left" | "right" | "center"
  >(alignment);

  // 使用 useCallback 优化计算最佳位置函数
  const calculatePosition = useCallback(() => {
    if (!toggleRef.current) return;

    const toggleRect = toggleRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // 估算下拉菜单的尺寸（用于空间检测）
    const estimatedDropdownWidth = 200; // 默认宽度
    const estimatedDropdownHeight = 150; // 默认高度
    const gap = 0; // 间距

    let newTop = 0;
    let newLeft = 0;
    let newPlacement = placement;
    let newAlignment = alignment;

    // 确定垂直位置（自动调整placement）
    const spaceBelow = viewportHeight - toggleRect.bottom - gap;
    const spaceAbove = toggleRect.top - gap;

    if (
      placement === "bottom" &&
      spaceBelow < estimatedDropdownHeight &&
      spaceAbove > estimatedDropdownHeight
    ) {
      newPlacement = "top";
    } else if (
      placement === "top" &&
      spaceAbove < estimatedDropdownHeight &&
      spaceBelow > estimatedDropdownHeight
    ) {
      newPlacement = "bottom";
    }

    if (targetBody) {
      // targetBody模式下需要精确计算位置
      if (!dropdownRef.current) return;

      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const dropdownWidth = dropdownRect.width || estimatedDropdownWidth;
      const dropdownHeight = dropdownRect.height || estimatedDropdownHeight;

      if (newPlacement === "bottom") {
        newTop = toggleRect.bottom + gap + scrollY;
      } else {
        newTop = toggleRect.top - dropdownHeight - gap + scrollY;
      }

      // 确定水平位置
      let toggleCenter = toggleRect.left + toggleRect.width / 2;
      let toggleLeft = toggleRect.left;
      let toggleRight = toggleRect.right;

      switch (alignment) {
        case "center":
          newLeft = toggleCenter - dropdownWidth / 2;
          break;
        case "right":
          newLeft = toggleRight - dropdownWidth;
          break;
        default: // left
          newLeft = toggleLeft;
          break;
      }

      // 边界检测和调整
      if (newLeft < scrollX) {
        newLeft = scrollX + gap;
        newAlignment = "left";
      } else if (newLeft + dropdownWidth > scrollX + viewportWidth) {
        newLeft = scrollX + viewportWidth - dropdownWidth - gap;
        newAlignment = "right";
      }

      // 确保不超出视口
      if (newTop < scrollY) {
        newTop = scrollY + gap;
      } else if (newTop + dropdownHeight > scrollY + viewportHeight) {
        newTop = scrollY + viewportHeight - dropdownHeight - gap;
      }
    } else {
      // 非targetBody模式下，使用CSS定位，只需要更新对齐方式
      newAlignment = alignment;
    }

    setPosition({ top: newTop, left: newLeft });
    setActualPlacement(newPlacement);
    setActualAlignment(newAlignment);
  }, [placement, alignment, targetBody]);

  useEffect(() => {
    // 只有在非禁用状态下才计算位置
    if (newOpen && !disabled) {
      // 延迟计算以确保DOM已更新
      const timer = setTimeout(calculatePosition, 0);
      return () => clearTimeout(timer);
    }
  }, [newOpen, disabled, calculatePosition]);

  // 监听窗口大小变化和滚动
  useEffect(() => {
    if (newOpen && !disabled) {
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
  }, [newOpen, disabled, calculatePosition]);

  // 监听面板状态变化，触发onOpen和onClose事件
  useEffect(() => {
    if (newOpen) {
      onOpen?.(newOpen);
    } else {
      onClose?.(newOpen);
    }
  }, [newOpen, onOpen, onClose]);

  // 优化：处理下拉项点击事件
  const handleItemClick = (item: any) => {
    // 在禁用状态下阻止选择
    if (disabled) return;

    onChange?.(item);
    if (trigger === "click") {
      setNewOpen(false);
    }
  };

  const dropContentEl = (
    <div
      ref={dropdownRef}
      className={`land-dropdown-results ${
        newOpen ? "show" : ""
      } ${actualAlignment} ${actualPlacement}`}
      style={
        targetBody
          ? {
              position: "fixed",
              top: position.top,
              left: position.left,
              transform: "none",
            }
          : undefined
      }
      data-debug={`alignment: ${actualAlignment}, placement: ${actualPlacement}, targetBody: ${targetBody}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={`land-dropdown-drop ${dropClassName}`} style={dropStyle}>
        {dropData && !dropContent && (
          <ul className="land-dropdown-drop-list">
            {dropData?.map((item) => (
              <div
                className="land-dropdown-drop-item"
                key={item.key}
                onClick={() => handleItemClick(item)}
              >
                {item.label}
              </div>
            ))}
          </ul>
        )}
        {dropContent}
      </div>
    </div>
  );

  // 优化：在禁用状态下不监听点击外部事件
  useClickOutside(toggleRef, () => {
    if (newOpen && !disabled) {
      setNewOpen(false);
    }
  });

  // 优化：处理触发事件
  const handleToggleClick = () => {
    if (disabled) return;
    trigger === "click" && setNewOpen(!newOpen);
  };

  const handleToggleMouseEnter = () => {
    if (disabled) return;
    if (trigger === "hover") {
      setNewOpen(true);
    }
  };

  const handleToggleMouseLeave = () => {
    if (trigger === "hover") {
      setNewOpen(false);
    }
  };

  return (
    <Fragment>
      <div
        ref={toggleRef}
        className={`land-dropdown-toggle ${
          newOpen ? "show" : ""
        } ${toggleClassName} ${disabled ? "disabled" : ""}`}
        style={toggleStyle}
        onClick={handleToggleClick}
        onMouseEnter={handleToggleMouseEnter}
        onMouseLeave={handleToggleMouseLeave}
        // 优化：添加aria属性以提升无障碍性
        aria-disabled={disabled}
        aria-expanded={newOpen}
        aria-haspopup="true"
      >
        {children}
        {!targetBody && dropContentEl}
      </div>
      {targetBody && newOpen && !disabled && dropContentEl}
    </Fragment>
  );
};

export default Dropdown;
