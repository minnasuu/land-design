/**
 * 将数组映射到新的范围 [0, 1]
 * @param arr 原数组
 * @param min 原最小值
 * @param max 原最大值
 * @returns 映射后的数组
 */
export function mapToNewRange(arr: number[], min: number, max: number): number[] {
  if (max === min) return arr.map(() => 0.5);

  return arr.map((value) => (value - min) / (max - min));
}
