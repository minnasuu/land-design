export const reactTsxCodeStr = `/* 获取高亮字符串 */
const useGetHightString = (value: string, highlightString: string[]) => {
  const result: any[] = [];
  let currentStr = '';
  let currentType = 'default';
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
      currentStr = '';
      currentType = 'default';
    };
  };
  return result;
};

/* 高亮字符串列表 */
const highStringList = useMemo(() => useGetHightString(value, highlightString), [value, highlightString]);

/* 渲染高亮字符串 */
return <div ref={boxRef}>
{highStringList.map((item, idx) => {
  if (item.type === 'default') return item.msg;
  if (formatHighlightString) return formatHighlightString(item.msg);
  return (
    <span key={item.msg + idx}>
      {item.msg}
    </span>
  );
})}
</div>`;
