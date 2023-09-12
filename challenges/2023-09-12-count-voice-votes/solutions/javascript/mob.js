// # Count Voice Votes
// ## Rules
// - Write a function that accepts as its argument a list of names and returns
//   the name that accounts for over half of all names.
// - Expect each name to appear multiple times, once for each vote cast for
//   that person.
// - The vote detector only records votes as candidate names in lowercase.
// - You may assume that your list will contain at least one name, and that
//   one name will account for over half the names in the list.
// - Unfortunately, these townsfolk are somewhat irascible, and there are a
//   few folks who will just shout random nonsense to try to disrupt the
//   process. The list may contain more than two distinct names.
// - There's more than one way to write this function. How efficient can you
//   be?
//
// ## Example
//
// ```
// countVotes(["mary", "mary", "mary", "michael", "michael"]); -> "mary"
// countVotes(["michael"]) -> "michael"
// countVotes(["mary", "michael", "down with tyranny", "fake news", "mary"]) -> "mary"
// ```

function countVotes(votes) {
  let tally = {};
  for (const name of votes) {
    if (tally[name]) {
      tally[name] += 1

    } else {
      tally[name] = 1
    }
    if (tally[name] > votes.length / 2) {
      return name
    }

  }
}
//iterate over array
//find what are names and what are random comments-store numbers each string reapeats
//  does it matter what is a vote and what is nonsense?
//count names-find string that appears most
//return name of winner






module.exports = { countVotes };
