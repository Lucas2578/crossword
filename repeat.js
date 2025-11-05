function repeat(str, num){
    let i = 0 
    let final =""
    while(i < num){
        final += str
        i++
    }
    console.log(final)
    return final
}

repeat('a',3)