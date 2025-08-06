import { default as React } from 'react';
import { default as ButtonArrow } from './ButtonArrow';
import { default as ButtonChange } from './ButtonChange';
import { ButtonProps } from './props';
declare const Button: React.FC<ButtonProps> & {
    ButtonArrow: typeof ButtonArrow;
    ButtonChange: typeof ButtonChange;
};
export default Button;
