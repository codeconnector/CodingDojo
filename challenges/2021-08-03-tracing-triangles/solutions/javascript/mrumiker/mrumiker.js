const traceTri = arr => {
  if (!arr.length) return 0;
  if (arr[0].length !== 1) return 'Not a 🔺';
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].length + 1 !== arr[i + 1].length) return 'Not a 🔺'
  }
  const helper = (node, path) => { //this is a modified version of a function I found at https://shareablecode.com/snippets/find-all-root-to-leaf-paths-from-a-binary-tree-javascript-solution-EPXx-S2iK
    if (!node) {
      return;
    }

    path.push(node.val);

    if (!node.left && !node.right) {
      result.push(path.reduce((a, b) => a + b)); //When you get to the bottom of the 🔺, take the sum of the numbers in the path and push to the results array
    } else {
      helper(node.left, path);
      helper(node.right, path);
    }

    path.pop();
  };
  const result = [];
  helper(makeTri(arr), []);
  return Math.max(...result); //return the highest number in the results array (the answer!)
};

function makeTri(arr) { // construct a binary tree from the triangle array
  arr.reverse();//We will work from the bottom up, so let's reverse the array to make it easier
  arr[0] = arr[0].map(num => new Node(num)); //let's change the bottom row array into an array of nodes with null values for .left and .right
  for (i = 1; i < arr.length; i++) { //go through the rest of the row arrays and construct nodes pointing back to the previous array
    arr[i] = arr[i].map((num, index) => new Node(num, arr[i - 1][index], arr[i - 1][index + 1]));
  }
  return arr[arr.length - 1][0]; //return the final entry in the array, which is now a binary tree of the entire triangle.
}

class Node {
    constructor(value, left = null, right = null) {
        this.val = value;
        this.left = left;
        this.right = right;
    }
}

console.log(traceTri([[1], [2, 3], [1, 5, 1]])); //9
console.log(traceTri([[6], [4, 4], [1, 2, 1], [5, 4, 3, 2]]));//16
console.log(traceTri([[5]])); //5
console.log(traceTri([[1], [1, 1], [1, 1, 1], [2, 1, 1, 1]])); //5
console.log(traceTri([[0], [0, 0], [0, 0, 0]])); //0
