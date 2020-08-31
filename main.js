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
	- checkForValidity
		- 

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
		this.cells = []
		for (let x = 0; x < 5; x++) {
			this.cells[x] = []
			for (let y = 0; y < 5; y++) {
				this.cells[x].push(new Cell(x, y, false))
			}
		}
	}

	cycleGeneration() {
		var _local = this.cells;
		for (let x = 0; x < _local.length; x++) {
			for (let y = 0; y < _local[x].length; y++) {
				_local[x][y]._active = this.checkForValidity(x, y)
			}
		}
		this.cells = _local
		this.generations++
		// this.printToConsole();
	}

	printToConsole() {
		console.clear()
		console.log('current gen ' + this.generations)
		var _str = '[ '
		for (let i = 0; i < this.cells[i].length - 1; i++) {
			_str = '[ '
			for (let j = 0; j < this.cells[i].length - 1; j++) {
				_str += this.cells[i][j].drawCell()
			}
			console.log(_str + ' ]' + i)
		}
	}

	checkForValidity(_cellX, _cellY) {
		let _neighbors = 0

		// check against this.cells and ++neighbors
		for (let x = -1; x < 2; x++) {
			for (let y = -1; y < 2; y++) {
				// if (x <= 0) {
				// 	x = 0
				// }
				// if (y <= 0) {
				// 	y = 0
				// }
				// if (x != 0 && y != 0) {
				// 	// console.log(x + ' ' + y)

				// }
			}
		}

		if (_neighbors <= 2 || _neighbors >= 4) {
			return false
		}
		return true
	}
}

class Cell {

	constructor(_x, _y, _active) {

		this._x = _x
		this._y = _y
		this._active = _active

		this.name = this._x.toString() + this._y.toString();
	}

	toggleActive() { // THIS MIGHT BE DEPRACIATED.
		this._active = this._active ? false : true
	}

	drawCell() {
		let _symbol = this._active ? 'X' : 'O'
		return _symbol
	}
}

const gameController = new GameController()
// const nextButton = document.getElementById('data-next-button')

// nextButton.addEventListener('click', function () {
// 	gameController.cycleGeneration()
// })