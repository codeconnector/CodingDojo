defmodule CountVoiceVotes do
  @moduledoc """
  ## Rules

    - Write a function that accepts as its argument a list of names and returns
      the name that accounts for over half of all names.
    - Expect each name to appear multiple times, once for each vote cast for
      that person.
    - The vote detector only records votes as candidate names in lowercase.
    - You may assume that your list will contain at least one name, and that
      one name will account for over half the names in the list.
    - Unfortunately, these townsfolk are somewhat irascible, and there are a
      few folks who will just shout random nonsense to try to disrupt the
      process. The list may contain more than two distinct names.
    - There's more than one way to write this function. How efficient can you
      be?

  ## Examples

    iex> CountVoiceVotes.count(["mary", "mary", "mary", "michael", "michael"])
    "mary"
    iex> CountVoiceVotes.count(["michael"])
    "michael"
    iex> CountVoiceVotes.count(["mary", "michael", "down with tyranny", "fake news", "mary", "mary", "mary"])
    "mary"
  """
  @spec count([String.t()]) :: String.t()
  def count(votes) do
    votes
    |> Enum.frequencies()
    |> Enum.max_by(&elem(&1, 1))
    |> elem(0)
  end
end
