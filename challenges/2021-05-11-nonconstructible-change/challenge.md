# Non-Constructible Change

Given an array of sorted positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you **cannot** create.

## Business Rules/Errata

- You can assume that the input will be a list or array of  **sorted** integers.
- The given coins can have any positive integer value, they do not have to correspond to real coin values (for example, we could have a coin worth 3).
- The coins aren't necessarily unique (you could have 7 coins worth 1, 2 coins worth 3, etc.
- Extra challenge: Complete this challenge in linear time and constant space.

## Examples

```
coins = [1]
minImpossibleChange(coins) // 2

coins = [1, 1, 1, 1, 1]
minImpossibleChange(coins) // 6 

coins = [1, 1, 2, 3, 5, 7, 22]
minImpossibleChange(coins) // 20

coins = [1, 1, 4, 5, 6, 8, 9]
minImpossibleChange(coins) // 3

coins = [1, 1, 1, 1, 5, 10, 15, 20, 100]
minImpossibleChange(coins) // 55
```

## Tackling This Challenge

1. Make sure you've got the required software on your machine: A JDK 11+
1. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
1. Checkout a new branch using `git checkout -b yourgithubusername-wip`.
1. Add your code to the Java file to make the challenge function work as expected.
1. Confirm your solution by running tests. Execute the `test-it.sh` script (use `./test-it.sh` from the challenge root directory.
1. If you've passed all the tests, the `test-it.sh` script provide instructions to help you commit it. Otherwise, try again to pass all tests.
1. Navigate to [GitHub](https://github.com/codeconnector/CodingDojo), and submit your pull request.
1. One of the CodingDojo maintainers will help you get your PR merged.

## Requirements

- JDK 11+
