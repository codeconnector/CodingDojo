#!/bin/bash

# Note: This script will execute as if in the path from which it is called

# Runs the JUnit5 tests
run_test() {
    # Get a list of all files in the current directory that end in `.java`
    java_files=$(ls | grep java)

    # Compile the source and test files for this challenge, put the *.class files
    # in the 'out/' folder. Include the JUnit standalone .jar in the classpath.
    javac -d out -cp ../../resources/java/junit5-1.8.0-M1.jar $java_files

    # Run the standalone JUnit testrunner with desired options, on the *.class files
    # in the 'out/' folder.
    java -jar ../../resources/java/junit5-1.8.0-M1.jar \
         --classpath out \
         --scan-class-path \
         --details tree \
         --include-classname '.*'
}

found_tests_ptrn='[[:digit:]] tests found'
passed_tests_ptrn='[[:digit:]] tests successful'
failed_tests_ptrn='[[:digit:]] tests failed'

# ------------------------------------------------------------------------------
# Main Script ------------------------------------------------------------------
# ------------------------------------------------------------------------------

# Run the tests and assign the results to a variable
test_result=$(run_test)

# Remove the ./out directory and *.class files
rm -rf out

# Get number of tests total
total_tests=$(echo $test_result | grep -o -e "${found_tests_ptrn}" | awk '{print $1}')

# Get number of tests passed
tests_passed=$(echo $test_result | grep -o -e "${passed_tests_ptrn}" | awk '{print $1}')

# Get number of failed tests
tests_failed=$(echo $test_result | grep -o -e "${failed_tests_ptrn}" | awk '{print $1}')

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
    echo -e "    ${BLU}solutions/java/<githubusername>${CLR} folder."
    echo -e "  - Copy the *source* ('.java') file containing your solution to"
    echo -e "    ${BLU}solutions/java/<githubusername>/<githubusername>.java${CLR}."
    echo -e "  - If you have not already created a ${BLU}<githubusername>${CLR}-wip branch,"
    echo -e "    use ${YLW}git switch -c <githubusername>-wip${CLR} to move your changes to"
    echo -e "    that branch"
    echo -e "  - From your WIP branch, use ${YLW}git add solutions/java/<githubusername>/<githubusername>.java${CLR}"
    echo -e "    to add your changes to the current commit"
    echo -e "  - Commit and push your changes: ${YLW}git commit${CLR}, then ${YLW}git push${CLR}."
    echo -e "  - Navigate to ${WHT}https://github.com/codeconnector/CodingDojo${CLR} and submit your"
    echo -e "    pull request"
    echo -e "\n"
fi

