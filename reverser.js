function reverse (array) {
    let i = array.length -1
    let final = ""
    while(i>=0){
        final += array[i]
        i--
    }
    return final
}

console.log(reverse(["banana", "apple", "peach"]))