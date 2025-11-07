function getGridPuzzle(puzzle) {
    let gridPuzzle = []
    for (let line of puzzle) {
        let temp = []
        for (let char of line) {
            temp.push(char)
        }
        gridPuzzle.push(temp)
    }

    return gridPuzzle
}

export default getGridPuzzle;