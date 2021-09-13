# Fast Peak Picker

Given a array that's sorted but rotated at some unknown pivot, in which all elements are distinct, find the "peak" element. An element is considered a peak if it is greater than both its left and right neighbors. For example, `[1, 2, 3, 2, 1]` has a peak element of `3`.

## Business Rules/Errata

- The input will always consist of an array of numbers containing at least one element.
- The first element in the array is always considered to be "larger" than the (non-existent) element to its left.
- The last element in the array is always considered to be "larger" than the (non-existent) element to its right.
- It is possible to solve this problem in less than O(n) time, attempt to find a more efficient solution.

## Examples

```
pick_peak([1, 2, 3, 2, 1]);  // 3
pick_peak([1, 2, 3, 4, 5]);  // 5
pick_peak([5, 4, 3, 2, 1]);  // 5
pick_peak([1]);              // 1
```

## Tackling This Challenge

1. Make sure you've got the required software on your machine: npm 7.9.0+ and a text editor.
2. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
3. Navigate to this directory and run `npm install` to initialize the project.
4. The challenge will be live-coded in our weekly Tusday meetup in the `solution.js` file.
5. Run the tests to check your solution by navigating to this directory and running `./run-tests`.
6. The results of the live coding demo will be added to the GitHub repository as a mob solution. Please feel free to tackle this challenge in your own way/language and submit your solution to the repo using [this solutions guide in our wiki](https://github.com/codeconnector/CodingDojo/wiki#solutions).

## Requirements

- npm 7.9.0+

