use std::cmp::PartialEq;

#[derive(Debug, Copy, Clone)]
/// Represents the position of the Block, for testing purposes. Feel free
/// to use another coordinate representation for the challenge if you like,
/// just remember to convert back to `BlockPosition` for the tests.
enum BlockPosition {
    Tall((i32, i32)),
    Wide([(i32, i32); 2]),
}

/// Equality operations for `BlockPosition`, implemented for you. You're welcome.
/// Note, order does not matter for 'Wide' positions, such that 
/// [(1, 1), (2, 2)] == [(2, 2), (1, 1)]
impl PartialEq for BlockPosition {
    fn eq(&self, other: &Self) -> bool {
        use BlockPosition::*;
        match (self, other) {
            (Tall(l), Tall(r)) => l == r,
            (Wide(l), Wide(r)) => l == r || (l[1] == r[0] && l[0] == r[1]),
            _ => false,
        }
    }
}

//------------------------------------------------------------------------------
//| LEVEL ONE
//|
//| Start by modeling a `Block` and moving it at least one space up, down, left,
//| or right. 
//| 
//| - You'll be given the shell of a `Block` object (or data structure), you'll
//|   need to decide what data to store in it to keep track of the block's
//|   location.
//| - You will need to write the logic for a function (or class method) that will
//|   move the block up, down, left, or right (no diagonal movement).
//| - The tests will give the block's starting position as a list of the coordinates
//|   of the squares the block is sitting on in (`row`, `col`) format. One coordinate
//|   will indicate a block standing upright, two coordinates will indicate a block 
//|   lying on its side.
//| - The tests will give directions in the form of a single character: 'U', 'D',
//|   'L', or 'R'.
//| - The tests will expect a list of the coordinates the block is sitting on, in
//|   (`row`, `col`) format. One coordinate for a block standing upright, two
//|   coordinates
//|   for a block lying on its side.
//------------------------------------------------------------------------------

#[derive(Debug)]
struct Block {
    // Create fields here, as needed
    position: BlockPosition,
}

impl Block {
    // Add functions for the `Block` struct here
    fn new(position: BlockPosition) -> Self {
        Block { position }
    }
}

fn level_one(block: &mut Block, direction: char) -> BlockPosition {
    // This function will be called for tests. Feel free
    // to write other functions to handle the logic for this
    // level, but use this function as your 'main' function.
    unimplemented!()
}

#[cfg(test)]
mod level_one_tests {
    use super::*;

    #[test]
    fn can_move_once_when_tall() {
        let start = BlockPosition::Tall((0, 0));
        let left = BlockPosition::Wide([(0, -2), (0, -1)]);
        let right = BlockPosition::Wide([(0, 2), (0, 1)]);
        let up = BlockPosition::Wide([(-2, 0), (-1, 0)]);
        let down = BlockPosition::Wide([(2, 0), (1, 0)]);

        assert_eq!(level_one(&mut Block::new(start), 'L'), left);
        assert_eq!(level_one(&mut Block::new(start), 'R'), right);
        assert_eq!(level_one(&mut Block::new(start), 'U'), up);
        assert_eq!(level_one(&mut Block::new(start), 'D'), down);
    }

    #[test]
    fn can_move_once_when_horizontal() {
        let start = BlockPosition::Wide([(0, -1), (0, 0)]);
        let left = BlockPosition::Tall((0, -2));
        let right = BlockPosition::Tall((0, 1));
        let up = BlockPosition::Wide([(-1, -1), (-1, 0)]);
        let down = BlockPosition::Wide([(1, -1), (1, 0)]);

        assert_eq!(level_one(&mut Block::new(start), 'L'), left);
        assert_eq!(level_one(&mut Block::new(start), 'R'), right);
        assert_eq!(level_one(&mut Block::new(start), 'U'), up);
        assert_eq!(level_one(&mut Block::new(start), 'D'), down);
    }

    #[test]
    fn can_move_once_when_vertical() {
        let start = BlockPosition::Wide([(-1, 0), (0, 0)]);
        let left = BlockPosition::Wide([(-1, -1), (0, -1)]);
        let right = BlockPosition::Wide([(-1, 1), (0, 1)]);
        let up = BlockPosition::Tall((-2, 0));
        let down = BlockPosition::Tall((1, 0));

        assert_eq!(level_one(&mut Block::new(start), 'L'), left);
        assert_eq!(level_one(&mut Block::new(start), 'R'), right);
        assert_eq!(level_one(&mut Block::new(start), 'U'), up);
        assert_eq!(level_one(&mut Block::new(start), 'D'), down);
    }
}


//------------------------------------------------------------------------------
//| LEVEL TWO
//|
//| Time to take that block for a ride. Now, given a list of directions, move
//| the block around on an infinite flat grid and return the coordinates
//| indicating the final direction.
//| 
//| - Keep using your Block object (or data structure) from level 1.
//| - Now, the tests will give directions as a list of 'U', 'D', 'L', or 'R'
//|   characters.
//| - The tests will expect a list of the coordinates the block is sitting on
//|   after following the list of directions, in (`row`, `col`) format. One
//|   coordinate for a block standing upright, two coordinates for a block
//|   lying on its side.
//------------------------------------------------------------------------------

fn level_two(block: &mut Block, directions: &[char]) -> BlockPosition {
    // This function will be called for tests. Feel free
    // to write other functions to handle the logic for this
    // level, but use this function as your 'main' function.
    unimplemented!()
}

#[cfg(test)]
mod level_two_tests {
    use super::*; 

    #[test]
    fn can_move_in_a_small_circle() {
        let start = BlockPosition::Tall((0, 0));
        let directions = ['U', 'R', 'D', 'L'];
        let end = BlockPosition::Wide([(0, -1), (0, 0)]);
        assert_eq!(level_two(&mut Block::new(start), &directions), end);
    }

    #[test]
    fn can_move_in_a_bigger_circle() {
        let start = BlockPosition::Tall((0, 0));
        let directions = ['U', 'U', 'L', 'L', 'D', 'D', 'R', 'R'];
        assert_eq!(level_two(&mut Block::new(start), &directions), start);
    }

    #[test]
    fn can_move_diagonal_there_and_back() {
        let start = BlockPosition::Tall((0, 0));
        let directions = ['D', 'R', 'D', 'R', 'U', 'L', 'U', 'L'];
        let end = BlockPosition::Wide([(0, 0), (1, 0)]);
        assert_eq!(level_two(&mut Block::new(start), &directions), end);
    }

    #[test]
    fn can_move_in_a_meander() {
        let start = BlockPosition::Tall((0, 0));
        let directions = ['R', 'U', 'R', 'D', 'R', 'U', 'R', 'D'];
        let end = BlockPosition::Wide([(0, 5), (0, 6)]);
        assert_eq!(level_two(&mut Block::new(start), &directions), end);
    }
}


//------------------------------------------------------------------------------
//| LEVEL THREE
//|
//| Now that you can steer your block, it's time to start making it go where
//| you want it to go. You may continue to assume an infinite flat grid, but
//| now you need to take a coordinate and return the list of directions you
//| moved your block to get it there. You should be able to identify a valid
//| path from start to target, not necessarily the shortest path.
//| 
//| - The level 3 tests will give you an initial block location and a target
//|   location, as coordinates in the same format used throughout this
//|   challenge.
//| - In keeping with the game that inspired this challenge, targets will
//|   alway be a single coordinate, and your block will need to stand upright
//|   on that grid space in order to pass the test.
//| - There are infinitely many paths that may be taken, considering the grid
//|   is an infinite flat expanse, but remember that the tests will need to
//|   run in a  reasonable amount of time.
//| - The tests will expect a list of characters representing the directions
//|   you moved, 'U', 'D', 'L', or 'R'.
//------------------------------------------------------------------------------

fn level_three(block: &mut Block, target: BlockPosition) -> Vec<char> {
    // This function will be called for tests. Feel free
    // to write other functions to handle the logic for this
    // level, but use this function as your 'main' function.
    unimplemented!()
}

#[cfg(test)]
mod level_three_tests {
    use super::*; 


    #[test]
    fn can_move_two_spaces() {
        let start = BlockPosition::Tall((0, 0));
        let target = BlockPosition::Tall((-3, 0));
        assert_eq!(level_three(&mut Block::new(start), target), vec!['U', 'U']);
    }

    #[test]
    fn can_move_one_space_tricky() {
        let start = BlockPosition::Tall((0, 0));
        let target = BlockPosition::Tall((0, 1));
        let path = level_three(&mut Block::new(start), target);
        assert_eq!(level_two(&mut Block::new(start), &path), target);
    }

    #[test]
    fn can_move_far_away() {
        let start = BlockPosition::Tall((0, 0));
        let target = BlockPosition::Tall((100, -123));
        let path = level_three(&mut Block::new(start), target);
        assert_eq!(level_two(&mut Block::new(start), &path), target);
    }
}


//------------------------------------------------------------------------------
//| LEVEL FOUR
//|
//| It's time to strive for efficiency! To accomplish this level, you should
//| be able to identify the _shortest_ path from the block's start to the
//| target.
//| 
//| - The inputs and outputs of your function should be the same as for
//|   level 3.
//| - There may be more than one shortest path to get to the goal, you only
//|   need to identify and return _one_ shortest path.
//| - The tests will expect a list of characters representing the directions
//|   you moved, 'U', 'D', 'L', or 'R'.
//------------------------------------------------------------------------------

fn level_four(block: &mut Block, target: BlockPosition) -> Vec<char> {
    // This function will be called for tests. Feel free
    // to write other functions to handle the logic for this
    // level, but use this function as your 'main' function.
    unimplemented!()
}

#[cfg(test)]
mod level_four_tests {
    use super::*; 

    #[test]
    fn can_find_shortest_short_path() {
        let start = BlockPosition::Tall((0, 0));
        let target = BlockPosition::Tall((0, -1));
        let path = level_four(&mut Block::new(start), target);
        assert_eq!(level_two(&mut Block::new(start), &path), target);
        assert_eq!(path.len(), 3);
    }

    #[test]
    fn can_find_shortest_path_down_right() {
        let start = BlockPosition::Tall((0, 0));
        let target = BlockPosition::Tall((9, 9));
        let path = level_four(&mut Block::new(start), target);
        assert_eq!(level_two(&mut Block::new(start), &path), target);
        assert_eq!(path.len(), 12);
    }

    #[test]
    fn can_find_shortest_path_up_left() {
        let start = BlockPosition::Tall((0, 0));
        let target = BlockPosition::Tall((8, 13));
        let path = level_four(&mut Block::new(start), target);
        assert_eq!(level_two(&mut Block::new(start), &path), target);
        assert_eq!(path.len(), 15);
    }
}


//------------------------------------------------------------------------------
//| LEVEL FIVE
//|
//| Ok, smart guy/gal, you can navigate over an infinite, flat, unobstructed
//| expanse, but how well does your block handle when there are obstacles? For
//| this (final) level, you'll be given a representation of a finite grid
//| containing obstacles, and will need to steer your block around those
//| obstacles to the target. You'll also need to keep your block within the
//| bounds of the grid.
//| 
//| - You will need to parse a string into a grid representation. The tests
//|   will give a string in the format ".....\n..x..\n.x...\x....\n...x.",
//|   where '.' represents an empty space, and 'x' represents an obstacle.
//| - Since the grid is now finite, you may assume that every coordinate not
//|   explicity included in your grid representation as 'empty' is impassable.
//| - You will continue to get a coordinate(s) for your block start and target
//|   space.
//| - The tests will continue to expect a list of characters representing the
//|   directions you moved to get to the target.
//------------------------------------------------------------------------------

fn level_five(block: &mut Block, target: BlockPosition, grid: &str) -> Vec<char> {
    // This function will be called for tests. Feel free
    // to write other functions to handle the logic for this
    // level, but use this function as your 'main' function.
    unimplemented!()
}

#[cfg(test)]
mod level_five_tests {
    use super::*; 

    #[test]
    fn can_find_shortest_short_path() {
        let start = BlockPosition::Tall((3, 4));
        let target = BlockPosition::Tall((3, 3));
        let grid = ["..........",
                    "..........",
                    "...xx.....",
                    "..........",
                    "...xx.....",
                    "..........",
                    "..........",
                    "..........",
                    "..........",
                    ".........."].join("\n");
        let path = level_five(&mut Block::new(start), target, &grid);
        assert_eq!(level_two(&mut Block::new(start), &path), target);
        assert_eq!(path.len(), 7);
    }

    #[test]
    fn can_find_shortest_path_around_wall() {
        let start = BlockPosition::Tall((2, 1));
        let target = BlockPosition::Tall((2, 7));
        let grid = ["..........",
                    "..x.......",
                    "..x...x...",
                    "..x....x..",
                    "..x.......",
                    "..x.......",
                    "..x.......",
                    "..x.......",
                    "..........",
                    ".........."].join("\n");
        let path = level_five(&mut Block::new(start), target, &grid);
        assert_eq!(level_two(&mut Block::new(start), &path), target);
        assert_eq!(path.len(), 15);
    }

    #[test]
    fn can_find_shortest_path_large() {
        let start = BlockPosition::Tall((13, 15));
        let target = BlockPosition::Tall((25, 3));
        let grid = ["...............................",
                    "...............................",
                    "...............x...............",
                    "...............x...............",
                    "...xxxxxxxxxxxxx...............",
                    "...............x...............",
                    "...............x...............",
                    "xxxxxxxxxxxxx..x...............",
                    "...............x...............",
                    "...............x...............",
                    "......xxxxxxxxxxxxxxxxxxxx.....",
                    "......x..................x.....",
                    "......x..................x.....",
                    "......x..................x.....",
                    "......x..................x.....",
                    "......x..................x.....",
                    "......x..................x.....",
                    "......x.xxxxxxxxxxxxxxxxxx.....",
                    "......x........................",
                    "......x........................",
                    "....xxxxxxxxxxxxxxxxxxxxxxxxxxx",
                    "...............................",
                    "xxxxxxxxxxxxxxxxxxxxxxxxxxx....",
                    "...............................",
                    "...............................",
                    "...............................",
                    "..............................."].join("\n");
        let path = level_five(&mut Block::new(start), target, &grid);
        assert_eq!(level_two(&mut Block::new(start), &path), target);
        assert_eq!(path.len(), 118);
    }
}
