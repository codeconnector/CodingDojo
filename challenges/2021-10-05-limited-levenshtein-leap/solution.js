// # Limited Levenshtein Leap
// 
// Given a `start` word, and `end` word, and a "dictionary" of valid words, find the
// shortest transformation sequence from `start` to `end` such that only one letter is
// changed at each step of the sequence, and each transformed word exists in the
// dictionary. If there is no possible transformation, return NULL.
// 
// ## Business Rules/Errata
// 
// - The "dictionary" is simply an unordered array of strings.
// - The `start`, `stop`, and "dictionary" words will all be the same length and all
//   lowercase.
// - Your function should return the sequence of words that represent the
//   transformations from start to end.
// 
// ## Examples
// 
// ### Example 1
// 
// ```
// start = "dog"
// end = "cat"
// dictionary = ["dot", "dop", "dat", "cat"]
// findTransformSequence(start, end, dictionary)  // ["dog", "dot", "dat", "cat"]
// ```
// 
// ### Example 2
// 
// ```
// start = "dog"
// end = "cat"
// dictionary = ["dot", "tod", "dat", "dar"]
// findTransformSequence(start, end, dictionary)  // NULL
// ```

function findTransformSequence(array) {
    // Insert your solution code here
}

module.exports = { findTransformSequence };
