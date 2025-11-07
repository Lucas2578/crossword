import { availablePuzzle } from './availablePuzzle.js';
import * as validators from './validators.js';

/**
 * Checks if the puzzle can be solved from the start
 * @throws {Error} If puzzle validation fails
*/

function errorStartCheck(puzzle, words) {
    validators.validType(puzzle, words)

    puzzle = parsePuzzle(puzzle)

    validators.validEmptyArgs(puzzle, words)
    validators.validWords(words);
    validators.validCharsEmptyPuzzle(puzzle);
    validators.validLengthEmptyPuzzle(puzzle);
    validators.validCanPlaceAllWords(puzzle, words);
    
    availablePuzzle(puzzle);
}

export { errorStartCheck };