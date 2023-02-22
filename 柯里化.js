// 用法如下：
// const add = (a, b, c) => a + b + c;
// const a = currying(add, 1);
// console.log(a(2,3))
// function curry(fn, ...args) {
//   const argsSum = fn.length;
//   console.log(argsSum);
//   const curargs = [...args];
//   return function curryTemp(...args) {
//     curargs.push(...args);
//     if (curargs.length >= argsSum) {
//       return fn(...curargs);
//     } else {
//       return curryTemp;
//     }
//   };
// }

const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};
const a = curry(add, 1);
console.log(a(2, 3));
function curry(fn, ...init) {
  const res = [...init];
  const result = (...args) => {
    res.push(...args);
    if (res.length >= fn.length) return fn(...res);
    else {
      return result;
    }
  };
  return result;
}
