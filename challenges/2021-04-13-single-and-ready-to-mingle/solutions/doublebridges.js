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
  let ansArr = [];
  for (let idx in input) {
    let val = input[idx]
    if (!ansArr.includes(val)) {
      ansArr.push(val)
    } else {
      ansArr.splice(ansArr.indexOf(val), 1)
    }
  }
  return ansArr;
}



module.exports = findSingles;
