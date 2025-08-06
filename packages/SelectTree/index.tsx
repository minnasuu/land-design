import React, { useState, useCallback, useMemo } from 'react'
import Dropdown from '../Dropdown'
import PopOver from '../PopOver'
import { SelectTreeItemType, SelectTreeProps } from './props'
import Icon from '../Icon'
import Checkbox from '../Checkbox'
import './index.scss'

// 获取所有子节点的key
const getAllChildrenKeys = (item: SelectTreeItemType): string[] => {
  const keys: string[] = [];
  if (item.children) {
    item.children.forEach(child => {
      keys.push(child.key);
      keys.push(...getAllChildrenKeys(child));
    });
  }
  return keys;
};

// 获取所有子节点
const getAllChildren = (item: SelectTreeItemType): SelectTreeItemType[] => {
  const children: SelectTreeItemType[] = [];
  if (item.children) {
    item.children.forEach(child => {
      children.push(child);
      children.push(...getAllChildren(child));
    });
  }
  return children;
};

const SelectTree: React.FC<SelectTreeProps> = ({
  type,
  disabled,
  multiple,
  customValueDisplay,
  tip,
  tipProps,
  selected,
  selectedValues,
  separator,
  maxDisplayCount,
  placeholder = "请选择",
  data,
  onChange,
}) => {
  const [expandedPath, setExpandedPath] = useState<string[]>([]);

  const renderDisplayContent = useCallback(() => {
    if (multiple) {
      const selectedLabels = selectedValues.map(item => item.label);
      if (!selectedLabels || selectedLabels.length === 0) {
        return placeholder;
      }

      if (selectedLabels.length <= maxDisplayCount) {
        return selectedLabels.join(separator);
      } else {
        return `${selectedLabels.slice(0, maxDisplayCount).join(separator)}等${selectedLabels.length}个选项`;
      }
    } else {
      if (!selected || !selected.label) {
        return placeholder;
      }
      return selected.label;
    }
  }, [multiple, selectedValues, selected, placeholder, separator, maxDisplayCount]);

  const handleCustomDisplay = useCallback(() => {
    if (!customValueDisplay) {
      return renderDisplayContent();
    }

    if (multiple) {
      return customValueDisplay({
        values: selectedValues.map(item => item.key),
        items: selectedValues,
        isMultiple: true,
        placeholder
      });
    } else {
      const selectedItems = selected ? [selected] : [];
      const selectedValues = selected ? [selected.key] : [];
      return customValueDisplay({
        values: selectedValues,
        items: selectedItems,
        isMultiple: false,
        placeholder
      });
    }
  }, [customValueDisplay, renderDisplayContent, multiple, selectedValues, selected, placeholder]);

  const getCurrentLevelData = useCallback((level: number): SelectTreeItemType[] => {
    if (level === 0) {
      return data || [];
    }

    let currentData = data || [];
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
  }, [data, expandedPath]);

  const isItemSelected = useCallback((item: SelectTreeItemType): boolean => {
    if (multiple) {
      return selectedValues.some(selected => selected.key === item.key);
    } else {
      return selected?.key === item.key;
    }
  }, [multiple, selectedValues, selected]);

  const isItemIndeterminate = useCallback((item: SelectTreeItemType): boolean => {
    if (!multiple || !item.children) return false;

    const childrenKeys = getAllChildrenKeys(item);
    const selectedChildrenCount = childrenKeys.filter(key =>
      selectedValues.some(selected => selected.key === key)
    ).length;

    return selectedChildrenCount > 0 && selectedChildrenCount < childrenKeys.length;
  }, [multiple, selectedValues]);

  // 更新父节点状态
  const updateParentStates = useCallback((selectedValues: SelectTreeItemType[]): SelectTreeItemType[] => {
    let updatedValues = [...selectedValues];

    // 获取所有有子节点的节点
    const getAllParentNodes = (items: SelectTreeItemType[]): SelectTreeItemType[] => {
      const parents: SelectTreeItemType[] = [];
      items.forEach(item => {
        if (item.children && item.children.length > 0) {
          parents.push(item);
          parents.push(...getAllParentNodes(item.children));
        }
      });
      return parents;
    };

    const allParentNodes = getAllParentNodes(data || []);

    allParentNodes.forEach(parent => {
      const childrenKeys = getAllChildrenKeys(parent);
      const selectedChildrenCount = childrenKeys.filter(key =>
        updatedValues.some(selected => selected.key === key)
      ).length;

      const isParentSelected = updatedValues.some(selected => selected.key === parent.key);

      if (selectedChildrenCount === childrenKeys.length && !isParentSelected) {
        // 所有子节点都被选中，但父节点未选中，添加父节点
        updatedValues.push(parent);
      } else if (selectedChildrenCount === 0 && isParentSelected) {
        // 没有子节点被选中，但父节点被选中，移除父节点
        updatedValues = updatedValues.filter(selected => selected.key !== parent.key);
      }
    });

    return updatedValues;
  }, [data, getAllChildrenKeys]);

  const handleLabelClick = useCallback((item: SelectTreeItemType, level: number) => {
    if (item.children && item.children.length > 0) {
      const isCurrentlyExpanded = expandedPath[level] === item.key;

      if (isCurrentlyExpanded) {
        setExpandedPath(expandedPath.slice(0, level));
      } else {
        setExpandedPath([...expandedPath.slice(0, level), item.key]);
      }
    } else {
      if (multiple) {
        const isSelected = isItemSelected(item);
        let newSelectedValues: SelectTreeItemType[];

        if (isSelected) {
          newSelectedValues = selectedValues.filter(selected => selected.key !== item.key);
        } else {
          newSelectedValues = [...selectedValues, item];
        }

        // 更新父节点状态
        newSelectedValues = updateParentStates(newSelectedValues);

        onChange?.(newSelectedValues, item);
      } else {
        onChange?.(item, item);
      }
    }
  }, [expandedPath, multiple, isItemSelected, selectedValues, onChange, updateParentStates]);

  const handleCheckedChange = useCallback((item: SelectTreeItemType, checked: boolean) => {
    if (!multiple) return;

    let newSelectedValues: SelectTreeItemType[] = [...selectedValues];
    const isCurrentlySelected = isItemSelected(item);

    if (isCurrentlySelected) {
      // 如果当前已选中，则移除该节点及其所有子节点
      const keysToRemove = [item.key, ...getAllChildrenKeys(item)];
      newSelectedValues = newSelectedValues.filter(selected =>
        !keysToRemove.includes(selected.key)
      );
    } else {
      // 如果当前未选中，则选中该节点及其所有子节点
      const itemsToAdd = [item, ...getAllChildren(item)];
      itemsToAdd.forEach(itemToAdd => {
        if (!newSelectedValues.some(selected => selected.key === itemToAdd.key)) {
          newSelectedValues.push(itemToAdd);
        }
      });
    }

    // 更新父节点状态
    newSelectedValues = updateParentStates(newSelectedValues);

    onChange?.(newSelectedValues, item);
  }, [multiple, selectedValues, onChange, isItemSelected, getAllChildrenKeys, updateParentStates]);

  const handleDropdownClose = useCallback(() => {
    setExpandedPath([]);
  }, []);

  const currentLevelData = useMemo(() => getCurrentLevelData(0), [getCurrentLevelData]);

  const subsequentLevels = useMemo(() => {
    return expandedPath.map((_, index) => {
      const level = index + 1;
      const levelData = getCurrentLevelData(level);
      return { level, levelData };
    }).filter(({ levelData }) => levelData.length > 0);
  }, [expandedPath, getCurrentLevelData]);

  return (
    <div className='land-select-tree'>
      <Dropdown
        disabled={disabled}
        trigger='click'
        onClose={handleDropdownClose}
        dropContent={
          <div className='land-select-tree-drop'>
            <TreeList
              data={currentLevelData}
              multiple={multiple}
              level={0}
              expandedPath={expandedPath}
              onClick={handleLabelClick}
              onCheckedChange={handleCheckedChange}
              isItemSelected={isItemSelected}
              isItemIndeterminate={isItemIndeterminate}
            />

            {subsequentLevels.map(({ level, levelData }) => (
              <TreeList
                key={`level-${level}`}
                data={levelData}
                multiple={multiple}
                level={level}
                expandedPath={expandedPath}
                onClick={handleLabelClick}
                onCheckedChange={handleCheckedChange}
                isItemSelected={isItemSelected}
                isItemIndeterminate={isItemIndeterminate}
              />
            ))}
          </div>
        }
      >
        <div
          className={`land-select-input hover-pop ${type} ${disabled ? 'disabled' : ''}`}
        >
          <p
            className={`${(multiple ? selectedValues.length > 0 : selected !== undefined)
              ? "land-select-trigger"
              : "land-select-placeholder"
              }`}
          >
            {customValueDisplay ? handleCustomDisplay() : renderDisplayContent()}
          </p>
          <Icon name="arrow-triangle" className="land-select-value-arrow" size={16} />
          {tip && <PopOver content={tip} theme="dark" {...tipProps} />}
        </div>
      </Dropdown>
    </div>
  )
}

type TreeListProps = {
  data: SelectTreeItemType[]
  multiple: boolean
  level: number
  expandedPath: string[]
  onClick: (item: SelectTreeItemType, level: number) => void
  onCheckedChange: (item: SelectTreeItemType, checked: boolean) => void
  isItemSelected: (item: SelectTreeItemType) => boolean
  isItemIndeterminate: (item: SelectTreeItemType) => boolean
}

const TreeList: React.FC<TreeListProps> = React.memo(({
  data,
  multiple,
  level,
  expandedPath,
  onClick,
  onCheckedChange,
  isItemSelected,
  isItemIndeterminate
}) => {
  const handleClick = useCallback((e: React.MouseEvent, item: SelectTreeItemType) => {
    e.stopPropagation();
    onClick(item, level);
  }, [onClick, level]);

  const handleCheckboxChange = useCallback((item: SelectTreeItemType, e?: React.MouseEvent) => {
    if (item.children && e) {
      e.stopPropagation();
    }
    onCheckedChange(item, false); // checked参数不再使用，但保持接口兼容
  }, [onCheckedChange]);

  return (
    <div className='land-select-tree-drop-list'>
      {data?.map(item => {
        const isExpanded = expandedPath[level] === item.key;
        const hasChildren = item.children && item.children.length > 0;
        const isSelected = isItemSelected(item);
        const isIndeterminate = isItemIndeterminate(item);

        return (
          <div
            className={`land-select-tree-drop-list-item ${isExpanded ? 'expanded' : ''} ${isSelected ? 'selected' : ''}`}
            key={item.key}
            onClick={(e) => handleClick(e, item)}
          >
            <div className='land-select-tree-drop-list-item-content'>
              {multiple && (
                <Checkbox
                  label=''
                  checked={isSelected}
                  indeterminate={isIndeterminate}
                  onCheckedChange={(checked, e) => handleCheckboxChange(item, e)}
                />
              )}
              {item.label}
            </div>
            {hasChildren && (
              <Icon
                name='arrow-triangle'
                className={`land-select-tree-drop-list-item-arrow ${isExpanded ? 'expanded' : ''}`}
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