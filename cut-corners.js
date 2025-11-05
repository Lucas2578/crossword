function trunc(num) {
  let entier = 0;
  
  if (num >= 0) {
    while (entier <= num) {
      entier = entier + 1;
    }
    entier = entier - 1;
  } else {
    while (entier > num) {
      entier = entier - 1;
    }
  }
  return entier;
}

function round(num) {
  let t = trunc(num);
  let fractional = num - t;

  if (num >= 0) {
    if (fractional >= 0.5) return t + 1;
    return t;
  } else {
    if (fractional <= -0.5) return t - 1;
    return t;
  }
}

function ceil(num) {
  let t = trunc(num);
  let fractional = num - t;

  if (num >= 0) {
    if (fractional > 0) return t + 1;
    return t;
  } else {
    return t;
  }
}

function floor(num) {
  let t = trunc(num);
  let fractional = num - t;

  if (num >= 0) {
    return t;
  } else {
    if (fractional < 0) return t - 1;
    return t;
  }
}
