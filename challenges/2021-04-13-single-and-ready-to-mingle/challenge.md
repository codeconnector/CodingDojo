# Single and Ready to Mingle

Given an array of integers in which two elements appear exactly once and all other elements appear exactly twice, find the two elements that appear only once.

## Business Rules/Errata

- You can assume that the input will **always** include at least two and exactly two elements that appear only once.
- You may not assume that the list will be sorted ahead of time.
- Extra Challenge: Can you complete this puzzle in linear time and constant space?
- Extra Extra Challenge: Can you make your solution generic over other input types?

## Examples

```
input = [2, 4, 6, 8, 10, 2, 6, 10];
find_singles(input)  // [4, 8]
```
```
input = [1, 2, 3, 2, 1, 4, 4, 6, 7, 8, 7, 6, 9, 9];
find_singles(input)  // [3, 8]
```

## Tackling This Challenge

1. Make sure you've got the required software on your machine: npm 6+ and a text editor.
1. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
1. Checkout a new branch using `git checkout -b yourgithubusername-wip`.
1. Add your code to the 'solution.js' file to make the `findSingles` function work as expected.
1. Confirm your solution by running tests. Execute the `test-it.sh` script (use `./test-it.sh` from the challenge root directory.
1. If you've passed all the tests, the `test-it.sh` script will instruct you how to commit it. Otherwise, try again to pass all tests.
1. Navigate to [GitHub](https://github.com/codeconnector/CodingDojo), and submit your pull request.
1. One of the CodingDojo maintainers will help you get your PR merged.

## Requirements

- npm 6+