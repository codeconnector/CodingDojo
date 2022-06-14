# Hidden Digits

You are given a string `time` in the form of `hh:mm`, where some of the digits in the string are _hidden_ (represented by `?`).

Return the _**LATEST valid time**_ you can get from `time` by replacing the hidden digits.

The valid times are those inclusively between `00:00` and `23:59`.

## Business Rules/Errata

- `time` is a string in the format `hh:mm`
- It is guaranteed that you can produce a valid time from the given string.
- Your function should return a string.

## Examples

```
hiddenDigits("2?:?0") -> "23:50"
hiddenDigits("0?:3?") -> "09:39"
hiddenDigits("?7:?1") -> "17:51"
hiddenDigits("1?:22") -> "19:22"
hiddenDigits("00:00") -> "00:00"
hiddenDigits("??:??") -> "23:59"
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
