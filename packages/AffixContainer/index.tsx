import React, { useEffect, useMemo, useState } from 'react';
import './index.scss'
import { AffixContainerProps, AffixContainerItemProps } from './props';
const AffixContainer: React.FC<AffixContainerProps> = ({
  ltOption,
  rtOption,
  rtOption2,
  lbOption,
  rbOption,
  tcOption,
  bcOption,
  centerOption,
  lcOption,
  rcOption,
  customOption,
  disabled,
  onClick,
  children,
  className,
  style,
  ...restProps
}) => {
  const data = useMemo(
    () => [
      { option: ltOption, placement: 'lt' },
      { option: rtOption, placement: 'rt' },
      { option: rtOption2, placement: 'rt' },
      { option: lbOption, placement: 'lb' },
      { option: rbOption, placement: 'rb' },
      { option: lcOption, placement: 'lc' },
      { option: rcOption, placement: 'rc' },
      { option: tcOption, placement: 'tc' },
      { option: bcOption, placement: 'bc' },
      { option: centerOption, placement: 'center' },
      { option: customOption, placement: 'custom' },
    ],
    [ltOption, rtOption, lbOption, rbOption, lcOption, rcOption, tcOption, bcOption, centerOption, customOption],
  );
  const [show, setShow] = useState<boolean>(false);
  const [hide, setHide] = useState<boolean>(false);
  const getOpacity = (option: AffixContainerItemProps) => {
    if (option.hoverShow) {
      return show ? 1 : 0;
    }
    if (option.hoverHide) {
      return hide ? 0 : 1;
    }
    return 1;
  };
  useEffect(() => {
    const wheel = (e: MouseEvent) => {
      setShow(false);
      setHide(false);
      e.stopPropagation();
    }
    document.body.addEventListener('wheel', wheel);
    return () => {
      document.body.removeEventListener('wheel', wheel);
    }
  }, []);
  const defaultGap = 'var(--padding-m)';
  const getLeft = (placement: string, gap: number, left?: number | string) => {
    const newGap = gap !== undefined ? gap : defaultGap;
    switch (placement) {
      case 'lt':
      case 'lb':
      case 'lc': return newGap; break;
      case 'rt':
      case 'rb':
      case 'rc': return 'auto'; break;
      case 'tc':
      case 'bc':
      case 'center': return '50%'; break;
      case 'custom': return left; break;
      default: return 'auto'; break;
    }
  };
  const getRight = (placement: string, gap: number) => {
    const newGap = gap !== undefined ? gap : defaultGap;
    switch (placement) {
      case 'lt':
      case 'lb':
      case 'lc':
      case 'tc':
      case 'bc':
      case 'center': return 'auto'; break;
      case 'rt':
      case 'rb':
      case 'rc': return newGap; break;
      default: return 'auto'; break;
    }
  };
  const getTop = (placement: string, gap: number, top?: number | string) => {
    const newGap = gap !== undefined ? gap : defaultGap;
    switch (placement) {
      case 'lt':
      case 'rt':
      case 'tc': return newGap; break;
      case 'lb':
      case 'rb':
      case 'bc': return 'auto'; break;
      case 'lc':
      case 'rc':
      case 'center': return '50%'; break;
      case 'custom': return top; break;
      default: return 'auto'; break;
    }
  };
  const getBottom = (placement: string, gap: number) => {
    const newGap = gap !== undefined ? gap : defaultGap;
    switch (placement) {
      case 'lt':
      case 'rt':
      case 'tc':
      case 'lc':
      case 'rc':
      case 'center': return 'auto'; break;
      case 'lb':
      case 'rb':
      case 'bc': return newGap; break;
      default: return 'auto'; break;
    }
  };
  const getTransform = (placement: string) => {
    switch (placement) {
      case 'lt':
      case 'rt':
      case 'lb':
      case 'rb': return ''; break;
      case 'tc':
      case 'bc': return 'translateX(-50%)'; break;
      case 'lc':
      case 'rc': return 'translateY(-50%)'; break;
      case 'center': return 'translate(-50%,-50%)'; break;
      default: return ''; break;
    }
  };
  return (
    <div
      className={`land-affix-container ${disabled ? 'disabled' : ''} ${className}`}
      style={style}
      onClick={e => onClick?.(e)}
      onMouseOver={() => {
        if (disabled) return;
        setShow(true);
        setHide(true);
      }}
      onMouseLeave={() => {
        setShow(false);
        setHide(false);
      }}
      onWheel={e => e.stopPropagation()}
      {...restProps}
    >
      {children}
      {data?.map((i, idx) =>
        i.option ? (
          <div
            key={idx}
            style={{
              left: getLeft(i.placement, i.option.gap, i.option.left || 0),
              right: getRight(i.placement, i.option.gap),
              top: getTop(i.placement, i.option.gap, i.option.top || 0),
              bottom: getBottom(i.placement, i.option.gap),
              transform: getTransform(i.placement),
              opacity: getOpacity(i.option),
              zIndex: i.option.zIndex || 2,
              animation: (i.option.hoverShow && show) ? i.option.showAnimation : 'none',
              ...i.option.style,
            }}
            className={`land-affix-container-item ${i.option.hoverShow ? 'hoverShow' : ''} ${i.placement} absolute ${i.option.className ?? ''}`}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              i.option?.onClick?.(e);
            }}
          >
            {i.option?.content}
          </div>
        ) : null,
      )}
    </div>
  );
};

export default AffixContainer;
