function get (key) {
    return sourceObject[key]
}
function set (key, value) {
    get(key) = value
    return value
}