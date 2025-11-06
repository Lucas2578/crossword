function trunc (num) {
    // Truncate toward zero (like Math.trunc)
    // Guard against non-finite inputs (Infinity / -Infinity / NaN) which would
    // otherwise make the loops infinite. Math.trunc returns the same values
    // for these cases, so mirror that behavior.
    if (!isFinite(num)) return num
    let entier = 0;
        if (num >= 0) {
                // increment while next integer is still <= num
                while (entier + 1 <= num) {
                        entier = entier + 1;
                }
        } else {
                // decrement while next integer is still >= num
                while (entier - 1 >= num) {
                        entier = entier - 1;
                }
        }
        return entier
}

function round (num) {
    // Round to nearest integer. Ties (.5) go toward +Infinity per JS Math.round
    const t = trunc(num)
    const diff = num - t
    if (diff === 0) return t
    if (diff > 0) {
        // positive fractional part
        if (diff < 0.5) return t
        // diff >= 0.5 -> round up
        return t + 1
    } else {
        // negative fractional part
        const adiff = -diff
        if (adiff < 0.5) return t
        if (adiff > 0.5) return t - 1
        // tie (adiff === 0.5): for negative numbers Math.round ties toward +Infinity => keep t
        return t
    }
    
}

function ceil (num){
    // Small, clear implementation using trunc
    const t = trunc(num)
    if (num === t) return t
    // if positive and has fractional part -> ceil is trunc + 1
    if (num > 0) return t + 1
    // negative numbers: trunc is already the ceiling
    return t
}

function floor (num){
    const t = trunc(num)
    if (num === t) return t
    // positive numbers: trunc is the floor
    if (num > 0) return t
    // negative numbers with fractional part: floor is trunc - 1
    return t - 1
}

/*const nums = [3, -3, 3, -3, 0]
console.log(nums.map(round))
console.log(nums.map(floor))
console.log(nums.map(trunc))
console.log(nums.map(ceil))*/