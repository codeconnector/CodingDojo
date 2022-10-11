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
  if (!arr || arr.length < 3) return null;
  
  // initialize array three elements, each smallest possible number
  const largest = new Array(3).fill(-Infinity);

  for (const number of arr) {
    // replace the first largest element if less than number
    if(largest[0] > number) continue;
    largest[0] = number;
    // replace the second largest element if less than first
    if(largest[1] > largest[0]) continue;
    largest[0] = largest[1];
    largest[1] = number;
    // replace the third largest element if less than second
    if(largest[2] > largest[1]) continue;
    largest[1] = largest[2];
    largest[2] = number;
  }
  return largest;
}

module.exports = { findThreeLargestNumbers };
