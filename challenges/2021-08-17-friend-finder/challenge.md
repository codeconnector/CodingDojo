# Friend Finder

A classroom consists of N students, whose friendships can be represented in an adjacency list. For example, the following describes a situation where 0 is friends with 1 and 2, 3 is friends with 6, and so on.

```
{0: [1, 2],
 1: [0, 5],
 2: [0],
 3: [6],
 4: [],
 5: [1],
 6: [3]} 
```

Each student can be placed in a friend group, which can be defined as the the smallest set of students such that no student in the group has any friends outside this group. For the example above, the friend groups would be {0, 1, 2, 5}, {3, 6}, {4}.

Given a friendship list such as the one above, determine the number of friend groups in the class.

## Business Rules/Errata

- ***Data Structure Required: Graphs*** - The input data structure may be described as an undirected graph, where each student (represented by their ID) is connected to each of their friends.
- Your input will be a dictionary (or HashMap, or similar structure) where the keys will be integers representing student ID numbers, and the values will be a list of integers representing the ID numbers of that student's friends.
- Each student will be represented as a key in the input, and all of that student's friends will be included in the associated value. You will not need to account for a partial listing of either.
- This challenge only requires you to calculate the number of friend groups, you do not need to return a list of groups with their members.

## Examples

```
friendList = {
  0: [1, 2], 1: [0, 5], 2: [0],
  3: [6]   , 4: []    , 5: [1],
  6: [3]
} 
friendGroups(friendList) // 3, groups {0, 1, 2, 5}, {3, 6}, {4}
```

```
friendList = {
  0: [1, 2], 1: [0, 2], 2: [0, 1, 3],
  3: [2, 4], 4: [3, 5], 5: [3, 4]
}
friendGroups(friendList) // 1, student 3 bridges the two groups
```

```
friendList = {
  0: [1], 1: [0], 2: [3], 3: [2],
  4: [5], 5: [4], 6: [7], 7: [6]
}
friendGroups(friendList) // 4, groups {0, 1}, {2, 3}, {4, 5}, {6, 7}
```

## Tackling This Challenge

1. Make sure you've got the required software on your machine: A JDK 11+
1. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
1. Checkout a new branch using `git checkout -b yourgithubusername-wip`.
1. Add your code to the solution file to make the puzzle function work as expected.
1. Confirm your solution by running tests. Execute the `run-tests` script (use `./run-tests` from the challenge root directory.
1. If you've passed all the tests, the `run-tests` script with help you commit it. Otherwise, try again to pass all tests.
1. Navigate to [GitHub](https://github.com/codeconnector/CodingDojo), and submit your pull request.
1. One of the CodingDojo maintainers will help you get your PR merged.

## Requirements

- JDK 11+
