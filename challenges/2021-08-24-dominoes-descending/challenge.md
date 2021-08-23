# Dominoes Descending

You are given an string representing the initial conditions of some dominoes. Each element can take one of three values:

- "L", meaning the domino has just been pushed to the left,
- "R", meaning the domino has just been pushed to the right, or
- ".", meaning the domino is standing still.

Determine the orientation of each tile when the dominoes stop falling. Note that if a domino receives a force from the left and right side simultaneously, it will remain upright.

For example, given the string .L.R.....L, you should return LL.RRR.LLL.

## Business Rules/Errata

- Input will be a valid string containing only the "L", "R", and "." characters.
- Output should be a valid string containing only the "L", "R", and "." characters.
- A domino that is struck from the left will fall left, a domino that is struck from the right will fall right.
- A domino struck from the left and right at the same time will remain standing.

## Examples

```
topple(".L.R....L") // "LL.RRRLLL"
topple("L.......R") // "L.......R"
topple("R........") // "RRRRRRRRR"
topple("........L") // "LLLLLLLLL"
topple("RLRLRLRLR") // "RLRLRLRLR"
topple("R..L.R..L") // "RRLL.RRLL"
topple("...L.R...") // "LLLL.RRRR"
topple("R.......L") // "RRRR.LLLL"
```

## Tackling This Challenge

1. Make sure you've got some version of go installed
1. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
1. Checkout a new branch using `git checkout -b yourgithubusername-wip`.
1. Add your code to the solution file to make the puzzle function work as expected.
1. Confirm your solution by running tests. Run `go test --bench=.
   `, or simply `go test` from the challenge root directory.
1. If you've passed all the tests, feel free to commit your solution.
1. Navigate to [GitHub](https://github.com/codeconnector/CodingDojo), and submit your pull request.
1. One of the CodingDojo maintainers will help you get your PR merged.