import React, { useRef, useEffect, useState, useCallback, useMemo } from "react";
import './index.scss';
import { WatermarkProps } from "./props";

const prefixCls = 'land-watermark';

const Watermark: React.FC<WatermarkProps> = ({
  children,
  content,
  url,
  width = 120,
  height = 64,
  gap = [180, 120],
  offset = [50, 50],
  rotate = -22,
  fontSize = "var(--font-content-m)",
  fontColor = "var(--color-text-quaternary)",
  fontWeight = "normal",
  fontFamily = "sans-serif",
  zIndex = 9,
  style,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  // ─── 类名计算 ───
  const rootClassName = useMemo(() => {
    return [prefixCls, className].filter(Boolean).join(' ');
  }, [className]);

  // ─── 水印位置生成算法 ───
  const generateWatermarks = useCallback(() => {
    const { width: containerWidth, height: containerHeight } = containerSize;

    if (containerWidth === 0 || containerHeight === 0) return [];

    const [gapX, gapY] = gap;
    const [offsetX, offsetY] = offset;

    const effectiveGapX = Math.max(gapX, width);
    const effectiveGapY = Math.max(gapY, height);
    const effectiveWidth = containerWidth - width;
    const effectiveHeight = containerHeight - height;
    const safeOffsetX = Math.max(0, Math.min(offsetX, effectiveWidth));
    const safeOffsetY = Math.max(0, Math.min(offsetY, effectiveHeight));

    const cols = Math.ceil((effectiveWidth - safeOffsetX) / effectiveGapX) + 1;
    const rows = Math.ceil((effectiveHeight - safeOffsetY) / effectiveGapY) + 1;

    const newWatermarks = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = safeOffsetX + col * effectiveGapX;
        const y = safeOffsetY + row * effectiveGapY;

        if (x + width <= containerWidth && y + height <= containerHeight) {
          newWatermarks.push({ id: `${row}-${col}`, x, y });
        }
      }
    }

    // 补充水印确保覆盖
    if (newWatermarks.length < 4) {
      const centerX = (containerWidth - width) / 2;
      const centerY = (containerHeight - height) / 2;

      newWatermarks.push({ id: "center", x: centerX, y: centerY });

      const cornerOffset = 20;
      const corners = [
        { x: cornerOffset, y: cornerOffset },
        { x: containerWidth - width - cornerOffset, y: cornerOffset },
        { x: cornerOffset, y: containerHeight - height - cornerOffset },
        { x: containerWidth - width - cornerOffset, y: containerHeight - height - cornerOffset },
      ];

      corners.forEach((corner, index) => {
        if (corner.x >= 0 && corner.y >= 0) {
          newWatermarks.push({ id: `corner-${index}`, x: corner.x, y: corner.y });
        }
      });
    }

    return newWatermarks;
  }, [containerSize, gap, offset, width, height]);

  // ─── 水印数组缓存 ───
  const watermarks = useMemo(() => generateWatermarks(), [generateWatermarks]);

  // ─── 更新容器尺寸 ───
  const updateContainerSize = useCallback(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setContainerSize({ width: offsetWidth, height: offsetHeight });
    }
  }, []);

  // ─── 初始化容器尺寸 ───
  useEffect(() => {
    updateContainerSize();
  }, [updateContainerSize]);

  // ─── 监听容器大小变化 ───
  useEffect(() => {
    if (resizeObserverRef.current) {
      resizeObserverRef.current.disconnect();
      resizeObserverRef.current = null;
    }

    resizeObserverRef.current = new ResizeObserver(() => {
      updateContainerSize();
    });

    if (containerRef.current) {
      resizeObserverRef.current.observe(containerRef.current);
    }

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
        resizeObserverRef.current = null;
      }
    };
  }, [updateContainerSize]);

  // ─── 组件卸载清理 ───
  useEffect(() => {
    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
        resizeObserverRef.current = null;
      }
    };
  }, []);

  // ─── 水印样式计算 ───
  const watermarkStyle = useMemo(() => ({
    width: `${width}px`,
    height: `${height}px`,
    color: fontColor,
    fontSize: `${fontSize}px`,
    fontWeight,
    fontFamily,
    zIndex,
    transform: `rotate(${rotate}deg)`,
  }), [width, height, fontColor, fontSize, fontWeight, fontFamily, zIndex, rotate]);

  // ─── 渲染单个水印 ───
  const renderWatermark = useCallback((watermark: { id: string; x: number; y: number }) => {
    const itemStyle = {
      ...watermarkStyle,
      left: `${watermark.x}px`,
      top: `${watermark.y}px`,
    };

    const itemClassName = `${prefixCls}__item ${url ? `${prefixCls}__item--img` : ''}`;

    return (
      <div key={watermark.id} className={itemClassName} style={itemStyle}>
        {url ? <img src={url} alt="watermark" /> : content}
      </div>
    );
  }, [watermarkStyle, url, content]);

  return (
    <div ref={containerRef} className={rootClassName} style={style}>
      {children}
      <div className={`${prefixCls}__content`}>
        {watermarks.map(renderWatermark)}
      </div>
    </div>
  );
};

export default Watermark;
