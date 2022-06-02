const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

class MyPromise {
    constructor(excute) {
        this.status = PROMISE_STATUS_PENDING;
        this.value = null;
        this.reason = null;
        this.fulfilledFN = [];
        this.rejectedFN = [];
        //promise属于微任务队列所以在定义式用queueMicrotask
        const resolve = (value) => {
            if(this.status === PROMISE_STATUS_PENDING) {
                queueMicrotask(() => {
                    this.status = PROMISE_STATUS_FULFILLED;
                    this.value = value;
                    this.fulfilledFN.forEach(fn => {
                        fn(this.value)
                    })
                })
            }
        }
        const reject = (reason) => {
            if(this.status === PROMISE_STATUS_PENDING) {
                queueMicrotask(() => {
                    this.status = PROMISE_STATUS_REJECTED;
                    this.reason = reason;
                    this.fulfilledFN.forEach(fn => {
                        fn(this.reason)
                    })
                })
            }
        }
        try {
            excute(resolve,reject)
        }catch(e) {
            reject(e)
        }
    }

    //then方法
    then(onFulfilled = value => { return value },onRejected = err => { throw err }) {
        //存在链式调用因此需要返回一个promise
        return new MyPromise((resolve,reject) => {
            if(this.status === PROMISE_STATUS_PENDING && onFulfilled) {
                this.fulfilledFN.push(() => {
                    try {
                        const result = onFulfilled(this.value)
                        resolve(result)
                      } catch(err) {
                        reject(err)
                      }
                })
            }
            if(this.status === PROMISE_STATUS_PENDING && onRejected) {
                this.rejectedFN.push(() => {
                    try {
                        const result = onRejected(this.reason)
                        resolve(result)
                      } catch(err) {
                        reject(err)
                      }
                })
            }

            if(this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
                try {
                    const result = onFulfilled(this.value)
                    resolve(result)
                  } catch(err) {
                    reject(err)
                  }
            }
            if(this.status === PROMISE_STATUS_REJECTED && onRejected) {
                try {
                    const result = onRejected(this.reason)
                    resolve(result)
                  } catch(err) {
                    reject(err)
                  }
            }
        })
    }

    //catch方法
    catch(onRejected) {
        return this.then(undefined,onRejected)
    }


    //final 方法
    finally(onFinally) {
        this.then(() => {
          onFinally()
        }, () => {
          onFinally()
        })
    }


    //resolve方法

    static resolve(value) {
        return new MyPromise((resolve,reject) => {
            resolve(value)
        })
    }


    //reject方法
    static reject(reason) {
        return new HYPromise((resolve, reject) => reject(reason))
    }


    //all方法
    static all(promises) {
        return new MyPromise((resolve,reject) => {
            const values = []
            promises.forEach(promise => {
                promise.then(res => {
                    values.push(res);
                    if(values.length === promises.length) {
                        resolve(values)
                    }
                },err => {
                    reject(err)
                })
            })
        })
    }



    // allsettled方法

    static allSettled(promises) {
        return new MyPromise((resolve) => {
          const results = []
          promises.forEach(promise => {
            promise.then(res => {
              results.push({ status: PROMISE_STATUS_FULFILLED, value: res})
              if (results.length === promises.length) {
                resolve(results)
              }
            }, err => {
              results.push({ status: PROMISE_STATUS_REJECTED, value: err})
              if (results.length === promises.length) {
                resolve(results)
              }
            })
          })
        })
      }


    //race方法
    static race(promises) {
        return new MyPromise((resolve,reject) => {
            promises.forEach(promise => {
                //有一个响应了就结束
                promise.then(resolve, reject)
            })
        })
    }



    //any方法
    static any(promises) {
        const reasons = []
        return new MyPromise((resolve, reject) => {
        promises.forEach(promise => {
            promise.then(resolve, err => {
            reasons.push(err)
            if (reasons.length === promises.length) {
                reject(new AggregateError(reasons))
            }
            })
        })
        })
    }
}