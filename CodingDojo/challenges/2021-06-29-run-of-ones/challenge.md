# Runs of Ones

Given a positive integer `n`, determine the length of the longest run of `1`'s in the binary representation of that integer.

## Business Rules/Errata

- A run of `1`'s is any series of one or more `1`'s in a row, with no `0`'s in between. The first four characters in `11110101` are a run of `1`'s.
- There's no requirement related to what data type(s) should be used to store the binary representation of `n`.
- Target time complexity: O(n) (linear)
- Target space complexity: O(1) (constant)

## Examples

```
longest_binary_run(156);   // 3
longest_binary_run(1979);  // 4
longest_binary_run(2731);  // 2
longest_binary_run(2185);  // 1
```

## Tackling This Challenge

1. Make sure you've got the required software on your machine: A JDK 11+
1. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
1. Checkout a new branch using `git checkout -b yourgithubusername-wip`.
1. Add your code to the 'RunOfOnes.java' file to make the `longestBinaryRun` function work as expected.
1. Confirm your solution by running tests. Execute the `run-tests.sh` script (use `./run-tests.sh` from the challenge root directory.
1. If you've passed all the tests, the `run-tests.sh` script with help you commit it. Otherwise, try again to pass all tests.
1. Navigate to [GitHub](https://github.com/codeconnector/CodingDojo), and submit your pull request.
1. One of the CodingDojo maintainers will help you get your PR merged.

## Requirements

- JDK 11+
