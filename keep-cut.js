function cutFirst (str) {
    return slice(str, 2)
}
function cutLast (str) {
    return slice(str, 0, -2)
}
function cutFirstLast(str) {
    return cutFirst(str)+cutLast(str)
}
function keepFirst (str) {
    return slice(str,0,2)
}
function keepLast (str) {
    return slice(str, -2)
}
function keepFirstLast (str) {
    return keepFirst(str) + keepLast(str)
}