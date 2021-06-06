#!/bin/bash

# ------------------------------------------------------------------------------
# Main Script ------------------------------------------------------------------
# ------------------------------------------------------------------------------

# Run the tests and assign the results to a variable
test_result=$(CI=true npm test 2>&1 | grep "Tests")

# Get number of tests total
tests_passed=$(echo $test_result | grep -o -e "[[:digit:]] passed" | awk '{print $1}')
tests_failed=$(echo $test_result | grep -o -e "[[:digit:]] failed" | awk '{print $1}')
tests_total=$(echo $test_result | grep -o -e "[[:digit:]] total" | awk '{print $1}')

tests_failed=${tests_failed:-0}

# Define colors
BLU='\033[1;34m'
GRN='\033[1;32m'
YLW='\033[1;33m'
WHT='\033[1;37m'
CLR='\033[0m'

# Abort if something unexpected happens
if [[ -z $test_result ]]; then
    echo "\nSomething went wrong (maybe try ${YLW}npm install${CLR}):\n" 
    npm test 
    exit 1
fi

# If any tests failed, print the test output back to the console and exit. If
# all tests passed, then provide instructions for submitting a PR
if (("$tests_failed" > 0)); then
    echo -e "\n${WHT}You failed ${tests_failed}/${tests_total} tests! Here's what happened:${CLR}"
    npm test
else
    echo -e "\n\u2b50\u2b50 ${GRN}You passed the tests!${CLR} \u2b50\u2b50\n"
    echo -e "To commit your solution, remember to follow the instructions at ${YLW}https://github.com/codeconnector/CodingDojo/wiki#solutions${CLR}"
    echo -e "\n"
fi
