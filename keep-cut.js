function cutFirst (str) {
    return str.slice(2)
}
function cutLast (str) {
    return str.slice(0, -2)
}
function cutFirstLast(str) {
    return str.slice(2,-2)
}
function keepFirst (str) {
    return str.slice(0,2)
}
function keepLast (str) {
    return str.slice(-2)
}
function keepFirstLast (str) {
    if (str.length == 2){
        return keepFirst(str)
    }
    return keepFirst(str) + keepLast(str)
}

console.log(cutFirst('abcdef'))
console.log(cutLast('abcdef'))
console.log(cutFirstLast('abcdef'))
console.log(keepFirst('abcdef'))
console.log(keepLast('abcdef'))
console.log(keepFirstLast('af'))