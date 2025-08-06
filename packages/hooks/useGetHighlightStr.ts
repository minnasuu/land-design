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

export default useGetHightString;
