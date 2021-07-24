# Implementation ----------------------------------------------------------

#' Utility function, calculates the depth of a nested list
#'
#' @param x a list
#' @param depth ignore, used for recursion
#' @return the maximum depth of the nested list
get_depth <- function(x, depth = 0){
  if(!is.list(x)) return(depth)
  
  depths <- lapply(x, get_depth, depth + 1)
  suppressWarnings(max(unlist(depths)))
}


#' Create a new NestedIterator
#'
#' @param nested_array the 2D array to store inside the NestedIterator
#' @return a NestedIterator
new_nested_iterator <- function(nested_array) {
  stopifnot(typeof(nested_array) == "list") # Should be a list
  stopifnot(get_depth(nested_array) == 2)   # Should be a 2D list
  
  structure(
    list(
      nested_array = nested_array,
      row = 1,
      col = 1,
      next_item = NA
    ),
    class = "NestedIterator"
  )
}


#' Generic dispatch for `next_item`
#'
#' @param x item to call `next_item` on 
#' @param ... other arguments to pass to implementations of `next_item`
next_item <- function(x, ...) {
  UseMethod("next_item", x)
}

#' Implements `next_item` for a NestedIterator
#' 
#' Updates the NestedIterator with the next item and returns a copy
#'
#' @param x a NestedIterator
#' @return a copy of `x`, updated such that `x$next_item` is the next item in 
#' the iterator
next_item.NestedIterator <- function(x) {
  repeat {
    if (x$row > length(x$nested_array)) { x$next_item <- NULL; return(x) }
    if (x$col > length(x$nested_array[[x$row]])) {
      x$col <- 1
      x$row <- x$row + 1
    } else {
      x$next_item <- x$nested_array[[x$row]][[x$col]]
      x$col <- x$col + 1
      return(x)
    }
  }
}


#' Generic dispatch for `has_next`
#'
#' @param x item to call `has_next` on 
#' @param ... other arguments to pass to implementations of `has_next`
has_next <- function(x, ...) {
  UseMethod("has_next", x)
}

#' Implements `has_next` for a NestedIterator
#' 
#' Returns TRUE if the NestedIterator has more items to return, otherwise FALSE
#'
#' @param x a NestedIterator
#' @return a boolean
has_next.NestedIterator <- function(x) {
  !is.null(next_item(x)$next_item)
}



# Tests -------------------------------------------------------------------

library(testthat)

test_that("Can iterate through example nested array", {
  input <- list(list(9), list(1, 7, 5), list(), list(), list(2, 9), list())
  ni = new_nested_iterator(input)
  ni <- next_item(ni); expect_equal(ni$next_item, 9)
  ni <- next_item(ni); expect_equal(ni$next_item, 1)
  ni <- next_item(ni); expect_equal(ni$next_item, 7)
  ni <- next_item(ni); expect_equal(ni$next_item, 5)
  ni <- next_item(ni); expect_equal(ni$next_item, 2)
  ni <- next_item(ni); expect_equal(ni$next_item, 9)
  ni <- next_item(ni); expect_equal(ni$next_item, NULL)
})

test_that("Correctly indicates when the iterator has a next element", {
  input <- list(list(9), list(1, 7, 5), list(), list(), list(2, 9), list())
  ni = new_nested_iterator(input)
  ni <- next_item(ni) # 9
  expect_true(has_next(ni))
  ni <- next_item(ni) # 1
  ni <- next_item(ni) # 7
  ni <- next_item(ni) # 5
  expect_true(has_next(ni))
  ni <- next_item(ni) # 2
  expect_true(has_next(ni))
  ni <- next_item(ni) # 9
  expect_false(has_next(ni))
  ni <- next_item(ni) # NULL
  expect_false(has_next(ni))
})
