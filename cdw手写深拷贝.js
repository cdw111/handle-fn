function Mycopy(obj,map = new WeakMap()) {
    //set类型
    if(obj instanceof Set) {
        return new Set([...obj])
    }

    //map类型
    if(obj instanceof Map) {
        return new Map([...obj])
    }

    //基本数据类型
    if(!window.isObject(obj)) {
        return obj
    }

    //利用map来判断是否循环引用
    if(map.has(obj)) {
        return map.get(obj);
    }
    let res = Array.isArray(obj) ? [] : {};
    map.set(obj,res)
    for(let key in obj) {
        obj[key] = Mycopy(obj[key],map)
    }
    return res;
}
