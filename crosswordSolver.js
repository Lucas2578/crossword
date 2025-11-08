import { errorStartCheck } from './errors/checkErrors.js';
import { parsePuzzle } from './parsing/parsePuzzle.js'
import { findSlots } from './finding/findSlots.js'
import { solve } from './solver/backtraking.js'

import * as vars from './utils/variables.js';

function crosswordSolver(puzzle, words) {
    try {
        errorStartCheck(puzzle, words);
        let PuzzleParse = parsePuzzle(puzzle)
        console.log(PuzzleParse)
        let slot = findSlots(PuzzleParse)
        console.log(slot)
        for (let r = 0; r < PuzzleParse.length; r++) {
            for (let c = 0; c < PuzzleParse[r].length; c++) {
                if (!isNaN(PuzzleParse[r][c])) { // si c’est un chiffre
                    PuzzleParse[r][c] = '.'        // la case devient vide
                }
            }
        }
        let resolution = solve(0,PuzzleParse,words,slot)
        let final = resolution.map(line => line.join('')).join('\n');
        console.log(final)
        //console.log(resolution)
    } catch (error) {
        console.log(vars.applyColor + error.message, vars.colorRed);
        return;
    }
}

const puzzle = `..1.1..1...
10000..1000
..0.0..0...
..1000000..
..0.0..0...
1000..10000
..0.1..0...
....0..0...
..100000...
....0..0...
....0......`
const words = [
  'popcorn',
  'fruit',
  'flour',
  'chicken',
  'eggs',
  'vegetables',
  'pasta',
  'pork',
  'steak',
  'cheese',
]

crosswordSolver(puzzle, words)