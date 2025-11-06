function reverse (array) {
    let i = array.length -1
    if (Array.isArray(value)){
        let final = []
        while(i>=0){
            final.push(array[i])
            i--
         }
    }else {
        let final = ""
        while(i>=0){
            final += array[i]
            i--
        }
    }
    return final
}

console.log(reverse(["banana", "apple", "peach"]))