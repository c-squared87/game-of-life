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
		
	Any live cell with two or three live neighbours survives.

	Any dead cell with three live neighbours becomes a live cell.

	All other live cells die in the next generation. Similarly, all other dead cells stay dead.

 **/

console.log('hello world')

class GameController {

	constructor() {
		this.cells = []
		this.generations = 0;
		this.generateGrid()
		this.initialTesting()
		this.printToConsole()
	}

	generateGrid() {
		this.cells = []
		for (let x = 0; x < 8; x++) {
			this.cells[x] = []
			for (let y = 0; y < 8; y++) {
				this.cells[x].push(new Cell(x, y, false))
			}
		}
	}

	cycleGeneration() {

		let _local = this.cells.map(inner => inner.slice())


		this.cells = _local

		console.log(this.cells)




		this.generations++
		// this.printToConsole();
	}

	initialTesting() {
		/* GLIDER
		this.cells[4][4]._active = true
		this.cells[4][5]._active = true
		this.cells[4][6]._active = true
		this.cells[3][6]._active = true
		this.cells[2][6]._active = true
		this.cells[1][5]._active = true
		*/

		this.cells[4][4]._active = true
		this.cells[4][5]._active = true
		this.cells[4][6]._active = true
	}

	printToConsole() {
		console.clear()
		console.log(this.cells)
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

	/*
	[-1,-1]	[0,-1]	[1,-1]
	[-1,0]	[0,0]	[1,0]
	[-1,-1]	[0,-1]	[1,-1]
	*/

	checkForValidity(_cellX, _cellY) {

		let _neighbors = 0

		for (let x = -1; x < 2; x++) {
			for (let y = -1; y < 2; y++) {
				if (x == 0 && y == 0) {

				} else {

					let _xCheck = _cellX + x
					let _yCheck = _cellY + y

					if (this.cells[_xCheck] != undefined && this.cells[_xCheck][_yCheck] != undefined) {
						if (this.cells[_xCheck][_yCheck]._active) {
							_neighbors++;
						}
					}
				}
			}
		}

		if (_neighbors === 2 || _neighbors === 3) {
			return true
		}
		return false
	}
}

class Cell {

	constructor(_x, _y, _active) {

		this._x = _x
		this._y = _y
		this._active = _active

		this.name = this._x.toString() + this._y.toString();

		// if (_x == 1 && _y == 1) {
		// 	this._active = true
		// }
		// if (_x == 1 && _y == 2) {
		// 	this._active = true
		// }
		// if (_x == 2 && _y == 1) {
		// 	this._active = true
		// }

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
const nextButton = document.getElementById('data-next-button')

nextButton.addEventListener('click', function () {
	gameController.cycleGeneration()
})

const testArraySpawn = [
	[]
]