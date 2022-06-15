# Implementation ---------------------------------------------------------------

library(dequer)

LETTERS <- toupper(letters)

divmod <- function(dividend, divisor) {
  quotient <- dividend %/% divisor
  remainder <- dividend %% divisor
  if (remainder == 0) {
    quotient <- quotient - 1
    remainder <- divisor
  }
  list(quotient = quotient, remainder = remainder)
}

to_spreadsheet_colname <- function(n) {
  if (any(n < 1)) stop("`n` must be greater than zero.")

  remaining <- n
  letters <- dequer::deque()

  while (remaining > 0) {
    with(divmod(remaining, 26), {
      remaining <<- quotient
      letter <- LETTERS[remainder]
      dequer::push(letters, letter)
    })
  }

  (letters
    |> as.list()
    |> paste(collapse = ""))
}


# Tests ------------------------------------------------------------------------

library(testthat)

testthat::test_that("Should convert numbers 1-26 to letter", {
  (to_spreadsheet_colname(1)
    |> testthat::expect_equal("A"))

  (to_spreadsheet_colname(2)
    |> testthat::expect_equal("B"))

  (to_spreadsheet_colname(26)
    |> testthat::expect_equal("Z"))
})

testthat::test_that("Should convert numbers 27-702 to letter pairs", {
  (to_spreadsheet_colname(27)
    |> testthat::expect_equal("AA"))

  (to_spreadsheet_colname(52)
    |> testthat::expect_equal("AZ"))

  (to_spreadsheet_colname(287)
    |> testthat::expect_equal("KA"))

  (to_spreadsheet_colname(702)
    |> testthat::expect_equal("ZZ"))
})

testthat::test_that("Should convert numbers over 702 to column names", {
  (to_spreadsheet_colname(17576)
    |> testthat::expect_equal("YYZ"))

  (to_spreadsheet_colname(80719)
    |> testthat::expect_equal("DOJO"))

  (to_spreadsheet_colname(1004171)
    |> testthat::expect_equal("BECKY"))

  (to_spreadsheet_colname(9413735)
    |> testthat::expect_equal("TOOPS"))
})
