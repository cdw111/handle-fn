function Myextends(son,father) {
    son.prototype = Object.create(father.prototype)
    son.prototype.constructor = father
}