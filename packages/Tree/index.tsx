// ============================================================================
// Tree 组件
// @description 内联缩进树（基础树）组件，支持单选 / 多选 + 展开折叠
// @author Land Design System
// ============================================================================

import React, { useState, useCallback, useMemo } from 'react'
import { TreeOption, TreeProps, TreeNodeState, treeDefaultProps } from './props'
import Checkbox from '../Checkbox'
import Icon from '../Icon'
import './index.scss'

const prefixCls = 'land-tree';

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 工具函数
// ─────────────────────────────────────────────────────────────────────────────

/** 获取所有子节点的 key */
const getAllChildrenKeys = (item: TreeOption): string[] => {
  const keys: string[] = [];
  if (item.children) {
    item.children.forEach(child => {
      keys.push(child.key);
      keys.push(...getAllChildrenKeys(child));
    });
  }
  return keys;
};

/** 根据 key 在树中查找选项 */
const findOptionByKey = (options: TreeOption[], key: string): TreeOption | undefined => {
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
const getOptionsByKeys = (options: TreeOption[], keys: string[]): TreeOption[] => {
  return keys.map(key => findOptionByKey(options, key)).filter(Boolean) as TreeOption[];
};

/** 根据已选 key 计算父节点的半选/全选状态 */
const updateParentStates = (options: TreeOption[], keys: string[]): string[] => {
  let updatedKeys = [...keys];

  const getAllParentNodes = (items: TreeOption[]): TreeOption[] => {
    const parents: TreeOption[] = [];
    items.forEach(item => {
      if (item.children && item.children.length > 0) {
        parents.push(item);
        parents.push(...getAllParentNodes(item.children));
      }
    });
    return parents;
  };

  getAllParentNodes(options).forEach(parent => {
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
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 组件实现
// ─────────────────────────────────────────────────────────────────────────────

const Tree: React.FC<TreeProps> = ({
  treeData = [],
  multiple = treeDefaultProps.multiple,
  value,
  values,
  defaultValue,
  defaultValues,
  expandedKeys,
  defaultExpandedKeys = [],
  variant = treeDefaultProps.variant,
  size = treeDefaultProps.size,
  checkable,
  selectable = treeDefaultProps.selectable,
  expandAction = treeDefaultProps.expandAction,
  disabled = treeDefaultProps.disabled,
  indent = treeDefaultProps.indent,
  emptyContent = treeDefaultProps.emptyContent,
  renderNode,
  className = '',
  style,
  onExpand,
  onChange,
}) => {
  // ─── 受控 / 非受控状态 ───
  const isValueControlled = value !== undefined;
  const isValuesControlled = values !== undefined;
  const isExpandControlled = expandedKeys !== undefined;

  const [innerValue, setInnerValue] = useState<string | undefined>(defaultValue);
  const [innerValues, setInnerValues] = useState<string[]>(defaultValues ?? []);
  const [innerExpanded, setInnerExpanded] = useState<string[]>(defaultExpandedKeys);

  const currentValue = isValueControlled ? value : innerValue;
  const currentValues = isValuesControlled ? values! : innerValues;
  const currentExpanded = isExpandControlled ? expandedKeys! : innerExpanded;

  // ─── 选中判断 ───
  const isNodeSelected = useCallback((item: TreeOption): boolean => {
    if (multiple) return currentValues.includes(item.key);
    return currentValue === item.key;
  }, [multiple, currentValues, currentValue]);

  const isNodeIndeterminate = useCallback((item: TreeOption): boolean => {
    if (!multiple || !item.children) return false;
    const childrenKeys = getAllChildrenKeys(item);
    const count = childrenKeys.filter(key => currentValues.includes(key)).length;
    return count > 0 && count < childrenKeys.length;
  }, [multiple, currentValues]);

  // ─── 展开 / 收起 ───
  const handleToggleExpand = useCallback((item: TreeOption) => {
    if (!item.children?.length) return;
    const isExpanded = currentExpanded.includes(item.key);
    const next = isExpanded
      ? currentExpanded.filter(k => k !== item.key)
      : [...currentExpanded, item.key];
    if (!isExpandControlled) setInnerExpanded(next);
    onExpand?.(next);
  }, [currentExpanded, isExpandControlled, onExpand]);

  // ─── 选择 ───
  const handleSelect = useCallback((item: TreeOption) => {
    if (item.disabled || disabled || !selectable) return;

    if (multiple) {
      const isSelected = currentValues.includes(item.key);
      let nextKeys: string[];
      if (isSelected) {
        const keysToRemove = [item.key, ...getAllChildrenKeys(item)];
        nextKeys = currentValues.filter(k => !keysToRemove.includes(k));
      } else {
        const toAdd = [item.key, ...getAllChildrenKeys(item)];
        nextKeys = Array.from(new Set([...currentValues, ...toAdd]));
      }
      nextKeys = updateParentStates(treeData, nextKeys);
      if (!isValuesControlled) setInnerValues(nextKeys);
      onChange?.(nextKeys, item, getOptionsByKeys(treeData, nextKeys));
    } else {
      if (!isValueControlled) setInnerValue(item.key);
      onChange?.(item.key, item, [item]);
    }
  }, [multiple, currentValues, currentValue, disabled, selectable, treeData, isValuesControlled, isValueControlled, onChange]);

  // ─── 点击节点：expandAction 决定是否同时展开/收起 ───
  // 展开判断放在选中之前：禁用节点「不可选择，但仍可展开」
  const handleNodeClick = useCallback((item: TreeOption) => {
    if (expandAction === 'click' && item.children?.length) handleToggleExpand(item);
    handleSelect(item);
  }, [expandAction, handleToggleExpand, handleSelect]);

  const handleNodeDoubleClick = useCallback((item: TreeOption) => {
    if (expandAction === 'doubleClick' && item.children?.length) handleToggleExpand(item);
  }, [expandAction, handleToggleExpand]);

  // ─── 复选框状态 ───
  const showCheckbox = checkable ?? multiple;

  // ─── 递归渲染节点 ───
  const renderNodes = useCallback((data: TreeOption[], level: number): React.ReactNode => {
    return (
      <div className={`${prefixCls}__children`}>
        {data.map(item => {
          const hasChildren = !!item.children?.length;
          const isExpanded = currentExpanded.includes(item.key);
          const selected = isNodeSelected(item);
          const indeterminate = isNodeIndeterminate(item);

          const state: TreeNodeState = {
            selected,
            indeterminate,
            expanded: isExpanded,
            level,
          };

          if (renderNode) {
            return (
              <div key={item.key}>
                <div
                  className={[
                    `${prefixCls}__node`,
                    selected && `${prefixCls}__node--selected`,
                    item.disabled && `${prefixCls}__node--disabled`,
                  ].filter(Boolean).join(' ')}
                  style={{ paddingLeft: 8 + level * (indent ?? 16) }}
                  onClick={() => handleNodeClick(item)}
                  onDoubleClick={() => handleNodeDoubleClick(item)}
                >
                  {renderNode(item, state)}
                </div>
                {hasChildren && isExpanded && renderNodes(item.children!, level + 1)}
              </div>
            );
          }

          return (
            <div key={item.key}>
              <div
                className={[
                  `${prefixCls}__node`,
                  selected && `${prefixCls}__node--selected`,
                  item.disabled && `${prefixCls}__node--disabled`,
                ].filter(Boolean).join(' ')}
                style={{ paddingLeft: 8 + level * (indent ?? 16) }}
                onClick={() => handleNodeClick(item)}
                onDoubleClick={() => handleNodeDoubleClick(item)}
              >
                <span
                  className={[
                    `${prefixCls}__caret`,
                    hasChildren ? (isExpanded ? `${prefixCls}__caret--expanded` : '') : `${prefixCls}__caret--leaf`,
                  ].filter(Boolean).join(' ')}
                  role={hasChildren ? 'button' : undefined}
                  tabIndex={hasChildren ? 0 : undefined}
                  aria-label={hasChildren ? (isExpanded ? '收起' : '展开') : undefined}
                  aria-expanded={hasChildren ? isExpanded : undefined}
                  onClick={(e) => {
                    if (!hasChildren) return;
                    e.stopPropagation();
                    handleToggleExpand(item);
                  }}
                  onKeyDown={(e) => {
                    if (!hasChildren) return;
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      e.stopPropagation();
                      handleToggleExpand(item);
                    }
                  }}
                >
                  {hasChildren && <Icon name="arrow" size={12} />}
                </span>

                {showCheckbox && (
                  <span
                    className={`${prefixCls}__checkbox`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Checkbox
                      checked={selected}
                      indeterminate={indeterminate}
                      disabled={item.disabled || disabled}
                      onCheckedChange={() => handleSelect(item)}
                    />
                  </span>
                )}

                <span className={`${prefixCls}__label`}>{item.label}</span>
              </div>

              {hasChildren && isExpanded && renderNodes(item.children!, level + 1)}
            </div>
          );
        })}
      </div>
    );
  }, [currentExpanded, isNodeSelected, isNodeIndeterminate, renderNode, indent, handleNodeClick, handleNodeDoubleClick, handleToggleExpand, showCheckbox, disabled]);

  // ─── 根容器类名 ───
  const rootClassName = [
    prefixCls,
    `${prefixCls}--${variant}`,
    `${prefixCls}--${size}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={rootClassName} style={style}>
      {treeData.length === 0 ? (
        <div className={`${prefixCls}__empty`}>{emptyContent}</div>
      ) : (
        renderNodes(treeData, 0)
      )}
    </div>
  );
};

export default Tree;
