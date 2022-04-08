# Happy Anniversary, Coding Dojo!

In honor of one year of coding challenges, meetups, struggles, and successes, the
Coding Dojo team wants to celebrate with YOU! And, in proper Coding Dojo style, we'll
be celebrating with a bigger, badder, more gnarly challenge than ever before. In fact,
our challenge comes in _5_ different levels of difficulty, each of which builds on the
last. Unlike our normal sessions, we're releasing the challenge early and inviting all
comers to submit their best PR, which we will review during the meetup. Get stuck on 
level 3? Submit a PR! Wipe the floor with level 5? Submit a PR! Can't figure out how
to get the tests to run? Submit a PR! 

But wait, there's more! We won't be looking at solutions in a single language (that
would be too easy), we want submissions in _any_ programming language we can get. In
this folder, you'll find testing setups for _many_ different languages (and you're 
welcome to PR your own). Like all of our sessions, you're invited to tackle this 
puzzle in any language you'd like.

Each testing setup includes all you need to get started on your own solution, including
specific setup instructions for that language/environment and test cases designed to
check your work. If you have questions, come ask [HERE](link to discussions). And now,
without futher delay: the challenge!

## Do a Block-Flip!

Inspired by [Bloxorz](https://www.coolmathgames.com/0-bloxorz).

The end goal for this challenge is to model and pilot a three-dimensional rectangle
around a square grid. Exciting, right? Thought so.

### Level 1

Start by modeling a `Block` and moving it at least one space up, down, left, or right. 

- You'll be given the shell of a `Block` object (or data structure), you'll need to
  decide what data to store in it to keep track of the block's location.
- You will need to write the logic for a function (or class method) that will move
  the block up, down, left, or right (no diagonal movement).
- The tests will give the block's starting position as a list of the coordinates of
  the squares the block is sitting on in (`row`, `col`) format. One coordinate
  will indicate a block standing upright, two coordinates will indicate a block 
  lying on its side.
- The tests will give directions in the form of a single character: 'U', 'D', 'L', 
  or 'R'.
- The tests will expect a list of the coordinates the block is sitting on, in
  (`row`, `col`) format. One coordinate for a block standing upright, two coordinates
  for a block lying on its side.

#### Examples

```
Block @ (3, 3) standing upright > move right to (3, 4), (3, 5)

    1 2 3 4 5         1 2 3 4 5
  1 . . . . .   >   1 . . . . .
  2 . . . . .   >   2 . . . . .
  3 . . # . .   >   3 . . . # #
  4 . . . . .   >   4 . . . . .
  5 . . . . .   >   5 . . . . .


Block @ (2, 2), (2, 3) lying horizontally > move down to (3, 2), (3, 3)

    1 2 3 4 5         1 2 3 4 5
  1 . . . . .   >   1 . . . . .
  2 . # # . .   >   2 . . . . .
  3 . . . . .   >   3 . # # . .
  4 . . . . .   >   4 . . . . .
  5 . . . . .   >   5 . . . . .


Block @ (2, 2), (3, 2) lying vertically > move up to (2, 1)

    1 2 3 4 5         1 2 3 4 5
  1 . . . . .   >   1 . # . . .
  2 . # . . .   >   2 . . . . .
  3 . # . . .   >   3 . . . . .
  4 . . . . .   >   4 . . . . . 
  5 . . . . .   >   5 . . . . .
```

### Level 2

Time to take that block for a ride. Now, given a list of directions, move the block
around on an infinite flat grid and return the coordinates indicating the final 
direction.

- Keep using your Block object (or data structure) from level 1.
- Now, the tests will give directions as a list of 'U', 'D', 'L', or 'R' characters.
- The tests will expect a list of the coordinates the block is sitting on after
  following the list of directions, in (`row`, `col`) format. One coordinate for a
  block standing upright, two coordinates for a block lying on its side.

#### Examples

```
Block @ (3, 3) > move up, down, down, left, up, right, right to (5, 3)

    1 2 3 4 5         1 2 3 4 5         1 2 3 4 5         1 2 3 4 5  
  1 . . . . .   >   1 . . # . .   >   1 . . . . .   >   1 . . . . .  >
  2 . . . . .   >   2 . . # . .   >   2 . . . . .   >   2 . . . . .  >
  3 . . # . .   >   3 . . . . .   >   3 . . # . .   >   3 . . . . .  >
  4 . . . . .   >   4 . . . . .   >   4 . . . . .   >   4 . . # . .  >
  5 . . . . .   >   5 . . . . .   >   5 . . . . .   >   5 . . # . .  >


    1 2 3 4 5         1 2 3 4 5         1 2 3 4 5         1 2 3 4 5  
  1 . . . . .   >   1 . . . . .   >   1 . . . . .   >   1 . . . . .
  2 . . . . .   >   2 . . . . .   >   2 . . . . .   >   2 . . . . .
  3 . . . . .   >   3 . # . . .   >   3 . . # # .   >   3 . . . . #
  4 . # . . .   >   4 . . . . .   >   4 . . . . .   >   4 . . . . .
  5 . # . . .   >   5 . . . . .   >   5 . . . . .   >   5 . . . . .
```

