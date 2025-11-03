const sourceObject = {
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
}
function get (key) {
    console.log(sourceObject["'"+key+"'"])
    return sourceObject[key]
}
function set (key, value) {
    sourceObject["'"+key+"'"] = value
    return value
}

