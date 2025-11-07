import * as vars from './variables.js';

/**
 * Checks if the puzzle can be solved from the start
 * @throws {Error} If puzzle validation fails
*/

function errorStartCheck(puzzle, words) {
    validWords(words);
    validLengthEmptyPuzzle(puzzle);
    validCharsEmptyPuzzle(puzzle);
    validCanPlaceAllWords(puzzle, words);
}

/**
 * Validates puzzle and words before solving
 * Runs multiple validation checks:
 * - validWords: Checks for duplicate words
 * - validLengthEmptyPuzzle: Ensures all lines have same length
 * - validCharsEmptyPuzzle: Verifies puzzle has more than one character type and if have a invalid character
 * - validCanPlaceAllWords: Validates word count matches available positions
 * 
 * @param {string[]} puzzle - The puzzle grid
 * @param {string[]} words - Words to place
 * @throws {Error} If any validation fails
*/


function validWords(words) {
    const wordsWithoutClone = new Set(words);

    if (wordsWithoutClone.size !== words.length) {
        throw new Error(vars.errorWordHaveClone);
    }
}

function validLengthEmptyPuzzle(puzzle) {

    for (let i = 0; i < puzzle.length - 1; i++) {

        // If this line have not same length with line+1
        if (puzzle[i].length !== puzzle[i + 1].length) {
            throw new Error(vars.errorPuzzleLengthLine);
        }
    }
}

function validCharsEmptyPuzzle(puzzle) {

    // If have unique char
    const haveUniqueChar = new Set(puzzle).size === 1;

    if (haveUniqueChar) {
        throw new Error(vars.errorPuzzleUniqueChar);
    };

    // If have invalid char
    for (let line of puzzle) {
        for (let char of line) {
            if (!vars.validChars.includes(char)) {
                throw new Error(vars.errorPuzzleIncorrectChar);
            }
        }
    }
}

function validCanPlaceAllWords(puzzle, words) {
    let totalWord = 0;

    // For each number found in the puzzle, add it up and check if the total matches the number of words in the list
    for (let line of puzzle) {
        for (let char of line) {
            if (char !== "." && char > 0) {
                totalWord += Number(char);
            }
        }
    }

    // Error message is different if have too much or not enough words
    if (totalWord < words.length) {
        throw new Error(vars.errorPuzzleCannotPlaceNotEnoughWords);
    } else if (totalWord > words.length) {
        throw new Error(vars.errorPuzzleCannotPlaceTooMuchWords);
    }
}

export { errorStartCheck };