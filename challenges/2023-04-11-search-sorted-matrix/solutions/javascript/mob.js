// # Search In Sorted Matrix

// You're given a two-dimensional array (a matrix) of distinct integers and a target integer. Each row in the matrix is sorted, and each column is also sorted; the matrix doesn't necessarily have the same height and width.
// Write a function that returns an array of the row and column indices of the target integer if it's contained in the matrix, otherwise [-1, -1].

// ## Examples
// ```
// matrix = [
//   [1, 4, 7, 12, 15, 1000],
//   [2, 5, 19, 31, 32, 1001],
//   [3, 8, 24, 33, 35, 1002],
//   [40, 41, 42, 44, 45, 1003],
//   [99, 100, 103, 106, 128, 1004],
// ]
// target = 44 -> [3, 3]
// target = 8 -> [2, 1]
// target = 1000 -> [0, 5]
// target = 6 -> [-1, -1]
// ```

function binarySearch(array, target) {
  let start = 0
  let end = array.length - 1
  while (start <= end && end > 0) {
    let middle = ~~((start + end) / 2)
    let value = array[middle]
    if (value < target) {
      start = middle + 1
    } else if (value > target) {
      end = middle - 1
    } else {
      return middle 
    }
  }
  return -1
}

function searchSortedMatrix(matrix, target) {
  for (row = 0; row < matrix.length; row++) {
    let columnIndex = binarySearch(matrix[row], target)
    if (columnIndex !== -1) {
      return [row, columnIndex]
    }
  }
  return [-1, -1]
}

module.exports = { searchSortedMatrix };