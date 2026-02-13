import { Fragment, useMemo, useCallback } from 'react';
import Divider from '../Divider';
import Icon from '../Icon';
import { StepsProps, StepItem } from './props';
import './index.scss';

const prefixCls = 'land-steps';

const Steps: React.FC<StepsProps> = ({
  items = [],
  current,
  finished = [],
  onClick,
  useDivider = true,
  dividerWidth = '32px',
  direction = 'horizontal',
  style,
  className,
}) => {
  const activeCurrent = useMemo(() => {
    if (current !== undefined) return current;
    return items.length > 0 ? items[0].key : undefined;
  }, [current, items]);

  const isFinished = useCallback(
    (item: StepItem) => {
      if (item.finished !== undefined) return item.finished;
      return finished.includes(item.key);
    },
    [finished],
  );

  const rootClassName = useMemo(
    () =>
      [
        prefixCls,
        direction === 'vertical' && `${prefixCls}--vertical`,
        className,
      ]
        .filter(Boolean)
        .join(' '),
    [direction, className],
  );

  return (
    <div className={rootClassName} style={style} role="list" aria-label="步骤导航">
      {items.map((item, index) => {
        const isActive = activeCurrent === item.key;
        const done = isFinished(item);

        const itemCls = [
          `${prefixCls}__item`,
          isActive && `${prefixCls}__item--active`,
          done && `${prefixCls}__item--finished`,
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <Fragment key={item.key}>
            {useDivider && index !== 0 && (
              <Divider
                length={dividerWidth}
                style={direction === 'horizontal' ? { marginTop: '12px' } : { marginLeft: '8px' }}
                direction={direction === 'vertical' ? 'vertical' : 'horizontal'}
              />
            )}
            <div
              className={itemCls}
              onClick={() => onClick?.(item)}
              tabIndex={0}
              role="button"
              aria-label={`步骤 ${index + 1}: ${item.title}`}
              aria-current={isActive ? 'step' : undefined}
            >
              <div className={`${prefixCls}__num`}>
                {done ? <Icon name="check" size={10} /> : index + 1}
              </div>
              <div className={`${prefixCls}__title`}>
                {item.title}
                {item.desc && <div className={`${prefixCls}__desc`}>{item.desc}</div>}
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Steps;
