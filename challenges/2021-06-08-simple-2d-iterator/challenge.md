# Simple 2D Iterator

Implement a class (or struct, or object) representing a 2-dimensional iterator. This class should be initialized with a 2-dimensional (nested) array, and should implement two methods:

`next()` returns the next element in the array of arrays
- `has_next()` returns true/false indicating whether the iterator still has elements left

## Business Rules/Errata

- ***Data Structure Required: 2D Array***
- Your class will need a constructor method (or other strategy) to accept a 2-dimensional array and produce an instance of your class.
- You should not `flatten` or otherwise copy data out of the 2D array into another data structure.
- If you call `next()` on your class, and there are no elements left to return, return `null` (or some other indicator that the iterator has been exhausted).

## Examples

### Example 1

```
instance = new NestedIterator([[1, 2], [3], [], [4, 5, 6]]);
instance.next()  // 1
instance.next()  // 2
instance.next()  // 3
instance.has_next()  // true
instance.next()  // 4
instance.next()  // 5
instance.next()  // 6
instance.has_next()  // false
instance.next()  // NULL
```

### Example 2

```
instance = new NestedIterator([[9], [1, 7, 5], [2, 9], []]);
instance.next()  // 9
instance.next()  // 1
instance.next()  // 7
instance.has_next()  // true
instance.next()  // 5
instance.next()  // 6
instance.next()  // 9
instance.has_next()  // false
instance.next()  // NULL
```

## Tackling This Challenge

1. Make sure you've got the required software on your machine: npm 7.9.0+ and a text editor.
2. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
3. Navigate to this directory and run `npm install` to initialize the project.
4. The challenge will be live-coded in our weekly Tusday meetup in the `solution.js` file.
5. Run the tests to check your solution by navigating to this directory and running `./run-tests.sh`.
6. The results of the live coding demo will be added to the GitHub repository as a mob solution. Please feel free to tackle this challenge in your own way/language and submit your solution to the repo using [this solutions guide in our wiki](https://github.com/codeconnector/CodingDojo/wiki#solutions).

## Requirements

- npm 7.9.0+

