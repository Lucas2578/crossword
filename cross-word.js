const emptyPuzzle = `2001
0..0
1000
0..0`
const words = ['casa', 'alan', 'ciao', 'anta']

crosswordSolver(emptyPuzzle, words)

/* output:
`casa
i..l
anta
o..n`
*/

function fillWordTable(words) {
    let decomposedWord = []
    

    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        let wordTable = []

        for (let j = 0; j < word.length; j++) {
            wordTable.push(word[j])
        }

        decomposedWord[word] = wordTable
    }

    return decomposedWord
}

function crosswordSolver(emptyPuzzle, words) {
    const decomposedWord = fillWordTable(words)

    console.log(decomposedWord)
}