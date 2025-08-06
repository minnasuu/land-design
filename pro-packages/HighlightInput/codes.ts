export const reactTsxCodeStr = `import React, { useCallback, useMemo, useRef, useState } from 'react';
import './index.scss';
import useGetHightString from '../../packages/hooks/useGetHighlightStr';

export type MsHighlightInputProps = {
  /** 输入值 */
  value?: string;
  /** 是否展示字数 */
  showNum?: boolean;
  /** 最大输入数 */
  maxLength?: number;
  /** 失败信息 */
  fail?: string;
  /** 是否禁用 */
  disabledInput?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  /** 高亮文案 */
  highlightString?: string[];
  formatHighlightString?: (val: string) => React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  [key: string]: any;
};

const MsHighlightInput: React.FC<MsHighlightInputProps> = ({
  value = '',
  showNum = true,
  maxLength = 300,
  fail,
  disabledInput = false,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  highlightString = [],
  formatHighlightString,
  className = '',
  style,
  ...restProps
}) => {
  const highStringList = useMemo(() => useGetHightString(value, highlightString), [value, highlightString]);
  /** 控制高两层左右滚动 */
  const boxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  /* 左右滚动 */
  const ScrollLabel = useCallback(() => {
    if (!boxRef.current || !inputRef.current) return;
    boxRef.current.scrollLeft = inputRef.current.scrollLeft;
  }, []);
  const handleBlur = useCallback(() => {
    if (boxRef.current) boxRef.current.scrollLeft = 0;
    onBlur?.();
  }, []);

  const [hover, setHover] = useState<boolean>(false);
  return (
    <div className={\`land-highlight-input \${className}\`} style={style}>
      <div
        className={\`land-highlight-input-container \${
          fail || Number(value?.length) > maxLength ? 'error' : ''
        } \${hover ? 'hover' : ''}\`}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <div className="land-highlight-input-content">
          {value ? (
            <div
              ref={boxRef}
              className={\`land-highlight-input-hight-string \${
                disabledInput ? 'disabled' : ''
              }\`}
            >
              {highStringList.map((item, idx) => {
                if (item.type === 'default') return item.msg;
                if (formatHighlightString) return formatHighlightString(item.msg);
                return (
                  <span className='land-highlight-input-hight-string-item' key={item.msg + idx}>
                    {item.msg}
                  </span>
                );
              })}
            </div>
          ) : (
            <div
              className="land-highlight-input-placeholder"
            >
              {placeholder}
            </div>
          )}
          <input
            ref={inputRef}
            id='highlight-input'
            type="text"
            className="land-highlight-input-input"
            disabled={disabledInput}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              ScrollLabel?.();
              onChange?.(e);
            }}
            onScroll={() => ScrollLabel()}
            onFocus={() => onFocus?.()}
            onBlur={handleBlur}
            {...restProps}
          />
        </div>
        {(Number(value?.length) > maxLength || showNum) && (
          <div className="land-highlight-input-operation">
            <div
              className={\`land-highlight-input-operation-text \${
                Number(value?.length) > maxLength ? 'error' : ''
              }\`}
            >
              {value?.length}
            </div>
            /{maxLength}
          </div>
        )}
      </div>
      {/* 失败信息 */}
      {fail && <p className="land-highlight-input-fail">{fail}</p>}
    </div>
  );
};

export default MsHighlightInput;
`;

export const reactScssCodeStr = `.land-highlight-input{
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  transition: all 0.3s ease-in-out;
  .land-highlight-input-container{
    position: relative;
    display: flex;
    align-items: center;
    height: 36px;
    padding: 4px;
    width: 100%;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    background-color: var(--color-bg-secondary);
    box-sizing: border-box;
    &.hover{
      background-color: var(--color-bg-tertiary);
    }
    &.error{
      border: 1px solid #EB3D3D;
    }
  }
  .land-highlight-input-content{
    position: relative;
    flex: 1;
    display: flex;
  }
  .land-highlight-input-hight-string{
    position: absolute;
    top: 0;
    width: calc(100% - 24px);
    white-space: nowrap;
    pointer-events: none;
    overflow: scroll;
    line-height: normal;
    &::-webkit-scrollbar {
      width: 0;
      display: none;
    }
    margin-inline: 12px;
    font-size: var(--font-content-m);
    color: var(--color-text-primary);
    &.disabled{
      color: var(--color-text-quaternary);
    }
    .land-highlight-input-hight-string-item{
      color: var(--color-error);
      background-color: var(--color-error-light);
    }
  }
  .land-highlight-input-placeholder{
    position: absolute;
    padding-inline: 12px;
    color: var(--color-text-quaternary);
    pointer-events: none;
    line-height: 22px;
  }
  .land-highlight-input-input{
    flex: 1;
  width: calc(100% - 24px);
  height: 22px;
  border: none;
  padding: 0;
  font-size: 14px;
  line-height: normal;
  background: transparent;
  -webkit-text-fill-color: transparent;
  caret-color: var(--color-primary);
  &[disabled] {
    cursor: not-allowed;
  }
  &:hover,
  &:active,
  &:focus,
  &:active:hover,
  &:focus:hover,
  &:focus-within {
    border: none;
    outline: none;
    background: transparent;
  }
    margin-inline: 12px;
    transition: all 0.3s ease-in-out;
  }
  .land-highlight-input-operation{
    display: flex;
    align-items: center;
    margin-right: 12px;
    font-size: 12px;
    color: var(--color-text-quaternary);
    text-align: center;
    .land-highlight-input-operation-text{
      width: 18px;
      &.error{
        color: var(--color-error);
      }
    }
  }
  .land-highlight-input-fail{
    margin-top: 8px;
    color: var(--color-error);
    font-size: 12px;
  }
}
`;
