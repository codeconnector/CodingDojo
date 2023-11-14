# Finding Common Elements

Create a function that takes two "sorted" arrays of numbers and returns an array of numbers which are common to both the input arrays.

## Business Rules/Errata

- You can expect the arrays to be sorted
- Arrays do not have to be the same length
- The output array should be sorted and contain no duplicates
- This problem should be solved in O(n+m) time where n is the length of the first input array and m is the length of the second input array

## Examples
```
commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) -> [3]

commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) -> [1, 3, 4, 7]

commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) -> [1, 2, 4, 5]

commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) -> []
```

## Tackling This Challenge
1. Make sure you've got the required software on your machine: npm 7.9.0+ and a text editor.
2. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
3. Navigate to this directory and run `npm install` to initialize the project.
4. The challenge will be live-coded in our weekly Tuesday meetup in the `solution.js` file.
5. Run the tests to check your solution by navigating to this directory and running `./run-tests`.
6. The results of the live coding demo will be added to the GitHub repository as a mob solution. Please feel free to
tackle this challenge in your own way/language and submit your solution to the repo using [this solutions guide in our wiki](https://github.com/codeconnector/CodingDojo/wiki#solutions).

## Requirements

- npm 7.9.0+
