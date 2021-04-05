#!/bin/bash

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

commit_solution() {
    # Collect the GitHub username
    read -p 'Please enter your GitHub username: ' guser
    solution_file = "solutions/${guser}.java"

    # Copy the modified source file to the 'solutions/' directory, renaming to your
    # GitHub username
    cp -L mob.java "${solution_file}"

    # Add the solution file to the current commit, commit with a default commit 
    # message, then push the commit. You may be prompted for your username and
    # password if using HTTP with GitHub.
    git add "${solution_file}"
    git commit -am "Submitting solution to '${PWD##*/}' for ${guser}"
    git push
}

run_test > test.result

if grep $'\u2718' test.result; then 
    echo "You failed the tests! Here's what happened:"
    cat test.result
else 
    read -p "You passed the tests! Do you wish to commit your solution (y/N)? " do_commit
    [[ $do_commit == [yY] ]] && commit_solution
fi

# rm test.result

