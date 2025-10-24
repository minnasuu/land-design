import React, { useRef, useState, useEffect, useCallback } from 'react';
import './index.scss';
import { SliderProps } from './props';

const Slider: React.FC<SliderProps> = ({
  className = "",
  style,
  value: propValue,
  min = 0,
  max = 100,
  step = 1,
  range = false,
  useDivider = false,
  prefix,
  suffix,
  showTooltip = false,
  tooltipPlacement = 'top',
  tooltipFormatter = (val) => val.toString(),
  height = 4,
  thumbSize = 16,
  defaultBg = 'var(--color-gray-4)',
  activeBg = 'var(--color-primary-6)',
  thumbStyle,
  thumbClassName = '',
  onChange,
  onAfterChange,
  disabled = false,
  ...props
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<number | null>(null);
  const [hoverThumb, setHoverThumb] = useState<number | null>(null);
  
  // 内部状态管理
  const getInitialValue = (): [number, number] => {
    if (range) {
      if (Array.isArray(propValue)) {
        return [propValue[0], propValue[1]];
      }
      return [min, max];
    }
    const val = typeof propValue === 'number' ? propValue : min;
    return [val, val];
  };

  const [internalValue, setInternalValue] = useState<[number, number]>(getInitialValue);

  // 同步外部value
  useEffect(() => {
    setInternalValue(getInitialValue());
  }, [propValue, min, max, range]);

  // 计算百分比
  const valueToPercent = (val: number): number => {
    return ((val - min) / (max - min)) * 100;
  };

  // 百分比转换为值
  const percentToValue = (percent: number): number => {
    const rawValue = (percent / 100) * (max - min) + min;
    const steppedValue = Math.round(rawValue / step) * step;
    return Math.min(max, Math.max(min, steppedValue));
  };

  // 获取鼠标位置对应的百分比
  const getPercentFromEvent = (event: MouseEvent | React.MouseEvent): number => {
    if (!sliderRef.current) return 0;
    const rect = sliderRef.current.getBoundingClientRect();
    const percent = ((event.clientX - rect.left) / rect.width) * 100;
    return Math.min(100, Math.max(0, percent));
  };

  // 更新值
  const updateValue = useCallback((thumbIndex: number, newValue: number) => {
    if (disabled) return;
    
    setInternalValue(prev => {
      const newValues: [number, number] = [...prev];
      newValues[thumbIndex] = newValue;
      
      // 确保范围值的顺序
      if (range && newValues[0] > newValues[1]) {
        return thumbIndex === 0 ? [newValues[0], newValues[0]] : [newValues[1], newValues[1]];
      }
      
      // 触发onChange回调
      if (onChange) {
        const emitValue = range ? newValues : newValues[0];
        onChange(emitValue as any);
      }
      
      return newValues;
    });
  }, [range, disabled, onChange]);

  // 处理鼠标按下
  const handleMouseDown = (thumbIndex: number) => (event: React.MouseEvent) => {
    event.preventDefault();
    setIsDragging(thumbIndex);
  };

  // 处理鼠标移动
  useEffect(() => {
    if (isDragging === null) return;

    const handleMouseMove = (event: MouseEvent) => {
      const percent = getPercentFromEvent(event);
      const newValue = percentToValue(percent);
      updateValue(isDragging, newValue);
    };

    const handleMouseUp = () => {
      setIsDragging(null);
      
      // 触发onAfterChange回调
      if (onAfterChange) {
        const emitValue = range ? internalValue : internalValue[0];
        onAfterChange(emitValue as any);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, updateValue, onAfterChange, range, internalValue]);

  // 点击轨道跳转
  const handleTrackClick = (event: React.MouseEvent) => {
    if (disabled || isDragging !== null) return;
    
    const percent = getPercentFromEvent(event);
    const newValue = percentToValue(percent);
    
    if (range) {
      // 找到最近的滑块
      const dist0 = Math.abs(newValue - internalValue[0]);
      const dist1 = Math.abs(newValue - internalValue[1]);
      const thumbIndex = dist0 <= dist1 ? 0 : 1;
      updateValue(thumbIndex, newValue);
    } else {
      updateValue(0, newValue);
    }
  };

  // 生成分隔符
  const renderDividers = () => {
    if (!useDivider) return null;
    
    const dividers = [];
    const count = Math.floor((max - min) / step);
    
    for (let i = 0; i <= count; i++) {
      const value = min + i * step;
      const percent = valueToPercent(value);
      dividers.push(
        <div
          key={i}
          className="land-slider-divider"
          style={{ left: `${percent}%` }}
        />
      );
    }
    
    return dividers;
  };

  // 渲染tooltip
  const renderTooltip = (thumbIndex: number, value: number) => {
    if (!showTooltip) return null;
    
    const isActive = isDragging === thumbIndex || hoverThumb === thumbIndex;
    if (!isActive) return null;

    return (
      <div 
        className={`land-slider-tooltip land-slider-tooltip-${tooltipPlacement}`}
      >
        {tooltipFormatter(value)}
      </div>
    );
  };

  // 计算样式
  const leftPercent = valueToPercent(internalValue[0]);
  const rightPercent = range ? valueToPercent(internalValue[1]) : leftPercent;
  
  // 单滑块模式：激活区域从0%到滑块位置
  // 范围模式：激活区域从左滑块到右滑块
  const activeLeft = range ? leftPercent : 0;
  const activeWidth = range ? (rightPercent - leftPercent) : leftPercent;

  return (
    <div 
      className={`land-slider-wrapper ${disabled ? 'land-slider-disabled' : ''} ${className}`}
      style={style}
      {...props}
    >
      {prefix && <div className="land-slider-prefix">{prefix}</div>}
      
      <div 
        ref={sliderRef}
        className="land-slider"
        onClick={handleTrackClick}
      >
        {/* 轨道 */}
        <div 
          className="land-slider-track"
          style={{
            height: `${height}px`,
            backgroundColor: defaultBg,
          }}
        >
          {/* 激活区域 */}
          <div 
            className="land-slider-track-active"
            style={{
              left: `${activeLeft}%`,
              width: `${activeWidth}%`,
              backgroundColor: activeBg,
            }}
          />
          
          {/* 分隔符 */}
          {renderDividers()}
        </div>

        {/* 左侧滑块（或单值滑块） */}
        <div
          className={`land-slider-thumb ${thumbClassName} ${isDragging === 0 ? 'land-slider-thumb-dragging' : ''}`}
          style={{
            left: `${leftPercent}%`,
            width: `${thumbSize}px`,
            height: `${thumbSize}px`,
            ...thumbStyle,
          }}
          onMouseDown={handleMouseDown(0)}
          onMouseEnter={() => setHoverThumb(0)}
          onMouseLeave={() => setHoverThumb(null)}
        >
          {renderTooltip(0, internalValue[0])}
        </div>

        {/* 右侧滑块（仅范围模式） */}
        {range && (
          <div
            className={`land-slider-thumb ${thumbClassName} ${isDragging === 1 ? 'land-slider-thumb-dragging' : ''}`}
            style={{
              left: `${rightPercent}%`,
              width: `${thumbSize}px`,
              height: `${thumbSize}px`,
              ...thumbStyle,
            }}
            onMouseDown={handleMouseDown(1)}
            onMouseEnter={() => setHoverThumb(1)}
            onMouseLeave={() => setHoverThumb(null)}
          >
            {renderTooltip(1, internalValue[1])}
          </div>
        )}
      </div>

      {suffix && <div className="land-slider-suffix">{suffix}</div>}
    </div>
  );
};

export default Slider;
