import { default as React } from 'react';
interface AlphaSliderProps {
    hue: number;
    alpha: number;
    onAlphaChange: (alpha: number) => void;
}
declare const AlphaSlider: React.FC<AlphaSliderProps>;
export default AlphaSlider;
