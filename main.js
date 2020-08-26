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
        // this.cells = []
        this.generations = 0;
        this.generateGrid()
    }

    generateGrid() {
        for (let x = 0; x < 5; x++) {
            cells[x] = []
            for (let y = 0; y < 5; y++) {
                cells[x].push(new Cell(x, y, false))
            }
        }
        console.log(cells[0][2].drawCell())
    }

    cycleGeneration() { // TODO: DUPLICATE A GRID THEN REASSIGN AT END.
        // for (let x = 0; x < this.cells.length; x++) {
        //     for (let y = 0; y < this.cells[x].length; y++) {
        //         if (this.cells[x][y]._active) {
        //             this.checkForValidity(x, y)
        //         }
        //     }
        // }
        this.generations++
        // this.printToConsole();
    }

    // TODO: THIS SHOULD BE A FOREACH - LATER
    printToConsole() {
        // console.log('current gen ' + this.generations)
        for (let i = 0; i < this.cells[i].length - 1; i++) {
            let _str = '[ '
            for (let j = 0; j < this.cells[j].length; j++) {
                // _str += 'i';
                // console.log(this.cells[i][j].name)
            }
            // console.log(_str + ' ]' + i)
        }


        /*
        gen 2
        [OOXOO]
        [OOXOO]
        [OOXOO]
        [OOXOO]
        */
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
        // this.cells[_cellX][_cellY].draw()
    }
}

class Cell {
    snow

    constructor(_x, _y, _active) {

        this._x = _x
        this._y = _y
        this._active = _active
        this.name = this._x.toString() + this._y.toString();
        // console.log(this._x + " " + this._y + " " + this._active)
        if (_x == 3) {
            this.toggleActive()
        }
    }

    toggleActive() {
        this._active = this._active ? false : true
    }

    drawCell() {
        return this.name.toString()
    }
}

// let cells = [
//     [new Cell(1, 1, false), new Cell(2, 1, false), new Cell(3, 1, false)],
//     [new Cell(1, 2, false), new Cell(2, 2, false), new Cell(3, 2, false)],
//     [new Cell(1, 3, false), new Cell(2, 3, false), new Cell(3, 3, false)]
//]

// console.log(cells[0][0])

let cells = []

const gameController = new GameController()
const nextButton = document.getElementById('data-next-button')

nextButton.addEventListener('click', function () {
    gameController.cycleGeneration()
})