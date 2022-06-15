#' ## Balanced Brackets
#' 
#' Given a string of round, curly, and square open and closing brackets, return
#' whether the brackets are balanced (well-formed).
#' 
#' For example, given the string "([])[]({})", you should return true.
#' Given the string "([)]" or "((()", you should return false.
#' 
#' ## Business Rules/Errata
#' 
#' - The only characters considered to be 'brackets' are `(`, `)`, `[`, `]`, `{`,
#' and `}`.
#' - Your input will always be a string.
#' - An empty string is considered balanced (return true).
#' - **Your string may contain characters that are not brackets.**

# Solution ----------------------------------------------------------------------------
balanced_brackets <- function(string) {
    only_brackets <- gsub(r"([^()\[\]{}])", "", string, perl = T)
    bracket_pair_re <- r"((\(\))|(\[\])|(\{\}))"

    repeat {
        stripped_inner_brackets <- gsub(bracket_pair_re, "", only_brackets)
        if (stripped_inner_brackets == "") return(TRUE)
        if (only_brackets == stripped_inner_brackets) return(FALSE)
        only_brackets <- stripped_inner_brackets
    }
}

# Tests -------------------------------------------------------------------------------
require(testthat)

test_that("Can identify a balanced string", {
    expect_true(balanced_brackets("[[]]({}[])"))
})

test_that("Can identify an unbalanced string", {
    expect_false(balanced_brackets("[[({}[])"))
})

test_that("Can correctly handle empty strings as input", {
    expect_true(balanced_brackets(""))
})

test_that("Ignores non-brackets", {
    expect_true(balanced_brackets("(5 * 3) + [10 / {2}]"))
})

test_that("Handles sequences of single bracket types", {
    expect_false(balanced_brackets(")]})]}"))
    expect_false(balanced_brackets("([{((("))
})

test_that("Handles strings with characters but no brackets", {
    expect_true(balanced_brackets("no brackets at all"))
})

test_that("Handles strings containing special characters", {
    expect_true(balanced_brackets(">>> (<> are not brackets) >>>"))
    expect_true(balanced_brackets("[///\\|||]"))
    expect_false(balanced_brackets("!@#$%%^&*(;',.<>?/\\|~`'"))
})

test_that("Can handle brackets 'balanced' the wrong way", {
    expect_false(balanced_brackets(")}][{("))
})

