import { default as React } from 'react';
import { ButtonProps } from './props';
declare const ButtonChange: React.FC<{
    defaultSide: string | React.ReactNode;
    hoverSide: string | React.ReactNode;
} & Omit<ButtonProps, 'children'>>;
export default ButtonChange;
