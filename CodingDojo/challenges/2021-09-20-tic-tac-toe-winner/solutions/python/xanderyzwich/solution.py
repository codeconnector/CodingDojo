"""
# Find Winner on a Tic Tac Toe Game

Tic-tac-toe is played by two players A and B on a 3 x 3 grid.

Here are the rules of Tic-Tac-Toe:

Players take turns placing characters into empty squares `(" ")`.
The first player A always places "X" characters, while the second player B always places "O" characters.
"X" and "O" characters are always placed into empty squares, never on filled ones.
The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
The game also ends if all squares are non-empty.
No more moves can be played if the game is over.
Given an array moves where each element is another array of size 2 corresponding to the row and column of the grid where they mark their respective character in the order in which A and B play.

Return the winner of the game if it exists (`A` or `B`), in case the game ends in a draw return `"Draw"`, if there are still movements to play return `"Pending"`.

You can assume that moves is valid (It follows the rules of Tic-Tac-Toe), the grid is initially empty and A will play first.


### Constraints:
1 <= moves.length <= 9
moves[i].length == 2
0 <= moves[i][j] <= 2
There are no repeated elements on moves.
moves follow the rules of tic tac toe.

"""
from unittest import TestCase


def who_wins(move_list):
    # setup
    move_count = len(move_list)
    full_board = (move_count == 9)
    board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

    # Fill the board with marks
    for i in range(0, move_count, 2):
        a_move = move_list[i]
        board[a_move[0]][a_move[1]] = 'A'
        if move_count > i+1:  # confirm b move exists
            b_move = move_list[i + 1]
            board[b_move[0]][b_move[1]] = 'B'

    # Check for winner
    winning_arrangements = [
        [(0, 0), (0, 1), (0, 2)], [(1, 0), (1, 1), (1, 2)], [(2, 0), (2, 1), (2, 2)],  # Rows
        [(0, 0), (1, 0), (2, 0)], [(0, 1), (1, 1), (2, 1)], [(0, 2), (1, 2), (2, 2)],  # Columns
        [(0, 0), (1, 1), (2, 2)], [(2, 0), (1, 1), (0, 2)],  # Diagonals
    ]
    for left, middle, right in winning_arrangements:
        values = [board[row][col] for row, col in [left, middle, right]]  # get values
        nonzero = values[0] != 0
        match = len(set(values)) == 1
        if match and nonzero:
            return values[0]

    # evaluate non-win
    return 'Draw' if full_board else 'Pending'


class TestWhoWins(TestCase):
    # can be run from this directory with "python3 -m unittest solution.py"

    def test_downhill_diagonal(self):
        moves = [[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]]
        expected = 'A'
        assert who_wins(moves) == expected

    def test_uphill_diagonal(self):
        moves = [[0, 0], [1, 1], [0, 1], [0, 2], [1, 0], [2, 0]]
        expected = 'B'
        assert who_wins(moves) == expected

    def test_draw(self):
        moves = [[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2], [2, 2]]
        expected = 'Draw'
        assert who_wins(moves) == expected

    def test_pending_too_short(self):
        moves = [[0, 0], [1, 1]]
        expected = 'Pending'
        assert who_wins(moves) == expected

    def test_pending_with_enough(self):
        moves = [[1, 1], [0, 0], [1, 2], [1, 0], [2, 0], [0, 2]]
        expected = 'Pending'
        assert who_wins(moves) == expected

    def test_horizontal(self):
        moves = [[1, 1], [0, 0], [1, 0], [0, 1], [1, 2]]
        expected = 'A'
        assert who_wins(moves) == expected

    def test_vertical(self):
        moves = [[1, 1], [0, 2], [0, 0], [2, 2], [1, 0], [1, 2]]
        expected = 'B'
        assert who_wins(moves) == expected
