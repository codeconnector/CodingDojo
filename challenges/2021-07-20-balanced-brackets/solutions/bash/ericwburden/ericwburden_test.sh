# # Balanced Brackets
# 
# Given a string of round, curly, and square open and closing brackets, return whether
# the brackets are balanced (well-formed).
# 
# For example, given the string "([])[]({})", you should return "TRUE".
# Given the string "([)]" or "((()", you should return "FALSE".
# 
# # Business Rules/Errata
# 
# - The only characters considered to be 'brackets' are `(`, `)`, `[`, `]`, `{`, and `}`.
# - Your input will always be a string.
# - An empty string is considered balanced (return "TRUE").
# - **Your string may contain characters that are not brackets.**
# 
# # Examples
# 
# ```
# balanced_brackets("(())({}[])" ))   // "TRUE"
# balanced_brackets("((({}[])" ))     // "FALSE"
# balanced_brackets("" ))             // "TRUE"
# balanced_brackets("(5 * 3) + 4" ))  // "TRUE"
# ```

#!/bin/bash

#--------------------------------------------------------------------------------------- 
#-- Bash Tests! / Run with `bats ericwburden_test.sh` 
#-- Need [bats](https://github.com/sstephenson/bats)
#--------------------------------------------------------------------------------------- 

@test "Can identify a balanced string" {
    run bash ericwburden.sh '(())({}[])'
    (( status == 0 ))
}

@test "Can identify an unbalanced string" {
    run bash ericwburden.sh '((({}[])'
    (( status == 1 ))
}

@test "Can correctly handle empty strings as input" {
    run bash ericwburden.sh ''
    (( status == 0 ))
}

@test "Ignores non-brackets" {
    run bash ericwburden.sh '(5 * 3) + [10 / {2}]'
    (( status == 0 ))
}

@test "Handles sequences of single bracket types" {
    run bash ericwburden.sh ')]})]}'
    (( status == 1 ))

    run bash ericwburden.sh '([{((('
    (( status == 1 ))
}

@test "Handles strings with characters but no brackets" {
    run bash ericwburden.sh 'no brackets at all'
    (( status == 0 ))
}

@test "Handles strings containing special characters" {
    run bash ericwburden.sh '>>> (<> are not brackets) >>>'
    (( status == 0 ))

    run bash ericwburden.sh '[///\\|||]'
    (( status == 0 ))

    run bash ericwburden.sh '!@#\$%%^&*(;,.<>?/\|~`'
    (( status == 1 ))
}

@test "Can handle brackets balanced the wrong way" {
    run bash ericwburden.sh ')}][{('
    (( status == 1 ))
}
