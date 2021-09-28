# Minimum Impossible Sum

Given a sorted array of integers, find the smallest positive integer that is not the sum of a subset of the array.

## Business Rules/Errata

- Your input will be an array of integers, sorted in ascending order (smallest to largest).
- Your input will always contain at least one number.
- Your answer should be a positive integer larger than zero.
- You do not need to account for integer overflow (i.e., the answer should always be a 32-bit positive number,  in the range from 0 to 4,294,967,295).
- Bonus: Can you solve this challenge in linear (O(n)) time?

## Examples

```
min_impossible_sum([5]) // 1
min_impossible_sum([1]) // 2
min_impossible_sum([1, 2, 3, 10]) // 7
min_impossible_sum([1, 2, 3, 7, 10]) // 24

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