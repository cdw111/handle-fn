Array.prototype.myEvery = function (callbakc) {
  for (let i = 0; i < this.length; i++) {
    if (!callbakc(this[i], i, this)) {
      return false;
    }
  }
  return true;
};
