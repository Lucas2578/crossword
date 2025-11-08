import { errorStartCheck } from './errors/checkErrors.js';
import { parsePuzzle } from './parsing/parsePuzzle.js'
import { findSlots } from './finding/findSlots.js'
import { solveWithUniquenessCheck } from './solver/solver.js';
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

const puzzle = `...1...........
..1000001000...
...0....0......
.1......0...1..
.0....100000000
100000..0...0..
.0.....1001000.
.0.1....0.0....
.10000000.0....
.0.0......0....
.0.0.....100...
...0......0....
..........0....`
const words = [
  'sun',
  'sunglasses',
  'suncream',
  'swimming',
  'bikini',
  'beach',
  'icecream',
  'tan',
  'deckchair',
  'sand',
  'seaside',
  'sandals',
].reverse()

crosswordSolver(puzzle, words)