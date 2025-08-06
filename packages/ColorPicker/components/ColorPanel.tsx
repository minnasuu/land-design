import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import { ColorUtils } from "../utils/ColorUtils";

interface ColorPanelProps {
  hue: number;
  onPanelChange: (x: number, y: number) => void;
}

const ColorPanel: React.FC<ColorPanelProps> = ({ hue, onPanelChange }) => {
  const colorPanelRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // 颜色面板背景样式
  const colorPanelStyle = useMemo(() => {
    const rgb = ColorUtils.hsvToRgb(hue, 100, 100);
    const hexColor = ColorUtils.rgbToHex(rgb.r, rgb.g, rgb.b);
    return {
      background: `linear-gradient(to right, #fff 0%, ${hexColor} 100%),
                   linear-gradient(to top, #000 0%, transparent 100%)`,
    };
  }, [hue]);

  // 全局鼠标事件处理
  const handleGlobalMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleGlobalMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !colorPanelRef.current) return;

      const { left, top } = colorPanelRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      // 限制在panel范围内
      const maxX = colorPanelRef.current.clientWidth;
      const maxY = colorPanelRef.current.clientHeight;
      const clampedX = Math.max(0, Math.min(maxX, x));
      const clampedY = Math.max(0, Math.min(maxY, y));

      setPos({ x: clampedX, y: clampedY });
      const xPercentage = clampedX / maxX;
      const yPercentage = 1 - clampedY / maxY;
      onPanelChange(xPercentage, yPercentage);
    },
    [isDragging, onPanelChange]
  );

  // 添加和移除全局事件监听
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);

      return () => {
        document.removeEventListener("mousemove", handleGlobalMouseMove);
        document.removeEventListener("mouseup", handleGlobalMouseUp);
      };
    }
  }, [isDragging, handleGlobalMouseMove, handleGlobalMouseUp]);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(true);

      // 立即设置初始位置
      const { left, top } = colorPanelRef.current?.getBoundingClientRect() || {
        left: 0,
        top: 0,
      };
      const x = e.clientX - left;
      const y = e.clientY - top;

      const maxX = colorPanelRef.current?.clientWidth || 0;
      const maxY = colorPanelRef.current?.clientHeight || 0;
      const clampedX = Math.max(0, Math.min(maxX, x));
      const clampedY = Math.max(0, Math.min(maxY, y));

      setPos({ x: clampedX, y: clampedY });
      const xPercentage = clampedX / maxX;
      const yPercentage = 1 - clampedY / maxY;
      onPanelChange(xPercentage, yPercentage);
    },
    [onPanelChange]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      e.preventDefault();

      const { left, top } = colorPanelRef.current?.getBoundingClientRect() || {
        left: 0,
        top: 0,
      };
      const x = e.clientX - left;
      const y = e.clientY - top;

      const maxX = colorPanelRef.current?.clientWidth || 0;
      const maxY = colorPanelRef.current?.clientHeight || 0;
      const clampedX = Math.max(0, Math.min(maxX, x));
      const clampedY = Math.max(0, Math.min(maxY, y));

      setPos({ x: clampedX, y: clampedY });
      const xPercentage = clampedX / maxX;
      const yPercentage = 1 - clampedY / maxY;
      onPanelChange(xPercentage, yPercentage);
    },
    [isDragging, onPanelChange]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div
      ref={colorPanelRef}
      className="land-color-picker-panel-move-area"
      style={colorPanelStyle}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className="land-color-picker-pointer"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      />
    </div>
  );
};

export default ColorPanel;
