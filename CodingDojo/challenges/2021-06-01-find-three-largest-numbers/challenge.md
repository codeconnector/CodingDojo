# Find Three Largest Numbers

Write a function that takes in an array of at least three integers and, without sorting the input array, returns a sorted array of the three largest integers in the input array. The function should return duplicate integers if necessary.

## Business Rules/Errata

- The input array should have at least three integers. If it does not, you should return a null value.
- You may not sort the input array
- The function should handle duplicate integers; for example `[10, 5, 9, 10, 12]` should return `[10, 10, 12]`
- Constant space -> you will return a new array of 3 integers, and this will be the only new data structure you create.
- Linear time -> you should solve this problem by only passing through the array a single time.

## Examples

```
findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]) -> [18, 141, 541]
findThreeLargestNumbers([11, -7, 5]) -> [-7, 5, 11]
findThreeLargestNumbers([1]) -> Null
```

## Tackling this Challenge

1. The challenge will be live-coded in our weekly Tusday meetup in the Solution.java file.
2. Run the tests to check your solution by navigating to this directory and running `./run-tests.sh`.
3. The results of the live coding demo will be added to the GitHub repository as a mob solution. Please feel free to tackle this challenge in your own way/language and submit your solution to the repo using [this solutions guide in our wiki](https://github.com/codeconnector/CodingDojo/wiki#solutions).

## Requirements

- JDK 11+
