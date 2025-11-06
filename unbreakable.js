function split (str, separator = null, end = null){
    let i = 0
    let starti = 0
    let final = []
    while(i < str.length &&  final.length !== end){
        if (separator === ""){
            final.push(str[i])
        }else if (str[i] === separator || i == str.length-1 ){
            final.push(str.slice(starti,i+1))
            starti = i
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
console.log(split(str," ", 3))

const elements = ["Feu", "Air", "Eau"];
console.log(join(elements,"-"))
