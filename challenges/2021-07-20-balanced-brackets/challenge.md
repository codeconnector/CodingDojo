## Balanced Brackets

Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.
Given the string "([)]" or "((()", you should return false.

## Business Rules/Errata

- The only characters considered to be 'brackets' are `(`, `)`, `[`, `]`, `{`, and `}`.
- Your input will always be a string.
- An empty string is considered balanced (return true).
- **Your string may contain characters that are not brackets.**

## Examples

```
balanced_brackets("[[]]({}[])");   // true
balanced_brackets("[[({}[])");     // false
balanced_brackets("");             // true
balanced_brackets("(5 * 3) + 4");  // true
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

