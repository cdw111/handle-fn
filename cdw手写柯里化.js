
//函数的长度就是其参数的个数
function MyCurry(fn) {
    function Curry(...arg1) {
        if(arg1.length < fn.length) {
            return function(...arg2) {
                return Curry(...arg1,...arg2)
            }
        }else {
            return fn(...arg1)
        }
    }
    return Curry
}

function f(a,b,c) {
    return a + b +c
}

const e = MyCurry(f);

console.log(e(1)(2)(3))