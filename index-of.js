function indexOf (arr, val){
    let i = 0
    while (i< arr.length){
        if (arr[i] === val){
            return i
        }
        i++
    }
    return -1
}

function lastIndexOf (arr, val){
    let i = arr.length
    while (i>0){
        if (arr[i] === val){
            return i
        }
        i--
    }
    return -1
}

function includes (arr, val){
    let i = 0
    while (i< arr.length){
        if (arr[i] === val){
            return true
        }
        i++
    }
    return false
}