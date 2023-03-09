// addTask(1000,"1");
// addTask(500,"2");
// addTask(300,"3");
// addTask(400,"4");
// 的输出顺序是：2 3 1 4

// 整个的完整执行流程：

// 一开始1、2两个任务开始执行
// 500ms时，2任务执行完毕，输出2，任务3开始执行
// 800ms时，3任务执行完毕，输出3，任务4开始执行
// 1000ms时，1任务执行完毕，输出1，此时只剩下4任务在执行
// 1200ms时，4任务执行完毕，输出4
class Scheduler {
  constructor(limit) {
    this.max = limit;
    this.cur = 0;
    this.queue = [];
  }
  addTask(time, order) {
    this.queue.push(
      () =>
        new Promise((res, rej) => {
          setTimeout(() => {
            console.log(order, time);
            res(order);
          }, time);
        })
    );
  }

  start() {
    for (let i = 0; i < this.queue.length; i++) {
      if (this.cur === this.max) break;
      this.cur++;
      this.queue
        .shift()()
        .then((res) => {
          this.cur--;
          this.start();
        });
    }
  }
}

const scheduler = new Scheduler(2);
const addTask = (time, order) => {
  scheduler.addTask(time, order);
};
addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
scheduler.start();

// class Scheduler {
//   constructor(limit) {
//     this.limit = limit;
//     this.cur = 0;
//     this.queue = [];
//   }

//   addTask(time, fn) {
//     const promiseCreator = () => {
//       return new Promise((res, rej) => {
//         setTimeout(() => {
//           console.log(fn);
//           res();
//         }, time);
//       });
//     };
//     this.queue.push(promiseCreator);
//   }

//   start() {
//     for (let i = 0; i < this.limit; i++) {
//       this.request();
//     }
//   }

//   request() {
//     if (!this.queue || !this.queue.length || this.cur >= this.limit) {
//       return;
//     }
//     this.cur++;
//     this.queue
//       .shift()()
//       .then(() => {
//         this.cur--;
//         this.request();
//       });
//   }
// }

// const scheduler = new Scheduler(2);
// const addTask = (time, order) => {
//   scheduler.addTask(time, order);
// };
// addTask(1000, "1");
// addTask(500, "2");
// addTask(300, "3");
// addTask(400, "4");
// scheduler.start();
