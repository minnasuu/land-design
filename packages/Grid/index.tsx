import React, { useMemo } from "react";
import { GridProps, GridType } from "./props";

const Grid: React.FC<GridProps> = ({
  type = GridType.Default,
  autoSize = 100,
  repeatNum = 1,
  gap = 8,
  columnGap,
  rowGap,
  children,
  style,
  className = ''
}) => {
  const gridStyle = useMemo(() => {
    let styleList = {
      display: 'grid',
      columnGap: columnGap || gap,
      rowGap: rowGap || gap,
    };
    if (type === GridType.Default) {
      return { ...styleList, ...style };
    } else {
      switch (type) {
        case GridType.ColumnFit: return { ...styleList, gridTemplateColumns: `repeat(auto-fit, minmax(${autoSize}px, 1fr))`, ...style }; break;
        case GridType.ColumnFill:
          return { ...styleList, gridTemplateColumns: `repeat(auto-fill, minmax(${autoSize}px, 1fr))`, ...style }; break;
        case GridType.RowFit:
          return { ...styleList, gridTemplateRows: `repeat(auto-fit, minmax(${autoSize}px, 1fr))`, ...style }; break;
        case GridType.RowFill:
          return { ...styleList, gridTemplateRows: `repeat(auto-fill, minmax(${autoSize}px, 1fr))`, ...style }; break;
        case GridType.ColumnRepeat:
          return { ...styleList, gridTemplateColumns: `repeat(${repeatNum}, 1fr)`, ...style }; break;
        case GridType.RowRepeat:
          return { ...styleList, gridTemplateRows: `repeat(${repeatNum}, 1fr)`, ...style }; break;
        default: return { ...styleList, ...style }; break;
      }
    }
  }, [type, autoSize, repeatNum, gap, style]);

  return <div className={`land-grid ${className}`} style={gridStyle}>{children}</div>;
};

export default Grid;
