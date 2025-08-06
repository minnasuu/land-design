import React, { useEffect, useRef, useState } from 'react';
import HighlightTextarea from '../HighlightTextarea';
import { PrefixValueInputProps } from './props';
import './index.scss';


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
        textAreaPrefixRef.current.style = `top: ${1 - Number(e.target.scrollTop)}px`;
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
        className={`land-prefix-value-input-prefix ${prefix ? 'withPrefix' : ''}`}
      >
        [<p className="land-prefix-value-input-prefix-text">{prefix}</p>]
      </div>
      <HighlightTextarea
        style={{
          textIndent: prefixWidth <= containerWidth ? `${prefixWidth + 4}px` : '0px',
        }}
        className='prefix-textarea'
        value={value}
        {...restProps}
      />
    </div>
  );
}


export default PrefixValueInput;
