function multiply(a, b) {
    let result = 0;
    let positive = true;

    // déterminer le signe
    if (a < 0) {
        a = -a;
        positive = !positive;
    }
    if (b < 0) {
        b = -b;
        positive = !positive;
    }

    // addition répétée
    for (let i = 0; i < a; i++) {
        result += b;
    }

    return positive ? result : -result;
}

function divide(a, b) {
    if (b === 0) throw new Error("Division by zero!");

    let result = 0;
    let positive = true;

    // déterminer le signe
    if (a < 0) {
        a = -a;
        positive = !positive;
    }
    if (b < 0) {
        b = -b;
        positive = !positive;
    }

    while (a >= b) {
        a -= b;
        result++;
    }

    return positive ? result : -result;
}


function modulo(a, b) {
    if (b === 0) throw new Error("Modulo by zero!");

    let positive = a >= 0;
    a = Math.abs(a);
    b = Math.abs(b);

    while (a >= b) {
        a -= b;
    }

    return positive ? a : -a;
}



console.log(multiply(-3,3))
console.log(divide(10,3))
console.log(modulo(10,3))
