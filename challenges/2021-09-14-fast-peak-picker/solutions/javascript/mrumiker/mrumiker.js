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

function pickPeak(arr) {
  let leftEdge = 0,
    rightEdge = arr.length - 1; //to start, set the left index of your window to the start of the array, and the right index of the window to the end of the array. 
  while (true) {
    let mid = leftEdge + Math.floor((rightEdge - leftEdge) / 2);//find the index halfway between the left and right edges of your current 'window' and call it 'mid'
    if (arr[mid] < arr[mid - 1]) { // if your current middle number is less than its neighbor to the left, slide the right edge of your window to the current number's immediate left.
      rightEdge = mid - 1;
    }
    else if (arr[mid] < arr[mid + 1]) { // otherwise, if your current middle number is less than its neighbor to the right, slide the left edge of your window to the current number's immediate right.
      leftEdge = mid + 1;
    } else return arr[mid]; //if the current middle number is not smaller than its neighbors, you found the peak!   
  } //if you haven't found the peak yet, try again with your new, smaller window!
<<<<<<< Updated upstream
} //Note: this assumes that there are not any "plateaus" i.e. sequences of repeated numbers
=======
} //Note: this solution assumes that there are not any "plateaus" i.e. sequences of repeated numbers
>>>>>>> Stashed changes

module.exports = { pickPeak };
