import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import './index.scss';
import {
  TableProps,
  TableColumn,
  TableSortState,
  LegacyTableProps,
  SortOrder,
} from './props';

// ==================== 工具函数 ====================

/**
 * 获取行的唯一标识
 */
function getRowKey<T>(
  record: T,
  index: number,
  rowKey: string | ((record: T, index: number) => React.Key) = 'key'
): React.Key {
  if (typeof rowKey === 'function') {
    return rowKey(record, index);
  }
  return (record as any)[rowKey] ?? index;
}

/**
 * 获取单元格值
 */
function getCellValue<T>(record: T, dataIndex: string): any {
  if (!dataIndex) return undefined;

  // 支持嵌套路径，如 'user.name'
  const keys = dataIndex.split('.');
  let value: any = record;

  for (const key of keys) {
    if (value == null) return undefined;
    value = value[key];
  }

  return value;
}

/**
 * 转换旧版属性到新版
 */
function convertLegacyProps(props: LegacyTableProps): Partial<TableProps> {
  const { titleData, data, headFixed, fixedColumns, ...rest } = props;

  const columns: TableColumn[] | undefined = titleData?.map((item) => ({
    key: item.value,
    title: item.title,
    dataIndex: item.value,
  }));

  return {
    ...rest,
    columns: columns || [],
    dataSource: data,
    stickyHeader: headFixed,
  };
}

/**
 * 检测是否为旧版属性
 */
function isLegacyProps(props: any): props is LegacyTableProps {
  return 'titleData' in props || 'data' in props || 'headFixed' in props;
}

// ==================== 主组件 ====================

function Table<T extends Record<string, any> = any>(
  props: TableProps<T> | LegacyTableProps
): React.ReactElement {
  // 兼容旧版属性
  const normalizedProps = isLegacyProps(props)
    ? { ...convertLegacyProps(props), ...props } as TableProps<T>
    : props as TableProps<T>;

  const {
    // 基础属性
    columns = [],
    dataSource = [],
    rowKey = 'key',
    title,
    footer,
    summary,
    empty = '暂无数据',
    showHeader = true,

    // 样式属性
    size = 'medium',
    bordered = true,
    striped = false,
    crossHighlight = false,
    crossHighlightColor,
    rowHover = true,

    // 固定属性
    stickyHeader = false,
    stickyHeaderOffset = 0,
    scroll,

    // 功能属性
    // rowSelection, // TODO: 未来实现
    // pagination,   // TODO: 未来实现
    // expandable,   // TODO: 未来实现
    loading = false,
    loadingText,

    // 事件属性
    onRow,
    // onHeaderRow, // TODO: 未来实现
    onCell,
    onHeaderCell,
    onSortChange,
    onChange,

    // 通用属性
    className = '',
    style,

    // 兼容旧版
    fixedColumns = 0,
  } = normalizedProps as TableProps<T> & LegacyTableProps;

  // ─── State ───
  const [hoveredCell, setHoveredCell] = useState<{ row: number; col: number } | null>(null);
  const [overlayStyle, setOverlayStyle] = useState<{ row: React.CSSProperties; col: React.CSSProperties }>({
    row: {},
    col: {},
  });
  const [sortState, setSortState] = useState<TableSortState>({ field: undefined, order: null });

  // ─── Refs ───
  const tableRef = useRef<HTMLTableElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  // ─── 可见列 ───
  const visibleColumns = useMemo(() => {
    return columns.filter((col) => !col.hidden);
  }, [columns]);

  // ─── 固定列计算 ───
  const leftFixedColumns = useMemo(() => {
    const left: TableColumn<T>[] = [];

    visibleColumns.forEach((col, index) => {
      // 兼容旧版 fixedColumns 属性
      if (fixedColumns > 0 && index < fixedColumns) {
        left.push({ ...col, fixed: 'left' });
      } else if (col.fixed === 'left' || col.fixed === true) {
        left.push(col);
      }
    });

    return left;
  }, [visibleColumns, fixedColumns]);

  // ─── 排序后的数据 ───
  const sortedData = useMemo(() => {
    if (!sortState.field || !sortState.order) {
      return dataSource;
    }

    const column = columns.find((col) => col.dataIndex === sortState.field);
    if (!column?.sorter) {
      return dataSource;
    }

    const sorter = typeof column.sorter === 'object' ? column.sorter.compare : undefined;
    const sorted = [...dataSource].sort((a, b) => {
      const aVal = getCellValue(a, sortState.field!);
      const bVal = getCellValue(b, sortState.field!);

      if (sorter) {
        const result = sorter(a, b);
        return sortState.order === 'descend' ? -result : result;
      }

      // 默认排序
      if (aVal === bVal) return 0;
      if (aVal == null) return 1;
      if (bVal == null) return -1;

      const result = aVal > bVal ? 1 : -1;
      return sortState.order === 'descend' ? -result : result;
    });

    return sorted;
  }, [dataSource, sortState, columns]);

  // ─── 十字高亮处理 ───
  const handleCellMouseEnter = useCallback(
    (rowIndex: number, colIndex: number) => {
      if (crossHighlight) {
        setHoveredCell({ row: rowIndex, col: colIndex });
      }
    },
    [crossHighlight]
  );

  const handleCellMouseLeave = useCallback(() => {
    if (crossHighlight) {
      setHoveredCell(null);
    }
  }, [crossHighlight]);

  // ─── 计算十字高亮蒙层位置 ───
  const calculateOverlayPosition = useCallback(() => {
    if (!crossHighlight || !hoveredCell || !tableRef.current) return;

    const table = tableRef.current;
    const headerRow = table.querySelector('thead tr');
    const bodyRows = table.querySelectorAll('tbody tr');

    if (!headerRow || bodyRows.length === 0) return;

    const headerHeight = headerRow.getBoundingClientRect().height;
    const rowHeight = bodyRows[0].getBoundingClientRect().height;

    // 计算列的位置和宽度
    let colLeft = 0;
    let colWidth = 0;

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
        height: `${rowHeight}px`,
      },
      col: {
        left: `${colLeft}px`,
        width: `${colWidth}px`,
      },
    });
  }, [crossHighlight, hoveredCell]);

  // ─── 计算固定列位置 ───
  const calculateFixedColumnsPosition = useCallback(() => {
    if (leftFixedColumns.length === 0 || !tableRef.current) return;

    const table = tableRef.current;
    const headerRow = table.querySelector('thead tr');

    if (!headerRow) return;

    let currentLeft = 0;
    const root = wrapperRef.current;

    if (!root) return;

    for (let i = 0; i < Math.min(leftFixedColumns.length, headerRow.children.length); i++) {
      const cell = headerRow.children[i] as HTMLElement;
      const cellWidth = cell.getBoundingClientRect().width;
      root.style.setProperty(`--fixed-col-${i}-left`, `${currentLeft}px`);
      currentLeft += cellWidth;
    }
  }, [leftFixedColumns.length]);

  // ─── 排序处理 ───
  const handleSort = useCallback(
    (column: TableColumn<T>) => {
      if (!column.sorter) return;

      const newOrder: SortOrder =
        sortState.field !== column.dataIndex
          ? 'ascend'
          : sortState.order === 'ascend'
          ? 'descend'
          : sortState.order === 'descend'
          ? null
          : 'ascend';

      const newSortState: TableSortState = {
        field: newOrder ? column.dataIndex : undefined,
        order: newOrder,
      };

      setSortState(newSortState);
      onSortChange?.(newSortState);

      onChange?.({
        data: sortedData,
        sorter: newSortState,
      });
    },
    [sortState, onSortChange, onChange, sortedData]
  );

  // ─── Effects ───
  useEffect(() => {
    calculateOverlayPosition();
  }, [calculateOverlayPosition]);

  useEffect(() => {
    calculateFixedColumnsPosition();
  }, [calculateFixedColumnsPosition]);

  useEffect(() => {
    if (leftFixedColumns.length > 0) {
      requestAnimationFrame(calculateFixedColumnsPosition);
    }
  }, [leftFixedColumns.length, calculateFixedColumnsPosition]);

  useEffect(() => {
    if ((crossHighlight || leftFixedColumns.length > 0) && tableRef.current) {
      resizeObserverRef.current = new ResizeObserver(() => {
        if (hoveredCell) {
          calculateOverlayPosition();
        }
        if (leftFixedColumns.length > 0) {
          calculateFixedColumnsPosition();
        }
      });

      resizeObserverRef.current.observe(tableRef.current);

      return () => {
        resizeObserverRef.current?.disconnect();
      };
    }
  }, [crossHighlight, leftFixedColumns.length, hoveredCell, calculateOverlayPosition, calculateFixedColumnsPosition]);

  // ─── 渲染表头单元格 ───
  const renderHeaderCell = (column: TableColumn<T>, colIndex: number) => {
    const isFixed = column.fixed === 'left' || column.fixed === true || (fixedColumns > 0 && colIndex < fixedColumns);
    const isSortable = !!column.sorter;
    const isSorted = sortState.field === column.dataIndex;

    const headerCellProps = onHeaderCell?.(column, colIndex) || {};

    const cellClassName = [
      'land-table__header-cell',
      isFixed && 'land-table__cell--fixed',
      isSortable && 'land-table__header-cell--sortable',
      isSorted && `land-table__header-cell--sorted-${sortState.order}`,
      column.headerClassName,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <th
        key={column.key || column.dataIndex || colIndex}
        className={cellClassName}
        style={{
          width: column.width,
          minWidth: column.minWidth,
          maxWidth: column.maxWidth,
          textAlign: column.align,
          ...column.headerStyle,
        }}
        onClick={isSortable ? () => handleSort(column) : undefined}
        {...headerCellProps}
      >
        <div className="land-table__header-content">
          {column.renderHeader ? column.renderHeader(column) : column.title}
          {isSortable && (
            <span className="land-table__sorter">
              <span
                className={`land-table__sorter-icon land-table__sorter-icon--ascend ${
                  isSorted && sortState.order === 'ascend' ? 'land-table__sorter-icon--active' : ''
                }`}
              >
                ▲
              </span>
              <span
                className={`land-table__sorter-icon land-table__sorter-icon--descend ${
                  isSorted && sortState.order === 'descend' ? 'land-table__sorter-icon--active' : ''
                }`}
              >
                ▼
              </span>
            </span>
          )}
        </div>
      </th>
    );
  };

  // ─── 渲染数据单元格 ───
  const renderDataCell = (record: T, rowIndex: number, column: TableColumn<T>, colIndex: number) => {
    const isFixed = column.fixed === 'left' || column.fixed === true || (fixedColumns > 0 && colIndex < fixedColumns);
    const value = getCellValue(record, column.dataIndex);

    const cellProps = onCell?.(record, rowIndex, column, colIndex) || {};

    const cellClassName = [
      'land-table__cell',
      isFixed && 'land-table__cell--fixed',
      column.ellipsis && 'land-table__cell--ellipsis',
      column.className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <td
        key={column.key || column.dataIndex || colIndex}
        className={cellClassName}
        style={{
          textAlign: column.align,
          ...column.cellStyle,
        }}
        data-row={rowIndex}
        data-col={colIndex}
        onMouseEnter={() => handleCellMouseEnter(rowIndex, colIndex)}
        onMouseLeave={handleCellMouseLeave}
        {...cellProps}
      >
        {column.render ? column.render(value, record, rowIndex) : value}
      </td>
    );
  };

  // ─── 渲染数据行 ───
  const renderRow = (record: T, rowIndex: number) => {
    const key = getRowKey(record, rowIndex, rowKey);
    const rowProps = onRow?.(record, rowIndex) || {};

    const rowClassName = [
      'land-table__row',
      striped && rowIndex % 2 === 1 && 'land-table__row--striped',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <tr key={key} className={rowClassName} {...rowProps}>
        {visibleColumns.map((column, colIndex) => renderDataCell(record, rowIndex, column, colIndex))}
      </tr>
    );
  };

  // ─── 构建类名 ───
  const wrapperClassName = [
    'land-table-wrapper',
    `land-table-wrapper--${size}`,
    bordered && 'land-table-wrapper--bordered',
    crossHighlight && 'land-table-wrapper--cross-highlight',
    stickyHeader && 'land-table-wrapper--sticky-header',
    leftFixedColumns.length > 0 && 'land-table-wrapper--fixed-columns',
    loading && 'land-table-wrapper--loading',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const tableClassName = [
    'land-table',
    striped && 'land-table--striped',
    rowHover && 'land-table--row-hover',
    stickyHeader && 'land-table--sticky-header',
    leftFixedColumns.length > 0 && 'land-table--fixed-columns',
  ]
    .filter(Boolean)
    .join(' ');

  // ─── 渲染标题 ───
  const renderTitle = () => {
    if (!title) return null;
    return (
      <div className="land-table__title">
        {typeof title === 'function' ? title() : title}
      </div>
    );
  };

  // ─── 渲染表尾 ───
  const renderFooter = () => {
    if (!footer) return null;
    return (
      <div className="land-table__footer">
        {typeof footer === 'function' ? footer(sortedData) : footer}
      </div>
    );
  };

  // ─── 渲染空状态 ───
  const renderEmpty = () => {
    return (
      <tr className="land-table__empty-row">
        <td colSpan={visibleColumns.length} className="land-table__empty-cell">
          {empty}
        </td>
      </tr>
    );
  };

  // ─── 渲染加载状态 ───
  const renderLoading = () => {
    if (!loading) return null;
    return (
      <div className="land-table__loading">
        <div className="land-table__loading-spinner" />
        {loadingText && <div className="land-table__loading-text">{loadingText}</div>}
      </div>
    );
  };

  // ─── 构建滚动样式 ───
  const scrollStyle: React.CSSProperties = {};
  if (scroll?.x) {
    scrollStyle.overflowX = 'auto';
    if (typeof scroll.x === 'number') {
      scrollStyle.minWidth = scroll.x;
    }
  }
  if (scroll?.y) {
    scrollStyle.overflowY = 'auto';
    scrollStyle.maxHeight = scroll.y;
  }

  return (
    <div
      ref={wrapperRef}
      className={wrapperClassName}
      style={{
        ...style,
        ...scrollStyle,
        ...(crossHighlightColor ? { '--table-cross-highlight-color': crossHighlightColor } as React.CSSProperties : {}),
        ...(stickyHeaderOffset ? { '--table-sticky-header-offset': `${stickyHeaderOffset}px` } as React.CSSProperties : {}),
      }}
    >
      {renderTitle()}

      <table ref={tableRef} className={tableClassName}>
        {showHeader && (
          <thead className="land-table__header">
            <tr className="land-table__header-row">
              {visibleColumns.map((column, colIndex) => renderHeaderCell(column, colIndex))}
            </tr>
          </thead>
        )}

        <tbody className="land-table__body">
          {sortedData.length > 0 ? sortedData.map(renderRow) : renderEmpty()}
        </tbody>

        {summary && (
          <tfoot className="land-table__summary">
            {summary(sortedData)}
          </tfoot>
        )}
      </table>

      {/* 十字高亮蒙层 */}
      {crossHighlight && hoveredCell && (
        <>
          <div className="land-table__row-overlay" style={overlayStyle.row} />
          <div className="land-table__col-overlay" style={overlayStyle.col} />
        </>
      )}

      {renderLoading()}
      {renderFooter()}
    </div>
  );
}

export default Table;
