// # Boustrophedon
// 
// In Ancient Greece, it was common to write text with the first line going left to
// right, the second line going right to left, and continuing to go back and forth.
// This style was called "boustrophedon".
// 
// Given a binary tree, write an algorithm to print the nodes in boustrophedon order.
// 
// ## Business Rules/Errata
// 
// - ***Data Structure Required: Binary Tree***
// - Your function should take a binary tree as an input and output a list of the
//   values in the binary tree.
// - The values in the binary tree will be single characters.
// - The input binary tree will have three member variables or fields that are
//   accessible to you: `value`, `left`, and `right`. 
//   - `value` will contain the value in that tree node, and will be the value you
//     output in your result.
//   - `left` will contain the tree node to the left of the current node.
//   - `right` will contain the tree node to the right of the current node.
// - You may assume that your tree is 'complete' and symmetrical, that is, that each
//   level of the tree contains values at each position (no blank spaces).
// - The nodes in the bottom-most 'layer' of the tree will not contain a `left` or
//   `right` value.

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function boustrophedon(input) {
    let ans = [],
        currentRow = [input],
        leftToR = true;

    while (currentRow[0]) {
        let tempArr = [],
            nextRow = [];
        for (node of currentRow) {
            tempArr.push(node.value); //push the letter value of each node in the current row to tempArr
            nextRow.push(node.left); //push each node in the next row to the nextRow array
            nextRow.push(node.right);
        }
        if (!leftToR) { // if this is a "right to left" row, reverse the order of the letters in tempArr
            tempArr.reverse();
        }
        ans = ans.concat(tempArr); //add the contents of tempArr to the answer array

        leftToR = !leftToR; //switch from "left to right" to "right to left" directions. or vice versa
        currentRow = nextRow; //make the next row the current row to prepare for the next scan
    } // if there are still non-null values in the currentRow, start the process over

    return ans; //return the completed answer array with all the letters, in proper 🐮 sequence
}

module.exports = { Node, boustrophedon };
