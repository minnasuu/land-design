// ============================================================================
// Radio 组件
// @description 单选框组件，支持受控和非受控模式
// @author Land Design System
// ============================================================================

import React, { useCallback, useEffect, useMemo, useState } from "react";
import './index.scss';
import PopOver from "../PopOver";
import Icon from "../Icon";
import { RadioProps, radioDefaultProps } from "./props";

const prefixCls = 'land-radio';

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 组件实现
// ─────────────────────────────────────────────────────────────────────────────

const Radio: React.FC<RadioProps> = ({
  // 基础属性
  value,
  name,
  label,
  checked = radioDefaultProps.checked,
  defaultChecked = radioDefaultProps.defaultChecked,
  disabled = radioDefaultProps.disabled,
  // 动效属性
  animated = radioDefaultProps.animated,
  // 提示属性
  tip,
  // 样式属性
  style,
  className = '',
  labelStyle,
  labelClassName = '',
  // 事件属性
  onCheckedChange,
  onClick,
}) => {
  // ─── 状态 ───
  const [innerChecked, setInnerChecked] = useState(defaultChecked || checked);

  // ─── 受控模式同步 ───
  useEffect(() => {
    if (checked !== undefined) {
      setInnerChecked(checked);
    }
  }, [checked]);

  // ─── 类名计算 ───
  const rootClassName = useMemo(() => {
    return [
      prefixCls,
      disabled && `${prefixCls}--disabled`,
      innerChecked && `${prefixCls}--checked`,
      className,
    ].filter(Boolean).join(' ');
  }, [disabled, innerChecked, className]);

  const circleClassName = useMemo(() => {
    return [
      `${prefixCls}__circle`,
      innerChecked && `${prefixCls}__circle--checked`,
      animated ? `${prefixCls}__circle--animated` : `${prefixCls}__circle--no-animation`,
    ].filter(Boolean).join(' ');
  }, [innerChecked, animated]);

  const textClassName = useMemo(() => {
    return [
      `${prefixCls}__text`,
      labelClassName,
    ].filter(Boolean).join(' ');
  }, [labelClassName]);

  // ─── 事件处理 ───
  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    
    // 触发旧的 onClick（保持向后兼容）
    onClick?.(e);
    
    // 单选框总是变为选中状态（不能取消选中）
    if (!innerChecked) {
      setInnerChecked(true);
      onCheckedChange?.(true, e);
    }
  }, [disabled, innerChecked, onClick, onCheckedChange]);

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
      {/* 主体区域 */}
      <div 
        className={`${prefixCls}__label`}
        onClick={handleClick}
        role="radio"
        aria-checked={innerChecked}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
      >
        {/* 圆形选择框 */}
        <div className={circleClassName}>
          <Icon name='check' size={10} className={`${prefixCls}__icon`} />
        </div>
        
        {/* 标签文本 */}
        {label && (
          <span className={textClassName} style={labelStyle}>
            {label}
          </span>
        )}
      </div>

      {/* 提示信息 */}
      {tip && (
        <div className={`${prefixCls}__tip hover-pop`}>
          <Icon 
            name="info-stroke" 
            color="var(--color-text-tertiary)" 
            size={12} 
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

export default Radio;
