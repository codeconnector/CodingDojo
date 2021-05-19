library(testthat)

sum_of_squares <- function(n) {
    upper_limit <- floor(sqrt(n))
    possible_addends <- (1:upper_limit)^2

    can_sum_in_steps <- function(n, steps) {
        if (steps == 0) return(FALSE)
        if (any(possible_addends == n)) return(TRUE)

        for (addend in possible_addends) {
            if (addend > n) next
            if (can_sum_in_steps(n - addend, steps - 1)) return(TRUE)
        }
        FALSE
    }

    for (steps in 1:upper_limit) {
        if (can_sum_in_steps(n, steps)) return(steps)
    }
    n
}


test_that("Can find the smallest number of squares that sum to n", {
    expect_equal(sum_of_squares(13), 2)
    expect_equal(sum_of_squares(27), 3)
    expect_equal(sum_of_squares(144), 1)
    expect_equal(sum_of_squares(84), 3)
    expect_equal(sum_of_squares(85), 2)
})
