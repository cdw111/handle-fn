class Scheduler {
    constructor(max) {
        this.queue = [],
        this.maxCount = max,
        this.curNum = 0
    }

    add(time,order) {
        const promiseCreator = () => new Promise((res,rej) => {
           setTimeout(() => {
                console.log(order);
                res()
           },time)
        })
        this.queue.push(promiseCreator)
    }

    start() {
        for(let i = 0;i < this.maxCount;i++) {
            this.request()
        }
    }

    request() {
        if (!this.queue || !this.queue.length || this.curNum >= this.maxCount) {
            return;
          }
          this.curNum++;
          this.queue
            .shift()()
            .then(() => {
              this.curNum--;
              this.request();
            });
    
    }
}
const scheduler = new Scheduler(2);
const addTask = (time, order) => {
  scheduler.add(time, order);
};
addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
scheduler.start();

