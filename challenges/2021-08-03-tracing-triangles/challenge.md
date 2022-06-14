# Tracing Triangles

You are given an array of arrays of integers, where each array corresponds to a row in a triangle of numbers. For example, `[[1], [2, 3], [1, 5, 1]]` represents the triangle:

```
  1
 2 3
1 5 1
```

We define a path in the triangle to start at the top and go down one row at a time to an adjacent value, eventually ending with an entry on the bottom row. For example, 1 -> 3 -> 5. The weight of the path is the sum of the entries.

Write a program that returns the weight of the maximum weight path.

## Business Rules/Errata

- The input will be a nested array of integer arrays.
- Each sub-array should be listed in order and include one more value than the previous sub-array (forming a triangle). If the input does not meet these criteria, return an error.
- If the input array is empty, return `0`.
- If the input array contains only a single sub-array, return the value in that sub-array. For example: `[[5]]` yields `5`.
- You do not need to return the path followed, simply the largest path weight.

## Examples

```
//   1
//  2 3
// 1 5 1

input = [[1], [2, 3], [1, 5, 1]]
longest_path(input)  // 9 (1 -> 3 -> 5)
```

```
//    6
//   4 4
//  1 2 1
// 5 4 3 2

input = [[6], [4, 4], [1, 2, 1], [5, 4, 3, 2]]
longest_path(input)  // 16, either (6 -> 4 -> 1 -> 5) or (6 -> 4 -> 2 -> 4)
```

## Tackling This Challenge

1. Make sure you've got the required software on your machine: [.NET Core 3.0+](https://dotnet.microsoft.com/download) and a text editor.
2. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
3. The challenge will be live-coded in our weekly Tusday meetup.
4. Run the tests to check your solution by navigating to this directory and running `./run-tests`.
5. The results of the live coding demo will be added to the GitHub repository as a mob solution. Please feel free to tackle this challenge in your own way/language and submit your solution to the repo using [this solutions guide in our wiki](https://github.com/codeconnector/CodingDojo/wiki#solutions).

## Requirements

- .NET Core 3.0+


