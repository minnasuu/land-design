import { CSSProperties } from 'react';
import { PopupProps } from '../Popup/props';

/**
 * Tooltip 组件属性
 *
 * 与 Popup 共用同一套气泡能力（定位、触发方式、受控模式、挂载层级、边界检测），
 * 差异只在「呈现预设」：
 * - Tooltip：一句文字说明，尺寸紧凑、默认深色、内容不可交互，
 *   因此不暴露 radius / arrowRadius 等形状细粒度控制（尺寸由 `.land-tooltip` 预设）；
 * - Popup：气泡卡片，可承载富内容与交互元素，并保留完整形状控制能力。
 */
export interface TooltipProps
  extends Omit<
    PopupProps,
    'radius' | 'arrowRadius' | 'arrowSize' | 'popupClassName' | 'popupStyle'
  > {
  /**
   * 提示最大宽度，超出后换行
   * @default 240
   */
  maxWidth?: number | string;
  /**
   * 气泡自定义类名
   */
  tooltipClassName?: string;
  /**
   * 气泡自定义样式
   */
  tooltipStyle?: CSSProperties;
}
