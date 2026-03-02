// ============================================================================
// Select 组件
// @description 选择器组件，支持单选和多选模式
// @author Land Design System
// ============================================================================

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Icon from '../Icon';
import PopOver from '../PopOver';
import Dropdown from '../Dropdown';
import Checkbox from '../Checkbox';
import { SelectProps, SelectOption, SelectVariant } from './props';
import './index.scss';

const prefixCls = 'land-select';

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 类型映射（兼容旧属性）
// ─────────────────────────────────────────────────────────────────────────────

const variantMap: Record<string, SelectVariant> = {
  border: 'outline',
  background: 'fill',
  transparent: 'transparent',
  text: 'text',
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 组件实现
// ─────────────────────────────────────────────────────────────────────────────

const Select: React.FC<SelectProps> = ({
  // 核心属性
  options,
  data,
  value,
  selected,
  values,
  selectedValues = [],
  multiple = false,
  placeholder = '请选择',

  // 外观属性
  variant,
  type = 'border',
  size = 'default',
  disabled = false,
  width,

  // 多选属性
  showCheckbox = false,
  separator = '，',
  maxDisplayCount,

  // 提示属性
  tip,
  tipProps,

  // 自定义渲染
  customValueDisplay,
  renderOption,
  emptyContent = '暂无数据',

  // 样式属性
  className = '',
  style,
  dropdownClassName = '',
  dropdownStyle,

  // 事件属性
  onChange,

  // 其他属性透传给 Dropdown
  ...restProps
}) => {
  // ─── 兼容处理 ───
  const effectiveOptions = options ?? data ?? [];
  const effectiveVariant = variant ?? variantMap[type] ?? 'outline';
  const effectiveValue = value ?? selected;
  const rawValues = values ?? selectedValues;

  // ─── 状态 ───
  const [internalValue, setInternalValue] = useState<string | number | undefined>(effectiveValue);
  const [internalValues, setInternalValues] = useState<(string | number)[]>(rawValues);
  const [isOpen, setIsOpen] = useState(false);
  
  // 使用 ref 跟踪状态，避免 useCallback 依赖变化
  const prevRawValuesRef = useRef(rawValues);
  const internalValuesRef = useRef(internalValues);
  internalValuesRef.current = internalValues;

  // ─── 受控模式同步 ───
  useEffect(() => {
    if (effectiveValue !== undefined) {
      // 使用函数式更新，只在值不同时更新
      setInternalValue((prev) => (prev === effectiveValue ? prev : effectiveValue));
    }
  }, [effectiveValue]);

  // 仅当 rawValues 内容真正变化时更新 internalValues
  useEffect(() => {
    const prev = prevRawValuesRef.current;
    // 比较数组内容是否相同
    const isSame = prev.length === rawValues.length && prev.every((v, i) => v === rawValues[i]);
    
    if (!isSame) {
      prevRawValuesRef.current = rawValues;
      setInternalValues(rawValues);
    }
  }); // 无依赖，每次渲染都检查，但只在内容变化时更新

  // ─── 计算选中项 ───
  const selectedOptions = useMemo(() => {
    if (multiple) {
      return effectiveOptions.filter((opt) => internalValues.includes(opt.key));
    }
    return effectiveOptions.filter((opt) => opt.key === internalValue);
  }, [multiple, effectiveOptions, internalValues, internalValue]);

  const selectedLabels = useMemo(() => {
    return selectedOptions.map((opt) => opt.label);
  }, [selectedOptions]);

  // ─── 判断是否选中 ───
  const isSelected = useCallback(
    (key: string | number) => {
      if (multiple) {
        return internalValues.includes(key);
      }
      return internalValue === key;
    },
    [multiple, internalValues, internalValue]
  );

  // ─── 处理选项点击 ───
  const handleOptionClick = useCallback(
    (option: SelectOption, e: React.MouseEvent) => {
      e.stopPropagation();

      if (option.disabled) return;

      if (multiple) {
        const currentValues = internalValuesRef.current;
        const newValues = [...currentValues];
        const index = newValues.indexOf(option.key);

        if (index > -1) {
          newValues.splice(index, 1);
        } else {
          newValues.push(option.key);
        }

        setInternalValues(newValues);
        const newSelectedOptions = effectiveOptions.filter((opt) =>
          newValues.includes(opt.key)
        );
        onChange?.(newValues, option, newSelectedOptions);
      } else {
        // 立即更新内部状态，不等待受控模式的同步
        setInternalValue(option.key);
        onChange?.(option.key, option);
        setIsOpen(false);
      }
    },
    [multiple, effectiveOptions, onChange]
  );

  // ─── 下拉面板开关回调 ───
  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  // ─── 渲染显示内容 ───
  const renderDisplayContent = useCallback(() => {
    // 自定义显示
    if (customValueDisplay) {
      return customValueDisplay({
        values: multiple ? internalValues : internalValue !== undefined ? [internalValue] : [],
        items: selectedOptions,
        isMultiple: multiple,
        placeholder,
      });
    }

    // 无选中项
    if (multiple ? selectedLabels.length === 0 : internalValue === undefined || internalValue === '') {
      return <span className={`${prefixCls}__placeholder`}>{placeholder}</span>;
    }

    // 多选显示
    if (multiple) {
      if (maxDisplayCount !== undefined && selectedLabels.length > maxDisplayCount) {
        return (
          <span className={`${prefixCls}__value`}>
            {selectedLabels.slice(0, maxDisplayCount).join(separator)}等{selectedLabels.length}个选项
          </span>
        );
      }
      return <span className={`${prefixCls}__value`}>{selectedLabels.join(separator)}</span>;
    }

    // 单选显示
    return <span className={`${prefixCls}__value`}>{selectedOptions[0]?.label}</span>;
  }, [
    customValueDisplay,
    multiple,
    internalValues,
    internalValue,
    selectedOptions,
    selectedLabels,
    placeholder,
    maxDisplayCount,
    separator,
  ]);

  // ─── 渲染单个选项 ───
  const renderSingleOption = useCallback(
    (option: SelectOption) => {
      const selected = isSelected(option.key);
      const optionClassName = [
        `${prefixCls}__option`,
        selected && `${prefixCls}__option--selected`,
        option.disabled && `${prefixCls}__option--disabled`,
        option.className,
      ]
        .filter(Boolean)
        .join(' ');

      // 自定义渲染
      if (renderOption) {
        return (
          <div
            key={option.key}
            className={optionClassName}
            style={option.style}
            onClick={(e) => handleOptionClick(option, e)}
          >
            {renderOption(option, selected)}
          </div>
        );
      }

      return (
        <div
          key={option.key}
          className={optionClassName}
          style={option.style}
          onClick={(e) => handleOptionClick(option, e)}
        >
          {/* 复选框 */}
          {multiple && showCheckbox && (
            <Checkbox
              className={`${prefixCls}__checkbox`}
              checked={selected}
              disabled={option.disabled}
            />
          )}

          {/* 标签 */}
          <span className={`${prefixCls}__option-label`}>{option.label}</span>

          {/* 图标提示 */}
          {option.iconTip && (
            <div className={`${prefixCls}__option-icon`}>
              <Icon name="info-stroke" size={12} />
              <PopOver content={option.iconTip} placement="right" theme="dark" />
            </div>
          )}

          {/* 整体提示 */}
          {option.tip && (
            <PopOver content={option.tip} placement="right" theme="dark" />
          )}
        </div>
      );
    },
    [isSelected, renderOption, handleOptionClick, multiple, showCheckbox]
  );

  // ─── 下拉面板内容 ───
  const dropdownContent = useMemo(
    () => (
      <div className={`${prefixCls}__dropdown ${dropdownClassName}`} style={dropdownStyle}>
        {effectiveOptions.length > 0 ? (
          effectiveOptions.map(renderSingleOption)
        ) : (
          <div className={`${prefixCls}__empty`}>{emptyContent}</div>
        )}
      </div>
    ),
    [effectiveOptions, renderSingleOption, emptyContent, dropdownClassName, dropdownStyle]
  );

  // ─── 根容器类名 ───
  const rootClassName = useMemo(() => {
    return [prefixCls, className].filter(Boolean).join(' ');
  }, [className]);

  // ─── 根容器样式 ───
  const rootStyle = useMemo<React.CSSProperties>(() => {
    return {
      width: typeof width === 'number' ? `${width}px` : width,
      ...style,
    };
  }, [width, style]);

  // ─── 触发器类名 ───
  const triggerClassName = useMemo(() => {
    return [
      `${prefixCls}__trigger`,
      `${prefixCls}__trigger--${effectiveVariant}`,
      `${prefixCls}__trigger--${size}`,
      disabled && `${prefixCls}__trigger--disabled`,
      isOpen && `${prefixCls}__trigger--open`,
    ]
      .filter(Boolean)
      .join(' ');
  }, [effectiveVariant, size, disabled, isOpen]);

  // ─── 渲染 ───
  return (
    <div className={rootClassName} style={rootStyle}>
      <Dropdown
        trigger="click"
        disabled={disabled}
        content={dropdownContent}
        onOpen={handleOpen}
        onClose={handleClose}
        {...restProps}
      >
        <div className={triggerClassName}>
          <div className={`${prefixCls}__content`}>{renderDisplayContent()}</div>
          <Icon name="arrow-triangle" className={`${prefixCls}__arrow`} size={16} />
          {tip && <PopOver attach="body" content={tip} theme="dark" {...tipProps} />}
        </div>
      </Dropdown>
    </div>
  );
};

export default Select;
