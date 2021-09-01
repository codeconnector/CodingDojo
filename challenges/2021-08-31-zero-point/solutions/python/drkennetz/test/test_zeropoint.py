#!/usr/bin/env python3

import unittest
from zeropoint import LinkedList, zeropoint

class TestZeroPoint(unittest.TestCase):
    def setUp(self):
        self.tests = [[1, 2, -2, 3], [3, 4, -7, 5, -6, 6], [1, 0, 1], [1, 2, 3, 4, -4, -3, 5],
                      [2, 3, 4, 5, -9], [1, -1, -2, 3], [1, -10, 5, 4], [5]]
        self.expected = [[1, 3], [5], [1, 1], [1, 2, 5], [2, 3], [-2, 3], [None], [5]]

    def test_zeropoint(self):
        total_spaces = 30
        a = len("Actual:")
        e = len("Expected:")
        pad = total_spaces - a - e
        print("Actual:", " "*pad, "Expected:")
        for test, result in zip(self.tests, self.expected):
            dll, exp = LinkedList.construct_dll_from_list(test), LinkedList.construct_dll_from_list(result)
            zerod = zeropoint.remove_zero_sequences_inplace(dll)
            act = zerod.print_list()
            expected = exp.print_list()
            a = len(act)
            e = len(expected)
            pad = total_spaces - a - e
            print(act, " "*pad, expected)
            
                  

    def tearDown(self):
        pass

if __name__ == "__main__":
    unittest.main()
