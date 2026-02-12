import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import './index.scss';
import useGetHightString from '../../packages/hooks/useGetHighlightStr';
import { HighlightTextareaProps } from './props';

const prefixCls = 'land-highlight-textarea';

export type HighlightTextareaRef = {
  focus: () => void;
};

const HighlightTextarea = forwardRef<HighlightTextareaRef, HighlightTextareaProps>(
  (
    {
      value = '',
      highlightString = [],
      formatHighlightString,
      className = '',
      style,
      onChange,
      onScroll,
      textAreaRef,
      placeholder,
      autoResize,
      ...restProps
    },
    ref
  ) => {
    const boxRef = useRef<HTMLDivElement>(null);
    const currentTextAreaRef = useRef<HTMLTextAreaElement>(null);

    const showValueList = useMemo(() => {
      const result = useGetHightString(value, highlightString);
      const newResult = result.map((i) =>
        i.msg?.includes('\n')
          ? Object.assign(i, { msg: <>{i.msg}</> })
          : i
      );
      if (value.endsWith('\n')) {
        newResult.push({ type: 'default', msg: <br /> } as any);
      }
      return newResult;
    }, [value, highlightString]);

    const unifiedScrollTop = useCallback(() => {
      if (!boxRef.current || !currentTextAreaRef.current) return;
      boxRef.current.scrollTop = currentTextAreaRef.current.scrollTop;
    }, []);

    const handleScroll = useCallback(
      (e: React.UIEvent<HTMLTextAreaElement>) => {
        onScroll?.(e);
        unifiedScrollTop();
      },
      [onScroll]
    );

    const autoResizeTextarea = () => {
      if (!currentTextAreaRef.current) return;
      currentTextAreaRef.current.style.height = 'auto';
      currentTextAreaRef.current.style.height = `${currentTextAreaRef.current.scrollHeight}px`;
    };

    const handleChange = useCallback(
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
        currentTextAreaRef.current?.focus();
      },
    }));

    useEffect(() => {
      if (!currentTextAreaRef.current || !textAreaRef) return;
      // @ts-ignore
      textAreaRef.current = currentTextAreaRef.current;
    }, []);

    return (
      <div className={`${prefixCls} ${className}`} style={style}>
        <div className={`${prefixCls}__content`} ref={boxRef}>
          {showValueList.length > 0 ? (
            showValueList.map((item, idx) => {
              if (item.type === 'default') return item.msg;
              if (formatHighlightString) return formatHighlightString(item.msg as string);
              return (
                <span
                  className={`${prefixCls}__highlight-item`}
                  key={(item.msg as string) + idx}
                >
                  {item.msg}
                </span>
              );
            })
          ) : (
            <span className={`${prefixCls}__placeholder`}>
              {placeholder}
            </span>
          )}
        </div>
        <textarea
          {...restProps}
          className={`${prefixCls}__input`}
          value={value}
          onScroll={autoResize ? undefined : handleScroll}
          onChange={handleChange}
          ref={currentTextAreaRef}
          placeholder={placeholder}
        />
      </div>
    );
  }
);

export default HighlightTextarea;
