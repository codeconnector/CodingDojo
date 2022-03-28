# Search Party

A diverse and quirky group of college students has wandered off the trail while hiking, and since this isn't the plot for a horror movie, a search team has been sensibly called into the area to find the missing students. Because this is a professional search team, there is a protocol in place for searching. Each search party is set down by helicopter at a particular (`lat`, `lon`) coordinate, whereupon they begin to search in a square spiral pattern. A square spiral is an arrangement of numbers increasing in a spiral pattern on a 2D square grid, like so:

```
17  16  15  14  13
18   5   4   3  12
19   6   1   2  11
20   7   8   9  10
21  22  23---> ...
```

As the communications liaison for the search party, it is your job to report the coordinates of the found students back to HQ for pickup if they are found. Unfortunately, your own GPS seems to be on the fritz, but you have an excellent sense of direction and distance and are able to keep track of how many 'square units' your search party has covered. You also happen to have a fairly advanced calculator on hand that you can program functions into. Since you know the coordinates where your team was dropped off, and have a pretty good idea of how many units you have covered, you should be able to calculate your current coordinates at any time. Your challenge is to write a function that will accept an initial set of coordinates and the number of your current square, and return the coordinates of that square.

## Business Rules/Errata

- Real issues of terrain and topology do not need to be considered, you may assume that your party is searching on an infinite flat expanse.
- You do not need to consider other search parties.
- Your function should accept a coordinate (in the form of `(lat, lon)` or `[lat, lon]`, depending on the language) and the number of your current square.
- Your function should return a coordinate (in the form of `(lat, lon)` or `[lat, lon]`, depending on the language) .
- Your search party will always head east from your initial position, then make only left turns to continue the spiral. So, your heading will be east, north, west, south, east, and so on...
- For the purpose of simplicity, you may treat `lat` as a row index (or `y` position) and `lon` as a column index (or `x` position).
- Square numbering always starts at one, and increases from there. You should THROW an error if given a number for a square that is less than one.

## Examples

```
current_location((0, 0), 5);   // (-1, -1) - up one, left one
current_location((10, 10), 5); // (9, 9)   - up one, left one
current_location((0, 0), 23);  // (2, 0)   - down two
current_location((5, 5), 13);  // (3, 7)   - up two, right two
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
