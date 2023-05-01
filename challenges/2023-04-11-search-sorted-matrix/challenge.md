# Search In Sorted Matrix

You're given a two-dimensional array (a matrix) of distinct integers and a target integer. Each row in the matrix is sorted, and each column is also sorted; the matrix doesn't necessarily have the same height and width.
Write a function that returns an array of the row and column indices of the target integer if it's contained in the matrix, otherwise [-1, -1].

## Examples
```
matrix = [
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004],
]
target = 44 -> [3, 3]
target = 8 -> [2, 1]
target = 1000 -> [0, 5]
target = 6 -> [-1, -1]
```
## Tackling This Challenge
1. Make sure you've got the required software on your machine: npm 7.9.0+ and a text editor.
2. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
3. Navigate to this directory and run `npm install` to initialize the project.
4. The challenge will be live-coded in our weekly Tuesday meetup in the `solution.js` file.
5. Run the tests to check your solution by navigating to this directory and running `./run-tests`.
6. The results of the live coding demo will be added to the GitHub repository as a mob solution. Please feel free to
tackle this challenge in your own way/language and submit your solution to the repo using [this solutions guide in our wiki](https://github.com/codeconnector/CodingDojo/wiki#solutions).

## Requirements

- npm 7.9.0+