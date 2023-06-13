import pytest

from solution import solve

# List of test cases in the form [(input, output)]
TEST_CASES = [
    ("0. pop 0", "1 imix 0"),
    ("10. zac 0", "3 chuen 0"),
]


@pytest.mark.parametrize("input,expected", TEST_CASES)
def test_solver(input, expected):
    assert solve(input) == expected
