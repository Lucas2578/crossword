import { getGridPuzzle } from '../parsing/getGridPuzzle.js';

function findSlots(tableauLigne) {
    // Convertir en grille 2D si c'est un tableau de strings
    if (typeof tableauLigne[0] === 'string') {
        tableauLigne = getGridPuzzle(tableauLigne);
    }

    let colones = tableauLigne.length;
    let ligne = tableauLigne[0].length;
    let FinalResult = [];

    function isStartH(c, l) {
        return tableauLigne[c][l] !== '.' && (l === 0 || tableauLigne[c][l - 1] === '.');
    }

    function isStartV(c, l) {
        return tableauLigne[c][l] !== '.' && (c === 0 || tableauLigne[c - 1][l] === '.');
    }

    let col = 0;
    while (col < colones) {
        let lig = 0;
        while (lig < ligne) {
            
            // Recherche horizontale
            if (isStartH(col, lig)) {
                let Wlength = 0;
                while (lig + Wlength < ligne && tableauLigne[col][lig + Wlength] !== '.') {
                    Wlength++;
                }
                if (Wlength >= 2) {
                    FinalResult.push({
                        direction: 'H',
                        start: [col, lig],
                        length: Wlength
                    });
                }
            }

            // Recherche verticale
            if (isStartV(col, lig)) {
                let Wlength = 0;
                while (col + Wlength < colones && tableauLigne[col + Wlength][lig] !== '.') {
                    Wlength++;
                }
                if (Wlength >= 2) {
                    FinalResult.push({
                        direction: 'V',
                        start: [col, lig],
                        length: Wlength
                    });
                }
            }

            lig++;
        }
        col++;
    }

    return FinalResult;
}

export { findSlots };