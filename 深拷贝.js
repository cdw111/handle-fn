// function deepClone(originValue, map = new WeakMap()) {
//   // 判断是否是一个Set类型
//   if (originValue instanceof Set) {
//     return new Set([...originValue]);
//   }

//   // 判断是否是一个Map类型
//   if (originValue instanceof Map) {
//     return new Map([...originValue]);
//   }

//   // 判断如果是Symbol的value, 那么创建一个新的Symbol
//   if (typeof originValue === "symbol") {
//     return Symbol(originValue.description);
//   }

//   // 判断如果是函数类型, 那么直接使用同一个函数
//   if (typeof originValue === "function") {
//     return originValue;
//   }

//   // 判断传入的originValue是否是一个对象类型
//   if (!isObject(originValue)) {
//     return originValue;
//   }
//   if (map.has(originValue)) {
//     return map.get(originValue);
//   }

//   // 判断传入的对象是数组, 还是对象
//   const newObject = Array.isArray(originValue) ? [] : {};
//   map.set(originValue, newObject);
//   for (const key in originValue) {
//     newObject[key] = deepClone(originValue[key], map);
//   }

//   // 对Symbol的key进行特殊的处理
//   const symbolKeys = Object.getOwnPropertySymbols(originValue);
//   for (const sKey of symbolKeys) {
//     // const newSKey = Symbol(sKey.description)
//     newObject[sKey] = deepClone(originValue[sKey], map);
//   }

//   return newObject;
// }

function deepClone(obj, map = new WeakMap()) {
  if (typeof obj === "symbol") return Symbol(obj.description);
  if (typeof obj !== "object" || obj === null) return obj;
  if (obj instanceof Set) {
    return new Set([...obj]);
  }
  if (obj instanceof Map) {
    return new Map([...obj]);
  }
  if (map.get(obj)) return obj;
  const res = Array.isArray(obj) ? [] : {};
  map.set(obj, true);
  for (let index in obj) {
    res[index] = deepClone(obj[index], map);
  }
  const symbolKeys = Object.getOwnPropertySymbols(obj);
  for (const sKey of symbolKeys) {
    // const newSKey = Symbol(sKey.description)
    res[sKey] = deepClone(obj[sKey], map);
  }
  return res;
}
