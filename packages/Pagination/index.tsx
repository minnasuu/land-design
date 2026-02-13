import { useEffect, useMemo, useState, useCallback } from 'react';
import './index.scss';
import Icon from '../Icon';
import { PaginationProps } from './props';
import NumberInput from '../NumberInput';

const prefixCls = 'land-pagination';

const Pagination: React.FC<PaginationProps> = ({
  current = 1,
  pageSize = 5,
  total = 1,
  showTotal = false,
  showInput = false,
  onChange,
  style,
  className,
}) => {
  const [innerCurrent, setInnerCurrent] = useState(current);

  useEffect(() => {
    setInnerCurrent(current);
  }, [current]);

  // 计算当前显示的页码范围
  const { pageData, curStart, isStartPreOut, isStartNextOut } = useMemo(() => {
    const maxVisible = pageSize;
    let start = 2;

    if (innerCurrent > maxVisible + 1) {
      start = Math.max(2, innerCurrent - Math.floor(maxVisible / 2));
    }
    if (start + maxVisible > total) {
      start = Math.max(2, total - maxVisible + 1);
    }

    const pageData = Array.from({ length: total })
      .map((_, idx) => ({ id: idx + 1 }))
      .filter((item) => item.id > 1 && item.id < total)
      .filter((item) => item.id >= start && item.id < start + maxVisible);

    return {
      pageData,
      curStart: start,
      isStartPreOut: start <= maxVisible * 2,
      isStartNextOut: total - start < maxVisible * 2,
    };
  }, [total, pageSize, innerCurrent]);

  const handlePageChange = useCallback(
    (page: number) => {
      if (page >= 1 && page <= total && page !== innerCurrent) {
        setInnerCurrent(page);
        onChange?.(page);
      }
    },
    [innerCurrent, total, onChange],
  );

  const handleQuickJump = useCallback(
    (direction: 'prev' | 'next') => {
      if (direction === 'prev' && !isStartPreOut) {
        handlePageChange(Math.max(1, curStart - pageSize));
      } else if (direction === 'next' && !isStartNextOut) {
        handlePageChange(Math.min(total, curStart + pageSize));
      }
    },
    [curStart, pageSize, isStartPreOut, isStartNextOut, total, handlePageChange],
  );

  const handleInputChange = useCallback(
    (value: number) => {
      if (!isNaN(value) && value >= 1 && value <= total) {
        setInnerCurrent(value);
        handlePageChange(value);
      }
    },
    [total, handlePageChange],
  );

  const rootClassName = useMemo(
    () => [prefixCls, className].filter(Boolean).join(' '),
    [className],
  );

  return (
    <div className={rootClassName} style={style}>
      {showTotal && <div className={`${prefixCls}__total`}>共{total}页</div>}

      {/* 上一页 */}
      <div
        className={`${prefixCls}__arrow${innerCurrent === 1 ? ` ${prefixCls}__arrow--disabled` : ''}`}
        onClick={() => innerCurrent > 1 && handlePageChange(innerCurrent - 1)}
      >
        <Icon name="arrow" className={`${prefixCls}__arrow-icon ${prefixCls}__arrow-icon--prev`} strokeWidth={4} />
      </div>

      <div className={`${prefixCls}__page`}>
        {/* 第一页 */}
        <div
          className={`${prefixCls}__item${innerCurrent === 1 ? ` ${prefixCls}__item--active` : ''}`}
          onClick={() => handlePageChange(1)}
        >
          1
        </div>

        {/* 前省略号 */}
        {pageData[0]?.id > 2 && (
          <div className={`${prefixCls}__ellipsis`} onClick={() => handleQuickJump('prev')}>
            <Icon name="more" size={16} />
            <Icon name="arrow-double" className={`${prefixCls}__ellipsis-icon ${prefixCls}__ellipsis-icon--prev`} size={16} />
          </div>
        )}

        {/* 中间页码 */}
        {pageData.map((item) => (
          <div
            key={item.id}
            className={`${prefixCls}__item${innerCurrent === item.id ? ` ${prefixCls}__item--active` : ''}`}
            onClick={() => handlePageChange(item.id)}
          >
            {item.id}
          </div>
        ))}

        {/* 后省略号 */}
        {pageData[pageData.length - 1]?.id < total - 1 && (
          <div className={`${prefixCls}__ellipsis`} onClick={() => handleQuickJump('next')}>
            <Icon name="more" size={16} />
            <Icon name="arrow-double" className={`${prefixCls}__ellipsis-icon ${prefixCls}__ellipsis-icon--next`} size={16} />
          </div>
        )}

        {/* 最后一页 */}
        <div
          className={`${prefixCls}__item${innerCurrent === total ? ` ${prefixCls}__item--active` : ''}`}
          onClick={() => handlePageChange(total)}
        >
          {total}
        </div>
      </div>

      {/* 下一页 */}
      <div
        className={`${prefixCls}__arrow${innerCurrent === total ? ` ${prefixCls}__arrow--disabled` : ''}`}
        onClick={() => innerCurrent < total && handlePageChange(innerCurrent + 1)}
      >
        <Icon name="arrow" className={`${prefixCls}__arrow-icon ${prefixCls}__arrow-icon--next`} strokeWidth={4} />
      </div>

      {/* 页码输入 */}
      {showInput && (
        <div className={`${prefixCls}__input`}>
          跳转至
          <NumberInput
            hideArrowButton
            value={innerCurrent}
            onChange={handleInputChange}
            className={`${prefixCls}__input-field`}
            textAlign="center"
          />
          / {total} 页
        </div>
      )}
    </div>
  );
};

export default Pagination;
