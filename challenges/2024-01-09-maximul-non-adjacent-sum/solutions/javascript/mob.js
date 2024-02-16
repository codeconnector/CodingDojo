// # Maximum Non-Adjacent Number Sum

// Write a function that takes in an array of positive integers and returns the maximum sum of non-adjacent elements in the array.
// If the input array is empty, the function should return `0`.

// ## Business Rules/Errata

// - The function takes in an array of integers
// - The array is one dimensional and is not sorted
// - if the array is empty, return 0
// - when considering the maximum sum, integers in the array MUST be non-adjacent
// - Optimal Space and Time Complexity: O(n) time | O(1) space - where n is the length of the input array

// ## Examples

// ```
// array = [75, 105, 120, 75, 90, 135]
// MaxNonAdjacentSum(array) -> 330 // 75 + 120 + 135
// ```

function MaxNonAdjacentSum(nums) {
  if (nums.length < 1) {
    return 0;
  }
  // Sort the array of { value: x, index: y } by value descending
  const numsArr = [];
  for (let i = 0; i < nums.length; i++) {
    const temp = { value: nums[i], index: i };
    numsArr.push(temp);
  }
  numsArr.sort((a, b) => parseFloat(b.value) - parseFloat(a.value));
  console.log(numsArr);
  // find biggest numbers first, and add all possible numbers together
  let usedIndexes = [numsArr[0].index];
  let sum = numsArr[0].value;
  for (let i = 1; i < numsArr.length; i++) {
    let idx = numsArr[i].index;
    const isAdjacent =
      usedIndexes.includes(idx - 1) || usedIndexes.includes(idx + 1);
    if (!isAdjacent) {
      sum += numsArr[i].value;
      usedIndexes.push(idx);
    }
  }
  // take first (largest number) into result and sum
  // go through remaining items ensuring that it's not adjacent any previously used number
  return sum;
}

module.exports = { MaxNonAdjacentSum };
