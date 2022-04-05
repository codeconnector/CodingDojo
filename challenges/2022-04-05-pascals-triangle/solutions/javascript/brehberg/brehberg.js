// # Pascal's triangle

// Given an integer `row`, return that row of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it, as shown here:

// ```
//           1
//         1   1
//       1   2  1
//      1  3   3  1
//     1  4  6   4  1
// ```

// ## Business Rules/Errata

// - `row` will be between 0 and 30, inclusive.
// - Your function should return an array of integers with the numbers of the specified row in the correct order. 
// - The triangle is zero-indexed, meaning that the tip of the triangle is row `0`

// ## Examples

// ### Example 1:
// ```
// Input: 4
// Output: [1,4,6,4,1]
// ```

// ### Example 2:
// ```
// Input: 0
// Output: [1]
// ```

// ### Example 3:
// ```
// Input: 10
// Output: [1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1]
// ```

// ### Example 4:
// ```
// Input: 1
// Output: [1, 1]
// ```

// ### Example 5:
// ```
// Input: 2
// Output: [1, 2, 1]
// ```

// ### Example 6:
// ```
// Input: 3
// Output: [1, 3, 3, 1]
// ```

function pascalRow(row) {
  const result = [1];
  for (let i = 1; i <= row; i++) {
    result.push((result[i - 1] * (row - i + 1)) / i);
  }
  return result;
}

module.exports = { pascalRow };