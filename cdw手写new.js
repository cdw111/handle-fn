function MyNew(fn,...arg) {
    const obj = {};
    obj.__proto__ = fn.prototype;
    const res = fn.call(obj,...arg);
    console.log(Object.prototype.toString.call(res))
    return Object.prototype.toString.call(res) === "[Object Object]" ? res : obj;
}
console.log(MyNew(hell,100))