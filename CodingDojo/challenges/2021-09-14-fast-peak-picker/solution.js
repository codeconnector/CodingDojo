// # Fast Peak Picker
// 
// Given a array that's sorted but rotated at some unknown pivot, in which all
// elements are distinct, find the "peak" element. An element is considered a peak if it
// is greater than both its left and right neighbors. For example, `[1, 2, 3, 2, 1]`
// has a peak element of `3`.
// 
// ## Business Rules/Errata
// 
// - The input will always consist of an array of numbers containing at least one element.
// - The first element in the array is always considered to be "larger" than the
//   (non-existent) element to its left.
// - The last element in the array is always considered to be "larger" than the 
//   (non-existent) element to its right.
// - It is possible to solve this problem in less than O(n) time, attempt to find a
//   more efficient solution.
// 
// ## Examples
// 
// ```
// pick_peak([1, 2, 3, 2, 1]);  // 3
// pick_peak([1, 2, 3, 4, 5]);  // 5
// pick_peak([5, 4, 3, 2, 1]);  // 5
// pick_peak([1]);              // 1
// ```

function pickPeak(input) {
    // Insert your solution code here
}

module.exports = { pickPeak };
