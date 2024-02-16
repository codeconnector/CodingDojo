import unittest
from typing import List


def contains_nearby_dups(nums: List[int], k: int) -> bool:
    for d in range(len(nums)):
        j = d + 1
        while j <= d + k and j < len(nums):
            if nums[d] == nums[j]:
                return True
            j += 1
    return False


class TestContainsNearbyDups(unittest.TestCase):
    """A good first test is to just return True and see what passes!"""

    def setUp(self):
        self.tc = {
            "example1": {"nums": [1, 2, 3, 1], "k": 3, "result": True},
            "example2": {"nums": [1, 0, 1, 1], "k": 1, "result": True},
            "example3": {"nums": [1, 2, 3, 1, 2, 3], "k": 2, "result": False},
            "tooShort": {"nums": [1], "k": 1, "result": False},
            "kIs0": {"nums": [1, 1, 1, 1, 1, 1], "k": 0, "result": False},
            "kIs0camel": {"nums": [1, 2, 1], "k": 0, "result": False},
            "long": {
                "nums": [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                "k": 10,
                "result": True,
            },
        }

    def test_example1(self):
        """Test the example case1."""
        self.assertEqual(
            contains_nearby_dups(self.tc["example1"]["nums"], self.tc["example1"]["k"]),
            True,
        )

    def test_example2(self):
        """Test the example case2."""
        self.assertEqual(
            contains_nearby_dups(self.tc["example2"]["nums"], self.tc["example2"]["k"]),
            True,
        )

    def test_example3(self):
        """Test the example case3."""
        self.assertEqual(
            contains_nearby_dups(self.tc["example3"]["nums"], self.tc["example3"]["k"]),
            False,
        )

    def test_too_short(self):
        """Test the case when there is only 1 number in nums."""
        self.assertEqual(
            contains_nearby_dups(self.tc["tooShort"]["nums"], self.tc["tooShort"]["k"]),
            False,
        )

    def test_kzero(self):
        """All k = 0 should be false."""
        self.assertEqual(
            contains_nearby_dups(self.tc["kIs0"]["nums"], self.tc["kIs0"]["k"]), False
        )

    def test_kzero_camel(self):
        """Test a false case when k is 0."""
        self.assertEqual(
            contains_nearby_dups(
                self.tc["kIs0camel"]["nums"], self.tc["kIs0camel"]["k"]
            ),
            False,
        )

    def test_alternate(self):
        """Test a false case when k is 0."""
        self.assertEqual(
            contains_nearby_dups(self.tc["long"]["nums"], self.tc["long"]["k"]), True
        )

    def tearDown(self):
        pass
