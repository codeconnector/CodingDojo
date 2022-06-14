// ### Level 1

// Start by modeling a `Block` and moving it at least one space up, down, left, or right. 

// - You'll be given the shell of a `Block` object (or data structure), you'll need to
//   decide what data to store in it to keep track of the block's location.
// - You will need to write the logic for a function (or class method) that will move
//   the block up, down, left, or right (no diagonal movement).
// - The tests will give the block's starting position as a list of the coordinates of
//   the squares the block is sitting on in (`row`, `col`) format. One coordinate
//   will indicate a block standing upright, two coordinates will indicate a block 
//   lying on its side.
// - The tests will give directions in the form of a single character: 'U', 'D', 'L', 
//   or 'R'.
// - The tests will expect a list of the coordinates the block is sitting on, in
//   (`row`, `col`) format. One coordinate for a block standing upright, two coordinates
//   for a block lying on its side.



class Block {
  //startPosition: array containing one or two arrays indicating starting coordinates
  constructor(startPosition) {
    this.startPosition = startPosition;
    this.currentPosition = startPosition
    this.tall = this.startPosition.length === 1;
    this.vertical = this.tall ? false : this.startPosition[0][1] === this.startPosition[1][1] 
    this.horizontal = this.tall ? false : this.startPosition[0][0] === this.startPosition[1][0]
  }

  moveDirection(direction){
    const row0 = this.currentPosition[0][0];
    const col0 = this.currentPosition[0][1];
    if(direction === 'U'){
      if(this.tall){
        this.vertical = true
        this.tall = false
        this.currentPosition = [ [row0 - 2, col0], [row0 - 1, col0] ]
        return this.currentPosition
      }
      else if(this.vertical){
        this.tall = true
        this.vertical = false
        this.currentPosition = [ [row0 - 1, col0] ]
        return this.currentPosition
      }
      else if(this.horizontal){
        this.currentPosition = [ [row0 - 1, col0], [row0 - 1, col0 + 1] ]
        return this.currentPosition
      }
    }
    else if(direction === 'D'){
      if(this.tall){
        this.vertical = true
        this.tall = false
        this.currentPosition = [ [row0 + 1, col0], [row0 + 2, col0] ]
        return this.currentPosition
      }
      else if(this.vertical){
        this.tall = true
        this.vertical = false
        this.currentPosition = [ [row0 + 2, col0] ]
        return this.currentPosition
      }
      else if(this.horizontal){
        this.currentPosition = [ [row0 + 1, col0], [row0 + 1, col0 + 1] ]
        return this.currentPosition
      }
    }
    else if(direction === 'L'){
      if(this.tall){
        this.horizontal = true
        this.tall = false
        this.currentPosition = [ [row0, col0 - 2], [row0, col0 - 1] ]
        return this.currentPosition
      }
      else if(this.vertical){
        this.currentPosition = [ [row0, col0 - 1], [row0 + 1, col0 - 1] ]
        return this.currentPosition
      }
      else if(this.horizontal){
        this.tall = true
        this.horizontal = false
        this.currentPosition = [ [row0, col0 - 1] ]
        return this.currentPosition
      }
    }
    else if(direction === 'R'){
      if(this.tall){
        this.horizontal = true
        this.tall = false
        this.currentPosition = [ [row0, col0 + 1], [row0, col0 + 2] ]
        return this.currentPosition
      }
      else if(this.vertical){
        this.currentPosition = [ [row0, col0 + 1], [row0 + 1, col0 + 1] ]
        return this.currentPosition
      }
      else if(this.horizontal){
        this.tall = true
        this.horizontal = false
        this.currentPosition = [ [row0, col0 + 2] ]
        return this.currentPosition
      }
    }
  }

  

  level1(direction) {// direction is of type string 
    return this.moveDirection(direction);
  }

  // ### Level 2

  // Time to take that block for a ride. Now, given a list of directions, move the block
  // around on an infinite flat grid and return the coordinates indicating the final 
  // direction.

  // - Keep using your Block object (or data structure) from level 1.
  // - Now, the tests will give directions as a list of 'U', 'D', 'L', or 'R' characters.
  // - The tests will expect a list of the coordinates the block is sitting on after
  //   following the list of directions, in (`row`, `col`) format. One coordinate for a
  //   block standing upright, two coordinates for a block lying on its side.

  level2(directionsArr) {
    directionsArr.forEach(e => {
      this.currentPosition = this.moveDirection(e);
    })
    return this.currentPosition;
  }

  // ### Level 3

  // Now that you can steer your block, it's time to start making it go where you want it
  // to go. You may continue to assume an infinite flat grid, but now you need to take a 
  // coordinate and return the list of directions you moved your block to get it there. You
  // should be able to identify a valid path from start to target, not necessarily the
  // shortest path.

  // - The level 3 tests will give you an initial block location and a target location, as
  //   coordinates in the same format used throughout this challenge.
  // - In keeping with the game that inspired this challenge, targets will alway be a single
  //   coordinate, and your block will need to stand upright on that grid space in order
  //   to pass the test.
  // - There are infinitely many paths that may be taken, considering the grid is an
  //   infinite flat expanse, but remember that the tests will need to run in a 
  //   reasonable amount of time.
  // - The tests will expect a list of characters representing the directions you moved,
  //   'U', 'D', 'L', or 'R'.

  level3(endPosition) {// endPosition is an array containing an array containing a row number and a column number (e. g. [[0, 0]])
    return;
  }


  // ### Level 4

  // It's time to strive for efficiency! To accomplish this level, you should be able to
  // identify the _shortest_ path from the block's start to the target.

  // - The inputs and outputs of your function should be the same as for level 3.
  // - There may be more than one shortest path to get to the goal, you only need to
  //   identify and return _one_ shortest path.
  // - The tests will expect a list of characters representing the directions you moved,
  //   'U', 'D', 'L', or 'R'.

  level4(endPosition) {// endPosition is an array containing an array containing a row number and a column number (e. g. [[0, 0]])
    return;
  }

  // ### Level 5

  // Ok, smart guy/gal, you can navigate over an infinite, flat, unobstructed expanse, but
  // how well does your block handle when there are obstacles? For this (final) level,
  // you'll be given a representation of a finite grid containing obstacles, and will need
  // to steer your block around those obstacles to the target. You'll also need to keep your
  // block within the bounds of the grid.

  // - You will need to parse a string into a grid representation. The tests will give a 
  //   string in the format ".....\n..x..\n.x...\x....\n...x.", where '.' represents an
  //   empty space, and 'x' represents an obstacle.
  // - Since the grid is now finite, you may assume that every coordinate not explicity
  //   included in your grid representation as 'empty' is impassable.
  // - You will continue to get a coordinate(s) for your block start and target space.
  // - The tests will continue to expect a list of characters representing the directions
  //   you moved to get to the target.

  level5(endPosition, gridString) {
    return;
  }

}

module.exports = { Block };

// const verticalBlock = new Block([[0, 0]])
// console.log(`${verticalBlock.level1('U')}`)
// console.log(`${verticalBlock.level2(['U', 'U', 'L', 'L', 'D', 'D', 'R', 'R'])}`)
