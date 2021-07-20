#' # Sum Arrays
#' 
#' Given an array of values, return the sum of the values.
#' 
#' ## Business Rules/Errata
#' 
#' - Input must be an array.
#' - The array may be nested more than one level.
#' - All values must be integers.
#' - Solutions shall not use built in methods to flatten the array to 
#' one-dimension.
#' 
#' ## Examples
#' 
#' One dimension:
#' ```
#' sum_of_array([1,2,3,4,5]) => 15
#' ```
#' 
#' Two dimensions:
#' ```
#' sum_of_array([1,2,[1,2,3],4,5]) => 18
#' ```
#' 
#' n dimensions: 
#' 
#' ```
#' sum_of_array([1,[1,2,[3,4],5],[6,7]]) => 29
#' ```

library(testthat)

sum_of_array <- function(input_vec) {
    if (length(input_vec) > 1) {
        total <- 0
        for (i in input_vec) { total <- total + sum_of_array(i) }
        total
    } else {
        input_vec
    }
}

test_that("Handles flat lists", {
    expect_equal(sum_of_array(c(1, 2, 3, 4, 5)), 15)
})

test_that("Handles 2D lists", {
    input <- c(1, 2, c(1, 2, 3), 4, 5)
    expect_equal(sum_of_array(input), 18)
})

test_that("Handles nD lists", {
    input <- c(1, c(1, 2, c(3, 4), 5), c(6, 7))
    expect_equal(sum_of_array(input), 29)
})

test_that("An interesting case", {
    input <- c(c(1, 2), c(c(3, 4), 5), c(c(c(6, 7), 8), 9))
    expect_equal(sum_of_array(input), 45)
})
