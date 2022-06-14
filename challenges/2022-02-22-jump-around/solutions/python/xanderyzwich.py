"""
Jump Around

Starting from 0 on a number line, you would like to make a series of jumps that lead to the integer N.
On the `i`th jump, you may move exactly `i` places to the left or right
    (1st jump -> 1 place, 2nd jump -> 2 places, etc.).
Determine the smallest number of jumps needed to get from 0 to N.

## Business Rules/Errata
- The number line should be assumed to extend infinitely in both directions. N may be either positive or negative.
- Keep in mind that you should identify the *number* of jumps, not the path.
    The result of your function should be a positive integer.
- There is no guarantee that all the jumps to reach a given number will be in the same direction.
- All test cases return an answer, you should assume that every number can be reached using this strategy.
"""

from unittest import TestCase


def jump_to(destination):
    goal = abs(destination)
    parity = destination % 2
    position, step = 0, 0

    while True:
        on_position = position == goal
        on_parity = parity == (position % 2)
        beyond_destination = goal < position

        if any([on_position, (beyond_destination and on_parity)]):
            return step

        step += 1
        position += step

    return False


class TestJumpTo(TestCase):
    """
    tests can be executed by 'python -m unittest xanderyzwich'
    """
    def test_zero(self):
        assert jump_to(0) == 0

    def test_one(self):
        assert jump_to(1) == 1

    def test_two(self):
        assert jump_to(2) == 3

    def test_neg_two(self):
        assert jump_to(-2) == 3

    def test_twenty_one_jumps(self):
        assert jump_to(175) == 21

    def test_too_big(self):
        assert jump_to(-154290) == 555
