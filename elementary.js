function multiply (a,b) {
    let result = 0
    let i =0
    while (i<a){
        result += b
        i++
    }
    return result
}

function divide (a,b) {
    let result = a
    let i =0
    while (result>b){
        result -= b
        i++
    }
    return i
}

function modulo (a,b) {
    let result = a
    let i =0
    while (result>b){
        result -= b
        i++
    }
    return i/2*10
}

console.log(multiply(3,3))
console.log(divide(10,3))
console.log(modulo(3,3))
