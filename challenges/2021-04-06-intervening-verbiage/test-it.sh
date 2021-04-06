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

# Copies the solution file and attempts to commit to GitHub
commit_solution() {
    # Collect the GitHub username
    read -p 'Please enter your GitHub username: ' guser

    # Check the current branch name, should be githubusername-wip
    current_branch=$(git branch --show-current)

    # If the user isn't on the 'githubusername-wip', move to that one
    [[ current_branch != "${guser}-wip" ]] && git checkout -b "${guser}-wip"

    # Copy the modified source file to the 'solutions/' directory, renaming to your
    # GitHub username
    mkdir -p solutions  # In case the directory doesn't exist
    cp -L mob.java "solutions/${guser}.java"

    # Add the solution file to the current commit, commit with a default commit 
    # message, then push the commit. You may be prompted for your username and
    # password if using HTTP with GitHub.
    git add "solutions/${guser}.java"
    git commit -am "Submitting solution to '${PWD##*/}' for ${guser}"
    git push
}


# ------------------------------------------------------------------------------
# Main Script ------------------------------------------------------------------
# ------------------------------------------------------------------------------

# Run the tests and assign the results to a variable
test_result=$(run_test)

# Get number of failed tests
tests_failed=$(echo $test_result | grep -o -e '[[:digit:]] tests failed' | awk '{print $1}')


# If any tests failed, print the test output back to the console and exit. If 
# all tests passed, then offer to run the commit script to commit the solution 
# to GitHub.
if (("$tests_failed" > 0)); then 
    echo "You failed ${tests_failed} tests! Here's what happened:"
    echo "$test_result"
else 
    echo -e "\n\u2b50\u2b50 \e[1;32mYou passed the tests!\e[0m \u2b50\u2b50\n"
    read -p "Do you wish to commit your solution (y/N)? " do_commit
    [[ $do_commit == [yY] ]] && commit_solution || echo "Ok, maybe later."
fi

