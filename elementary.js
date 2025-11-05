function multiply (a, b) {
    let result = 0;
    let i = 0;

    while (i < a) {
        result += b;
        i++;
    }
    return result;
}

function divide (a, b) {
    let result = a;
    let i = 0;

    while (result >= b) {
        result -= b;
        i++;
    }
    return i;
}

function modulo (a, b) {
    let result = a;

    while (result >= b) {
        result -= b;
    }
    return result; // ✅ le reste
}


console.log(multiply(3,3))
console.log(divide(10,3))
console.log(modulo(10,3))
