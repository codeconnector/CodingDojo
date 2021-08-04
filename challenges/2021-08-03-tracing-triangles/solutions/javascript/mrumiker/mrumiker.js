const traceTri = arr => {
  if (!arr.length) return 0;
  if (arr[0].length !== 1) return 'Not a 🔺';
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].length + 1 !== arr[i + 1].length) return 'Not a 🔺'
  } //testing for non-triangles

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr[i] = [];
    for (let j = 0; j < arr[i].length; j++) {
      newArr[i].push(maxPath(arr[i][j], newArr, i, j));
    } 
  } //make a new array of arrays that keeps track of the sum of numbers in the heaviest path to each point in the original triangle, using the maxPath function below
  
  return Math.max(...newArr[newArr.length - 1]);//return largest number (aka the heaviest) path in the bottom row of the triangle
};

function maxPath(value, outerArr, outerIndex, innerIndex) {
  return Math.max(outerArr[outerIndex - 1] && outerArr[outerIndex - 1][innerIndex] || 0, outerArr[outerIndex - 1] && outerArr[outerIndex - 1][innerIndex - 1] || 0) + value;
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

