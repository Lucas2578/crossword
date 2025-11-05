const nums = [3.7, -3.7, 3.1, -3.1]


function trunc (num) {
    return parseInt(num)
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