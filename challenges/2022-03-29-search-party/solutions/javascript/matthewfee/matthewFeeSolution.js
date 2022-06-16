// # Search Party
//
// A diverse and quirky group of college students has wandered off the trail
// while hiking, and since this isn't the plot for a horror movie, a search
// team has been sensibly called into the area to find the missing students.
// Because this is a professional search team, there is a protocol in place
// for searching. Each search party is set down by helicopter at a
// particular (`lat`, `lon`) coordinate, whereupon they begin to search in a
// square spiral pattern. A square spiral is an arrangement of numbers
// increasing in a spiral pattern on a 2D square grid, like so:
//
// ```
// 17  16  15  14  13
// 18   5   4   3  12
// 19   6   1   2  11
// 20   7   8   9  10
// 21  22  23---> ...
// ```
//
// As the communications liaison for the search party, it is your job to
// report the coordinates of the found students back to HQ for pickup if
// they are found. Unfortunately, your own GPS seems to be on the fritz, but
// you have an excellent sense of direction and distance and are able to
// keep track of how many 'square units' your search party has covered. You
// also happen to have a fairly advanced calculator on hand that you can
// program functions into. Since you know the coordinates where your team
// was dropped off, and have a pretty good idea of how many units you have
// covered, you should be able to calculate your current coordinates at any
// time. Your challenge is to write a function that will accept an initial
// set of coordinates and the number of your current square, and return the
// coordinates of that square.
//
// ## Business Rules/Errata
//
// - Real issues of terrain and topology do not need to be considered, you
//   may assume that your party is searching on an infinite flat expanse.
// - You do not need to consider other search parties.
// - Your function should accept a coordinate (in the form of `(lat, lon)`
//   or `[lat, lon]`, depending on the language) and the number of your
//   current square.
// - Your function should return a coordinate (in the form of `(lat, lon)`
//   or `[lat, lon]`, depending on the language) .
// - Your search party will always head east from your initial position,
//   then make only left turns to continue the spiral. So, your heading will
//   be east, north, west, south, east, and so on...
// - For the purpose of simplicity, you may treat `lat` as a row index (or
//   `y` position) and `lon` as a column index (or `x` position).
// - Square numbering always starts at one, and increases from there. You
//   should return an error if given a number for a square that is less than
//   one.
//
// ## Examples
//
// ```
// current_location((0, 0), 5);   // (-1, -1) - up one, left one
// current_location((10, 10), 5); // (9, 9)   - up one, left one
// current_location((0, 0), 23);  // (2, 0)   - down two
// current_location((5, 5), 13);  // (3, 7)   - up two, right two
// ```

function currentLocation(start, square) {
  //Type your solution here

  //  64
  //  37  36  35  34  33  32  31
  //  38  17  16  15  14  13  30
  //  39  18   5   4   3  12  29
  //  40  19   6   1   2  11  28
  //  41  20   7   8   9  10  27
  //  42  21  22  23   24 25  26
  //  43  44  45  46   47 48  49

  let currentSquare = 1
  let stepDistance = 1
  let y = start[0]
  let x = start[1]

  if (square < 1) {
    throw new Error("Square was less than 1")
  }

  if (square === 1) {
    return start
  }

  while (currentSquare < square) {
    //move right
    let remainingDistance = square - currentSquare

    if (stepDistance > remainingDistance) {
      x += square - currentSquare
      return [y, x]
    }

    x += stepDistance
    currentSquare += stepDistance

    //move up
    y -= stepDistance
    currentSquare += stepDistance

    if (stepDistance > square - currentSquare) {
      y -= square - currentSquare
      return [y, x]
    }

    stepDistance++

    //move left

    if (stepDistance > square - currentSquare) {
      x -= square - currentSquare
      return [y, x]
    }

    x -= stepDistance
    currentSquare += stepDistance

    //move down

    if (stepDistance > square - currentSquare) {
      y += square - currentSquare
      return [y, x]
    }

    y += stepDistance
    currentSquare += stepDistance

    stepDistance++
  }

  return [y, x]
}

module.exports = { currentLocation }
