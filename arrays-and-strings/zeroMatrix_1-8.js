const zeroMatrix = (matrix) => {
  const columns = {};
  const rows = {};

  // Locate all columns and rows that contain zeroes
  traverseMatrix(matrix, (ele, row, col) => {
    if (ele === 0) {
      rows[row] = true;
      columns[col] = true;
    }
    return ele
  });

  // Convert all rows & columns containing a zero to zero
  traverseMatrix(matrix, (ele, row, col) => {
    if (rows[row] || columns[col]) {
      return 0;
    }
    return ele;
  })

  return matrix
}

// Map for matrix (mutates original to save space)
const traverseMatrix = (matrix, cb) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = cb(matrix[i][j], i, j);
    }
  }
}