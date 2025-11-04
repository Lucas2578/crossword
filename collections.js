function arrToSet (array) {
    return new Set(array)
}
function arrToStr (array) {
    return array.join("")
}
function setToArr (set) {
    return Array.from(set)
}
function setToStr (set) {
    return Array.from(set).join("")
}
function strToArr (str) {
    return str.split("")
}
function strToSet (str) {
    return Set(strToArr(str))
}
function mapToObj (map) {
    return Object.fromEntries(map)
}
function objToArr (obj) {
    return Object.entries(obj)
}
function objToMap (obj) {
    return new Map(Object.entries(obj))
}
function arrToObj (arr) {
arr.forEach((value, index) => {
    obj[index] = value;
  })
  return obj
}
function strToObj(str) {
    return arrToObj(strToArr(str))
}

function superTypeOf(value) {
  if (Array.isArray(value)) return 'Array';
  if (value instanceof Set) return 'Set';
  if (value instanceof Map) return 'Map';
  return typeof value;
}
