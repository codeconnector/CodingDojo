library(testthat)

#' Flatten a named list
#' 
#' Given a named list, flatten the list and concatenate the list names using `.` as
#' a name separator. In R, you don't really get arbitrarily nested hashmaps. Typically,
#' you would use an `environment` for O(1) lookups, but you can only nest environments
#' so deeply before you get an error. Instead, for this type of exercise, we need to
#' rely on named lists, which have O(n) lookups, so the overall time complexity in 
#' base R (without fancy tricks) is O(n^2). :'(
flatten <- function(input) {
    stopifnot(typeof(input) == "list") # Error if not a list

    output <- list() # To hold the output

    # For each "key" in the named list
    for (name in names(input)) {

        # If the item referenced by that "key" is a list, flatten recursively
        if (typeof(input[[name]]) == "list") {
            flattened_list <- flatten(input[[name]])
            for (flat_name in names(flattened_list)) {
                new_key <- paste(name, flat_name, sep = ".")
                output[[new_key]] <- flattened_list[[flat_name]]
            }

        # Otherwise, just append the key/value to the output list
        } else {
            output[[name]] <- input[[name]]
        }
    }

    output  # Return the newly built list
}

# Test given the sample input
test_that("Can flatten sample dictionary (named list)", {
    sample <- list(
        key = 3,
        foo = list(
            a = 5,
            bar = list(
                baz = 8
            )
        )
    )
    
    expected <- list(
        key = 3,
        foo.a = 5,
        foo.bar.baz = 8
    )

    expect_equal(flatten(sample), expected)
})
