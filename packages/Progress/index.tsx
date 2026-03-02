import React, { useMemo, useCallback } from "react";
import { ProgressProps } from './props';
import Icon from '../Icon';
import './index.scss';

const prefixCls = 'land-progress';

const Progress: React.FC<ProgressProps> = ({
  value = 0.6,
  status = 'default',
  type = 'line',
  hideLabel = false,
  strokeWidth = 8,
  style,
  className = '',
}) => {
  // ─── 计算归一化值 ───
  const normalizedValue = useMemo(() => {
    return Math.max(0, Math.min(1, value));
  }, [value]);

  // ─── 类名计算 ───
  const rootClassName = useMemo(() => {
    return [
      prefixCls,
      `${prefixCls}--${type}`,
      `${prefixCls}--${status}`,
      className,
    ].filter(Boolean).join(' ');
  }, [type, status, className]);

  // ─── 进度条 transform ───
  const lineTransform = useMemo(() => {
    return `scaleX(${normalizedValue})`;
  }, [normalizedValue]);

  // ─── 渲染状态图标 ───
  const renderStatusIcon = useCallback(() => {
    if (status === 'default') return null;

    const iconSize = type === 'circle' ? 20 : 16;

    switch (status) {
      case 'success':
        return <Icon name="check-fill" size={iconSize} color="var(--color-green-6)" />;
      case 'fail':
        return <Icon name="error-fill" size={iconSize} color="var(--color-red-6)" />;
      default:
        return null;
    }
  }, [status, type]);

  // ─── 圆形进度条配置 ───
  const circleConfig = useMemo(() => {
    const size = 80;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (normalizedValue * circumference);

    return { size, radius, circumference, strokeDashoffset };
  }, [strokeWidth, normalizedValue]);

  // ─── 渲染圆形进度条 ───
  const renderCircleProgress = () => {
    const { size, radius, circumference, strokeDashoffset } = circleConfig;

    return (
      <svg width={size} height={size} className={`${prefixCls}__circle-svg`}>
        {/* 背景圆环 */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="var(--color-border-primary)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* 进度圆环 */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="var(--color-primary)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: "stroke-dashoffset 0.3s ease" }}
        />
      </svg>
    );
  };

  // ─── 百分比文本 ───
  const percentText = useMemo(() => {
    return `${Math.round(normalizedValue * 100)}%`;
  }, [normalizedValue]);

  return (
    <div className={rootClassName} style={style}>
      <div className={`${prefixCls}__content`}>
        {type === 'circle' ? (
          <div className={`${prefixCls}__circle-container`}>
            {renderCircleProgress()}
            {!hideLabel && status === 'default' && (
              <div className={`${prefixCls}__circle-label`}>
                {percentText}
              </div>
            )}
            {status !== 'default' && (
              <div className={`${prefixCls}__status-icon`}>
                {renderStatusIcon()}
              </div>
            )}
          </div>
        ) : (
          <>
            {!hideLabel && status === 'default' && (
              <div
                className={`${prefixCls}__label`}
                style={{ left: `${normalizedValue * 100}%` }}
              >
                {percentText}
              </div>
            )}
            <div className={`${prefixCls}__bar`}>
              <div
                className={`${prefixCls}__bar-finished`}
                style={{ transform: lineTransform }}
              />
            </div>
            {status !== 'default' && (
              <div className={`${prefixCls}__status-icon`}>
                {renderStatusIcon()}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Progress;
