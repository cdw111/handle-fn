function compose(...args) {
  if (!args.length) return (x) => x;
  if (args.length === 1) return args[0];
  return args.reduce((pre, cur) => {
    return (...args) => pre(cur(...args));
  });
}

function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x * 4;
}
const a = compose_(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11

function compose_(...fn) {
  if (fn.length === 0) return (v) => v;
  if (fn.length === 1) return fn[0];
  return fn.reduce(
    (pre, cur) =>
      (...args) =>
        pre(cur(...args))
  );
}

function compose__(fns) {
  if (!fns.length) return (v) => v;
  if (fns.length === 1) return fns[0];
  return fns.reduce(
    (pre, cur) =>
      (...args) =>
        pre(cur(...args))
  );
}
