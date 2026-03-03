import React, { useMemo, useCallback } from "react";
import './index.scss';
import {
  TimelineProps,
  TimelineItemProps,
  TimelineItem,
  LegacyTimelineProps,
  TimelineItemStatus,
} from "./props";

// ==================== 工具函数 ====================

/**
 * 判断是否为预设颜色
 */
const isPresetColor = (color?: TimelineItemStatus | string): boolean => {
  const presetColors = ['default', 'primary', 'success', 'warning', 'error', 'info'];
  return typeof color === 'string' && presetColors.includes(color);
};

/**
 * 转换旧版属性
 */
const convertLegacyProps = (props: TimelineProps & LegacyTimelineProps): TimelineProps => {
  const { data, direction, ...rest } = props;

  return {
    ...rest,
    items: data ?? rest.items,
    // 兼容旧版 direction: 'row' -> 'horizontal', 'column' -> 'vertical'
    direction: direction === 'row' ? 'horizontal' : direction === 'column' ? 'vertical' : direction,
  };
};

// ==================== Timeline.Item 子组件 ====================

const TimelineItemComponent: React.FC<TimelineItemProps & {
  isLast?: boolean;
  index?: number;
  mode?: 'left' | 'right' | 'alternate';
  direction?: 'vertical' | 'horizontal';
  lineType?: 'solid' | 'dashed' | 'dotted';
  showLine?: boolean;
  globalIcon?: React.ReactNode;
  onItemClick?: (e: React.MouseEvent) => void;
}> = ({
  children,
  title,
  subTitle,
  desc,
  extra,
  icon,
  color = 'default',
  active = false,
  disabled = false,
  dotStyle,
  contentStyle,
  className = '',
  onClick,
  isLast = false,
  index = 0,
  mode = 'right',
  direction = 'vertical',
  lineType = 'solid',
  showLine = true,
  globalIcon,
  onItemClick,
}) => {
  // 计算节点位置（交替模式）
  const position = useMemo(() => {
    if (mode === 'alternate') {
      return index % 2 === 0 ? 'right' : 'left';
    }
    return mode;
  }, [mode, index]);

  // 处理点击
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (disabled) return;
      onClick?.(e);
      onItemClick?.(e);
    },
    [disabled, onClick, onItemClick]
  );

  // 构建类名
  const itemClassName = [
    'land-timeline__item',
    `land-timeline__item--${position}`,
    direction === 'horizontal' && 'land-timeline__item--horizontal',
    active && 'land-timeline__item--active',
    disabled && 'land-timeline__item--disabled',
    (onClick || onItemClick) && !disabled && 'land-timeline__item--clickable',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // 构建节点类名
  const dotClassName = [
    'land-timeline__dot',
    isPresetColor(color) && `land-timeline__dot--${color}`,
    !isPresetColor(color) && color && 'land-timeline__dot--custom',
    icon && 'land-timeline__dot--icon',
  ]
    .filter(Boolean)
    .join(' ');

  // 节点样式
  const dotStyleMerged: React.CSSProperties = {
    ...dotStyle,
    ...(!isPresetColor(color) && color ? { '--timeline-dot-custom-color': color } as React.CSSProperties : {}),
  };

  // 渲染节点
  const renderDot = () => {
    const nodeIcon = icon || globalIcon;

    if (nodeIcon) {
      return (
        <span className={dotClassName} style={dotStyleMerged}>
          {nodeIcon}
        </span>
      );
    }

    return <span className={dotClassName} style={dotStyleMerged} />;
  };

  // 渲染内容
  const renderContent = () => {
    const hasContent = title || subTitle || desc || extra || children;

    if (!hasContent) return null;

    return (
      <div className="land-timeline__content" style={contentStyle}>
        {title && <div className="land-timeline__title">{title}</div>}
        {subTitle && <div className="land-timeline__subtitle">{subTitle}</div>}
        {desc && <div className="land-timeline__desc">{desc}</div>}
        {extra && <div className="land-timeline__extra">{extra}</div>}
        {children}
      </div>
    );
  };

  // 渲染连接线
  const renderLine = () => {
    if (isLast || !showLine) return null;

    const lineClassName = [
      'land-timeline__line',
      `land-timeline__line--${lineType}`,
    ]
      .filter(Boolean)
      .join(' ');

    return <span className={lineClassName} />;
  };

  return (
    <div className={itemClassName} onClick={handleClick}>
      <div className="land-timeline__indicator">
        {renderDot()}
        {renderLine()}
      </div>
      {renderContent()}
    </div>
  );
};

// ==================== Timeline 主组件 ====================

const Timeline: React.FC<TimelineProps & LegacyTimelineProps> & {
  Item: typeof TimelineItemComponent;
} = (props) => {
  const normalizedProps = convertLegacyProps(props);

  const {
    // 基础属性
    children,
    items = [],
    icon,
    pending,
    pendingIcon,
    reverse = false,

    // 布局属性
    direction = 'vertical',
    mode = 'right',
    gap,

    // 样式属性
    style,
    className = '',
    lineType = 'solid',
    lineColor,
    lineWidth,
    dotSize,
    dotColor,
    showLine = true,

    // 事件属性
    onItemClick,
  } = normalizedProps;

  // 处理 items 数据
  const finalItems = useMemo(() => {
    let result = [...items];

    // 添加 pending 项
    if (pending) {
      result.push({
        title: typeof pending === 'boolean' ? undefined : pending,
        icon: pendingIcon,
        className: 'land-timeline__item--pending',
      });
    }

    // 倒序
    if (reverse) {
      result = result.reverse();
    }

    return result;
  }, [items, pending, pendingIcon, reverse]);

  // 构建容器类名
  const timelineClassName = [
    'land-timeline',
    `land-timeline--${direction}`,
    `land-timeline--${mode}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // 构建容器样式
  const timelineStyle: React.CSSProperties = {
    ...style,
    ...(gap ? { '--timeline-gap': typeof gap === 'number' ? `${gap}px` : gap } as React.CSSProperties : {}),
    ...(lineColor ? { '--timeline-line-color': lineColor } as React.CSSProperties : {}),
    ...(lineWidth ? { '--timeline-line-width': `${lineWidth}px` } as React.CSSProperties : {}),
    ...(dotSize ? { '--timeline-dot-size': `${dotSize}px` } as React.CSSProperties : {}),
    ...(dotColor ? { '--timeline-dot-color': dotColor } as React.CSSProperties : {}),
  };

  // 处理 item 点击
  const handleItemClick = useCallback(
    (item: TimelineItem, index: number) => (e: React.MouseEvent) => {
      onItemClick?.(item, index, e);
    },
    [onItemClick]
  );

  // 渲染 items
  const renderItems = () => {
    // 优先使用 children
    if (children) {
      return React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        const childCount = React.Children.count(children);

        return React.cloneElement(child as React.ReactElement<any>, {
          index,
          isLast: index === childCount - 1,
          mode,
          direction,
          lineType,
          showLine,
          globalIcon: icon,
        });
      });
    }

    // 使用 items 数据
    return finalItems.map((item, index) => (
      <TimelineItemComponent
        key={item.key ?? index}
        {...item}
        index={index}
        isLast={index === finalItems.length - 1}
        mode={mode}
        direction={direction}
        lineType={lineType}
        showLine={showLine}
        globalIcon={icon}
        onItemClick={handleItemClick(item, index)}
      />
    ));
  };

  return (
    <div className={timelineClassName} style={timelineStyle}>
      {renderItems()}
    </div>
  );
};

// ─── 挂载子组件 ───
Timeline.Item = TimelineItemComponent;

export default Timeline;
