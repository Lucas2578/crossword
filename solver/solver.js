import * as vars from '../utils/variables.js'
import { isValidPlacement } from './validation.js';
import { placeWord } from './placement.js';

function solver(puzzle, words, slots, slotIndex = 0, solutions = []) {
    if (slotIndex >= slots.length) {
        solutions.push(puzzle);
        return null;
    }
    
    const currentSlot = slots[slotIndex];
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        
        if (isValidPlacement(puzzle, currentSlot, word)) {
            const newPuzzle = placeWord(puzzle, currentSlot, word);
            
            const remainingWords = [];
            for (let j = 0; j < words.length; j++) {
                if (words[j] !== words[i]) {
                    remainingWords.push(words[j]);
                }
            }

            solver(newPuzzle, remainingWords, slots, slotIndex + 1, solutions);
        }
    }

    return null;
}

function solveWithUniquenessCheck(puzzle, words, slots) {
    const solutions = [];
    solver(puzzle, words, slots, 0, solutions);
    
    if (solutions.length === 0) {
        throw new Error(vars.errorHaventSolutions);
    }

    if (solutions.length > 1) {
        throw new Error(vars.errorMultipleSolutions)
    }
    
    return solutions[0];
}

export {solveWithUniquenessCheck};