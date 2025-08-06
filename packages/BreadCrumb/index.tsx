import React, { useEffect, useRef, useState } from "react";
import BreadCrumbItem from "./BreadCrumbItem";
import { BreadCrumbProps, BreadCrumbItemType } from "./props";
import './index.scss'

const BreadCrumb: React.FC<BreadCrumbProps> = ({
  data = [],
  current,
  showMask = false,
  hoverPreview = false,
  onChange,
  style,
  className = ''
}) => {
  const breadCrumbContainerRef = useRef<HTMLDivElement>(null);
  const [isLeft, setIsLeft] = useState<boolean>(false);
  const [isRight, setIsRight] = useState<boolean>(true);
  useEffect(() => {
    if (!showMask || !breadCrumbContainerRef.current) return;

    const handleScroll = () => {
      if (breadCrumbContainerRef.current) {
        setIsLeft(breadCrumbContainerRef.current.scrollLeft <= breadCrumbContainerRef.current.clientWidth - breadCrumbContainerRef.current.scrollWidth);
        setIsRight(breadCrumbContainerRef.current.scrollLeft >= 0);
      }
    };

    breadCrumbContainerRef.current.addEventListener('scroll', handleScroll);
    return () => {
      breadCrumbContainerRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <div className={`land-breadCrumb  ${className}`} style={style}>
    {showMask && <div className={`land-breadCrumb-prefixMask ${isLeft ? 'hidden' : ''}`}></div>}
    <div ref={breadCrumbContainerRef} className="land-breadCrumb-container">
      {Array.from(data)?.reverse().map((item, index) => <BreadCrumbItem
        key={item.value}
        index={index}
        item={item}
        active={current === item.value}
        hoverPreview={hoverPreview}
        onChange={() => onChange?.(item)}
      />)}
    </div>
    {showMask && <div className={`land-breadCrumb-suffixMask ${isRight ? 'hidden' : ''}`}></div>}
  </div>;
};


export default BreadCrumb;
