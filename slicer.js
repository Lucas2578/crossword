function slice (strArr, Sindex, Eindex = strArr.length -1){
    let final = []
    let i = Sindex
    while (i !== Eindex){
        final += strArr[i]
        i++
    }
    return final
}