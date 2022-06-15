# Weird Column Naming

Spreadsheets often use an alphabetical encoding for naming columns: "A", "B", "C", ..., "AA", "AB", ..., "ZZ", "AAA", "AAB", ....

Given a column number, return its alphabetical column id. For example, given 1, return "A". Given 27, return "AA".

## Business Rules/Errata

- Your function should take an unsigned integer greater than 0. Return an error if a number 0 or less is given.
- Hint: Note that the format "A", "B", "C", ..., "AA", "AB", ..., "ZZ", "AAA", "AAB", .... does not support the concept of "zero".
- This  challenge should be attempted with at Test-Driven Development (TDD) methodology. For more information on TDD, see [this video](https://www.youtube.com/watch?v=llaUBH5oayw).

## Examples

```
to_spreadsheet_colname(1);     // "A"
to_spreadsheet_colname(27);    // "AA"
to_spreadsheet_colname(52);    // "AZ"
to_spreadsheet_colname(287);   // "KA"
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