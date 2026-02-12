export const reactTsxCodeStr = `// 双层架构：textarea(文字透明，只显示光标) + display 层(渲染高亮 mention)
// 两层使用完全相同的 box-sizing / padding / border / font 属性，确保文字位置精确重合

// 动态构建触发符正则，支持自定义单/多触发符
const triggers = normalizeTriggers(trigger); // '@' | ['@','#'] → string[]
const triggerRegex = buildTriggerRegex(triggers);
// 例: triggers=['@','#'] → /([@#])([^\\s@#]*)$/

// 输入时，截取光标前文本匹配触发符 + 搜索关键词
const beforeCursor = newValue.slice(0, cursorPos);
const match = beforeCursor.match(triggerRegex);
// match[1] = 触发符, match[2] = 关键词 → onTrigger({ keyword, left, top, ... })

// display 层渲染：按 mention 的 startIndex/endIndex 切割文本，mention 区间用高亮渲染
mentions.forEach((mention) => {
  parts.push(<span>{value.slice(lastIndex, mention.startIndex)}</span>);
  parts.push(
    renderMention
      ? renderMention(mention, triggerChar)
      : <span className="__mention">{triggerChar}{mention.displayName}</span>
  );
  lastIndex = mention.endIndex;
});

// 滚动同步：textarea 滚动时同步 display 层的 scrollTop/scrollLeft
displayLayerRef.current.scrollTop = textareaRef.current.scrollTop;

return (
  <div className={prefixCls}>
    <div className={\`\${prefixCls}__container\`}>
      <textarea className="__input" />   {/* 透明文字 + 光标 */}
      <div className="__display" />       {/* 高亮 mention 渲染层 */}
      <div className="__measure" />       {/* 隐藏测量元素，计算触发位置 */}
    </div>
    {children}                            {/* 弹窗等外部内容 */}
  </div>
);`;
