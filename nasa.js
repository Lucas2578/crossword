function nasa(n){
    let start = 1
    let result = ""
    while(start !== n){
        if(start%3 == 0 && start%5== 0) {
            result+= String("NASA")
        }else if(start%3 == 0){
            result+= String("NA")
        }else if(start%5 == 0){
            result+= String("SA")
        }else{
            result+= String(start)
        }
        if (start != n){
            result += " "
        }
        start++
    }
}