// # Common Elements

// Create a function that takes two "sorted" arrays of numbers and returns an array of numbers which are common to both the input arrays.

// ## Business Rules/Errata

// - You can expect the arrays to be sorted
// - Arrays do not have to be the same length
// - The output array should be sorted and contain no duplicates
// - This problem should be solved in O(n+m) time where n is the length of the first input array and m is the length of the second input array

// ## Examples

// ```
// commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) -> [3]
// commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) -> [1, 3, 4, 7]
// commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) -> [1, 2, 4, 5]
// commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) -> []
// ```

// ## Tackling This Challenge

function commonElements(arr1, arr2) {
    // your solution goes here

    const output = [];

    let j = 0;

    for (var i = 0; i < arr1.length; i++) {
        while (arr1[i] < arr2[j]) {
            i++;
        }
        if (arr1[i] === arr2[j]) {
            output.push(arr1[i]);
            while (arr1[i] === arr2[j]) {
                i++;
            }
        }
        if (i >= arr1.length) {
            break;
        }
        while (arr1[i] > arr2[j]) {
            j++;
        }
        if (arr1[i] === arr2[j]) {
            output.push(arr1[i]);
            while (arr1[i] === arr2[j]) {
                j++;
            }            
        }
        if (j >= arr2.length) {
            break;
        }
    }
    return output;
}

module.exports = { commonElements };
