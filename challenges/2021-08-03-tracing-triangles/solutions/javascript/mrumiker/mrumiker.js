const traceTri = arr => {
  if (!arr.length) return 0;
  if (arr.some((innerArr, i) => innerArr.length !== i + 1)) return 'Not a 🔺';

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = maxPath(arr, i, j);
    }
  } //edit the triangle array in place, replacing each value with the heaviest path to that point in the original triangle, using the maxPath function below

  return Math.max(...arr[arr.length - 1]) //return the heaviest path in the bottom row of the triangle
};

function maxPath(arr, i, j) {
  return Math.max(arr[i - 1] && arr[i - 1][j - 1] || 0, arr[i - 1] && arr[i - 1][j] || 0) + arr[i][j];
} //this function keeps track of the heaviest path to any point in the triangle, starting from the top of the triangle and working its way down


console.log(traceTri([[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]])); //20
console.log(traceTri([[6], [4, 4], [1, 2, 1], [5, 4, 3, 2]]));//16
console.log(traceTri([[5]])); //5
console.log(traceTri([[1], [1, 1], [1, 1, 1], [2, 1, 1, 1]])); //5
console.log(traceTri([[0], [0, 0], [0, 0, 0]])); //0
console.log(traceTri([[1], [1, 5], [98, 6, 7]])); //100
console.log(traceTri([])); //0
console.log(traceTri([1, 2], [3, 4, 5])); //'Not a 🔺'
console.log(traceTri([1], [3, 4, 5])); //'Not a 🔺'
