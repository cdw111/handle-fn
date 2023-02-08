let now = new Date().getTime();
console.log(now);

setTimeout(() => {
  const cur = new Date().getTime();
  console.log(cur);
}, 1000);
