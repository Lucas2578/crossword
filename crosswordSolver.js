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
    /*let map = new Map
    let tableau 
    let x = 0
    let y = 0 
    let i = 0
    while(Puzzle[i]!= undefined)  {
        if (emptyPuzzle[i] != '\n'){
            tableau[x][y] = emptyPuzzle[i]
            x ++
        }else {
            x=0
            y++
        }
        i++
    }
    console.log(tableau)*/
    let tableauLigne = Puzzle.split('\n')
    let finaltableau = tableauLigne[0].split("") 
    
    console.log(finaltableau)
}
//console.log(emptyPuzzle[19])
crosswordSolver(emptyPuzzle, words)