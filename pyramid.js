function pyramid (str, num){
    let i = 1
    let y = 0
    let nbrSpace = num-1
    let result = ""
    let repeat = 1

    while(i<num+1){

        let x = nbrSpace
        while(x>0){
            result+= " "
            x--
        }
        while(y<repeat){
            result += str
            y++
        }
        if (i !== num+1){
            result += "\n"
        }
        i++
        y = 0
        nbrSpace--
        repeat = repeat +2
    }
    return result
}

console.log(pyramid("*",5))
console.log(pyramid('{}', 12))
