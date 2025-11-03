function words (str){
    return str.split(" ")
}
function sentence(arrStr){
    return arrStr.join(" ")
}
function yell(str){
    return str.toUpperCase() 
}

function whisper(str){
    return '*'+str.toLowerCase() + '*'
}
function capitalize(str){
    str = str.toLowerCase()
    let arr = str.split("")
    arr[0] = arr[0].toUpperCase()
    return arr.join("")
}
