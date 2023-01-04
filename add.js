function createAdd() {
  const cache = [];
  return function add(...args) {
    if (!args.length) return cache.reduce((pre, cur) => pre + cur, 0);
    else {
      cache.push(...args);
      return add;
    }
  };
}

function createAdd() {
  const cache = [];
  function add(...args) {
    cache.push(...args);
    return add;
  }
  add.valueOf = () => {
    return cache.reduce((pre, cur) => pre + cur, 0);
  };
  return add;
}

const add = createAdd();

console.log(add(1)(2, 3, 4));
