// ============================================================================
// Checkbox 组件
// @description 复选框组件，支持受控和非受控模式
// @author Land Design System
// ============================================================================

import React, { useCallback, useEffect, useMemo, useState } from "react";
import './index.scss';
import PopOver from "../PopOver";
import Icon from "../Icon";
import { CheckboxProps, checkboxDefaultProps } from "./props";

const prefixCls = 'land-checkbox';

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 组件实现
// ─────────────────────────────────────────────────────────────────────────────

const Checkbox: React.FC<CheckboxProps> = ({
  // 核心属性
  value,
  name,
  checked,
  defaultChecked = checkboxDefaultProps.defaultChecked,
  indeterminate = checkboxDefaultProps.indeterminate,
  disabled = checkboxDefaultProps.disabled,
  // 内容属性
  label,
  children,
  // 外观属性
  size = checkboxDefaultProps.size,
  animated = checkboxDefaultProps.animated,
  // 提示属性
  tip,
  // 样式属性
  className = '',
  style,
  labelClassName = '',
  labelStyle,
  // 事件属性
  onCheckedChange,
  onChange,
}) => {
  // ─── 状态 ───
  const [innerChecked, setInnerChecked] = useState(() => {
    if (checked !== undefined) return checked;
    return defaultChecked ?? false;
  });

  // ─── 受控模式同步 ───
  useEffect(() => {
    if (checked !== undefined) {
      setInnerChecked(checked);
    }
  }, [checked]);

  // ─── 实际显示内容 ───
  const displayContent = children ?? label;

  // ─── 类名计算 ───
  const rootClassName = useMemo(() => {
    return [
      prefixCls,
      `${prefixCls}--${size}`,
      disabled && `${prefixCls}--disabled`,
      innerChecked && `${prefixCls}--checked`,
      indeterminate && `${prefixCls}--indeterminate`,
      className,
    ].filter(Boolean).join(' ');
  }, [size, disabled, innerChecked, indeterminate, className]);

  const wrapperClassName = useMemo(() => {
    return [
      `${prefixCls}__wrapper`,
      innerChecked && `${prefixCls}__wrapper--checked`,
    ].filter(Boolean).join(' ');
  }, [innerChecked]);

  const boxClassName = useMemo(() => {
    return [
      `${prefixCls}__box`,
      innerChecked && `${prefixCls}__box--checked`,
      indeterminate && `${prefixCls}__box--indeterminate`,
      animated && !indeterminate ? `${prefixCls}__box--animated` : `${prefixCls}__box--no-animation`,
    ].filter(Boolean).join(' ');
  }, [innerChecked, indeterminate, animated]);

  const textClassName = useMemo(() => {
    return [
      `${prefixCls}__text`,
      labelClassName,
    ].filter(Boolean).join(' ');
  }, [labelClassName]);

  // ─── 事件处理 ───
  const handleClick = useCallback((e: React.MouseEvent) => {
    if (disabled) return;
    
    const newChecked = !innerChecked;
    setInnerChecked(newChecked);
    
    // 支持新旧两种回调
    onCheckedChange?.(newChecked, e);
    onChange?.(newChecked, e);
  }, [disabled, innerChecked, onCheckedChange, onChange]);

  // ─────────────────────────────────────────────────────────────────────────────
  // SECTION: 渲染
  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <div 
      className={rootClassName} 
      style={style}
      data-value={value}
      data-name={name}
    >
      {/* 主体可点击区域 */}
      <div 
        className={wrapperClassName} 
        onClick={handleClick}
        role="checkbox"
        aria-checked={indeterminate ? 'mixed' : innerChecked}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
      >
        {/* 选择框 */}
        <div className={boxClassName}>
          {/* 选中图标 */}
          <Icon 
            name='check' 
            size={10} 
            className={`${prefixCls}__icon ${prefixCls}__icon--check`} 
          />
          {/* 半选图标 */}
          <Icon 
            name='dec' 
            strokeWidth={8} 
            size={10} 
            className={`${prefixCls}__icon ${prefixCls}__icon--indeterminate`} 
          />
        </div>
        
        {/* 标签文本 */}
        {displayContent && (
          <span className={textClassName} style={labelStyle}>
            {displayContent}
          </span>
        )}
      </div>

      {/* 提示信息 */}
      {tip && (
        <div className={`${prefixCls}__tip hover-pop`}>
          <Icon 
            name='info-stroke' 
            size={12}
            className={`${prefixCls}__tip-icon`} 
          />
          <PopOver
            content={tip}
            theme="dark"
            style={{ maxWidth: "200px" }}
            placement="top"
          />
        </div>
      )}
    </div>
  );
};

export default Checkbox;
