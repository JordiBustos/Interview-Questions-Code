/*
Lattice Path
*/

function latticePaths(gridSize) {
  let n = factorial(2*gridSize)
  let d = factorial(gridSize)**2

  return n/d
}
const factorial = (n) => (n > 0 ? n * factorial(n - 1) : 1);

console.log(latticePaths(4));
