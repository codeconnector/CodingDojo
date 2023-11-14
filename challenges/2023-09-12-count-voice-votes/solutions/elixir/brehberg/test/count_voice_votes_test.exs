defmodule CountVoiceVotesTest do
  use ExUnit.Case

  doctest CountVoiceVotes

  test "Correctly count with only one name" do
    votes = ["eric"]
    expected = "eric"
    assert CountVoiceVotes.count(votes) == expected
  end

  # @tag :pending
  test "Correctly count with two names in a short array" do
    votes = ["eric", "corey", "corey", "eric", "corey"]
    expected = "corey"
    assert CountVoiceVotes.count(votes) == expected
  end

  # @tag :pending
  test "Correctly count with two names in another short array" do
    votes = ["corey", "eric", "corey", "corey", "eric"]
    expected = "corey"
    assert CountVoiceVotes.count(votes) == expected
  end

  # @tag :pending
  test "Correctly count with hecklers" do
    votes = [
      "i like to move it move it",
      "eric",
      "corey",
      "corey",
      "the voting machine was hacked",
      "eric",
      "corey",
      "corey",
      "i voted third party",
      "corey",
      "eric",
      "corey",
      "it's nuk-U-lar",
      "corey",
      "corey",
      "eric",
      "corey",
      "corey",
      "corey",
      "eric"
    ]

    expected = "corey"
    assert CountVoiceVotes.count(votes) == expected
  end

  # @tag :pending
  test "Count lots of votes" do
    votes =
      for i <- 1..100_000 do
        cond do
          rem(i, 2) == 0 -> "bret"
          rem(i, 3) == 0 -> "corey"
          rem(i, 5) == 0 -> "eric"
          true -> "blame canada"
        end
      end

    expected = "bret"
    assert CountVoiceVotes.count(["bret" | votes]) == expected
  end
end
