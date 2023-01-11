class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(key, fn) {
    // todu
    if (this.events[key]) {
      this.events[key].push(fn);
    } else {
      this.events[key] = [fn];
    }
  }
  off(key, fn) {
    // todu
    if (this.events[key]) {
      this.events[key].forEach((fnn, index) => {
        if (fnn === fn) {
          this.events[key].splice(index, 1);
        }
      });
    }
  }
  emit(key, ...args) {
    // todu
    this.events[key] &&
      this.events[key].forEach((fn) => {
        fn(...args);
      });
  }
  once(key, fn) {
    // todu
    const doOnce = () => {
      fn();
      this.off(key, doOnce);
    };
    if (this.events[key]) {
      this.events[key].push(doOnce);
    } else {
      this.events[key] = [doOnce];
    }
  }
}

const eve = new EventEmitter();

const handle = (...rest) => {
  console.log(rest);
};

eve.on("click", handle);

eve.emit("click", 1, 2, 3, 4);

eve.off("click", handle);

eve.emit("click", 1, 2);

eve.once("dbClick", () => {
  console.log(123456);
});
eve.emit("dbClick");
eve.emit("dbClick");
