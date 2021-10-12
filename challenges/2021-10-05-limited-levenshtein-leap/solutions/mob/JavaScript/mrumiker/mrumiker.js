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

function findTransformSequence(start, end, dict) {
  const pathsArr = [[start]],//this will hold the potential paths between our 2 words
    myDict = [...dict]; // a copy of the dictionary. We will delete each word from this once it has been used
  let i = 0, // i is an index for pathsArr
    lastIndex = 0; //lastIndex keeps track of how many steps we have gone down the path so far and allows us to easily check the current last word in each potential path

  while (pathsArr.length) {
    for (let j = 0; j < myDict.length; j++) { //loop through the words currently in myDict
      if (isCloseMatch(pathsArr[i][lastIndex], myDict[j])) { //If the last word in the current path is one letter different from the current word in myDict...
        pathsArr[i].push(myDict[j]); //add the word from myDict to the end of the path
        if (myDict[j] === end) return pathsArr[i]; //if the word you just added is our target end word, WE'RE DONE! return the current path, aka the answer
        myDict.splice(j, 1);//Otherwise, splice the word you just pushed out of myDict, since you're not going to find any shorter way to get to that word
        j--;//go back one step in myDict, since you just spliced a word out and you need to snap back to this space when the loop iterates next
        pathsArr.splice(i + 1, 0, pathsArr[i].slice(0, -1)); //add a copy of the current path, with the final word you just added chopped off, next in pathsArr. You'll try to match this with the next word in myDict
        i++; //move forward one step in pathsArr to get ready to check the next potential path that you just created
      }
    }
    pathsArr.splice(i, 1);//when you reach the end of myDict, you will have a 'dead end' path left over at the current index i that never found a next word. Splice it out. 
    if (!pathsArr[i]) { //If you have reached the end of pathsArr, there will be nothing at the current index (since you just chopped off the last item). In that case, you have found all the potential paths of length lastIndex + 1. Set i back to 0, add 1 to lastIndex, and start again, looking for paths that are one word longer!
      i = 0;
      lastIndex++;
    } // If you still have potential paths left in pathsArr, go back to the start of the while loop and keep going... 
  }
  return null; //Otherwise, you've deleted all the dead end solutions. There is no path from start to finish. Return null
}

function isCloseMatch(word1, word2) { //this function returns true if two words differ by exactly one letter 
  let count = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) count++;
    if (count > 1) return false;
  }
  return count === 1;
}

module.exports = { findTransformSequence };
