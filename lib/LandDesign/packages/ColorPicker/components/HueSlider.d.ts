import { default as React } from 'react';
interface HueSliderProps {
    hue: number;
    onHueChange: (hue: number) => void;
}
declare const HueSlider: React.FC<HueSliderProps>;
export default HueSlider;
