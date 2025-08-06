const useFormateTime = (time?: number | string) => {
  if (!time) return '00:00';
  if (typeof time === 'string') return time;
  // 如果传入数字
  const h = Math.floor(time / 3600);
  const m = Math.floor((time % 3600) / 60);
  const s = Math.round(time % 60);

  const hDisplay = h < 10 ? "0" + h : h;
  const mDisplay = m < 10 ? "0" + m : m;
  const sDisplay = s < 10 ? "0" + s : s;
  if (h > 0) {
    return hDisplay + ":" + mDisplay + ":" + sDisplay;
  }
  return mDisplay + ":" + sDisplay;
};

export default useFormateTime;
