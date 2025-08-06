import React, { useEffect, useMemo, useState, useCallback } from "react";
import './index.scss';
import Icon from "../Icon";
import { PaginationProps } from "./props";
import NumberInput from "../NumberInput";

const Pagination: React.FC<PaginationProps> = ({
  current = 1,
  pageSize = 1,
  total = 1,
  showTotal = false,
  showInput = false,
  onChange,
  style,
  className = '',
}) => {
  const [newCurrent, setNewCurrent] = useState<number>(current);

  // 同步外部current变化
  useEffect(() => {
    setNewCurrent(current);
  }, [current]);

  // 计算当前显示的页码范围
  const { pageData, curStart, isStartPreOut, isStartNextOut } = useMemo(() => {
    const maxVisiblePages = pageSize;
    let start = 2;

    // 计算当前应该显示的起始页码
    if (newCurrent > maxVisiblePages + 1) {
      start = Math.max(2, newCurrent - Math.floor(maxVisiblePages / 2));
    }

    // 确保不超过总页数
    if (start + maxVisiblePages > total) {
      start = Math.max(2, total - maxVisiblePages + 1);
    }

    const pageData = Array.from({ length: total })
      .map((_, idx) => ({ id: idx + 1 }))
      .filter(item => item.id > 1 && item.id < total)
      .filter(item => item.id >= start && item.id < start + maxVisiblePages);

    const isStartPreOut = start <= maxVisiblePages * 2;
    const isStartNextOut = total - start < maxVisiblePages * 2;

    return { pageData, curStart: start, isStartPreOut, isStartNextOut };
  }, [total, pageSize, newCurrent]);

  // 统一的事件处理函数
  const handlePageChange = useCallback((page: number) => {
    if (page >= 1 && page <= total && page !== newCurrent) {
      setNewCurrent(page);
      onChange?.(page);
    }
  }, [newCurrent, total, onChange]);

  // 处理上一页
  const handlePrevPage = useCallback(() => {
    if (newCurrent > 1) {
      handlePageChange(newCurrent - 1);
    }
  }, [newCurrent, handlePageChange]);

  // 处理下一页
  const handleNextPage = useCallback(() => {
    if (newCurrent < total) {
      handlePageChange(newCurrent + 1);
    }
  }, [newCurrent, total, handlePageChange]);

  // 处理快速跳转
  const handleQuickJump = useCallback((direction: 'prev' | 'next') => {
    if (direction === 'prev' && !isStartPreOut) {
      const targetPage = Math.max(1, curStart - pageSize);
      handlePageChange(targetPage);
    } else if (direction === 'next' && !isStartNextOut) {
      const targetPage = Math.min(total, curStart + pageSize);
      handlePageChange(targetPage);
    }
  }, [curStart, pageSize, isStartPreOut, isStartNextOut, total, handlePageChange]);

  // 处理输入框变化和确认
  const handleInputChange = useCallback((value: number) => {
    const page = value;
    if (!isNaN(page) && page >= 1 && page <= total) {
      setNewCurrent(page);
      // 自动切换到对应页面
      handlePageChange(page);
    }
  }, [total, handlePageChange]);

  // 阻止事件冒泡的通用处理
  const stopPropagation = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <div className={`land-pagination ${className}`} style={style}>
      {showTotal && <div className="land-pagination-total">共{total}页</div>}

      {/* 上一页箭头 */}
      <div
        onClick={(e) => {
          stopPropagation(e);
          handlePrevPage();
        }}
        className={`land-pagination-arrow-prev ${newCurrent === 1 ? "disabled" : ""}`}
      >
        <Icon name="arrow" className="land-pagination-arrow-prev-icon" strokeWidth={4} />
      </div>

      <div className="land-pagination-page">
        {/* 第一页 */}
        <div
          className={`land-pagination-num-item ${newCurrent === 1 ? "active" : ""}`}
          onClick={(e) => {
            stopPropagation(e);
            handlePageChange(1);
          }}
        >
          1
        </div>

        {/* 前省略号 */}
        {pageData[0]?.id > 2 && (
          <div
            onClick={(e) => {
              stopPropagation(e);
              handleQuickJump('prev');
            }}
            className="land-pagination-arrow-double-prev"
          >
            <Icon name="more" size={16} />
            <Icon name="arrow-double" className="land-pagination-arrow-double-prev-icon" size={24} />
          </div>
        )}

        {/* 中间页码 */}
        {pageData?.map((item) => (
          <div
            key={item.id}
            className={`land-pagination-num-item ${newCurrent === item.id ? "active" : ""}`}
            onClick={(e) => {
              stopPropagation(e);
              handlePageChange(item.id);
            }}
          >
            {item.id}
          </div>
        ))}

        {/* 后省略号 */}
        {pageData[pageData?.length - 1]?.id < total - 1 && (
          <div
            onClick={(e) => {
              stopPropagation(e);
              handleQuickJump('next');
            }}
            className="land-pagination-arrow-double-next"
          >
            <Icon name="more" size={16} />
            <Icon name="arrow-double" className="land-pagination-arrow-double-next-icon" size={24} />
          </div>
        )}

        {/* 最后一页 */}
        <div
          className={`land-pagination-num-item ${newCurrent === total ? "active" : ""}`}
          onClick={(e) => {
            stopPropagation(e);
            handlePageChange(total);
          }}
        >
          {total}
        </div>
      </div>

      {/* 下一页箭头 */}
      <div
        onClick={(e) => {
          stopPropagation(e);
          handleNextPage();
        }}
        className={`land-pagination-arrow-next ${newCurrent === total ? "disabled" : ""}`}
      >
        <Icon name="arrow" className="land-pagination-arrow-next-icon" strokeWidth={4} />
      </div>

      {/* 自定义页码输入 */}
      {showInput && (
        <div className="land-pagination-input">
          跳转至
          <NumberInput
            hideArrowButton
            value={newCurrent}
            onChange={handleInputChange}
            className="land-pagination-page-input"
            textAlign="center"
          />
          / {total} 页
        </div>
      )}
    </div>
  );
};

export default Pagination;
