import { errorStartCheck } from './checkErrors.js';
import * as vars from './variables.js';

function crosswordSolver(emptyPuzzle, words) {
    const emptyPuzzleTable = emptyPuzzle.split('\n')

    try {
        errorStartCheck(emptyPuzzleTable, words);
    } catch (error) {
        console.log(vars.applyColor + error.message, vars.colorRed);
        return;
    }
}

const emptyPuzzle = `2001
0..0
2000
0..0`
const words = ['casa', 'alan', 'ciao', 'anta']

crosswordSolver(emptyPuzzle, words)