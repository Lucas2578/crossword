function slice (strArr, Sindex, Eindex = strArr.length){
    let final = []
    let i = Sindex
    if (Sindex<0){
        i = strArr.length + Sindex
    }
    while (i < Eindex){
        final += strArr[i]
        i++
    }
    return final
}

console.log(slice('abcdef', -2))