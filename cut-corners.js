function trunc (num) {
    let x = -12.34;
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
}
function round (num) {
    if (num>0){
        let result =  num - trunc(num)
        if (result < 0.5){
            return trunc(num)
        }else{
            return trunc(num)+1
        }
    }else {
        let result = num - trunc(num)
        if (result < -0.5){
            return trunc(num) -1
        }else{
            return trunc(num)
        }
    }
    
}

function ceil (num){
    let result =  num - trunc(num)
    if (num>0){
        if (result > 0){
            return trunc(num)+1
        }else {
            trunc(num)
        }
    }else {
        return trunc(num)
    }
}

function floor (num){
     let result =  num - trunc(num)
    if (num<0){
        if (result < 0){
            return trunc(num)-1
        }else {
            trunc(num)
        }
    }else {
        return trunc(num)
    }
}
/*console.log(nums.map(round))
console.log(nums.map(floor))
console.log(nums.map(trunc))
console.log(nums.map(ceil))*/