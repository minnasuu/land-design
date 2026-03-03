import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AudioProgressProps } from './props';

const AudioProgress: React.FC<AudioProgressProps> = ({
  progress = 0,
  buffered = 0,
  activeColor = 'var(--color-primary-6)',
  disabled = false,
  onChange,
  onDragStart,
  onDragEnd,
  className = '',
  style,
}) => {
  const barRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

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
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || disabled) return;

    const newProgress = calculateProgress(e.clientX);
    onChange?.(newProgress);
  }, [isDragging, disabled, calculateProgress, onChange]);

  // 鼠标松开
  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      onDragEnd?.();
    }
  }, [isDragging, onDragEnd]);

  // 全局鼠标事件监听
  useEffect(() => {
    if (!isDragging) return;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // 类名计算
  const barClassName = [
    'land-audio-progress',
    isHovering && 'land-audio-progress--hover',
    isDragging && 'land-audio-progress--dragging',
    disabled && 'land-audio-progress--disabled',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={barRef}
      className={barClassName}
      style={style}
      onMouseDown={handleMouseDown}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* 轨道 */}
      <div className="land-audio-progress__track">
        {/* 缓冲进度 */}
        <div
          className="land-audio-progress__buffered"
          style={{ transform: `scaleX(${buffered})` }}
        />
        {/* 播放进度 */}
        <div
          className="land-audio-progress__fill"
          style={{
            transform: `scaleX(${progress})`,
            backgroundColor: activeColor,
          }}
        />
      </div>

      {/* 滑块 */}
      <div
        className="land-audio-progress__thumb"
        style={{
          left: `${progress * 100}%`,
          backgroundColor: activeColor,
        }}
      />
    </div>
  );
};

export default AudioProgress;
