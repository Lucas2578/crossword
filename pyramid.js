function pyramid (str, num){
  let result = "";
  let repeat = 1;
  let nbrSpace = num * 2 - 2; // more initial spacing for centered alignment

  for (let i = 0; i < num; i++) {
    result += " ".repeat(nbrSpace) + str.repeat(repeat);
    if (i !== num - 1) result += "\n";
    nbrSpace -= 2;
    repeat += 2;
  }
  return result;
}
