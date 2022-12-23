//给Common这个类 加上类型判断 要求能判断正则 Date等...

var Common = {
  //write on here
  getType: function (obj) {
    //对null进行类型判断
    return Object.prototype.toString.apply(obj).slice(8, -1);
  },
};

console.log(Common.getType(1));
console.log(Common.getType("str"));
console.log(Common.getType([]));
console.log(Common.getType(new Date()));
console.log(Common.getType(/asdasd/));
console.log(Common.getType(null));
