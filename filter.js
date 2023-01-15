Array.prototype._filter = function (fn, thisArgs) {
  if (Object.prototype.toString.call(fn) !== "[object Function]") {
    throw "Error in params";
  }
  const cur = this;
  const len = cur.length; //一定要存一下len
  const res = [];
  for (let i = 0; i < len; i++) {
    if (fn.call(thisArgs, cur[i], i, cur)) {
      res.push(cur[i]);
    }
  }
  return res;
};
