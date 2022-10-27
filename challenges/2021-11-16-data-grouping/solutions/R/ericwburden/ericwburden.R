# # Data Grouping in a Large Text File
#
# Given a tab delimited text file with two columns with a header:
# `['HighSchool Year', 'ACT Score']`, complete the following tasks:
# 1. Group the data by `HighSchool Year` and return the mean and median
#    `ACT Score` of each year.
# 2. Return the number of scores greater than 25.
# 3. Return the number of sophomore scores greater than 25 and less than 30.
# 4. Return the mean of only the sophomore and junior scores.
#
# As a bonus, plot the mean score as a function high school year and determine
# if there is a correlation between test scores and high school year.

suppressPackageStartupMessages({
  library(dplyr)
  library(readr)
  library(testthat)
})


read_hs_act_scores <- function(path) {
  col_spec <- cols("HighSchool Year" = col_factor(), "ACT Score" = col_number())
  data <- readr::read_tsv(path, col_types = col_spec) # Read the data

  # Tag the dataframe to assure further functions it's the one we want
  class(data) <- append("hs_act_scores", class(data))

  data # Return the data
}


# Generic dispatch for `score_summaries`
calc_score_summaries <- \(x) UseMethod("calc_score_summaries", x)

calc_score_summaries.hs_act_scores <- function(df) {
  (df
    |> group_by(`HighSchool Year`)
    |> summarise(
      `Mean ACT Score`   = mean(`ACT Score`),
      `Median ACT Score` = median(`ACT Score`),
      `Score Count`      = n(),
    ))
}


# Generic dispatch for `scores_in_range`
calc_scores_in_range <- \(x, ...) UseMethod("calc_scores_in_range", x)

calc_scores_in_range.hs_act_scores <- function(df, low = 0, high = 36) {
  # Validate the arguments
  stopifnot(low >= 0)
  stopifnot(high <= 36)
  stopifnot(low <= high)

  dplyr::filter(df, `ACT Score` >= low, `ACT Score` <= high)
}


calc_requested_summaries <- \(x, ...) UseMethod("calc_requested_summaries", x)

calc_requested_summaries.hs_act_scores <- function(df) {
  summaries <- list()
  class(summaries) <- "hs_act_scores_summary"

  summaries[["Score Summaries by Year"]] <- calc_score_summaries(df)

  (summaries["Scores Over 25 Count"]
    <- calc_scores_in_range(df, 26)
    |> nrow())

  (summaries["Sophomore Scores Between 25 and 30 Count"]
    <- calc_scores_in_range(df, 26, 29)
    |> filter(`HighSchool Year` == "Sophomore")
    |> nrow())

  (summaries["Sophomore and Junior Score Mean"]
    <- calc_score_summaries(df)
    |> filter(`HighSchool Year` %in% c("Sophomore", "Junior"))
    |> mutate(`Weighted Score` = `Mean ACT Score` * `Score Count`)
    |> summarise(`Mean ACT Score` = sum(`Weighted Score`) / sum(`Score Count`))
    |> pull(`Mean ACT Score`)
    |> round(2))

  summaries
}

# Tests ------------------------------

HS_ACT_FILE_PATH <- "../../../HS_ACT_Data.txt"

# Syntactic sugar for x[[name]]
grab <- \(x, name) x[[name]]

test_that("Per-Group summary values are calculated correctly", {
  (score_summaries
    <- HS_ACT_FILE_PATH
    |> read_hs_act_scores()
    |> calc_requested_summaries()
    |> grab("Score Summaries by Year"))

  # Freshman Mean/Median
  freshman_summaries <- filter(score_summaries, `HighSchool Year` == "Freshman")

  (freshman_summaries
    |> pull(`Mean ACT Score`)
    |> expect_equal(24.4, tolerance = 0.01))

  (freshman_summaries
    |> pull(`Median ACT Score`)
    |> expect_equal(23, tolerance = 0.01))

  # Sophomore Mean/Median
  sophomore_summaries <- filter(score_summaries,
                                `HighSchool Year` == "Sophomore")
  (sophomore_summaries
    |> pull(`Mean ACT Score`)
    |> expect_equal(25.0, tolerance = 0.01))

  (sophomore_summaries
    |> pull(`Median ACT Score`)
    |> expect_equal(24, tolerance = 0.01))

  # Junior Mean/Median
  junior_summaries <- filter(score_summaries, `HighSchool Year` == "Junior")
  (junior_summaries
    |> pull(`Mean ACT Score`)
    |> expect_equal(24.6, tolerance = 0.01))

  (junior_summaries
    |> pull(`Median ACT Score`)
    |> expect_equal(24, tolerance = 0.01))

  # Senior Mean/Median
  senior_summaries <- filter(score_summaries, `HighSchool Year` == "Senior")
  (senior_summaries
    |> pull(`Mean ACT Score`)
    |> expect_equal(25.2, tolerance = 0.01))

  (senior_summaries
    |> pull(`Median ACT Score`)
    |> expect_equal(25, tolerance = 0.01))
})

test_that("Correctly count total scores over 25", {
  (HS_ACT_FILE_PATH
    |> read_hs_act_scores()
    |> calc_requested_summaries()
    |> grab("Scores Over 25 Count")
    |> expect_equal(730))
})

test_that("Correctly count Sophomore scores greater than 25 and less than 30", {
  (HS_ACT_FILE_PATH
    |> read_hs_act_scores()
    |> calc_requested_summaries()
    |> grab("Sophomore Scores Between 25 and 30 Count")
    |> expect_equal(84))
})

test_that("Correctly calculate mean scores for Sophomores and Juniors, only", {
  (HS_ACT_FILE_PATH
    |> read_hs_act_scores()
    |> calc_requested_summaries()
    |> grab("Sophomore and Junior Score Mean")
    |> expect_equal(24.71, tolerance = 0.01))
})

# Example --------------------------

cat("\n ---Example Result---\n")
(example <- HS_ACT_FILE_PATH
  |> read_hs_act_scores()
  |> calc_requested_summaries())
