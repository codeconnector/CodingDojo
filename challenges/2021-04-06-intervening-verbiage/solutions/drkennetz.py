#!/usr/bin/env python3

"""
# Intervening Verbiage

Given two words in a string of words, count the number of other words between the two words you are given.

## Business Rules/Errata

- Your solution will take in three pieces of input: a string containing a space-separated list of words, and two other strings representing the first and second words, respectively.
- You may ignore all punctuation and capitalization.
- If your two words are not in the string of words, alert the user to an error.
- You should return a count of the words between your two words as an integer, not the words themselves.
- If your words appear multiple times in the list of words, count words that fall between the first instance of each.

## Examples

```
list_of_words = "There was an old lady who lived in an outhouse";
count_words_between("lady", "outhouse", list_of_words)  // 4 
count_words_between("an", "outhouse", list_of_words)    // 6
```

- The words 'who', 'lived', 'in', 'an' appear between 'lady' and 'outhouse'.
- The words 'old', 'lady', 'who', 'lived', 'in', 'an' appear between the first instance of 'an' and 'outhouse'.

## Tackling This Challenge

1. Make sure you've got the required software on your machine: A JDK 11+
1. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
1. Checkout a new branch using `git checkout -b yourgithubusername-wip`.
1. Add your code to the 'mob.java' file to make the `countWordsBetween` function work as expected.
1. Confirm your solution by running tests. Execute the `test-it.sh` script (use `./test-it.sh` from the challenge root directory.
1. If you've passed all the tests, the `test-it.sh` script with help you commit it. Otherwise, try again to pass all tests.
1. Navigate to [GitHub](https://github.com/codeconnector/CodingDojo), and submit your pull request.
1. One of the CodingDojo maintainers will help you get your PR merged.

## Requirements

- JDK 11+
"""

import unittest

def count_words_between(start, stop, words):
    """ Count the number of words between the start and stop word """
    word_list = words.lower().split(' ')
    count = 0
    counting = False
    for word in word_list:
        if word == stop.lower():
            return count
        if counting:
            count += 1
        if word == start.lower():
            counting = True
    return "One of the start or stop words was not in the sentence."
    
class TestCountWordsBetween(unittest.TestCase):
    def setUp(self):
        self.start_words = ["lady", "an", "frankly", "I"]
        self.stop_words = ["outhouse", "outhouse", "absurd", "very"]
        self.res = [4, 6, "One of the start or stop words was not in the sentence.", 1]
        self.words = ["There was an old lady who lived in an outhouse", "There was an old lady who lived in an outhouse",
                      "There was an old lady who lived in an outhouse", 'There was an igloo that I liked very much']

    def test_count_words_between(self):
        count = 1
        for start, stop, sentence, res in zip(self.start_words, self.stop_words, self.words, self.res):
            actual_result = count_words_between(start, stop, sentence)
            if actual_result == res:
                status = "SUCCESS"
            else:
                status = "FAIL"
            print("Test %i: "%count, "Start Word: %s" %start, "Stop Word: %s" %stop, "\n", "Input Sentence: %s" %sentence, "\n",
                  "Expected Result: ", res, "Actual Result: ", actual_result, "Status: %s" %status)
            count += 1

    def tearDown(self):
        pass

if __name__ == "__main__":
    unittest.main()
