"""
Longest Peak

Write a function that takes in an array of integers and returns the length of the longest peak in the array.

A peak is defined as adjacent integers in the array that are *strictly* increasing until they reach a tip (the highest value in the peak),
    at which point they become *strictly* decreasing.
At least three integers are required to form a peak.

## Business Rules/Errata

1. A peak *must* increase and then decrease.
2. The input can be an empty array, and must be an array of integers.
2. If equal value numbers appear in the run of a peak, the peak is stopped and restarted.
3. A peak must contain at least 3 numbers, such as 1,2,1
4. Numbers can be positive or negative.
5. *Bonus:* Optimal time and space: O(n) time | O(1) space - where n is the length of the input array.
"""
from unittest import TestCase


def longest_peak(elevations):
    incline, decline, longest, i = 0, 0, 0, 0

    while i < len(elevations) - 1:  # stop one before end to prevent next being out of bounds
        is_end = False
        current, next = elevations[i], elevations[i+1]

        if current < next:  # uphill
            if decline > 0:  # new rise ends previous peak
                is_end = True
            else:
                incline += 1
        elif current > next:  # downhill
            if incline > 0:  # only count if attached to uphill
                decline += 1
        else:  # plateau
            if incline and not decline:  # not a peak
                incline = 0
            if incline and decline:  # ends previous peak
                is_end = True

        # Check for peak ending at end of list
        if len(elevations) - 2 == i and incline and decline:
            is_end = True

        if is_end:
            peak_length = incline + decline + 1
            if peak_length > longest:
                longest = peak_length
            incline, decline = 0, 0
        else:
            i += 1

    return longest


class TestLongestPeak(TestCase):

    def test_not_peak(self):
        assert longest_peak([5, 4, 3, 2, 1]) == 0  # all decreasing
        assert longest_peak([1, 2, 3, 4, 5]) == 0  # all increasing
        assert longest_peak([5, 4, 3, 2, 1, 2, 10, 12]) == 0  # all decreasing, then all increasing
        assert longest_peak([]) == 0  # empty input check mandatory :D
        assert longest_peak([1, 2, 3, 3, 2, 1]) == 0  # equality at peak tip, 0 is returned

    def test_peaks(self):
        assert longest_peak([1, 3, 2]) == 3  # normal peak
        assert longest_peak([1, 2, 3, 4, 5, 1]) == 6  # peak ends on last number
        assert longest_peak([2, 2, 3, 2]) == 3  # repeat at the beginning
        assert longest_peak([1, 2, 3, 2, 1, 1]) == 5  # repeat at the end
        assert longest_peak([1, 1, 1, 2, 3, 10, 12, -3, 2, 3, 45, 800, 99, 98, 0, -1, 2, 3, 4, 5, 0, -1]) == 9
        # peak in the middle -3, 2, 3, 45, 800, 99, 98, 0, -1
