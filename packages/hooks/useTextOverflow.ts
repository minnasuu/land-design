import { RefObject, useEffect, useState } from 'react';

interface UseTextOverflowOptions {
  /** 监听依赖，内容变化时重新检测 */
  deps?: unknown[];
  /**
   * 文本行数，大于 1 时检测多行溢出（scrollHeight > offsetHeight）
   * @default 1
   */
  line?: number;
}

/**
 * 检测文本是否溢出容器
 * - line=1（默认）：比较 scrollWidth > offsetWidth
 * - line>1：比较 scrollHeight > offsetHeight
 *
 * @param ref 目标元素的 ref
 * @param options 配置项
 * @returns 是否溢出
 */
const useTextOverflow = (
  ref: RefObject<HTMLElement | null>,
  options: UseTextOverflowOptions = {},
): boolean => {
  const { deps = [], line = 1 } = options;
  const [overflow, setOverflow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (line > 1) {
      setOverflow(el.scrollHeight > el.offsetHeight);
    } else {
      setOverflow(el.scrollWidth > el.offsetWidth);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, line, ...deps]);

  return overflow;
};

export default useTextOverflow;
