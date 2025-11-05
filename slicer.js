function slice (strArr, Sindex, Eindex = strArr.length){
    let final = []
    let i = Sindex
    let end = Eindex
    if (Sindex<0){
        i = strArr.length + Sindex
    }
    if (Eindex<0){
        end = strArr.length + Eindex
    }
    if (Array.isArray(strArr)){
            while(i< end){
            final.push(strArr[i])
        i++
        }
    }else {
        while (i < end){
        final += strArr[i]
        i++
    }
    }
    return final
}