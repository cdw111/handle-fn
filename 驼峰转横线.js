const str = "helloCdwOppp";
const reg = /([A-Z])/g;
console.log(str.replace(reg, (_, match) => `-${String(match).toLowerCase()}`));
