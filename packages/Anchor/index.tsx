import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import './index.scss';
import { AnchorItem, AnchorProps } from './props';
import { motion } from 'motion/react';

const prefixCls = 'land-anchor';

const flattenKeys = (items: AnchorItem[]): string[] => {
  const result: string[] = [];
  const walk = (list: AnchorItem[]) => {
    list.forEach(item => {
      if (item.key) result.push(item.key);
      if (item.children) walk(item.children);
    });
  };
  walk(items);
  return result;
};

const Anchor: React.FC<AnchorProps> = ({
  items = [],
  onChange,
  offsetTop = 0,
  gap = 4,
  renderItem,
  style,
  className,
  getContainer = () => window,
}) => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [activeKey, setActiveKey] = useState<string>('');
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoverIndex, setHoverIndex] = useState<number>(-1);
  const [hovered, setHovered] = useState<boolean>(false);

  const getScrollContainer = useCallback(() => getContainer(), [getContainer]);

  const getScrollTop = useCallback((container: HTMLElement | Window) => {
    if (container === window) {
      return window.pageYOffset || document.documentElement.scrollTop;
    }
    return (container as HTMLElement).scrollTop;
  }, []);

  const setScrollTop = useCallback((container: HTMLElement | Window, top: number) => {
    if (container === window) {
      window.scrollTo({ top, behavior: 'smooth' });
    } else {
      (container as HTMLElement).scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  const keys = useMemo(() => flattenKeys(items), [items]);

  const handleClick = useCallback((key: string, index: number) => {
    setActiveKey(key);
    setActiveIndex(index);
    const targetElement = document.getElementById(key);
    const container = getScrollContainer();

    if (targetElement) {
      if (offsetTop === 0) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        const containerRect = container === window
          ? { top: 0, left: 0 }
          : (container as HTMLElement).getBoundingClientRect();
        const elementRect = targetElement.getBoundingClientRect();
        const elementPositionTop = elementRect.top - containerRect.top;
        const currentScrollTop = getScrollTop(container);
        const offsetPosition = currentScrollTop + elementPositionTop - offsetTop;
        setScrollTop(container, offsetPosition);
      }
    }
    onChange?.(key);
  }, [offsetTop, onChange, getScrollContainer, getScrollTop, setScrollTop]);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries.filter(entry =>
        entry.isIntersecting && entry.intersectionRatio >= 0.5
      );

      if (visibleEntries.length > 0) {
        const newActiveKey = visibleEntries[0].target.id;
        setActiveKey(newActiveKey);
        setActiveIndex(keys.indexOf(newActiveKey));
        onChange?.(newActiveKey);
      } else {
        entries.forEach(entry => {
          const id = entry.target.id;
          if (!entry.isIntersecting && activeKey === id) {
            const currentIndex = keys.indexOf(id);
            const previousKey = keys[currentIndex - 1] || null;
            setActiveKey(previousKey);
            setActiveIndex(keys.indexOf(previousKey));
            if (previousKey) onChange?.(previousKey);
          }
        });
      }
    };

    const container = getScrollContainer();
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0, 0.5, 1],
      root: container === window ? null : (container as HTMLElement),
      rootMargin: `-${offsetTop}px 0px 0px 0px`,
    });

    keys.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      keys.forEach(id => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [keys, activeKey, offsetTop, onChange, getScrollContainer]);

  const renderItems = (list: AnchorItem[], level = 0) => {
    return list.map((item, index) => {
      const isActive = activeKey === item.key;
      const defaultNode = (
        <a
          className={`${prefixCls}__link${isActive ? ` ${prefixCls}__link--active` : ''}`}
          aria-current={isActive ? 'location' : undefined}
        >
          {item.title}
        </a>
      );

      return (
        <li
          key={item.key}
          style={{
            textIndent: level > 0 ? `${level * 0.5}em` : 0,
            paddingTop: index > 0 ? `${gap}px` : 0,
          }}
          onClick={() => handleClick(item.key, index)}
          onMouseEnter={() => {
            if (index === activeIndex) return;
            setHovered(true);
            setHoverIndex(index);
          }}
          onMouseLeave={() => setHovered(false)}
        >
          {renderItem ? renderItem(item, index, isActive, defaultNode) : defaultNode}
          {item.children && renderItems(item.children, level + 1)}
        </li>
      );
    });
  };

  const containerClassName = useMemo(() => {
    return [prefixCls, renderItem && `${prefixCls}--custom`, className].filter(Boolean).join(' ');
  }, [className]);

  const indicatorY = (index: number) => index * 38 + index * gap;

  return (
    <div
      ref={anchorRef}
      className={containerClassName}
      style={style}
      role="navigation"
      aria-label="Anchor navigation"
    >
      <ol className={`${prefixCls}__list`}>
        {renderItems(items)}
      </ol>
      {!renderItem && (
        <>
          <motion.div
            className={`${prefixCls}__hover-indicator`}
            animate={{ opacity: hovered ? 1 : 0, y: indicatorY(hoverIndex) }}
            transition={{ type: 'spring', stiffness: 200, damping: 30, mass: 1, restDelta: 0.1 }}
          />
          <motion.div
            className={`${prefixCls}__active-indicator`}
            animate={{ y: indicatorY(activeIndex) }}
            transition={{ type: 'spring', stiffness: 200, damping: 30, mass: 1, restDelta: 0.1 }}
          />
        </>
      )}
    </div>
  );
};

export default Anchor;
