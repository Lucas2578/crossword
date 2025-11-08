function findSlots (tableauLigne){
    let colones = tableauLigne.length
    let ligne = tableauLigne[0].length
    let slot = new Object
    let direction = ''
    let start = []
    let taille = 0
    let col =0
    let FinalResult = []
    
    while(col<colones){
        let lig = 0
        while(lig<ligne){
            if (tableauLigne[col][lig] == 1){
                if (tableauLigne[col][lig+1]== 0){
                    direction = 'H'
                    let Wlength = lig
                    while(tableauLigne[col][Wlength] !== '.'&&tableauLigne[col][Wlength] !== undefined){
                        Wlength++
                    }
                    taille = Wlength - lig
                    start = [col,lig]
                }else if (tableauLigne[col+1][lig]== 0){
                    direction = 'V'
                    let Wlength = col
                    while(tableauLigne[Wlength][lig] !== '.'&&tableauLigne[Wlength][lig] !== undefined){
                        Wlength++
                        if(tableauLigne[Wlength] == undefined){
                            break
                        }
                    }
                    taille = Wlength - col
                    start = [col,lig]
                }
                slot = {
                    direction : direction,
                    start : start,
                    lengthWord : taille
                }
                FinalResult.push(slot)
            }
            
            if (tableauLigne[col][lig] == 2){
                if (tableauLigne[col][lig+1]== 0 && tableauLigne[col+1][lig]== 0){
                    direction = 'H'
                    let Wlength = lig
                    while(tableauLigne[col][Wlength] !== '.'&&tableauLigne[col][Wlength] !== undefined){
                        Wlength++
                    }
                    taille = Wlength - lig
                    start = [col,lig]

                    slot = {
                        direction : direction,
                        start : start,
                        lengthWord : taille
                    }
                    FinalResult.push(slot)

                    direction = 'V'
                    Wlength = col
                    while(tableauLigne[Wlength][lig] !== '.'&& tableauLigne[Wlength][lig] !== undefined){
                        Wlength++
                        if(tableauLigne[Wlength] == undefined){
                            break
                        }
                    }
                    taille = Wlength - col
                    start = [col,lig]
                    slot = {
                        direction : direction,
                        start : start,
                        lengthWord : taille
                    }
                    FinalResult.push(slot)
                }
            }
            lig++
        }
        col++
    }
    return FinalResult
}

export {findSlots} ;