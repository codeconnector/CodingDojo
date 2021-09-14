# Zero Point

Given a linked list, remove all consecutive nodes that sum to zero. 
For example, suppose you are given the input `3 -> 4 -> -7 -> 5 -> -6 -> 6`. In this case, you should first remove `3 -> 4 -> -7`, then `-6 -> 6`, leaving only `5`.

## Business Rules/Errata

- ***Data Structure Required: Linked List***
- Your input will be a linked list, where each node represents either a positive or negative integer.
- Your return value should be in the form of a linked list containing only nodes that are not part of a consecutive sequence that sums to zero.
- If your input linked list does not contain any nodes that qualify to be returned (such as `1 -> -1`), return `NULL` (or your language's equivalent).
- Your input will contain at least one node with a value.

## Examples

```
input = 1 -> 2 -> 3 -> 4 -> -4 -> -3 -> 5
remove_zero_sequences(input)  // 1 -> 2 -> 5

input = 2 -> -2 -> 3 -> 4 -> 5 -> -9
remove_zero_sequences(input)  // 3

input = 1 -> -10 -> 5 -> 4
remove_zero_sequences(input)  // NULL
```
## Tackling This Challenge

1. Make sure you've got the required software on your machine: python 3.7+
2. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
3. Navigate to this directory and run `npm install` to initialize the project.
4. The challenge will be live-coded in our weekly Tusday meetup in the `solution.js` file.
5. Run the tests to check your solution by navigating to this directory and running `./run-tests`.
6. The results of the live coding demo will be added to the GitHub repository as a mob solution. Please feel free to tackle this challenge in your own way/language and submit your solution to the repo using [this solutions guide in our wiki](https://github.com/codeconnector/CodingDojo/wiki#solutions).

## Requirements

- python 3.7+
