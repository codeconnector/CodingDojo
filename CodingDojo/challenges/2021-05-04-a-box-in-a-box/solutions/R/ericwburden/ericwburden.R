# #  Box in a Box
# 
#  Given a pair of rectangles, determine whether one of the rectangles is completely 
# contained within the other rectangle. You will be given each rectangles top-left 
# coordinate in an x/y plane, the rectangle's width, and the rectangle's height. 
# One rectangle is "completely contained" by a rectangle that completely covers it, 
# if viewed from above the plane. This puzzle should be solved using an 
# Object-Oriented approach.
#
#  
#  ## Business Rules/Errata
#  
#  - ***Data Structure Required: Rectangle*** You should produce and compare 
# `Rectangle` objects in your solution, not the raw rectangle measurements.
#  - The rectangle dimensions will be given in an array, in the format 
#  [(top left x coordinate), (top left y coordinate), (width), (height)].
#  - Your function should take two Rectangle objects as arguments.
#  - The units of width and height are irrelevant and can be ignored.
#  - **The coordinate system for this challenge is 2-dimensional, with x increasing 
#  from left to right, and y increasing from top to bottom.**
#  - Your final result should include a function that, given two sets of rectangle 
#  dimensions, returns a boolean value,
#  - Your function should return `false` if the two rectangles only partially 
#  overlap.))))]""''

library(testthat)

# Function to create a new Rectangle class and provide some minimal validation
# on the inputs
new_rectangle <- function(top_edge, left_edge, bottom_edge, right_edge) {
    stopifnot(is.double(top_edge))
    stopifnot(is.double(left_edge))
    stopifnot(is.double(bottom_edge))
    stopifnot(is.double(right_edge))

    structure(
        list(
            top_edge = top_edge, 
            left_edge = left_edge, 
            bottom_edge = bottom_edge,
            right_edge = right_edge
        ),
        class = "Rectangle"
    )
}

# Function to instantiate a new Rectangle from the given input format, essentiall
# serves as the "constructor" method
rectangle <- function(top_left_x, top_left_y, width, height) {
    top_edge <- top_left_y
    left_edge <- top_left_x
    bottom_edge <- top_edge + height
    right_edge <- left_edge + width

    new_rectangle(top_edge, left_edge, bottom_edge, right_edge)
}

# Generic overlaps method. This is the R version of function methods, where you define
# a generic method, then specialize it based on the class of the input
overlaps <- function(x, y, ...) {
    stopifnot(typeof(x) == typeof(y))
    UseMethod("overlaps", x)
}

# Specialized "overlaps" method for "Rectangle" class elements.
overlaps.Rectangle <- function(x, y) {
    ( # If y fits inside x
        x$top_edge    <= y$top_edge    & 
        x$bottom_edge >= y$bottom_edge &
        x$left_edge   <= y$left_edge   &
        x$right_edge  >= y$right_edge
    ) | ( # Or x fits inside y
        y$top_edge    <= x$top_edge    &
        y$bottom_edge >= x$bottom_edge &
        y$left_edge   <= x$left_edge   &
        y$right_edge  >= x$right_edge
    )
}

test_that("Two rectangles that do not overlap return false", {
    rectangle1 <- rectangle(1, 4, 3, 3)
    rectangle2 <- rectangle(0, 3, 2, 1)
    expect_false(overlaps(rectangle1, rectangle2))
})

test_that("Two rectangles that DO overlap return true", {
    rectangle1 <- rectangle(1, 4, 3, 3)
    rectangle2 <- rectangle(0, 3, 4, 4)
    expect_true(overlaps(rectangle1, rectangle2))
})

test_that("Two rectangles that partially overlap return false", {
    rectangle1 <- rectangle(1, 4, 3, 3)
    rectangle2 <- rectangle(0, 3, 3, 3)
    expect_false(overlaps(rectangle1, rectangle2))
})

