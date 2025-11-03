// escapeStr: contains special characters `, \, /, " and '
const escapeStr = "` \\ / \" '";

// arr: an array containing 4 and '2'
const arr = Object.freeze([4, '2']);

// obj: an object with primitive values and a nested frozen structure
const obj = Object.freeze({
  str: "a string value",
  num: 42,
  bool: true,
  undef: undefined})

const nested = Object.freeze({
    arr: Object.freeze([4, undefined, '2']),
    obj: Object.freeze({
      str: "nested string",
      num: 7,
      bool: false

    }) 
})

