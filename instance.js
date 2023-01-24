function myInstance(left, right) {
  const target = right.prototype;
  while (left.__proto__) {
    if (left.__proto__ === target) return true;
    left = left.__proto__;
  }
  return false;
}
