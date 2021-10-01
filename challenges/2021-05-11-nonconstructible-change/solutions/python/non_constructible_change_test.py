import unittest

from non_constructible_change import min_impossible_coins


class MyTestCase(unittest.TestCase):

    def test_one(self):
        coins = [1]
        expected = 2
        assert min_impossible_coins(coins) == expected

    def test_two(self):
        coins = [1, 1, 1, 1, 1]
        expected = 6
        assert min_impossible_coins(coins) == expected

    def test_three(self):
        coins = [1, 1, 2, 3, 5, 7, 22]
        expected = 20
        assert min_impossible_coins(coins) == expected

    def test_four(self):
        coins = [1, 1, 4, 5, 6, 8, 9]
        expected = 3
        assert min_impossible_coins(coins) == expected

    def test_five(self):
        coins = [1, 1, 1, 1, 5, 10, 15, 20, 100]
        expected =  55
        assert min_impossible_coins(coins) == expected

if __name__ == '__main__':
    unittest.main()