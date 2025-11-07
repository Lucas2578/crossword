function sameAmount (str, regex1, regex2){
    let test1 = regex1.test(str)
    let test2 = regex2.test(str)
    if (test1 && test2){
        return true 
    }else {
        return false
    }
}