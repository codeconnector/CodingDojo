# Limited Levenshtein Leap

Given a `start` word, and `end` word, and a "dictionary" of valid words, find the shortest transformation sequence from `start` to `end` such that only one letter is changed at each step of the sequence, and each transformed word exists in the dictionary. If there is no possible transformation, return NULL.

## Business Rules/Errata

- The "dictionary" is simply an unordered array of strings.
- The `start`, `stop`, and "dictionary" words will all be the same length and all lowercase.
- Your function should return the sequence of words that represent the transformations from start to end.

## Examples

### Example 1

```
start = "dog"
end = "cat"
dictionary = ["dot", "dop", "dat", "cat"]
findTransformSequence(start, end, dictionary)  // ["dog", "dot", "dat", "cat"]
```

### Example 2

```
start = "dog"
end = "cat"
dictionary = ["dot", "tod", "dat", "dar"]
findTransformSequence(start, end, dictionary)  // NULL
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
