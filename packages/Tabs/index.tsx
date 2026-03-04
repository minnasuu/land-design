import React, { Fragment, useMemo, useCallback } from "react";
import './index.scss';
import Divider from "../Divider";
import { TabsProps, TabsItemType } from "./props";

const prefixCls = 'land-tabs';

const Tabs: React.FC<TabsProps> = ({
  width = "100%",
  checked,
  data = [],
  useDivider = false,
  onChange,
  activeClassName = "",
  className = "",
  disabled = false,
  style,
}) => {
  // ─── 类名计算 ───
  const rootClassName = useMemo(() => {
    return [
      prefixCls,
      disabled && `${prefixCls}--disabled`,
      className,
    ].filter(Boolean).join(' ');
  }, [disabled, className]);

  // ─── 事件处理 ───
  const handleItemClick = useCallback((item: TabsItemType, e: React.MouseEvent) => {
    e.stopPropagation();
    if (item.disabled || disabled) return;
    onChange?.(item.key, item);
  }, [disabled, onChange]);

  // ─── 判断分割线是否隐藏 ───
  const isDividerHidden = useCallback((index: number, itemKey: string) => {
    const prevKey = data[index - 1]?.key;
    return checked === itemKey || checked === prevKey;
  }, [checked, data]);

  // ─── 获取 item 类名 ───
  const getItemClassName = useCallback((item: TabsItemType) => {
    const isSelected = checked === item.key;
    const isDisabled = item.disabled || disabled;

    return [
      `${prefixCls}__item`,
      isSelected && `${prefixCls}__item--selected`,
      isSelected && activeClassName,
      !isSelected && isDisabled && `${prefixCls}__item--disabled`,
    ].filter(Boolean).join(' ');
  }, [checked, disabled, activeClassName]);

  // ─── 渲染 label 内容 ───
  const renderLabel = useCallback((item: TabsItemType) => {
    const isSelected = checked === item.key;
    if (typeof item.label === 'function') {
      return item.label(item, isSelected);
    }
    return item.label;
  }, [checked]);

  return (
    <div className={rootClassName} style={{ width, ...style }}>
      {data.map((item, index) => (
        <Fragment key={item.key}>
          {useDivider && index !== 0 && (
            <Divider
              direction="vertical"
              spacing={0}
              length="14px"
              className={`${prefixCls}__divider ${isDividerHidden(index, item.key) ? `${prefixCls}__divider--hidden` : ''}`}
            />
          )}
          <div
            className={getItemClassName(item)}
            onClick={(e) => handleItemClick(item, e)}
          >
            <span className={`${prefixCls}__item-label`}>{renderLabel(item)}</span>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default Tabs;
