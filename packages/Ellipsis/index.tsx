import React, {
  CSSProperties,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import "./index.scss";
import PopOver from "../PopOver";
import { EllipsisProps } from "./props";

// 防抖函数
const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const Ellipsis: React.FC<EllipsisProps> = ({
  line = 1,
  text,
  children,
  open = true,
  style,
  className,
  popoverProps,
  setMaxWidth,
}) => {
  const ellipsisRef = useRef<HTMLDivElement>(null);
  const [ellipsis, setEllipsis] = useState<boolean>(false);
  const [contentWidth, setContentWidth] = useState<number>(0);

  // 获取要显示的文本内容，优先使用text，其次使用children
  const displayText = text || children || "";

  // 检查是否需要显示省略号
  const checkEllipsis = useCallback(() => {
    const element = ellipsisRef.current;
    if (!element) return;

    if (line === 1) {
      // 单行省略：检查宽度是否超出
      const isOverflow = element.offsetWidth < element.scrollWidth;
      setContentWidth(element.offsetWidth);
      setEllipsis(isOverflow);
    } else {
      // 多行省略：检查高度是否超出
      const isOverflow = element.offsetHeight < element.scrollHeight;
      setContentWidth(element.offsetWidth);
      setEllipsis(isOverflow);
    }
  }, [line]);

  // 防抖版本的检查函数
  const debouncedCheckEllipsis = useCallback(
    debounce(checkEllipsis, 100),
    [checkEllipsis]
  );

  // 监听容器大小变化
  useEffect(() => {
    const element = ellipsisRef.current;
    if (!element) return;

    // 使用ResizeObserver监听容器大小变化
    const resizeObserver = new ResizeObserver(() => {
      debouncedCheckEllipsis();
    });

    resizeObserver.observe(element);

    // 监听父级容器变化
    let parentElement = element.parentElement;
    const parentResizeObservers: ResizeObserver[] = [];

    // 监听所有父级容器
    while (parentElement && parentElement !== document.body) {
      const parentObserver = new ResizeObserver(() => {
        debouncedCheckEllipsis();
      });
      parentObserver.observe(parentElement);
      parentResizeObservers.push(parentObserver);
      parentElement = parentElement.parentElement;
    }

    // 监听窗口大小变化
    const handleResize = () => {
      debouncedCheckEllipsis();
    };

    window.addEventListener("resize", handleResize);

    // 监听DOM变化（如父级容器被动态添加/删除）
    const mutationObserver = new MutationObserver((mutations) => {
      let shouldCheck = false;
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' || mutation.type === 'attributes') {
          // 检查变化是否影响当前元素或其父级
          const target = mutation.target as Node;
          if (element.contains(target) || target.contains(element) ||
            (element.parentElement && element.parentElement.contains(target))) {
            shouldCheck = true;
          }
        }
      });

      if (shouldCheck) {
        debouncedCheckEllipsis();
      }
    });

    // 监听整个文档的DOM变化
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    });

    // 初始检查
    checkEllipsis();

    return () => {
      resizeObserver.disconnect();
      parentResizeObservers.forEach(observer => observer.disconnect());
      window.removeEventListener("resize", handleResize);
      mutationObserver.disconnect();
    };
  }, [checkEllipsis, debouncedCheckEllipsis, displayText]);

  // 当文本内容变化时重新检查
  useEffect(() => {
    // 使用setTimeout确保DOM更新完成后再检查
    const timer = setTimeout(() => {
      checkEllipsis();
    }, 0);

    return () => clearTimeout(timer);
  }, [displayText, checkEllipsis]);

  const ellipsisContent = (
    <div
      className={`land-ellipsis ${line > 1 ? "line-multiple" : "line-single"} ${className || ""
        }`}
      style={style}
    >
      <div
        ref={ellipsisRef}
        className="land-ellipsis-content"
        style={
          {
            display: line > 1 ? "-webkit-box" : "block",
            "-webkit-line-clamp": `${line}`,
            "-webkit-box-orient": line > 1 ? "vertical" : "horizontal",
          } as CSSProperties
        }
      >
        {displayText}
      </div>
    </div>
  );

  // 如果文本没有被省略，直接返回内容
  if (!ellipsis || !open) {
    return ellipsisContent;
  }

  // 如果文本被省略，使用PopOver包装以提供hover提示
  return (
    <PopOver
      targetBody
      placement="bottom"
      hideArrow
      content={displayText}
      className="land-ellipsis-popover"
      popoverStyle={{
        maxWidth: setMaxWidth ? setMaxWidth(contentWidth) : contentWidth
      }}
      {...popoverProps}
    >
      {ellipsisContent}
    </PopOver>
  );
};

export default Ellipsis;
