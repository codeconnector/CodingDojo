# Merge Sorted Array

You are given two integer arrays, `nums1` and `nums2`, sorted in ascending order [1, 2, 3, 4, 5], and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

Merge `nums1` and `nums2` intoa  single array sorted in ascending order.

The final sorted array should not be returned by the function, but instead should be stored __inside the array__ `nums1`. To accommodate this, `nums1` has been given enough space (length `m` + `n`) to store both arrays.

## Business Rules/Errata
- `len(nums1) == m + n`
- `len(nums2) == n`
- `0 <= m, n <= 200`
- `1 <= m + n <= 200`
- `-10^9 <= nums1[i], nums2[j] <= 10^9`
- Optimization: Can you come up with an algorithm that runs in `O(m + n)` time?

### Example 1
```
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6] expanded out:
nums1 = [1, 2, _, 3, _, _] 
nums2 = [_, _, 2, _, 5, 6]
mergeSorted(nums1, m, nums2, n) -> [1, 2, 2, 3, 5, 6]
```

### Example 2
```
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [] expanded out:
nums1 = [1]
nums2 = [_]
mergeSorted(nums1, m, nums2, n) -> [1]
```

### Example 3
```
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
```


## Tackling This Challenge
1. Make sure you've got required software on your machine: python 3.x
2. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
3. Checkout a new branch using `git checkout -b yourgithubusername-wip`.
4. Run a test on the `solution.py` file in this directory to make sure testing works as expected: `python3 -m unittest solution.py`
5. Add your code to the solution file to make the puzzle function work as expected (solve all test cases).
6. Navigate to [GitHub](https://github.com/codeconnector/CodingDojo), and submit your pull request.
7. One of the CodingDojo maintainers will help you get your PR merged.
