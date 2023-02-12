function isTOLong(promise) {
  return Promise.race([
    new Promise((res, rej) => {
      setTimeout(() => {
        rej("reject");
      }, 1000);
    }),
    promise,
  ]);
}

const myPromise = new Promise((res) => {
  setTimeout(() => {
    res("success");
  }, 1000);
});

isTOLong(myPromise).then(console.log, console.log);
