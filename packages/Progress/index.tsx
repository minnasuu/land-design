import React from "react";
import { ProgressProps } from './props';
import Icon from '../Icon';
import './index.scss';

const Progress: React.FC<ProgressProps> = ({
  value = 0.6,
  status = 'default',
  type = 'line',
  hideLabel = false,
  strokeWidth = 8,
  style,
  className = '',
}) => {
  // 确保value在0-1范围内
  const normalizedValue = Math.max(0, Math.min(1, value));

  // 计算line类型的transform
  const getLineTransform = () => {
    return `scaleX(${normalizedValue})`;
  };

  // 获取状态图标
  const getStatusIcon = () => {
    if (status === 'default') return null;

    const iconProps = {
      size: type === 'circle' ? 20 : 16,
    };

    switch (status) {
      case 'success':
        return <Icon name="check-fill" {...iconProps} color="var(--color-green-6)" />;
      case 'fail':
        return <Icon name="error-fill" {...iconProps} color="var(--color-red-6)" />;
      default:
        return null;
    }
  };

  // 渲染圆形进度条
  const renderCircleProgress = () => {
    const size = 80;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (normalizedValue * circumference);

    return (
      <svg width={size} height={size} className="land-progress-circle-svg">
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
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: "stroke-dashoffset 0.3s ease" }}
        />
      </svg>
    );
  };

  return (
    <div className={`land-progress ${type} ${className}`} style={style}>
      <div className='land-progress-content'>
        {type === 'circle' ? (
          <div className="land-progress-circle-container">
            {renderCircleProgress()}
            {!hideLabel && status == 'default' && (
              <div className="land-progress-circle-label">
                {Math.round(normalizedValue * 100)}%
              </div>
            )}
            {status !== 'default' && (
              <div className="land-progress-status-icon">
                {getStatusIcon()}
              </div>
            )}
          </div>
        ) : (
          <>
            {!hideLabel && status == 'default' && (
              <div className="land-progress-label" style={{ left: `${value * 100}%` }}>
                {Math.round(normalizedValue * 100)}%
              </div>
            )}
            <div className="land-progress-bar">
              <div
                className="land-progress-bar-finished"
                style={{ transform: getLineTransform() }}
              ></div>
            </div>
            {status !== 'default' && (
              <div className="land-progress-status-icon">
                {getStatusIcon()}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Progress;
