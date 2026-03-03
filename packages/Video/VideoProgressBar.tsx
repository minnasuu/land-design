import React, { useCallback, useEffect, useRef, useState } from 'react';
import { VideoProgressBarProps } from './props';
import './index.scss';

const VideoProgressBar: React.FC<VideoProgressBarProps> = ({
  progress = 0,
  buffered = 0,
  activeColor = 'white',
  bufferedColor = 'rgba(255,255,255,0.5)',
  disabled = false,
  onChange,
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
  onDragStart,
  onDragEnd,
  isExternalDragging = false,
}) => {
  const barRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [hoverProgress, setHoverProgress] = useState(0);

  // 监听容器宽度变化
  useEffect(() => {
    if (!barRef.current) return;

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setContainerWidth(entry.contentRect.width);
      });
    });

    observer.observe(barRef.current);
    return () => observer.disconnect();
  }, []);

  // 计算进度值
  const calculateProgress = useCallback((clientX: number) => {
    if (!barRef.current) return 0;

    const rect = barRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    return Math.max(0, Math.min(1, x / rect.width));
  }, []);

  // 鼠标按下
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (disabled) return;

    e.preventDefault();
    setIsDragging(true);
    onDragStart?.();

    const newProgress = calculateProgress(e.clientX);
    onChange?.(newProgress);
  }, [disabled, calculateProgress, onChange, onDragStart]);

  // 鼠标移动
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (disabled) return;

    const rect = barRef.current?.getBoundingClientRect();
    if (!rect) return;

    const newProgress = calculateProgress(e.clientX);
    setHoverProgress(newProgress);

    if (isDragging) {
      onChange?.(newProgress);
    }

    onMouseMove?.(newProgress, e.clientX - rect.left, rect.width);
  }, [disabled, isDragging, calculateProgress, onChange, onMouseMove]);

  // 鼠标进入
  const handleMouseEnter = useCallback((e: React.MouseEvent) => {
    if (disabled) return;

    setIsHovering(true);

    const rect = barRef.current?.getBoundingClientRect();
    if (!rect) return;

    const newProgress = calculateProgress(e.clientX);
    setHoverProgress(newProgress);
    onMouseEnter?.(newProgress, e.clientX - rect.left, rect.width);
  }, [disabled, calculateProgress, onMouseEnter]);

  // 鼠标离开 - 如果有外部拖动状态，不结束拖拽
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setHoverProgress(0);

    // 如果外部正在拖动，不结束拖拽状态（由父组件控制）
    if (!isExternalDragging && isDragging) {
      setIsDragging(false);
      onDragEnd?.();
    }

    onMouseLeave?.();
  }, [isDragging, isExternalDragging, onDragEnd, onMouseLeave]);

  // 鼠标松开
  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      onDragEnd?.();
    }
  }, [isDragging, onDragEnd]);

  // 全局鼠标松开监听
  useEffect(() => {
    if (!isDragging) return;

    const handleGlobalMouseUp = () => {
      setIsDragging(false);
      onDragEnd?.();
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    return () => document.removeEventListener('mouseup', handleGlobalMouseUp);
  }, [isDragging, onDragEnd]);

  // 计算类名 - 当外部拖动时也保持拖动状态样式
  const barClassName = [
    'land-video-progress',
    isHovering && 'land-video-progress--hover',
    (isDragging || isExternalDragging) && 'land-video-progress--dragging',
    disabled && 'land-video-progress--disabled',
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={barRef}
      className={barClassName}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
    >
      {/* 轨道容器 */}
      <div className="land-video-progress__track">
        {/* 背景轨道 */}
        <div className="land-video-progress__bg" />

        {/* 缓冲进度 */}
        <div
          className="land-video-progress__buffered"
          style={{
            transform: `scaleX(${buffered})`,
            backgroundColor: bufferedColor,
          }}
        />

        {/* 悬停进度 */}
        <div
          className="land-video-progress__hover"
          style={{ transform: `scaleX(${hoverProgress})` }}
        />

        {/* 播放进度 */}
        <div
          className="land-video-progress__fill"
          style={{
            transform: `scaleX(${progress})`,
            backgroundColor: activeColor,
          }}
        />
      </div>

      {/* 滑块 */}
      <div
        className="land-video-progress__thumb"
        style={{
          transform: `translateX(${progress * containerWidth}px)`,
          backgroundColor: activeColor,
        }}
      />
    </div>
  );
};

export default VideoProgressBar;
