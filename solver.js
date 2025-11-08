export function solver(puzzle, words, slots, slotIndex = 0, solutions = []) {
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
            
            if (solutions.length > 1) {
                throw new Error("Plusieurs solutions trouvées gros sac à merde")
            }
        }
    }

    return null;
}

export function solveWithUniquenessCheck(puzzle, words, slots) {
    const solutions = [];
    solver(puzzle, words, slots, 0, solutions);
    
    if (solutions.length === 0) {
        throw new Error("Aucune solution trouvée");
    }
    
    if (solutions.length > 1) {
        throw new Error(`Plusieurs solutions trouvées (${solutions.length} solutions)`);
    }
    
    return solutions[0];
}

function placeWord(puzzle, slot, word) {
    const grid = puzzle.map(line => line.split(''));
    const col = slot.start[1];
    const lig = slot.start[0];
    
    if (slot.direction === 'H') {
        for (let i = 0; i < word.length; i++) {
            grid[lig][col + i] = word[i];
        }
    } else {
        for (let i = 0; i < word.length; i++) {
            grid[lig + i][col] = word[i];
        }
    }
    
    return grid.map(line => line.join(''));
}

export function isValidPlacement(puzzle, slot, word) {
    if (word.length !== slot.length) {
        return false;
    }

    const col = slot.start[1];
    const lig = slot.start[0];

    if (slot.direction === "H") {
        for (let i = 0; i < word.length; i++) {
            const currentCol = col + i;
            const cell = puzzle[lig]?.[currentCol];

            if (cell === undefined || cell === '.') {
                return false;
            }

            if (cell === '0' || cell === '1' || cell === '2') {
                continue;
            }

            if (cell !== word[i]) {
                return false;
            }
        }
        
        const before = puzzle[lig]?.[col - 1];
        const after = puzzle[lig]?.[col + word.length];

        if (before !== undefined && before !== '.') {
            return false;
        }

        if (after !== undefined && after !== '.') {
            return false;
        }
        
        return true;
    }

    if (slot.direction === "V") {
        for (let i = 0; i < word.length; i++) {
            const currentRow = lig + i;
            const cell = puzzle[currentRow]?.[col];

            if (cell === undefined || cell === '.') {
                return false;
            }

            if (cell === '0' || cell === '1' || cell === '2') {
                continue;
            }

            if (cell !== word[i]) {
                return false;
            }
        }
        
        const before = puzzle[lig - 1]?.[col];
        const after = puzzle[lig + word.length]?.[col];

        if (before !== undefined && before !== '.') {
            return false;
        }

        if (after !== undefined && after !== '.') {
            return false;
        }
        
        return true;
    }

    return false;
}