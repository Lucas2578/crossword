export function solve(slotIndex, grid, remainingWords, slots) {
    // 🧩 Cas de base
    if (slotIndex === slots.length) {
        return grid
    }

    const slot = slots[slotIndex]

    // 🔁 Boucle sur chaque mot restant
    for (let word of remainingWords) {

        if (word.length !== slot.lengthWord) {
            continue
        }
        const valid = isValidPlacement(grid, slot, word)
        if (valid) {
            const newGrid = placeWord(grid, slot, word)
            const newRemaining = remainingWords.filter(w => w !== word)

            // 🔁 Appel récursif
            const result = solve(slotIndex + 1, newGrid, newRemaining, slots)
            if (result) {
                return result
            }
        } 
    }

    return null // pas d'insulte 😉
}


// =====================================================
// === Check si un mot peut être placé à un endroit ====
// =====================================================
function isValidPlacement(grid, slot, word) {

    const direction = slot.direction
    const rowStart = slot.start[0]
    const colStart = slot.start[1]

    if (direction === 'H') {
        for (let i = 0; i < slot.lengthWord; i++) {
            const currentChar = grid[rowStart][colStart + i]
            if (currentChar !== '.' && currentChar !== word[i]) {
                return false
            }
        }
        return true
    }

    if (direction === 'V') {
        for (let i = 0; i < slot.lengthWord; i++) {
            const currentChar = grid[rowStart + i][colStart]
            if (currentChar !== '.' && currentChar !== word[i]) {
                return false
            }
        }
        return true
    }

    throw new Error("❌ Invalid direction in isValidPlacement()")
}


// ==============================================
// === Placer un mot sur une copie de la grille ===
// ==============================================
function placeWord(grid, slot, word) {

    // 🔁 Copier la grille pour éviter de modifier l’original
    const newGrid = grid.map(row => [...row])
    const direction = slot.direction
    const rowStart = slot.start[0]
    const colStart = slot.start[1]

    if (direction === 'H') {
        for (let i = 0; i < slot.lengthWord; i++) {
            newGrid[rowStart][colStart + i] = word[i]
        }
    } else if (direction === 'V') {
        for (let i = 0; i < slot.lengthWord; i++) {
            newGrid[rowStart + i][colStart] = word[i]
        }
    } else {
        throw new Error("❌ Invalid direction in placeWord()")
    }

    return newGrid
}
