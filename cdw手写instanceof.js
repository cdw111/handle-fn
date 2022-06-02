function MyInstanceOf(left,right) {
    let l = left.__proto__;
    while(l) {
        if(l.constructor === right) {
            return true
        }
        l = l.__proto__;
    }
    return false
}
