import { useEffect, useRef, useState, useCallback, RefObject } from "react";

// ==================== 类型定义 ====================

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

// ==================== 工具函数 ====================

/**
 * 防抖函数
 */
const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// ==================== 主钩子 ====================

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
function useEllipsis<T extends HTMLElement = HTMLElement>(
  options: UseEllipsisOptions = {}
): UseEllipsisResult<T> {
  const {
    line = 1,
    debounceDelay = 100,
    watchParent = true,
    watchDom = true,
    watchResize = true,
  } = options;

  const ref = useRef<T>(null);
  const [isEllipsis, setIsEllipsis] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    scrollWidth: 0,
    scrollHeight: 0,
  });

  // 检查是否省略
  const checkEllipsis = useCallback(() => {
    const element = ref.current;
    if (!element) return;

    const { offsetWidth, offsetHeight, scrollWidth, scrollHeight } = element;

    // 更新尺寸信息
    setDimensions({
      width: offsetWidth,
      height: offsetHeight,
      scrollWidth,
      scrollHeight,
    });

    // 判断是否省略
    if (line === 1) {
      // 单行：比较宽度
      setIsEllipsis(offsetWidth < scrollWidth);
    } else {
      // 多行：比较高度
      setIsEllipsis(offsetHeight < scrollHeight);
    }
  }, [line]);

  // 防抖版本的检查函数
  const debouncedCheck = useCallback(
    debounce(checkEllipsis, debounceDelay),
    [checkEllipsis, debounceDelay]
  );

  // 监听各种变化
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observers: ResizeObserver[] = [];
    let mutationObserver: MutationObserver | null = null;

    // 监听当前元素
    const resizeObserver = new ResizeObserver(() => {
      debouncedCheck();
    });
    resizeObserver.observe(element);
    observers.push(resizeObserver);

    // 监听父级容器
    if (watchParent) {
      let parentElement = element.parentElement;
      while (parentElement && parentElement !== document.body) {
        const parentObserver = new ResizeObserver(() => {
          debouncedCheck();
        });
        parentObserver.observe(parentElement);
        observers.push(parentObserver);
        parentElement = parentElement.parentElement;
      }
    }

    // 监听窗口大小变化
    const handleResize = () => {
      debouncedCheck();
    };

    if (watchResize) {
      window.addEventListener("resize", handleResize);
    }

    // 监听 DOM 变化
    if (watchDom) {
      mutationObserver = new MutationObserver((mutations) => {
        let shouldCheck = false;
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList' || mutation.type === 'attributes') {
            const target = mutation.target as Node;
            if (
              element.contains(target) ||
              target.contains(element) ||
              (element.parentElement && element.parentElement.contains(target))
            ) {
              shouldCheck = true;
            }
          }
        });

        if (shouldCheck) {
          debouncedCheck();
        }
      });

      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class'],
      });
    }

    // 初始检查
    checkEllipsis();

    return () => {
      observers.forEach((observer) => observer.disconnect());
      if (watchResize) {
        window.removeEventListener("resize", handleResize);
      }
      if (mutationObserver) {
        mutationObserver.disconnect();
      }
    };
  }, [checkEllipsis, debouncedCheck, watchParent, watchDom, watchResize]);

  return {
    ref,
    isEllipsis,
    width: dimensions.width,
    height: dimensions.height,
    scrollWidth: dimensions.scrollWidth,
    scrollHeight: dimensions.scrollHeight,
    check: checkEllipsis,
  };
}

export default useEllipsis;
