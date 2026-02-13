import React, { useMemo } from 'react';
import { DividerProps } from './props';
import './index.scss';

const prefixCls = 'land-divider';

const Divider: React.FC<DividerProps> = ({
  direction = 'horizontal',
  variant = 'solid',
  align = 'center',
  content,
  length = '100%',
  spacing = 0,
  dashLength = 10,
  dashGap = 5,
  className = '',
  style,
}) => {
  const isVertical = direction === 'vertical';
  const hasContent = content != null;

  const dividerClassName = useMemo(
    () =>
      [
        prefixCls,
        `${prefixCls}--${direction}`,
        `${prefixCls}--${variant}`,
        hasContent && `${prefixCls}--with-content`,
        hasContent && `${prefixCls}--align-${align}`,
        className,
      ]
        .filter(Boolean)
        .join(' '),
    [direction, variant, hasContent, align, className],
  );

  const cssVars = useMemo(
    () =>
      ({
        '--land-divider-length': length,
        '--land-divider-spacing': `${spacing}px`,
        '--land-divider-dash-length': `${dashLength}px`,
        '--land-divider-dash-gap': `${dashGap}px`,
        ...(isVertical
          ? { height: length, margin: `0 ${spacing}px` }
          : { width: length, margin: `${spacing}px 0` }),
        ...style,
      }) as React.CSSProperties,
    [length, spacing, dashLength, dashGap, isVertical, style],
  );

  return (
    <div className={dividerClassName} style={cssVars}>
      <div className={`${prefixCls}__line`} />
      {hasContent && (
        <>
          <div className={`${prefixCls}__content`}>{content}</div>
          <div className={`${prefixCls}__line`} />
        </>
      )}
    </div>
  );
};

export default Divider;
export * from './props';
