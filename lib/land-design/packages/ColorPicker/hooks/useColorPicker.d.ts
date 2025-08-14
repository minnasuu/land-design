import { HSV } from '../utils/ColorUtils';
interface UseColorPickerProps {
    color: string;
    onChange?: (color: string, data: any) => void;
}
export declare const useColorPicker: ({ color, onChange }: UseColorPickerProps) => {
    newColor: string;
    colorMode: string;
    hsv: HSV;
    alpha: number;
    handleColorChange: (newHsv: HSV) => void;
    handleAlphaChange: (newAlpha: number) => void;
    handleColorModeChange: (mode: string) => void;
};
export {};
