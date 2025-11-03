const escapeStr = /*"'\\/\"\'"*/ "\`\\/\"'"
const arr = [4, '2']
const obj = {str: "yoyo", num : 17, bool : true, undef : undefined}
const nested = {arr : [4, undefined, '2'], obj : {str : "test", num : 7, bool : false}}

//Object.freeze(nested)
deepFreeze(nested)
Object.freeze(arr)
Object.freeze(obj)
Object.deepFreeze()
console.log(escapeStr)

function deepFreeze(object) {
  // Retrieve the property names defined on object
  const propNames = Reflect.ownKeys(object);

  // Freeze properties before freezing self
  for (const name of propNames) {
    const value = object[name];

    if ((value && typeof value === "object") || typeof value === "function") {
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
}