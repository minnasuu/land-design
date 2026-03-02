import React, { Fragment, useMemo, useCallback } from "react";
import './index.scss';
import Divider from "../Divider";
import PopOver from "../PopOver";
import Icon from "../Icon";
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
  switchDisabled = false,
  style,
}) => {
  // ─── 类名计算 ───
  const rootClassName = useMemo(() => {
    return [prefixCls, className].filter(Boolean).join(' ');
  }, [className]);

  // ─── 事件处理 ───
  const handleItemClick = useCallback((item: TabsItemType, e: React.MouseEvent) => {
    e.stopPropagation();
    if (item.disabled || switchDisabled) return;
    onChange?.(item.key, item);
  }, [switchDisabled, onChange]);

  // ─── 判断分割线是否隐藏 ───
  const isDividerHidden = useCallback((index: number, itemKey: string) => {
    const prevKey = data[index - 1]?.key;
    return checked === itemKey || checked === prevKey;
  }, [checked, data]);

  // ─── 获取 item 类名 ───
  const getItemClassName = useCallback((item: TabsItemType) => {
    const isSelected = checked === item.key;
    const isDisabled = item.disabled || switchDisabled;

    return [
      `${prefixCls}__item`,
      isSelected && `${prefixCls}__item--selected`,
      isSelected && activeClassName,
      !isSelected && isDisabled && `${prefixCls}__item--disabled`,
    ].filter(Boolean).join(' ');
  }, [checked, switchDisabled, activeClassName]);

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
            <span className={`${prefixCls}__item-label`}>{item.label}</span>
            {item.showIcon && (
              <div className={`${prefixCls}__item-icon hover-pop`}>
                <Icon name="info-stroke" size={16} />
                <PopOver content={item.iconTip} theme="dark" />
              </div>
            )}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default Tabs;
