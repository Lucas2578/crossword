function split (str, separator = null, end = null){
    let i = 0
    let starti = 0
    let final = []
    let lenSep = 1
    if (separator.length !== 1){
        lenSep = separator.length
    }
    while(i < str.length &&  final.length !== end){
        if (separator === ""){
            final.push(str[i])
        }else if (str.slice(i,i+lenSep)=== separator){
            final.push(str.slice(starti,i))
            starti = i+lenSep
        }else if (i == str.length-1){
            final.push(str.slice(starti,i+1))
        }
        i++
    }
    return final 
}
function join (array, separator = null){
    let final = ""
    let i = 0
    while(i < array.length ){
        if (separator == "" || i == array.length -1){
            final += array[i]
        } else if (separator == null){
            final += array[i] + ','
        }else{
            final += array[i] + separator
        }
        i++
    }
    return final
}

 const str = "The quick brown fox jumps over the lazy dog.";
console.log(split(str," "))

console.log(split('ggg - ddd - b', ' - '))

const elements = ["Feu", "Air", "Eau"];
console.log(join(elements,"-"))
