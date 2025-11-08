import crosswordSolver from '../crosswordSolver.js';
import { UIManager } from './uiManager.js';
import { puzzle, words } from '../utils/data.js';

const ui = new UIManager();

function generateCrossword() {
    ui.reset();

    try {
        const result = crosswordSolver(puzzle, words);
        
        if (result) {
            ui.displaySuccess(result, words);
        }
    } catch (error) {
        ui.displayError(error.message);
    }
}

document.getElementById('generateBtn').addEventListener('click', generateCrossword);