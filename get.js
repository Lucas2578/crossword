function get(src, path) {
  const keys = path.split('.');
  return keys.reduce((acc, key) => {
    return acc && acc[key] !== undefined ? acc[key] : undefined;
  }, src);
}