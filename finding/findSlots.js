function findSlots (tableauLigne){
    let colones = tableauLigne.length
    let ligne = tableauLigne[0].length
    let FinalResult = []
    
    for(let col = 0; col < colones; col++){
        for(let lig = 0; lig < ligne; lig++){
            
            if ((tableauLigne[col][lig] == '1' || tableauLigne[col][lig] == '2') && 
                tableauLigne[col][lig+1] == '0' &&
                (lig === 0 || tableauLigne[col][lig-1] === '.')) {
                
                let Wlength = lig;
                while(tableauLigne[col][Wlength] !== '.' && tableauLigne[col][Wlength] !== undefined){
                    Wlength++;
                }
                let taille = Wlength - lig;
                
                FinalResult.push({
                    direction: 'H',
                    start: [col, lig],
                    length: taille
                });
            }
            
            if ((tableauLigne[col][lig] == '1' || tableauLigne[col][lig] == '2') && 
                tableauLigne[col+1]?.[lig] == '0' &&
                (col === 0 || tableauLigne[col-1]?.[lig] === '.')) {
                
                let Wlength = col;
                while(tableauLigne[Wlength]?.[lig] !== '.' && tableauLigne[Wlength]?.[lig] !== undefined){
                    Wlength++;
                }
                let taille = Wlength - col;
                
                FinalResult.push({
                    direction: 'V',
                    start: [col, lig],
                    length: taille
                });
            }
        }
    }

    return FinalResult;
}

export {findSlots};