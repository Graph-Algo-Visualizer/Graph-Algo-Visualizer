function Cell({
    cell, 
    onMouseDown,
    onMouseEnter,
    onMouseUp
  }) {

  const {row, col, startCell, endCell, wall} = cell
  const updateClassName = endCell
    ? 'cell-end'
    : startCell
    ? 'cell-start'
    : wall
    ? 'cell-wall'
    : '';

  return (
    <div 
      className={`cell ${updateClassName}`}
      id={`cell-${row}-${col}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}
    />
  );
}

export default Cell;
