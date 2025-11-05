function indexOf (arr, val, start = 0){
    let i = start
    while (i< arr.length){
        if (arr[i] === val){
            return i
        }
        i++
    }
    return -1
}

function lastIndexOf(arr, val, start = arr.length - 1) {
    let i = start;
    while (i >= 0) {
        if (arr[i] === val) return i;
        i--;
    }
    return -1;
}
function includes (arr, val , start = 0){
    let i = start
    while (i< arr.length){
        if (arr[i] === val){
            return true
        }
        i++
    }
    return false
}
