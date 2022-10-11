// # Find Three Largest Numbers
//
// Write a function that takes in an array of at least three integers and, without
// sorting the input array, returns a sorted array of the three largest integers in
// the input array. The function should return duplicate integers if necessary.
//
// ## Business Rules/Errata
//
// - The input array should have at least three integers. If it does not, you should
//   return a null value.
// - You may not sort the input array
// - The function should handle duplicate integers; for example `[10, 5, 9, 10, 12]`
//   should return `[10, 10, 12]`
// - Constant space -> you will return a new array of 3 integers, and this will be the
//   only new data structure you create.
// - Linear time -> you should solve this problem by only passing through the array a
//   single time.

function findThreeLargestNumbers(arr) {
  if (arr.length < 2) return null;
  
  const largest = new Array(3).fill(-Infinity);

  for (const number of arr) {
    largest[0] = Math.max(largest[0], number);
    largest[1] = Math.max(largest[1], largest[0]);
    largest[2] = Math.max(largest[2], largest[1]);
  }

  return largest;
}

module.exports = { findThreeLargestNumbers };
