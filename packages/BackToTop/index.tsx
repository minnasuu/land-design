import { useCallback, useEffect, useRef, useState } from 'react';
import { IconArrowLine } from '../Icon/Arrow';
import { BackToTopProps } from './props';
import './index.scss';

const BackToTop: React.FC<BackToTopProps> = ({
  fixed = true,
  target,
  visibleHeight = 600,
  offsetRight = 24,
  offsetBottom = 24,
  scrollBehavior = 'smooth',
  icon,
  disabled,
  onClick,
  onVisibilityChange,
  className,
  style,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const getContainer = useCallback((): Element | null => {
    if (target) return target;
    if (fixed) return document.documentElement;
    return (ref.current?.parentElement as Element) || null;
  }, [fixed, target]);

  useEffect(() => {
    const container = getContainer();
    if (!container) return;

    const scrollTarget = fixed && !target ? window : container;

    const handleScroll = () => {
      const scrollTop = scrollTarget === window
        ? window.scrollY
        : (container as Element).scrollTop;
      setVisible(scrollTop > visibleHeight);
    };

    // 初始检查
    handleScroll();

    scrollTarget.addEventListener('scroll', handleScroll, { passive: true });
    return () => scrollTarget.removeEventListener('scroll', handleScroll);
  }, [fixed, target, visibleHeight, getContainer]);

  useEffect(() => {
    onVisibilityChange?.(visible);
  }, [visible, onVisibilityChange]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (disabled) return;
    onClick?.(e);

    const container = getContainer();
    if (!container) return;

    if (fixed && !target) {
      window.scrollTo({ top: 0, behavior: scrollBehavior });
    } else {
      container.scrollTo({ top: 0, behavior: scrollBehavior });
    }
  }, [disabled, onClick, getContainer, fixed, target, scrollBehavior]);

  const rootCls = [
    'land-back-to-top',
    fixed && 'land-back-to-top--fixed',
    visible && 'land-back-to-top--visible',
    disabled && 'land-back-to-top--disabled',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={ref}
      className={rootCls}
      style={{ right: offsetRight, bottom: offsetBottom, ...style }}
      onClick={handleClick}
      aria-label="Back to top"
    >
      {icon || <IconArrowLine className="land-back-to-top__icon" size={18} strokeWidth={3} />}
    </div>
  );
};

export default BackToTop;
