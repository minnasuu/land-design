export const reactTsxCodeStr = `import React, { useEffect, useRef, useState } from 'react';
import HighlightTextarea from '../HighlightTextarea';
import './index.scss';

import { HighlightTextareaProps } from "../HighlightTextarea/props";

export type PrefixValueInputProps = {
  value?: string;
  /** 前缀 */
  prefix?: string;
} & HighlightTextareaProps;

const PrefixValueInput: React.FC<PrefixValueInputProps> = ({
  value,
  prefix,
  ...restProps
}) => {
  const textAreaPrefixRef = useRef<any>(null);
  const [prefixWidth, setPrefixWidth] = useState<number>(0);
  const prefixContainerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  useEffect(() => {
    textAreaPrefixRef.current?.clientWidth ? setPrefixWidth(textAreaPrefixRef.current?.clientWidth) : setPrefixWidth(0);
  }, [prefix]);
  useEffect(() => {
    const textarea = document.querySelector('.land-prefix-input .prefix-textarea');
    if (textAreaPrefixRef.current && textarea) {
      const textAreaPrefixTop = (e: any) => {
        textAreaPrefixRef.current.style = \`top: \${1 - Number(e.target.scrollTop)}px\`;
      };
      textarea?.addEventListener('scroll', textAreaPrefixTop);
      return () => {
        textarea?.removeEventListener('scroll', textAreaPrefixTop);
      };
    }
  }, [prefix]);
  useEffect(() => {
    if (prefixContainerRef.current) {
      setContainerWidth(prefixContainerRef.current.clientWidth);
    }
  }, [prefixContainerRef]);
  return (
    <div ref={prefixContainerRef} className="land-prefix-input">
      <div
        ref={textAreaPrefixRef}
        style={{ width: prefix ? '' : '0px' }}
        className={\`land-prefix-value-input-prefix \${prefix ? 'withPrefix' : ''}\`}
      >
        [<p className="land-prefix-value-input-prefix-text">{prefix}</p>]
      </div>
      <HighlightTextarea
        style={{
          textIndent: prefixWidth <= containerWidth ? \`\${prefixWidth + 4}px\` : '0px',
        }}
        className={\`prefix-textarea\`}
        value={value}
        {...restProps}
      />
    </div>
  );
}


export default PrefixValueInput;
`

export const reactScssCodeStr = `.land-prefix-input{
  position: relative;
  overflow: hidden;
}

.land-prefix-value-input-prefix{
  font-size: var(--font-content-m);
  color: var(--color-text-secondary);
  position: absolute;
  display: flex;
  overflow: hidden;
  max-width: 100%;
  border-radius: 2px;
  z-index: 2;
  top: 1px;
  left: 0px;
  background-color: var(--color-bg-tertiary);
  &.withPrefix{
    padding-inline: 4px;
  }
  .land-prefix-value-input-prefix-text{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}`
