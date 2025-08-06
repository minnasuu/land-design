import React, { useCallback, useRef } from 'react';

interface HueSliderProps {
  hue: number;
  onHueChange: (hue: number) => void;
}

const HueSlider: React.FC<HueSliderProps> = ({ hue, onHueChange }) => {
  const hueSliderRef = useRef<HTMLDivElement>(null);

  // 处理色相滑块点击
  const handleHueSliderClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!hueSliderRef.current) return;

      const rect = hueSliderRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));

      onHueChange(x * 360);
    },
    [onHueChange]
  );

  // 处理色相滑块拖拽
  const handleHueSliderMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!hueSliderRef.current) return;

      // 立即处理点击位置
      handleHueSliderClick(e);

      const handleMouseMove = (e: MouseEvent) => {
        if (!hueSliderRef.current) {
          cleanup();
          return;
        }

        const rect = hueSliderRef.current.getBoundingClientRect();
        const x = Math.max(
          0,
          Math.min(1, (e.clientX - rect.left) / rect.width)
        );

        onHueChange(x * 360);
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
    [onHueChange, handleHueSliderClick]
  );

  return (
    <div
      ref={hueSliderRef}
      className="land-color-picker-slider land-color-picker-hue-slider"
      onClick={handleHueSliderClick}
      onMouseDown={handleHueSliderMouseDown}
    >
      <div className="land-color-picker-slider-track" />
      <div
        className="land-color-picker-slider-thumb"
        style={{ left: `${(hue / 360) * 100}%` }}
      />
    </div>
  );
};

export default HueSlider; 