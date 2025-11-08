function findSlots(tableauLigne, array = []) {
    let colones = tableauLigne.length;
    let ligne = tableauLigne[0].length;
    let slot = {};
    let direction = '';
    let start = [];
    let taille = 0;
    let col = 0;
    let FinalResult = [];

    function isStartH(c, l) {
        return tableauLigne[c][l] !== '.' && (l === 0 || tableauLigne[c][l - 1] === '.');
    }

    function isStartV(c, l) {
        return tableauLigne[c][l] !== '.' && (c === 0 || tableauLigne[c - 1][l] === '.');
    }

    while (col < colones) {
        let lig = 0;
        while (lig < ligne) {

            if (isStartH(col, lig)) {
                let Wlength = 0;
                while (lig + Wlength < ligne && tableauLigne[col][lig + Wlength] !== '.') {
                    Wlength++;
                }
                if (Wlength >= 2) {
                    slot = {
                        direction: 'H',
                        start: [col, lig],
                        lengthWord: Wlength
                    };
                    FinalResult.push(slot);
                }
            }

            if (isStartV(col, lig)) {
                let Wlength = 0;
                while (col + Wlength < colones && tableauLigne[col + Wlength][lig] !== '.') {
                    Wlength++;
                }
                if (Wlength >= 2) {
                    slot = {
                        direction: 'V',
                        start: [col, lig],
                        lengthWord: Wlength
                    };
                    FinalResult.push(slot);
                }
            }

            lig++;
        }
        col++;
    }

    return FinalResult;
}
