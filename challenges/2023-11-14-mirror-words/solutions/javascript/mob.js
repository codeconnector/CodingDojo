// # Mirror Words
// ## Rules
// - Write a function that accepts as its argument a whitespace-separated 
//   string and returns that same string where each word has its letters 
//   reversed.
// - Since this is your first assignment, the words will always be separated 
//   by a single space and there will be no punctuation.
// - Letters in the output should also appear as the same case as they appeared 
//   in the input.
// - The reverse of an empty string is an empty string.
// - The reverse of a word with only one letter is just that letter.
// - You may also un-comment some additional test cases that add complexity to 
//   the function. These are not required to solve the puzzle.

// ## Example

// ```
// reverseWords("I know what you did last summer") -> "I wonk tahw uoy did tsal remmus"
// reverseWords("") -> ""
// reverseWords("a b c") -> "a b c"
// ```

function reverse(str) {
  return str.split("").reverse().join("");
}


function reverseWords(inputString) {
  // easy solution is here
  // return inputString.split(" ").map((s) => reverse(s)).join(" ");
  const regex = /([ ]+|\n|[.]{3})/g;
  const words = inputString.split(regex).map(s => reverse(s));
  const separators = inputString.matchAll(regex);
  // console.log("Words:", words);
  // console.log("Seperators:", separators);

  var result = '';
  for(var i = 0; i<words.length; i++ ){
    result += words[i];
    if (i<separators.length){
      result += separators[i];
    }
  }
  return result;
}



module.exports = { reverseWords };
