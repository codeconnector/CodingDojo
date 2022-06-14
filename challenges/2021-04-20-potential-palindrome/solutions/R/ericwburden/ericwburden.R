library(testthat)
library(purrr)
library(magrittr)

can_make_palindrome <- function(input) {
    input <- as.character(input) %>%
        strsplit("") %>%
        unlist()
    if (length(input) == 0) { return(FALSE) }

    occurrences <- table(input)
    unique_occurrences <- map_dbl(occurrences, ~ .x %% 2)
    sum(unique_occurrences) <= 1
}

test_that("'carrace' makes a palindrome", {
    expect_true(can_make_palindrome("carrace"))
})

test_that("41231234 makes a palindrome", {
    expect_true(can_make_palindrome(41231234))
})

test_that("'notapalindrome' does not make a palindrome", {
    expect_false(can_make_palindrome("notapalindrome"))
})

test_that("Empty string is not a palindrome", {
    expect_false(can_make_palindrome(""))
})
