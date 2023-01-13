let data = [];
const proxt = new Proxy(data, {
  get(target, key, reciever) {
    console.log(key);
    if (key === "-1") return "asdasd";
  },
});

console.log(proxt[-1]);
