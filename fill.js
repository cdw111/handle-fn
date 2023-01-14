Array.prototype.myFill = function (initValue, start = 0, end) {
  //end可以小于0,所以要进行一个判断
  end = end < 0 ? this.length + end : end;
  for (let i = start; i < end; i++) {
    this[i] = value;
  }
  return this;
};
