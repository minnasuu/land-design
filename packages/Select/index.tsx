import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";
import './index.scss';
import Icon from "../Icon";
import PopOver from "../PopOver";
import { SelectProps } from "./props";
import Dropdown from "../Dropdown";
import Checkbox from "../Checkbox";

const Select: React.FC<SelectProps> = ({
  data,
  placeholder = "请选择",
  selected,
  selectedValues = [],
  multiple = false,
  separator = "，",
  maxDisplayCount,
  showCheckbox = false,
  customValueDisplay,
  type = 'border',
  tip,
  tipProps,
  disabled,
  onChange,
  open = false,
  className = "",
  style,
  ...restProps
}) => {
  const [newSelected, setNewSelected] = useState<string | number>(selected);
  const [newSelectedValues, setNewSelectedValues] =
    useState<(string | number)[]>(selectedValues);

  // 初始化状态
  useEffect(() => {
    if (selected !== newSelected) {
      setNewSelected(selected);
    }
  }, [selected, newSelected]);

  useEffect(() => {
    if (JSON.stringify(selectedValues) !== JSON.stringify(newSelectedValues)) {
      setNewSelectedValues(selectedValues);
    }
  }, [selectedValues, newSelectedValues]);

  // 使用 useMemo 优化选中项的计算
  const selectedLabels = useMemo(() => {
    if (!data) return [];
    return data
      .filter((item) => newSelectedValues.includes(item.key))
      .map((item) => item.label);
  }, [data, newSelectedValues]);

  const selectedItems = useMemo(() => {
    if (!data) return [];
    return data.filter((item) => newSelectedValues.includes(item.key));
  }, [data, newSelectedValues]);

  // 使用 useCallback 优化渲染显示内容函数
  const renderDisplayContent = useCallback(() => {
    if (!data) return placeholder;

    if (multiple) {
      if (selectedLabels.length === 0) {
        return placeholder;
      }

      if (maxDisplayCount !== undefined && selectedLabels.length > maxDisplayCount) {
        return `${selectedLabels.slice(0, maxDisplayCount).join(separator)}等${selectedLabels.length
          }个选项`;
      } else {
        return selectedLabels.join(separator);
      }
    } else {
      if (newSelected === undefined || newSelected === "") {
        return placeholder;
      }
      return data?.filter((itm) => itm.key === newSelected)[0]?.label;
    }
  }, [
    multiple,
    selectedLabels,
    maxDisplayCount,
    separator,
    newSelected,
    data,
    placeholder,
  ]);

  // 使用 useCallback 优化自定义显示内容处理函数
  const handleCustomDisplay = useCallback(() => {
    if (!customValueDisplay) {
      return renderDisplayContent();
    }

    if (multiple) {
      return customValueDisplay({
        values: newSelectedValues,
        items: selectedItems,
        isMultiple: true,
        placeholder,
      });
    } else {
      const selectedItem = data?.filter((itm) => itm.key === newSelected)[0];
      const selectedItems = selectedItem ? [selectedItem] : [];
      const selectedValues = selectedItem ? [selectedItem.key] : [];
      return customValueDisplay({
        values: selectedValues,
        items: selectedItems,
        isMultiple: false,
        placeholder,
      });
    }
  }, [
    customValueDisplay,
    multiple,
    newSelectedValues,
    selectedItems,
    newSelected,
    data,
    placeholder,
    renderDisplayContent,
  ]);

  // 使用 useCallback 优化选项点击处理函数
  const handleItemClick = useCallback(
    (item: any) => {
      if (item.disabled) return;

      if (multiple) {
        const newValues = [...newSelectedValues];
        const index = newValues.indexOf(item.key);

        if (index > -1) {
          // 取消选择
          newValues.splice(index, 1);
        } else {
          // 添加选择
          newValues.push(item.key);
        }

        setNewSelectedValues(newValues);
        const selectedItems =
          data?.filter((dataItem) => newValues.includes(dataItem.key)) || [];
        onChange?.(item, selectedItems);
      } else {
        setNewSelected(item.key);
        onChange?.(item);
      }
    },
    [multiple, newSelectedValues, data, onChange]
  );

  // 使用 useCallback 优化选项选中状态判断函数
  const isItemSelected = useCallback(
    (itemKey: string | number) => {
      if (multiple) {
        return newSelectedValues.includes(itemKey);
      } else {
        return newSelected === itemKey;
      }
    },
    [multiple, newSelectedValues, newSelected]
  );

  // 使用 useMemo 优化下拉内容
  const dropContent = useMemo(
    () => (
      <div className="land-select-list">
        {data && data.length > 0 ? (
          data?.map((item) => (
            <div
              className={`land-select-drop-item ${item.tip ? "hover-pop" : ""
                } ${isItemSelected(item.key) ? "selected" : ""} ${item.disabled ? "disabled" : ""
                }`}
              key={item.key}
              onClick={(e) => {
                e.stopPropagation();
                handleItemClick(item);
              }}
            >
              {multiple && showCheckbox && (
                <div className="land-select-checkbox">
                  <Checkbox
                    checked={isItemSelected(item.key)}
                    disabled={item.disabled}
                  />
                </div>
              )}
              {!showCheckbox && (
                <div className="land-select-results-item-label">
                  {item.label}
                </div>
              )}
              {item.iconTip && (
                <div
                  className={`land-select-item-info ${item.iconTip ? "hover-pop" : ""
                    }`}
                >
                  <Icon name="info-stroke" size={12} />
                  {item.iconTip && (
                    <PopOver
                      content={item.iconTip}
                      placement="right"
                      theme="dark"
                      style={{ marginLeft: "12px" }}
                    />
                  )}
                </div>
              )}
              {item.tip && (
                <PopOver
                  content={item.tip}
                  placement="right"
                  theme="dark"
                  style={{ marginLeft: "8px" }}
                />
              )}
            </div>
          ))
        ) : (
          <span className="land-select-drop-empty">暂无内容</span>
        )}
      </div>
    ),
    [data, isItemSelected, handleItemClick, multiple, showCheckbox]
  );

  // 使用 useMemo 优化显示内容
  const displayContent = useMemo(() => {
    if (!data) return placeholder;
    return customValueDisplay ? handleCustomDisplay() : renderDisplayContent();
  }, [
    customValueDisplay,
    handleCustomDisplay,
    renderDisplayContent,
    placeholder,
  ]);

  return (
    <div className={`land-select ${className}`} style={style}>
      <Dropdown trigger="click" disabled={disabled} content={dropContent} {...restProps}>
        <div
          className={`land-select-input ${type} ${disabled ? "disabled" : ""
            }`}
        >
          <p
            className={`${(
              multiple
                ? newSelectedValues.length > 0
                : newSelected !== undefined && newSelected !== ""
            )
              ? "land-select-trigger"
              : "land-select-placeholder"
              }`}
          >
            {displayContent}
          </p>
          <Icon
            name="arrow-triangle"
            className="land-select-value-arrow"
            size={16}
          />
          {tip && <PopOver targetBody content={tip} theme="dark" {...tipProps} />}
        </div>
      </Dropdown>
    </div>
  );
};

export default Select;
