import * as vars from '../utils/variables.js';
import { getGridPuzzle } from '../parsing/getGridPuzzle.js'

/**
 * Checks if the puzzle have been a one letter around starting letter word
 * @throws {Error} If puzzle validation fails
*/

function availablePuzzle(puzzle) {
    puzzle = getGridPuzzle(puzzle)

    for (let row = 0; row < puzzle.length; row++) {
        for (let col = 0; col < puzzle[row].length; col++) {
            const current = puzzle[row][col]
            
            // Skip if not a starter letter (1-9)
            if (!vars.letterStarter.includes(current)) continue;
            
            // ?. prevent crash if leave the grid
            const right = puzzle[row]?.[col + 1]
            const left = puzzle[row]?.[col - 1]
            const down = puzzle[row + 1]?.[col]
            const up = puzzle[row - 1]?.[col]

            // Check if at least one adjacent cell is a '0' or another starter (1-9)
            const hasValidAdjacent = (
                (right && right !== vars.letterNothing) || 
                (left && left !== vars.letterNothing) || 
                (down && down !== vars.letterNothing) || 
                (up && up !== vars.letterNothing)
            )
            
            if (!hasValidAdjacent) {
                throw new Error(vars.errorCantPlaceWord)
            }
        }
    }
    return;
}

export {availablePuzzle};