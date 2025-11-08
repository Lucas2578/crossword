export class GridRenderer {
    constructor(gridElementId) {
        this.gridDiv = document.getElementById(gridElementId);
    }

    render(puzzleResult) {
        const lines = this._parseLines(puzzleResult);
        this._createGrid(lines);
    }

    _parseLines(puzzleResult) {
        if (Array.isArray(puzzleResult)) {
            return puzzleResult;
        }
        return puzzleResult.trim().split('\n');
    }

    _createGrid(lines) {
        // Vider la grille
        this.gridDiv.innerHTML = '';
        
        // Configurer le grid directement sur #grid
        const firstLine = Array.isArray(lines[0]) ? lines[0] : lines[0].split('');
        this.gridDiv.style.gridTemplateColumns = `repeat(${firstLine.length}, 45px)`;
        
        const numbers = this._calculateNumbers(lines);
        
        let cellIndex = 0;
        for (let row = 0; row < lines.length; row++) {
            const line = Array.isArray(lines[row]) ? lines[row] : lines[row].split('');
            
            for (let col = 0; col < line.length; col++) {
                const cell = this._createCell(line, lines, row, col, numbers, cellIndex);
                this.gridDiv.appendChild(cell);
                cellIndex++;
            }
        }
    }

    _createCell(line, allLines, row, col, numbers, cellIndex) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        
        // Ajouter l'index pour l'animation
        cell.style.setProperty('--cell-index', cellIndex);
        
        const char = line[col];
        
        if (char === '.') {
            cell.classList.add('black');
        } else {
            cell.textContent = char.toUpperCase();
            
            const cellNumber = numbers[`${row},${col}`];
            if (cellNumber) {
                cell.classList.add('number');
                cell.setAttribute('data-number', cellNumber);
            }
        }
        
        return cell;
    }

    _calculateNumbers(lines) {
        const numbers = {};
        let numberCounter = 1;
        
        for (let row = 0; row < lines.length; row++) {
            const line = Array.isArray(lines[row]) ? lines[row] : lines[row].split('');
            
            for (let col = 0; col < line.length; col++) {
                if (line[col] === '.') continue;
                
                const isWordStart = this._isWordStart(lines, row, col);
                
                if (isWordStart) {
                    numbers[`${row},${col}`] = numberCounter++;
                }
            }
        }
        
        return numbers;
    }

    _isWordStart(lines, row, col) {
        const currentLine = Array.isArray(lines[row]) ? lines[row] : lines[row].split('');
        
        // Vérifie si c'est le début d'un mot horizontal
        const prevChar = col > 0 ? currentLine[col - 1] : '.';
        const nextChar = col + 1 < currentLine.length ? currentLine[col + 1] : '.';
        const isHorizontalStart = prevChar === '.' && nextChar !== '.';
        
        // Vérifie si c'est le début d'un mot vertical
        const prevLine = row > 0 ? (Array.isArray(lines[row - 1]) ? lines[row - 1] : lines[row - 1].split('')) : null;
        const nextLine = row + 1 < lines.length ? (Array.isArray(lines[row + 1]) ? lines[row + 1] : lines[row + 1].split('')) : null;
        const aboveChar = prevLine ? prevLine[col] : '.';
        const belowChar = nextLine ? nextLine[col] : '.';
        const isVerticalStart = aboveChar === '.' && belowChar !== '.';
        
        return isHorizontalStart || isVerticalStart;
    }
}