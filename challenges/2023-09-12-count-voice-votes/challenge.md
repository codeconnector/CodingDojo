# Count Voice Votes
You were just trying to be helpful, really, but when you tried to explain to your friend on the local town council just how easy it would be to go about counting the votes for the upcoming election, you had no idea what you were getting yourself into. Now you've been roped into helping out with the vote counting, and things are even more complicated than you could have imagined. The "idea" is simple enough, whichever candidate gets more than half the votes is the winner, and since there are only two candidates, it should be a cakewalk. The only trouble is, the town ordinances require the election to be carried out by "voice vote", which means everyone stands in the town square and shouts the name of their preferred candidate. Through a stroke of good fortune, the town has already invested in a brand new device to convert those shouts into actual data, which means you're only on the hook for setting it up and writing the algorithm to count the votes. 

## Rules
- Write a function that accepts as its argument a list of names and returns the name that accounts for over half of all names.
- Expect each name to appear multiple times, once for each vote cast for that person.
- The vote detector only records votes as candidate names in lowercase.
- You may assume that your list will contain at least one name, and that one name will account for over half the names in the list.
- Unfortunately, these townsfolk are somewhat irascible, and there are a few folks who will just shout random nonsense to try to disrupt the process. The list may contain more than two distinct names.
- There's more than one way to write this function. How efficient can you be?

## Example

```
count_votes(["mary", "mary", "mary", "michael", "michael"]); -> "mary"
count_votes(["michael"]) -> "michael"
count_votes(["mary", "michael", "down with tyranny", "fake news", "mary"]) -> "mary"
```

## Tackling This Challenge
1. Make sure you've got the required software on your machine: npm 7.9.0+ and a text editor.
2. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
3. Navigate to this directory and run `npm install` to initialize the project.
4. The challenge will be live-coded in our weekly Tuesday meetup in the `solution.js` file.
5. Run the tests to check your solution by navigating to this directory and running `./run-tests`.
6. The results of the live coding demo will be added to the GitHub repository as a mob solution. Please feel free to
tackle this challenge in your own way/language and submit your solution to the repo using [this solutions guide in our wiki](https://github.com/codeconnector/CodingDojo/wiki#solutions).

## Requirements

- npm 7.9.0+
