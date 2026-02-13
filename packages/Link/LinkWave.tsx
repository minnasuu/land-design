import React from 'react';
import Link from '.';
import { LinkWaveProps } from './props';

const LinkWave: React.FC<LinkWaveProps> = ({
  animation = true,
  transform,
  children,
  underline,
  className = '',
  ...restProps
}) => {
  const waveClassName = [
    'land-link-wave',
    animation && 'land-link-wave--animation',
    transform && 'land-link-wave--transform',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // transform 模式需要 always 下划线作为基线
  const resolvedUnderline = transform ? 'always' : underline;

  return (
    <Link underline={resolvedUnderline} className={waveClassName} {...restProps}>
      {children}
      <div className="land-link-wave__line" />
    </Link>
  );
};

export default LinkWave;
