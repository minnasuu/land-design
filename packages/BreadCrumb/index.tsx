import { useEffect, useRef, useState, useMemo } from 'react';
import BreadCrumbItem from './BreadCrumbItem';
import { BreadCrumbProps } from './props';
import './index.scss';

const prefixCls = 'land-bread-crumb';

const BreadCrumb: React.FC<BreadCrumbProps> = ({
  items = [],
  current,
  showMask = false,
  hoverPreview = false,
  onChange,
  style,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLeft, setIsLeft] = useState(false);
  const [isRight, setIsRight] = useState(true);

  useEffect(() => {
    if (!showMask || !containerRef.current) return;
    const el = containerRef.current;

    const handleScroll = () => {
      setIsLeft(el.scrollLeft <= el.clientWidth - el.scrollWidth);
      setIsRight(el.scrollLeft >= 0);
    };

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, [showMask]);

  const rootClassName = useMemo(() => {
    return [prefixCls, className].filter(Boolean).join(' ');
  }, [className]);

  return (
    <div className={rootClassName} style={style}>
      {showMask && (
        <div className={`${prefixCls}__mask ${prefixCls}__mask--start${isLeft ? ` ${prefixCls}__mask--hidden` : ''}`} />
      )}
      <div ref={containerRef} className={`${prefixCls}__container`}>
        {[...items].reverse().map((item, index) => (
          <BreadCrumbItem
            key={item.value}
            index={index}
            item={item}
            active={current === item.value}
            hoverPreview={hoverPreview}
            onChange={() => onChange?.(item)}
          />
        ))}
      </div>
      {showMask && (
        <div className={`${prefixCls}__mask ${prefixCls}__mask--end${isRight ? ` ${prefixCls}__mask--hidden` : ''}`} />
      )}
    </div>
  );
};

export default BreadCrumb;
