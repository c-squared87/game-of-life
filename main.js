/**

    GridController
    - Cells[x][y]
    - renderGrid
        - loops through all Cells to checkState 
    - resetGrid
        - all Grid !active.
    - initGrid

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

class GridController {

    constructor() {
        this.cells = []
        this.generateGrid()
    }

    generateGrid() {
        for (let x = 0; x < 10; x++) {
            this.cells[x] = []
            for (let y = 0; y < 10; y++) {
                let _nu = new Cell(x, y, false)
                this.cells[x].push(_nu)
            }
        }
    }


}

class Cell {
    constructor(_x, _y, _active) {
        this._x = _x
        this._y = _y
        this._active = _active
        // console.log(this._x + " " + this._y + " " + this._active)
    }

    checkState() {

    }

    toggleActive() {
        // this._active *= !this._active this didnt work for some reason
        this._active = this._active ? false : true
        // console.log('im now ' + this._active)
    }
}

const gridController = new GridController()