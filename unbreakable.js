function split (str, separator = null, end = null){
    let final = []
    
    // Handle empty string separator - split into characters
    if (separator === '') {
        for (let i = 0; i < str.length && (end === null || final.length < end); i++) {
            final.push(str[i])
        }
        return final
    }
    
    // Default separator is space
    if (separator === null) separator = ' '
    
    let i = 0
    let starti = 0
    let lenSep = separator.length

    while (i <= str.length && (end === null || final.length < end)) {
        // Check if we're at the end or found a separator
        if (i === str.length || str.slice(i, i + lenSep) === separator) {
            // Add the substring from last position to current
            final.push(str.slice(starti, i))
            if (i === str.length) break
            
            // Skip the separator
            i += lenSep
            starti = i
            continue
        }
        i++
    }
    
    // If we hit the end limit but haven't finished the string,
    // add the rest as the last element
    if (end !== null && final.length === end && starti < str.length) {
        final[final.length - 1] = str.slice(starti)
    }
    
    return final
}
function join (array, separator = null) {
    // Handle empty array
    if (array.length === 0) return ''
    
    // If separator is undefined or null, use comma
    if (separator === null || separator === undefined) separator = ','
    
    let final = ''
    for (let i = 0; i < array.length; i++) {
        // Convert null/undefined to empty string like Array.prototype.join
        const element = array[i] === null || array[i] === undefined ? '' : array[i]
        
        // Don't add separator after the last element
        if (i === array.length - 1) {
            final += element
        } else {
            final += element + separator
        }
    }
    return final
}

 const str = "The quick brown fox jumps over the lazy dog.";
console.log(split(str," "))

console.log(split('ggg - ddd - b', ' - '))
console.log(split('ee,ff,g,', ','))

const elements = ["Feu", "Air", "Eau"];
console.log(join(elements,"-"))


console.log(split('Riad'))