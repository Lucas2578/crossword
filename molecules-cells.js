function RNA (str){
    let result = ""
    let i =0
    while(i< str.length){
        switch(str[i]){
            case  "G" :
                result += "C"
                break
            case "C":
                result += "G"
                break
            case "T":
                result += "A"
                break
            case "A" :
                result+= "U"
                break
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
                break
            case "C":
                result += "G"
                break
            case "A":
                result += "T"
                break
            case "U" :
                result+= "A"
                break
            // default :
            //     result+= str[i]
        }
        i++
    }
    return result
}

console.log(RNA('TAGC'))