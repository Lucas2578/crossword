function isPositive (number) {
    if (number > 0){
        return true 
    } else {
        return false
    }
}

function abs (number) {
    if (isPositive(number)){
        return number 
    }else {
        return number * -1
    }
}