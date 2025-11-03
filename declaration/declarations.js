const escapeStr = "'\/\"'"
const arr = [4, '2']
const obj = {str: "yoyo", num : 17, bool : true, undef : undefined}
const nested = {arr : [4, undefined, '2'], obj : {str : "test", num : "7", bool : false}}

Object.freeze(nested)
Object.freeze(arr)
Object.freeze(obj)