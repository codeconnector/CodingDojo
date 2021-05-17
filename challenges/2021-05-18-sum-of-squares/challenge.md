# Sum of Squares

Given a positive integer `n`, find the smallest number of squared integers which sum to `n` (i.e. n = x<sup>2</sup> + y<sup>2</sup> should yield `2`).

## Business Rules/Errata

- Any attempt to provide non-integer, non-positive input should return an error.
- Return only the count of squared integers that sum to `n`, not the list of integers.
- Remember that 1<sup>2</sup> = 1.

## Examples

```bash
SumOfSquares(13); // 2
SumOfSquares(27); // 3
```

- For `n` = 13: 3<sup>2</sup> + 2<sup>2</sup> = 9 + 4 = 13
- For `n` = 27:
    - 3<sup>2</sup> + 3<sup>2</sup> + 3<sup>2</sup> = 9 + 9 + 9 = 27
    - 5<sup>2</sup> + 1<sup>2</sup> + 1<sup>2</sup> = 25 + 1 + 1 = 27
    
## Tackling This Challenge

1. Make sure you have installed go on your local machine.
2. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
3. Checkout a new branch using `git checkout -b yourgithubusername-wip`.
4. If a `solutions` directory does not exist, create it, then under `solutions` create a directory with the language you are using.
   
    Example: `solutions/go`
   
    Then, in your new language directory, add a directory with your github username, then your solution with the filename `<githubusername>.language_extension`
   
    Example: `solutions/go/drkennetz/drkennetz.go`
5. Confirm your solution by passing all test cases.
6. If you've passed all the tests, commit your code (using the example from above, assuming you are in that directory) by running `git add drkennetz.go`, followed by `git commit -m "<username's> go solution"`, followed by `git push origin yourgithubusername-wip`.
7. Go to your github, and submit your pull request to the main branch in CodingDojo.
8. One of the CodingDojo maintainers will help you get your PR merged.

## Requirements

- Installed go
