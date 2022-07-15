function change(objs) {
    let temp = {};
    // let keys = Object.keys(obj);
    for(let obj of objs) {
        if(!temp[obj.id]) {
            temp[obj.id] = {
                id: obj.id,
                h: obj.h,
                enen: [obj]
            }
        }else {
            temp[obj.id].h += obj.h,
            temp[obj.id].enen.push(obj)
        }
    }
    let res = []
    for(let val of Object.values(temp)) {
        res.push(val)
    }
    return res;
}

let obj = [
    {
        id: 1,
        h: 12,
    },
    {
        id: 1,
        h: 13,
    },
    {
        id: 2,
        h: 1,
    },
    {
        id: 3,
        h: 12,
    }
]

console.log(change(obj))