# Class Photos
It's photo day at the local school, and you are the photographer assigned to take class photos. 
The class that you'll be photographing has an even number of students, and all these students are wearing red or blue shirts. 
In fact, exactly half of the class is wearing red shirts, and the other half is wearing blue shirts (wow!). 
You're responsible for arranging the students in two rows before taking the photo. 

## Rules
Each row should contain the same number of the students and should adhere to the following guidelines:
 All students wearing red shirts must be in the same row
 All students wearing blue shirts must be in the same row
 Each student in the back row must be strictly taller than the student directly in front of them in the front row
 You're given two input arrays: one containing the heights of all students with red shirts and another one containing the heights of all the students with blue shirts. The arrays will always have the same length, and each height will be a positive integer. 
 
 Write a function that returns whether or not a class photo that follows the stated guidelines can be taken.
 Note: you can assume that each class has at least 2 students.

## Example

### input
```
redHeights = [5, 8, 1, 3, 4]
blue_Heights = [6, 9, 2, 4, 5]
```
### output
`true`

## Tackling This Challenge
1. Make sure you've got the required software on your machine: npm 7.9.0+ and a text editor.
2. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
3. Navigate to this directory and run `npm install` to initialize the project.
4. The challenge will be live-coded in our weekly Tuesday meetup in the `solution.js` file.
5. Run the tests to check your solution by navigating to this directory and running `./run-tests`.
6. The results of the live coding demo will be added to the GitHub repository as a mob solution. Please feel free to
tackle this challenge in your own way/language and submit your solution to the repo using [this solutions guide in our wiki](https://github.com/codeconnector/CodingDojo/wiki#solutions).

## Requirements

- npm 7.9.0+