import React, { Fragment, useMemo, useCallback } from "react";
import Divider from "../Divider";
import Icon from '../Icon';
import { StepsProps, StepsItemType } from './props';
import './index.scss';

// 步骤项子组件
const StepsItem: React.FC<{
  item: StepsItemType;
  index: number;
  isActive: boolean;
  isFinished: boolean;
  onClick?: (item: StepsItemType) => void;
  direction: 'horizontal' | 'vertical';
}> = React.memo(({ item, index, isActive, isFinished, onClick, direction }) => {
  const handleClick = useCallback(() => {
    onClick?.(item);
  }, [onClick, item]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.(item);
    }
  }, [onClick, item]);

  const stepNumber = useMemo(() => {
    if (isFinished) {
      return <Icon name="check" size={12} />;
    }
    return index + 1;
  }, [isFinished, index]);

  return (
    <div
      className={`land-steps-item ${isActive ? 'active' : ''} ${isFinished ? 'finished' : ''}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`步骤 ${index + 1}: ${item.title}`}
      aria-current={isActive ? 'step' : undefined}
      aria-disabled={false}
    >
      <div
        className="land-steps-num"
        aria-label={isFinished ? '已完成' : `步骤 ${index + 1}`}
      >
        {stepNumber}
      </div>
      <div className="land-steps-title">
        {item.title}
        {item.desc && <div className="land-steps-desc">{item.desc}</div>}
      </div>
    </div>
  );
});

StepsItem.displayName = 'StepsItem';

const Steps: React.FC<StepsProps> = ({
  data = [],
  current,
  finished = [],
  onClick,
  useDivider = true,
  dividerWidth = '32px',
  direction = 'horizontal',
  style,
  className,
  children,
  ...restProps
}) => {
  // 计算当前步骤，如果没有指定current，默认使用第一个步骤
  const currentStep = useMemo(() => {
    if (current !== undefined) return current;
    return data.length > 0 ? data[0].key : undefined;
  }, [current, data]);

  // 验证数据有效性
  const validData = useMemo(() => {
    if (!Array.isArray(data)) return [];
    return data.filter(item => item && typeof item === 'object' && item.key !== undefined);
  }, [data]);

  // 如果没有有效数据，返回null或children
  if (validData.length === 0) {
    return children ? <>{children}</> : null;
  }

  // 检查当前步骤是否有效
  const isValidCurrent = useMemo(() => {
    return currentStep !== undefined && validData.some(item => item.key === currentStep);
  }, [currentStep, validData]);

  // 如果当前步骤无效，使用第一个步骤
  const effectiveCurrent = isValidCurrent ? currentStep : validData[0].key;

  // 计算完成状态：优先使用data中的finished字段，其次使用全局finished数组
  const getStepFinishedStatus = useCallback((item: StepsItemType) => {
    // 如果步骤项有finished字段，直接使用
    if (item.finished !== undefined) {
      return item.finished;
    }
    // 否则使用全局finished数组
    return finished.includes(item.key);
  }, [finished]);

  const containerClassName = useMemo(() => {
    const baseClass = 'land-steps';
    const directionClass = direction === 'vertical' ? 'vertical' : '';
    return [baseClass, directionClass, className].filter(Boolean).join(' ');
  }, [direction, className]);

  const renderSteps = useCallback(() => {
    return validData.map((item, index) => {
      const isActive = effectiveCurrent === item.key;
      const isFinished = getStepFinishedStatus(item);

      return (
        <Fragment key={item.key}>
          {useDivider && index !== 0 && (
            <Divider
              lineLength={dividerWidth}
              style={direction === 'horizontal' ? { marginTop: '12px' } : { marginLeft: '8px' }}
              direction={direction === 'vertical' ? 'column' : 'row'}
            />
          )}
          <StepsItem
            item={item}
            index={index}
            isActive={isActive}
            isFinished={isFinished}
            onClick={onClick}
            direction={direction}
          />
        </Fragment>
      );
    });
  }, [validData, effectiveCurrent, getStepFinishedStatus, useDivider, dividerWidth, direction, onClick]);

  return (
    <div
      className={containerClassName}
      style={style}
      role="list"
      aria-label="步骤导航"
      {...restProps}
    >
      {renderSteps()}
    </div>
  );
};

export default Steps;
