# ZigZag Print

Given a string and a number of lines k, print the string in zigzag form. In zigzag, characters are printed out diagonally from top left to bottom right until reaching the kth line, then back up to top right, and so on.

For example, given the sentence "thisisazigzag" and k = 4, you should print:

```
t     a     g
 h   s z   a
  i i   i z
   s     g
```

## Business Rules/Errata

- The input will include a string and a positive integer between 2 and 10. 
- Your output should be in the form of a string that, when printed to console, will yield the desired pattern. See examples below.
- Your string may contain any valid ASCII letter, number, space, or printable special character ('!', '@', '#', '$', etc.). Importantly, control characters such as '\t', '\n', '\r', '\v', etc. will not be included.
- Spaces should be included in your output pattern.

## Examples

```
printzigzag("bismarcks", 3)  // "b   a   s\n i m r k \n  s   c  "
b   a   s
 i m r k
  s   c


printzigzag("thisisazigzag", 4)  // "t     a     g\n h   s z   a \n  i i   i z  \n   s     g   "
t     a     g
 h   s z   a
  i i   i z
   s     g


printzigzag("ilovechickenandwaffles", 5)  // "i       c       a     \n l     i k     w f    \n  o   h   e   d   f   \n   v c     n n     l s\n    e       a       e "
i       c       a
 l     i k     w f
  o   h   e   d   f
   v c     n n     l s
    e       a       e
```

## Tackling This Challenge

1. Make sure you've got the required software on your machine: npm 7.9.0+ and a text editor.
2. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
3. Navigate to this directory and run `npm install` to initialize the project.
4. The challenge will be live-coded in our weekly Tusday meetup in the `solution.js` file.
5. Run the tests to check your solution by navigating to this directory and running `./run-tests`.
6. The results of the live coding demo will be added to the GitHub repository as a mob solution. Please feel free to tackle this challenge in your own way/language and submit your solution to the repo using [this solutions guide in our wiki](https://github.com/codeconnector/CodingDojo/wiki#solutions).

## Requirements

- npm 7.9.0+
