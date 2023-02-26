const str = "hello-cdw-hehe";
const reg = /-(\w)/g;
console.log(str.replace(reg, (_, match) => String(match).toUpperCase()));
