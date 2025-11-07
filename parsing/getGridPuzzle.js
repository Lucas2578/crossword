/**
 * Converts puzzle string into a 2D grid array for validation
 * Transforms each line of the puzzle into an array of individual characters
 * @param {string[]} puzzle - Array of strings representing puzzle lines
 * @returns {string[][]} 2D array where each cell contains a single character
 * @example
 * // Input: ["12.", "0.0"]
 * // Output: [["1", "2", "."], ["0", ".", "0"]]
*/

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