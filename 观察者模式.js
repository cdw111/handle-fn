let ob_id = 0;
let obd_id = 0;

class observe {
  constructor() {
    this.id = ob_id;
  }
  updated(ob) {
    console.log("观察者" + this.id + `-检测到被观察者${ob.id}变化`);
  }
}
class Observed {
  constructor() {
    this.observers = [];
    this.id = observed_ids++;
  }
  //添加观察者
  addObserver(observer) {
    this.observers.push(observer);
  }
  //删除观察者
  removeObserver(observer) {
    this.observers = this.observers.filter((o) => {
      return o.id != observer.id;
    });
  }
  //通知所有的观察者
  notify() {
    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }
}
