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
	var bigThree = 
		[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY];
        if (arr.length < 3) {
                return null;
	};
        for (var i = 0; i < arr.length; i++) {
        	if (arr[i] > bigThree[0]) {
                	bigThree[0] = arr[i];
                }
                if (bigThree[0] > bigThree[1]) {
                	var temp = bigThree[0];
                        bigThree[0] = bigThree[1];
                        bigThree[1] = temp;
                }
                if (bigThree[1] > bigThree[2]) {
 			var temp = bigThree[1];
                        bigThree[1] = bigThree[2];
                        bigThree[2] = temp;
                }
        };
        return bigThree;

}

module.exports = { findThreeLargestNumbers };
