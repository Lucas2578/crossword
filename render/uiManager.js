import { GridRenderer } from './gridRenderer.js';

export class UIManager {
    constructor() {
        this.messageDiv = document.getElementById('message');
        this.consoleResultDiv = document.getElementById('consoleResult');
        this.displayWrapper = document.getElementById('displayWrapper');
        this.wordsListDiv = document.getElementById('wordsList');
        this.gridRenderer = new GridRenderer('grid');
    }

    reset() {
        this.messageDiv.innerHTML = '';
        this.consoleResultDiv.style.display = 'none';
        this.displayWrapper.classList.remove('visible');
    }

    displaySuccess(result, words) {
        // Affiche le résultat en format texte
        const resultString = this._formatResult(result);
        this.consoleResultDiv.textContent = resultString;
        this.consoleResultDiv.style.display = 'block';

        // Affiche la grille visuelle
        this.gridRenderer.render(result);
        
        // Affiche la liste des mots
        this._displayWords(words);
        
        // Montre le wrapper
        this.displayWrapper.classList.add('visible');
        
        // Message de succès
        this.messageDiv.innerHTML = '<div class="message success">✅ Mots croisés résolus avec succès !</div>';
    }

    displayError(errorMessage) {
        this.messageDiv.innerHTML = `<div class="message error">❌ Erreur: ${errorMessage}</div>`;
    }

    _formatResult(result) {
        if (Array.isArray(result)) {
            return result
                .map(row => Array.isArray(row) ? row.join('') : row)
                .join('\n');
        }
        return result;
    }

    _displayWords(wordList) {
        const sortedWords = [...wordList].sort((a, b) => b.length - a.length);
        
        this.wordsListDiv.innerHTML = sortedWords
            .map(word => `<div class="word-item">${word} (${word.length} lettres)</div>`)
            .join('');
    }
}