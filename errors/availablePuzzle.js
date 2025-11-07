import * as vars from '../variables.js';

/**
 * Checks if the puzzle have been a one letter around starting letter word
 * @throws {Error} If puzzle validation fails
*/

function availablePuzzle(puzzle) {
    puzzle = getGridPuzzle(puzzle)

    for (let row = 0; row < puzzle.length; row++) {
        for (let col = 0; col < puzzle[row].length; col++) {
            const current = puzzle[row][col]
            
            // ?. prevent crash if leave the grid
            const right = puzzle[row]?.[col + 1]
            const left = puzzle[row]?.[col - 1]
            const down = puzzle[row + 1]?.[col]
            const up = puzzle[row - 1]?.[col]

            // If have only one word started by this slot
            if (current == 1) {
                const hasHorizontal = (right == 0 || left == 0)
                const hasVertical = (down == 0 || up == 0)
                
                if (!hasHorizontal && !hasVertical) {
                    throw new Error(vars.applyColor + vars.errorCantPlaceWord, vars.colorRed)
                }
            }

            // If have two word started by this slot
            if (current == 2) {
                const hasHorizontal = (right == 0 || left == 0)
                const hasVertical = (down == 0 || up == 0)
                
                if (!hasHorizontal || !hasVertical) {
                    throw new Error(vars.applyColor + vars.errorCantPlaceWord, vars.colorRed)
                }
            }
        }
    }
    return;
}

export {availablePuzzle};