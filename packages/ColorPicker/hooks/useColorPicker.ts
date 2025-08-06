import { useEffect, useState, useCallback, useRef } from 'react';
import { ColorUtils, HSV } from '../utils/ColorUtils';
import { DEFAULT_COLOR_MODE, DEFAULT_HSV, DEFAULT_ALPHA } from '../constants';

interface UseColorPickerProps {
  color: string;
  onChange?: (color: string, data: any) => void;
}

export const useColorPicker = ({ color, onChange }: UseColorPickerProps) => {

  const [newColor, setNewColor] = useState<string>(color);
  const [colorMode, setColorMode] = useState<string>(DEFAULT_COLOR_MODE);
  const [hsv, setHsv] = useState<HSV>(DEFAULT_HSV);
  const [alpha, setAlpha] = useState(DEFAULT_ALPHA);

  // 用于跟踪组件是否已卸载
  const isMountedRef = useRef(true);

  // 初始化颜色
  useEffect(() => {
    const initColor = () => {
      if (!isMountedRef.current) return;

      // 处理CSS变量和其他颜色格式
      let rgb = ColorUtils.hexToRgb(color);
      if (!rgb) {
        // 如果是CSS变量或其他格式，尝试解析
        if (color.startsWith('var(--')) {
          // 对于CSS变量，使用默认颜色
          rgb = { r: 128, g: 128, b: 128 };
        } else {
          // 尝试其他颜色格式
          rgb = { r: 128, g: 128, b: 128 };
        }
      }

      const hsvColor = ColorUtils.rgbToHsv(rgb.r, rgb.g, rgb.b);
      setHsv(hsvColor);
      setNewColor(color);
    };

    initColor();

    // 清理函数
    return () => {
      isMountedRef.current = false;
    };
  }, [color]);

  // 组件卸载时清理
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // 更新颜色
  const updateColor = useCallback((newHsv: HSV, newAlpha: number = alpha) => {
    if (!isMountedRef.current) return;

    const rgb = ColorUtils.hsvToRgb(newHsv.h, newHsv.s, newHsv.v);
    const hex = ColorUtils.rgbToHex(rgb.r, rgb.g, rgb.b);
    const finalColor = newAlpha < 1 ? `${hex}${Math.round(newAlpha * 255).toString(16).padStart(2, '0')}` : hex;

    setNewColor(finalColor);
    setHsv(newHsv);
    setAlpha(newAlpha);
    onChange?.(finalColor, {} as any);
  }, [alpha, onChange]);

  // 处理颜色变化
  const handleColorChange = useCallback((newHsv: HSV) => {
    updateColor(newHsv);
  }, [updateColor]);

  // 处理透明度变化
  const handleAlphaChange = useCallback((newAlpha: number) => {
    updateColor(hsv, newAlpha);
  }, [hsv, updateColor]);

  // 处理颜色模式变化
  const handleColorModeChange = useCallback((mode: string) => {
    if (!isMountedRef.current) return;
    setColorMode(mode);
  }, []);

  return {
    newColor,
    colorMode,
    hsv,
    alpha,
    handleColorChange,
    handleAlphaChange,
    handleColorModeChange,
  };
}; 