import React from "react";
import './index.scss';
import { LayoutProps } from './props';

const Layout: React.FC<LayoutProps> = ({ children, style, className }) => (
  <div className={`land-layout ${className}`} style={style}>
    {children}
  </div>
);

export default Layout;
