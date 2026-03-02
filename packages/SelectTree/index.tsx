// ============================================================================
// SelectTree 组件
// @description 树形选择器组件，支持单选和多选模式
// @author Land Design System
// ============================================================================

import React, { useState, useCallback, useMemo, useEffect } from 'react'
import Dropdown from '../Dropdown'
import PopOver from '../PopOver'
import {
  SelectTreeOption,
  SelectTreeProps,
  selectTreeDefaultProps,
  typeToVariantMap,
  SelectTreeType,
} from './props'
import Icon from '../Icon'
import Checkbox from '../Checkbox'
import './index.scss'

const prefixCls = 'land-select-tree';

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 工具函数
// ─────────────────────────────────────────────────────────────────────────────

/** 获取所有子节点的 key */
const getAllChildrenKeys = (item: SelectTreeOption): string[] => {
  const keys: string[] = [];
  if (item.children) {
    item.children.forEach(child => {
      keys.push(child.key);
      keys.push(...getAllChildrenKeys(child));
    });
  }
  return keys;
};

/** 获取所有子节点 */
const getAllChildren = (item: SelectTreeOption): SelectTreeOption[] => {
  const children: SelectTreeOption[] = [];
  if (item.children) {
    item.children.forEach(child => {
      children.push(child);
      children.push(...getAllChildren(child));
    });
  }
  return children;
};

/** 根据 key 在树中查找选项 */
const findOptionByKey = (options: SelectTreeOption[], key: string): SelectTreeOption | undefined => {
  for (const option of options) {
    if (option.key === key) return option;
    if (option.children) {
      const found = findOptionByKey(option.children, key);
      if (found) return found;
    }
  }
  return undefined;
};

/** 根据 keys 数组获取选项数组 */
const getOptionsByKeys = (options: SelectTreeOption[], keys: string[]): SelectTreeOption[] => {
  return keys.map(key => findOptionByKey(options, key)).filter(Boolean) as SelectTreeOption[];
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 组件实现
// ─────────────────────────────────────────────────────────────────────────────

const SelectTree: React.FC<SelectTreeProps> = ({
  // 核心属性（新）
  options,
  value,
  values,
  defaultValue,
  defaultValues,
  // 核心属性（旧，兼容）
  data,
  selected,
  selectedValues: legacySelectedValues,
  // 通用属性
  multiple = selectTreeDefaultProps.multiple,
  placeholder = selectTreeDefaultProps.placeholder,
  // 外观属性
  variant,
  type,
  size = selectTreeDefaultProps.size,
  disabled = selectTreeDefaultProps.disabled,
  width,
  // 多选属性
  separator = selectTreeDefaultProps.separator,
  maxDisplayCount = selectTreeDefaultProps.maxDisplayCount,
  // 提示属性
  tip,
  tipProps,
  // 自定义渲染
  customValueDisplay,
  renderOption,
  emptyContent = selectTreeDefaultProps.emptyContent,
  // 样式属性
  className = '',
  style,
  dropdownClassName,
  dropdownStyle,
  // 事件属性
  onChange,
  onExpand,
}) => {
  // ─── 计算有效数据源 ───
  const effectiveOptions = useMemo(() => options ?? data ?? [], [options, data]);

  // ─── 计算有效变体 ───
  const effectiveVariant = useMemo(() => {
    if (variant) return variant;
    if (type) return typeToVariantMap[type as SelectTreeType] ?? 'outline';
    return 'outline';
  }, [variant, type]);

  // ─── 受控/非受控状态处理 ───
  // 单选值
  const [innerValue, setInnerValue] = useState<string | undefined>(() => {
    if (value !== undefined) return value;
    if (selected !== undefined && selected !== null && selected.key !== undefined) return selected.key;
    return defaultValue;
  });

  // 多选值
  const [innerValues, setInnerValues] = useState<string[]>(() => {
    if (values !== undefined) return values;
    if (legacySelectedValues !== undefined && legacySelectedValues !== null && Array.isArray(legacySelectedValues)) {
      return legacySelectedValues.filter(item => item != null).map(item => item.key);
    }
    return defaultValues ?? [];
  });

  // 同步受控属性
  useEffect(() => {
    if (value !== undefined) {
      setInnerValue(value);
    } else if (selected !== undefined && selected !== null && selected.key !== undefined) {
      setInnerValue(selected.key);
    }
  }, [value, selected]);

  useEffect(() => {
    if (values !== undefined) {
      setInnerValues(values);
    } else if (legacySelectedValues !== undefined && legacySelectedValues !== null && Array.isArray(legacySelectedValues)) {
      setInnerValues(legacySelectedValues.filter(item => item != null).map(item => item.key));
    }
  }, [values, legacySelectedValues]);

  // ─── 展开路径状态 ───
  const [expandedPath, setExpandedPath] = useState<string[]>([]);

  // ─── 获取选中的选项数据 ───
  const selectedOptions = useMemo(() => {
    if (multiple) {
      return getOptionsByKeys(effectiveOptions, innerValues);
    }
    if (innerValue) {
      const found = findOptionByKey(effectiveOptions, innerValue);
      return found ? [found] : [];
    }
    return [];
  }, [multiple, innerValues, innerValue, effectiveOptions]);

  // ─── 渲染显示内容 ───
  const renderDisplayContent = useCallback(() => {
    if (multiple) {
      const selectedLabels = selectedOptions.map(item => item.label);
      if (selectedLabels.length === 0) {
        return <span className={`${prefixCls}__placeholder`}>{placeholder}</span>;
      }

      if (selectedLabels.length <= maxDisplayCount!) {
        return <span className={`${prefixCls}__value`}>{selectedLabels.join(separator)}</span>;
      }
      return (
        <span className={`${prefixCls}__value`}>
          {selectedLabels.slice(0, maxDisplayCount).join(separator)}等{selectedLabels.length}个选项
        </span>
      );
    } else {
      const selectedOption = selectedOptions[0];
      if (!selectedOption) {
        return <span className={`${prefixCls}__placeholder`}>{placeholder}</span>;
      }
      return <span className={`${prefixCls}__value`}>{selectedOption.label}</span>;
    }
  }, [multiple, selectedOptions, placeholder, separator, maxDisplayCount]);

  // ─── 自定义显示处理 ───
  const handleCustomDisplay = useCallback(() => {
    if (!customValueDisplay) {
      return renderDisplayContent();
    }

    return customValueDisplay({
      values: multiple ? innerValues : (innerValue ? [innerValue] : []),
      items: selectedOptions,
      isMultiple: !!multiple,
      placeholder: placeholder!,
    });
  }, [customValueDisplay, renderDisplayContent, multiple, innerValues, innerValue, selectedOptions, placeholder]);

  // ─── 获取当前层级数据 ───
  const getCurrentLevelData = useCallback((level: number): SelectTreeOption[] => {
    if (level === 0) return effectiveOptions;

    let currentData = effectiveOptions;
    for (let i = 0; i < level; i++) {
      const pathKey = expandedPath[i];
      const parentItem = currentData.find(item => item.key === pathKey);
      if (parentItem?.children) {
        currentData = parentItem.children;
      } else {
        return [];
      }
    }
    return currentData;
  }, [effectiveOptions, expandedPath]);

  // ─── 判断是否选中 ───
  const isItemSelected = useCallback((item: SelectTreeOption): boolean => {
    if (multiple) {
      return innerValues.includes(item.key);
    }
    return innerValue === item.key;
  }, [multiple, innerValues, innerValue]);

  // ─── 判断是否半选 ───
  const isItemIndeterminate = useCallback((item: SelectTreeOption): boolean => {
    if (!multiple || !item.children) return false;

    const childrenKeys = getAllChildrenKeys(item);
    const selectedChildrenCount = childrenKeys.filter(key => innerValues.includes(key)).length;

    return selectedChildrenCount > 0 && selectedChildrenCount < childrenKeys.length;
  }, [multiple, innerValues]);

  // ─── 更新父节点状态 ───
  const updateParentStates = useCallback((keys: string[]): string[] => {
    let updatedKeys = [...keys];

    const getAllParentNodes = (items: SelectTreeOption[]): SelectTreeOption[] => {
      const parents: SelectTreeOption[] = [];
      items.forEach(item => {
        if (item.children && item.children.length > 0) {
          parents.push(item);
          parents.push(...getAllParentNodes(item.children));
        }
      });
      return parents;
    };

    const allParentNodes = getAllParentNodes(effectiveOptions);

    allParentNodes.forEach(parent => {
      const childrenKeys = getAllChildrenKeys(parent);
      const selectedChildrenCount = childrenKeys.filter(key => updatedKeys.includes(key)).length;
      const isParentSelected = updatedKeys.includes(parent.key);

      if (selectedChildrenCount === childrenKeys.length && !isParentSelected) {
        updatedKeys.push(parent.key);
      } else if (selectedChildrenCount === 0 && isParentSelected) {
        updatedKeys = updatedKeys.filter(key => key !== parent.key);
      }
    });

    return updatedKeys;
  }, [effectiveOptions]);

  // ─── 处理标签点击 ───
  const handleLabelClick = useCallback((item: SelectTreeOption, level: number) => {
    if (item.children && item.children.length > 0) {
      const isCurrentlyExpanded = expandedPath[level] === item.key;
      const newPath = isCurrentlyExpanded
        ? expandedPath.slice(0, level)
        : [...expandedPath.slice(0, level), item.key];
      
      setExpandedPath(newPath);
      onExpand?.(newPath);
    } else {
      if (multiple) {
        const isSelected = isItemSelected(item);
        let newKeys = isSelected
          ? innerValues.filter(key => key !== item.key)
          : [...innerValues, item.key];

        newKeys = updateParentStates(newKeys);
        setInnerValues(newKeys);

        const newOptions = getOptionsByKeys(effectiveOptions, newKeys);
        onChange?.(newKeys, item, newOptions);
      } else {
        setInnerValue(item.key);
        onChange?.(item.key, item, [item]);
      }
    }
  }, [expandedPath, multiple, isItemSelected, innerValues, onChange, updateParentStates, effectiveOptions, onExpand]);

  // ─── 处理复选框变化 ───
  const handleCheckedChange = useCallback((item: SelectTreeOption) => {
    if (!multiple) return;

    let newKeys = [...innerValues];
    const isCurrentlySelected = isItemSelected(item);

    if (isCurrentlySelected) {
      const keysToRemove = [item.key, ...getAllChildrenKeys(item)];
      newKeys = newKeys.filter(key => !keysToRemove.includes(key));
    } else {
      const itemsToAdd = [item, ...getAllChildren(item)];
      itemsToAdd.forEach(itemToAdd => {
        if (!newKeys.includes(itemToAdd.key)) {
          newKeys.push(itemToAdd.key);
        }
      });
    }

    newKeys = updateParentStates(newKeys);
    setInnerValues(newKeys);

    const newOptions = getOptionsByKeys(effectiveOptions, newKeys);
    onChange?.(newKeys, item, newOptions);
  }, [multiple, innerValues, isItemSelected, updateParentStates, effectiveOptions, onChange]);

  // ─── 处理下拉关闭 ───
  const handleDropdownClose = useCallback(() => {
    setExpandedPath([]);
  }, []);

  // ─── 计算属性 ───
  const currentLevelData = useMemo(() => getCurrentLevelData(0), [getCurrentLevelData]);

  const subsequentLevels = useMemo(() => {
    return expandedPath.map((_, index) => {
      const level = index + 1;
      const levelData = getCurrentLevelData(level);
      return { level, levelData };
    }).filter(({ levelData }) => levelData.length > 0);
  }, [expandedPath, getCurrentLevelData]);

  // ─── 根容器类名 ───
  const rootClassName = useMemo(() => {
    return [
      prefixCls,
      `${prefixCls}--${size}`,
      className,
    ].filter(Boolean).join(' ');
  }, [size, className]);

  // ─── 触发器类名 ───
  const triggerClassName = useMemo(() => {
    return [
      `${prefixCls}__trigger`,
      `${prefixCls}__trigger--${effectiveVariant}`,
      disabled && `${prefixCls}__trigger--disabled`,
    ].filter(Boolean).join(' ');
  }, [effectiveVariant, disabled]);

  // ─── 下拉面板类名 ───
  const panelClassName = useMemo(() => {
    return [
      `${prefixCls}__dropdown`,
      dropdownClassName,
    ].filter(Boolean).join(' ');
  }, [dropdownClassName]);

  // ─── 计算样式 ───
  const rootStyle = useMemo(() => {
    const baseStyle: React.CSSProperties = { ...style };
    if (width) {
      baseStyle.width = typeof width === 'number' ? `${width}px` : width;
    }
    return baseStyle;
  }, [style, width]);

  // ─────────────────────────────────────────────────────────────────────────────
  // SECTION: 渲染
  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <div className={rootClassName} style={rootStyle}>
      <Dropdown
        disabled={disabled}
        trigger='click'
        onClose={handleDropdownClose}
        content={
          <div className={panelClassName} style={dropdownStyle}>
            {effectiveOptions.length === 0 ? (
              <div className={`${prefixCls}__empty`}>{emptyContent}</div>
            ) : (
              <>
                <TreeList
                  prefixCls={prefixCls}
                  data={currentLevelData}
                  multiple={multiple}
                  level={0}
                  expandedPath={expandedPath}
                  onClick={handleLabelClick}
                  onCheckedChange={handleCheckedChange}
                  isItemSelected={isItemSelected}
                  isItemIndeterminate={isItemIndeterminate}
                  renderOption={renderOption}
                />

                {subsequentLevels.map(({ level, levelData }) => (
                  <TreeList
                    key={`level-${level}`}
                    prefixCls={prefixCls}
                    data={levelData}
                    multiple={multiple}
                    level={level}
                    expandedPath={expandedPath}
                    onClick={handleLabelClick}
                    onCheckedChange={handleCheckedChange}
                    isItemSelected={isItemSelected}
                    isItemIndeterminate={isItemIndeterminate}
                    renderOption={renderOption}
                  />
                ))}
              </>
            )}
          </div>
        }
      >
        <div className={triggerClassName}>
          <div className={`${prefixCls}__content`}>
            {customValueDisplay ? handleCustomDisplay() : renderDisplayContent()}
          </div>
          <Icon name="arrow-triangle" className={`${prefixCls}__arrow`} size={16} />
          {tip && <PopOver attach="body" content={tip} theme="dark" {...tipProps} />}
        </div>
      </Dropdown>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: TreeList 子组件
// ─────────────────────────────────────────────────────────────────────────────

type TreeListProps = {
  prefixCls: string
  data: SelectTreeOption[]
  multiple?: boolean
  level: number
  expandedPath: string[]
  onClick: (item: SelectTreeOption, level: number) => void
  onCheckedChange: (item: SelectTreeOption) => void
  isItemSelected: (item: SelectTreeOption) => boolean
  isItemIndeterminate: (item: SelectTreeOption) => boolean
  renderOption?: SelectTreeProps['renderOption']
}

const TreeList: React.FC<TreeListProps> = React.memo(({
  prefixCls,
  data,
  multiple,
  level,
  expandedPath,
  onClick,
  onCheckedChange,
  isItemSelected,
  isItemIndeterminate,
  renderOption,
}) => {
  // ─── 事件处理 ───
  const handleClick = useCallback((e: React.MouseEvent, item: SelectTreeOption) => {
    e.stopPropagation();
    onClick(item, level);
  }, [onClick, level]);

  const handleCheckboxChange = useCallback((item: SelectTreeOption, e?: React.MouseEvent) => {
    if (item.children && e) {
      e.stopPropagation();
    }
    onCheckedChange(item);
  }, [onCheckedChange]);

  // ─── 获取选项类名 ───
  const getOptionClassName = useCallback((isExpanded: boolean, isSelected: boolean) => {
    return [
      `${prefixCls}__option`,
      isExpanded && `${prefixCls}__option--expanded`,
      isSelected && `${prefixCls}__option--selected`,
    ].filter(Boolean).join(' ');
  }, [prefixCls]);

  // ─── 获取箭头类名 ───
  const getArrowClassName = useCallback((isExpanded: boolean) => {
    return [
      `${prefixCls}__option-arrow`,
      isExpanded && `${prefixCls}__option-arrow--expanded`,
    ].filter(Boolean).join(' ');
  }, [prefixCls]);

  return (
    <div className={`${prefixCls}__list`}>
      {data?.map(item => {
        const isExpanded = expandedPath[level] === item.key;
        const hasChildren = item.children && item.children.length > 0;
        const isSelected = isItemSelected(item);
        const isIndeterminate = isItemIndeterminate(item);

        // 自定义渲染
        if (renderOption) {
          return (
            <div
              key={item.key}
              className={getOptionClassName(isExpanded, isSelected)}
              onClick={(e) => handleClick(e, item)}
            >
              {renderOption(item, {
                selected: isSelected,
                expanded: isExpanded,
                indeterminate: isIndeterminate,
                level,
              })}
            </div>
          );
        }

        return (
          <div
            className={getOptionClassName(isExpanded, isSelected)}
            key={item.key}
            onClick={(e) => handleClick(e, item)}
          >
            <div className={`${prefixCls}__option-content`}>
              {multiple && (
                <Checkbox
                  checked={isSelected}
                  indeterminate={isIndeterminate}
                  onCheckedChange={(_checked, e) => handleCheckboxChange(item, e)}
                />
              )}
              <span className={`${prefixCls}__option-label`}>{item.label}</span>
            </div>
            {hasChildren && (
              <Icon
                name='arrow-triangle'
                className={getArrowClassName(isExpanded)}
              />
            )}
          </div>
        );
      })}
    </div>
  );
});

TreeList.displayName = 'TreeList';

export default SelectTree;
