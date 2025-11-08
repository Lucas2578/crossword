import { errorStartCheck } from './errors/checkErrors.js';
import { parsePuzzle } from './parsing/parsePuzzle.js'
import { findSlots } from './finding/findSlots.js'
import { solveWithUniquenessCheck } from './solver/solver.js';
import * as vars from './utils/variables.js';
import { puzzle, words } from './utils/data.js';

function crosswordSolver(puzzle, words) {
    errorStartCheck(puzzle, words);
    let PuzzleParse = parsePuzzle(puzzle)
    let slot = findSlots(PuzzleParse)
    let result = solveWithUniquenessCheck(PuzzleParse, words, slot)
    return result
}

try {
    const result = crosswordSolver(puzzle, words)

        console.log(result)
} catch (error) {
    console.log(vars.applyColor + error.message, vars.colorRed);
}

export default crosswordSolver;