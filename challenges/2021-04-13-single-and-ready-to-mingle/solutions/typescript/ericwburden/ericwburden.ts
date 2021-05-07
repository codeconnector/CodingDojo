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

export default findSingles;

// Theoretically, there's a way to do this with generic types, but that's WAY 
// beyond the scope of a Coding Dojo session.
function findSingles(input: number[]): number[] {
  // Gets the XOR of the two unique numbers in the list. This works because, 
  // no matter how many things you bitwise XOR, if you XOR something in twice,
  // it cancels itself out. So, all the pairs will cancel and you will be left
  // with the XOR of the two numbers that only appears once.
  let xor = 0;
  for (const item of input) {
    xor = xor ^ item;
  }

  // Yields the smallest significant bit (i.e. the smallest bit that differs
  // between the two unique numbers). This might also be called the "rightmost
  // set bit", i.e. the bit furthest to the right that is set to '1'.
  let smallestSignficantBit = xor & -xor

  // Split the output into two "bins", one for list items where that smallest
  // significant bit is '0' and one for list items where that smallest 
  // significant bit is '1'. XOR'ing items into their respective bins results
  // in one unique number in each bin at the end after all the pairs cancel.
  let output: number[] = [0, 0];
  for (const item of input) {
    let isSmallestBitSet: boolean = (item & smallestSignficantBit) === 0;
    if (isSmallestBitSet) {
      output[0] = output[0] ^ item;
    } else {
      output[1] = output[1] ^ item;
    }
  }

  // Note, this process does not preserve ordering. I did have to modify the 
  // unit tests slightly to accept answers in any order (i.e. [4, 8] or [8, 4])
  return output;
}
