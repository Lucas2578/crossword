export function solve(slotIndex, grid, remainingWords, slots) {
    // Si tous les slots sont remplis, nous avons trouvé une solution
    if (slotIndex === slots.length) {
        return grid;
    }

    const slot = slots[slotIndex];

    // Essayer chaque mot restant
    for (let word of remainingWords) {
        // Vérifier si la longueur du mot correspond à la longueur du slot
        if (word.length !== slot.lengthWord) {
            continue;
        }

        // Vérifier si le mot peut être placé
        if (isValidPlacement(grid, slot, word)) {
            // Créer une copie profonde de la grille
            const newGrid = JSON.parse(JSON.stringify(grid));
            // Placer le mot
            const updatedGrid = placeWord(newGrid, slot, word);
            // Créer une nouvelle liste de mots restants
            const newRemaining = remainingWords.filter(w => w !== word);
            
            // Appel récursif avec le prochain slot
            const result = solve(slotIndex + 1, updatedGrid, newRemaining, slots);
            if (result !== null) {
                return result;
            }
        }
    }
    
    // Aucune solution trouvée pour cette branche
    return null;

}

function isValidPlacement(grid, slot, word) {
    const direction = slot.direction;
    const col = slot.start[0];
    const lig = slot.start[1];

    if (direction === 'H') {
        // Vérifier le placement horizontal
        for (let i = 0; i < slot.lengthWord; i++) {
            const currentCell = grid[col][lig + i];
            // Si la cellule n'est pas vide et contient une lettre différente
            if (currentCell !== 0 && currentCell !== word[i]) {
                return false;
            }
        }
    } else if (direction === 'V') {
        // Vérifier le placement vertical
        for (let i = 0; i < slot.lengthWord; i++) {
            const currentCell = grid[col + i][lig];
            // Si la cellule n'est pas vide et contient une lettre différente
            if (currentCell !== 0 && currentCell !== word[i]) {
                return false;
            }
        }
    } else {
        throw new Error("Direction invalide");
    }
    
    return true;
}   

function placeWord(grid, slot, word) {
    const direction = slot.direction;
    const col = slot.start[0];
    const lig = slot.start[1];

    if (direction === 'H') {
        // Placement horizontal
        for (let i = 0; i < slot.lengthWord; i++) {
            grid[col][lig + i] = word[i];
        }
    } else if (direction === 'V') {
        // Placement vertical
        for (let i = 0; i < slot.lengthWord; i++) {
            grid[col + i][lig] = word[i];
        }
    } else {
        throw new Error("Direction invalide");
    }

    return grid;
}   
