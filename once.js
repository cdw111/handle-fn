function once(fn) {
  let isDo = false;
  let t = this;
  let value;
  return function () {
    if (isDo) {
      return value;
    } else {
      isDo = true;
      value = fn.call(this);
      return value;
    }
  };
}

let data = 0;

function a() {
  return data;
}

let r = once(a);
console.log(r());
data = 1;

console.log(r());
