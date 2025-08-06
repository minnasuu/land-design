import { default as React } from 'react';
interface ColorPanelProps {
    hue: number;
    onPanelChange: (x: number, y: number) => void;
}
declare const ColorPanel: React.FC<ColorPanelProps>;
export default ColorPanel;
