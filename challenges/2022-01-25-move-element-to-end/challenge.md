# Move Element to End

You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array. The potential difficulty of this challenge lies in achieving the optimal time and space complexity, so they will be a rule requirement.

## Business Rules/Errata

- arrays can be empty, which should return an empty array.
- the array is not sorted
- the function will always take a 1 dimensional array of integers and a single integer as input.
- the integers that are not moved do not have to preserve their original order, they can be ordered in any fashion so long as the integers to move all appear at the end
- integers in the array can be duplicated
- This challenge must be solved in O(n) time and O(1) space - n is the length of the array.

## Examples

```
array = [2, 1, 2, 2, 2, 3, 4, 2]
to_move = 2

move_element_to_end(array, to_move) -> [1, 3, 4, 2, 2, 2, 2, 2] # 1, 3, 4 in this do not have to maintain their original order of appearance in the array, although they can
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
