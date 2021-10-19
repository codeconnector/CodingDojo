// # ZigZag Print
// 
// Given a string and a number of lines k, print the string in zigzag form. In zigzag,
// characters are printed out diagonally from top left to bottom right until reaching
// the kth line, then back up to top right, and so on.
// 
// For example, given the sentence "thisisazigzag" and k = 4, you should print:
// 
// ```
// t     a     g
//  h   s z   a
//   i i   i z
//    s     g
// ```
// 
// ## Business Rules/Errata
// 
// - The input will include a string and a positive integer between 2 and 10. 
// - Your output should be in the form of a string that, when printed to console, will
//   yield the desired pattern. See examples below.
// - Your string may contain any valid ASCII letter, number, space, or printable
//   special character ('!', '@', '#', '$', etc.). Importantly, control characters such
//   as '\t', '\n', '\r', '\v', etc. will not be included.
// - Spaces should be included in your output pattern.
// 
// ## Examples
// 
// ```
// printzigzag("bismarcks", 3)  // "b   a   s\n i m r k \n  s   c  "
// b   a   s
//  i m r k
//   s   c
// 
// 
// printzigzag("thisisazigzag", 4)  
// // "t     a     g\n h   s z   a \n  i i   i z  \n   s     g   "
// t     a     g
//  h   s z   a
//   i i   i z
//    s     g
// 
// 
// printzigzag("ilovechickenandwaffles", 5) 
// // "i       c       a     \n l     i k     w f    \n  o   h   e   d   f   \n   v c     n n     l s\n    e       a       e "
// i       c       a
//  l     i k     w f
//   o   h   e   d   f
//    v c     n n     l s
//     e       a       e
// ```

function printZigZag(aString, k) {
    // create 2d array of characters where each row contains the entire string
    let characterMap = new Array(k);
    for (let i = 0; i < k; i++) {
        characterMap[i] = Array.from(aString);
    }    

    // the peak to peak frame width based on requested number of rows
    const width = (k - 1) * 2;

    for (let col = 0; col < aString.length; col++) {
      for (let row = 0; row < k; row++) {
          // clear out characters where row does not match the distance to next/previous peak 
          if ((col + row) % width === 0 || (col - row) % width === 0) continue;
          characterMap[row][col] = " ";
      }
    }
    return characterMap.map((row) => row.join('')).join('\n');
}

module.exports = { printZigZag };
