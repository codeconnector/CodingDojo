// # Sort Window
// 
// Given an array of integers out of order, determine the bounds of the smallest
// window that must be sorted in order for the entire array to be sorted. For example,
// given [3, 7, 5, 6, 9], you should return (1, 3).
// 
// ## Business Rules/Errata
// 
// - Your input will be an array of unsigned integers.
// - An empty array is considered to be sorted.
// - You should return an array, with the first element containing the 'start' of the
//   window, and the second element containing the 'end' of the window.
// - If your input array is already sorted, return an empty array.
// - Note: Some of the elements inside the unsorted window may actually be in the
//   correct order for the final sorted array.

function sortWindow(input) {
    const sorted = [...input].sort((a, b) => a - b);//sort a copy of the input array from low to high
  let min = max = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== sorted[i]) {
      min = i + 1;
      break;
    }
  }//loop through the array, stopping when you find a difference between the input and sorted arrays. Store the (one indexed) index as min and quit the loop.

  if (!min) return [];//if you found no min, the input array is already sorted and you can return the empty array

  for (i = input.length - 1; i >= 0; i--) {
    if (input[i] !== sorted[i]) {
      max = i + 1;
      break;
    }
  }//loop through the array backwards, stopping when you find a difference between the input and sorted arrays. Store the (one indexed) index as max and quit the loop.
  return [min, max];
}

module.exports = { sortWindow };
