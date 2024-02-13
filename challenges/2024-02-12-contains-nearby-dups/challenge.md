# Contains Nearby Duplicates

Given an integer array `nums` and an integer `k`, return `True` if there are two distinct indices `i` and `j` in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`.

##Business Rules/Errata
- The numbers are not sorted
- `1 <= len(nums) <= 10000` 
- `0 <= k <= 10000`
- `-1000000000 <= nums[i] <= 1000000000`

Example 1:
```
nums = [1, 2, 3, 1]
k = 3
contains_nearby_dups(nums, k) -> True
explanation:
  nums[0] == 1
  nums[3] == 1
  abs(0 - 3) == 3 == k
```
Example 2:
```
nums = [1, 0, 1, 1]
k = 1
contains_nearby_dups(nums, k) -> True
explanation:
  nums[2] == 1
  nums[3] == 1
  abs(2 - 3) == 1 == k
```
Example 3:
```
nums = [1, 2, 3, 1, 2, 3]
k = 2
contains_nearby_dups(nums, k) -> False
explanation:
  all values are spaced 3 indices apart
```

## Tackling This Challenge
1. Make sure you've got required software on your machine: python 3.x
2. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
3. Checkout a new branch using `git checkout -b yourgithubusername-wip`.
4. Run a test on the `solution.py` file in this directory to make sure testing works as expected: `python3 -m unittest solution.py`
5. Add your code to the solution file to make the puzzle function work as expected (solve all test cases).
6. Navigate to [GitHub](https://github.com/codeconnector/CodingDojo), and submit your pull request.
7. One of the CodingDojo maintainers will help you get your PR merged.


