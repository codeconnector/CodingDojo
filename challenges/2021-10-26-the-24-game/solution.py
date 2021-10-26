import unittest

"""
# The 24 Game

The `24` game is played as follows. You are given a list of four integers, each in a fixed order. By
 placing the operators +, -, *, and / between the numbers, and grouping them with parentheses, determine whether it is possible to reach the value `24`.

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
"""


def play(array):
    pass


class TestPlay(unittest.TestCase):
    def setUp(self):
        self.prod_sub_prod = [5, 2, 7, 8]
        self.addition = [2, 4, 8, 10]
        self.subtraction = [27, 1, 1, 1]
        self.add_prod_add = [5, 0, 4, 4]
        self.div_roundup = [47, 2, 0, 0]
        self.div_rounddown = [1, 1, 73, 3]
        self.fail = [1, 5, 7, 19]

    # def test_prod_sub_prod(self):
    #     self.assertTrue(play(self.prod_sub_prod), "(5 * 2 - 7) * 8 = 24 -> True")

    def test_addition(self):
        self.assertTrue(play(self.addition), "2 + 4 + 8 + 10 = 24 -> True")

    def test_subtraction(self):
        self.assertTrue(play(self.subtraction), "27 - 1 - 1 - 1 = 24 -> True")

    # def test_add_prod_add(self):
    #     self.assertTrue(play(self.add_prod_add), "(5 + 0) * 4 + 4 = 24 -> True")

    def test_div_roundup(self):
        self.assertTrue(play(self.div_roundup),
                        "47 / 2 + 0 + 0 = 23.5 -> 24 -> True")

    # def test_div_rounddown(self):
    #     self.assertTrue(play(self.div_rounddown), "1 - 1 + (73 / 3) = 24.33 -> 24 -> True")

    def test_fail(self):
        self.assertFalse(play(self.fail), "1 ? 5 ? 7 ? 19 != 24 -> False")

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
