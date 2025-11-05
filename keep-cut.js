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
    if (str.length <= 4) return str
    const chars = str.split('')
    const firstTwo = chars.slice(0, 2)
    const lastTwo = chars.slice(-2)
    return firstTwo.concat(lastTwo).join('')
}

console.log(cutFirst('abcdef'))
console.log(cutLast('abcdef'))
console.log(cutFirstLast('abcdef'))
console.log(keepFirst('abcdef'))
console.log(keepLast('abcdef'))
console.log(keepFirstLast('af'))