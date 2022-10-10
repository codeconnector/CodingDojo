"""
# Find Three Largest Numbers
Write a function that takes in an array of at least three integers and, without
sorting the input array, returns a sorted array of the three largest integers in
the input array. The function should return duplicate integers if necessary.
## Business Rules/Errata
 - The input array should have at least three integers. If it does not, you should
   return a null value.
 - You may not sort the input array
 - The function should handle duplicate integers; for example `[10, 5, 9, 10, 12]`
   should return `[10, 10, 12]`
 - Constant space -> you will return a new array of 3 integers, and this will be the
   only new data structure you create.
 - Linear time -> you should solve this problem by only passing through the array a
   single time.
"""

import unittest

def Solution(array: list) -> list:
    """ Finds three largest numbers in a list and returns them in sorted order. """
    return None

class TestSolution(unittest.TestCase):
    """Test suite for Solution function"""

    def setUp(self):
        """ Convention """
        self.test_normal_list = [141, 2, 17, -7, -17, -27, 18, 541, 8, 7, 7]
        self.test_duplicates_in_soln = [11, -7, 5, -7]
        self.test_none_ret = [1]
    
    def test_solution_normal_list(self):
        self.assertListEqual(Solution(self.test_normal_list), [18, 141, 541])

    def test_duplicates_in_soln(self):
        self.assertListEqual(Solution([11, -7, 5, -7]), [-7, 5, 11])

    def test_none_ret(self):
        self.assertIsNone(Solution([1]))

    def tearDown(self):
        """ Convention - nothing to destroy"""
        pass


