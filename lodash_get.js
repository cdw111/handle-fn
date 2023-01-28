const obj = {
  a: {
    b: 123,
  },
  arr: [
    {
      demo: "demo",
      c: ["ddd"],
    },
  ],
};
function getKey(obj, str) {
  str = str.replace(/\[[0-9]*?\]/g, (_) => {
    return "." + _.substring(1, _.length - 1);
  });
  str = str.split(".");
  return str.reduce((pre, cur) => {
    return pre ? pre[cur] : undefined;
  }, obj);
}
console.log(getKey(obj, "a.c.b"));
console.log(getKey(obj, "arr[0].c[0]"));
