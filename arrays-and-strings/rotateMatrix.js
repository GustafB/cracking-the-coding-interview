const rotateMatrix = (matrix) => {
  return matrix.reverse().map((_, i) => {
    return matrix.map((row) => {
      return row[i]
    })
  })
}
