// ============================================================================
// Tooltip 组件
// @description 轻量文字提示组件，用于解释元素含义，内容不可交互
//              基于 Popup 的紧凑预设：复用其定位/触发/受控/挂载能力，
//              仅收敛尺寸（主体圆角、箭头圆角档位、内边距、字号）与默认主题
// @author Land Design System
// ============================================================================

import React, { useMemo } from 'react';
import Popup from '../Popup';
import { TooltipProps } from './props';
import './index.scss';

// 提示气泡比 Popup 更紧凑：主体圆角收敛，箭头使用更小的尺寸档位
const TOOLTIP_RADIUS = 8;
const TOOLTIP_ARROW_SIZE = 'small' as const;
const TOOLTIP_ARROW_RADIUS = 'medium' as const; // medium = 6px 尖端圆角

const Tooltip: React.FC<TooltipProps> = ({
  maxWidth = 240,
  tooltipClassName,
  tooltipStyle,
  theme = 'dark',
  ...rest
}) => {
  const popupClassName = useMemo(
    () => ['land-tooltip', tooltipClassName].filter(Boolean).join(' '),
    [tooltipClassName]
  );

  const popupStyle = useMemo<React.CSSProperties>(
    () => ({ maxWidth, ...tooltipStyle }),
    [maxWidth, tooltipStyle]
  );

  return (
    <Popup
      {...rest}
      theme={theme}
      radius={TOOLTIP_RADIUS}
      arrowRadius={TOOLTIP_ARROW_RADIUS}
      arrowSize={TOOLTIP_ARROW_SIZE}
      popupClassName={popupClassName}
      popupStyle={popupStyle}
    />
  );
};

export default Tooltip;
