/// Represents one of the four cardinal directions
#[derive(Copy, Clone)]
enum Direction {
    North,
    East,
    South,
    West,
}

impl Direction {
    /// Mutate a `Direction` to face to the left
    fn turn_left(&mut self) {
        *self = match self {
            Direction::North => Direction::West,
            Direction::West => Direction::South,
            Direction::South => Direction::East,
            Direction::East => Direction::North,
        }
    }
}

/// Represents a latitude/longitude position in a square grid
#[derive(Debug, Copy, Clone)]
struct Position {
    latitude: i64,
    longitude: i64,
}

impl From<(i64, i64)> for Position {
    fn from(input: (i64, i64)) -> Self {
        Position { latitude: input.0, longitude: input.1 }
    }
}

impl From<Position> for (i64, i64) {
    fn from(input: Position) -> Self {
        (input.latitude, input.longitude)
    }
}

impl Position {
    fn move_towards(&mut self, heading: Direction) {
        match heading {
            Direction::North => self.latitude -= 1,
            Direction::East => self.longitude += 1,
            Direction::South => self.latitude += 1,
            Direction::West => self.longitude -= 1,
        }
    }
}

/// Represents a 'walker' around a square spiral pattern, containing all
/// the information needed to take the next step around the spiral.
struct SpiralIter {
    pos: Position,
    heading: Direction,
    turns: u64,
    steps_since_turn: u64,
}

/// Iteration for `SpiralIter`
///
/// Infinitely returns the next position for a `SpiralIter`, starting from some
/// initial position. Returns an `Option<Position>` because the Iterator trait
/// requires it, but this implementation will never yield a `None`.
impl Iterator for SpiralIter {
    type Item = Position;

    /// Updates the state of the `SpiralIter` and returns the current position. This
    /// is mostly so that it returns the _initial_ position first, then the next,
    /// and so on.
    fn next(&mut self) -> Option<Self::Item> {
        // We'll return the current position after updating to the
        // next state.
        let result  = Some(self.pos);

        // Number of steps to turn on
        let turn_at = (self.turns / 2) + 1;

        // 'Move' the `SpiralIter` to the next position
        self.pos.move_towards(self.heading);
        self.steps_since_turn += 1;
        if self.steps_since_turn >= turn_at {
            self.turns += 1;
            self.steps_since_turn = 0;
            self.heading.turn_left();
        }

        // Return the old position
        result
    }
}

impl SpiralIter {
    fn new(pos: Position, heading: Direction) -> Self {
        let turns = 0;
        let steps_since_turn = 0;
        SpiralIter { pos, heading, turns, steps_since_turn }
    }
}

/// Get current position in a spiral walk
///
/// Given a starting position ([lat], [lon]) and the number of a square to stop on,
/// return the position of that square. Uses a `SpiralIter` iterator to walk over
/// the positions in the square spiral, taking and returning the position after
/// `square - 1` steps.
fn current_position_unchecked(start: (i64, i64), square: u64) -> (i64, i64) {
    let pos   = Position::from(start);
    let dir   = Direction::East;
    let steps = (square - 1) as usize;

    // Safe to `unwrap()`, since `SpiralIter` never returns `None`
    SpiralIter::new(pos, dir).nth(steps).unwrap().into()
}

/// Get current position in a spiral walk
///
/// Error checking wrapper around `current_position_unchecked`, returns an 
/// error if `square` < 1 (it can only be 0 here, since `square` is a u64).
fn current_position(start: (i64, i64), square: u64) -> Result<(i64, i64), &'static str> {
    match square {
        0 => Err("`square` must be > 0!"),
        _ => Ok(current_position_unchecked(start, square))
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_one() {
        //! Should return original location when square === 1
        assert_eq!(current_position((0, 0), 1), Ok((0, 0)));
        assert_eq!(current_position((0, 1), 1), Ok((0, 1)));
        assert_eq!(current_position((1, 0), 1), Ok((1, 0)));
        assert_eq!(current_position((1, 1), 1), Ok((1, 1)));
    }

    #[test]
    fn test_two() {
        //! Should return location one to the right when square === 2
        assert_eq!(current_position((0, 0), 2), Ok((0, 1)));
        assert_eq!(current_position((0, 1), 2), Ok((0, 2)));
        assert_eq!(current_position((1, 0), 2), Ok((1, 1)));
        assert_eq!(current_position((1, 1), 2), Ok((1, 2)));
    }

    #[test]
    fn test_three() {
        //! Should return location one to the left when square === 6
        assert_eq!(current_position((0, 0), 6), Ok((0, -1)));
        assert_eq!(current_position((0, 1), 6), Ok((0, 0)));
        assert_eq!(current_position((1, 0), 6), Ok((1, -1)));
        assert_eq!(current_position((1, 1), 6), Ok((1, 0)));
    }

    #[test]
    fn test_four() {
        //! Should throw an error when square < 1
        //! Note: No need to check for values < 0, since any attempt
        //! to pass a negative value to this function will not compile
        assert_eq!(current_position((0, 0), 0), Err("`square` must be > 0!"));
    }

    #[test]
    fn test_five() {
        //! Should return correct location on diagonals
        assert_eq!(current_position((0, 0), 17), Ok((-2, -2)));
        assert_eq!(current_position((0, 0), 13), Ok((-2, 2)));
        assert_eq!(current_position((0, 0), 21), Ok((2, -2)));
        assert_eq!(current_position((0, 0), 25), Ok((2, 2)));
    }

    #[test]
    fn many_steps() {
        //! Should return correct location MANY squares away
        assert_eq!(current_position((0, 0), 3251000), Ok((711, 902)));
    }
}
