# Sort Window

Given an array of integers out of order, determine the bounds of the smallest window that must be sorted in order for the entire array to be sorted. For example, given [3, 7, 5, 6, 9], you should return (1, 3).

## Business Rules/Errata

- Your input will be an array of unsigned integers.
- An empty array is considered to be sorted.
- You should return an array, with the first element containing the 'start' of the window, and the second element containing the 'end' of the window.
- If your input array is already sorted, return an empty array.
- Note: Some of the elements inside the unsorted window may actually be in the correct order for the final sorted array, like the `2` in `[3, 2, 1]`.

## Examples

```
sort_window([3, 7, 5, 6, 9]) // [2, 4]
sort_window([1, 2, 6, 5, 4]) // [3, 5]
sort_window([3, 2, 1, 4, 5]) // [1, 3]
sort_window([5, 4, 3, 2, 1]) // [1, 5]
sort_window([1, 2, 3, 4, 5]) // []
sort_window([1]) // []
sort_window([]) // []
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

