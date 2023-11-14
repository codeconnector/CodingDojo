# Mirror Words
It's "creative vision", or at least that's what the director told you. As an intern on the set of Ghost House 4: The Mirror World, you're just happy that someone else is getting yelled at for the coffee order today. When the director found out that you could code, though, you got your chance to really stand out! As part of the movie plot, the director wants the "ghosts" to write messages on the _inside_ of mirrors in the house, but, of course, those messages will be flipped! According to the director, this will make the audience lean in and focus on the words, priming them for the 15th jump scare in the film. However, the director doesn't want to waste his _own_ time figuring out how to write those messages in reverse, so he's asked you to do it. Despite the fact that you're pretty sure reversing the letters in each word isn't how mirrors actually work, you don't get paid to argue! Your job is to write a function that will take a whitespace-separated list of words and return that list of words in the same order, but with the letters reversed!

## Rules
- Write a function that accepts as its argument a whitespace-separated string and returns that same string where each word has its letters reversed.
- Since this is your first assignment, the words will always be separated by a single space and there will be no punctuation.
- Letters in the output should also appear as the same case as they appeared in the input.
- The reverse of an empty string is an empty string.
- The reverse of a word with only one letter is just that letter.
- You may also un-comment some additional test cases that add complexity to the function. These are not required to solve the puzzle.

## Example

```
reverseWords("I know what you did last summer") -> "I wonk tahw uoy did tsal remmus"
reverseWords("") -> ""
reverseWords("a b c") -> "a b c"
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
