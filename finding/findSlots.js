import * as vars from '../utils/variables.js';

function findSlots (tableauLigne){
    let colones = tableauLigne.length
    let ligne = tableauLigne[0].length
    let FinalResult = []
    
    for(let col = 0; col < colones; col++){
        for(let lig = 0; lig < ligne; lig++){
            
            if (vars.letterStarter.includes(tableauLigne[col][lig]) && 
                tableauLigne[col][lig+1] == vars.letterButNotStarter &&
                (lig === 0 || tableauLigne[col][lig-1] === vars.letterNothing)) {
                
                let Wlength = lig;
                while(tableauLigne[col][Wlength] !== vars.letterNothing && tableauLigne[col][Wlength] !== undefined){
                    Wlength++;
                }
                let taille = Wlength - lig;
                
                FinalResult.push({
                    direction: 'H',
                    start: [col, lig],
                    length: taille
                });
            }
            
            if (vars.letterStarter.includes(tableauLigne[col][lig]) && 
                tableauLigne[col+1]?.[lig] == vars.letterButNotStarter &&
                (col === 0 || tableauLigne[col-1]?.[lig] === vars.letterNothing)) {
                
                let Wlength = col;
                while(tableauLigne[Wlength]?.[lig] !== vars.letterNothing && tableauLigne[Wlength]?.[lig] !== undefined){
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

export { findSlots };