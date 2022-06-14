# Solution --------------------------------------------------------------------

library(dplyr)
library(tibble)
library(purrr)

total_time <- function(trip_log = list()) {
  # If the input is an empty list, return `0`
  if (length(trip_log) == 0) return(0)

  # Convert the input list of lists into a data.frame with the columns
  # "id", "timestamp", and "event_type". In a real-world scenario, I'd
  # probably be reading this data in as a data.frame from a flat file or
  # database connection, not from a list of lists.
  (trip_log_df
    <- trip_log
    |> map(set_names, c("id", "timestamp", "event_type"))
    |> map(as_tibble_row)
    |> bind_rows())

  # Given our data.frame of trips, I can group by trip ID, identify the
  # 'pickup' event, get the 'pickup' event time, and determine the offset
  # of all the other times from the 'pickup' time (per group).
  (trip_stats
    <- trip_log_df
    |> group_by(id)
    |> mutate(
      pickup      = event_type == "pickup",
      pickup_time = timestamp[pickup],
      elapsed     = timestamp - pickup_time
    )
    |> ungroup())

  # Return the sum of all the time elapsed
  sum(trip_stats$elapsed)
}




# Tests -----------------------------------------------------------------------

library(testthat)

test_that("An empty list yields zero time spent", {
  input <- list()
  total_time(input) |> expect_equal(0)
})

test_that("Should calculate time for a simple trip (pickup -> dropoff)", {
  input <- list(
    list(1, 1642441462, "pickup"),
    list(1, 1642441463, "dropoff")
  )
  total_time(input) |> expect_equal(1)
})

test_that("Should calculate time for a simple trip (pickup -> dropoff)", {
  input <- list(
    list(1, 1642441462, "pickup"),
    list(1, 1642441463, "dropoff")
  )
  total_time(input) |> expect_equal(1)
})

test_that("Should calculate time for a single monster snack", {
  input <- list(
    list(1, 1642441462, "pickup"),
    list(1, 1642441463, "eaten"),
    list(1, 1642441464, "dropoff")
  )
  total_time(input) |> expect_equal(3)
})

test_that("Should calculate time for a more complex set of trips", {
  input <- list(
    list(1, 1570320047, "pickup"),
    list(1, 1570320725, "dropoff"),
    list(2, 1570321092, "pickup"),
    list(2, 1570323012, "dropoff"),
    list(3, 1570321212, "pickup"),
    list(3, 1570322352, "dropoff")
  )
  total_time(input) |> expect_equal(3738)
})

test_that("Should calculate time for an even more complex set of trips", {
  input <- list(
    list(1, 1570320047, "pickup"),
    list(1, 1570320725, "dropoff"),
    list(2, 1570321092, "pickup"),
    list(3, 1570321212, "pickup"),
    list(3, 1570322352, "dropoff"),
    list(2, 1570323012, "dropoff"),
    list(2, 1570322092, "eaten")
  )
  total_time(input) |> expect_equal(4738)
})

test_that("Should calculate time for a complex set of trips with 'snacks'", {
  input <- list(
    list(1, 1570320047, "pickup"),
    list(1, 1570320725, "dropoff"),
    list(2, 1570321092, "pickup"),
    list(3, 1570321212, "pickup"),
    list(3, 1570321213, "eaten"),
    list(3, 1570322352, "dropoff"),
    list(2, 1570323012, "dropoff"),
    list(2, 1570322092, "eaten")
  )
  total_time(input) |> expect_equal(4739)
})

test_that("Should calculate time for the most complex set of trips", {
  input <- list(
    list(1, 1570320047, "pickup"),
    list(1, 1570320049, "eaten"),
    list(1, 1570320048, "eaten"),
    list(1, 1570320055, "eaten"),
    list(1, 1570320050, "eaten"),
    list(1, 1570320725, "dropoff"),
    list(2, 1570321092, "pickup"),
    list(3, 1570321212, "pickup"),
    list(3, 1570321213, "eaten"),
    list(3, 1570321213, "eaten"),
    list(3, 1570322352, "dropoff"),
    list(2, 1570323012, "dropoff"),
    list(2, 1570322092, "eaten")
  )
  total_time(input) |> expect_equal(4754)
})
