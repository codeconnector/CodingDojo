#!/bin/bash

# Collect the GitHub username
echo 'Please enter your GitHub username:'
read guser

# Copy the modified source file to the 'solutions/' directory, renaming to your
# GitHub username
cp -L mob.java solutions/"${guser}.java"

# Add the solution file to the current commit, commit with a default commit 
# message, then push the commit. You may be prompted for your username and
# password if using HTTP with GitHub.
git add "solutions/${guser}.java"
git commit -am "Submitting solution to '2021-04-06-intervening-verbiage' for ${guser}"
git push