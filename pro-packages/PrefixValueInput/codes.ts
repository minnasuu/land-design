export const reactTsxCodeStr = `// mirror div 与 textarea 完全重叠，前缀在 mirror 中作为 inline 元素自然跟随滚动
// textarea 文字透明，通过 textIndent 空出前缀位置

const syncScroll = useCallback(() => {
  if (mirrorRef.current && textareaRef.current) {
    mirrorRef.current.scrollTop = textareaRef.current.scrollTop;
  }
}, []);

return (
  <div className={prefixCls}>
    <div ref={mirrorRef} className={\`\${prefixCls}__mirror\`}>
      {prefix && (
        <span ref={prefixRef} className={\`\${prefixCls}__prefix\`}>
          [{prefix}]
        </span>
      )}
      <span>{value}</span>
    </div>
    <textarea
      ref={textareaRef}
      style={prefixWidth ? { textIndent: \`\${prefixWidth + 4}px\` } : undefined}
      value={value}
      onChange={handleChange}
      onScroll={handleScroll}
    />
  </div>
);`;
