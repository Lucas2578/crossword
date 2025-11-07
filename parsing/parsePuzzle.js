/**
 * Parses a puzzle string into an array of lines
 * Splits the puzzle by newline characters to create individual rows
 * @param {string} Puzzle - Multi-line puzzle string with '\n' separators
 * @returns {string[]} Array of strings, each representing a puzzle line
 * @example
 * // Input: "12.\n0.0\n..."
 * // Output: ["12.", "0.0", "..."]
*/

function parsePuzzle (Puzzle){
    let tableauLigne = Puzzle.split('\n')
    return tableauLigne
}