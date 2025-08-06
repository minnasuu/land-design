import React, { useRef, useEffect } from "react";
import { ClickType, MenuProps } from "./props";
import './index.scss';

const Menu: React.FC<MenuProps> = ({
  active,
  data,
  direction = "row",
  titleDirection = "row",
  border = true,
  titleDeputy,
  onChange,
  onDropChange,
  dropProps,
  itemStyle,
  itemClassName = "",
  style,
  className = "",
  scrollToView = false,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLDivElement>(null);

  // 滚动到选中项
  useEffect(() => {
    if (scrollToView && active && activeItemRef.current) {
      const activeElement = activeItemRef.current;
      activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [active, scrollToView, direction]);

  return (
    <div
      ref={menuRef}
      className={`land-menu ${className} ${direction === "column" ? "column" : ""} ${border ? "borderBottom" : ""} ${scrollToView ? "scroll-to-view" : ""}`}
      style={style}
    >
      {data?.map((item, index) => (
        <div
          key={item.key ?? index}
          ref={active === item.key ? activeItemRef : null}
          className={`land-menu-item ${item.clickType === ClickType.SIMPLE ? "simple" : ""
            } ${item.clickType === ClickType.DISABLED || item.disabled ? "disabled" : ""}`}
          style={itemStyle}
        >
          <div
            role="button"
            key={item.key}
            className={`land-menu-link ${direction === "column" ? "column" : ""} ${titleDirection === "column" && !item.titleDeputy ? 'titleColumn' : ''} ${active === item.key && !(item.titleDeputy || titleDeputy) ? "active" : ""
              } ${(item.titleDeputy || titleDeputy) ? "title-deputy" : ""} ${itemClassName}`}
            onClick={(e) => {
              if (item.titleDeputy || titleDeputy || item.clickType === ClickType.DISABLED || item.disabled) {
                return;
              }
              e.stopPropagation();
              onChange?.(item);
            }}
          >
            {typeof item.icon === "string" ? (
              <img src={item.icon} className="land-menu-icon" />
            ) : (
              item.icon
            )}
            <div className="land-menu-title-wrap">
              <p className={`land-menu-title ${(item.titleDeputy || titleDeputy) ? "title-deputy" : ""}`} data-title={item.label}>
                {item.label}
              </p>
              {item.subText && <span className="land-menu-sub-title">{item.subText}</span>}
            </div>
            {item.isNew && (
              <i className="land-menu-new">
                {typeof item.isNew === "boolean" ? "NEW" : item.isNew}
              </i>
            )}
          </div>
          {item.dropData && (
            <div className={`land-menu-drop-wrap ${item.open ? "open" : ""}`}>
              <div className="land-menu-drop">
                <Menu
                  data={item.dropData}
                  onChange={(dropItem) => onDropChange?.(dropItem, item)}
                  direction="column"
                  titleDirection={titleDirection}
                  scrollToView={scrollToView}
                  {...dropProps}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};


export default Menu;
