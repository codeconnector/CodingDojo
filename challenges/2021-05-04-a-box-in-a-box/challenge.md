# A Box in a Box

Given a pair of rectangles, determine whether one of the rectangles is completely contained within the other rectangle. You will be given each rectangles top-left coordinate in an x/y plane, the rectangle's width, and the rectangle's height. One rectangle is "completely contained" by a rectangle that completely covers it, if viewed from above the plane. This puzzle should be solved using an Object-Oriented approach.

## Business Rules/Errata

- ***Data Structure Required: Rectangle*** You should produce and compare `Rectangle` objects in your solution, not the raw rectangle measurements.
- The rectangle dimensions will be given in an array, in the format [(top left x coordinate), (top left y coordinate), (width), (height)].
- The units of width and height are irrelevant and can be ignored.
- **The coordinate system for this challenge is 2-dimensional, with x increasing from left to right, and y increasing from top to bottom.**
- Your final result should include a function that, given two sets of rectangle dimensions, returns a boolean value,
- Your function should return `false` if the two rectangles only partially overlap.


## Tackling This Challenge

1. Make sure you've got the required software on your machine: npm 7.9.0+ and a text editor.
1. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
1. Navigate to the '2021-05-04-a-box-in-a-box' directory and run `npm install` to initialize the project.
1. Checkout a new branch using `git checkout -b yourgithubusername-wip`.
1. Add your code to the 'solution.js' file to make the `rectanglesOverlap` function work as expected.
1. Confirm your solution by running tests. Execute the `test-it.sh` script (use `./test-it.sh` from the challenge root directory.
1. If you've passed all the tests, the `test-it.sh` script will instruct you how to commit it. Otherwise, try again to pass all tests.
1. Navigate to [GitHub](https://github.com/codeconnector/CodingDojo), and submit your pull request.
1. One of the CodingDojo maintainers will help you get your PR merged.

## Requirements

- npm 7.9.0+

