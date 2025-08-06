import React, { useCallback } from 'react';
import Input from "../../Input";
import NumberInput from "../../NumberInput";
import { ColorUtils, HSV } from '../utils/ColorUtils';

interface ColorInputsProps {
  hsv: HSV;
  colorMode: string;
  newColor: string;
  onColorChange: (hsv: HSV) => void;
  disabled?: boolean;
}

import { COLOR_MODE_OPTIONS } from '../constants';

const colorModeOption = COLOR_MODE_OPTIONS;

const ColorInputs: React.FC<ColorInputsProps> = ({
  hsv,
  colorMode,
  newColor,
  onColorChange,
  disabled = false
}) => {
  const rgb = ColorUtils.hsvToRgb(hsv.h, hsv.s, hsv.v);
  const hsl = ColorUtils.rgbToHsl(rgb.r, rgb.g, rgb.b);

  const renderColorModeInput = useCallback(() => {
    switch (colorMode) {
      case "hex":
        return (
          <div className="land-color-picker-panel-color-input-hex">
            <Input
              value={newColor.replace('#', '')}
              onChange={(value) => {
                if (disabled) return;
                const hex = `#${value}`;
                const rgb = ColorUtils.hexToRgb(hex);
                if (rgb) {
                  const hsvColor = ColorUtils.rgbToHsv(rgb.r, rgb.g, rgb.b);
                  onColorChange(hsvColor);
                }
              }}
              placeholder="000000"
              disabled={disabled}
            />
          </div>
        );
      case "hsv":
        return (
          <div className="land-color-picker-panel-color-input-hsv">
            <NumberInput
              value={Math.round(hsv.h)}
              onChange={(value) => {
                if (disabled) return;
                onColorChange({ ...hsv, h: value });
              }}
              suffix="°"
              disabled={disabled}
            />
            <NumberInput
              value={Math.round(hsv.s)}
              onChange={(value) => {
                if (disabled) return;
                onColorChange({ ...hsv, s: value });
              }}
              suffix="%"
              disabled={disabled}
            />
            <NumberInput
              value={Math.round(hsv.v)}
              onChange={(value) => {
                if (disabled) return;
                onColorChange({ ...hsv, v: value });
              }}
              suffix="%"
              disabled={disabled}
            />
          </div>
        );
      case "hsl":
        return (
          <div className="land-color-picker-panel-color-input-hsl">
            <NumberInput
              value={Math.round(hsl.h)}
              onChange={(value) => {
                if (disabled) return;
                const rgb = ColorUtils.hslToRgb(value, hsl.s, hsl.l);
                const hsvColor = ColorUtils.rgbToHsv(rgb.r, rgb.g, rgb.b);
                onColorChange(hsvColor);
              }}
              suffix="°"
              disabled={disabled}
            />
            <NumberInput
              value={Math.round(hsl.s)}
              onChange={(value) => {
                if (disabled) return;
                const rgb = ColorUtils.hslToRgb(hsl.h, value, hsl.l);
                const hsvColor = ColorUtils.rgbToHsv(rgb.r, rgb.g, rgb.b);
                onColorChange(hsvColor);
              }}
              suffix="%"
              disabled={disabled}
            />
            <NumberInput
              value={Math.round(hsl.l)}
              onChange={(value) => {
                if (disabled) return;
                const rgb = ColorUtils.hslToRgb(hsl.h, hsl.s, value);
                const hsvColor = ColorUtils.rgbToHsv(rgb.r, rgb.g, rgb.b);
                onColorChange(hsvColor);
              }}
              suffix="%"
              disabled={disabled}
            />
          </div>
        );
      case "rgb":
        return (
          <div className="land-color-picker-panel-color-input-rgb">
            <NumberInput
              value={rgb.r}
              onChange={(value) => {
                if (disabled) return;
                const hsvColor = ColorUtils.rgbToHsv(value, rgb.g, rgb.b);
                onColorChange(hsvColor);
              }}
              min={0}
              max={255}
              disabled={disabled}
            />
            <NumberInput
              value={rgb.g}
              onChange={(value) => {
                if (disabled) return;
                const hsvColor = ColorUtils.rgbToHsv(rgb.r, value, rgb.b);
                onColorChange(hsvColor);
              }}
              min={0}
              max={255}
              disabled={disabled}
            />
            <NumberInput
              value={rgb.b}
              onChange={(value) => {
                if (disabled) return;
                const hsvColor = ColorUtils.rgbToHsv(rgb.r, rgb.g, value);
                onColorChange(hsvColor);
              }}
              min={0}
              max={255}
              disabled={disabled}
            />
          </div>
        );
      default:
        return null;
    }
  }, [colorMode, hsv, newColor, onColorChange, rgb, hsl, disabled]);

  return (
    <div className="land-color-picker-panel-color-input">
      {renderColorModeInput()}
    </div>
  );
};

export default ColorInputs; 