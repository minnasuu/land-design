import React, { useState, useRef, useEffect, useCallback } from 'react'
import './index.scss';
import { TableProps } from './props';

const Table: React.FC<TableProps> = ({
  titleData,
  data = [],
  style,
  className = '',
  striped = false,
  crossHighlight = false,
  headFixed = false,
  fixedColumns = 0
}) => {
  const [hoveredCell, setHoveredCell] = useState<{ row: number; col: number } | null>(null);
  const [overlayStyle, setOverlayStyle] = useState<{ row: any; col: any }>({ row: {}, col: {} });
  const tableRef = useRef<HTMLTableElement>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  const handleCellMouseEnter = (rowIndex: number, colIndex: number) => {
    if (crossHighlight) {
      setHoveredCell({ row: rowIndex, col: colIndex });
    }
  };

  const handleCellMouseLeave = () => {
    if (crossHighlight) {
      setHoveredCell(null);
    }
  };

  // 计算蒙层位置的函数
  const calculateOverlayPosition = useCallback(() => {
    if (crossHighlight && hoveredCell && tableRef.current) {
      const table = tableRef.current;
      const headerRow = table.querySelector('thead tr');
      const bodyRows = table.querySelectorAll('tbody tr');

      if (headerRow && bodyRows.length > 0) {
        const headerHeight = headerRow.getBoundingClientRect().height;
        const rowHeight = bodyRows[0].getBoundingClientRect().height;

        // 计算列的位置和宽度
        let colLeft = 0;
        let colWidth = 0;

        // 遍历表头单元格，累加前面列的宽度
        for (let i = 0; i < headerRow.children.length; i++) {
          const cell = headerRow.children[i] as HTMLElement;
          const cellWidth = cell.getBoundingClientRect().width;

          if (i === hoveredCell.col) {
            colWidth = cellWidth;
            break;
          }
          colLeft += cellWidth;
        }

        setOverlayStyle({
          row: {
            top: `${headerHeight + hoveredCell.row * rowHeight}px`,
            height: `${rowHeight}px`
          },
          col: {
            left: `${colLeft}px`,
            width: `${colWidth}px`
          }
        });
      }
    }
  }, [crossHighlight, hoveredCell]);

  // 计算固定列位置的函数
  const calculateFixedColumnsPosition = useCallback(() => {
    if (fixedColumns > 0 && tableRef.current) {
      const table = tableRef.current;
      const headerRow = table.querySelector('thead tr');

      if (headerRow) {
        // 计算每列的left位置
        const fixedColumnsStyle: { [key: number]: { left: string } } = {};
        let currentLeft = 0;

        for (let i = 0; i < Math.min(fixedColumns, headerRow.children.length); i++) {
          const cell = headerRow.children[i] as HTMLElement;
          const cellWidth = cell.getBoundingClientRect().width;

          fixedColumnsStyle[i] = {
            left: `${currentLeft}px`
          };

          currentLeft += cellWidth;
        }

        // 将样式应用到CSS变量
        const root = table.parentElement;
        if (root) {
          Object.entries(fixedColumnsStyle).forEach(([index, style]) => {
            root.style.setProperty(`--fixed-col-${index}-left`, style.left);
          });
        }
      }
    }
  }, [fixedColumns]);

  // 监听固定列变化，重新计算位置
  useEffect(() => {
    calculateFixedColumnsPosition();
  }, [calculateFixedColumnsPosition]);

  // 组件挂载后初始化固定列位置
  useEffect(() => {
    if (fixedColumns > 0) {
      // 延迟一帧确保DOM已渲染
      requestAnimationFrame(() => {
        calculateFixedColumnsPosition();
      });
    }
  }, [fixedColumns, calculateFixedColumnsPosition]);

  // 监听hoveredCell变化，重新计算位置
  useEffect(() => {
    calculateOverlayPosition();
  }, [calculateOverlayPosition]);

  // 监听表格尺寸变化
  useEffect(() => {
    if ((crossHighlight || fixedColumns > 0) && tableRef.current) {
      // 创建ResizeObserver监听表格尺寸变化
      resizeObserverRef.current = new ResizeObserver(() => {
        if (hoveredCell) {
          calculateOverlayPosition();
        }
        if (fixedColumns > 0) {
          calculateFixedColumnsPosition();
        }
      });

      resizeObserverRef.current.observe(tableRef.current);

      return () => {
        if (resizeObserverRef.current) {
          resizeObserverRef.current.disconnect();
        }
      };
    }
  }, [crossHighlight, fixedColumns, hoveredCell, calculateOverlayPosition, calculateFixedColumnsPosition]);

  return (
    <div className={`land-table-wrapper ${crossHighlight ? 'land-table-wrapper--cross-highlight' : ''} ${headFixed ? 'land-table-wrapper--head-fixed' : ''} ${fixedColumns > 0 ? 'land-table-wrapper--fixed-columns' : ''} ${className}`} style={style}>
      <table ref={tableRef} className={`land-table ${striped ? 'land-table--striped' : ''} ${headFixed ? 'land-table--head-fixed' : ''} ${fixedColumns > 0 ? 'land-table--fixed-columns' : ''}`}>
        <thead>
          <tr>
            {titleData?.map((item1, index1) => (
              <th
                key={index1}
                className={index1 < fixedColumns ? 'land-table__cell--fixed' : ''}
              >
                {item1.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item2, index2) => (
            <tr key={index2}>
              {Object.values(item2).map((item3: any, index3) => (
                <td
                  key={index3}
                  data-row={index2}
                  data-col={index3}
                  className={index3 < fixedColumns ? 'land-table__cell--fixed' : ''}
                  onMouseEnter={() => handleCellMouseEnter(index2, index3)}
                  onMouseLeave={handleCellMouseLeave}
                >
                  {item3}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* 十字高亮蒙层 */}
      {crossHighlight && hoveredCell && (
        <>
          {/* 行高亮蒙层 */}
          <div
            className="land-table__row-overlay"
            style={overlayStyle.row}
          />
          {/* 列高亮蒙层 */}
          <div
            className="land-table__col-overlay"
            style={overlayStyle.col}
          />
        </>
      )}
    </div>
  );
};

export default Table;