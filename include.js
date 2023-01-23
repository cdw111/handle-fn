let arr = [3, 3, 21, 3, 14, 12, 4, 1, 2, NaN];
Array.prototype.myIncludes = function (value, start = 0) {
  start = start < 0 ? this.length + start : start;
  for (let i = start; i < this.length; i++) {
    if (this[i] == value || (Number.isNaN(value) && Number.isNaN(this[i])))
      return true;
  }
  return false;
};
