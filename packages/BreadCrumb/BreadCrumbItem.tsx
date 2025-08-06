import React, { useEffect, useRef, useState } from 'react'
import { BreadCrumbItemProps } from './props';
import Icon from '../Icon';
import PopOver from '../PopOver';
const BreadCrumbItem: React.FC<BreadCrumbItemProps> = ({
  item,
  active,
  onChange,
  index,
  hoverPreview
}) => {
  const breadCrumbLabelRef = useRef<HTMLDivElement>(null);
  const [ellipsis, setEllipsis] = useState<boolean>(false);
  useEffect(() => {
    if (!breadCrumbLabelRef.current) return;
    if (breadCrumbLabelRef.current.scrollWidth > breadCrumbLabelRef.current.offsetWidth) {
      setEllipsis(true);
    } else {
      setEllipsis(false);
    }
  }, [item]);
  return (
    <PopOver targetBody content={item.tip || (hoverPreview && ellipsis ? item.label : '')} >
      <div
        className={`land-breadCrumb-item hover-pop ${active ? 'active' : ''}`}
        onClick={() => onChange?.()}
      >
        <div ref={breadCrumbLabelRef} className={`land-breadcrumb-label ${item.maxWidth ? 'ellipsis' : ''}`} style={{ maxWidth: `${item.maxWidth}px` }}>{item.label}</div>
        {index > 0 && <Icon name="arrow" className='land-breadCrumb-item-arrow' size={16} strokeWidth={4} />}
      </div>
    </PopOver>
  )
}

export default BreadCrumbItem;
