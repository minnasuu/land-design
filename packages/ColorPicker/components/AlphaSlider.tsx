import React, { useCallback, useMemo, useRef } from 'react';
import { ColorUtils, HSV } from '../utils/ColorUtils';

interface AlphaSliderProps {
  hue: number;
  alpha: number;
  onAlphaChange: (alpha: number) => void;
}

const AlphaSlider: React.FC<AlphaSliderProps> = ({
  hue,
  alpha,
  onAlphaChange,
}) => {
  const alphaSliderRef = useRef<HTMLDivElement>(null);

  // 透明度滑块背景样式
  const alphaSliderStyle = useMemo(() => {
    const rgb = ColorUtils.hsvToRgb(hue, 100, 100);
    const hexColor = ColorUtils.rgbToHex(rgb.r, rgb.g, rgb.b);
    return {
      background: `linear-gradient(to right, transparent 0%, ${hexColor} 100%)`,
    };
  }, [hue]);

  // 处理透明度滑块点击
  const handleAlphaSliderClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!alphaSliderRef.current) return;

      const rect = alphaSliderRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));

      onAlphaChange(x);
    },
    [onAlphaChange]
  );

  // 处理透明度滑块拖拽
  const handleAlphaSliderMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!alphaSliderRef.current) return;

      // 立即处理点击位置
      handleAlphaSliderClick(e);

      const handleMouseMove = (e: MouseEvent) => {
        if (!alphaSliderRef.current) {
          cleanup();
          return;
        }

        const rect = alphaSliderRef.current.getBoundingClientRect();
        const x = Math.max(
          0,
          Math.min(1, (e.clientX - rect.left) / rect.width)
        );

        onAlphaChange(x);
      };

      const handleMouseUp = () => {
        cleanup();
      };

      const cleanup = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [onAlphaChange, handleAlphaSliderClick]
  );

  return (
    <div
      ref={alphaSliderRef}
      className="land-color-picker-slider land-color-picker-alpha-slider"
      onClick={handleAlphaSliderClick}
      onMouseDown={handleAlphaSliderMouseDown}
    >
      <div className="land-color-picker-slider-track" />
      <div
        className="land-color-picker-slider-track"
        style={alphaSliderStyle}
      />
      <div
        className="land-color-picker-slider-thumb"
        style={{ left: `${alpha * 100}%` }}
      />
    </div>
  );
};

export default AlphaSlider; 