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
    // Insert your solution code here
    let fromLeft = [input],
        fromRight = []
        answer = [];

    while(fromLeft[0]){
      fromRight = [];
      for(node of fromLeft) {
          answer.push(node.value);
          if(node.left) fromRight.unshift(node.left);
          if(node.right) fromRight.unshift(node.right);
      }
      fromLeft = [];
      for(node of fromRight) {
          answer.push(node.value);
          if(node.right) fromLeft.unshift(node.right);
          if(node.left) fromLeft.unshift(node.left);
      }
    }
    return answer;

}

module.exports = { Node, boustrophedon };
