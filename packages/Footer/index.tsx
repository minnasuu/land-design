import React from "react";
import './index.scss';
import { FooterProps } from './props';

const Footer: React.FC<FooterProps> = ({ children, style, className }) => <div className={`land-footer ${className}`} style={style} >{children}</div>;

export default Footer;
