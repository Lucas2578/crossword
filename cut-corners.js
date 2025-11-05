function trunc(num) {
  if (num >= 0) {
    // cas positif : monter depuis 0 jusqu'à dépasser, puis reculer d'1
    let entier = 0;
    while (entier <= num) {
      entier = entier + 1;
    }
    return entier - 1;
  } else {
    // cas négatif : travailler sur -num (valeur positive), puis remettre le signe
    let pos = -num;         // valeur positive
    let entierPos = 0;
    while (entierPos <= pos) {
      entierPos = entierPos + 1;
    }
    return - (entierPos - 1);
  }
}

function round(num) {
  const t = trunc(num);
  const fractional = num - t;

  if (num >= 0) {
    return (fractional >= 0.5) ? (t + 1) : t;
  } else {
    return (fractional <= -0.5) ? (t - 1) : t;
  }
}

function ceil(num) {
  const t = trunc(num);
  const fractional = num - t;

  if (num >= 0) {
    return (fractional > 0) ? (t + 1) : t;
  } else {
    // pour num négatif, trunc fait déjà ceil (vers zéro), donc c'est t
    return t;
  }
}

function floor(num) {
  const t = trunc(num);
  const fractional = num - t;

  if (num >= 0) {
    // pour num positif, trunc fait floor
    return t;
  } else {
    // si fraction < 0 (i.e. il y a une partie fractionnaire) on doit descendre d'1
    return (fractional < 0) ? (t - 1) : t;
  }
}
