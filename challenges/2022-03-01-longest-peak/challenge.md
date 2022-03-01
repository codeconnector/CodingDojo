# Longest Peak

Write a function that takes in an array of integers and returns the length of the longest peak in the array.

A peak is defined as adjacent integers in the array that are *strictly* increasing until they reach a tip (the highest value in the peak), at which point they become *strictly* decreasing. At least three integers are required to form a peak. 

I will make this abundantly clear in the examples.

## Business Rules/Errata

1. A peak *must* increase and then decrease. 
2. The input can be an empty array, and must be an array of integers.
2. If equal value numbers appear in the run of a peak, the peak is stopped and restarted.
3. A peak must contain at least 3 numbers, such as 1,2,1
4. Numbers can be positive or negative.
5. *Bonus:* Optimal time and space: O(n) time | O(1) space - where n is the length of the input array.

## Examples
```
longest_peak([5, 4, 3, 2, 1]) -> 0 # all decreasing
longest_peak([1, 2, 3, 4, 5]) -> 0 # all increasing
longest_peak([5, 4, 3, 2, 1, 2, 10, 12]) -> 0 # all decreasing, then all increasing
longest_peak([]) -> 0 # empty input check mandatory :D
longest_peak([1, 3, 2]) -> 3 # normal peak
longest_peak([1, 2, 3, 4, 5, 1]) -> 6 # peak ends on last number
longest_peak([2, 2, 3, 2]) -> 3 # repeat at the beginning
longest_peak([1, 2, 3, 2, 1, 1]) -> 5 # repeat at the end
longest_peak([1, 2, 3, 3, 2, 1]) -> 0 # equality at peak tip, 0 is returned
longest_peak([1, 1, 1, 2, 3, 10, 12, -3, 2, 3, 45, 800, 99, 98, 0, -1, 2, 3, 4, 5, 0, -1]) -> 9 # peak in the middle -3, 2, 3, 45, 800, 99, 98, 0, -1
```

## Tackling This Challenge

1. Make sure you've got the required software on your machine: npm 7.9.0+ and a text editor.
2. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
3. Navigate to this directory and run `npm install` to initialize the project.
4. The challenge will be live-coded in our weekly Tuesday meetup in the `solution.js` file.
5. Run the tests to check your solution by navigating to this directory and running `./run-tests`.
6. The results of the live coding demo will be added to the GitHub repository as a mob solution. Please feel free to tackle this challenge in your own way/language and submit your solution to the repo using [this solutions guide in our wiki](https://github.com/codeconnector/CodingDojo/wiki#solutions).

## Requirements

- npm 7.9.0+