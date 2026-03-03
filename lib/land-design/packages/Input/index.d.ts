import { default as React } from 'react';
import { InputProps } from './props';
import { default as InputHighlight } from './InputHighlight';
declare const Input: React.FC<InputProps> & {
    InputHighlight: typeof InputHighlight;
};
export default Input;
