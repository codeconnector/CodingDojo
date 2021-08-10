"""
Tracing Triangles

You are given an array of arrays of integers, where each array corresponds to a row in a triangle of numbers.
For example, [[1], [2, 3], [1, 5, 1]] represents the triangle:

  1
 2 3
1 5 1

We define a path in the triangle to start at the top and go down one row at a time to an adjacent value,
eventually ending with an entry on the bottom row.
For example, 1 -> 3 -> 5. The weight of the path is the sum of the entries.

Write a program that returns the weight of the maximum weight path.
Business Rules/Errata

    The input will be a nested array of integer arrays.
    Each sub-array should be listed in order and include one more value than the previous sub-array (forming a triangle).
        If the input does not meet these criteria, return an error.
    If the input array is empty, return 0.
    If the input array contains only a single sub-array, return the value in that sub-array. For example: [[5]] yields 5.
    You do not need to return the path followed, simply the largest path weight.
"""
from tools.decorators import function_details_concurrent
from unittest import TestCase


class BushNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def get_max_path(self):
        if self.left is None and self.right is None:
            return self.value
        return self.value + max([self.left.get_max_path(), self.right.get_max_path()])


def bush_builder(input_triangle):
    bush = []
    for row in input_triangle:
        bush_row = []
        for element in row:
            bush_row.append(BushNode(element))
        bush.append(bush_row)

    for i, row in enumerate(bush[:-1]):
        for j, node in enumerate(row):
            bush[i][j].left = bush[i + 1][j]
            bush[i][j].right = bush[i + 1][j + 1]
    return bush[0][0]


def longest_path(input_triangle, i=0, j=0):
    # Error Checking
    if i == j == 0:
        for i in range(len(input_triangle)):
            if i + 1 != len(input_triangle[i]):
                raise ValueError
    bush = bush_builder(input_triangle)
    return bush.get_max_path()


class TestLongestPath(TestCase):

    def test_one(self):
        triangle = [[1], [2, 3], [1, 5, 1]]
        print(f'Tesing first case with input: {triangle}')
        assert longest_path(triangle) == 9

    def test_two(self):
        triangle = [[6], [4, 4], [1, 2, 1], [5, 4, 3, 2]]
        print(f'Tesing first case with input: {triangle}')
        assert longest_path(triangle) == 16

