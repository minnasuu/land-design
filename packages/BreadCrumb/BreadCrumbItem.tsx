import { useRef } from 'react';
import { BreadCrumbItemProps } from './props';
import Icon from '../Icon';
import Tooltip from '../Tooltip';
import useTextOverflow from '../hooks/useTextOverflow';

const prefixCls = 'land-bread-crumb';

const BreadCrumbItem: React.FC<BreadCrumbItemProps> = ({
  item,
  active,
  onChange,
  index,
  hoverPreview,
}) => {
  const labelRef = useRef<HTMLDivElement>(null);
  const ellipsis = useTextOverflow(labelRef, { deps: [item] });

  return (
    <Tooltip attach="body" theme="light" content={item.tip || (hoverPreview && ellipsis ? item.label : '')}>
      <div
        className={`${prefixCls}__item hover-pop${active ? ` ${prefixCls}__item--active` : ''}`}
        onClick={() => onChange?.()}
      >
        <div
          ref={labelRef}
          className={`${prefixCls}__label${item.maxWidth ? ` ${prefixCls}__label--ellipsis` : ''}`}
          style={item.maxWidth ? { maxWidth: `${item.maxWidth}px` } : undefined}
        >
          {item.label}
        </div>
        {index > 0 && (
          <Icon name="arrow" className={`${prefixCls}__arrow`} size={16} strokeWidth={4} />
        )}
      </div>
    </Tooltip>
  );
};

export default BreadCrumbItem;
