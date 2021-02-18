import Cell from './Cell';
import { useState, useRef, useEffect }from 'react';

function Grid() {
  const [gridState, setGridState] = useState({
    rows: 0,
    cols: 0,
  });

  const ref = useRef(null)
  let cells = []
  useEffect(() => {
    console.log(Math.floor(window.innerWidth / 25), Math.floor(ref.current.clientHeight / 100))
    setGridState({
      rows: Math.floor(ref.current.clientHeight / 25),
      cols: Math.floor(window.innerWidth / 25),
    })
  }, [])

  console.log(gridState)

  for (let r = 0; r < gridState.rows; r++) {
    for (let c = 0; c < gridState.cols; c++) {
      cells.push([r, c])
    }
  }

  console.log(cells)
  return (
    <div className="grid" ref={ref}>
      {
        cells.map((cell, id) => {
          return (
            <Cell key={id} cell={cell}/>
          )
        })
      }
    </div>
  );
}

export default Grid;
