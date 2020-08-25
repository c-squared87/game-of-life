/**

    GameController
    - Cells[x][y]
    - renderGrid
        - loops through all Cells to checkState 
    - resetGrid
        - all Grid !active.
    - initGrid
    - drawGrid
        - creates grid of divs off of cells[x]
            - styling sets div size
        - loop through all of cells
            - set innerText to cell.draw()

    Cell
    - bool active
    - checkState
        - 'looks around' to calculate neighbors.
            - int neighbors
            - _neighbors = 0
            - check around
        - if _neighbors < 2 || > 3 ? !active 
    - onClick
        - toggles active

 **/

console.log('hello world')

class GameController {

    constructor() {
        this.cells = []
        this.generations = 0;
        this.generateGrid()
    }

    generateGrid() {
        for (let x = 0; x < 10; x++) {
            this.cells[x] = []
            for (let y = 0; y < 10; y++) {
                let _new = new Cell(x, y, false)
                this.cells[x].push(_new)
            }
        }
    }

    cycleGeneration() { // DUPLICATE A GRID THEN REASSIGN AT END.
        for (let x = 0; x < this.cells.length; x++) {
            for (let y = 0; y < this.cells[x].length; y++) {
                if (this.cells[x][y]._active) {
                    this.checkForValidity(x, y)
                }
            }
        }
        this.generations++
    }

    //FIXME:
    checkForValidity(_cellX, _cellY) {
        let _neighbors = 0
        for (let x = -1; x < 2; x++) {
            for (let y = -1; y < 2; y++) {
                if (this.cells[_cellX + x][_cellY + y] != undefined) {
                    // console.log(this.cells[_cellX + x][_cellY + y]._active)
                    if (this.cells[_cellX + x][_cellY + y]._active) {
                        _neighbors++
                    }
                }
            }
        }
        if (_neighbors <= 1 || _neighbors >= 4) {
            // console.log('died');
            this.cells[_cellX, _cellY]._active = false;
        }
        this.cells[_cellX][_cellY].draw()
    }
}

class Cell {

    constructor(_x, _y, _active) {
        this._x = _x
        this._y = _y
        this._active = _active
        // console.log(this._x + " " + this._y + " " + this._active)
        if (_x == 3) {
            this.toggleActive()
        }
    }

    toggleActive() {
        this._active = this._active ? false : true
    }

    draw() {
        if (!active) {
            return 'O'
        }
        return 'X'
    }
}

const gameController = new GameController()
const nextButton = document.getElementById('data-next-button')

nextButton.addEventListener('click', function () {
    gameController.cycleGeneration()
})