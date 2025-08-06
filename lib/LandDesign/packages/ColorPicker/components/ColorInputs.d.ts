import { default as React } from 'react';
import { HSV } from '../utils/ColorUtils';
interface ColorInputsProps {
    hsv: HSV;
    colorMode: string;
    newColor: string;
    onColorChange: (hsv: HSV) => void;
    disabled?: boolean;
}
declare const ColorInputs: React.FC<ColorInputsProps>;
export default ColorInputs;
