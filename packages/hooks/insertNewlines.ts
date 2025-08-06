export const insertNewlines = function (str: string) {
  const results: string[] = [];
  const n = str?.length;
  function recurse(index, current) {
    if (index === n - 1) {
      results.push(current);
      return;
    }
    recurse(index + 1, current + str[index + 1]);
    recurse(index + 1, current + '\n' + str[index + 1]);
  }
  recurse(0, str[0]);
  return results;
};