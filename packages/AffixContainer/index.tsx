import React, { useEffect, useMemo, useState } from 'react';
import './index.scss';
import { AffixContainerProps, AffixItemProps, AffixPlacement } from './props';

const prefixCls = 'land-affix-container';

const PLACEMENT_CSS_MAP: Record<AffixPlacement, string> = {
  topStart: 'top-start',
  topEnd: 'top-end',
  topCenter: 'top-center',
  bottomStart: 'bottom-start',
  bottomEnd: 'bottom-end',
  bottomCenter: 'bottom-center',
  startCenter: 'start-center',
  endCenter: 'end-center',
  center: 'center',
  custom: 'custom',
};

const DEFAULT_OFFSET = 'var(--padding-m)';

const getPosition = (placement: AffixPlacement, item: AffixItemProps) => {
  const gap = item.offset !== undefined ? item.offset : DEFAULT_OFFSET;
  const cssPlacement = PLACEMENT_CSS_MAP[placement];

  const isStart = cssPlacement.includes('start');
  const isEnd = cssPlacement.includes('end');
  const isTop = cssPlacement.startsWith('top');
  const isBottom = cssPlacement.startsWith('bottom');
  const isHCenter = placement === 'topCenter' || placement === 'bottomCenter' || placement === 'center';
  const isVCenter = placement === 'startCenter' || placement === 'endCenter' || placement === 'center';
  const isCustom = placement === 'custom';

  const left = isCustom ? item.left : isStart ? gap : isHCenter ? '50%' : 'auto';
  const right = isEnd ? gap : 'auto';
  const top = isCustom ? item.top : isTop ? gap : isVCenter ? '50%' : 'auto';
  const bottom = isBottom ? gap : 'auto';

  let transform = '';
  if (isHCenter && isVCenter) transform = 'translate(-50%, -50%)';
  else if (isHCenter) transform = 'translateX(-50%)';
  else if (isVCenter) transform = 'translateY(-50%)';

  return { left, right, top, bottom, transform };
};

const normalizeItems = (items?: AffixItemProps | AffixItemProps[]): AffixItemProps[] => {
  if (!items) return [];
  return Array.isArray(items) ? items : [items];
};

const AffixContainer: React.FC<AffixContainerProps> = ({
  items,
  disabled,
  onClick,
  children,
  className = '',
  style,
  htmlProps,
}) => {
  const itemList = useMemo(() => normalizeItems(items), [items]);

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onWheel = () => setHovered(false);
    document.body.addEventListener('wheel', onWheel);
    return () => document.body.removeEventListener('wheel', onWheel);
  }, []);

  const getOpacity = (item: AffixItemProps) => {
    const mode = item.display ?? 'always';
    if (mode === 'hoverShow') return hovered ? 1 : 0;
    if (mode === 'hoverHide') return hovered ? 0 : 1;
    return 1;
  };

  const containerClassName = useMemo(() => {
    return [
      prefixCls,
      disabled && `${prefixCls}--disabled`,
      className,
    ].filter(Boolean).join(' ');
  }, [disabled, className]);

  return (
    <div
      className={containerClassName}
      style={style}
      onClick={e => onClick?.(e)}
      onMouseOver={() => { if (!disabled) setHovered(true); }}
      onMouseLeave={() => setHovered(false)}
      onWheel={e => e.stopPropagation()}
      {...htmlProps}
    >
      {children}
      {itemList.map((item, idx) => {
        const placement = item.placement ?? 'center';
        const cssPlacement = PLACEMENT_CSS_MAP[placement];
        const pos = getPosition(placement, item);
        const opacity = getOpacity(item);
        const isHoverShow = (item.display ?? 'always') === 'hoverShow';

        const itemClassName = [
          `${prefixCls}__item`,
          `${prefixCls}__item--${cssPlacement}`,
          isHoverShow && `${prefixCls}__item--hover-show`,
          item.className,
        ].filter(Boolean).join(' ');

        return (
          <div
            key={`${placement}-${idx}`}
            className={itemClassName}
            style={{
              ...pos,
              opacity,
              zIndex: item.zIndex ?? 2,
              animation: (isHoverShow && hovered) ? item.animation : 'none',
              ...item.style,
            }}
            onClick={(e) => {
              e.stopPropagation();
              item.onClick?.(e);
            }}
          >
            {item.content}
          </div>
        );
      })}
    </div>
  );
};

export default AffixContainer;
