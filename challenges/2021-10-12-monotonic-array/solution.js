// # Monotonic Array
// 
// Write a function that takes in an array of integers and returns a Boolean
// representing whether the array is monotonic. An array is said to be monotonic if
// its elements, from left to right, are entirely non-increasing or entirely non
// decreasing (don't worry, I'll make this very clear with examples!)
// 
// Arrays containing only the same element are also said to be monotonic because they
// are both entirely non-increasing and entirely non-decreasing.
// 
// Non-increasing elements aren't necessarily exclusively decreasing; they simply don't
// increase. Similarly, non-decreasing elements aren't necessarily exclusively
// increasing; they simply don't decrease. 
// 
// Note that empty arrays and arrays of one element are monotonic.
// 
// ## Business Rules/Errata
// 
// - Your function should accept an input array and return a Boolean if the array is
//   monotonic. The input array can be any length -- including 0!
// - An array of length 0 or 1 is said to be monotonic.
// - Subsequent numbers that are equal do not change the description of an array. For
//   example, `[1, 2, 3, 3]` is an increasing monotonic array because the numbers are
//   never decreasing.
// - Arrays containing only the exact same element multiple times (IE duplicates) are
//   monotonic.
// - If an array is monotonic, the function should return `True`, otherwise it should
//   return `False`.
// - Bonus: You should be able to determine if an array is monotonic from a **single**
//   pass through the array, one iteration through the array should be sufficient in
//   the optimal solution.
// - Bonus: The optimal solution also uses constant space - no intermediate data
//   structures are required.
// - Optimal: O(N) time | O(1) space - where N is the length of the array
//
// ## Examples
// 
// ```
// is_monotonic([]) // True
// is_monotonic([1]) // True
// is_monotonic([1, 2]) // True
// is_monotonic([2, 2, 2, 2]) // True
// is_monotonic([-5, -4, -3, -2, -1, 0, 1]) // True
// is_monotonic([2, 1, 2, 3, 4, 5]) // False
// is_monotonic([1, 1, 0, 0, -1, -1, -2, -2]) // True
// is_monotonic([5, 4, 3, 3, 3, 2, 1]) // True
// ``

function isMonotonic(array) {
    // an array of length 0 or 1 is said to be monotonic
    if (array.length < 2) return true;

    // first and last elements are used to characterize the array as increasing or decreasing
    const state = (array[0] < array[array.length-1]) ? 'increasing' : 'decreasing';

    for(let i = 1; i < array.length; i++) {
	
        // not an increasing monotonic array because the numbers are decreasing
        if (array[i-1] > array[i] && state === 'increasing') return false;
		
        // not a decreasing monotonic array because the numbers are increasing
        if (array[i-1] < array[i] && state === 'decreasing') return false;
    }

    // all elements are either entirely non-decreasing or entirely non-increasing
    return true;
}

module.exports = { isMonotonic };
