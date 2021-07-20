// # Square Maze
// Given a square (NxN) matrix of '0's and '1's, determine how many ways the matrix can
// be traversed from the top left element to the bottom right element.
//
// # Business Rules/Errata
// - Data Structure Required: 2D Matrix
// - Assume the matrix represents a 2-dimensional map.
// - You may only move up, down, left, and right in the matrix, not diagonally.
// - You may only traverse matrix elements that are '0' (representing an empty space).
//   A '1' represents an impassible barrier.
// - The top left and bottom right corner will always be '0'.
// - If there is no path from the top left to the bottom right, return 0. Otherwise,
//   return the number of viable paths as an integer.
//
// # Examples
// ```
// input = [[0, 0, 1],
//          [0, 0, 1],
//          [1, 0, 0]]
//
// ```
//
// ```
// count_paths(input)  => 2
// ```
//
// # Update!
// The solutions addressed in the meetup all assumed movements down and to the right. 
// Expanding the grid size, however, introduces the possibility that these two movements
// alone will fail to find viable paths from the top-left to the bottom-right
// (demonstrated in test case `test_6x6_fancy_grid()`). When allowing for the
// possibility of movement in four directions, the previous test cases fail. Turns out
// there's actually 12 ways to navigate a completely open 3x3 grid without stepping on
// your own path. The test cases have been updated to account for this.

use std::collections::HashSet;

/// Represents the grid space
///
/// Includes associated methods for interacting with the grid space directly.
pub struct Grid {
    grid: Vec<Vec<usize>>,
    pub end: (usize, usize),
}

impl Grid {
    pub fn from(grid: Vec<Vec<usize>>) -> Self {
        let end = (grid.len() - 1, grid[0].len() - 1);
        Grid { grid, end }
    }

    /// Indicates whether the given position is on the grid
    #[rustfmt::skip]
    pub fn contains(&self, position: &(usize, usize)) -> bool {
        if position.0 > self.end.0 { return false; }
        if position.1 > self.end.1 { return false; }
        true
    }

    /// Returns the value at a given position
    pub fn get(&self, position: &(usize, usize)) -> Option<usize> {
        if self.contains(position) { return Some(self.grid[position.0][position.1]); }
        None
    }

    /// Indicates whether a given position is 'open'
    pub fn is_open(&self, position: &(usize, usize)) -> bool {
        match self.get(position) {
            Some(v) => v == 0,
            None => false,
        }
    }

    /// Given a position on the grid, return neighbors that exist (and are open)
    #[rustfmt::skip]
    pub fn get_available_neighbors(&self, position: &(usize, usize)) -> Vec<(usize, usize)> {
        let mut potentials = Vec::with_capacity(4);
        let mut neighbors = Vec::with_capacity(4);

        // Up, Right, Left Down
        if position.0 > 0 { potentials.push((position.0 - 1, position.1)); }
        if position.1 < self.end.1 { potentials.push((position.0, position.1 + 1)); }
        if position.0 < self.end.0 { potentials.push((position.0 + 1, position.1)); }
        if position.1 > 0 { potentials.push((position.0, position.1 - 1)); }

        for potential in potentials {
            if self.is_open(&potential) { neighbors.push(potential); }
        }
        neighbors
    }

    /// Count the paths from the top left to the bottom right in this grid
    pub fn count_paths(&self) -> usize {
        let mut paths = vec![Path::new()];
        let mut paths_found = 0;

        // As long as we have active [Path]s
        while !paths.is_empty() {
            let mut next_paths = Vec::new();

            // For each active path
            for path in &paths {

                // If the path is complete, then increment the number of paths found
                // and move on
                if path.is_complete(&self) {
                    paths_found += 1;
                } else {
                    // Otherwise, check each of the neighbors of that [Path]'s current
                    // location. If that neighbor is an available space, create a new
                    // path with a current location at that neighbor space with the 
                    // full history of the current `path` and append it to the 
                    // `next_paths` Vec, to be checked on the next pass
                    for neighbor in &self.get_available_neighbors(&path.head) {
                        if let Some(path) = path.move_to(*neighbor, self) {
                            next_paths.push(path);
                        }
                    }
                }
            }
            paths = next_paths  // Overwrite `paths` with `next_paths` to continue
        }
        paths_found
    }
}


/// Represents a path through the grid, with history
#[derive(Debug)]
pub struct Path {
    visited: HashSet<(usize, usize)>,
    head: (usize, usize),
}

#[rustfmt::skip]
impl Default for Path {
    fn default() -> Self { Path::new() }
}

impl Path {
    #[rustfmt::skip]
    pub fn new() -> Self {
        Path { visited: HashSet::new(), head: (0, 0) }
    }

    /// 'Moves' the Path forward to a new position
    ///
    /// Adds the current location to the [Path]'s history and sets the `position` 
    /// argument as the current location of the [Path]
    pub fn move_to(&self, position: (usize, usize), grid: &Grid) -> Option<Self> {
        if let Some(value) = grid.get(&position) {
            if value == 0 && !self.visited.contains(&position) {
                let mut visited = self.visited.clone();
                visited.insert(self.head);
                return Some(Path { visited, head: position });
            }
        }
        None
    }

    /// Indicates the Path has reached the end of the grid
    pub fn is_complete(&self, grid: &Grid) -> bool {
        self.head == grid.end
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_3x3_all_zeros() {
        let grid = Grid::from(vec![vec![0, 0, 0], vec![0, 0, 0], vec![0, 0, 0]]);
        assert_eq!(grid.count_paths(), 12);
    }

    #[test]
    fn test_3x3_some_ones() {
        let grid = Grid::from(vec![vec![0, 0, 1], vec![0, 0, 1], vec![1, 0, 0]]);
        assert_eq!(grid.count_paths(), 2);
    }

    #[test]
    fn test_3x3_impassible() {
        let grid = Grid::from(vec![vec![0, 1, 0], vec![0, 1, 0], vec![0, 1, 0]]);
        assert_eq!(grid.count_paths(), 0);
    }

    #[test]
    fn test_4x4_all_zeros() {
        let grid = Grid::from(vec![
            vec![0, 0, 0, 0],
            vec![0, 0, 0, 0],
            vec![0, 0, 0, 0],
            vec![0, 0, 0, 0],
        ]);
        assert_eq!(grid.count_paths(), 184);
    }

    #[test]
    fn test_4x4_some_ones() {
        let grid = Grid::from(vec![
            vec![0, 0, 1, 0],
            vec![0, 0, 0, 0],
            vec![0, 1, 0, 0],
            vec![0, 0, 0, 0],
        ]);
        assert_eq!(grid.count_paths(), 14);
    }

    #[test]
    fn test_6x6_fancy_grid() {
        let grid = Grid::from(vec![
            vec![0, 0, 0, 0, 0, 0],
            vec![0, 1, 0, 1, 1, 0],
            vec![0, 1, 0, 0, 0, 0],
            vec![0, 1, 0, 1, 1, 1],
            vec![0, 1, 0, 1, 1, 1],
            vec![0, 0, 0, 0, 0, 0],
        ]);
        assert_eq!(grid.count_paths(), 3);
    }
}
