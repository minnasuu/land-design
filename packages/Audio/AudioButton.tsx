import React, { useMemo } from 'react';
import Icon from '../Icon';
import Loading from '../Loading';
import AudioAnimationIcon from './AudioAnimationIcon';
import { AudioButtonProps, BUTTON_SIZE_MAP } from './props';

const AudioButton: React.FC<AudioButtonProps> = ({
  playing = false,
  size = 'medium',
  color = 'var(--color-text-2)',
  disabled = false,
  animated = true,
  loading = false,
  onClick,
  className = '',
  style,
}) => {
  // 计算实际尺寸
  const actualSize = useMemo(() => {
    if (typeof size === 'number') return size;
    return BUTTON_SIZE_MAP[size] || BUTTON_SIZE_MAP.medium;
  }, [size]);

  // 图标尺寸
  const iconSize = useMemo(() => Math.round(actualSize * 0.625), [actualSize]);

  // 类名计算
  const buttonClassName = useMemo(() => {
    const classes = ['land-audio-button'];
    if (playing) classes.push('land-audio-button--playing');
    if (disabled) classes.push('land-audio-button--disabled');
    if (loading) classes.push('land-audio-button--loading');
    if (className) classes.push(className);
    return classes.join(' ');
  }, [playing, disabled, loading, className]);

  // 点击处理
  const handleClick = (e: React.MouseEvent) => {
    if (disabled || loading) return;
    onClick?.(e);
  };

  // 渲染图标
  const renderIcon = () => {
    if (loading) {
      return <Loading size={iconSize} color={color} strokeSize={2} />;
    }

    if (playing) {
      if (animated) {
        return <AudioAnimationIcon size={iconSize} color={color} playing />;
      }
      return <Icon name="video-play" size={iconSize} color={color} />;
    }

    return <Icon name="video-pause" size={iconSize + 4} color={color} />;
  };

  return (
    <button
      type="button"
      className={buttonClassName}
      style={{
        width: actualSize,
        height: actualSize,
        ...style,
      }}
      onClick={handleClick}
      disabled={disabled}
      aria-label={playing ? '暂停' : '播放'}
    >
      {renderIcon()}
    </button>
  );
};

export default AudioButton;
