function flat(arr) {
  if (!arr.length) return [];
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

function flagWithLevel(arr, level = Infinity) {
  while (arr.some((ar) => Array.isArray(ar)) && level--) {
    arr = [].concat(...arr);
  }
  return arr;
}

console.log(flagWithLevel([1, 2, [1, [2, 3, [4, 5, [6]]]], 2]));
