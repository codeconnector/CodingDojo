# # Balanced Brackets
# 
# Given a string of round, curly, and square open and closing brackets, return whether
# the brackets are balanced (well-formed).
# 
# For example, given the string "([])[]({})", you should return true.
# Given the string "([)]" or "((()", you should return false.
# 
# # Business Rules/Errata
# 
# - The only characters considered to be 'brackets' are `(`, `)`, `[`, `]`, `{`, and `}`.
# - Your input will always be a string.
# - An empty string is considered balanced (return true).
# - **Your string may contain characters that are not brackets.**
# 
# # Examples
# 
# ```
# balanced_brackets("[[]]({}[])");   // true
# balanced_brackets("[[({}[])");     // false
# balanced_brackets("");             // true
# balanced_brackets("(5 * 3) + 4");  // true
# ```

#!/bin/bash

#--------------------------------------------------------------------------------------- 
#-- Runs the script and exits successfully if the input is balanced according to the
#-- rules, or exits with an error if the input is unbalanced
#--------------------------------------------------------------------------------------- 

# Start by stripping all the non-bracket characters from the input string
CURRENT="$(echo "$1" | sed -e 's/[^][)(}{]*//g')"

# Repeatedly remove all pairs of brackets: '()', '[]', '{}'
# When there's no change from the last iteration, this means all pairs are gone
while [[ $CURRENT != $PREVIOUS ]]; do
    PREVIOUS=$CURRENT
    CURRENT="$(echo $CURRENT | sed 's/()//g; s/\[\]//g; s/{}//g')"
done

# If you're left with an empty string, then all the brackets must have been balanced
# Otherwise, there will be at least one stray unmatched bracket in $CURRENT
if [[ $CURRENT == "" ]]; then
    exit 0
else 
    exit 1
fi
