function MySetInterval(fn, time) {
  let timer = null;

  const todu = () => {
    timer = setTimeout(() => {
      fn();
      todu();
    }, time);
  };
  todu();
  return () => {
    clearTimeout(timer);
  };
}

function todu() {
  console.log("cdw", new Date().getTime());
}
const cancel = MySetInterval(todu, 2000);

setTimeout(() => {
  cancel();
}, 10000);
