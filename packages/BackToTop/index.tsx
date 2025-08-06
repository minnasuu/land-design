import React, { useCallback, useEffect, useRef, useState } from 'react'
import { IconArrowLine } from '../Icon/Arrow';
import './index.scss'
import { BackToTopProps } from './props';

const BackToTop: React.FC<BackToTopProps> = ({
  fixed = true,
  target,
  visibleHeight = 600,
  offsetRight = 24,
  offsetBottom = 24,
  style,
  className = ""
}) => {
  const [show, setShow] = useState<boolean>(false)
  useEffect(() => {
    const container = fixed ? (target || document.body) : (target || ref.current?.parentNode as Element || null);
    if (!container) return;
    const handleContainerScroll = (e) => {
      if (e.target.scrollTop > visibleHeight) {
        setShow(true)
      } else {
        setShow(false)
      }
    }
    container.addEventListener('scroll', handleContainerScroll)
    return () => container.removeEventListener('scroll', handleContainerScroll)
  }, [])
  const ref = useRef<HTMLDivElement>(null);
  const handleClick = useCallback(() => {
    const container = fixed ? (target || document.body) : (target || ref.current?.parentNode as Element || null);
    if (!container) return;
    container.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  return (
    <div
      ref={ref}
      className={`land-back-to-top ${fixed ? 'fixed' : ''} ${show ? 'show' : 'hide'} ${className}`}
      style={{ right: `${offsetRight}px`, bottom: `${offsetBottom}px`, ...style }}
      onClick={handleClick}
    >
      <IconArrowLine className='land-back-to-top-icon' size={18} strokeWidth={3} />
    </div>
  )
}
export default BackToTop;

