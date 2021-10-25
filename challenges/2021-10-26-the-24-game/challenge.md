# The 24 Game

The `24` game is played as follows. You are given a list of four integers, each between 1 and 9, in a fixed order. By placing the operators +, -, *, and / between the numbers, and grouping them with parentheses, determine whether it is possible to reach the value `24`.

For example, given the input [5, 2, 7, 8], you should return True, since (5 * 2 - 7) * 8 = 24.

Write a function that plays the `24` game.

## Business Rules/Errata

- Your input will always consist of an array of four integers. These integers do not all need to be positive.
- Your function should return a boolean value indicating whether the input can be combined to produce `24`. You do not need to produce the formula that yields `24`.
- The results of any division operation should be rounded to the nearest integer. So, `3 / 2 = 2`, not `3 / 2 = 1`.
- The result of division by zero should be zero, not undefined.

## Examples

```
play([5, 2, 7, 8]);   // True -> (5 * 2 - 7) * 8 = 24
play([2, 4, 8, 10]);  // True -> 2 + 4 + 8 + 10 = 24
play([5, 0, 4, 4]);   // True -> (5 + 0) * 4 + 4 = 24
play([47, 2, 0, 0]);  // True -> (47 / 2) + 0 + 0 = 24
play([1, 5, 7, 19]);  // False, no combinations yield 24
```