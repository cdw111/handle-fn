function myDebounce(fn, time) {
  let time = null;
  return () => {
    clearTimeout(time);
    time = setTimeout(() => {
      fn();
    }, time);
  };
}

function myThrottle(fn, time) {
  let time = null;
  return () => {
    if (time) return;
    time = setTimeout(() => {
      fn();
      time = null;
    }, time);
  };
}
