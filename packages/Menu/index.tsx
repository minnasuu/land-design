import { useRef, useEffect, useMemo } from 'react';
import { ClickType, MenuProps } from './props';
import './index.scss';

const prefixCls = 'land-menu';

const Menu: React.FC<MenuProps> = ({
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
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLDivElement>(null);

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
      className,
    ].filter(Boolean).join(' ');
  }, [direction, border, scrollToView, className]);

  return (
    <div ref={menuRef} className={rootClassName} style={style}>
      {items.map((item, index) => {
        const isSimple = item.clickType === ClickType.SIMPLE;
        const isDisabled = item.clickType === ClickType.DISABLED || item.disabled;
        const isDeputy = item.titleDeputy || titleDeputy;
        const isActive = active === item.key && !isDeputy;

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

        return (
          <div
            key={item.key ?? index}
            ref={active === item.key ? activeItemRef : null}
            className={itemCls}
            style={itemStyle}
          >
            <div
              role="button"
              className={linkCls}
              onClick={(e) => {
                if (isDeputy || isDisabled) return;
                e.stopPropagation();
                onChange?.(item);
              }}
            >
              {typeof item.icon === 'string' ? (
                <img src={item.icon} className={`${prefixCls}__icon`} />
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
              {item.isNew && (
                <i className={`${prefixCls}__badge`}>
                  {typeof item.isNew === 'boolean' ? 'NEW' : item.isNew}
                </i>
              )}
            </div>
            {item.children && (
              <div className={`${prefixCls}__drop-wrap${item.open ? ` ${prefixCls}__drop-wrap--open` : ''}`}>
                <div className={`${prefixCls}__drop`}>
                  <Menu
                    items={item.children}
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
        );
      })}
    </div>
  );
};

export default Menu;
