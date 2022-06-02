
//简易的防抖
function MyDebouce(fn,time) {
    let timer = null;
    function debouce(...arg) {
        if(timer) {
            clearTimeout(time);
        }
    
        timer = setTimeout(() => {
            fn(arg)
        },time)
    }
    return debouce;
}
//首次会立即执行版
function debounce(fn,time,immediate = false) {
    //定义定时器保存上一次定时器对象
    let timer = null
    let isInvoke = false//设置一个变量来监视是否停止输入  如果停止则改回false再此输入可以做到立即执行
    //做到当停下的时候再此输入可以立即执行
    const _debounce = function(...arg) {
        //取消上一次定时器
        if(timer) clearTimeout(timer)
        //判断是否立即执行
        if(immediate && !isInvoke) {
            fn.apply(this,arg)
            isInvoke = true
        }
        //延迟执行
        timer = setTimeout(() => {
            //外部传入函数
            fn.apply(this,[arg])
            isInvoke = false
        },time)
    }  
    return _debounce
}



//简易的节流

function Mythrottle(fn,interval) {
    let lastTime = 0
    const throttle = function(...arg) {
        let nowTime = new Date().getTime()
        let remainTime = interval - (nowTime-lastTime)
        if(remainTime <= 0) {
            fn()
            lastTime = nowTime
        }
    }
    return throttle
}
