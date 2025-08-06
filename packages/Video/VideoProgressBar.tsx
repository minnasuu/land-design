import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { VideoProgressBarProps } from './props';

const VideoProgressBar: React.FC<VideoProgressBarProps> = ({
  curPercentage = 0,
  bufferPercentage = 0,
  activeBg = 'var(--color-primary-6)',
  onClick,
  onMove,
  onMouseLeave,
  onDragStart,
  onDragEnd,
}) => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>();
  const [hover, setHover] = useState<boolean>(false);
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const [moveLeft, setMoveLeft] = useState<number>(0);

  useEffect(() => {
    const callback: ResizeObserverCallback = (entries) => {
      entries.forEach(entry => {
        setWidth(entry.contentRect.width)
      });
    };
    const observer = new ResizeObserver(callback);
    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handleBarMove = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    const rect = e.currentTarget.getBoundingClientRect();
    if (rect) {
      const percentage = (e.clientX - rect.left) / rect.width;
      setMoveLeft(percentage);

      if (isDrag) {
        onClick?.(percentage, e);
      }
      onMove?.(percentage, e.clientX - rect.left, rect.width, e);
    }
  }, [isDrag, onClick, onMove]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDrag(true);
    onDragStart?.();

    // 立即触发点击事件
    const rect = e.currentTarget.getBoundingClientRect();
    if (rect) {
      const percentage = (e.clientX - rect.left) / rect.width;
      onClick?.(percentage, e);
    }
  }, [onClick, onDragStart]);

  const handleMouseUp = useCallback(() => {
    if (isDrag) {
      setIsDrag(false);
      onDragEnd?.();
    }
  }, [isDrag, onDragEnd]);

  const handleMouseLeave = useCallback((e: React.MouseEvent) => {
    setMoveLeft(0);
    setHover(false);
    if (isDrag) {
      setIsDrag(false);
      onDragEnd?.();
    }
    onMouseLeave?.(e);
  }, [isDrag, onDragEnd, onMouseLeave]);

  const handleMouseOver = useCallback(() => {
    setHover(true);
  }, []);

  // 添加全局鼠标事件监听，确保拖拽时鼠标移出组件也能正确处理
  useEffect(() => {
    if (isDrag) {
      const handleGlobalMouseUp = () => {
        setIsDrag(false);
        onDragEnd?.();
      };

      document.addEventListener('mouseup', handleGlobalMouseUp);
      return () => {
        document.removeEventListener('mouseup', handleGlobalMouseUp);
      };
    }
  }, [isDrag, onDragEnd]);

  return (
    <StyledVideoProgressBar ref={progressBarRef} className={`land-video-progress-bar ${hover ? 'hover' : ''}`} >
      <div
        className='land-video-progress-bar-list'
        onMouseMove={handleBarMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOver}
      >
        <div className='land-video-progress-bar default'></div>
        <div className='land-video-progress-bar buffer' style={{ transform: `scaleX(${bufferPercentage})` }}></div>
        <div className='land-video-progress-bar hover' style={{ transform: `scaleX(${moveLeft})` }}></div>
        <div className='land-video-progress-bar marker' style={{ transform: `scaleX(${curPercentage})`, backgroundColor: activeBg }}></div>
      </div>
      <div className='land-video-progress-bar-thumb' style={{ transform: `translateX(${curPercentage * (width || 0)}px)`, backgroundColor: activeBg }}></div>
    </StyledVideoProgressBar>
  )
}

const StyledVideoProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 0.25rem;
  border-radius: 2px;
  .land-video-progress-bar-list{
    width: 100%;
    height: 100%;
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.2s linear;
  }
  .land-video-progress-bar.default{
    background-color: rgba(255,255,255,0.36);
  }
  .land-video-progress-bar.buffer{
    background-color: rgba(255,255,255,0.6);
  }
  .land-video-progress-bar.hover{
    background-color: rgba(255,255,255,0.8);
  }
  .land-video-progress-bar{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform-origin: left center;
    pointer-events: none;
  }
  .land-video-progress-bar-thumb{
    position: absolute;
    left: -0.5rem;
    top: -0.375rem;
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    opacity: 0;
    transition: opacity 0.2s linear;
    pointer-events: none;
  }
  &.hover{
    .land-video-progress-bar-list{
      transform: scaleY(2);
    }
    .land-video-progress-bar-thumb{
        opacity: 1;
      }
  }
`;

export default VideoProgressBar;
