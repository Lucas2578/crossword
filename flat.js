function flat(array, depth = 1) {
  if (depth === 0) return array.slice();

  let result = [];

  for (const item of array) {
    if (Array.isArray(item) && depth > 0) {
      result = result.concat(flat(item, depth - 1));
    } else {
      result.push(item);
    }
  }

  return result;
}
