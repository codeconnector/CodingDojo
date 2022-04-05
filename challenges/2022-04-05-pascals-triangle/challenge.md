# Pascal's triangle

Given an integer `row`, return that row of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it, as shown here:

```
          1
        1   1
      1   2  1
     1  3   3  1
    1  4  6   4  1
```

## Business Rules/Errata

- `row` will be between 0 and 30, inclusive.
- Your function should return an array of integers with the numbers of the specified row in the correct order. 
- The triangle is zero-indexed, meaning that the tip of the triangle is row `0`

## Examples

### Example 1:
```
Input: 4
Output: [1,4,6,4,1]
```

### Example 2:
```
Input: 0
Output: [1]
```

### Example 3:
```
Input: 10
Output: [1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1]
```

### Example 4:
```
Input: 1
Output: [1, 1]
```

### Example 5:
```
Input: 2
Output: [1, 2, 1]
```

### Example 6:
```
Input: 3
Output: [1, 3, 3, 1]
```

### Bonus Challenge
Given the number of rows, return the ENTIRE triangle, represented as a two dimensional array.

## Tackling This Challenge

1. Make sure you've got the required software on your machine: npm 7.9.0+ and a text editor.
2. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
3. Navigate to this directory and run `npm install` to initialize the project.
4. The challenge will be live-coded in our weekly Tuesday meetup in the `solution.js` file.
5. Run the tests to check your solution by navigating to this directory and running `./run-tests`.
6. The results of the live coding demo will be added to the GitHub repository as a mob solution. Please feel free to tackle this challenge in your own way/language and submit your solution to the repo using [this solutions guide in our wiki](https://github.com/codeconnector/CodingDojo/wiki#solutions).

## Requirements

- npm 7.9.0+
