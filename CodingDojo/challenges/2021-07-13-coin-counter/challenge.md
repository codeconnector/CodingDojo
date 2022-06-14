# Coin Counter

You are given `n` fair coins, and you flip all at the same time. Every time a coin
comes up 'tails', it is removed from play. The ones that come up 'heads', you will flip
again on the next round. Write a function that, given `n`, returns the number of rounds
you'd expect to play until only one coin remains.

## Business Rules/Errata

- Each coin is fair, meaning it is equally likely to come up as either side on any
  given round.
- Your answer should be rounded to the nearest whole number, since it is impossible to
  play part of a round.
- Extra Challenge: What is the most time-efficient solution you can devise?
- Extra Challenge: Can you implement this game for dice, instead of coins?

## Examples

```
count_coin_rounds(2)     // 1
count_coin_rounds(128)   // 7
count_coin_rounds(1000)  // 10
```

## Tackling This Challenge

1. Make sure you've got the required software on your machine: A JDK 11+
1. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
1. Checkout a new branch using `git checkout -b yourgithubusername-wip`.
1. Execute the `run_tests` script once to set up Gradle for this challenge (use `./run_tests` from the challenge root directory).
1. Add your code to the 'src/main/kotlin/Solution.kt' file to solve the puzzle.
1. Confirm your solution by running tests. Execute the `run_tests` script to run the tests.
1. If you've passed all the tests, submit your solution to the repo using [this solutions guide in our wiki](https://github.com/codeconnector/CodingDojo/wiki#solutions).
1. Navigate to [GitHub](https://github.com/codeconnector/CodingDojo), and submit your pull request.
1. One of the CodingDojo maintainers will help you get your PR merged.

## Requirements

- JDK 11+
