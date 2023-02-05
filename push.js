let arr = [1, 2, 3];
Array.prototype.myPush = function (...arg) {
  for (let i = 0; i < arg.length; i++) {
    this[this.length] = arg[i];
  }
  return this.length;
};
