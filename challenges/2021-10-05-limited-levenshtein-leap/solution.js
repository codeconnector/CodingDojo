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
function isCloseEnough(word1, word2) {
  let differences = 0;
 for (let i =0; i< word1.length; i++){
  if (word1[i] !== word2[i]){
    differences++;
  }
 }
	return (differences === 1);
}

function findTransformSequence(start, end, dictionary) {
	let queue = [];
	let visited = new Array(dictionary.length).fill(false);
	queue = [[start, [start]]];
	while (queue.length) {
		let [word, path] = queue.shift();
		if (word === end) {
			return path;
		}
		for (let i = 0; i < dictionary.length; i++) {
			if (visited[i]) {
				continue;
			}
			if (isCloseEnough(word, dictionary[i])) {
				let path_to_word = [...path];
				path_to_word.push(dictionary[i]);
				queue.push([dictionary[i], path_to_word]);
			}
		}
		let indx = dictionary.indexOf(word);
		visited[indx] = true;
	}
	return null;
}

module.exports = { findTransformSequence };
