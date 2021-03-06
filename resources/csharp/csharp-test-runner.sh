#!/bin/bash

# Note: This script will execute as if in the path from which it is called

# ------------------------------------------------------------------------------
# Main Script ------------------------------------------------------------------
# ------------------------------------------------------------------------------

# Run the tests and assign the results to a variable
test_result=$(dotnet test)
last_line="$(echo "$test_result" | tail -1)"

# Get number of tests total
total_tests=$(echo $last_line | awk '{print $10}' | grep -o '[0-9]\+')

# Get number of tests passed
tests_passed=$(echo $last_line | awk '{print $6}' | grep -o '[0-9]\+')

# Get number of failed tests
tests_failed=$(echo $last_line | awk '{print $4}' | grep -o '[0-9]\+')

# Abort if something unexpected happens
[[ -z $total_tests ]] || (($total_tests == 0)) && echo -e "\n\U1F92F Something went wrong!\n" && echo "$test_result" && exit 1

# Define colors
BLU='\033[1;34m'
GRN='\033[1;32m'
YLW='\033[1;33m'
WHT='\033[1;37m'
CLR='\033[0m'

# If any tests failed, print the test output back to the console and exit. If
# all tests passed, then provide instructions for submitting a PR
if (("$tests_failed" > 0)); then
    echo -e "\n${WHT}You failed ${tests_failed}/${total_tests} tests! Here's what happened:${CLR}"
    echo "$test_result"
else
    echo -e "\n\u2b50\u2b50 ${GRN}You passed the tests!${CLR} \u2b50\u2b50\n"
    echo -e "To commit your solution, remember to:"
    echo -e "  - If there's not one already, create a"
    echo -e "    ${BLU}solutions/csharp/<githubusername>${CLR} folder."
    echo -e "  - Copy the *source* ('.cs') file containing your solution to"
    echo -e "    ${BLU}solutions/csharp/<githubusername>/<githubusername>.cs${CLR}."
    echo -e "  - If you have not already created a ${BLU}<githubusername>${CLR}-wip branch,"
    echo -e "    use ${YLW}git switch -c <githubusername>-wip${CLR} to move your changes to"
    echo -e "    that branch"
    echo -e "  - From your WIP branch, use ${YLW}git add solutions/csharp/<githubusername>/<githubusername>.cs${CLR}"
    echo -e "    to add your changes to the current commit"
    echo -e "  - Commit and push your changes: ${YLW}git commit${CLR}, then ${YLW}git push${CLR}."
    echo -e "  - Navigate to ${WHT}https://github.com/codeconnector/CodingDojo${CLR} and submit your"
    echo -e "    pull request"
    echo -e "\n"
fi

