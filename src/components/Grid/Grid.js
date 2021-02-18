import Cell from '../Cell/Cell';
import { useState, useRef, useEffect }from 'react';

function Grid() {
  // initialize grid with a default start and end node
  const [gridState, setGridState] = useState({
    startCell: [10, 5],
    endCell: [10, 15],
    grid: [],
    mouseIsPressed: false,
  });

  // useRef hook to grab the dimensions of the grid in user window
  const ref = useRef(null)

  useEffect(() => {
    let rows = 20,
      cols = 20
    // create initial grid based on size of useRef.
    // currently set to static values **
    setGridState({
      ...gridState,
      grid: createGrid(rows, cols)
    })
  }, [])

  // recreates the grid with the current cell at row,col 
  // to true or false wall based on prev value while user mouse is held down
  const mouseDown = (row, col) => {
    const newGrid = regenerateGrid(gridState.grid, row, col)
    console.log('regen', newGrid)
    setGridState({
      ...gridState,
      grid: newGrid, 
      mouseIsPressed: true
    })
  }

  // recreates the grid with the current cell at row,col 
  // to true or false wall based on prev value if mouseIsPressed is true
  const mouseEnter = (row, col) => {
    if (!gridState.mouseIsPressed) return;
    const newGrid = regenerateGrid(gridState.grid, row, col)
    console.log('enter', newGrid)
    setGridState({
      ...gridState,
      grid: newGrid
    })
  }

  // changes mouseIsPressed to false to prevent accidental wall creations
  const mouseUp = () => {
    setGridState({
      ...gridState,
      mouseIsPressed: false
    })
  }
  

  // creates initial grid based on rows and cols
  const createGrid = (rows, cols) => {
    let grid = []
    for (let row = 0; row < rows; row++) {
      let currRow = []
      for (let col = 0; col < cols; col++) currRow.push(generateCell(row, col))
      grid.push(currRow)
    }
    return grid
  }

  // recreates the current grid and updates the wall value at the cell at row/col 
  const regenerateGrid = (grid, row, col) => {
    const newGrid = grid.slice()
    const cell = newGrid[row][col]
    const newCell = {
      ...cell,
      wall: !cell.wall
    }
    newGrid[row][col] = newCell
    return newGrid;
  }

  // generates a cell obj with properties based on row/col
  const generateCell = (row, col) => {
    return {
      row,
      col,
      startCell: row === gridState.startCell[0] && col === gridState.startCell[1],
      endCell: row === gridState.endCell[0] && col === gridState.endCell[1],
      wall: false,
      distance: Infinity,
      visited: false,
      prevCell: false,
    }
  }
  

  return (
    <div className="grid" ref={ref}>
      {
        gridState.grid.map((row, rowId) => {
          return (
            <div key={rowId}>
              {row.map((cell, cellId) => {
                const {row, col} = cell
                return (
                  <Cell 
                    key={cellId} 
                    cell={cell}
                    mouseIsPressed={gridState.mouseIsPressed}
                    onMouseDown={(row, col) => mouseDown(row, col)}
                    onMouseEnter={(row, col) => mouseEnter(row, col)}
                    onMouseUp={() => mouseUp()}
                  />
              )})}
            </div>

          )
        })
      }
    </div>
  );
}

export default Grid;
