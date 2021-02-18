import './Cell.css'

function Cell({
    cell, 
    onMouseDown,
    onMouseEnter,
    onMouseUp
  }) {

  const {row, col, startCell, endCell, wall} = cell
  const updateClassName = endCell
    ? '-end'
    : startCell
    ? '-start'
    : wall
    ? '-wall'
    : '';
  if (row === 10 && col === 15) {
    console.log(cell, updateClassName)
  }
  return (
    <div 
      className={`cell cell${updateClassName}`}
      id={`cell-${row}-${col}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}
    />
  );
}

export default Cell;
