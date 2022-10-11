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
  // type your solution here
  if(arr.length < 3) return null
  const tempArray = [-5e-324, -5e-324, -5e-324];
  
  for(let i = 0; i < tempArray.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(arr[j] > tempArray[2]) tempArray[2] = arr[j]; 
      if(arr[j] > tempArray[1] && arr[j] < tempArray[2]) tempArray[1] = arr[j]; 
      if(arr[j] > tempArray[0] && arr[j] < tempArray[1]) tempArray[0] = arr[j];
    }
  }
  return tempArray;
}

module.exports = { findThreeLargestNumbers };
