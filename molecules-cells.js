function RNA (str){
    let result = ""
    let i =0
    while(i< str.length){
        switch(str[i]){
            case  "G" :
                result += "C"
            case "C":
                result += "G"
            case "T":
                result += "A"
            case "A" :
                result+= "U"
            default :
                result+= str[i]
        }
        i++
    }
    return result
}

function DNA (str){
    let result = ""
    let i =0
    while(i< str.length){
        switch(str[i]){
            case  "G" :
                result += "C"
            case "C":
                result += "G"
            case "A":
                result += "T"
            case "U" :
                result+= "A"
            default :
                result+= str[i]
        }
        i++
    }
    return result
}