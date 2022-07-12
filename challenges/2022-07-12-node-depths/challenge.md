# Node Depths

The distance between a node in a Binary Tree and the tree's root is called the node's depth. Write a function that takes in a Binary Tree and returns the sum of its nodes' depths.

Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be a BinaryTree nodes themselves or None / null. 

Example (visual) Input:
```
  tree =      1                     depth = 0 (0*1)
           /      \
          2        3                depth = 1 (1*2)
        /   \     /  \
       4     5   6    7             depth = 2 (4*2)
     /  \
    8    9                          depth = 3 (2*3)
```
Example output:
```
16
```


## Business Rules/Errata

- You will be given a `Binary Tree Root Node` as input (which will either be a language implementation or a custom class). 
- The `Binary Tree` will consist of `Nodes` (another language implementation or custom class), with attributes `value` , `left` child node, and a `right` child node.
- Children nodes can either be `Binary Tree Nodes` themselves or `None` or `null`.

## Examples

```
input = {
  "nodes": [
    {"id": "1", "left": "2", "right": "3", "value": 1},
    {"id": "2", "left": "4", "right": "5", "value": 2},
    {"id": "3", "left": "6", "right": "7", "value": 3},
    {"id": "4", "left": "8", "right": "9", "value": 4},
    {"id": "5", "left": null, "right": null, "value": 5},
    {"id": "6", "left": null, "right": null, "value": 6},
    {"id": "7", "left": null, "right": null, "value": 7},
    {"id": "8", "left": null, "right": null, "value": 8},
    {"id": "9", "left": null, "right": null, "value": 9}
  ],
  "root": "1"
}
```
output
```
node_depths(input) -> 16
```

## Tackling This Challenge

1. Make sure you've got the required software on your machine: A JDK 11+
1. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
1. Checkout a new branch using `git checkout -b yourgithubusername-wip`.
1. Add your code to the solution file to make the puzzle function work as expected.
1. Confirm your solution by running tests. Execute the `run-tests` script (use `./run-tests` from the challenge root directory.
1. If you've passed all the tests, the `run-tests` script with help you commit it. Otherwise, try again to pass all tests.
1. Navigate to [GitHub](https://github.com/codeconnector/CodingDojo), and submit your pull request.
1. One of the CodingDojo maintainers will help you get your PR merged.

## Requirements

- JDK 11+
