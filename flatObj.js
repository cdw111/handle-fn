const obj = {
  a: {
    b: 1,
    c: 2,
    d: { e: 5 },
  },
  b: [1, 3, { a: 2, b: 3 }],
  c: 3,
};

function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}

function flat(obj, father) {
  if (!isObject(obj)) return root;
  let res = {};
  const keys = Object.keys(obj);
  for (let key of keys) {
    if (isObject(obj[key])) {
      if (father !== "")
        res = { ...res, ...flat(obj[key], father + "." + key) };
      else res = { ...res, ...flat(obj[key], key) };
    } else {
      if (father !== "") res[father + "." + key] = obj[key];
      else res[key + ""] = obj[key];
    }
  }
  return res;
}
console.log(flat(obj, ""));

function flatten(obj) {
  if (!isObject(obj)) {
    return;
  }
  let res = {};
  const dfs = (cur, prefix) => {
    if (isObject(cur)) {
      if (Array.isArray(cur)) {
        cur.forEach((item, index) => {
          dfs(item, `${prefix}[${index}]`);
        });
      } else {
        for (let k in cur) {
          dfs(cur[k], `${prefix}${prefix ? "." : ""}${k}`);
        }
      }
    } else {
      res[prefix] = cur;
    }
  };
  dfs(obj, "");

  return res;
}
