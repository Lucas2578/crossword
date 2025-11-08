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

export {placeWord};