Function.prototype.MyCall = function(obj = window,...arg) {
    obj[fn] = this;
    const res = obj[fn](...arg)
    delete obj.fn
    return res;
}



Function.prototype.MyApply = function(obj = window,arg) {
    obj[fn] = this;
    const res = obj[fn](...arg)
    delete obj.fn
    return res;
}


Function.prototype.MyBind = function(obj = window,...arg1) {
    return function(...arg2) {
        obj[fn] = this;
        const res = obj[fn](...arg,...arg2)
        delete obj.fn
        return res;
    }
}
