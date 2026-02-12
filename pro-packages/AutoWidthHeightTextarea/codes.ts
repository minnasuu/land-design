export const reactTsxCodeStr = `// 隐藏的 holder div 撑开容器宽高，textarea 绝对定位覆盖其上
const [width, setWidth] = useState(40);
const [height, setHeight] = useState(32);
const holderRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (holderRef.current) {
    setWidth(holderRef.current.offsetWidth + 2);
    if (holderRef.current.offsetHeight <= maxHeight) {
      setHeight(holderRef.current.offsetHeight);
    }
  }
}, [placeholder, value, maxHeight]);

return (
  <div className={prefixCls} style={{ maxHeight }}>
    <div ref={holderRef} className={\`\${prefixCls}__holder\`}>
      {value?.trimEnd() || placeholder?.trimEnd()}
    </div>
    <textarea
      style={{ width, height }}
      className={\`\${prefixCls}__input\`}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value, e)}
    />
  </div>
);`;
