library(testthat)

# Given a set of moves in the indicated format, produce a 3x3 matrix holding
# either "A" or "B" depending on which player made that move.
fill_board <- function(moves) {
    # A bunch of input validation
    stopifnot(typeof(moves) == "list")
    stopifnot(length(moves) > 0)
    stopifnot(is.numeric(moves[[1]]))
    stopifnot(length(moves[[1]]) == 2)

    game_board <- matrix(rep("", 9), nrow = 3) # Empty grid
    player <- "A"   # Alternate between "A" and "B"
    for (move in moves) {
        # Convert each row,col pair into matrix coordinates
        coordinate <- matrix(move, ncol = 2)
        game_board[coordinate] <- player
        player <- if (player == "A") "B" else "A"
    }
    game_board
}

who_wins <- function(moves) {
    # Generate the 3x3 magic square, where all horizontal, vertical,
    # and diagonal rows sum to 15
    magic_square <- matrix(c(2, 9, 4, 7, 5, 3, 6, 1, 8), nrow = 3)
    game_board <- fill_board(moves)

    # If there have been at least 9 moves, no one can win
    if (length(moves) == 9) return("Draw")

    # A Wins - If any combination of three of "A"s moves sum to 15
    a_moves <- magic_square[game_board == "A"]
    a_combn <- if (length(a_moves) >= 3) combn(a_moves, 3) else numeric(0)
    if (any(sum(a_combn) == 15)) return("A")

    # A Wins - If any combination of three of "B"s moves sum to 15
    b_moves <- magic_square[game_board == "B"]
    b_combn <- if (length(b_moves) >= 3) combn(b_moves, 3) else numeric(0)
    if (any(sum(b_combn) == 15)) return("B")

    "Pending"
}

# Tests -----------------------------------------------------------------------
# R is 1-indexed, so all the moves needed to be adjusted up by one to work

test_that("detects a downhill diagonal win", {
    moves <- list(c(1, 1), c(3, 1), c(2, 2), c(3, 2), c(3, 3))
    expect_identical(who_wins(moves), "A")
})

test_that("detects an uphill diagonal win", {
    moves <- list(c(1, 1), c(2, 2), c(1, 2), c(1, 3), c(2, 1), c(3, 1))
    expect_identical(who_wins(moves), "B")
})

test_that("returns 'Draw' when there is no winner", {
    moves <- list(
        c(1, 1), c(2, 2), c(3, 1),
        c(2, 1), c(2, 3), c(3, 2),
        c(1, 2), c(1, 3), c(3, 3)
    )
    expect_identical(who_wins(moves), "Draw")
})

test_that("returns 'Pending' with enough moves for a winner to be possible", {
    moves <- list(c(1, 1), c(2, 2))
    expect_identical(who_wins(moves), "Pending")
})

test_that("returns 'Pending' without enough moves for a winner", {
    moves <- list(c(2, 2), c(1, 1), c(2, 3), c(2, 1), c(3, 1), c(1, 3))
    expect_identical(who_wins(moves), "Pending")
})

test_that("detects a horizontal win", {
    moves <- list(c(2, 2), c(1, 1), c(2, 1), c(1, 2), c(2, 3))
    expect_identical(who_wins(moves), "A")
})

test_that("detects a vertical win", {
    moves <- list(c(2, 2), c(1, 3), c(1, 1), c(3, 3), c(2, 1), c(2, 3))
    expect_identical(who_wins(moves), "B")
})
