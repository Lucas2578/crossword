function solver(puzzle, words, slots, slotIndex = 0) {
    if (slotIndex >= slots.length) {
        return puzzle;
    }
    
    const currentSlot = slots[slotIndex];
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        
        if (isValidPlacement(puzzle, currentSlot, word)) {
            
            const newPuzzle = placeWord(puzzle, currentSlot, word);
            const remainingWords = words.filter((_, index) => index !== i);
            const result = solver(newPuzzle, remainingWords, slots, slotIndex + 1);
            
            if (result) {
                return result;
            }
        }
    }
    
    return null;
}

function isValidPlacement(puzzle, slot, word) {
    if (word.length !== slot.length) {
        return false;
    }

    const startLine = slot.start[0]
    const startCol = slot.start[1]

    if (slot.direction === "H") {
        for (let i = 0; i < word.length; i++) {
            const currentCol = startCol + i;
            const cell = puzzle[startLine]?.[currentCol];

            switch (cell) {
                case "0", "1", "2":
                    continue;
                default:
                    return false;
            }
        }
        
        const before = puzzle[startLine]?.[startCol - 1];
        const after = puzzle[startLine]?.[startCol + word.length];

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
            const currentRow = startLine + i;
            const cell = puzzle[currentRow]?.[startCol];

            switch (cell) {
                case "0", "1", "2":
                    continue;
                default:
                    return false;
            }
        }
        
        const before = puzzle[startLine - 1]?.[startCol];
        const after = puzzle[startLine + word.length]?.[startCol];

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