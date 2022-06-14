from unittest import TestCase


def is_monotonic(number_list):
    trend, index = 0, 1

    while index < len(number_list):
        diff = number_list[index] - number_list[index-1]
        index += 1

        if trend == 0:  # finding trend
            if diff == 0:
                continue
            trend = 1 if diff > 0 else -1
        elif ((diff > 0) and (trend < 0)) or ((diff < 0) and (trend > 0)) :
            # is trend broken ?
            return False
    return True



class TestMonotonic(TestCase):
    # can be run from this directory with "python3 -m unittest xanderyzwich"

    def test_empty(self):
        assert is_monotonic([]) == True

    def test_single_element(self):
        assert is_monotonic([1]) == True

    def test_two_elements_increasing(self):
        assert is_monotonic([1, 2]) == True
    
    def test_repeats_only(self):
        assert is_monotonic([2, 2, 2, 2]) == True

    def test_increasing(self):
        assert is_monotonic([-5, -4, -3, -2, -1, 0, 1]) == True

    def test_false(self):    	
        assert is_monotonic([2, 1, 2, 3, 4, 5]) == False
    
    def test_decreasing(self):
        assert is_monotonic([1, 1, 0, 0, -1, -1, -2, -2]) == True
        assert is_monotonic([5, 4, 3, 3, 3, 2, 1]) == True