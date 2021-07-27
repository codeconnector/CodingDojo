# Boustrophedon

In Ancient Greece, it was common to write text with the first line going left to right, the second line going right to left, and continuing to go back and forth. This style was called "boustrophedon".

Given a binary tree, write an algorithm to print the nodes in boustrophedon order.

## Business Rules/Errata

- ***Data Structure Required: Binary Tree***
- Your function should take a binary tree as an input and output a list of the values in the binary tree.
- The values in the binary tree will be single characters.
- The input binary tree will have three member variables or fields that are accessible to you: `value`, `left`, and `right`. 
  - `value` will contain the value in that tree node, and will be the value you output in your result.
  - `left` will contain the tree node to the left of the current node.
  - `right` will contain the tree node to the right of the current node.
- You may assume that your tree is 'complete' and symmetrical, that is, that each level of the tree contains values at each position (no blank spaces).
- The nodes in the bottom-most 'layer' of the tree will not contain a `left` or `right` value.

## Examples

```
//       a
//      / \
//     b   c
//   / |   | \
//  d  e   f  g

input = {'a', {'b', {'d'}, {'e'}}, {'c', {'f'}, {'g'}}}
boustrophedon(input) // ['a', 'c', 'b', 'd', 'e', 'f', 'g']
```



```
//         _____ p _____
//        /             \
//     _ o _           _ r _
//    /     \         /     \
//   g       n       o       s
//  / \     / \     / \     / \
// n   o   i   t   a   c   i   t

input = {'p', {'o', {'g', {'n'}, {'o'}}, {'n', {'i'}, {'t'}}}, {'r', {'o', {'a'}, {'c'}}, {'s', {'i'}, {'t'}}}}
boustrophedon(input) // ['p', 'r', 'o', 'g', 'n', 'o', 's', 't', 'i', 'c', 'a', 't', 'i', 'o', 'n']
```

## Tackling This Challenge

1. Make sure you've got the required software on your machine: npm 7.9.0+ and a text editor.
2. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
3. Navigate to this directory and run `npm install` to initialize the project.
4. The challenge will be live-coded in our weekly Tusday meetup in the `solution.js` file.
5. Run the tests to check your solution by navigating to this directory and running `./run-tests.sh`.
6. The results of the live coding demo will be added to the GitHub repository as a mob solution. Please feel free to tackle this challenge in your own way/language and submit your solution to the repo using [this solutions guide in our wiki](https://github.com/codeconnector/CodingDojo/wiki#solutions).

## Requirements

- npm 7.9.0+

