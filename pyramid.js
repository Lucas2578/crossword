function pyramid(str, num){
  let result = "";
  let repeat = 1;
  let nbrSpace = (num - 1) * str.length; // scale spaces by length of str

  for (let i = 0; i < num; i++) {
    result += " ".repeat(nbrSpace) + str.repeat(repeat);
    if (i !== num - 1) result += "\n";
    nbrSpace -= str.length;
    repeat += 2;
  }
  return result;
}