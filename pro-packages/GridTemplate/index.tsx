import React, { useMemo } from 'react'
import './index.scss';
import { GridTemplateProps } from './props';

const GridTemplate: React.FC<GridTemplateProps> = ({
  type = '1',
  ratio = 1,
  gap = 2,
  style,
  className = '',
  gridStyle,
  gridClassName = '',
  children
}) => {
  const num = useMemo(() => {
    const number = type?.split('-')[0];
    if (Number(number)) {
      return Number(number);
    }
    return 1;
  }, [type]);
  const direction = useMemo(() => {
    if (ratio > 1) {
      return 'horizontal';
    } else {
      if (ratio < 1) {
        return 'vertical';
      } else {
        return 'square';
      }
    }
  }, [ratio]);
  return (
    <div className={`land-grid-template ${direction} type-${type} ${className}`} style={{ gap, aspectRatio: ratio, ...style }}>
      {children}
      {!children && <>
        {Array.from({ length: num }).map((_i, index) => <div key={index} className={`land-grid-template-item ${gridClassName}`} style={gridStyle}></div>)}
      </>}
    </div>
  )
}

export default GridTemplate;
