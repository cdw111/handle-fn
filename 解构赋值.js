// ++++++++++++++++++++++++++++++++++++++++++++++++++++
/**
 * 题目四：解构赋值
 * 请实现一个通用的Array解构赋值方法 destructuringArray，
 * 可将目标数组（targetArray）通过ES6的解构格式（formater），输出解构结果对象
 */

// Example
destructuringArray = function (targetArray, formater) {
  // write code here
  let res = {};
  const arrs = formater.slice(1, -1).split(",");
  for (let i = 0; i < arrs.length; i++) {
    if (arrs[i][0] === "[") {
      res = { ...res, ...destructuringArray(targetArray[i], arrs[i]) };
    } else {
      res[arrs[i]] = targetArray[i];
    }
  }
  return res;
};
let result = destructuringArray([1, [2, 3], 4], "[a,[b],c]");
console.log(result);
// result： { a:1, b:2, c:4 }
