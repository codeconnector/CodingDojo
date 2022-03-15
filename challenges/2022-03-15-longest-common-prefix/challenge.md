# Longest Common Prefix

Given a list of strings, return a string containing the longest prefix in common amongst all the provided strings. 

## Business Rules/Errata

- Your input will be a list of strings, and will contain at least one string.
- Each string will contain one or more characters.
- Your function should return a string.
- In cases where no common prefix exists, return an empty string.

## Examples

```
strings = ["flower", "flowed", "flicker"]
longest_common_prefix(strings) // "fl"
```

```
strings = ["pickle", "pickup", "pico", "picture"]
longest_common_prefix(strings) // "pic"
```

```
strings = ["butcher", "baker", "candlestick maker"]
longest_common_prefix(strings) // ""
```

## Tackling This Challenge

1. Make sure you've got the required software on your machine: npm 7.9.0+ and a text editor.
2. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
3. Navigate to this directory and run `npm install` to initialize the project.
4. The challenge will be live-coded in our weekly Tuesday meetup in the `solution.js` file.
5. Run the tests to check your solution by navigating to this directory and running `./run-tests`.
6. The results of the live coding demo will be added to the GitHub repository as a mob solution. Please feel free to tackle this challenge in your own way/language and submit your solution to the repo using [this solutions guide in our wiki](https://github.com/codeconnector/CodingDojo/wiki#solutions).

## Requirements

- npm 7.9.0+
