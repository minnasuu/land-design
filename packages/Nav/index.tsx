import { useRef, useEffect, useMemo, useState, memo } from 'react';
import { ClickType, NavProps, NavItem } from './props';
import './index.scss';

const prefixCls = 'land-nav';

interface NavItemNodeProps {
  item: NavItem;
  active: string | undefined;
  direction: 'row' | 'column';
  titleDirection: 'row' | 'column';
  titleDeputy?: boolean;
  itemStyle?: React.CSSProperties;
  itemClassName?: string;
  scrollToView?: boolean;
  dropProps?: NavProps;
  onChange?: (item: NavItem) => void;
  onDropChange?: (item: NavItem, parentItem: NavItem) => void;
  openKeys: Record<string, boolean>;
  onToggleOpen: (key: string) => void;
  activeRef?: React.Ref<HTMLDivElement>;
  expandType?: 'dropdown' | 'inline';
}

const NavItemNode = memo(
  ({
    item,
    active,
    direction,
    titleDirection,
    titleDeputy,
    itemStyle,
    itemClassName,
    scrollToView,
    dropProps,
    onChange,
    onDropChange,
    openKeys,
    onToggleOpen,
    activeRef,
    expandType = 'dropdown',
  }: NavItemNodeProps) => {
    const isSimple = item.clickType === ClickType.SIMPLE;
    const isDisabled = item.clickType === ClickType.DISABLED || item.disabled;
    const isDeputy = item.titleDeputy || titleDeputy;
    const isActive = active === item.key && !isDeputy;
    const hasChildren = !!item.children?.length;
    const isInteractive = !isDeputy && !isDisabled;

    // 受控优先：item.open 存在时以它为唯一来源，否则用内部 openKeys 管理
    const controlledOpen = item.open;
    const open = controlledOpen !== undefined ? controlledOpen : (openKeys[item.key] ?? false);

    const itemCls = [
      `${prefixCls}__item`,
      isSimple && `${prefixCls}__item--simple`,
      isDisabled && `${prefixCls}__item--disabled`,
      itemClassName,
    ].filter(Boolean).join(' ');

    const linkCls = [
      `${prefixCls}__link`,
      direction === 'column' && `${prefixCls}__link--column`,
      titleDirection === 'column' && !isDeputy && `${prefixCls}__link--title-column`,
      isActive && `${prefixCls}__link--active`,
      isDeputy && `${prefixCls}__link--deputy`,
    ].filter(Boolean).join(' ');

    // 有子导航的父项：平铺模式点击/回车切换展开（浮层模式由 hover / focus 控制）；普通项：触发 onChange
    const activate = () => {
      if (!isInteractive) return;
      if (hasChildren) {
        if (expandType === 'inline' && controlledOpen === undefined) onToggleOpen(item.key);
      } else {
        onChange?.(item);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (!isInteractive) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activate();
      } else if (e.key === 'Escape' && open) {
        e.preventDefault();
        if (controlledOpen === undefined) onToggleOpen(item.key);
      }
    };

    return (
      <div className={itemCls} style={itemStyle} ref={isActive ? activeRef : undefined}>
        <div
          role={isInteractive ? 'button' : undefined}
          tabIndex={isInteractive ? 0 : undefined}
          aria-disabled={isDisabled || undefined}
          aria-current={isActive ? 'page' : undefined}
          aria-haspopup={hasChildren ? 'true' : undefined}
          aria-expanded={hasChildren ? open : undefined}
          className={linkCls}
          onClick={(e) => {
            if (!isInteractive) return;
            e.stopPropagation();
            activate();
          }}
          onKeyDown={handleKeyDown}
        >
          {typeof item.icon === 'string' ? (
            <img src={item.icon} className={`${prefixCls}__icon`} alt="" />
          ) : (
            item.icon
          )}
          <div className={`${prefixCls}__title-wrap`}>
            <p
              className={`${prefixCls}__title${isDeputy ? ` ${prefixCls}__title--deputy` : ''}`}
              data-title={item.label}
            >
              {item.label}
            </p>
            {item.subText && (
              <span className={`${prefixCls}__sub-title`}>{item.subText}</span>
            )}
          </div>
          {expandType === 'inline' && hasChildren && (
            <span
              className={`${prefixCls}__caret${open ? ` ${prefixCls}__caret--open` : ''}`}
              aria-hidden
            />
          )}
        </div>
        {hasChildren && (
          <div
            className={[
              `${prefixCls}__drop-wrap`,
              open && `${prefixCls}__drop-wrap--open`,
              expandType === 'dropdown' && `${prefixCls}__drop-wrap--float`,
            ].filter(Boolean).join(' ')}
          >
            <div className={`${prefixCls}__drop`} role="menu">
              {expandType === 'dropdown' ? (
                // Stripe 式宽面板：子级按分组平铺成多列，叶子项作为链接
                <div className={`${prefixCls}__mega`}>
                  {item.children!.map((child) =>
                    child.children?.length ? (
                      <div className={`${prefixCls}__mega-col`} key={child.key}>
                        <p className={`${prefixCls}__mega-title`}>{child.label}</p>
                        <Nav
                          {...dropProps}
                          items={child.children}
                          active={active}
                          direction="column"
                          border={false}
                          titleDirection={titleDirection}
                          expandType={expandType}
                          onChange={(dropItem) => onDropChange?.(dropItem, child)}
                          onDropChange={(dropItem, parentItem) => onDropChange?.(dropItem, parentItem)}
                        />
                      </div>
                    ) : (
                      <NavItemNode
                        key={child.key}
                        item={child}
                        active={active}
                        direction="column"
                        titleDirection={titleDirection}
                        expandType={expandType}
                        onChange={(dropItem) => onDropChange?.(dropItem, item)}
                        onDropChange={onDropChange}
                        openKeys={openKeys}
                        onToggleOpen={onToggleOpen}
                      />
                    )
                  )}
                </div>
              ) : (
                <Nav
                  {...dropProps}
                  items={item.children!}
                  active={active}
                  onChange={(dropItem) => onDropChange?.(dropItem, item)}
                  direction="column"
                  titleDirection={titleDirection}
                  scrollToView={scrollToView}
                  expandType={expandType}
                />
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
);
NavItemNode.displayName = 'NavItemNode';

const Nav: React.FC<NavProps> = ({
  active,
  items = [],
  direction = 'row',
  titleDirection = 'row',
  border = true,
  titleDeputy,
  onChange,
  onDropChange,
  dropProps,
  itemStyle,
  itemClassName,
  style,
  className,
  scrollToView = false,
  expandType = 'dropdown',
}) => {
  const activeItemRef = useRef<HTMLDivElement>(null);
  const [openKeys, setOpenKeys] = useState<Record<string, boolean>>({});

  const onToggleOpen = (key: string) =>
    setOpenKeys((prev) => ({ ...prev, [key]: !prev[key] }));

  useEffect(() => {
    if (scrollToView && active && activeItemRef.current) {
      activeItemRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [active, scrollToView, direction]);

  const rootClassName = useMemo(() => {
    return [
      prefixCls,
      direction === 'column' && `${prefixCls}--column`,
      border && `${prefixCls}--border`,
      scrollToView && `${prefixCls}--scroll`,
      expandType === 'inline' && `${prefixCls}--inline`,
      className,
    ].filter(Boolean).join(' ');
  }, [direction, border, scrollToView, className]);

  return (
    <div
      role="navigation"
      className={rootClassName}
      style={style}
      onKeyDown={(e) => {
        // Esc 关闭所有展开的子导航
        if (e.key === 'Escape') setOpenKeys({});
      }}
    >
      {items.map((item, index) => (
        <NavItemNode
          key={item.key ?? `nav-item-${index}`}
          item={item}
          active={active}
          direction={direction}
          titleDirection={titleDirection}
          titleDeputy={titleDeputy}
          itemStyle={itemStyle}
          itemClassName={itemClassName}
          scrollToView={scrollToView}
          dropProps={dropProps}
          expandType={expandType}
          onChange={onChange}
          onDropChange={onDropChange}
          openKeys={openKeys}
          onToggleOpen={onToggleOpen}
          activeRef={activeItemRef}
        />
      ))}
    </div>
  );
};

export default Nav;
