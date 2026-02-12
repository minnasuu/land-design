import React, { useRef, useState, useCallback, useEffect } from 'react';
import './index.scss';
import type { SortableContainerProps, SortableItemData, DragHandleProps } from './props';

const prefixCls = 'land-sortable-container';

function SortableContainer<T extends SortableItemData = SortableItemData>({
  items,
  renderItem,
  onSortEnd,
  direction = 'vertical',
  itemHeight = 40,
  itemWidth = 120,
  gap = 8,
  scrollSpeed = 10,
  scrollThreshold = 32,
  ghostAutoZIndex = false,
  disabled = false,
  className = '',
  style,
}: SortableContainerProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);
  const lastMousePosRef = useRef(0);

  const [dragIndex, setDragIndex] = useState(-1);
  const [dragOverIndex, setDragOverIndex] = useState(-1);

  const isDragging = dragIndex >= 0;
  const isHorizontal = direction === 'horizontal';

  /** 主轴方向的尺寸 */
  const itemSize = isHorizontal ? itemWidth : itemHeight;
  /** 每项占位的步进（尺寸 + 间距） */
  const step = itemSize + gap;

  // ─── 拖拽开始 ───
  const handleDragStart = useCallback(
    (e: React.MouseEvent, index: number) => {
      if (disabled) return;
      e.preventDefault();
      e.stopPropagation();

      const container = containerRef.current;
      const ghost = ghostRef.current;
      if (!container || !ghost) return;

      const originEl = container.querySelector(`[data-sortable-index="${index}"]`) as HTMLElement;
      if (!originEl) return;

      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';

      const containerRect = container.getBoundingClientRect();
      const originRect = originEl.getBoundingClientRect();

      ghost.style.width = `${originRect.width}px`;
      ghost.style.height = `${originRect.height}px`;

      if (isHorizontal) {
        ghost.style.transform = `translateX(${originRect.left - containerRect.left + container.scrollLeft}px)`;
      } else {
        ghost.style.transform = `translateY(${originRect.top - containerRect.top + container.scrollTop}px)`;
      }

      setDragIndex(index);
      setDragOverIndex(index);
      lastMousePosRef.current = isHorizontal ? e.clientX : e.clientY;
    },
    [disabled, isHorizontal],
  );

  // ─── 拖拽结束（清理） ───
  const cleanupDrag = useCallback(() => {
    document.body.style.cursor = '';
    document.body.style.userSelect = '';

    const ghost = ghostRef.current;
    if (ghost) {
      ghost.style.transform = '';
      ghost.style.zIndex = '';
    }

    const container = containerRef.current;
    if (container) {
      const children = container.querySelectorAll(`[data-sortable-index]`);
      children.forEach((child) => {
        (child as HTMLElement).style.transform = '';
      });
    }

    if (dragIndex >= 0 && dragOverIndex >= 0 && dragIndex !== dragOverIndex) {
      onSortEnd?.({ fromIndex: dragIndex, toIndex: dragOverIndex });
    }

    setDragIndex(-1);
    setDragOverIndex(-1);
    lastMousePosRef.current = 0;
  }, [dragIndex, dragOverIndex, onSortEnd]);

  // ─── 拖拽移动 ───
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const container = containerRef.current;
      const ghost = ghostRef.current;
      if (!container || !ghost || dragIndex < 0) return;

      const containerRect = container.getBoundingClientRect();
      const ghostRect = ghost.getBoundingClientRect();
      const ghostSize = isHorizontal ? ghostRect.width : ghostRect.height;

      // ghost 跟随鼠标（主轴方向）
      const mousePos = isHorizontal ? e.clientX : e.clientY;
      const containerStart = isHorizontal ? containerRect.left : containerRect.top;
      const scrollOffset = isHorizontal ? container.scrollLeft : container.scrollTop;
      const scrollSize = isHorizontal ? container.scrollWidth : container.scrollHeight;

      const offset = mousePos - containerStart + scrollOffset - ghostSize / 2;
      const maxPos = scrollSize - ghostSize;
      const clampedPos = Math.max(0, Math.min(offset, maxPos));

      const translateProp = isHorizontal ? 'translateX' : 'translateY';
      ghost.style.transform = `${translateProp}(${clampedPos}px)`;

      // ghostAutoZIndex
      if (ghostAutoZIndex) {
        const originPos = dragIndex * step;
        const isBeforeOrigin = clampedPos + ghostSize / 2 < originPos + ghostSize / 2;
        ghost.style.zIndex = isBeforeOrigin ? '9999' : '0';
      }

      lastMousePosRef.current = mousePos;

      // 判断 ghost 中点对应的目标索引
      const ghostCenterPos = clampedPos + ghostSize / 2;
      let targetIndex = Math.round(ghostCenterPos / step);
      targetIndex = Math.max(0, Math.min(targetIndex, items.length - 1));

      // 更新其他项的位移
      const children = container.querySelectorAll(`[data-sortable-index]`);
      children.forEach((child) => {
        const el = child as HTMLElement;
        const idx = Number(el.dataset.sortableIndex);
        if (idx === dragIndex) return;

        let shift = 0;
        if (dragIndex < targetIndex) {
          if (idx > dragIndex && idx <= targetIndex) {
            shift = -step;
          }
        } else if (dragIndex > targetIndex) {
          if (idx >= targetIndex && idx < dragIndex) {
            shift = step;
          }
        }
        el.style.transform = shift ? `${translateProp}(${shift}px)` : '';
      });

      setDragOverIndex(targetIndex);

      // 边缘自动滚动
      const distToStart = isHorizontal
        ? e.clientX - containerRect.left
        : e.clientY - containerRect.top;
      const distToEnd = isHorizontal
        ? containerRect.right - e.clientX
        : containerRect.bottom - e.clientY;

      if (distToStart < scrollThreshold) {
        if (isHorizontal) {
          container.scrollLeft -= scrollSpeed;
        } else {
          container.scrollTop -= scrollSpeed;
        }
      } else if (distToEnd < scrollThreshold) {
        if (isHorizontal) {
          container.scrollLeft += scrollSpeed;
        } else {
          container.scrollTop += scrollSpeed;
        }
      }
    },
    [dragIndex, items.length, step, scrollSpeed, scrollThreshold, isHorizontal, ghostAutoZIndex],
  );

  const handleMouseUp = useCallback(() => {
    cleanupDrag();
  }, [cleanupDrag]);

  // ─── 绑定/解绑全局事件 ───
  useEffect(() => {
    if (dragIndex < 0) return;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragIndex, handleMouseMove, handleMouseUp]);

  // ─── 生成 dragHandleProps ───
  const makeDragHandleProps = useCallback(
    (index: number): DragHandleProps => ({
      onMouseDown: (e: React.MouseEvent) => handleDragStart(e, index),
      'data-sortable-handle': true,
      style: { cursor: disabled ? 'default' : 'grab' },
    }),
    [handleDragStart, disabled],
  );

  return (
    <div className={`${prefixCls} ${className}`} style={style}>
      <div
        ref={containerRef}
        className={`${prefixCls}__list ${isDragging ? `${prefixCls}__list--sorting` : ''} ${isHorizontal ? `${prefixCls}__list--horizontal` : ''}`}
        style={{ gap }}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            data-sortable-index={index}
            className={`${prefixCls}__item ${dragIndex === index ? `${prefixCls}__item--dragging` : ''}`}
          >
            {renderItem(
              item,
              { index, isDragging: dragIndex === index, isAnySorting: isDragging },
              makeDragHandleProps(index),
            )}
          </div>
        ))}
      </div>

      {/* ghost 层 */}
      <div
        ref={ghostRef}
        className={`${prefixCls}__ghost`}
        style={{ opacity: isDragging && dragIndex >= 0 ? 1 : 0 }}
      >
        {isDragging && items[dragIndex] && (
          renderItem(
            items[dragIndex],
            { index: dragIndex, isDragging: false, isAnySorting: true },
            makeDragHandleProps(dragIndex),
          )
        )}
      </div>
    </div>
  );
}

SortableContainer.displayName = 'SortableContainer';

export default SortableContainer;
