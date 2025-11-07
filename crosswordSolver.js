const emptyPuzzle = 
`2001
0..0
1000
0..0`
const words = ['casa', 'alan', 'ciao', 'anta']

function crosswordSolver(puzzle, word){
    const wordVerif =  Array.from(new Set(words))
    if (words.length !== wordVerif.length){
        console.log("erreur");
        return "erreur"
    }
    parsePuzzle(puzzle)
    
}

function parsePuzzle (Puzzle){
    let tableauLigne = Puzzle.split('\n')
}
function findSlots (tableauLigne){
    let colones = tableauLigne.length
    let ligne = tableauLigne[0].length
    let slot = new Object

    let col =0
    let lig = 0
    while(col<colones-1){
        while(lig<ligne-1){
            slot
        }
    }
    
}
//console.log(emptyPuzzle[19])
crosswordSolver(emptyPuzzle, words)