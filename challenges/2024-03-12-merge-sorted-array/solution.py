import unittest
from typing import List

def merge_sorted_array(nums1: List[int], m: int, nums2: List[int], n: int) -> None:
    """Merge nums2 into nums1."""
    pass

class TestMergeSortedArray(unittest.TestCase):
    def setUp(self):
        self.tc = {
            "example1": {
                "nums1": [1, 2, 3, 0, 0, 0],
                "m": 3,
                "nums2": [2, 5, 6],
                "n": 3,
                "result": [1, 2, 2, 3, 5, 6],
            },
            "example2": {
                "nums1": [1],
                "m": 1,
                "nums2": [],
                "n": 0,
                "result": [1],
            },
            "example3": {
                "nums1": [0],
                "m": 0,
                "nums2": [1],
                "n": 1,
                "result": [1],
            },
            "example4": {
                "nums1": [4, 5, 6, 0, 0, 0],
                "m": 3,
                "nums2": [1, 2, 3],
                "n": 3,
                "result": [1, 2, 3, 4, 5, 6],
            },
            "example5": {
                "nums1": [1, 2, 3, 0, 0, 0],
                "m": 3,
                "nums2": [4, 5, 6],
                "n": 3,
                "result": [1, 2, 3, 4, 5, 6],
            },
        }

    def test_example1(self):
        merge_sorted_array(
            self.tc["example1"]["nums1"],
            self.tc["example1"]["m"],
            self.tc["example1"]["nums2"],
            self.tc["example1"]["n"],
        )
        self.assertEqual(
            self.tc["example1"]["nums1"], self.tc["example1"]["result"]
        )

    def test_example2(self):
        merge_sorted_array(
            self.tc["example2"]["nums1"],
            self.tc["example2"]["m"],
            self.tc["example2"]["nums2"],
            self.tc["example2"]["n"],
        )
        self.assertEqual(
            self.tc["example2"]["nums1"], self.tc["example2"]["result"]
        )

    def test_example3(self):
        merge_sorted_array(
            self.tc["example3"]["nums1"],
            self.tc["example3"]["m"],
            self.tc["example3"]["nums2"],
            self.tc["example3"]["n"],
        )
        self.assertEqual(
            self.tc["example3"]["nums1"], self.tc["example3"]["result"]
        )

    def test_example4(self):
        merge_sorted_array(
            self.tc["example4"]["nums1"],
            self.tc["example4"]["m"],
            self.tc["example4"]["nums2"],
            self.tc["example4"]["n"],
        )
        self.assertEqual(
            self.tc["example4"]["nums1"], self.tc["example4"]["result"]
        )

    def test_example5(self):
        merge_sorted_array(
            self.tc["example5"]["nums1"],
            self.tc["example5"]["m"],
            self.tc["example5"]["nums2"],
            self.tc["example5"]["n"],
        )
        self.assertEqual(
            self.tc["example5"]["nums1"], self.tc["example5"]["result"]
        )

if __name__ == "__main__":
    unittest.main()
