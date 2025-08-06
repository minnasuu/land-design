export const reactTsxCodeStr = `import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  forwardRef,
  useImperativeHandle,
  TextareaHTMLAttributes,
} from 'react';
import './index.scss';

export type HighlightTextareaProps = {
  /** 当前值 */
  value?: string;
  /**  */
  textAreaRef?: React.RefObject<HTMLTextAreaElement>;
  /** 高亮文案 */
  highlightString?: string[];
  highlightBg?: string;
  highlightColor?: string;
  /** 禁止输入 */
  disabled?: boolean;
  autoResize?: boolean
  /**
   * 格式化高亮文案
   * @description 可以自定义添加标签包裹，增加文案事件颜色等，但是请不要使用 margin、padding 等影响布局的样式
   */
  contentClassName?: string;
  contentStyle?: CSSProperties;
  inputClassName?: string;
  inputStyle?: CSSProperties;
  formatHighlightString?: (val: string) => ReactNode;
  className?: string;
  style?: React.CSSProperties;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value'>;

const DEFAULT_ARR: any[] = [];
/**
 * 支持错误文案高亮的输入框
 */
export type useImperativeHandleProps = {
  focus: () => void;
}
const HighlightTextarea = forwardRef<
  useImperativeHandleProps,
  HighlightTextareaProps
>(
  (
    {
      highlightString = DEFAULT_ARR,
      highlightBg = "var(--color-error-light)",
      highlightColor = "var(--color-error)",
      formatHighlightString,
      className,
      style,
      inputClassName,
      inputStyle,
      contentClassName,
      contentStyle,
      value = "",
      onScroll,
      onChange,
      textAreaRef,
      placeholder = "请输入",
      disabled,
      autoResize,
      ...resetProps
    },
    ref
  ) => {
    /** 同步滚动条位置 */
    const boxRef = useRef<HTMLDivElement>(null);
    const currentTextAreaRef = useRef<HTMLTextAreaElement>(null);
    const unifiedScrollTop = useCallback(() => {
      if (!boxRef.current || !currentTextAreaRef.current) return;
      boxRef.current.scrollTop = currentTextAreaRef.current.scrollTop;
    }, []);
    const handlerScroll = useCallback(
      (e: React.UIEvent<HTMLTextAreaElement>) => {
        console.log(1);

        onScroll?.(e);
        unifiedScrollTop();
      },
      [onScroll]
    );
    const handlerChange = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e);
        if (autoResize) {
          autoResizeTextarea();
        } else {
          unifiedScrollTop();
        }
      },
      [onChange]
    );
    useImperativeHandle(ref, () => ({
      focus: () => {
        if (currentTextAreaRef?.current) {
          currentTextAreaRef.current.focus();
        }
      },
      // 你可以在这里添加更多的属性或方法
    }));

    useEffect(() => {
      if (!currentTextAreaRef.current || !textAreaRef) return;
      // @ts-ignore
      textAreaRef.current = currentTextAreaRef.current;
    }, []);

    const autoResizeTextarea = () => {
      if (!currentTextAreaRef.current) return;
      currentTextAreaRef.current.style.height = "auto";
      currentTextAreaRef.current.style.height = \`\${currentTextAreaRef.current.scrollHeight}px\`;
    };

    /** 当前展示的 value */
    const showValueList = useMemo(() => {
      const result: any[] = [];
      let currentStr = "";
      let currentType = "default";
      let currentIdx = 0;
      for (let i = 0; i < value.length; i++) {
        currentStr += value[i];
        result[currentIdx] = {
          type: currentType,
          msg: currentStr,
        };
        /** 切换其他类型 */
        const switchType = highlightString.some((item) => {
          if (!currentStr.includes(item)) return false;
          currentType = item;
          return true;
        });
        if (switchType) {
          result[currentIdx].msg = currentStr.split(currentType)[0];
          result.push({
            type: currentType,
            msg: currentType,
          });
          currentIdx += 2;
          currentStr = "";
          currentType = "default";
        }
      }
      const newResult = result.map((i) =>
        i.msg?.includes("\n")
          ? Object.assign(i, {
              msg: <>{i.msg}</>,
            })
          : i
      );
      // 要在最末尾，并且换行的时候才变成 <br/>
      if (value.endsWith("\n")) {
        newResult.push({ type: "default", msg: <br /> });
      }
      return newResult;
    }, [value, highlightString]);
    return (
      <div className={\`land-highlight-textarea \${className}\`} style={style}>
        <div
          className={\`land-highlight-textarea-content \${contentClassName}\`}
          style={contentStyle}
          ref={boxRef}
        >
          {showValueList.length > 0 ? (
            showValueList.map((item, idx) => {
              if (item.type === "default") return item.msg;
              if (formatHighlightString) return formatHighlightString(item.msg);
              return (
                <span
                  className="radius-4"
                  style={{
                    color: highlightColor,
                    backgroundColor: highlightBg,
                  }}
                  key={item.msg + idx}
                >
                  {item.msg}
                </span>
              );
            })
          ) : (
            <span className="land-highlight-textarea-placeholder">
              {placeholder}
            </span>
          )}
          {/* ps：为了让 div scrollHeight 高度一定超过 textarea scrollHeight */}
          {/* <Frame h={200} /> */}
        </div>
        <textarea
          id="land-highlight-textarea"
          {...resetProps}
          className={\`land-highlight-textarea-input \${inputClassName}\`}
          style={inputStyle}
          value={value}
          onScroll={autoResize ? undefined : handlerScroll}
          onChange={handlerChange}
          ref={currentTextAreaRef}
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>
    );
  }
);

export default HighlightTextarea;`

export const reactScssCodeStr = `.land-highlight-textarea{
  position: relative;
  width: 100%;
  &:where {
    position: relative;
  }

  > :where(div),
  > :where(textarea) {
    all: unset;
    width: 100%;
    height: 100%;
    display: block;
    word-break: break-all;
    font-size: var(--font-content-m);
    line-height: 18px;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    color: var(--color-text-primary);
    caret-color: var(--color-primary);
    &[disabled] {
      pointer-events: none;
    }

    &::-webkit-scrollbar {
      width: 0px;
    }
  }

  > :where(textarea) {
    position: relative;
    background-color: transparent;
    /* 隐藏文字 */
    -webkit-text-fill-color: transparent;
    /* 层级要比 div 高 */
    z-index: 1;
  }

  > :where(div) {
    white-space: pre-wrap;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .land-highlight-textarea-placeholder {
    color: var(--color-text-tertiary);
  }
  .land-highlight-textarea-input,
  .land-highlight-textarea-content{
    line-height: 22px;
  }
}`