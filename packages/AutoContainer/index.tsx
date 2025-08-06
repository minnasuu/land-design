import React, { CSSProperties, useEffect, useMemo, useRef, useState } from 'react'
import { AutoContainerProps } from './props';
import './index.scss';
const AutoContainer: React.FC<AutoContainerProps> = ({
  ratio = 1,
  children,
  contentClassName = '',
  contentStyle,
  style,
  className = '',
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [wrapRatio, setWrapRatio] = useState<number>(1);
  useEffect(() => {
    if (!wrapRef.current) return;
    const callback: ResizeObserverCallback = (entries) => {
      entries.forEach(entry => {
        setWrapRatio(entry.contentRect.width / entry.contentRect.height);
      })
    }
    const observer = new ResizeObserver(callback);
    observer.observe(wrapRef.current);
  }, []);
  const isHorizontal = useMemo(() => ratio > wrapRatio, [ratio, wrapRatio]);
  return (
    <div
      ref={wrapRef}
      className={`land-auto-container ${className}`}
      style={style}
    >
      <div
        className={contentClassName}
        style={{
          width: isHorizontal ? '100%' : 'auto',
          height: isHorizontal ? 'auto' : '100%',
          aspectRatio: `${ratio}`,
          ...contentStyle,
        } as CSSProperties}
      >{children}</div>
    </div>
  );
};

export default AutoContainer;
