import { RefObject } from 'react';
/**
 * useEllipsis 钩子配置选项
 */
export interface UseEllipsisOptions {
    /**
     * 显示行数
     * 设置文本显示的最大行数，超过时判定为需要省略
     * @default 1
     */
    line?: number;
    /**
     * 防抖延迟时间（毫秒）
     * 用于优化频繁尺寸变化时的性能
     * @default 100
     */
    debounceDelay?: number;
    /**
     * 是否监听父级容器变化
     * @default true
     */
    watchParent?: boolean;
    /**
     * 是否监听 DOM 变化
     * @default true
     */
    watchDom?: boolean;
    /**
     * 是否监听窗口大小变化
     * @default true
     */
    watchResize?: boolean;
}
/**
 * useEllipsis 钩子返回值
 */
export interface UseEllipsisResult<T extends HTMLElement = HTMLElement> {
    /**
     * 需要绑定到目标元素的 ref
     */
    ref: RefObject<T>;
    /**
     * 是否处于省略状态（文本溢出）
     */
    isEllipsis: boolean;
    /**
     * 元素的当前宽度
     */
    width: number;
    /**
     * 元素的当前高度
     */
    height: number;
    /**
     * 元素的滚动宽度（实际内容宽度）
     */
    scrollWidth: number;
    /**
     * 元素的滚动高度（实际内容高度）
     */
    scrollHeight: number;
    /**
     * 手动触发检查
     */
    check: () => void;
}
/**
 * useEllipsis - 文本省略检测钩子
 *
 * 用于检测元素内的文本是否被省略（溢出），支持单行和多行检测。
 *
 * @param options 配置选项
 * @returns 包含 ref、省略状态和尺寸信息的对象
 *
 * @example
 * ```tsx
 * // 单行省略检测
 * const { ref, isEllipsis } = useEllipsis();
 *
 * return (
 *   <div ref={ref} style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
 *     {longText}
 *   </div>
 * );
 * ```
 *
 * @example
 * ```tsx
 * // 多行省略检测
 * const { ref, isEllipsis, width } = useEllipsis({ line: 3 });
 *
 * return (
 *   <div
 *     ref={ref}
 *     style={{
 *       display: '-webkit-box',
 *       WebkitLineClamp: 3,
 *       WebkitBoxOrient: 'vertical',
 *       overflow: 'hidden'
 *     }}
 *   >
 *     {longText}
 *   </div>
 * );
 * ```
 */
declare function useEllipsis<T extends HTMLElement = HTMLElement>(options?: UseEllipsisOptions): UseEllipsisResult<T>;
export default useEllipsis;
