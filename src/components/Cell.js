import { useState } from 'react';

function Cell({cell}) {
  const [cellState, setCellState] = useState({
    startNode: false,
    endNode: false,
    visited: false,
    wall: false,
    row: cell[0],
    col: cell[1],
  });

  return (
    <div className="cell">
      
    </div>
  );
}

export default Cell;
