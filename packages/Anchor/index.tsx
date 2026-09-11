import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import './index.scss';
import { AnchorItem, AnchorProps } from './props';
import { motion, useReducedMotion } from 'motion/react';

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
  const lastHoverIndexRef = useRef<number>(0);
  const shouldReduceMotion = useReducedMotion();

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

  const keyIndexMap = useMemo(() => {
    const map = new Map<string, number>();
    keys.forEach((key, i) => map.set(key, i));
    return map;
  }, [keys]);

  const activeKeyRef = useRef(activeKey);
  activeKeyRef.current = activeKey;
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  // 程序化滚动（点击锚点）期间抑制滚动驱动的高亮，避免高亮来回扫动
  const programmaticScrollRef = useRef(false);
  const scrollEndTimer = useRef<number | undefined>(undefined);

  // 根据滚动位置确定性地计算当前应高亮的锚点（单调推进，无来回抖动）
  const computeActive = useCallback(() => {
    const container = getScrollContainer();
    if (!container || keys.length === 0) return;

    const scrollTop = getScrollTop(container);
    const scrollHeight = container === window
      ? document.documentElement.scrollHeight
      : (container as HTMLElement).scrollHeight;
    const clientHeight = container === window
      ? window.innerHeight
      : (container as HTMLElement).clientHeight;
    // 相对容器可视顶部的偏移，无需叠加 scrollTop（getBoundingClientRect 已含滚动量）
    const containerRect = container === window
      ? { top: 0 }
      : (container as HTMLElement).getBoundingClientRect();

    const apply = (key: string) => {
      if (key === activeKeyRef.current) return;
      setActiveKey(key);
      setActiveIndex(keyIndexMap.get(key) ?? 0);
      onChangeRef.current?.(key);
    };

    // 已滚动到底部：强制选中最后一项，避免末项因高度不足始终无法越过触发线
    if (scrollTop + clientHeight >= scrollHeight - 2) {
      apply(keys[keys.length - 1]);
      return;
    }

    // 取“最后一个顶部已越过触发线”的区块，保证单调、不会回退
    let active = keys[0];
    for (const key of keys) {
      const el = document.getElementById(key);
      if (!el) continue;
      const elTopRelative = el.getBoundingClientRect().top - containerRect.top;
      if (elTopRelative <= offsetTop) {
        active = key;
      } else {
        break;
      }
    }
    apply(active);
  }, [keys, offsetTop, getScrollContainer, getScrollTop, keyIndexMap]);

  const handleClick = useCallback((key: string) => {
    setActiveKey(key);
    setActiveIndex(keyIndexMap.get(key) ?? 0);
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
      // 标记程序化滚动：滚动停止前保持当前高亮，待结束后同步，避免高亮来回扫动
      programmaticScrollRef.current = true;
      window.clearTimeout(scrollEndTimer.current);
      scrollEndTimer.current = window.setTimeout(() => {
        programmaticScrollRef.current = false;
        computeActive();
      }, 150);
    }
    onChange?.(key);
  }, [offsetTop, onChange, getScrollContainer, getScrollTop, setScrollTop, keyIndexMap, computeActive]);

  useEffect(() => {
    const container = getScrollContainer();
    if (!container) return;

    let ticking = false;
    const onScroll = () => {
      // 程序化滚动期间不驱动高亮，待滚动停止后再同步
      if (programmaticScrollRef.current) {
        window.clearTimeout(scrollEndTimer.current);
        scrollEndTimer.current = window.setTimeout(() => {
          programmaticScrollRef.current = false;
          computeActive();
        }, 150);
        return;
      }
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        computeActive();
        ticking = false;
      });
    };

    const target: HTMLElement | Window = container === window ? window : (container as HTMLElement);
    target.addEventListener('scroll', onScroll, { passive: true });
    computeActive(); // 初始化高亮

    return () => {
      target.removeEventListener('scroll', onScroll);
      window.clearTimeout(scrollEndTimer.current);
    };
  }, [computeActive, getScrollContainer]);

  const renderItems = (list: AnchorItem[], level = 0) => {
    return list.map((item, index) => {
      const isActive = activeKey === item.key;
      const flatIndex = keyIndexMap.get(item.key) ?? index;
      const defaultNode = (
        <a
          className={`${prefixCls}__link${isActive ? ` ${prefixCls}__link--active` : ''}`}
          aria-current={isActive ? 'location' : undefined}
          role="link"
          tabIndex={0}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleClick(item.key);
            }
          }}
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
          onClick={() => handleClick(item.key)}
          onMouseEnter={() => {
            if (flatIndex === activeIndex) return;
            lastHoverIndexRef.current = flatIndex;
            setHovered(true);
            setHoverIndex(flatIndex);
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

  const hoverTarget = hoverIndex >= 0 ? hoverIndex : lastHoverIndexRef.current;

  const hoverTransition = shouldReduceMotion
    ? { duration: 0.12, ease: 'easeOut' as const }
    : { type: 'spring' as const, duration: 0.25, bounce: 0 };

  const activeTransition = shouldReduceMotion
    ? { duration: 0.15, ease: 'easeOut' as const }
    : { type: 'spring' as const, duration: 0.4, bounce: 0.15 };

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
            initial={false}
            animate={{
              opacity: hovered ? 1 : 0,
              transform: `translateY(${indicatorY(hoverTarget)}px)`,
            }}
            transition={hoverTransition}
          />
          <motion.div
            className={`${prefixCls}__active-indicator`}
            initial={false}
            animate={{ transform: `translateY(${indicatorY(activeIndex)}px)` }}
            transition={activeTransition}
          />
        </>
      )}
    </div>
  );
};

export default Anchor;
