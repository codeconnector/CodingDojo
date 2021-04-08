#!/bin/bash

# Runs the JUnit5 tests
run_test() {
    # Compile the source and test files for this challenge, put the *.class files
    # in the 'out/' folder. Include the JUnit standalone .jar in the classpath.
    javac -d out -cp lib/junit-platform-console-standalone-1.8.0-M1.jar \
        src/main/java/io/codeconnector/codedojo/InterveningVerbiage.java \
        src/test/java/io/codeconnector/codedojo/InterveningVerbiageTest.java 

    # Run the standalone JUnit testrunner with desired options, on the *.class files
    # in the 'out/' folder.
    java -jar lib/junit-platform-console-standalone-1.8.0-M1.jar \
        --class-path out \
        --scan-class-path \
        --details=tree
}

found_tests_ptrn='[[:digit:]] tests found'
passed_tests_ptrn='[[:digit:]] tests successful'
failed_tests_ptrn='[[:digit:]] tests failed'

# ------------------------------------------------------------------------------
# Main Script ------------------------------------------------------------------
# ------------------------------------------------------------------------------

# Run the tests and assign the results to a variable
test_result=$(run_test)

# Get number of tests total
total_tests=$(echo $test_result | grep -o -e "${found_tests_ptrn}" | awk '{print $1}')

# Get number of tests passed
tests_passed=$(echo $test_result | grep -o -e "${passed_tests_ptrn}" | awk '{print $1}')

# Get number of failed tests
tests_failed=$(echo $test_result | grep -o -e "${failed_tests_ptrn}" | awk '{print $1}')


# Abort if something unexpected happens
[[ -z $total_tests ]] && echo "\nSomething went wrong:\n" && echo "$test_result" && exit 1

# Define colors
BLU='\033[1;34m'
GRN='\033[1;32m'
YLW='\033[1;33m'
WHT='\033[1;37m'
CLR='\033[0m'

# If any tests failed, print the test output back to the console and exit. If
# all tests passed, then offer to run the commit script to commit the solution
# to GitHub.
if (("$tests_failed" > 0)); then
    echo -e "\n${WHT}You failed ${tests_failed}/${total_tests} tests! Here's what happened:${CLR}"
    echo "$test_result"
else
    echo -e "\n\u2b50\u2b50 ${GRN}You passed the tests!${CLR} \u2b50\u2b50\n"
    echo -e "To commit your solution, remember to:"
    echo -e "  - Copy the *source* file in ${BLU}/src/main/java/io/codeconnector/codedojo${CLR} to"
    echo -e "    the solutions folder, renaming it to [yourgithubusername.java]"
    echo -e "  - If you have not already created a yourgithubusername-wip branch,"
    echo -e "    use ${YLW}git switch -c yourgitubusername-wip${CLR} to move your changes to"
    echo -e "    that branch"
    echo -e "  - From your WIP branch, use ${YLW}git add solutions/yourgithubusername.java${CLR}"
    echo -e "    to add your changes to the current commit"
    echo -e "  - Commit and push your changes: ${YLW}git commit${CLR}, then ${YLW}git push${CLR}."
    echo -e "  - Navigate to ${WHT}https://github.com/codeconnector/CodingDojo${CLR} and submit your"
    echo -e "    pull request"
    echo -e "\n"
fi

