"""
# Find Three Largest Numbers

Write a function that takes in an array of at least three integers and, 
without sorting the input array, returns a sorted array of the three largest integers in the input array. 
The function should return duplicate integers if necessary.

## Business Rules/Errata

- The input array should have at least three integers. If it does not, you should return a null value.
- You may not sort the input array
- The function should handle duplicate integers; for example `[10, 5, 9, 10, 12]` should return `[10, 10, 12]`
- Constant space -> you will return a new array of 3 integers, and this will be the only new data structure you create.
- Linear time -> you should solve this problem by only passing through the array a single time.
"""

from unittest import TestCase


def sort_three(num_list):
    temp = num_list
    if temp[0] > temp[1]:
        temp[0], temp[1] = temp[1], temp[0]
    if temp[1] > temp[2]:
        temp[1], temp[2] = temp[2], temp[1] 
    return temp


def find_three_largest_numbers(num_list):
    if len(num_list) < 3:  # block: not enough elements
        return None
    
    largest = sort_three(num_list[:3])
    if len(num_list) == 3:  # short-circuit: only 3 elements
        return largest

    for n in num_list[3:]:
        if largest[0] < n:  # check current 
            largest[0] = n
        largest = sort_three(largest)
            
    return largest


class TestFindThreeLargestNumbers(TestCase):
    def test_one(self):
        assert find_three_largest_numbers([1]) == None

    def test_two(self):
        assert find_three_largest_numbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]) == [18, 141, 541]

    def test_three(self):
        assert find_three_largest_numbers([11, -7, 5]) == [-7, 5, 11]