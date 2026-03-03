import React, { useMemo } from 'react';
import { AudioAnimationIconProps } from './props';

const AudioAnimationIcon: React.FC<AudioAnimationIconProps> = ({
  color = 'currentColor',
  size = 16,
  playing = true,
  barCount = 4,
  speed = 1,
  className = '',
  style,
}) => {
  // 类名计算
  const iconClassName = useMemo(() => {
    const classes = ['land-audio-animation'];
    if (playing) classes.push('land-audio-animation--playing');
    if (className) classes.push(className);
    return classes.join(' ');
  }, [playing, className]);

  // 条形宽度
  const barWidth = useMemo(() => Math.max(1, Math.round(size / 6)), [size]);

  // 生成条形
  const bars = useMemo(() => {
    return Array.from({ length: barCount }, (_, index) => {
      const delay = -(speed * (barCount - 1 - index) * 0.15);
      return (
        <div
          key={index}
          className="land-audio-animation__bar"
          style={{
            width: barWidth,
            backgroundColor: color,
            animationDuration: `${speed}s`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    });
  }, [barCount, barWidth, color, speed]);

  return (
    <div
      className={iconClassName}
      style={{
        width: size,
        height: size,
        ...style,
      }}
      aria-hidden="true"
    >
      {bars}
    </div>
  );
};

export default AudioAnimationIcon;
