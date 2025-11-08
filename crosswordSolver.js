import { errorStartCheck } from './errors/checkErrors.js';
import { parsePuzzle } from './parsing/parsePuzzle.js'
import { findSlots } from './finding/findSlots.js'
import { solveWithUniquenessCheck } from './solver.js'
import * as vars from './utils/variables.js';

function crosswordSolver(puzzle, words) {
    try {
        errorStartCheck(puzzle, words);
        let PuzzleParse = parsePuzzle(puzzle)
        let slot = findSlots(PuzzleParse)
        let result = solveWithUniquenessCheck(PuzzleParse, words, slot)
        console.log(result)
    } catch (error) {
        console.log(vars.applyColor + error.message, vars.colorRed);
        return;
    }
}

const puzzle = '2001\n0..0\n1000\n0..0'
const words = ['aaab', 'aaac', 'aaad', 'aaae']

crosswordSolver(puzzle, words)