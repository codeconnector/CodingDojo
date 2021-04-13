// # Single and Ready to Mingle
// 
// Given an array of integers in which two elements appear exactly once and all 
// other elements appear exactly twice, find the two elements that appear only 
// once.
// 
// ## Business Rules/Errata
// 
// - You can assume that the input will **always** include at least two and 
//   exactly two elements that appear only once.
// - You may not assume that the list will be sorted ahead of time.
// - Extra Challenge: Can you complete this puzzle in linear time and constant 
//   space?
// - Extra Extra Challenge: Can you make your solution generic over other input 
//   types?
// - Extra Extra Extra Challenge: Do it in TypeScript.
// 
// ## Examples
// 
// ```
// input = [2, 4, 6, 8, 10, 2, 6, 10];
// findSingles(input)  // [4, 8]
// ```
// ```
// input = [1, 2, 3, 2, 1, 4, 4, 6, 7, 8, 7, 6, 9, 9];
// findSingles(input)  // [3, 8]
// ```

function findSingles(input) {
  // Put your code here to make this fuction work
  const res = new Set()
  for (i = 0; i < input.length; i++) {
    let v = input[i]
    if (res.has(v)) {
      res.delete(v)
    } else {
      res.add(v)
    }
  }


  return Array.from(res);
}

module.exports = findSingles;
