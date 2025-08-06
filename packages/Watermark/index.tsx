import React, { useRef, useEffect, useState, useCallback, useMemo } from "react";
import './index.scss';
import { WatermarkProps } from "./props";

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
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  // 优化后的水印位置生成算法
  const generateWatermarks = useCallback(() => {
    const { width: containerWidth, height: containerHeight } = containerSize;

    // 如果容器尺寸为0，返回空数组
    if (containerWidth === 0 || containerHeight === 0) return [];

    const [gapX, gapY] = gap;
    const [offsetX, offsetY] = offset;

    // 计算有效间距（考虑水印尺寸）
    const effectiveGapX = Math.max(gapX, width);
    const effectiveGapY = Math.max(gapY, height);

    // 计算水印在容器内的有效区域
    const effectiveWidth = containerWidth - width;
    const effectiveHeight = containerHeight - height;

    // 确保偏移量在合理范围内
    const safeOffsetX = Math.max(0, Math.min(offsetX, effectiveWidth));
    const safeOffsetY = Math.max(0, Math.min(offsetY, effectiveHeight));

    // 计算需要的水印数量，确保覆盖整个容器
    const cols = Math.ceil((effectiveWidth - safeOffsetX) / effectiveGapX) + 1;
    const rows = Math.ceil((effectiveHeight - safeOffsetY) / effectiveGapY) + 1;

    const newWatermarks = [];

    // 生成水印位置，确保均匀分布
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = safeOffsetX + col * effectiveGapX;
        const y = safeOffsetY + row * effectiveGapY;

        // 确保水印不会超出容器边界
        if (x + width <= containerWidth && y + height <= containerHeight) {
          newWatermarks.push({
            id: `${row}-${col}`,
            x,
            y,
          });
        }
      }
    }

    // 如果生成的水印太少，增加额外的水印来确保覆盖
    if (newWatermarks.length < 4) {
      const additionalWatermarks = [];

      // 在容器中心添加水印
      const centerX = (containerWidth - width) / 2;
      const centerY = (containerHeight - height) / 2;

      additionalWatermarks.push({
        id: "center",
        x: centerX,
        y: centerY,
      });

      // 在四个角落添加水印
      const cornerOffset = 20;
      const corners = [
        { x: cornerOffset, y: cornerOffset },
        { x: containerWidth - width - cornerOffset, y: cornerOffset },
        { x: cornerOffset, y: containerHeight - height - cornerOffset },
        {
          x: containerWidth - width - cornerOffset,
          y: containerHeight - height - cornerOffset,
        },
      ];

      corners.forEach((corner, index) => {
        if (corner.x >= 0 && corner.y >= 0) {
          additionalWatermarks.push({
            id: `corner-${index}`,
            x: corner.x,
            y: corner.y,
          });
        }
      });

      return [...newWatermarks, ...additionalWatermarks];
    }

    return newWatermarks;
  }, [containerSize, gap, offset, width, height]);

  // 使用 useMemo 缓存水印数组，减少不必要的重新计算
  const watermarks = useMemo(() => {
    return generateWatermarks();
  }, [generateWatermarks]);

  // 更新容器尺寸
  const updateContainerSize = useCallback(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setContainerSize({ width: offsetWidth, height: offsetHeight });
    }
  }, []);

  // 初始化容器尺寸
  useEffect(() => {
    updateContainerSize();
  }, [updateContainerSize]);

  // 监听容器大小变化 - 优化内存管理
  useEffect(() => {
    // 清理之前的 ResizeObserver
    if (resizeObserverRef.current) {
      resizeObserverRef.current.disconnect();
      resizeObserverRef.current = null;
    }

    // 创建新的 ResizeObserver
    resizeObserverRef.current = new ResizeObserver(() => {
      updateContainerSize();
    });

    // 观察容器
    if (containerRef.current) {
      resizeObserverRef.current.observe(containerRef.current);
    }

    // 清理函数
    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
        resizeObserverRef.current = null;
      }
    };
  }, [updateContainerSize]);

  // 组件卸载时确保清理
  useEffect(() => {
    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
        resizeObserverRef.current = null;
      }
    };
  }, []);

  // 计算水印样式
  const watermarkStyle = useMemo(
    () => ({
      width: `${width}px`,
      height: `${height}px`,
      color: fontColor,
      fontSize: `${fontSize}px`,
      fontWeight,
      fontFamily,
      zIndex,
      transform: `rotate(${rotate}deg)`,
    }),
    [width, height, fontColor, fontSize, fontWeight, fontFamily, zIndex, rotate]
  );

  // 渲染单个水印
  const renderWatermark = useCallback(
    (watermark: { id: string; x: number; y: number }) => {
      const itemStyle = {
        ...watermarkStyle,
        left: `${watermark.x}px`,
        top: `${watermark.y}px`,
      };

      const itemClassName = `land-watermark-item ${url ? "img" : ""}`;

      return (
        <div key={watermark.id} className={itemClassName} style={itemStyle}>
          {url ? <img src={url} alt="watermark" /> : content}
        </div>
      );
    },
    [watermarkStyle, url, content]
  );

  return (
    <div
      ref={containerRef}
      className={`land-watermark  ${className ?? ""}`}
      style={style}
    >
      {children}
      <div className="land-watermark-content">
        {watermarks.map(renderWatermark)}
      </div>
    </div>
  );
};

export default Watermark;
