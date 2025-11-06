function triangle (str, num){
    let i = 1
    let y = 0
    let result = ""

    while(i<num+1){
        while(y<i){
            result += str
            y++
        }
        if (i !== num+1){
            result += "\n"
        }
        i++
        y = 0
    }
    return result
}

console.log(triangle('*', 5))