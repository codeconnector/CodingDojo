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

    # Copy the modified source file to the 'solutions/' directory, renaming to your
    # GitHub username
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

# Run the tests and pipe the results to a temp file
tmpfile=$(mktemp /tmp/intervening-verbiage-test.XXXXXX)
run_test > "$tmpfile"

if grep $'\u2718' "$tmpfile"; then 
    echo "You failed the tests! Here's what happened:"
    cat "$tmpfile"
else 
    read -p "You passed the tests! Do you wish to commit your solution (y/N)? " do_commit
    [[ $do_commit == [yY] ]] && commit_solution
fi

rm "$tmpfile"

