function todu(fn, a, b) {
  let cur = a;
  let time;
  let next = () => {
    console.log(new Date().getTime());
    time = setTimeout(() => {
      fn();
      cur += b;
      next();
    }, cur);
  };
  next();
  return () => clearTimeout(time);
}

const cancel = todu(() => console.log(1), 1000, 1000);

setTimeout(cancel, 10000);
