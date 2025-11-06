// function trunc (num) {
//     let entier = 0;
//     if (num >= 0) {
//       while (entier <= num) {
//         entier = entier + 1;
//       }
//       entier = entier - 1;
//     } else {
//       while (entier > num) {
//         entier = entier - 1;
//       }
//     }
//     return entier
// }
// function round (num) {
//     if (num>0){
//         let result =  num - trunc(num)
//         if (result < 0.5){
//             return trunc(num)
//         }else{
//             return trunc(num)+1
//         }
//     }else {
//         let result = num - trunc(num)
//         if (result < -0.5){
//             return trunc(num) -1
//         }else{
//             return trunc(num)
//         }
//     }
    
// }

// function ceil (num){
//     let result =  num - trunc(num)
//     if (num>0){
//         if (result > 0){
//             return trunc(num)+1
//         }else {
//             trunc(num)
//         }
//     }else {
//         return trunc(num)
//     }
// }

// function floor (num){
//     let result =  num - trunc(num)
//     if (num<0){
//         if (result > 0){
//             return trunc(num)
//         }else {
//             trunc(num)
//         }
//     }else {
//         return trunc(num)
//     }
// }

// const nums = [3, -3, 3, -3, 0]
// console.log(nums.map(round))
// console.log(nums.map(floor))
// console.log(nums.map(trunc))
// console.log(nums.map(ceil))
function trunc(num) {
  let entier = 0;

  if (num >= 0) {
    while (entier + 1 <= num) {
      entier = entier + 1;
    }
  } else {
    while (entier - 1 > num) {
      entier = entier - 1;
    }
  }

  return entier;
}

function round(num) {
  const t = trunc(num);
  const diff = num - t;

  if (num >= 0) {
    return diff >= 0.5 ? t + 1 : t;
  } else {
    return diff <= -0.5 ? t - 1 : t;
  }
}

function ceil(num) {
  const t = trunc(num);
  if (num > 0 && num !== t) return t + 1;
  return t;
}

function floor(num) {
  const t = trunc(num);
  if (num < 0 && num !== t) return t - 1;
  return t;
}

// ✅ Test
const nums = [3.7, -3.7, 3.1, -3.1];
console.log("round:", nums.map(round)); // [ 4, -4, 3, -3 ]
console.log("floor:", nums.map(floor)); // [ 3, -4, 3, -4 ]
console.log("trunc:", nums.map(trunc)); // [ 3, -3, 3, -3 ]
console.log("ceil :", nums.map(ceil));  // [ 4, -3, 4, -3 ]
