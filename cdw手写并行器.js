class Scheduler {
    constructor(limit) {
        this.queue = [];
        this.maxCount = limit;
        this.curCount = 0;
    }

    add(time,order) {
        const promiseCreator = () => new Promise((resolve,reject) => {
            setTimeout(() => {
                console.log(order);
                resolve();
            },time)
        })
        this.queue.push(promiseCreator)
    }

    start() {
        for (let i = 0; i < this.maxCount; i++) {
            this.request();
        }
    }


    request() {
        if(!this.queue || !this.queue.length || this.curCount >= this.maxCount) return
        this.curCount++;
        this.queue
            .shift()()
            .then(() => {
                this.curCount--;
                this.request();
            })
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
