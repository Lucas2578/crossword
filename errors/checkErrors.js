import { availablePuzzle } from './availablePuzzle.js';
import { parsePuzzle } from '../parsing/parsePuzzle.js'
import * as validators from './validators.js';

/**
 * Checks if the puzzle can be solved from the start
 * @throws {Error} If puzzle validation fails
*/

function errorStartCheck(puzzle, words) {
    validators.validType(puzzle, words)

    const puzzleParsed = parsePuzzle(puzzle)

    validators.validEmptyArgs(puzzleParsed, words)
    validators.validWords(words);
    validators.validCharsEmptyPuzzle(puzzleParsed);
    validators.validLengthEmptyPuzzle(puzzleParsed);
    validators.validCanPlaceAllWords(puzzleParsed, words);
    
    availablePuzzle(puzzleParsed);
}

export { errorStartCheck };