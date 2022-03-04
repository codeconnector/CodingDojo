// # Jump Around

// Starting from 0 on a number line, you would like to make a series of jumps that lead to the integer N. On the `i`th jump, you may move exactly `i` places to the left or right (1st jump -> 1 place, 2nd jump -> 2 places, etc.). Determine the smallest number of jumps needed to get from 0 to N.

// ## Business Rules/Errata

// - The number line should be assumed to extend infinitely in both directions. N may be either positive or negative.
// - Keep in mind that you should identify the *number* of jumps, not the path. The result of your function should be a positive integer.
// - There is no guarantee that all the jumps to reach a given number will be in the same direction.
// - All test cases return an answer, you should assume that every number can be reached using this strategy.

// ## Examples

// This section should provide examples of expected inputs/outputs like so:

// ```
// jump_to(0)   // 0: start at 0
// jump_to(1)   // 1: 0 -> 1
// jump_to(2)   // 3: 0 -> 1 -> -1 -> 2
// jump_to(-2)  // 3: 0 -> -1 -> 1 -> -2
// jump_to(175) // 21
// ```

function jumpAround(input) {
  const targetNum = Math.abs(input);
  let runningSum = 0,
    jumpCount = 0;
  while (runningSum < targetNum || (runningSum - targetNum) % 2) {
    runningSum += ++jumpCount;
  }
  return jumpCount;
}

module.exports = { jumpAround };