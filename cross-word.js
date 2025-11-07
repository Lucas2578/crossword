import { errorStartCheck } from './checkErrors.js';
import * as vars from './variables.js';

function crosswordSolver(puzzle, words) {
    try {
        errorStartCheck(puzzle, words);
    } catch (error) {
        console.log(vars.applyColor + error.message, vars.colorRed);
        return;
    }
}

const puzzle = `2001
0..0
1000
0..0`
const words = ['casa', 'alan', 'ciao', 'anta']

crosswordSolver(puzzle, words)