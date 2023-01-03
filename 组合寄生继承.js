function Myextends(son, father) {
  son.prototype = Object.create(father.prototype);
  son.prototype.constrctor = son;
}
function Parent(name) {
  this.name = name;
  this.say = () => {
    console.log(111);
  };
}
function Children(name) {
  Parent.call(this);
  this.name = name;
}
Parent.prototype.play = () => {
  console.log(222);
};
Myextends(Children, Parent);
let child = new Children("111");
console.log(child.name);
child.say();
child.play();
