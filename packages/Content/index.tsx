import React, { CSSProperties, useEffect, useState } from "react";
import './index.scss';
import { ContentProps } from './props';

const Content: React.FC<ContentProps> = ({ children, style, className }) => {
  // 计算内容区域最小高度
  const [minHeight, setMinHeight] = useState<number>(132);
  const headerElem = document.querySelector(".land-header");
  const footerElem = document.querySelector(".land-footer");
  useEffect(() => {
    let headerHeight: number;
    let footerHeight: number;
    headerElem
      ? (headerHeight = headerElem.getBoundingClientRect().height)
      : (headerHeight = 0);
    footerElem
      ? (footerHeight = footerElem.getBoundingClientRect().height)
      : (footerHeight = 0);
    setMinHeight(headerHeight + footerHeight);
  });
  return (
    <div className={`land-content ${className}`} style={{
      '--land-content-min-height': `${minHeight}px`,
      ...style
    } as CSSProperties}>
      {children}
    </div>
  );
};


export default Content;
