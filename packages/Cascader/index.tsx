// ============================================================================
// Cascader 组件
// @description 级联选择器（多列树形选择器）组件，支持单选和多选模式
// @author Land Design System
// ============================================================================

import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react'
import Dropdown from '../Dropdown'
import Tooltip from '../Tooltip'
import {
  CascaderOption,
  CascaderProps,
  cascaderDefaultProps,
  typeToVariantMap,
  CascaderType,
} from './props'
import Icon from '../Icon'
import Checkbox from '../Checkbox'
import './index.scss'

const prefixCls = 'land-cascader';

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 工具函数
// ─────────────────────────────────────────────────────────────────────────────

/** 获取所有子节点的 key */
const getAllChildrenKeys = (item: CascaderOption): string[] => {
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
const getAllChildren = (item: CascaderOption): CascaderOption[] => {
  const children: CascaderOption[] = [];
  if (item.children) {
    item.children.forEach(child => {
      children.push(child);
      children.push(...getAllChildren(child));
    });
  }
  return children;
};

/** 根据 key 在树中查找选项 */
const findOptionByKey = (options: CascaderOption[], key: string): CascaderOption | undefined => {
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
const getOptionsByKeys = (options: CascaderOption[], keys: string[]): CascaderOption[] => {
  return keys.map(key => findOptionByKey(options, key)).filter(Boolean) as CascaderOption[];
};

/** 判断用户是否开启「减弱动态效果」 */
const isReducedMotion = (): boolean => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/** 面板列描述：key 为层级稳定标识（列壳不因同级切换而卸载），parentKey 用于列内内容切换动画 */
type CascaderColumn = {
  key: string;
  level: number;
  data: CascaderOption[];
  /** 该列数据的父节点 key，同级切换时驱动列内容区做切换动画 */
  parentKey: string;
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 组件实现
// ─────────────────────────────────────────────────────────────────────────────

const Cascader: React.FC<CascaderProps> = ({
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
  multiple = cascaderDefaultProps.multiple,
  placeholder = cascaderDefaultProps.placeholder,
  // 外观属性
  variant,
  type,
  size = cascaderDefaultProps.size,
  disabled = cascaderDefaultProps.disabled,
  width,
  // 多选属性
  separator = cascaderDefaultProps.separator,
  maxDisplayCount = cascaderDefaultProps.maxDisplayCount,
  // 提示属性
  tip,
  tipProps,
  // 自定义渲染
  customValueDisplay,
  renderOption,
  emptyContent = cascaderDefaultProps.emptyContent,
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
    if (type) return typeToVariantMap[type as CascaderType] ?? 'outline';
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
    if (values !== undefined) return values.filter(v => v != null);
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
      setInnerValues(values.filter(v => v != null));
    } else if (legacySelectedValues !== undefined && legacySelectedValues !== null && Array.isArray(legacySelectedValues)) {
      setInnerValues(legacySelectedValues.filter(item => item != null).map(item => item.key));
    }
  }, [values, legacySelectedValues]);

  // ─── 展开路径状态 ───
  const [expandedPath, setExpandedPath] = useState<string[]>([]);

  // ─── 列收起动画状态 ───
  // 离场列缓存：列从展开路径中移除时先缓存在此播放收起动画，动画结束后再真正卸载
  const [leavingColumns, setLeavingColumns] = useState<CascaderColumn[]>([]);
  const prevColumnsRef = useRef<CascaderColumn[]>([]);
  const skipLeaveRef = useRef(false);

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
  const getCurrentLevelData = useCallback((level: number): CascaderOption[] => {
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
  const isItemSelected = useCallback((item: CascaderOption): boolean => {
    if (multiple) {
      return innerValues.includes(item.key);
    }
    return innerValue === item.key;
  }, [multiple, innerValues, innerValue]);

  // ─── 判断是否半选 ───
  const isItemIndeterminate = useCallback((item: CascaderOption): boolean => {
    if (!multiple || !item.children) return false;

    const childrenKeys = getAllChildrenKeys(item);
    const selectedChildrenCount = childrenKeys.filter(key => innerValues.includes(key)).length;

    return selectedChildrenCount > 0 && selectedChildrenCount < childrenKeys.length;
  }, [multiple, innerValues]);

  // ─── 更新父节点状态 ───
  const updateParentStates = useCallback((keys: string[]): string[] => {
    let updatedKeys = [...keys];

    const getAllParentNodes = (items: CascaderOption[]): CascaderOption[] => {
      const parents: CascaderOption[] = [];
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
  const handleLabelClick = useCallback((item: CascaderOption, level: number) => {
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
  const handleCheckedChange = useCallback((item: CascaderOption) => {
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
    // 关闭面板时跳过列收起动画，直接重置
    skipLeaveRef.current = true;
    setLeavingColumns([]);
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

  // ─── 列展开/收起动画 ───
  // 列以层级为稳定 key：切换同级选项时列壳不卸载（仅内容区做切换动画），
  // 只有真正新增/移除的深层列才播放进出动画，避免相邻列反向位移动画叠加
  const columns = useMemo<CascaderColumn[]>(() => {
    const cols: CascaderColumn[] = [{ key: 'level-0', level: 0, data: currentLevelData, parentKey: '' }];
    subsequentLevels.forEach(({ level, levelData }) => {
      cols.push({ key: `level-${level}`, level, data: levelData, parentKey: expandedPath[level - 1] });
    });
    return cols;
  }, [currentLevelData, subsequentLevels, expandedPath]);

  // 列从在场序列中移除时移入离场缓存，播放收起动画
  useEffect(() => {
    const prevColumns = prevColumnsRef.current;
    prevColumnsRef.current = columns;
    if (skipLeaveRef.current) {
      skipLeaveRef.current = false;
      return;
    }
    if (isReducedMotion()) return;
    const removed = prevColumns.filter(prev => !columns.some(col => col.key === prev.key));
    if (removed.length > 0) {
      setLeavingColumns(prevLeaving => [
        ...prevLeaving.filter(l => !removed.some(r => r.key === l.key)),
        ...removed,
      ]);
    }
  }, [columns]);

  // 收起动画结束后卸载离场列
  const handleColumnLeaveEnd = useCallback((key: string) => {
    setLeavingColumns(prev => prev.filter(col => col.key !== key));
  }, []);

  // 渲染序列：按层级排序，离场列排在同级在场列之后，形成「旧列收起、新列滑入」的衔接
  const renderColumns = useMemo(() => {
    const active = columns.map(col => ({ ...col, leaving: false }));
    const leaving = leavingColumns.map(col => ({ ...col, leaving: true }));
    return [...active, ...leaving].sort(
      (a, b) => a.level - b.level || Number(a.leaving) - Number(b.leaving)
    );
  }, [columns, leavingColumns]);

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
                {renderColumns.map(({ key, level, data, parentKey, leaving }) => (
                  <TreeList
                    key={leaving ? `${key}--leaving` : key}
                    prefixCls={prefixCls}
                    data={data}
                    multiple={multiple}
                    level={level}
                    expandedPath={expandedPath}
                    onClick={handleLabelClick}
                    onCheckedChange={handleCheckedChange}
                    isItemSelected={isItemSelected}
                    isItemIndeterminate={isItemIndeterminate}
                    renderOption={renderOption}
                    motion={leaving ? 'leave' : level > 0 ? 'enter' : 'none'}
                    contentKey={parentKey}
                    animateContent={level > 0 && !leaving}
                    onLeaveEnd={leaving ? () => handleColumnLeaveEnd(key) : undefined}
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
          <Icon name="arrow" className={`${prefixCls}__arrow`} size={16} />
          {tip && <Tooltip attach="body" content={tip} theme="dark" {...tipProps} />}
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
  data: CascaderOption[]
  multiple?: boolean
  level: number
  expandedPath: string[]
  onClick: (item: CascaderOption, level: number) => void
  onCheckedChange: (item: CascaderOption) => void
  isItemSelected: (item: CascaderOption) => boolean
  isItemIndeterminate: (item: CascaderOption) => boolean
  renderOption?: CascaderProps['renderOption']
  /** 列进出动画状态：enter=新列滑入，leave=收起后由 onLeaveEnd 卸载，none=无动画（首列） */
  motion?: 'enter' | 'leave' | 'none'
  onLeaveEnd?: () => void
  /** 列内容区标识（父节点 key）：变化时内容区重挂载并播放切换动画 */
  contentKey?: string
  /** 是否启用内容区切换动画 */
  animateContent?: boolean
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
  motion = 'none',
  onLeaveEnd,
  contentKey = '',
  animateContent = false,
}) => {
  // 进入动画结束后移除动画类，恢复自然布局（避免 keyframes 持有的 overflow: hidden 常驻）
  const [entering, setEntering] = useState(motion === 'enter');

  const listClassName = useMemo(() => {
    return [
      `${prefixCls}__list`,
      entering && `${prefixCls}__list--enter`,
      motion === 'leave' && `${prefixCls}__list--leave`,
    ].filter(Boolean).join(' ');
  }, [prefixCls, entering, motion]);

  const handleAnimationEnd = useCallback((e: React.AnimationEvent<HTMLDivElement>) => {
    // 只响应列表自身的动画，忽略子元素（如 Checkbox）冒泡的 animationend
    if (e.target !== e.currentTarget) return;
    if (motion === 'leave') {
      onLeaveEnd?.();
    } else if (entering) {
      setEntering(false);
    }
  }, [motion, onLeaveEnd, entering]);

  // ─── 事件处理 ───
  const handleClick = useCallback((e: React.MouseEvent, item: CascaderOption) => {
    e.stopPropagation();
    onClick(item, level);
  }, [onClick, level]);

  const handleCheckboxChange = useCallback((item: CascaderOption, e?: React.MouseEvent) => {
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
    <div className={listClassName} onAnimationEnd={handleAnimationEnd}>
      {/* 内容区以父节点 key 为标识：同级切换时仅内容区重挂载播放淡入，列壳（宽度/边框）保持稳定 */}
      <div
        key={contentKey}
        className={[
          `${prefixCls}__list-inner`,
          animateContent && `${prefixCls}__list-inner--animate`,
        ].filter(Boolean).join(' ')}
      >
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
                name='arrow'
                className={getArrowClassName(isExpanded)}
              />
            )}
          </div>
        );
      })}
      </div>
    </div>
  );
});

TreeList.displayName = 'TreeList';

export default Cascader;
