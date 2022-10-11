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
  if (arr.length < 3) return null
  const output = [Number.MIN_VALUE, Number.MIN_VALUE, Number.MIN_VALUE];

  for(i in arr) {
    if (i > output[0]) {
      output[0] = i
    }
    if (output[0] > output[1]) {
      let value = output[0]
      output[0] = output[1]
      output[1] = value
    }
    if (output[1] > output[2]) {
      let value = output[1];
      output[1] = output[2]
      output[2] = value
    }
  }

  return output;
}

module.exports = { findThreeLargestNumbers };
