import { default as React } from 'react';
import { TimelineProps, TimelineItemProps, LegacyTimelineProps } from './props';
declare const TimelineItemComponent: React.FC<TimelineItemProps & {
    isLast?: boolean;
    index?: number;
    mode?: 'left' | 'right' | 'alternate';
    direction?: 'vertical' | 'horizontal';
    lineType?: 'solid' | 'dashed' | 'dotted';
    showLine?: boolean;
    globalIcon?: React.ReactNode;
    onItemClick?: (e: React.MouseEvent) => void;
}>;
declare const Timeline: React.FC<TimelineProps & LegacyTimelineProps> & {
    Item: typeof TimelineItemComponent;
};
export default Timeline;
