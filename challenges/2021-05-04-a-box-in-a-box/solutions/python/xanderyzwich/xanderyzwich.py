"""
# A Box in a Box

Given a pair of rectangles, determine whether one of the rectangles is completely contained within the other rectangle. You will be given each rectangles top-left coordinate in an x/y plane, the rectangle's width, and the rectangle's height. One rectangle is "completely contained" by a rectangle that completely covers it, if viewed from above the plane. This puzzle should be solved using an Object-Oriented approach.

## Business Rules/Errata

- ***Data Structure Required: Rectangle*** You should produce and compare `Rectangle` objects in your solution, not the raw rectangle measurements.
- The rectangle dimensions will be given in an array, in the format [(top left x coordinate), (top left y coordinate), (width), (height)].
- The units of width and height are irrelevant and can be ignored.
- Your final result should include a function that, given two sets of rectangle dimensions, returns a boolean value,
- Your function should return `false` if the two rectangles only partially overlap.
"""

from unittest import TestCase


class Rectangle:

    def __init__(self, top_left_x, top_left_y, width, height):
        self.min_x = top_left_x
        self.max_x = top_left_x + width
        self.min_y = top_left_y
        self.max_y = top_left_y + height
        # print(self.__repr__())

    def contains(self, other_rectangle):

        return all([
            self.min_x <= other_rectangle.min_x,
            self.max_x >= other_rectangle.max_x,
            self.min_y <= other_rectangle.min_y,
            self.max_y >= other_rectangle.max_y])

    def __repr__(self):
        print(f'max_x = {self.max_x}, min_x = {self.min_x}, max_y = {self.max_y}, min_y = {self.min_y}')


def rectangles_overlap(rect_1, rect_2):
    results = [rect_1.contains(rect_2), rect_2.contains(rect_1)]
    # print(results)
    return any(results)


class TestRectangle(TestCase):

    def test_one(self):
        rectangle1 = Rectangle(1, 4, 3, 3)
        rectangle2 = Rectangle(0, 3, 2, 1)
        assert rectangles_overlap(rectangle1, rectangle2) is False
        assert rectangles_overlap(rectangle2, rectangle1) is False

    def test_two(self):
        rectangle1 = Rectangle(1, 4, 3, 3)
        rectangle2 = Rectangle(0, 3, 4, 4)
        assert rectangles_overlap(rectangle1, rectangle2) is True
        assert rectangles_overlap(rectangle2, rectangle1) is True

    def test_three(self):
        rectangle1 = Rectangle(1, 4, 3, 3)
        rectangle2 = Rectangle(0, 3, 3, 3)
        assert rectangles_overlap(rectangle1, rectangle2) is False
        assert rectangles_overlap(rectangle2, rectangle1) is False

