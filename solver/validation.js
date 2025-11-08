import * as vars from '../utils/variables.js'

function isValidPlacement(puzzle, slot, word) {
    if (word.length !== slot.length) {
        return false;
    }

    const col = slot.start[1];
    const lig = slot.start[0];

    if (slot.direction === "H") {
        for (let i = 0; i < word.length; i++) {
            const currentCol = col + i;
            const cell = puzzle[lig]?.[currentCol];

            if (cell === undefined || cell === vars.letterNothing) {
                return false;
            }

            if (cell === vars.letterButNotStarter || vars.letterStarter.includes(cell)) {
                continue;
            }

            if (cell !== word[i]) {
                return false;
            }
        }
        
        const before = puzzle[lig]?.[col - 1];
        const after = puzzle[lig]?.[col + word.length];

        if (before !== undefined && before !== vars.letterNothing) {
            return false;
        }

        if (after !== undefined && after !== vars.letterNothing) {
            return false;
        }
        
        return true;
    }

    if (slot.direction === "V") {
        for (let i = 0; i < word.length; i++) {
            const currentRow = lig + i;
            const cell = puzzle[currentRow]?.[col];

            if (cell === undefined || cell === vars.letterNothing) {
                return false;
            }

            if (cell === vars.letterButNotStarter || vars.letterStarter.includes(cell)) {
                continue;
            }

            if (cell !== word[i]) {
                return false;
            }
        }
        
        const before = puzzle[lig - 1]?.[col];
        const after = puzzle[lig + word.length]?.[col];

        if (before !== undefined && before !== vars.letterNothing) {
            return false;
        }

        if (after !== undefined && after !== vars.letterNothing) {
            return false;
        }
        
        return true;
    }

    return false;
}

export {isValidPlacement};