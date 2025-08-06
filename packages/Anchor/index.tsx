import React, { CSSProperties, useEffect, useMemo, useRef, useState, useCallback } from "react";
import "./index.scss";
import { AnchorItemType, AnchorProps } from "./props";
import { motion } from "motion/react";

const Anchor: React.FC<AnchorProps> = ({
  data = [],
  onChange,
  offsetTop = 0,
  gap = 4,
  showIndicator = true,
  indicatorStyle,
  style,
  className,
  getContainer = () => window,
}) => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [activeID, setActiveID] = useState<string>('');
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const getScrollContainer = useCallback(() => {
    return getContainer();
  }, [getContainer]);

  const getScrollTop = useCallback((container: HTMLElement | Window) => {
    if (container === window) {
      return window.pageYOffset || document.documentElement.scrollTop;
    }
    return (container as HTMLElement).scrollTop;
  }, []);

  const setScrollTop = useCallback((container: HTMLElement | Window, top: number) => {
    if (container === window) {
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    } else {
      (container as HTMLElement).scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  }, []);

  const ids = useMemo(() => {
    const flattenIds: string[] = [];
    const flattenItems = (items: AnchorItemType[]) => {
      items.forEach(item => {
        if (item.key) {
          flattenIds.push(item.key);
        }
        if (item.children) {
          flattenItems(item.children);
        }
      });
    };
    flattenItems(data);
    return flattenIds;
  }, [data]);

  const handleClick = useCallback((key: string, index: number) => {
    setActiveID(key);
    setActiveIndex(index);
    const targetElement = document.getElementById(key);
    console.log('targetElement', targetElement);

    const container = getScrollContainer();

    if (targetElement) {
      if (offsetTop === 0) {
        // 当未设置 offsetTop 时，使用 scrollIntoView
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        // 当设置了 offsetTop 时，使用自定义滚动逻辑
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
        entry.isIntersecting &&
        entry.intersectionRatio >= 0.5
      );

      if (visibleEntries.length > 0) {
        const firstVisibleEntry = visibleEntries[0];
        const newActiveID = firstVisibleEntry.target.id;
        setActiveID(newActiveID);
        setActiveIndex(ids.indexOf(newActiveID));
        onChange?.(newActiveID);
      } else {
        entries.forEach(entry => {
          const id = entry.target.id;
          if (!entry.isIntersecting && activeID === id) {
            const currentIndex = ids.indexOf(id);
            const previousID = ids[currentIndex - 1] || null;
            setActiveID(previousID);
            setActiveIndex(ids.indexOf(previousID));
            if (previousID) {
              onChange?.(previousID);
            }
          }
        });
      }
    };

    const container = getScrollContainer();
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0, 0.5, 1],
      root: container === window ? null : container as HTMLElement,
      rootMargin: `-${offsetTop}px 0px 0px 0px`
    });

    ids.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      ids.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [ids, activeID, offsetTop, onChange, getScrollContainer]);

  const renderAnchorItems = (items: AnchorItemType[], level = 0) => {
    return items.map((item, index) => (
      <li
        key={item.key}
        style={{ textIndent: level > 0 ? `${level * 0.5}em` : 0, paddingTop: index > 0 ? `${gap}px` : 0 }}
        onMouseEnter={() => {
          if (index === activeIndex) return;
          setHover(true); setHoverIndex(index)
        }}
        onMouseLeave={() => setHover(false)}
      >
        <a
          className={`land-anchor-link ${activeID === item.key ? 'active' : ''}`}
          onClick={() => handleClick(item.key, index)}
          aria-current={activeID === item.key ? 'location' : undefined}
        >
          {item.title}
        </a>
        {item.children && renderAnchorItems(item.children, level + 1)}
      </li>
    ));
  };
  const [hoverIndex, setHoverIndex] = useState<number>(-1);
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      ref={anchorRef}
      className={`land-anchor ${className || ''}`}
      style={style}
      role="navigation"
      aria-label="Anchor navigation"
    >
      <ol className="land-anchor-list">
        {renderAnchorItems(data)}
      </ol>
      <motion.div
        className='land-anchor-hover-indicator'
        animate={{
          opacity: hover ? 1 : 0,
          y: hoverIndex * 38 + (hoverIndex) * gap
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 30, mass: 1, restDelta: 0.1 }}
        style={indicatorStyle}
      />
      {showIndicator && (
        <motion.div
          className="land-anchor-active-indicator"
          animate={{
            y: activeIndex * 38 + (activeIndex) * gap
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 30, mass: 1, restDelta: 0.1 }}
          style={indicatorStyle}
        />
      )}
    </div>
  );
};


export default Anchor;
