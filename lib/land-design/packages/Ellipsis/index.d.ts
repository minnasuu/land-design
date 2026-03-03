import { default as React } from 'react';
import { EllipsisProps } from './props';
/**
 * Ellipsis 文字省略组件
 * 用于处理文本内容过长时的省略显示，支持单行和多行省略
 */
declare const Ellipsis: React.FC<EllipsisProps>;
export { default as useEllipsis } from './useEllipsis';
export type { UseEllipsisOptions, UseEllipsisResult } from './useEllipsis';
export default Ellipsis;
