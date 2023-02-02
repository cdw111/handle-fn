function freeze(obj) {
  for (const prop of obj) {
    if (
      Object.prototype.toString.apply(prop) !== "[Object object]" ||
      Object.prototype.toString.apply(prop) !== "[Object array]"
    ) {
      freeze(prop);
    } else {
      Object.defineProperty(obj, prop, {
        writable: false,
      });
    }
  }
  return Object.seal(obj);
}
